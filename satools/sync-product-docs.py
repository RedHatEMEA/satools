#!/usr/bin/python

import argparse
import common
import lxml.etree
import os

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-l", dest = "locale",
                    default = config["product-docs-locale"],
                    help = "locale for downloaded documentation, e.g. en-US")
    ap.add_argument("-t", dest = "type", default = config["product-docs-type"],
                    choices = ("epub", "html-single", "pdf"),
                    help = "file type of documentation to download")

    return vars(ap.parse_args())

def xpath(elem, path):
    return elem.xpath(path, namespaces = 
                      { "xhtml" : "http://www.w3.org/1999/xhtml" })

def main():
    global config
    config = common.load_config()
    args = parse_args()

    common.mkdirs(config["product-docs-base"])
    os.chdir(config["product-docs-base"])

    urlbase = "http://docs.redhat.com/docs/%(locale)s/" % args
    common.retrieve(urlbase + "toc.html", "toc.html", force = True)

    toc = lxml.etree.parse("toc.html").getroot()
    for url in xpath(toc, "//xhtml:a[@class='type' and text()='%(type)s']/@href" % args):
        url = url[2:] # trim leading ./
        path = url[:url.index("/%(type)s/" % args)].replace("_", " ")
        common.mkdirs(path)
        path = path + "/" + url.split("/")[-1]
        common.retrieve(urlbase + url, path)

if __name__ == "__main__":
    main()
