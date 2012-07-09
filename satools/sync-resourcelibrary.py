#!/usr/bin/python -ttu

import codecs
import common
import cookielib
import copy
import lxml.html.soupparser
import os
import sys
import urllib2

if __name__ == "__main__":
    global config
    config = common.load_config()

    common.mkdirs(config["resourcelibrary-base"])
    os.chdir(config["resourcelibrary-base"])

    lock = common.Lock(".lock")

    cj = cookielib.CookieJar()
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
    urllib2.install_opener(opener)

    if sys.stderr.encoding == None:
        sys.stderr = codecs.getwriter("UTF-8")(sys.stderr)

    common.retrieve_m("http://www.redhat.com/resourcelibrary/results", tries = tries)

    warnings = 0
    itemno = 0
    tries = 10
    indexurl = "/resourcelibrary/results?portal:componentId=bf73926d-2aa3-4b8b-bf8d-a1f6f56b8469&portal:type=action&actionType=orderBy&orderBy=Date-Desc&resultPerPage=100"
    while True:
        html = common.retrieve_m("http://www.redhat.com" + indexurl, tries = tries)
        index = lxml.html.soupparser.fromstring(html)

        for indexitem in index.xpath("//div[@id='sidebar-left-events']"):
            itemno += 1
            indexitem = copy.deepcopy(indexitem)
            itemtype = indexitem.xpath("//b[text()='Type:']")[0].tail.strip()
            if itemtype in ("Demos and software tours", "On-demand webinar", "Online tools", "Sales guides"):
                continue

            itemurl = indexitem.xpath("//a/@href")[0]
            itemtitle = indexitem.xpath("//a/text()")[0]
            if itemurl.startswith("https://engage.redhat.com/") or \
                    itemurl.startswith("http://engage.jboss.com/"):
                continue
            elif itemurl[0] != "/":
                print >>sys.stderr, "WARNING: unexpected index item page link %s (#%u, %s, %s), continuing..." % (itemurl, itemno, itemtitle, itemtype)
                warnings += 1
                continue

            dstfile = os.path.join(itemtype, itemurl.split("/")[-1])
            extension = ".pdf"

            print >>sys.stderr, "\r[%u]" % itemno,

            if itemtype in ("Case Studies", "Whitepapers"):
                try:
                    docurl = indexitem.xpath("//div[@class='pdf-links']//a[@target='_blank']/@href")[0]
                except IndexError:
                    print >>sys.stderr, "WARNING: can't find index download link (#%u, %s, %s), continuing..." % (itemno, itemtitle, itemtype)
                    warnings += 1
                    continue

            else:
                try:
                    html = common.retrieve_m("http://www.redhat.com" + itemurl, tries = tries)
                    item = lxml.html.soupparser.fromstring(html)
                except urllib2.HTTPError, e:
                    if e.code / 100 == 4:
                        print >>sys.stderr, "WARNING: can't load item page %s (#%u, %s, %s) (%s), continuing..." % ("http://www.redhat.com" + itemurl, itemno, itemtitle, itemtype, e)
                        warnings += 1
                        continue
                    raise e

                try:
                    if itemtype == "Videos":
                        docurl = item.xpath("//a[text()='OGG']/@href")[0]
                        extension = ".ogg"
                    else:
                        docurl = item.xpath("//a[@class='ResourceFile']/@href")[0]
                except IndexError:
                    if itemtype != "Other Resources":
                        print >>sys.stderr, "WARNING: can't find item download link at %s (#%u, %s, %s), continuing..." % ("http://www.redhat.com" + itemurl, itemno, itemtitle, itemtype)
                        warnings += 1
                    continue

            dstfile += extension
            common.mkdirs(itemtype)
            try:
                common.retrieve("http://www.redhat.com" + docurl, dstfile, tries = tries)
                common.mkro(dstfile)
            except urllib2.HTTPError, e:
                if e.code / 100 == 4:
                    print >>sys.stderr, "WARNING: can't download item at %s (#%u, %s, %s) (%s), continuing..." % ("http://www.redhat.com" + docurl, itemno, itemtitle, itemtype, e)
                    warnings += 1
                    continue
                raise e
            
        try:
            indexurl = index.xpath("//a[@rel='next']/@href")[0]
        except IndexError:
            break

    print >>sys.stderr, "INFO: %u items parsed." % itemno
    if warnings:
        print >>sys.stderr, "WARNING: %u warnings occurred." % warnings
