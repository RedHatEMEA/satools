#!/usr/bin/python3 -u

import codecs
import common
import http.cookiejar
import copy
import lxml.html.soupparser
import os
import queue
import sys
import threading
import time
import urllib.error
import urllib.request

q = queue.Queue()
threadlock = threading.Lock()
warnings = 0

class Item:
    def ignore_url(self, url):
        if url.startswith("https://engage.redhat.com/") or \
                url.startswith("http://engage.jboss.com/"):
            return True
        elif url[0] != "/":
            # link to another site
            warn("unexpected link %s (#%u, %s, %s), continuing..." % \
                     (url, self.number, self.title, self.type_))
            return True
        return False

    def set_dlurl(self, dlurl):
        if self.ignore_url(dlurl):
            return False
        self.dlurl = "http://www.redhat.com" + dlurl
        return True

    def set_pageurl(self, pageurl):
        if self.ignore_url(pageurl):
            return False
        self.pageurl = "http://www.redhat.com" + pageurl
        return True

def download_item(item, extension, tries = 1):
    dstfile = os.path.join(item.type_, item.pageurl.split("/")[-1]) + extension

    common.mkdirs(item.type_)
    try:
        print("\r[%u]" % item.number, end=' ', file = sys.stderr)
        common.retrieve(item.dlurl, dstfile, tries = tries)
        common.mkro(dstfile)
    except urllib.error.HTTPError as e:
        warn("can't download item at %s (#%u, %s, %s) (%s), continuing..." % \
                 (item.dlurl, item.number, item.title, item.type_, e))

def download_item_page(item, tries = 1):
    try:
        html = common.retrieve_m(item.pageurl, tries = tries)
    except urllib.error.HTTPError as e:
        warn("can't load item page %s (#%u, %s, %s) (%s), continuing..." % \
                 (item.pageurl, item.number, item.title, item.type_, e))
        return

    xml = lxml.html.soupparser.fromstring(html)

    try:
        if item.type_ == "Videos":
            item.set_dlurl(xml.xpath("//a[text()='OGG']/@href")[0])
            extension = ".ogg"
        else:
            item.set_dlurl(xml.xpath("//a[@class='ResourceFile']/@href")[0])
            extension = ".pdf"
    except IndexError:
        if item.type_ != "Other Resources":
            # "Other Resources" often contain a text article with no link
            warn("can't find item download link at %s (#%u, %s, %s), continuing..." % (item.pageurl, item.number, item.title, item.type_))
        return

    download_item(item, extension, tries = tries)

def warn(s):
    global warnings

    threadlock.acquire()
    print("%s: WARNING: %s" % (threading.current_thread().name, s), file = sys.stderr)
    warnings += 1
    threadlock.release()

def worker():
    while True:
        items = q.get()
        try:
            items[0](*items[1:])
        finally:
            q.task_done()

if __name__ == "__main__":
    config = common.load_config()

    common.mkdirs(config["resourcelibrary-base"])
    os.chdir(config["resourcelibrary-base"])

    # Prevent multiple application instances running at once
    lock = common.Lock(".lock")

    # http://www.redhat.com/resourcelibrary relies on tracking cookies
    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
    urllib.request.install_opener(opener)

    # Permit write of UTF-8 characters to stderr (required when piping output)
    if sys.stderr.encoding == None:
        sys.stderr = codecs.getwriter("UTF-8")(sys.stderr)

    threads = int(config["resourcelibrary-threads"])
    # When multi-threaded, silence progress meter
    if threads > 1:
        common.progress = lambda x, y: None
        common.progress_finish = lambda: None

    tries = 10
    # Initialise cookie store
    common.retrieve_m("http://www.redhat.com/resourcelibrary/results",
                      tries = tries)

    i = 0
    indexurl = "http://www.redhat.com/resourcelibrary/results?portal:componentId=bf73926d-2aa3-4b8b-bf8d-a1f6f56b8469&portal:type=action&actionType=orderBy&orderBy=Date-Desc&resultPerPage=100"
    while True:
        html = common.retrieve_m(indexurl, tries = tries)
        xml = lxml.html.soupparser.fromstring(html)

        for indexitem in xml.xpath("//div[@id='sidebar-left-events']"):
            indexitem = copy.deepcopy(indexitem)

            i += 1
            item = Item()

            item.number = i
            item.type_ = indexitem.xpath("//b[text()='Type:']")[0].tail.strip()
            item.title = indexitem.xpath("//a/text()")[0]

            if item.type_ in ("Demos and software tours", "On-demand webinar",
                              "Online tools", "Sales guides"):
                continue

            if not item.set_pageurl(indexitem.xpath("//a/@href")[0]):
                continue

            if item.type_ in ("Case Studies", "Whitepapers"):
                # Shortcut: these items have a direct link from the top-level
                # index
                try:
                    dlurl = indexitem.xpath("//div[@class='pdf-links']//a[@target='_blank']/@href")[0]
                except IndexError:
                    warn("can't find index download link (#%u, %s, %s), continuing..." % (item.number, item.title, item.type_))
                    continue

                if item.set_dlurl(dlurl):
                    q.put((download_item, item, ".pdf", tries))

            else:
                # These items have a link from the item page itself
                q.put((download_item_page, item, tries))
            
        try:
            indexurl = "http://www.redhat.com" + \
                xml.xpath("//a[@rel='next']/@href")[0]
        except IndexError:
            break

    print("INFO: %u items parsed." % i, file = sys.stderr)

    for i in range(threads):
        t = threading.Thread(target = worker, name = i)
        t.daemon = True
        t.start()

    q.join()
    if warnings:
        warn("%u warnings occurred." % warnings)

    with open(".sync-done", "w") as f:
        pass
