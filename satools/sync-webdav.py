#!/usr/bin/python3 -u

import base64
import calendar
import common
import errno
import http.client
import lxml.builder
import lxml.etree
import lxml.html
import os
import queue
import sys
import threading
import time
import urllib.parse
import urllib.request

class FileSet(object):
    def __init__(self, root):
        self.lock = threading.Lock()
        self.dirs = set([root])
        self.files = set()
        self.ignoredirs = set()
        self.dirty = False

        while "/" in root:
            root = root.rsplit("/", 1)[0]
            self.dirs.add(root)

    def add_dir(self, dir_):
        with self.lock:
            self.dirty = True
            self.dirs.add(dir_)

    def ignore_dir(self, dir_):
        with self.lock:
            self.ignoredirs.add(dir_)

    def add_file(self, file_):
        with self.lock:
            self.dirty = True
            self.files.add(file_)

class LockedList(object):
    def __init__(self):
        self.lock = threading.Lock()
        self.list = []

    def append(self, x):
        with self.lock:
            self.list.append(x)

class ListFailure(Exception):
    pass

tls = threading.local()
DAV = lxml.builder.ElementMaker(namespace = "DAV:", nsmap = {"D": "DAV:"})

consolelock = threading.Lock()
def msg(s):
    with consolelock:
        print(s, file = sys.stderr)

def ls(path, conn):
    msg("ls %s" % path)
    xml = DAV.propfind(DAV.prop(DAV.displayname, DAV.resourcetype,
                                DAV.getcontentlength, DAV.getlastmodified))
    xml = lxml.etree.tostring(xml, encoding="utf-8", xml_declaration = True)

    conn.request("PROPFIND", path, xml, {"Authorization": conn.auth,
                                         "Depth": 1})
    response = conn.getresponse()
    data = response.read()

    if response.status != 207:
        msg("ERROR: ls %s: HTTP response %u" % (path, response.status))
        raise ListFailure()

    try:
        xml = lxml.etree.fromstring(data)
    except lxml.etree.XMLSyntaxError as e:
        msg("ERROR: ls %s: XMLSyntaxError %s" % (path, e))
        raise ListFailure()

    dirs = []
    files = []

    for response in xml.find("{DAV:}response").itersiblings("{DAV:}response"):
        href = response.find("{DAV:}href").text.rstrip("/")
        if os.path.split(href)[0] != path:
            # symlink to somewhere else, don't follow it
            continue

        if response.find("{DAV:}propstat").find("{DAV:}prop").find("{DAV:}resourcetype").find("{DAV:}collection") is not None:
            # a subdirectory
            dirs.append({"path": href})

        else:
            size = int(response.find("{DAV:}propstat").find("{DAV:}prop").find("{DAV:}getcontentlength").text)
            mtime = response.find("{DAV:}propstat").find("{DAV:}prop").find("{DAV:}getlastmodified").text
            mtime = calendar.timegm(time.strptime(mtime, "%a, %d %b %Y %H:%M:%S GMT"))

            files.append({"path": href, "size": size, "mtime": mtime})

    return (dirs, files)

def ls_alfresco(path, conn):
    msg("ls %s" % path)
    conn.request("GET", path, None, {"Authorization": conn.auth})
    response = conn.getresponse()
    data = response.read()

    if response.status != 200:
        msg("ERROR: ls_alfresco %s: HTTP response %u" % (path, response.status))
        raise ListFailure()

    try:
        xml = lxml.html.fromstring(data)
    except lxml.etree.XMLSyntaxError as e:
        msg("ERROR: ls_alfresco %s: XMLSyntaxError %s" % (path, e))
        raise ListFailure()

    dirs = []
    files = []

    for row in xml.xpath("//table[@class='listingTable']//tr")[1:]:
        if len(row) != 4:  # "[Up a level]"
            continue

        href = row[0][0].get("href")

        if not row[1].text.strip():  # no indicated Size
            dirs.append({"path": href})
        elif row[2].text.strip():    # indicated Type
            mtime = row[3].text.strip()
            mtime = calendar.timegm(time.strptime(mtime, "%a, %d %b %Y %H:%M:%S GMT"))

            files.append({"path": href, "mtime": mtime})
        # otherwise it's a link to another directory or another file; ignored

    return (dirs, files)

