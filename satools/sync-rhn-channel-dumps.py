#!/usr/bin/python -tt

import argparse
import common
import cookielib
import lxml.html
import os
import re
import sys
import threading
import urllib
import urllib2

class LockedSet(object):
    def __init__(self):
        self.lock = threading.Lock()
        self.s = set()

    def tas(self, x):
        with self.lock:
            if x in self.s:
                return False
            self.s.add(x)
            return True

fileset = LockedSet()

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-l", action="store_true", dest = "list",
                    help = "list ISOs")

    return vars(ap.parse_args())

def login(opener):
    params = { "_flowId": "legacy-login-flow",
               "username": config["rhn-username"],
               "password": config["rhn-password"] }

    common.retrieve_m("https://www.redhat.com/wapps/sso/login.html",
                      urllib.urlencode(params), opener = opener)

def match(url):
    for rx in config["rhn-dumps-match"]:
        if re.match(rx, url):
            return True
    return False

def urls():
    cj = cookielib.CookieJar()
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))

    login(opener)

    html = common.retrieve_m("https://rhn.redhat.com/rhn/software/channel/downloads/Download.do?cid=15989", opener = opener).read()
    html = lxml.html.fromstring(html)

    urls = html.xpath("//div[@class='bases']/div//a/@href")
    urls = [(url.split("?")[0].split("/")[-1], url) for url in urls]
    for url in sorted(urls, key = lambda url: url[0]):
        yield url

    urls = html.xpath("//div[@class='incrementals']/div//a/@href")
    urls = [(url.split("?")[0].split("/")[-1], url) for url in urls]
    for url in sorted(urls, key = lambda url: url[0]):
        yield url

def worker():
    while True:
        progress = False
        for url in urls():
            if match(url[0]) and fileset.tas(url[0]) and download(url[1], url[0]):
                progress = True
                break

        if not progress:
            break

def download(url, dest):
    if not os.path.exists(dest):
        common.retrieve(url, dest)
        common.mkro(dest)
        return True
    return False

if __name__ == "__main__":
    config = common.load_config()
    args = parse_args()

    if args["list"]:
        for url in urls():
            print "[%c] %s" % ([" ", "*"][match(url[0])], url[0])
        sys.exit(0)

    common.mkdirs(config["rhn-dumps-base"])
    os.chdir(config["rhn-dumps-base"])

    lock = common.Lock(".lock")

    threadct = int(config["rhn-dumps-threads"])
    if threadct > 1:
        common.progress = lambda x, y: None
        common.progress_finish = lambda: None

    threads = []
    for i in range(threadct):
        t = threading.Thread(target = worker, name = i)
        t.daemon = True
        t.start()
        threads.append(t)

    for t in threads:
        t.join()

    if fileset.s:
        # protect against wiping the directory when login fails
        for f in os.listdir("."):
            if f not in fileset.s and not os.path.isdir(f) and not f.startswith("."):
                os.unlink(f)

        with open(".sync-done", "w") as f:
            pass
