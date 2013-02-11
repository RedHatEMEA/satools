#!/usr/bin/python -tt

import argparse
import common
import hashlib
import lxml.html
import os
import re
import requests
import stat
import sys
import threading
import time

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

    def remove(self, x):
        with self.lock:
            self.s.remove(x)

class Iso(object):
    def __init__(self, href, md5):
        self.href = href
        self.md5 = md5
        self.name = href.split("?")[0].split("/")[-1]

    @staticmethod
    def from_tr(tr):
        href = tr.xpath(".//a/@href")[0]
        md5 = tr.xpath(".//td[@class='iso-checksum']/text()")[0].split(":")[1].strip()
        return Iso(href, md5)

    def match(self):
        for rx in config["rhn-dumps-match"]:
            if re.match(rx, self.name):
                return True
        return False

    def download(self):
        f = open("." + self.name, "a")
        size = os.fstat(f.fileno())[stat.ST_SIZE]
        response = requests.get(self.href, stream = True, headers = {"Range": "bytes=%u-" % size})
        remaining = int(response.headers["Content-Length"])
        r = response.raw
        while True:
            data = r.read(4096)
            remaining -= len(data)
            if data == "": break
            f.write(data)
        f.flush()
        os.fsync(f.fileno())
        f.close()

        if remaining > 0:
            fileset.remove(iso.name)
            return

        if not self.verify():
            msg("WARN: verify failed for %s" % self.name)
            os.unlink("." + self.name)
            fileset.remove(self.name)
            return

        common.rename("." + self.name, self.name)
        common.mkro(self.name)

    def verify(self):
        md5 = hashlib.md5()
        with open("." + self.name) as f:
            while True:
                data = f.read(1048576)
                if data == "": break
                md5.update(data)

        return md5.hexdigest().lower() == self.md5.lower()

fileset = LockedSet()

consolelock = threading.Lock()
def msg(s):
    with consolelock:
        print >>sys.stderr, s

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-l", action="store_true", dest = "list",
                    help = "list ISOs")

    return vars(ap.parse_args())

def login(s):
    params = { "_flowId": "legacy-login-flow",
               "username": config["rhn-username"],
               "password": config["rhn-password"] }

    s.post("https://www.redhat.com/wapps/sso/login.html", data = params)

def get_isos():
    s = requests.Session()
    login(s)

    html = s.get("https://rhn.redhat.com/rhn/software/channel/downloads/Download.do?cid=15989").text
    html = lxml.html.fromstring(html)

    bases = []
    for tr in html.xpath("//div[@class='bases']//tbody/tr"):
        bases.append(Iso.from_tr(tr))

    incs = []
    for tr in html.xpath("//div[@class='incrementals']//tbody/tr"):
        incs.append(Iso.from_tr(tr))

    for iso in sorted(bases, key = lambda iso: iso.name) + \
            sorted(incs, key = lambda iso: iso.name):
        yield iso

def worker():
    finished = False
    while not finished:
        finished = True
        start = time.time()

        for iso in get_isos():
            if iso.match() and fileset.tas(iso.name):
                if not os.path.exists(iso.name):
                    iso.download()

            if time.time() > start + 300:
                finished = False
                break

if __name__ == "__main__":
    config = common.load_config()
    args = parse_args()

    if args["list"]:
        for iso in get_isos():
            print "[%c] %s" % ([" ", "*"][iso.match()], iso.name)
        sys.exit(0)

    common.mkdirs(config["rhn-dumps-base"])
    os.chdir(config["rhn-dumps-base"])

    lock = common.Lock(".lock")

    threads = []
    for i in range(int(config["rhn-dumps-threads"])):
        t = threading.Thread(target = worker, name = i)
        t.daemon = True
        t.start()
        threads.append(t)

    for t in threads:
        while t.isAlive():
            t.join(1)

    if fileset.s:
        # protect against wiping the directory when login fails
        for f in os.listdir("."):
            if f not in fileset.s and not os.path.isdir(f) and not f.startswith("."):
                os.unlink(f)

        common.write_sync_done()
