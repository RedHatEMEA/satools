#!/usr/bin/python3

from satools import common
from db import DB
import json
import odptools
import odptools.odp_cat
import os
import search
import shutil
import tempfile
import threading
import urllib.parse
import wsgiref.simple_server


class Error(object):
    def __init__(self, message):
        self.message = message


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


class Download:
    def GET(self, env, h, path):
        path = common.Mapper.d2s(safepath(path))

        h["Content-Type"] = "application/vnd.oasis.opendocument.presentation"
        h["Content-disposition"] = "attachment; filename=\"%s\"" % path.rsplit("/", 1)[1]
        
        return open(path.encode("utf-8"), "rb")


class Favicon:
    def GET(self, env, h):
        h["Content-Type"] = "image/vnd.microsoft.icon"
        return open("static/favicon.ico", "rb")


class Help:
    def GET(self, env, h):
        h["Content-Type"] = "text/html"
        return open("static/help.html", "rb")


class Index:
    def GET(self, env, h):
        h["Content-Type"] = "text/html"
        return open("static/index.html", "rb")


class Nodes:
    def GET(self, env, h):
        h["Content-Type"] = "application/json"
        q = dict(urllib.parse.parse_qsl(env["QUERY_STRING"]))
        return [tell(q["node"]).encode("utf-8")]


class Odp:
    def POST(self, env, h):
        tmp = tempfile.mkdtemp()

        dct = urllib.parse.parse_qs(env["wsgi.input"].read(int(env["CONTENT_LENGTH"])).decode("utf-8"))
        # TODO: security, single slide not in array, make odp_cat work...
        odptools.odp_cat.cat([config["juno-base"] + "/root" + s for s in dct["slides"]], tmp + "/mypreso.odp")

        h["Content-Type"] = "application/vnd.oasis.opendocument.presentation"
        h["Content-disposition"] = "attachment; filename=mypreso.odp"
        
        f = open(tmp + "/mypreso.odp", "rb")
        shutil.rmtree(tmp)
        return f


class Search:
    def GET(self, env, h, query):
        try:
            w = search.build_where(query)
        except search.SearchException as e:
            return Error(str(e))

        if w.merge:
            w.sql = "SELECT preso, slide FROM presos, slides WHERE (presos.path = slides.preso) AND %s GROUP BY checksum ORDER BY presomtime DESC, preso, slide LIMIT 500" % w.sql
        else:
            w.sql = "SELECT preso, slide FROM presos, slides WHERE (presos.path = slides.preso) AND %s ORDER BY presomtime DESC, preso, slide" % w.sql
        c = tls.db.execute(w.sql, w.args)

        entries = []
        for row in c:
            p = row["preso"].decode("utf-8").replace("\t", "%09").replace('"', "%22").replace("#", "%23").replace('?', "%3F")
            entries.append({"src": "static/thumbs/%s/%03u.jpg" % (p, row["slide"]),
                            "preso": "/" + row["preso"].decode("utf-8"),
                            "slide": row["slide"],
                            "png": "static/slides/%s/%03u.png" % (p, row["slide"])
                            })

        h["Content-Type"] = "application/json"
        return [json.dumps(entries).encode("utf-8")]


class Application(object):
    urls = { "/": Index,
             "/favicon.ico": Favicon,
             "/help": Help,
             "/nodes": Nodes,
             "/odp": Odp }

    def __call__(self, env, start):
        if not hasattr(tls, "db"):
            tls.db = DB(os.path.join(config["juno-base"], ".db"))

        h = {}

        pth = os.path.normpath(env["PATH_INFO"])
        if pth.startswith("/static/"):
            rv = open(pth[1:], "rb")

        elif pth.startswith("/s/"):
            handler = Search()
            rv = getattr(handler, env["REQUEST_METHOD"])(env, h, pth[3:])

        elif pth.startswith("/dl/"):
            handler = Download()
            rv = getattr(handler, env["REQUEST_METHOD"])(env, h, pth[4:])

        else:
            handler = self.urls[pth]()
            rv = getattr(handler, env["REQUEST_METHOD"])(env, h)

        if isinstance(rv, Error):
            start("400 Bad Request", [])
            return [rv.message.encode("utf-8")]

        start("200 OK", [(k, v) for (k, v) in h.items()])
        return rv


tls = threading.local()
config = common.load_config()
application = Application()


if __name__ == "__main__":
    wsgiref.simple_server.make_server('', 8080, application).serve_forever()
