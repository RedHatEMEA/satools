#!/usr/bin/python -u

import argparse
import odf.utils
import string
import sys

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help = "source ODP filename")

    return ap.parse_args()

def cap(s):
    def _cap(s):
        return s[0].upper() + s[1:]

    return " ".join([_cap(_s) for _s in "-".join([_cap(_s) for _s in s.split("-")]).split(" ")])

if __name__ == "__main__":
    odf.utils.set_encoding()
    args = parse_args()

    odp = odf.Odp()
    odp.load(args.src, noparse = True)

    families = []
    families.extend(odp.content._automatic_styles().xpath("//style:text-properties/@fo:font-family", namespaces = odf.ns.nsmap))
    families.extend(odp.styles._styles().xpath("//style:text-properties/@fo:font-family", namespaces = odf.ns.nsmap))

    fonts = set()
    for f in families:
        for ff in f.split(","):
            fonts.add(cap(ff.strip("' ")))
    
    for f in sorted(fonts):
        print f
