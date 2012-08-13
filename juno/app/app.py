#!/usr/bin/python

from satools import common
from db import DB
import json
import odptools
import os
import search
import shutil
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
                         "id": subpath })
    for i in sorted(filenames):
        if i[0] == ".": continue

        subpath = "/" + os.path.relpath(os.path.join(path, i), base)
        entries.append({ "text": i,
                         "id": subpath,
                         "leaf": "true" })

    return json.dumps(entries)

class Download:
    def GET(self, path):
        path = common.Mapper.d2s(safepath(path))

        web.header("Content-Type", "application/vnd.oasis.opendocument.presentation")
        web.header("Content-disposition", "attachment; filename=\"%s\"" % path.rsplit("/", 1)[1])
        
        return open(path)

class Favicon:
    def GET(self):
        web.header("Content-Type", "image/vnd.microsoft.icon")
        return open("static/favicon.ico")

class Help:
    def GET(self):
        web.header("Content-Type", "text/html")
        return open("static/help.html")

class Index:
    def GET(self):
        web.header("Content-Type", "text/html")
        return open("static/index.html")

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

class Search:
    def GET(self, query):
        try:
            w = search.build_where(query)
        except search.SearchException, e:
            return error(e)

        if w.merge:
            w.sql = "SELECT preso, slide FROM presos, slides WHERE (presos.path = slides.preso) AND %s GROUP BY checksum ORDER BY presomtime DESC, preso, slide LIMIT 500" % w.sql
        else:
            w.sql = "SELECT preso, slide FROM presos, slides WHERE (presos.path = slides.preso) AND %s ORDER BY presomtime DESC, preso, slide" % w.sql
        c = web.ctx.db.execute(w.sql, w.args)

        entries = []
        for row in c:
            entries.append({"src": "static/thumbs/%s/%03u.jpg" % (row["preso"], row["slide"]),
                            "preso": "/" + row["preso"],
                            "slide": row["slide"],
                            "png": "static/slides/%s/%03u.png" % (row["preso"], row["slide"])
                            })

        web.header("Content-Type", "application/json")
        return json.dumps(entries)

urls = ("/", "Index",
        "/favicon.ico", "Favicon",
        "/dl/(.*)", "Download",
        "/help", "Help",
        "/nodes", "Nodes",
        "/odp", "Odp",
        "/s/(.*)", "Search",
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
