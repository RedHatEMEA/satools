#!/usr/bin/python

from db import DB
from satools import common
import argparse
import hashlib
import multiprocessing
import odptools
import os
import PIL.Image
import re
import stat
import sys
import time

# TODO: some soffice crashes are recoverable (skip slide)...
# C++ code threw St12length_error: vector::_M_default_append (recoverable - broken WMF file)
# C++ code threw N5vigra21PreconditionViolationE: Precondition violation!BasicImage::upperLeft(): image must have non-zero size. (not recoverable)

slidesize = (1024, 768)
thumbsize = (256, 192)

class Mapper(object):
    @staticmethod
    def init():
        Mapper._s2d = {}
        Mapper._d2s = {}
        for sync in config["juno-sync"]:
            (srcbase, dstbase) = sync.rsplit(" ", 1)
            Mapper._s2d[srcbase] = dstbase
            Mapper._d2s[dstbase] = srcbase

    @staticmethod
    def s2d(path):
        for head in Mapper._s2d:
            if path.startswith(head):
                return Mapper._s2d[head] + path[len(head):]
        raise Exception("mapping not found")

    @staticmethod
    def d2s(path):
        if not os.sep in path: path += os.sep
        (head, tail) = path.split(os.sep, 1)
        return os.path.join(Mapper._d2s[head], tail)

def resize(im, dstp, target):
    im = im.resize(target, PIL.Image.ANTIALIAS)
    im.save(dstp)

def constrain(current, target):
    (currentx, currenty) = current
    (targetx, targety) = target
    currentaspect = float(currentx) / float(currenty)
    targetaspect = float(targetx) / float(targety)
    if currentaspect > targetaspect:
        return (targetx, int(targetx / currentaspect))
    else:
        return (int(targety * currentaspect), targety)

def extend(png, target):
    srcim = PIL.Image.open(png)
    dstim = PIL.Image.new("RGBA", target)

    (currentx, currenty) = srcim.size
    (targetx, targety) = target

    dstim.paste(srcim, ((targetx - currentx) / 2, (targety - currenty) / 2))
    dstim.save(png)
    return dstim

def removepagenumbers(pages):
    for i in range(0, pages.getCount()):
        page = pages.getByIndex(i)
        for j in range (0, page.getCount()):
            obj = page.getByIndex(j)
            # TODO: this is a bit doubtful
            if obj.supportsService("com.sun.star.drawing.Text") and \
                    obj.getString() == "<number>":
                obj.setString("")

def insertcontent(dstp, preso):
    args = []

    log("Exporting content...")
    pages = preso.getDrawPages()
    for i in range(0, pages.getCount()):
        t = []

        page = pages.getByIndex(i)
        for j in range(0, page.getCount()):
            shape = page.getByIndex(j)

            if shape.supportsService("com.sun.star.drawing.Text"):
                paras = shape.createEnumeration()
                while paras.hasMoreElements():
                    para = paras.nextElement()
                    portions = para.createEnumeration()
                    while portions.hasMoreElements():
                        portion = portions.nextElement()
                        t.append(portion.getString())
                    t.append("\n")

        args.append(("".join(t), dstp, i))

    return [["INSERT INTO slides_fts (docid, content) "
             "SELECT rowid, ? FROM slides WHERE preso = ? AND slide = ?", args]]

def createthumbs(juno, dstp, preso):
    args = []
    common.mkdirs(os.path.join("slides", dstp))
    common.mkdirs(os.path.join("thumbs", dstp))

    filter = juno.createInstance("com.sun.star.drawing.GraphicExportFilter")

    pages = preso.getDrawPages()
    pagect = pages.getCount()
    for i in range(0, pagect):
        slidep = os.path.join("slides", dstp, "%03u.png" % i)
        thumbp = os.path.join("thumbs", dstp, "%03u.jpg" % i)

        page = pages.getByIndex(i)
        (x, y) = constrain((page.Width, page.Height), slidesize)

        filterdata = juno.Any("[]com.sun.star.beans.PropertyValue",
                              (juno.PropertyValue("PixelWidth", x),
                               juno.PropertyValue("PixelHeight", y)))

        filter.setSourceDocument(page)

        log("Exporting PNG %u/%u..." % (i + 1, pagect))
        filter.filter((juno.PropertyValue("MediaType", "image/png"),
                       juno.PropertyValue("URL", juno.mkpath(slidep)),
                       juno.PropertyValue("FilterData", filterdata)))

        log("Resizing PNGs...")
        im = extend(slidep, slidesize)
        resize(im, thumbp, thumbsize)

        with open(slidep) as f:
            png = f.read()

        args.append((dstp, i, hashlib.sha1(png).hexdigest()))

    return [["INSERT INTO slides VALUES(?, ?, ?)", args]]

def insertpreso(srcp, dstp):
    mtime = os.stat(srcp)[stat.ST_MTIME]
    return [["REPLACE INTO presos VALUES(?, ?)",
             [(dstp, mtime)]]]

def needs_add(db, srcp, dstp):
    mtime = os.stat(srcp)[stat.ST_MTIME]

    cu = db.execute("SELECT mtime FROM presos WHERE path = ?", (dstp, ))
    row = cu.fetchone()

    if row and row["mtime"] == mtime:
        return False

    return odptools.is_odp(srcp)

