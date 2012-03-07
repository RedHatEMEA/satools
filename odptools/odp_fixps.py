#!/usr/bin/python

import argparse
import odf

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help = "source ODP filename")
    ap.add_argument("dst", help = "destination ODP filename")

    return ap.parse_args()

if __name__ == "__main__":
    args = parse_args()
    odp = odf.Odp(args.src)
    odf.fixps(odp)
    odp.save(args.dst)
