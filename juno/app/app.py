#!/usr/bin/python

from satools import common
from db import DB
import json
#import odp_utils.odp_cat
import os
import shutil
import tempfile
import urlparse
import web

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
        entries.append({"text": i, "id": "/" + os.path.relpath(os.path.join(path, i), base)})
    for i in sorted(filenames):
        entries.append({"text": i, "id": "/" + os.path.relpath(os.path.join(path, i), base), "leaf": "true"})

    return json.dumps(entries)

class index:
    def GET(self):
        raise web.seeother("/static/")

class nodes:
    def GET(self):
        web.header("Content-Type", "application/json")
        q = dict(urlparse.parse_qsl(web.ctx.query[1:]))
        return tell(q["node"])

class odp:
    def POST(self):
        tmp = tempfile.mkdtemp()

        dct = urlparse.parse_qs(web.data())
        # TODO: security, single slide not in array, make odp_cat work...
        odp_utils.odp_cat.cat(map(lambda x: config.home + x, dct["slides"]), tmp + "/mypreso.odp")

        web.header("Content-Type", "application/vnd.oasis.opendocument.presentation")
        web.header("Content-disposition", "attachment; filename=mypreso.odp")
        
        f = open(tmp + "/mypreso.odp")
        shutil.rmtree(tmp)
        return f
        
class preso:
    def GET(self, preso):
        c = web.ctx.db.execute("SELECT preso, slide FROM slides WHERE preso = ? ORDER BY slide", (preso, ))

        entries = []
        for row in c:
            entries.append({"src": "/static/thumbs/%s/%03u.jpg" % (row["preso"], row["slide"]),
                            "preso": "/" + row["preso"],
                            "slide": row["slide"],
                            "png": "/static/slides/%s/%03u.png" % (row["preso"], row["slide"])
                            })

        web.header("Content-Type", "application/json")
        return json.dumps(entries)

class search:
    def GET(self, search):
        c = web.ctx.db.execute("SELECT preso, slide FROM slides, slides_fts WHERE slides.rowid = slides_fts.docid AND slides_fts.content MATCH ? GROUP BY checksum ORDER BY preso, slide LIMIT 500", (search, ))

        entries = []
        for row in c:
            entries.append({"src": "/static/thumbs/%s/%03u.jpg" % (row["preso"], row["slide"]),
                            "preso": "/" + row["preso"],
                            "slide": row["slide"],
                            "png": "/static/slides/%s/%03u.png" % (row["preso"], row["slide"])
                            })

        web.header("Content-Type", "application/json")
        return json.dumps(entries)


urls = ("/", "index",
        "/nodes", "nodes",
        "/preso/(.*)", "preso",
        "/odp", "odp",
        "/search/(.*)", "search",
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
