#!/usr/bin/python

import os
import sys
import urllib2

configfile = os.environ["HOME"] + "/.satools"

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
    if os.path.exists(path) and not force: return

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

    os.rename(temppath, path)
        
    print >>sys.stderr

def retrieve_m(url):
    print >>sys.stderr, "Retrieving %s..." % url
    return urllib2.urlopen(url)
