#!/usr/bin/python3

from satools import common
from db import DB
import bottle
import json
import odptools.odp_cat
import os
import search
import shutil
import tempfile
import urllib.parse

def db(callback):
    def wrapper(*args, **kwargs):  
        kwargs["db"] = DB(os.path.join(config["juno-base"], ".db"))

        try:
            return callback(*args, **kwargs)
        finally:
            kwargs["db"].close()

    return wrapper

@bottle.get("/")
def callback():
    return bottle.static_file("index.html", root = "static")

@bottle.get("/favicon.ico")
def callback():
    return bottle.static_file("favicon.ico", root = "static")

@bottle.get("/help")
def callback():
    return bottle.static_file("help.html", root = "static")

@bottle.get("/static/<path:path>")
def callback(path):
    return bottle.static_file(path, root = "static")

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

    dirpath, dirnames, filenames = next(os.walk(path))
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

@bottle.get("/dl/<path:path>")
def callback(path):
    path = common.Mapper.d2s(safepath(path))

    bottle.response.content_type = "application/vnd.oasis.opendocument.presentation"
    bottle.response.set_header("Content-disposition", "attachment; filename=\"%s\"" % path.rsplit("/", 1)[1])
        
    return bottle.static_file(path, root = "/")

@bottle.get("/nodes")
def callback():
    bottle.response.content_type = "application/json"
    return tell(bottle.request.query.node)

@bottle.post("/odp")
def callback():
    tmp = tempfile.mkdtemp()

    # TODO: security, single slide not in array, make odp_cat work...
    odptools.odp_cat.cat([config["juno-base"] + "/root" + x for x in bottle.request.forms.getall("slides")], tmp + "/mypreso.odp")

    bottle.response.content_type = "application/vnd.oasis.opendocument.presentation"
    bottle.response.set_header("Content-disposition", "attachment; filename=\"mypreso.odp\"")
        
    f = open(tmp + "/mypreso.odp", "rb")
    shutil.rmtree(tmp)
    return f

@bottle.get("/s/<query:path>")
@db
def callback(query, db):
    try:
        w = search.build_where(query)
    except search.SearchException as e:
        return bottle.HTTPError(400, e)

    if w.merge:
        w.sql = "SELECT preso, slide FROM presos, slides WHERE (presos.path = slides.preso) AND %s GROUP BY checksum ORDER BY presomtime DESC, preso, slide LIMIT 500" % w.sql
    else:
        w.sql = "SELECT preso, slide FROM presos, slides WHERE (presos.path = slides.preso) AND %s ORDER BY presomtime DESC, preso, slide" % w.sql
    c = db.execute(w.sql, w.args)

    entries = []
    for row in c:
        p = row["preso"].replace("\t", "%09").replace('"', "%22").replace("#", "%23").replace('?', "%3F")
        entries.append({"src": "static/thumbs/%s/%03u.jpg" % (p, row["slide"]),
                        "preso": "/" + row["preso"],
                        "slide": row["slide"],
                        "png": "static/slides/%s/%03u.png" % (p, row["slide"])
                    })
        
    bottle.response.content_type = "application/json"
    return json.dumps(entries)

bottle.debug(False)
application = bottle.default_app()
config = common.load_config()

if __name__ == "__main__":
    bottle.run()
