#!/usr/bin/python

import argparse
import odf.juno
import odf.utils
import sys

odf.utils.set_encoding()

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help = "source ODP filename")
    ap.add_argument("-e", "--excludefont", help = "exclude a font from the list", required = False, metavar = "font", action = "append", default = [])

    return ap.parse_args()

def iterate_pages(fonts, pages, prefix = ""):
    pagect = pages.getCount()
    for i in range(0, pagect):
        print "%spage %d/%d" % (prefix, i + 1, pagect)
        page = pages.getByIndex(i)

        shapect = page.getCount()
        for j in range(0, shapect):
            print "  shape %d/%d" % (j + 1, shapect)
            shape = page.getByIndex(j)

            if shape.supportsService("com.sun.star.drawing.Text"):
                paras = shape.createEnumeration()
                while paras.hasMoreElements():
                    para = paras.nextElement()
                    portions = para.createEnumeration()
                    while portions.hasMoreElements():
                        portion = portions.nextElement()
			
			if portion.CharFontName not in args.excludefont:
	                        print "    [%-15.15s] %s" % (portion.CharFontName, portion.getString())
                        fonts.add(portion.CharFontName)

def deinit():
    juno.disconnect()

def init():
    global juno
    juno = odf.juno.juno()

def lsfonts(path):
    preso = juno.desktop. \
        loadComponentFromURL(juno.mkpath(path), "_blank", 0,
                             (juno.PropertyValue("Hidden", True), ))

    fonts = set()

    iterate_pages(fonts, preso.getMasterPages(), prefix = "master ")
    iterate_pages(fonts, preso.getDrawPages())

    preso.dispose()

    return fonts

if __name__ == "__main__":
    args = parse_args()

    init()

    fonts = lsfonts(args.src)

    deinit()

    print "===="
    for font in sorted(fonts):
        print font
