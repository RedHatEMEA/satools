#!/usr/bin/python3

import argparse
import odf
import odf.utils

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-o", dest="offset", default = 1, type = int,
                    help = "offset of first destination file (default: 1)")
    ap.add_argument("srcspec", nargs="+", help = "source ODP filename with "
                    "optional range specifier")
    ap.add_argument("dst_template", help = "destination ODP filename "
                    "template, e.g. dst%%03u.odp")

    return ap.parse_args()

def cb(src, p):
    pages = src.content._body()._presentation()._pages()

    dst = odf.Odp()
    odf.clonepage(dst, src, pages[p])
    dst.save(args.dst_template % args.offset)

    args.offset += 1

args = parse_args()
odf.utils.iter_pages(args.srcspec, cb)
