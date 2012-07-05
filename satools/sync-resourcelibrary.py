#!/usr/bin/python

import common
import cookielib
import copy
import lxml.html.soupparser
import sys
import os
import urllib2

if __name__ == "__main__":
    global config
    config = common.load_config()

    common.mkdirs(config["resourcelibrary-base"])
    os.chdir(config["resourcelibrary-base"])

    cj = cookielib.CookieJar()
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
    urllib2.install_opener(opener)

    lock = common.Lock(".lock")

    indexurl = "/resourcelibrary/results"
    while True:
        html = common.retrieve_m("http://www.redhat.com" + indexurl)
        index = lxml.html.soupparser.fromstring(html)

        for item in index.xpath("//div[@class='sidebar-left']"):
            item = copy.deepcopy(item)
            itemtype = item.xpath("//b[text()='Type:']")[0].tail.strip()
            if itemtype in ("Demos and software tours", "On-demand webinar", "Online tools", "Sales guides", "Whitepapers"):
                continue

            itemurl = item.xpath("//a/@href")[0]
            html = common.retrieve_m("http://www.redhat.com" + itemurl)
            item = lxml.html.soupparser.fromstring(html)

            dstfile = os.path.join(itemtype, itemurl.split("/")[-1])
            if itemtype in ("Case Studies"):
                docurl = item.xpath("//div[@class='ctaLinkWrapper']/a/@href")[0]
                dstfile += ".pdf"
            elif itemtype in ("Other Resources"):
                try:
                    docurl = item.xpath("//a[@class='ResourceFile']/@href")[0]
                    dstfile += ".pdf"
                except IndexError:
                    continue
            elif itemtype in ("Catalogs", "Datasheets and brochures", "Performance benchmarks", "Reference architectures", "Use cases"):
                docurl = item.xpath("//a[@class='ResourceFile']/@href")[0]
                dstfile += ".pdf"
            elif itemtype in ("Videos"):
                docurl = item.xpath("//a[text()='OGG']/@href")[0]
                dstfile += ".ogg"
            else:
                raise Exception("unknown itemtype %s" % itemtype)

            common.mkdirs(itemtype)
            common.retrieve("http://www.redhat.com" + docurl, dstfile)
            common.mkro(dstfile)

        try:
            indexurl = index.xpath("//a[@rel='next']/@href")[0]
        except IndexError:
            break
