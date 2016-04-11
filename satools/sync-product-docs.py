#!/usr/bin/python3

import common
import os
import lxml.etree
import multiprocessing
import requests
import tempfile


def download(url, p, force=False):
    if os.path.exists(p) and not force:
        return

    r = requests.get(url, stream=True)
    if r.status_code / 100 != 2:
        return

    parent = os.path.dirname(p) or "."
    common.mkdirs(parent)

    with tempfile.NamedTemporaryFile(dir=parent) as f:
        for chunk in r.iter_content(chunk_size=2**20):
            f.write(chunk)

        os.chmod(f.name, 0o666 & ~umask)
        os.rename(f.name, p)
        f._closer.delete = False


def get_dump():
    download("https://access.redhat.com/documentation/DUMP.xml", "DUMP.xml",
             True)


def iter_dump():
    xml = lxml.etree.parse("DUMP.xml")
    for rec in xml.xpath("/opt/record"):
        d = {c.tag: c.text for c in rec.iterchildren()}

        if d["language"] != config["product-docs-locale"] or \
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
    global config
    config = common.load_config()

    common.mkdirs(config["product-docs-base"])
    os.chdir(config["product-docs-base"])

    l = common.Lock(".lock")

    get_dump()

    valid_files = set([".lock", ".sync-done"])
    pool = multiprocessing.Pool(processes=int(config["product-docs-threads"]))

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
    common.write_sync_done()


if __name__ == "__main__":
    umask = os.umask(0)
    os.umask(umask)

    main()
