#!/usr/bin/python3

import argparse
import attachments
import common
import gzip
import lxml.html
import mailindex
import sys
import thunderbird
import time
import os
import urllib.error
import urllib.request

# TODO: single list update

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-q", action = "store_true", dest = "quiet",
                    help = "quiet mode")
    ap.add_argument("list", nargs = "?")

    return vars(ap.parse_args())

def isgzip(f):
    bytes = f.read(2)
    f.seek(0)

    return bytes == b"\x1F\x8B"

if __name__ == "__main__":
    warnings = 0
    global config
    config = common.load_config()
    args = parse_args()

    if args["quiet"]:
        common.progress = lambda x, y: None
        common.progress_finish = lambda: None
        common.retrieving = lambda x: None
        mailindex.indexing = lambda x: None
        attachments.extracting = lambda x: None

    if not config["lists-sync"]:
        print("Please configure lists in $HOME/.satools before running %s." % sys.argv[0], file = sys.stderr)
        sys.exit(1)

    common.mkdirs(config["lists-base"])
    os.chdir(config["lists-base"])

    lock = common.Lock(".lock")
    db = common.DB(".sync-db")

    if not args["list"]:
        thunderbird.init()

    now = time.gmtime()

    for line in config["lists-sync"]:
        line = line.split(" ")

        url = line[0].rstrip("/")
        _list = url.split("/")[-1]

        if args["list"] and _list != args["list"]:
            continue

        credentials = None
        if len(line) == 3:
            credentials = urllib.parse.urlencode(dict(zip(("username", "password"),
                                                          line[1:3]))).encode("utf-8")

        index = common.retrieve_m(url, credentials)
        index_xml = lxml.html.parse(index).getroot()
        index.close()

        for href in index_xml.xpath("//a[substring-after(@href, '.') = 'txt.gz']/@href"):
            tm = time.strptime(href, "%Y-%B.txt.gz")
            path = "%s/%04u/%02u" % (_list, tm.tm_year, tm.tm_mon)

            if tm.tm_year < int(config["lists-start-year"]):
                break

            if not path in db or not os.path.isfile(path):
                common.mkdirs(os.path.split(path)[0])
                req = urllib.request.Request(url + "/" + href, credentials, {"Accept-Encoding": "gzip"})
                try:
                    f = common.retrieve_tmpfile(req)
                except urllib.error.HTTPError as e:
                    if e.code == 403:
                        print("WARNING: %s, continuing..." % e, file = sys.stderr)
                        warnings += 1
                        continue
                    raise

                if isgzip(f):
                    try:
                        g = gzip.GzipFile(fileobj = f, mode = "r")
                        common.sendfile_disk(g, path)
                        g.close()
                    except Exception as e:
                        print("WARNING: %s, continuing..." % e, file = sys.stderr)
                        warnings += 1
                        continue
                else:
                    common.sendfile_disk(f, path)
                f.close()

                common.mkro(path)
                mailindex.index(".", _list, path)
                attachments.extract(path)

            thunderbird.link(path)

            if not (tm.tm_year == now.tm_year and tm.tm_mon == now.tm_mon):
                db.add(path)

    with open(".sync-done", "w") as f:
        pass

    if warnings:
        print("WARNING: %u warnings occurred." % warnings, file = sys.stderr)
