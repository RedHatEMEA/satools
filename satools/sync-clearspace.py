#!/usr/bin/python

import common
import itertools
import lxml.etree
import os
import re
import time
import urllib2

class HTML(object):
    def __init__(self, data):
        parser = lxml.etree.HTMLParser()
        self.xml = lxml.etree.fromstring(data.replace("\r\n", "\n"), parser)

class WikiDoc(HTML):
    def __init__(self, data):
        super(WikiDoc, self).__init__(data)

        self.filehref = self.xml.xpath("//span[@class='jive-wiki-body-file-info']/a/@href")[0]

        self.filename = self.xml.xpath("//span[@class='jive-wiki-body-file-info']/a/text()")[0]

        xp = self.xml.xpath("//div[@class='jive-content-header-details']")[0]
        text = lxml.etree.tostring(xp, method = "text", encoding = "UTF-8")
        r = re.search("Last Modified:.*?\n(.*?)\nby", text, re.S)
        self.mtime = time.mktime(time.strptime(r.group(1), "%b %d, %Y %I:%M %p"))
        xp = self.xml.xpath("//div[@id='jive-breadcrumb']/span/a")
        xp = map(lambda x: x.text.strip(), xp)
        self.path = "/".join(xp[:-1])

        xp = self.xml.xpath("//div[@class='jive-content-header-version']/text()")[0]
        r = re.search("VERSION (\d+)", xp)
        self.version = r.group(1)

class DocIndex(HTML):
    def __init__(self, data):
        super(DocIndex, self).__init__(data)

        xp = self.xml.xpath("//td[@class='jive-table-cell-subject']/a")
        self.items = map(lambda x: { "href": x.get("href"),
                                     "title": x.text.strip() }, xp)

if __name__ == "__main__":
    global config
    config = common.load_config()

    common.mkdirs(config["clearspace-base"])
    os.chdir(config["clearspace-base"])

    lock = common.Lock(".lock")

    pm = urllib2.HTTPPasswordMgrWithDefaultRealm()
    pm.add_password(None, config["clearspace-root"], config["clearspace-username"],
                    config["clearspace-password"])
    opener = urllib2.build_opener(urllib2.HTTPBasicAuthHandler(pm))
    urllib2.install_opener(opener)

    step = 50
    for i in itertools.count(step = step):
        f = common.retrieve_m(config["clearspace-root"] + "/view-documents.jspa?start=%u&numResults=%u&filter=presentations" % (i, step))
        index = DocIndex(f.read())
        f.close()

        for item in index.items:
            f = common.retrieve_m(config["clearspace-root"] + item["href"])
            doc = WikiDoc(f.read())
            f.close()

            path = doc.path + "/" + doc.filename
            try:
                st = os.stat(path)
                if st.st_mtime == doc.mtime:
                    continue
            except OSError:
                pass

            common.mkdirs(doc.path)
            common.retrieve(config["clearspace-root"] + doc.filehref,
                            path, force = True)
            common.mkro(path)
            os.utime(path, (doc.mtime, doc.mtime))

        if len(index.items) != step:
            break
