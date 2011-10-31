#!/usr/bin/python

import os
import sys
import time
import urllib2

configfile = os.environ["HOME"] + "/.satools"

class HeadRequest(urllib2.Request):
    def get_method(self):
        return "HEAD"

def load_config():
    config = { "product-docs-base": os.environ["HOME"] + "/content/product-docs",
               "product-docs-locale": "en-US",
               "product-docs-type": "pdf" }

    if os.path.exists(configfile):
        with open(configfile) as f:
            for line in f:
                config.update([map(str.strip, line.split("=", 1))])

    return config

def mkdirs(path):
    if not os.path.isdir(path):
        os.makedirs(path)

def mktemppath(path):
    parts = os.path.split(path)
    return os.path.join(parts[0], "." + parts[1])

def progress(current, total):
    percent = 100 * current / total
    print >>sys.stderr, "\r  [%s%s] %u%% (%u) " % \
        ("*" * (percent / 2), " " * (50 - (percent / 2)), percent, current),

def retrieve(url, path, force = False):
    if os.path.exists(path) and not force:
        src = urllib2.urlopen(HeadRequest(url))
        mtime = time.mktime(time.strptime(src.info()["Last-Modified"],
                                          "%a, %d %b %Y %H:%M:%S %Z"))

        st = os.stat(path)

        if mtime == st.st_mtime and int(src.info()["Content-Length"]) == st.st_size:
            return

    if os.path.exists(path):
        os.unlink(path)

    temppath = mktemppath(path)

    src = retrieve_m(url)
    dst = open(temppath, "w")

    current = 0
    total = int(src.info().getheader("Content-Length"))
    while True:
        data = src.read(4096)

        current += len(data)
        progress(current, total)

        if not data: break
        
        dst.write(data)

    src.close()
    dst.close()

    mtime = time.mktime(time.strptime(src.info()["Last-Modified"],
                                      "%a, %d %b %Y %H:%M:%S %Z"))
    os.utime(temppath, (mtime, mtime))

    os.rename(temppath, path)
        
    print >>sys.stderr

def retrieve_m(url):
    print >>sys.stderr, "Retrieving %s..." % url
    return urllib2.urlopen(url)
