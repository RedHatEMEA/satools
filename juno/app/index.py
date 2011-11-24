#!/usr/bin/python

from satools import common
import db
import hashlib
import odptools
import os
import PIL.Image
import stat
import sys

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
    for i in range(0, pages.getCount()):
        slidep = dstp + "/slides/%03u.png" % i
        thumbp = dstp + "/thumbs/%03u.jpg" % i

        page = pages.getByIndex(i)
        (x, y) = constrain((page.Width, page.Height), slidesize)

        filterdata = juno.Any("[]com.sun.star.beans.PropertyValue",
                              (juno.PropertyValue("PixelWidth", x),
                               juno.PropertyValue("PixelHeight", y)))

        filter.setSourceDocument(page)
        filter.filter((juno.PropertyValue("MediaType", "image/png"),
                       juno.PropertyValue("URL", juno.mkpath(slidep)),
                       juno.PropertyValue("FilterData", filterdata)))

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

def needs_add(srcp, dstp):
    if not odptools.is_odp(srcp):
        return False

    # if dstp in badfilelist:
    #     return False

    mtime = os.stat(srcp)[stat.ST_MTIME]

    cu = db.execute("SELECT mtime FROM presos WHERE path = ?", (dstp, ))
    row = cu.fetchone()

    return row is None or row["mtime"] != mtime

def add_preso(srcp, dstp):
    if not needs_add(srcp, dstp): return

    print >>sys.stderr, srcp

    common.rmtree(dstp)
    common.mkdirs(dstp)

    juno = odptools.juno.juno()

    preso = juno.desktop.loadComponentFromURL \
        (juno.mkpath(srcp), "_blank", 0,
         (juno.PropertyValue("Hidden", True),
          juno.PropertyValue("FilterName", "impress8")))

    preso.storeToURL(juno.mkpath(os.path.join(os.getcwd(), dstp) + "/data.odp"), ())

    removepagenumbers(preso.getMasterPages())
    removepagenumbers(preso.getDrawPages())
      
    sql = insertpreso(srcp, dstp)
    sql.extend(createthumbs(juno, dstp, preso))
    sql.extend(insertcontent(dstp, preso))

    preso.dispose()
    juno.disconnect()

    doqueries(sql)
    db.commit()

def add_tree(srcbase, dstbase):
    for dirpath, dirnames, filenames in sorted(os.walk(srcbase)):
        for f in sorted(filenames):
            srcp = os.path.join(dirpath, f)
            dstp = os.path.join(dstbase, os.path.relpath(srcp, srcbase))

            add_preso(srcp, dstp)

def check_fs(srcbase, dstbase):
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
            del dirnames[:]
            continue

        raise Exception("unexpected file type")

def check_db(srcbase, dstbase):
    args = []

    for row in db.execute("SELECT path FROM presos WHERE SUBSTR(path, 1, ?) = ?",
                          (len(dstbase) + 1, dstbase + "/")):
        reldirpath = os.path.relpath(row["path"], dstbase)
        srcp = os.path.join(srcbase, reldirpath)

        if not os.path.exists(srcp):
            args.append((row["path"], ))

    doqueries([["DELETE FROM presos WHERE PATH = ?", args]])
    db.commit()

def check_tree(srcbase, dstbase):
    check_db(srcbase, dstbase)
    check_fs(srcbase, dstbase)

def doqueries(sql):
    for s in sql:
        db.executemany(s[0], s[1])

if __name__ == "__main__":
    global config, db

    os.nice(10)

    config = common.load_config()

    common.mkdirs(config["juno-base"])
    os.chdir(config["juno-base"])

    lock = common.Lock(".lock")
    db = db.DB(".db")

    for sync in config["juno-sync"]:
        (srcbase, dstbase) = sync.rsplit(" ", 1)
        add_tree(srcbase, dstbase)
        check_tree(srcbase, dstbase)

    db.close()
