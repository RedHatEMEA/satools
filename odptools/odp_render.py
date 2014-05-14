#!/usr/bin/python3

import argparse
import odf.juno
import odf.utils
import sys

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-o", dest="offset", default = 1, type = int,
                    help = "offset of first destination file (default: 1)")
    ap.add_argument("-p", action="store_true", dest="omitnumbers",
                    help = "omit page numbers")
    ap.add_argument("-t", dest="mimetype", default = "image/png",
                    help = "destination mimetype (default: image/png)")
    ap.add_argument("-v", action="store_true", dest="omitinvisible",
                    help = "omit invisible pages")
    ap.add_argument("src", nargs="+", help = "source ODP filename")
    ap.add_argument("dst_template", help = "destination PNG filename "
                    "template, e.g. dst%%03u.png")

    return ap.parse_args()

def deinit():
    juno.disconnect()

def init():
    global filter, juno
    juno = odf.juno.juno()
    filter = juno.createInstance("com.sun.star.drawing.GraphicExportFilter")

def render(src, dst_template, offset, mimetype, omitinvisible, omitnumbers, progress = False):
    preso = juno.desktop. \
        loadComponentFromURL(juno.mkpath(src), "_blank", 0,
                             (juno.PropertyValue("Hidden", True), ))

    if omitnumbers:    
        masters = preso.getMasterPages()
        for i in range(0, masters.getCount()):
            m = masters.getByIndex(i)
            for j in range (0, m.getCount()):
                i = m.getByIndex(j)
                # TODO: this is a bit doubtful
                if i.supportsService("com.sun.star.drawing.Text") and \
                        i.getString() == "<number>":
                    i.setString("")

        masters = preso.getDrawPages()
        for i in range(0, masters.getCount()):
            m = masters.getByIndex(i)
            for j in range (0, m.getCount()):
                i = m.getByIndex(j)
                # TODO: this is even more doubtful
                if i.supportsService("com.sun.star.drawing.Text") and \
                        i.getString() == "<number>":
                    i.setString("")

    pages = preso.getDrawPages()
    pagect = pages.getCount()
    for i in range(0, pagect):
        if progress:
            print("\r[%s] %s: %d/%d" % (odf.utils.spinner(offset), src, i + 1, pagect), end = "", file = sys.stderr)

        page = pages.getByIndex(i)
        if omitinvisible and not page.Visible: continue
        
        filter.setSourceDocument(page)
        filter.filter((juno.PropertyValue("MediaType", mimetype),
                       juno.PropertyValue("URL", juno.mkpath(dst_template % offset))))
        offset += 1

    if progress:
        print("\r   ", file = sys.stderr)

    preso.dispose()

    return offset

if __name__ == "__main__":
    args = parse_args()

    init()

    for src in args.src:
        args.offset = render(src, args.dst_template, args.offset, args.mimetype,
                             args.omitinvisible, args.omitnumbers, True)

    deinit()
