#!/usr/bin/python

import errno
import os
import lxml.etree
import multiprocessing
import requests
import sys


def mkdirs(p):
    try:
        os.makedirs(p)
    except OSError as e:
        if e.errno != errno.EEXIST:
            raise


def download(url, p, force=False):
    if os.path.exists(p) and not force:
        return

    print >>sys.stderr, "%s -> %s" % (url, p)

    r = requests.get(url, stream=True)
    if r.status_code / 100 != 2:
        return

    (dn, fn) = os.path.split(p)
    mkdirs(dn)

    tmpnam = os.path.join(dn, "." + fn)

    with open(tmpnam, "w") as f:
        for chunk in r.iter_content(chunk_size=2**20):
            f.write(chunk)

    os.rename(tmpnam, p)


def get_dump():
    download("https://access.redhat.com/documentation/DUMP.xml",
             "/tmp/DUMP.xml", True)


def iter_dump():
    xml = lxml.etree.parse("/tmp/DUMP.xml")
    for rec in xml.xpath("/opt/record"):
        d = {c.tag: c.text for c in rec.iterchildren()}

        if d["language"] != "en-US" or \
           "pdf" not in d["formats"].split(","):
            continue

        yield d


def remove_invalid_files(valid_files):
    for dirpath, dirnames, filenames in os.walk(".", topdown=False):
        for f in filenames:
            if os.path.join(dirpath[2:], f) not in valid_files:
                os.unlink(os.path.join(dirpath, f))

        if not os.listdir(dirpath):
            os.rmdir(dirpath)


def main():
    os.chdir(os.path.join(os.environ["HOME"], "content/product-docs"))

    get_dump()

    valid_files = set()
    pool = multiprocessing.Pool()

    for x in iter_dump():
        x["product_"] = x["product"].replace("_", " ")

        url = "https://access.redhat.com/documentation/%(language)s/" \
              "%(product)s/%(version)s/pdf/%(name)s/" \
              "%(product)s-%(version)s-%(name)s-%(language)s.pdf" % x
        f = "%(product_)s/%(version)s/" \
            "%(product)s-%(version)s-%(name)s-%(language)s.pdf" % x

        pool.apply_async(download, (url, f))
        valid_files.add(f)

    pool.close()
    pool.join()

    remove_invalid_files(valid_files)


if __name__ == "__main__":
    main()
