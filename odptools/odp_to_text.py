#!/usr/bin/python3 -u

import argparse
import odf.utils
import sys

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help = "source ODP filename")

    return ap.parse_args()

def cb(src, p):
    pages = src.content._body()._presentation()._pages()
    t = pages[p].as_text()
    print("page %u/%u" % (p + 1, len(pages)), file = sys.stderr)
    print(t)

odf.utils.set_encoding()
args = parse_args()
odf.utils.iter_pages([args.src], cb, progress = False, noparse = True)
