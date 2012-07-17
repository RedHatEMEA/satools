#!/usr/bin/python

from satools import common
from db import DB
import auth
import index
import json
import odptools
import os
import search
import shutil
import subprocess
import tempfile
import urlparse
import web

def error(message):
    web.ctx.status = "400 Bad Request"
    return message

def safepath(path):
    path = os.path.normpath(path.lstrip(os.sep))
    if path.split(os.sep)[0] == "..":
        raise Exception("unsafe path encountered")

    if path == ".": path = ""

    return path

def tell(path):
    entries = []

    base = os.path.join(config["juno-base"], "root")

    path = os.path.join(base, safepath(path))

    dirpath, dirnames, filenames = os.walk(path).next()
    for i in sorted(dirnames):
        subpath = "/" + os.path.relpath(os.path.join(path, i), base)
        entries.append({ "text": i,
                         "id": subpath,
                         "can_write_parent": auth.can_write_parent(subpath[1:]),
                         "can_write": auth.can_write(subpath[1:]) })
    for i in sorted(filenames):
        if i[0] == ".": continue

        subpath = "/" + os.path.relpath(os.path.join(path, i), base)
        entries.append({ "text": i,
                         "id": subpath,
                         "can_write_parent": auth.can_write_parent(subpath[1:]),
                         "can_write": auth.can_write(subpath[1:]),
                         "leaf": "true" })

    return json.dumps(entries)

class Download:
    def GET(self, path):
        path = common.Mapper.d2s(safepath(path))

        web.header("Content-Type", "application/vnd.oasis.opendocument.presentation")
        web.header("Content-disposition", "attachment; filename=\"%s\"" % path.rsplit("/", 1)[1])
        
        return open(path)

class Index:
    def GET(self):
        web.header("Content-Type", "text/html")
        return open("static/index.html")

class Mkdir:
    def POST(self, path):
        path = safepath(path)
        (parent, child) = path.rsplit(os.sep, 1)

        if not auth.can_write(parent):
            return error("Unauthorized")

        srcp = common.Mapper.d2s(parent)
        if not srcp.startswith(config["juno-home"] + "/"):
            return error("Unauthorized")

        if not os.path.isdir(srcp) or not child or child[0] == ".":
            return error("Unauthorized")

        srcp = os.path.join(srcp, child)
        
        base = os.path.join(config["juno-base"], "root")
        dstp = os.path.join(base, common.Mapper.s2d(srcp))
        os.mkdir(srcp)
        os.mkdir(dstp)

class Nodes:
    def GET(self):
        web.header("Content-Type", "application/json")
        q = dict(urlparse.parse_qsl(web.ctx.query[1:]))
        return tell(q["node"])

class Odp:
    def POST(self):
        tmp = tempfile.mkdtemp()

        dct = urlparse.parse_qs(web.data())
        # TODO: security, single slide not in array, make odp_cat work...
        odptools.odp_cat.cat(map(lambda x: config["juno-base"] + "/root" + x, dct["slides"]), tmp + "/mypreso.odp")

        web.header("Content-Type", "application/vnd.oasis.opendocument.presentation")
        web.header("Content-disposition", "attachment; filename=mypreso.odp")
        
        f = open(tmp + "/mypreso.odp")
        shutil.rmtree(tmp)
        return f

class Rm:
    def POST(self, path):
        path = safepath(path)

        if not auth.can_write_parent(path):
            return error("Unauthorized")

        srcp = common.Mapper.d2s(path)
        if not srcp.startswith(config["juno-home"] + "/"):
            return error("Unauthorized")

        if not os.path.isfile(srcp):
            return error("Unauthorized")

        index.workerid = 0
        index.config = config
        index.del_preso(web.ctx.db, srcp)
        os.unlink(srcp)

class Rmdir:
    def POST(self, path):
        path = safepath(path)

        if not auth.can_write_parent(path):
            return error("Unauthorized")

        srcp = common.Mapper.d2s(path)
        if not srcp.startswith(config["juno-home"] + "/"):
            return error("Unauthorized")

        base = os.path.join(config["juno-base"], "root")
        dstp = os.path.join(base, common.Mapper.s2d(srcp))

        if not os.path.isdir(srcp) or os.listdir(srcp) or os.listdir(dstp):
            return error("Unauthorized")

        os.rmdir(srcp)
        os.rmdir(dstp)

class Search:
    def GET(self, query):
        try:
            w = search.build_where(query)
        except search.SearchException, e:
            return error(e)

        if w.merge:
            w.sql = "SELECT preso, slide FROM presos, slides WHERE (presos.path = slides.preso) AND %s GROUP BY checksum ORDER BY mtime DESC, preso, slide LIMIT 500" % w.sql
        else:
            w.sql = "SELECT preso, slide FROM presos, slides WHERE (presos.path = slides.preso) AND %s ORDER BY mtime DESC, preso, slide" % w.sql
        c = web.ctx.db.execute(w.sql, w.args)

        entries = []
        for row in c:
            entries.append({"src": "../static/thumbs/%s/%03u.jpg" % (row["preso"], row["slide"]),
                            "preso": "/" + row["preso"],
                            "slide": row["slide"],
                            "png": "../static/slides/%s/%03u.png" % (row["preso"], row["slide"])
                            })

        web.header("Content-Type", "application/json")
        return json.dumps(entries)

class Upload:
    def POST(self):
        web.header("Content-Type", "text/html")

        i = web.input(myfile = {})
        (parent, child) = (safepath(i["path"]), i["myfile"].filename)

        if not auth.can_write(parent):
            return json.dumps({"success": False, "msg": "Unauthorized"})

        srcp = common.Mapper.d2s(parent)
        if not srcp.startswith(config["juno-home"] + "/"):
            return json.dumps({"success": False, "msg": "Unauthorized"})

        if not os.path.isdir(srcp) or not child or child[0] == "." \
                or "/" in child:
            return json.dumps({"success": False, "msg": "Unauthorized"})

        srcp = os.path.join(srcp, child)
        if os.path.exists(srcp):
            return json.dumps({"success": False, "msg": "Unauthorized"})
        
        f = open(srcp, "w")
        f.write(i["myfile"].value)
        f.close()
        
        if not odptools.odf.Odp.is_odp(srcp):
            os.unlink(srcp)
            return json.dumps({"success": False, "msg": "Unauthorized"})

        if subprocess.call(("./index.py", "-p", srcp)):
            os.unlink(srcp)
            return json.dumps({"success": False, "msg": "Unauthorized"})

        return json.dumps({"success": True})

urls = ("/?", "Index",
        "/dl/(.*)", "Download",
        "/mkdir/(.*)", "Mkdir",
        "/nodes", "Nodes",
        "/odp", "Odp",
        "/rm/(.*)", "Rm",
        "/rmdir/(.*)", "Rmdir",
        "/s/(.*)", "Search",
        "/upload", "Upload"
        )

def db_load_hook():
    web.ctx.db = DB(os.path.join(config["juno-base"], ".db"))

def db_unload_hook():
    web.ctx.db.close()

web.config.debug = False
app = web.application(urls, globals())
app.add_processor(web.loadhook(db_load_hook))
app.add_processor(web.unloadhook(db_unload_hook))
application = app.wsgifunc()
config = common.load_config()

if __name__ == "__main__":
    app.run()
