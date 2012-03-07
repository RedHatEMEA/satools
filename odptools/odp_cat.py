#!/usr/bin/python

import argparse
import odf
import odf.utils

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("srcspec", nargs="+", help = "source ODP filename with "
                    "optional range specifier")
    ap.add_argument("dst", help = "destination ODP filename")

    return ap.parse_args()

def cb(src, p, **kwargs):
    pages = src.content._body()._presentation()._pages()
    odf.clonepage(kwargs["dst"], src, pages[p])

def cat(srcspec, DST):
    dst = odf.Odp()
    odf.utils.iter_pages(srcspec, cb, dst = dst)
    dst.save(DST)


def catprof():
    cat(("JM-Cloud-2.odp", "JM-Cloud.odp", "JM-MRGR.odp", "JM-Pricing.odp",
         "JM-RHEL6.odp", "JM-RHEV.odp", "JM-Satellite.odp",
         "JM-Satellite-roadmap.odp"), "dest.odp")

def dump(fn, p, o):
    f = open(fn, "w")
    p.stream = f
    o.print_stats()
    f.close()

def dumpc(fn, p):
    f = open(fn, "w")
    p.stream = f
    p.print_callers()
    f.close()

if __name__ == "__main__":
    #if False:
    if True:
        args = parse_args()
        cat(args.srcspec, args.dst)
    else:
        import cProfile
        cProfile.run("catprof()", "prof")
        import pstats
        p = pstats.Stats("prof")
        dump("stats-bytime", p, p.sort_stats('time').reverse_order())
        dump("stats-bycalls", p, p.sort_stats('calls').reverse_order())
        dumpc("stats-callers", p)
