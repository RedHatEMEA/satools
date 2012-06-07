#!/usr/bin/python

import argparse
import common
import lxml.etree
import os
import re
import sys
import urllib2

# TODO: remove local files which are not present remotely (any more?)

class FilterAction(argparse.Action):
    """Adds -i or -x filters to the list of filter regexes"""
    def __call__(self, parser, namespace, values, option_string=None):
        filters = getattr(namespace, self.dest)
        if filters == None:
            filters = []
        filters.append("%c/%s/" % (option_string[1], values))
        setattr(namespace, self.dest, filters)

def parse_args():
    ap = argparse.ArgumentParser()
    ap.set_defaults(filters = [])
    ap.add_argument("-i", dest = "filters",
                    action = FilterAction,
                    metavar = "REGEX",
                    help = "include documents that match this regex, can be ordered")
    ap.add_argument("-l", dest = "locale",
                    default = config["product-docs-locale"],
                    help = "locale for downloaded documentation, e.g. en-US")
    ap.add_argument("-t", dest = "type", default = config["product-docs-type"],
                    choices = ("epub", "html-single", "pdf"),
                    help = "file type of documentation to download")
    ap.add_argument("-x", dest = "filters",
                    action = FilterAction,
                    metavar = "REGEX",
                    help = "exclude documents that match this regex, can be ordered")

    return vars(ap.parse_args())

def xpath(elem, path):
    return elem.xpath(path, namespaces = 
                      { "xhtml" : "http://www.w3.org/1999/xhtml" })

def match_filter(filters, path):
    """Matches path against a list of filters in the same way as lvm.conf"""
    for ft in filters:
        ftmatch = re.match(r"([airx])(.)(.*)\2$", ft)
        if not ftmatch:
            print >>sys.stderr, "WARNING: could not parse filter %s" % ft
            continue

        if re.search(ftmatch.group(3), path, re.I):
            if ftmatch.group(1) == "a" or ftmatch.group(1) == "i":
                return True
            else:
                return False
    return True

if __name__ == "__main__":
    warnings = 0
    global config
    config = common.load_config()
    args = parse_args()

    common.mkdirs(config["product-docs-base"])
    os.chdir(config["product-docs-base"])

    filters = args["filters"]
    filters.extend(config["product-docs-filter"])

    lock = common.Lock(".lock")

    urlbase = "http://docs.redhat.com/docs/%(locale)s/" % args
    common.retrieve(urlbase + "toc.html", "toc.html")
    common.mkro("toc.html")

    toc = lxml.etree.parse("toc.html").getroot()
    for url in xpath(toc, "//xhtml:a[@class='type' and text()='%(type)s']/@href" % args):
        url = url[2:] # trim leading ./
        path = url[:url.index("/%(type)s/" % args)].replace("_", " ")
        common.mkdirs(path)
        path = path + "/" + url.split("/")[-1]

        if not match_filter(filters, path):
            continue

        try:
            common.retrieve(urlbase + url, path)
        except urllib2.HTTPError, e:
            if e.code == 403:
                print >>sys.stderr, "WARNING: %s on %s, continuing..." % (e, urlbase + url)
                warnings += 1
                continue
            raise
        common.mkro(path)

    if warnings:
        print >>sys.stderr, "WARNING: %u warnings occurred." % warnings
