#!/usr/bin/python

from db import DB
from satools import common
import argparse
import hashlib
import multiprocessing
import odptools
import os
import PIL.Image
import stat
import sys
import time

slidesize = (1024, 768)
thumbsize = (256, 192)

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

    return [["INSERT INTO slides_fts (docid, content) SELECT rowid, ? FROM slides WHERE preso = ? AND slide = ?", args]]

def createthumbs(juno, dstp, preso):
    args = []
    common.mkdirs(dstp + "/slides")
    common.mkdirs(dstp + "/thumbs")
    filter = juno.createInstance("com.sun.star.drawing.GraphicExportFilter")

    pages = preso.getDrawPages()
    pagect = pages.getCount()
    for i in range(0, pagect):
        slidep = dstp + "/slides/%03u.png" % i
        thumbp = dstp + "/thumbs/%03u.jpg" % i

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
    if not odptools.is_odp(srcp):
        return False

    mtime = os.stat(srcp)[stat.ST_MTIME]

    cu = db.execute("SELECT mtime FROM presos WHERE path = ?", (dstp, ))
    row = cu.fetchone()

    return row is None or row["mtime"] != mtime

def add_preso(db, srcp, dstp):
    if not needs_add(db, srcp, dstp): return

    log("Adding %s..." % srcp)

    common.rmtree(dstp)
    common.mkdirs(dstp)

    juno = odptools.juno.juno()

    preso = juno.desktop.loadComponentFromURL \
        (juno.mkpath(srcp), "_blank", 0,
         (juno.PropertyValue("Hidden", True),
          juno.PropertyValue("ReadOnly", True),
          juno.PropertyValue("FilterName", "impress8")))

    preso.storeToURL(juno.mkpath(os.path.join(os.getcwd(), dstp) + "/data.odp"), ())

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
    for srcp, dstp in iter(q.get, "STOP"):
        try:
            add_preso(db, srcp, dstp)
        except Exception, e:
            log("WARNING: add_preso failed (%s), skipping..." %
                str(e).replace("\n", ""))

    db.close()

def add_tree(srcbase, dstbase):
    procs = []

    q = multiprocessing.Queue()
    for i in range(args["workers"]):
        procs.append(multiprocessing.Process(target = worker, args = (i, q)))

    for p in procs:
        p.start()

    for dirpath, dirnames, filenames in sorted(os.walk(srcbase)):
        for f in sorted(filenames):
            srcp = os.path.join(dirpath, f)
            dstp = os.path.join(dstbase, os.path.relpath(srcp, srcbase))

            q.put((srcp, dstp))

    for i in range(len(procs)):
        q.put("STOP")

    q.close()
    q.join_thread()

    for p in procs:
        p.join()

    for p in procs:
        if p.exitcode:
            sys.exit(1)

def check_fs(db, srcbase, dstbase):
    for dirpath, dirnames, filenames in os.walk(dstbase):
        reldirpath = os.path.relpath(dirpath, dstbase)
        srcp = os.path.join(srcbase, reldirpath)
        if not os.path.exists(srcp):
            common.rmtree(dirpath)
            del dirnames[:]
            continue

        mode = os.stat(srcp).st_mode
        if stat.S_ISDIR(mode):
            for f in filenames:
                os.unlink(os.path.join(dirpath, f))
            continue

        if stat.S_ISREG(mode):
            cu = db.execute("SELECT path FROM presos WHERE path = ?", (dirpath, ))
            row = cu.fetchone()
            if row is None:
                common.rmtree(dirpath)

            del dirnames[:]
            continue

        raise Exception("unexpected file type")

    for dirpath, dirnames, filenames in os.walk(dstbase, topdown = False):
        if not os.listdir(dirpath):
            os.rmdir(dirpath)

def check_db(db, srcbase, dstbase):
    args = []

    for row in db.execute("SELECT path FROM presos WHERE SUBSTR(path, 1, ?) = ?",
                          (len(dstbase) + 1, dstbase + "/")):
        reldirpath = os.path.relpath(row["path"], dstbase)
        srcp = os.path.join(srcbase, reldirpath)
        if not os.path.exists(srcp) or not os.path.exists(row["path"]):
            args.append((row["path"], ))

    doqueries(db, [["DELETE FROM presos WHERE PATH = ?", args]])

def check_tree(db, srcbase, dstbase):
    check_db(db, srcbase, dstbase)
    check_fs(db, srcbase, dstbase)

def doqueries(db, sql):
    for s in sql:
        db.executemany(s[0], s[1])
    db.commit()

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-c", action="store_true", dest = "onlyclean",
                    help = "clean %s" % config["juno-base"])
    ap.add_argument("-w", dest = "workers", default = 4, type = int,
                    help = "number of workers (default 4)")

    return vars(ap.parse_args())

if __name__ == "__main__":
    global args, config

    config = common.load_config()
    args = parse_args()

    os.nice(10)

    common.mkdirs(config["juno-base"])
    os.chdir(config["juno-base"])

    lock = common.Lock(".lock")

    for sync in config["juno-sync"]:
        (srcbase, dstbase) = sync.rsplit(" ", 1)
        if not args["onlyclean"]:
            add_tree(srcbase, dstbase)

        db = DB(".db")
        check_tree(db, srcbase, dstbase)
        db.close()
