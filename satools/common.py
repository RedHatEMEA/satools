#!/usr/bin/python

import calendar
import codecs
import errno
import fcntl
import os
import shutil
import sys
import time
import urllib2

configfile = os.environ["HOME"] + "/.satools"

class DB(object):
    def __init__(self, path):
        self.cmpfn = None
        self.readdb(path)

    def readdb(self, path):
        self.entries = {}
        self.path = path

        if not os.path.exists(self.path):
            return

        with codecs.open(self.path, "r", "utf-8") as f:
            for line in f:
                if "=" in line:
                    (key, value) = map(unicode.strip, line.split("=", 1))
                    self.entries[key] = value
                else:
                    self.entries[line.strip()] = None

    def writedb(self):
        temppath = mktemppath(self.path)
    
        with codecs.open(temppath, "w", "utf-8") as f:
            for key in sorted(self.entries.keys(), self.cmpfn):
                if self.entries[key]:
                    print >>f, "%s=%s" % (key, self.get(key))
                else:
                    print >>f, key
            f.flush()
            os.fsync(f.fileno())

        rename(temppath, self.path)

    def add(self, key, value = None):
        if key in self.entries and self.entries[key] == value: return
        self.entries[key] = value
        self.writedb()

    def get(self, key):
        return self.entries[key]

    def __contains__(self, key):
        return key in self.entries

class HeadRequest(urllib2.Request):
    def get_method(self):
        return "HEAD"

class Lock(object):
    def __init__(self, path):
        self.path = path
        self.lock()

    def lock(self):
        self.f = open(self.path, "a")
        fcntl.lockf(self.f, fcntl.LOCK_EX | fcntl.LOCK_NB)

    def unlock(self):
        fcntl.lockf(self.f, fcntl.LOCK_UN)
        self.f.close()

class Mapper(object):
    @staticmethod
    def init(config):
        Mapper._d2s = {}
        for sync in config["juno-sync"]:
            (srcbase, dstbase) = sync.rsplit(" ", 1)
            Mapper._d2s[dstbase] = srcbase

    @staticmethod
    def d2s(path):
        if not os.sep in path: path += os.sep
        (head, tail) = path.split(os.sep, 1)
        return os.path.join(Mapper._d2s[head], tail)

class ShortReadException(Exception):
    pass

def load_config():
    config = { "product-docs-base": os.environ["HOME"] + "/content/product-docs",
               "product-docs-filter": [],
               "product-docs-locale": "en-US",
               "product-docs-type": "pdf",
               "product-docs-threads": "4",
               "resourcelibrary-base": os.environ["HOME"] + "/content/resourcelibrary",
               "resourcelibrary-threads": "4",
               "elluminate-base": os.environ["HOME"] + "/content/elluminate",
               "lists-base": os.environ["HOME"] + "/content/lists",
               "lists-start-year": "2007",
               "lists-sync": [],
               "lgrep-mailbox": os.environ["HOME"] + "/.mail/results",
               "lgrep-exec": None,
               "thunderbird-base": None,
               "thunderbird-folder": "lists",
               "attachments-base": os.environ["HOME"] + "/content/attachments",
               "attachments-enabled": "0",
               "attachments-odponly": "1",
               "clearspace-base": os.environ["HOME"] + "/content/clearspace",
               "clearspace-root": None,
               "clearspace-username": None,
               "clearspace-password": None,
               "clearspace-threads": "4",
               "clearspace-odponly": "1",
               "juno-base": os.environ["HOME"] + "/content/juno",
               "juno-sync": [],
               "juno-sync-ignore": [],
               "gsa-base": os.environ["HOME"] + "/content/gsa",
               "gsa-sync": [],
               "gsa-url": "",
               "pt-base": os.environ["HOME"] + "/content/pt",
               "pt-root": None,
               "pt-username": None,
               "pt-password": None,
               "pt-threads": "4",
               "pt-odponly": "1",
               "webdav-sync": [],
               "webdav-threads": "4",
               "webdav-odponly": "0",
               }

    if not os.path.exists(configfile):
        with open(configfile, "w") as f:
            print >>f, \