def add_preso(db, srcp):
    dstp = Mapper.s2d(srcp)
    if not needs_add(db, srcp, dstp): return

    log("Adding %s..." % srcp)

    common.mkdirs(os.path.join("root", os.path.dirname(dstp)))

    juno = odptools.juno.juno()

    preso = juno.desktop.loadComponentFromURL \
        (juno.mkpath(srcp), "_blank", 0,
         (juno.PropertyValue("Hidden", True),
          juno.PropertyValue("ReadOnly", True),
          juno.PropertyValue("FilterName", "impress8")))

    preso.storeToURL(juno.mkpath(os.path.join(os.getcwd(), "root", dstp)), ())

    removepagenumbers(preso.getMasterPages())
    removepagenumbers(preso.getDrawPages())

    sql = insertpreso(srcp, dstp)
    sql.extend(createthumbs(juno, dstp, preso))
    sql.extend(insertcontent(dstp, preso))

    log("Committing and disconnecting...")

    preso.dispose()
    juno.disconnect()

    doqueries(db, sql)

def log(s):
    sys.stderr.write("%d: %s: %s\n" % (workerid, time.ctime(), s))
    
def worker(me, q):
    global workerid
    workerid = me

    db = DB(".db")
    for srcp in iter(q.get, "STOP"):
        try:
            add_preso(db, srcp)
        except Exception, e:
            log("WARNING: add_preso failed (%s), skipping..." %
                str(e).replace("\n", ""))

    db.close()

def add_trees():
    procs = []

    q = multiprocessing.Queue()
    for i in range(args["workers"]):
        p = multiprocessing.Process(target = worker, args = (i, q))
        p.start()
        procs.append(p)

    for sync in config["juno-sync"]:
        srcpath = sync.rsplit(" ", 1)[0]
        for dirpath, dirnames, filenames in os.walk(srcpath):
            if os.path.split(dirpath)[1][0] == ".":
                del dirnames[:]
                continue

            for f in sorted(filenames):
                q.put(os.path.join(dirpath, f))

    for p in procs:
        q.put("STOP")

    q.close()
    q.join_thread()

    for p in procs:
        p.join()

    for p in procs:
        if p.exitcode:
            sys.exit(1)

def check_fs_2(db, fs, slideregexp = None):
    for dirpath, dirnames, filenames in os.walk(fs):
        reldirpath = dirpath.split(os.sep, 1)[1]
        srcp = Mapper.d2s(reldirpath)

        if os.path.split(dirpath)[1][0] == "." or not os.path.exists(srcp):
            common.rmtree(dirpath)
            del dirnames[:]
            continue

        for f in filenames:
            if slideregexp:
                m = slideregexp.match(f)
                if m:
                    slide = int(m.group(1))
                    cu = db.execute("SELECT preso, slide FROM slides "
                                    "WHERE preso = ? AND slide = ?",
                                    (reldirpath, slide))
                    row = cu.fetchone()
                    if row is not None:
                        continue
            else:
                cu = db.execute("SELECT path FROM presos WHERE path = ?",
                                (os.path.join(reldirpath, f), ))
                row = cu.fetchone()
                if row is not None and os.path.isfile(os.path.join(srcp, f)):
                    continue

            os.unlink(os.path.join(dirpath, f))

def check_fs_1(db, fs, slideregexp = None):
    (dirpath, dirnames, filenames) = os.walk(fs).next()

    for d in dirnames:
        if d not in Mapper._d2s:
            common.rmtree(d)

    for f in filenames:
        os.unlink(f)

    for d in dirnames:
        if d in Mapper._d2s:
            check_fs_2(db, os.path.join(fs, d), slideregexp)


def check_fs(db):
    (dirpath, dirnames, filenames) = os.walk(".").next()

    for d in dirnames:
        if d not in ("root", "slides", "thumbs"):
            common.rmtree(d)

    for f in filenames:
        if not f.startswith("."):
            os.unlink(f)

    check_fs_1(db, "root")
    check_fs_1(db, "slides", re.compile("^(\d{3})\.png"))
    check_fs_1(db, "thumbs", re.compile("^(\d{3})\.jpg"))

def check_db(db):
    args = set()
    for row in db.execute("SELECT path FROM presos"):
        srcp = Mapper.d2s(row["path"])
        rootp = os.path.join("root", row["path"])
        if not os.path.exists(srcp) or not os.path.exists(rootp):
            args.add(row["path"])

    for row in db.execute("SELECT preso, slide FROM slides"):
        if row["preso"] in args: continue
        slidesp = os.path.join("slides", row["preso"],
                               "%03u.png" % row["slide"])
        thumbsp = os.path.join("thumbs", row["preso"],
                               "%03u.jpg" % row["slide"])
        if not os.path.exists(slidesp) or not os.path.exists(thumbsp):
            args.add(row["preso"])

    args = map(lambda x:(x, ), args)
    doqueries(db, [["DELETE FROM presos WHERE PATH = ?", args]])

def doqueries(db, sql):
    for s in sql:
        db.executemany(s[0], s[1])
    db.commit()

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-c", action="store_false", dest = "addtrees",
                    help = "clean %s" % config["juno-base"])
    ap.add_argument("-w", dest = "workers", default = 4, type = int,
                    help = "number of workers (default 4)")

    return vars(ap.parse_args())

if __name__ == "__main__":
    config = common.load_config()
    args = parse_args()
    Mapper.init()

    common.mkdirs(config["juno-base"])
    os.chdir(config["juno-base"])

    lock = common.Lock(".lock")

    os.nice(10)

    db = DB(".db")
    check_fs(db)
    check_db(db)
    db.close()

    if args["addtrees"]:
        add_trees()