def download(url, dest, username, password):
    pm = urllib.request.HTTPPasswordMgrWithDefaultRealm()
    pm.add_password(None, url, username, password)
    opener = urllib.request.build_opener(urllib.request.HTTPBasicAuthHandler(pm))

    common.mkdirs(os.path.split(dest)[0])
    common.retrieve(url, dest, opener = opener, tries = 10, force = True)
    common.mkro(dest)

def worker(host, username, password):
    tls.conn = http.client.HTTPSConnection(host)
    tls.conn.auth = "Basic " + base64.b64encode("%s:%s" % (username, password))

    for item in iter(q.get, "STOP"):
        item[0](*item[1:])
        q.task_done()

def needs_download(dest, f):
    try:
        st = os.stat(dest)
        if st.st_mtime == f["mtime"] and \
                ("size" not in f or st.st_size == f["size"]):
            return False

    except OSError as e:
        if e.errno == errno.ENAMETOOLONG:
            msg("ERROR: sync_webdav %s: IOError %s" % (dest, e))
            return False
        elif e.errno != errno.ENOENT:
            raise

    return True

def sync_dir(url, path, username, password, odponly, alfresco):
    try:
        if alfresco:
            (dirs, files) = ls_alfresco(path, tls.conn)
        else:
            (dirs, files) = ls(path, tls.conn)
    except ListFailure:
        fileset.ignore_dir(urllib.parse.unquote(path)[1:])
        return

    fileset.add_dir(urllib.parse.unquote(path)[1:])

    for d in dirs:
        q.put((sync_dir, url, d["path"], username, password, odponly, alfresco))

    for f in files:
        if odponly == 1 and not f["path"].endswith(".odp"):
            continue

        dest = urllib.parse.unquote(f["path"])[1:]
        fileset.add_file(dest)

        if needs_download(dest, f):
            downloadq.append((download, urllib.parse.urljoin(url, f["path"]), dest,
                              username, password))

def threads_create(numthreads, args):
    threads = []
    for i in range(numthreads):
        t = threading.Thread(target = worker, args = args)
        t.start()
        threads.append(t)
    return threads

def threads_destroy(threads):
    for t in threads:
        q.put("STOP")

    for t in threads:
        t.join()

def cleanup():
    for dirpath, dirnames, filenames in os.walk("."):
        nowalkdirs = []
        for d in dirnames:
            path = os.path.join(dirpath, d)[2:]
            if path in fileset.ignoredirs:
                nowalkdirs.append(d)

            elif path not in fileset.dirs:
                nowalkdirs.append(d)
                common.rmtree(path)

        dirnames[:] = [d for d in dirnames if d not in nowalkdirs]

        for f in filenames:
            path = os.path.join(dirpath, f)[2:]
            if not path.startswith(".") and path not in fileset.files:
                os.unlink(path)

def sync_webdav(url, dest, username, password, odponly, alfresco):
    common.mkdirs(dest)
    os.chdir(dest)

    lock = common.Lock(".lock")

    urlp = urllib.parse.urlparse(url)

    global fileset
    fileset = FileSet(urlp.path[1:])

    global downloadq
    downloadq = LockedList()

    global q
    q = queue.Queue()

    threads = threads_create(int(config["webdav-threads"]),
                             (urlp.netloc, username, password))

    q.put((sync_dir, url, urlp.path.rstrip("/"), username, password,
           int(odponly), int(alfresco)))
    q.join()

    msg("INFO: will download %u files" % len(downloadq.list))

    for d in downloadq.list:
        q.put(d)

    threads_destroy(threads)

    if fileset.dirty:
        cleanup()

    common.write_sync_done()

    lock.unlock()

if __name__ == "__main__":
    global config
    config = common.load_config()

    if int(config["webdav-threads"]) > 1:
        common.progress = lambda x, y: None
        common.progress_finish = lambda: None

    for i in config["webdav-sync"]:
        sync_webdav(*i.split(" "))