"""# Specify the lists to synchronise here by adding multiple lines of the
#   format lists-sync=URL.  If the list archives are password protected, use
#   format lists-sync=URL USERNAME PASSWORD
# lists-sync=http://lists.fedoraproject.org/pipermail/announce
# lists-sync=http://lists.fedoraproject.org/pipermail/test
# lists-sync=http://my.private.list/mailman/private/announce joebloggs secret

# For lgrep to run mutt on its results mbox, uncomment the following line:
# lgrep-exec=mutt -f %path
# For lgrep to run alpine on its results mbox, uncomment the following line:
# lgrep-exec=alpine -f %filename -n 1 -i
# N.B. your MUA may also need additional configuration.

# The product docs that will be synced can be restricted with filters.  These
# work identically to LVM filters (man lvm.conf), where the first matching
# filter in the list is used.  Filters in the form a/./ will accept, those
# with r/./ will reject.
# product-docs-filter=r/jboss/
# product-docs-filter=a/.*/
"""
        os.chmod(configfile, 0600)

    with open(configfile) as f:
        for line in f:
            line = line.strip()
            if line == "" or line[0] == "#": continue

            (k, v) = map(str.strip, line.split("=", 1))
            if k in config and type(config[k]) == list:
                config[k].append(v)
            else:
                config[k] = v

    Mapper.init(config)

    return config

def mkdirs(path):
    try:
        os.makedirs(path)
    except OSError, e:
        if e.errno != errno.EEXIST:
            raise

def mkro(path):
    st = os.stat(path)
    os.chmod(path, st.st_mode & ~0222)

def mktemppath(path):
    parts = os.path.split(path)
    return os.path.join(parts[0], "." + parts[1])

def progress(current, total):
    percent = 100 * current / total
    print >>sys.stderr, "\r  [%s%s] %u%% (%u) " % \
        ("*" * (percent / 2), " " * (50 - (percent / 2)), percent, current),

def progress_finish():
    print >>sys.stderr

def rename(srcpath, dstpath):
    unlink(dstpath)
    os.rename(srcpath, dstpath)

def rmtree(path):
    if os.path.exists(path):
        shutil.rmtree(path)

def sendfile(srcf, dstf):
    total = 0

    try:
        total = int(srcf.info().getheader("Content-Length"))
        current = 0
    except (AttributeError, TypeError):
        pass

    while True:
        data = srcf.read(4096)

        if total:
            current += len(data)
            progress(current, total)

        if not data: break
        
        dstf.write(data)

    if total:
        progress_finish()

        if current != total:
            raise ShortReadException()

def sendfile_disk(srcf, path):
    temppath = mktemppath(path)

    dstf = open(temppath, "w")
    sendfile(srcf, dstf)

    dstf.flush()
    os.fsync(dstf.fileno())
    dstf.close()

    rename(temppath, path)

def retrieve_m(url, data = None, tries = 1, opener = None):
    print >>sys.stderr, "Retrieving %s..." % url
    for i in xrange(tries):
        try:
            if opener:
                return opener.open(url, data)
            else:
                return urllib2.urlopen(url, data)
            
        except urllib2.URLError, e:
            if getattr(e, "code", 0) != 404 and i < tries - 1:
                print >>sys.stderr, "URLError: %s on %s, sleeping and retrying..." % (e, url)
                time.sleep(10)
            else:
                raise

def retrieve(url, path, data = None, force = False, tries = 1, opener = None):
    if os.path.exists(path) and not force:
        for i in xrange(tries):
            try:
                if opener:
                    srcf = opener.open(HeadRequest(url))
                else:
                    srcf = urllib2.urlopen(HeadRequest(url))
            except urllib2.URLError, e:
                if getattr(e, "code", 0) != 404 and i < tries - 1:
                    print >>sys.stderr, "URLError: %s on %s, sleeping and retrying..." % (e, url)
                    time.sleep(10)
                else:
                    raise

        if "Last-Modified" in srcf.info() and "Content-Length" in srcf.info():
            mtime = calendar.timegm(time.strptime(srcf.info()["Last-Modified"],
                                                  "%a, %d %b %Y %H:%M:%S %Z"))

            st = os.stat(path)

            if mtime == st.st_mtime and int(srcf.info()["Content-Length"]) == st.st_size:
                return

    for i in xrange(tries):
        srcf = retrieve_m(url, data, tries, opener = opener)
        try:
            sendfile_disk(srcf, path)
            break
        except ShortReadException, e:
            if i < tries - 1:
                print >>sys.stderr, "Short read, retrying..."
            else:
                raise
        finally:
            srcf.close()

    if "Last-Modified" in srcf.info():
        mtime = calendar.timegm(time.strptime(srcf.info()["Last-Modified"],
                                              "%a, %d %b %Y %H:%M:%S %Z"))
        os.utime(path, (mtime, mtime))

def retrieve_tmpfile(url, data = None):
    dstf = os.tmpfile()

    srcf = retrieve_m(url, data)
    sendfile(srcf, dstf)
    srcf.close()

    dstf.seek(0)

    return dstf

def unlink(path):
    if os.path.exists(path):
        os.unlink(path)

def write_sync_done():
    with open(".sync-done", "w") as f:
        pass

# http://bugs.python.org/issue7980
time.strptime("0", "%S")
