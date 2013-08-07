#!/usr/bin/python3

import common
import http.cookiejar
import lxml.html
import os
import queue
import sys
import threading
import urllib.error
import urllib.parse
import urllib.request

q = queue.Queue()

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
    except urllib.error.HTTPError as e:
        if e.code == 403:
            print("WARNING: %s, continuing..." % e, file = sys.stderr)
            return
        else:
            raise

    html = lxml.html.fromstring(html.decode("utf-8"))
    
    path = html.xpath("//div[@id='breadcrumbs']//li[last()]//text()")[0].strip()
    for _url in html.xpath("//a[starts-with(@href, 'download/attachments/')]/@href"):
        dest = urllib.parse.unquote(_url).decode("utf-8")
        dest = path + "/" + "-".join(dest.rsplit("/", 2)[1:])
        _url = urllib.parse.urljoin(url, _url)

        if want(dest):
            q.put((download, opener, _url, dest))

def read_project_list(opener):
    url = config["pt-root"] + "projects-emea/project-list"
    html = common.retrieve_m(url, opener = opener, tries = 10).read()
    html = lxml.html.fromstring(html)

    for _url in html.xpath("//a[text()='events']/@href"):
        _url = urllib.parse.urljoin(url, _url)
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

    common.retrieve_m(url, urllib.parse.urlencode(params), opener = opener, tries = 10)

if __name__ == "__main__":
    global config
    config = common.load_config()

    common.mkdirs(config["pt-base"])
    os.chdir(config["pt-base"])

    lock = common.Lock(".lock")

    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

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
