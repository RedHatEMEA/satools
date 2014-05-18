#!/usr/bin/python3

from satools import common
from satools import mailindex
import bottle
import email
import json
import os
import re
import time
import urllib.parse

def maildb(callback):
    def wrapper(*args, **kwargs):  
        kwargs["maildb"] = mailindex.MailDB(config["lists-base"] + "/.index")

        try:
            return callback(*args, **kwargs)
        finally:
            kwargs["maildb"].close()

    return wrapper

@bottle.get("/")
def callback():
    return bottle.static_file("index.html", root = "static")

@bottle.get("/favicon.ico")
def callback():
    return bottle.static_file("favicon.ico", root = "static")

@bottle.get("/static/<path:path>")
def callback(path):
    return bottle.static_file(path, root = "static")

@bottle.get("/help")
@bottle.view("templates/help.html")
def callback():
    keys = {}

    try:
        mtime = os.stat(config["lists-base"] + "/.sync-done").st_mtime
        keys["update"] = "The last successful index update finished on %s." % \
                         time.strftime("%d/%m/%Y", time.gmtime(mtime))
    except OSError:
        keys["update"] = "The index has not yet been populated."

    lists = sorted([x.split(" ")[0] for x in config["lists-sync"]])
    keys["lists"] = "<br/>".join(["<a href=\"%s\">%s</a>" % (x, x) for x in lists])

    keys["lists_start_year"] = config["lists-start-year"]

    return keys

@bottle.get("/a")
def callback():
    validator = { "path": re.compile("^[a-zA-Z0-9-]+/[0-9]{4}/[0-9]{2}$"),
                  "offset": re.compile("^[0-9]+$"),
                  "len": re.compile("^[0-9]+$"),
                  "index": re.compile("^[0-9]+$") }

    if not validate(bottle.request.query, validator):
        raise bottle.HTTPError(400, "invalid input")
 
    (content_type, filename, payload) = \
        attachment(bottle.request.query.path, int(bottle.request.query.offset),
                   int(bottle.request.query.len),
                   int(bottle.request.query.index))

    bottle.response.content_type = content_type
    bottle.response.set_header("Content-disposition", "attachment; filename=\"%s\"" % filename)

    return payload

@bottle.get("/m")
@maildb
def callback(maildb):
    validator = { "path": re.compile("^[a-zA-Z0-9-]+/[0-9]{4}/[0-9]{2}$"),
                  "offset": re.compile("^[0-9]+$"),
                  "len": re.compile("^[0-9]+$") }

    if not validate(bottle.request.query, validator):
        raise bottle.HTTPError(400, "invalid input")

    data = message(bottle.request.query.path, int(bottle.request.query.offset), int(bottle.request.query.len))

    bottle.response.content_type = "application/json"

    return json.dumps(data)

@bottle.get("/s")
@maildb
def callback(maildb):
    validator = { "start": re.compile("^[0-9]*$"),
                  "limit": re.compile("^[0-9]*$") }

    if not validate(bottle.request.query, validator):
        raise bottle.HTTPError(400, "invalid input")

    q = {}
    q["start"] = min(int(bottle.request.query.get("start", 0)), 1000)
    q["limit"] = min(int(bottle.request.query.get("limit", 50)), 1000 - q["start"])
    q["q"] = bottle.request.query.q

    data = { "success": "true",
             "total": 0,
             "rows": [],
             "error": "" }

    if q["q"]:
        try:
            # TODO: we're currently running 2 SQL queries here...
            data["total"] = min(maildb.count(q["q"]), 1000)
            
            for row in maildb.search(q["q"], offset = q["start"],
                                     limit = q["limit"]):
                data["rows"].append({ "subject": row["subject"],
                                      "from": row["from"],
                                      "date": row["date"],
                                      "path": row["path"],
                                      "offset": row["offset"],
                                      "len": row["length"] })

        except mailindex.search.SearchException as e:
            data["success"] = False
            data["error"] = str(e)

    bottle.response.content_type = "application/json"

    return json.dumps(data)

def attachment(path, offset, _len, index):
    f = open(config["lists-base"] + "/" + path, "rb")
    f.seek(offset)
    em = email.message_from_bytes(f.read(_len))
    f.close()

    gen = em.walk()
    part = next(gen)
    while index:
        part = next(gen)
        index -= 1

    return (part.get_content_type(), part.get_filename(),
            part.get_payload(decode = True))

def result(row):
    return { "subject": row["subject"],
             "from": row["from"],
             "date": row["date"],
             "path": row["path"],
             "offset": row["offset"],
             "len": row["length"] }

def message(path, offset, _len):
    f = open(config["lists-base"] + "/" + path, "rb")
    f.seek(offset)
    em = email.message_from_bytes(f.read(_len))
    f.close()

    index = 0
    attachments = []
    body = []
    for part in em.walk():
        if is_body(part):
            payload = part.get_payload(decode = True)
            charset = part.get_content_charset()
            payload = mailindex._decode([payload, charset])
            body.append(payload)

        elif is_attachment(part):
            attachments.append({ "index": index,
                                 "filename": part.get_filename(),
                                 "content-type": part.get_content_type() })

        index += 1

    date = email.utils.parsedate_tz(em["Date"])
    date = int(email.utils.mktime_tz(date))

    return { "path": path,
             "offset": offset,
             "len": _len,
             "list": path.split("/", 1)[0], 
             "body": "".join(body),
             "date": date,
             "from": mailindex.decode(em["From"]),
             "to": mailindex.decode(em["To"]),
             "subject": mailindex.decode(em["Subject"]),
             "attachments": attachments }

def is_attachment(part):
    return part.get_filename() is not None and \
        not part.get("Content-Disposition", "inline").startswith("inline")

def is_body(part):
    return part.get_content_type() == "text/plain" and \
        part.get("Content-Disposition", "inline").startswith("inline")

def validate(q, regexps):
    for key in regexps:
        if not regexps[key].match(q.get(key, "")):
            return False
    return True

bottle.debug(False)
application = bottle.default_app()
config = common.load_config()

if __name__ == "__main__":
    bottle.run()
