#!/usr/bin/python -ttu

import base64
import calendar
import common
import httplib
import lxml.etree
import lxml.builder
import os
import Queue
import sys
import threading
import time
import urllib
import urllib2
import urlparse

q = Queue.Queue()
DAV = lxml.builder.ElementMaker(namespace = "DAV:", nsmap = {"D": "DAV:"})

def ls(path, conn):
    print >>sys.stderr, "ls %s" % path
    xml = DAV.propfind(DAV.prop(DAV.displayname, DAV.resourcetype,
                                DAV.getcontentlength, DAV.getlastmodified))
    xml = lxml.etree.tostring(xml, encoding="utf-8", xml_declaration = True)

    conn.request("PROPFIND", path, xml, {"Authorization": conn.auth,
                                         "Depth": 1})
    response = conn.getresponse()
    data = response.read()

    if response.status != 207:
        return ([], [])

    try:
        xml = lxml.etree.fromstring(data)
    except lxml.etree.XMLSyntaxError, e:
        print >>sys.stderr, "ERROR: %s" % e
        return ([], [])

    dirs = []
    files = []

    for response in xml.find("{DAV:}response").itersiblings("{DAV:}response"):
        href = response.find("{DAV:}href").text
        if response.find("{DAV:}propstat").find("{DAV:}prop").find("{DAV:}resourcetype").find("{DAV:}collection") is not None:
            # a directory
            dirs.append({"path": href})

        elif href.endswith("/"):
            # a symlink
            continue

        else:
            size = int(response.find("{DAV:}propstat").find("{DAV:}prop").find("{DAV:}getcontentlength").text)
            mtime = response.find("{DAV:}propstat").find("{DAV:}prop").find("{DAV:}getlastmodified").text
            mtime = calendar.timegm(time.strptime(mtime, "%a, %d %b %Y %H:%M:%S GMT"))

            files.append({"path": href, "size": size, "mtime": mtime})

    return (sorted(dirs), sorted(files))

def walk(path, conn):
    (dirs, files) = ls(path, conn)
    for d in dirs:
        for f in walk(d["path"], conn):
            yield f

    for f in files:
        yield f

def download(url, dest, username, password):
    pm = urllib2.HTTPPasswordMgrWithDefaultRealm()
    pm.add_password(None, url, username, password)
    opener = urllib2.build_opener(urllib2.HTTPBasicAuthHandler(pm))

    common.mkdirs(os.path.split(dest)[0])
    common.retrieve(url, dest, opener = opener, tries = 10)
    common.mkro(dest)

def worker():
    while True:
        item = q.get()
        item[0](*item[1:])
        q.task_done()

def sync_webdav(url, dest, username, password):
    common.mkdirs(dest)
    os.chdir(dest)

    lock = common.Lock(".lock")

    urlp = urlparse.urlparse(url)
    conn = httplib.HTTPSConnection(urlp.netloc)
    conn.auth = "Basic " + base64.b64encode("%s:%s" % (username, password))

    keep = set()
    for f in walk(urlp.path, conn):
        dlurl = urlparse.urljoin(url, f["path"])
        dest = urllib.unquote(f["path"])[1:]

        keep.add(dest)

        try:
            st = os.stat(dest)
            if st.st_mtime == f["mtime"] and st.st_size == f["size"]:
                continue
        except OSError:
            pass

        q.put((download, dlurl, dest, username, password))

    q.join()

    for dirpath, dirnames, filenames in os.walk(".", topdown = False):
        for f in filenames:
            path = os.path.relpath(dirpath, ".") + "/" + f
            if not path.startswith("./.") and path not in keep:
                print >>sys.stderr, "WOULD UNLINK %s" % path
                #os.unlink(path)

        if not os.listdir(dirpath):
            os.rmdir(dirpath)

    with open(".sync-done", "w") as f:
        pass

    lock.unlock()

if __name__ == "__main__":
    config = common.load_config()

    threads = int(config["webdav-threads"])
    if threads > 1:
        common.progress = lambda x, y: None

    for i in range(threads):
        t = threading.Thread(target = worker, name = i)
        t.daemon = True
        t.start()

    for i in config["webdav-sync"]:
        sync_webdav(*i.split(" "))
