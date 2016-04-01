#!/usr/bin/python -u

import argparse
import odf.utils
import sys

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help = "source ODT filename")

    return ap.parse_args()

if __name__ == "__main__":
    odf.utils.set_encoding()
    args = parse_args()

    odt = odf.Odt()
    odt.load(args.src, noparse = True)

    for p in odt.content._body()._text().xpath("//text:h|//text:p", namespaces = odf.ns.nsmap):
        t = ""
        for e in p.getiterator():
            if e.text:
                t += e.text
            if e.tail:
                t += e.tail
        print t
