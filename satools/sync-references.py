#!/usr/bin/python

import common
import copy
import lxml.html.soupparser
import sys
import os

def ispdf(f):
    bytes = f.read(4)
    f.seek(0)

    return bytes == "%PDF"

if __name__ == "__main__":
    global config
    config = common.load_config()

    print >>sys.stderr, "Utility needs update since relaunch of www.redhat.com, feel free to submit patches..."
    sys.exit(1)

    common.mkdirs(config["references-base"])
    os.chdir(config["references-base"])

    lock = common.Lock(".lock")

    common.retrieve("http://www.redhat.com/customersuccess/", "index.html")
    common.mkro("index.html")

    toc = lxml.html.soupparser.parse("index.html").getroot()
    for url in toc.xpath("//a[substring-after(@href, '.') = 'pdf']/../../.."):
        url = copy.deepcopy(url)
        title = url.xpath("//h4//a/text()")[0].replace("/", "_")
        href = url.xpath("//a[substring-after(@href, '.') = 'pdf']/@href")[0]

        print >>sys.stderr, title
        f = common.retrieve_tmpfile("http://www.redhat.com" + href)
        if ispdf(f):
            # a few links on /customersuccess are currently broken HTML files
            common.sendfile_disk(f, title + ".pdf")
            common.mkro(title + ".pdf")
        f.close()
