#!/usr/bin/python

import argparse
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
        xp = map(lambda x: x.text.strip().replace("/", "_"), xp)
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

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-a", action="store_true", dest = "all",
                    help = "check all downloads for updates")

    return vars(ap.parse_args())

def want(path):
    return (config["clearspace-odponly"] == "1" and
            not path.lower().endswith(".odp"))

def updatedbs(db, keep, href, path):
    db.add(href, path)
    if want(path):
        keep.add(path)

if __name__ == "__main__":
    global config
    config = common.load_config()
    args = parse_args()

    common.mkdirs(config["clearspace-base"])
    os.chdir(config["clearspace-base"])

    lock = common.Lock(".lock")
    db = common.DB(".sync-db")

    pm = urllib2.HTTPPasswordMgrWithDefaultRealm()
    pm.add_password(None, config["clearspace-root"],
                    config["clearspace-username"],
                    config["clearspace-password"])
    opener = urllib2.build_opener(urllib2.HTTPBasicAuthHandler(pm))
    urllib2.install_opener(opener)

    keep = set()
    step = 50
    for i in itertools.count(step = step):
        f = common.retrieve_m(config["clearspace-root"] + "/view-documents.jspa?start=%u&numResults=%u&filter=presentations" % (i, step))
        index = DocIndex(f.read())
        f.close()

        for item in index.items:
            if item["href"] in db and not args["all"]:
                path = db.get(item["href"])

            else:
                f = common.retrieve_m(config["clearspace-root"] + item["href"])
                doc = WikiDoc(f.read())
                f.close()

                path = doc.path + "/" + doc.filename
                
                if want(path):
                    skip = False
                    if os.path.exists(path):
                        st = os.stat(path)
                        if st.st_mtime == doc.mtime:
                            skip = True

                    if not skip:
                        common.mkdirs(doc.path)
                        common.retrieve(config["clearspace-root"] + doc.filehref,
                                        path, force = True)
                        common.mkro(path)
                        os.utime(path, (doc.mtime, doc.mtime))

            updatedbs(db, keep, item["href"], path)

        if len(index.items) != step:
            break

    for dirpath, dirnames, filenames in os.walk(".", topdown = False):
        # remove local files which are no longer found in clearspace
        for f in filenames:
            path = os.path.relpath(dirpath, ".") + "/" + f
            if not path.startswith("./.") and path not in keep:
                os.unlink(path)

        # prune empty local directories
        if not os.listdir(dirpath):
            os.rmdir(dirpath)
