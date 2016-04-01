#!/usr/bin/python -u

import codecs
import common
import lxml.html
import os
import Queue
import requests
import sys
import threading
import time
import traceback
import urllib
import urlparse

files = set()
lock = threading.Lock()
q = Queue.Queue()
tls = threading.local()

def log(s):
    with lock:
        print >>sys.stderr, s

def worker(cookies):
    tls.s = requests.Session()
    tls.s.cookies = cookies

    while True:
        try:
            items = q.get()
            items[0](*items[1:])
        except Exception:
            log(str(items) + "\n" + traceback.format_exc())
        q.task_done()

def want(path):
    return not (config["pt-odponly"] == "1" and not
                path.lower().endswith(".odp"))

def download(url, path):
    with lock:
        if path in files:
            return
        files.add(path)

    if os.path.exists(path):
        r = tls.s.head(url)
        mtime = common.parse_last_modified(r.headers["Last-Modified"])

        if os.path.getmtime(path) == mtime and \
           os.path.getsize(path) == int(r.headers["Content-Length"]):
            return

    common.mkdirs(os.path.dirname(path))

    log(url + " -> " + path)
    r = tls.s.get(url, stream = True)

    temppath = common.mktemppath(path)

    with open(temppath, "wb") as f:
        for data in r.iter_content(4096):
            f.write(data)

        f.flush()
        os.fsync(f.fileno())

    mtime = common.parse_last_modified(r.headers["Last-Modified"])
    os.utime(temppath, (mtime, mtime))
    common.mkro(temppath)
    common.rename(temppath, path)

def read_events(url):
    log(url)
    r = tls.s.get(url)
    if r.status_code != 200:
        log("WARNING: %u on %s" % (r.status_code, url))
        return

    html = lxml.html.fromstring(r.text)
    
    path = html.xpath("//div[@id='breadcrumbs']//li[last()]//text()")[0].strip()
    for _url in html.xpath("//a[starts-with(@href, 'download/attachments/')]/@href"):
        dest = urllib.unquote(_url).decode("utf-8")
        dest = path + "/" + "-".join(dest.rsplit("/", 2)[1:])

        if want(dest):
            q.put((download, urlparse.urljoin(url, _url), dest))

def read_project_list():
    url = config["pt-root"] + "projects-emea/?technology=&scope=&quarter=&contract_type=&revenue_recognition=&pt_status=&pa_status=&stage=&manager="
    html = lxml.html.fromstring(tls.s.get(url).text)

    for _url in html.xpath("//a[starts-with(@href, 'project-events?')]/@href"):
        q.put((read_events, urlparse.urljoin(url, _url)))

def login():
    url = config["pt-root"] + "register/"
    html = lxml.html.fromstring(tls.s.get(url).text)

    params = { i.get("name"): i.get("value") for i in html.xpath("//form[@name = 'login']//input") }

    params["email"] = config["pt-username"]
    params["password"] = config["pt-password"]

    tls.s.post(url, params)

def cleanup():
    for dirpath, dirnames, filenames in os.walk(".", topdown = False):
        for f in filenames:
            path = os.path.normpath(os.path.join(dirpath, f))
            if path.decode("utf-8") not in files and path[0] != ".":
                os.unlink(path)

        if not os.listdir(dirpath):
            os.rmdir(dirpath)

def main():
    global config
    config = common.load_config()

    # Permit write of UTF-8 characters to stderr (required when piping output)
    if sys.stderr.encoding == None:
        sys.stderr = codecs.getwriter("UTF-8")(sys.stderr)

    common.mkdirs(config["pt-base"])
    os.chdir(config["pt-base"])

    _lock = common.Lock(".lock")
    tls.s = requests.Session()

    login()

    for i in range(int(config["pt-threads"])):
        t = threading.Thread(target = worker, name = i, args = [tls.s.cookies])
        t.daemon = True
        t.start()

    read_project_list()
    while q.unfinished_tasks:
        time.sleep(1)
    q.join()

    cleanup()
    common.write_sync_done()

if __name__ == "__main__":
    main()
