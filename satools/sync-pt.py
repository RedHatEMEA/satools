#!/usr/bin/python

import common
import cookielib
import lxml.html
import os
import Queue
import sys
import threading
import urllib
import urllib2
import urlparse

q = Queue.Queue()

def worker():
    while True:
        items = q.get()
        items[0](*items[1:])
        q.task_done()

def want(path):
    return not (config["pt-odponly"] == "1" and not
                path.lower().endswith(".odp"))

def download(opener, href, dest):
    common.mkdirs(os.path.split(dest)[0])
    common.retrieve(href, dest, opener = opener, tries = 10)
    common.mkro(dest)

def read_events(opener, url):
    try:
        html = common.retrieve_m(url, opener = opener, tries = 10).read()
    except urllib2.HTTPError, e:
        if e.code == 403:
            print >>sys.stderr, "WARNING: %s, continuing..." % e
            return
        else:
            raise

    html = lxml.html.fromstring(html.decode("utf-8"))
    
    path = html.xpath("//div[@id='breadcrumbs']//li[last()]//text()")[0].strip()
    for _url in html.xpath("//a[starts-with(@href, 'download/attachments/')]/@href"):
        dest = urllib.unquote(_url).decode("utf-8")
        dest = path + "/" + "-".join(dest.rsplit("/", 2)[1:])
        _url = urlparse.urljoin(url, _url)

        if want(dest):
            q.put((download, opener, _url, dest))

def read_project_list(opener):
    url = config["pt-root"] + "projects-emea/project-list"
    html = common.retrieve_m(url, opener = opener, tries = 10).read()
    html = lxml.html.fromstring(html)

    for _url in html.xpath("//a[text()='events']/@href"):
        _url = urlparse.urljoin(url, _url)
        q.put((read_events, opener, _url))

def login(opener):
    url = config["pt-root"] + "register/"
    html = common.retrieve_m(url, opener = opener, tries = 10).read()
    html = lxml.html.fromstring(html)

    params = {}
    for i in html.xpath("//form[@name = 'login']//input"):
        params[i.get("name")] = i.get("value")

    params["email"] = config["pt-username"]
    params["password"] = config["pt-password"]

    common.retrieve_m(url, urllib.urlencode(params), opener = opener, tries = 10)

if __name__ == "__main__":
    global config
    config = common.load_config()

    common.mkdirs(config["pt-base"])
    os.chdir(config["pt-base"])

    lock = common.Lock(".lock")

    cj = cookielib.CookieJar()
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))

    threads = int(config["pt-threads"])
    if threads > 1:
        common.progress = lambda x, y: None
        common.progress_finish = lambda: None

    for i in range(threads):
        t = threading.Thread(target = worker, name = i)
        t.daemon = True
        t.start()

    login(opener)
    read_project_list(opener)
    q.join()

    common.write_sync_done()
