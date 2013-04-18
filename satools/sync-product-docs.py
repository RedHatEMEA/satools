#!/usr/bin/python -ttu

import argparse
import common
import httplib
import lxml.html
import os
import Queue
import re
import sys
import threading
import urllib2
import urlparse

class LockedSet(object):
    def __init__(self):
        self.lock = threading.Lock()
        self.s = set()

    def add(self, x):
        with self.lock:
            self.s.add(x)

    def tas(self, x):
        with self.lock:
            if x in self.s:
                return True
            self.s.add(x)
            return False

class FilterAction(argparse.Action):
    """Adds -i or -x filters to the list of filter regexes"""
    def __call__(self, parser, namespace, values, option_string = None):
        filters = getattr(namespace, self.dest)
        if filters == None:
            filters = []
        filters.append("%c/%s/" % (option_string[1], values))
        setattr(namespace, self.dest, filters)

q = Queue.Queue()
tls = threading.local()
warnings = 0
fileset = LockedSet()

consolelock = threading.Lock()
def msg(s):
    with consolelock:
        print >>sys.stderr, s

def warn(s):
    global warnings
    with consolelock:
        warnings += 1
        print >>sys.stderr, s

def worker(host):
    tls.conn = httplib.HTTPSConnection(host)

    for item in iter(q.get, "STOP"):
        item[0](*item[1:])
        q.task_done()

def threads_create(numthreads, args):
    threads = []
    for i in range(numthreads):
        t = threading.Thread(target = worker, args = args)
        t.daemon = True
        t.start()
        threads.append(t)
    return threads

def threads_destroy(threads):
    for t in threads:
        q.put("STOP")

    for t in threads:
        t.join()

def parse_args(config):
    ap = argparse.ArgumentParser()
    ap.set_defaults(filters = [])
    ap.add_argument("-i", dest = "filters",
                    action = FilterAction,
                    metavar = "REGEX",
                    help = "include documents that match this regex, can be ordered")
    ap.add_argument("-c", action = "store_true", dest = "clean",
                    help = "clean %s" % config["product-docs-base"])
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

def match_filter(filters, path):
    """Matches path against a list of filters in the same way as lvm.conf"""
    for ft in filters:
        ftmatch = re.match(r"([airx])(.)(.*)\2$", ft)
        if not ftmatch:
            warn("WARNING: could not parse filter %s" % ft)
            continue

        if re.search(ftmatch.group(3), path, re.I):
            if ftmatch.group(1) == "a" or ftmatch.group(1) == "i":
                return True
            else:
                return False
    return True

def download(url, dest):
    if fileset.tas(dest):
        return

    common.mkdirs(os.path.split(dest)[0])

    try:
        common.retrieve(url, dest)

        if args["type"] == "html-single" and dest.endswith(".html"):
            get_deps_html(url, dest)

        if args["type"] == "html-single" and dest.endswith(".css"):
            get_deps_css(url, dest)

        common.mkro(dest)
       
    except urllib2.HTTPError, e:
        if e.code == 403 or e.code == 404:
            warn("WARNING: %s on %s, continuing..." % (e, url))
        else:
            raise

def update_url(url, home):
    urlp = urlparse.urlparse(url)
    if not urlp.path or urlp.path[0] != "/": return url
    return os.path.relpath(urlp.path[1:], home)

def update_url_css(m, home):
    return "url(\"%s\")" % update_url(m.group(1), home)

def get_deps_css(url, dest):
    with open(dest) as f:
        css = f.read()

    rx = re.compile('url\("?([^)]+?)"?\)')
    for m in rx.finditer(css):
        _url = urlparse.urljoin(url, m.group(1))
        urlp = urlparse.urlparse(_url)
        if urlp.netloc and urlp.netloc != "access.redhat.com": continue

        q.put((download, _url, os.path.normpath(urlp.path[1:])))

    with open(dest, "w") as f:
        css = rx.sub(lambda url: update_url_css(url, os.path.split(dest)[0]),
                     css)
        f.write(css)

def update_url_html(url, home):
    newurl = update_url(url, home)
    parent = url.getparent()
    if parent.tag in ("img", "input", "script"):
        parent.set("src", newurl)
    elif parent.tag in ("link", ):
        parent.set("href", newurl)
    elif parent.tag in ("object", ):
        parent.set("data", newurl)

def get_deps_html(url, dest):
    html = lxml.html.parse(dest)
    for u in html.xpath("//img/@src | //input/@src | //link/@href | //object/@data | //script/@src"):
        _url = urlparse.urljoin(url, u)
        urlp = urlparse.urlparse(_url)
        if urlp.netloc and urlp.netloc != "access.redhat.com": continue

        q.put((download, _url, os.path.normpath(urlp.path[1:])))

        update_url_html(u, os.path.split(dest)[0])

    html.write(dest)
            
def get_books(path):
    xml = get(path)
    for href in xml.xpath("//a[text()='%(type)s']/@href" % args):
        dest = href[1:]

        if args["type"] != "html-single":
            # don't munge html-single paths as it breaks HTML relative paths
            (d, f) = os.path.split(dest)
            d = d.split("/", 3)[3]  # remove ^site/documentation/<locale>
            d = d.rsplit("/", 2)[0] # remove <type>/<book name>$
            d = d.replace("_", " ")
            dest = os.path.join(d, f)

        if not match_filter(filters, dest):
            continue

        q.put((download, "https://access.redhat.com" + href, dest))

def get_products(path):
    xml = get(path)
    for href in xml.xpath("//a[starts-with(@href,'/site/documentation/')]/@href"):
        q.put((get_books, href + "?locale=" + args["locale"]))

def get(path):
    msg(path)
    tls.conn.request("GET", path)
    response = tls.conn.getresponse()
    data = response.read()

    if response.status != 200:
        warn("WARNING: get %s: HTTP response %u" % (path, response.status))
        data = "<html/>"

    return lxml.html.fromstring(data)

def cleanup():
    for dirpath, dirnames, filenames in os.walk("."):
        dp = os.path.relpath(dirpath, ".")

        for f in filenames:
            path = os.path.join(dp, f)
            if not path.startswith("./.") and path not in fileset.s:
                os.unlink(path)

    for dirpath, dirnames, filenames in os.walk(".", topdown = False):
        if dirpath != "." and not os.listdir(dirpath):
            os.rmdir(dirpath)

if __name__ == "__main__":
    config = common.load_config()

    global args
    args = parse_args(config)

    common.mkdirs(config["product-docs-base"])
    os.chdir(config["product-docs-base"])

    filters = args["filters"]
    filters.extend(config["product-docs-filter"])

    lock = common.Lock(".lock")

    if int(config["product-docs-threads"]) > 1:
        common.progress = lambda x, y: None
        common.progress_finish = lambda: None

    threads = threads_create(int(config["product-docs-threads"]),
                             ("access.redhat.com", ))

    q.put((get_products, "/site/documentation/"))
    q.join()

    threads_destroy(threads)

    if args["clean"]:
        cleanup()

    if warnings:
        warn("WARNING: %u warnings occurred." % warnings)

    common.write_sync_done()
