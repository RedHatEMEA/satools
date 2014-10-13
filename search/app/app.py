#!/usr/bin/python3

from satools import common
from satools import mailindex
import cgi
import email
import json
import os
import re
import threading
import time
import urllib.parse
import wsgiref.simple_server


class Favicon:
    def GET(self, env, h):
        h["Content-Type"] = "image/vnd.microsoft.icon"
        return open("static/favicon.ico", "rb")


class Index(object):
    def GET(self, env, h):
        h["Content-Type"] = "text/html"
        return open("static/index.html", "rb")


class Search(object):
    validator = { "start": re.compile("^[0-9]*$"),
                  "limit": re.compile("^[0-9]*$") }

    def GET(self, env, h):
        h["Content-Type"] = "application/json"

        q = dict(urllib.parse.parse_qsl(env["QUERY_STRING"]))

        if not validate(q, self.validator):
            raise Exception("invalid input")

        q["start"] = min(int(q.get("start", 0)), 1000)
        q["limit"] = min(int(q.get("limit", 50)), 1000 - q["start"])
        q["q"] = q.get("q", "")

        data = { "success": "true",
                 "total": 0,
                 "rows": [],
                 "error": "" }

        if q["q"]:
            try:
                # TODO: we're currently running 2 SQL queries here...
                data["total"] = min(tls.maildb.count(q["q"]), 1000)
                
                for row in tls.maildb.search(q["q"], offset = q["start"],
                                             limit = q["limit"]):
                    data["rows"].append(escape(result(row)))

            except mailindex.search.SearchException as e:
                data["success"] = False
                data["error"] = str(e)

        return [json.dumps(data).encode("utf-8")]


class Attachment(object):
    validator = { "path": re.compile("^[a-zA-Z0-9-]+/[0-9]{4}/[0-9]{2}$"),
                  "offset": re.compile("^[0-9]+$"),
                  "len": re.compile("^[0-9]+$"),
                  "index": re.compile("^[0-9]+$") }

    def GET(self, env, h):
        q = dict(urllib.parse.parse_qsl(env["QUERY_STRING"]))

        if not validate(q, self.validator):
            raise Exception("invalid input")
 
        (content_type, filename, payload) = \
            attachment(q["path"], int(q["offset"]),
                       int(q["len"]), int(q["index"]))

        h["Content-Type"] = content_type
        h["Content-disposition"] = "attachment; filename=\"%s\"" % filename
        return [payload]


class Help(object):
    def GET(self, env, h):
        h["Content-Type"] = "text/html"

        keys = {}

        try:
            mtime = os.stat(config["lists-base"] + "/.sync-done").st_mtime
            keys["update"] = "The last successful index update finished " + \
                "on %s." % time.strftime("%d/%m/%Y", time.gmtime(mtime))
        except OSError:
            keys["update"] = "The index has not yet been populated."

        lists = sorted([l.split(" ")[0] for l in config["lists-sync"]])
        keys["lists"] = \
            "<br/>".join(["<a href=\"%s\">%s</a>" % (l, l) for l in lists])
        keys["lists-start-year"] = config["lists-start-year"]

        f = open("templates/help.html")
        data = f.read()
        f.close()

        for k in keys:
            data = data.replace("$" + k, keys[k])

        return [data.encode("utf-8")]


class Message(object):
    validator = { "path": re.compile("^[a-zA-Z0-9-]+/[0-9]{4}/[0-9]{2}$"),
                  "offset": re.compile("^[0-9]+$"),
                  "len": re.compile("^[0-9]+$") }

    def GET(self, env, h):
        h["Content-Type"] = "application/json"
       
        q = dict(urllib.parse.parse_qsl(env["QUERY_STRING"]))

        if not validate(q, self.validator):
            raise Exception("invalid input")
 
        data = escape(message(q["path"], int(q["offset"]), int(q["len"])))

        return [json.dumps(data).encode("utf-8")]


class Application(object):
    urls = { "/": Index,
             "/favicon.ico": Favicon,
             "/s": Search,
             "/a": Attachment,
             "/m": Message,
             "/help": Help }

    def __call__(self, env, start):
        if not hasattr(tls, "maildb"):
            tls.maildb = mailindex.MailDB(config["lists-base"] + "/.index")

        h = {}

        pth = os.path.normpath(env["PATH_INFO"])
        if pth.startswith("/static/"):
            rv = open(pth[1:], "rb")

        else:
            handler = self.urls[pth]()
            rv = getattr(handler, env["REQUEST_METHOD"])(env, h)

        start("200 OK", [(k, v) for (k, v) in h.items()])
        return rv


def attachment(path, offset, _len, index):
    f = open(config["lists-base"] + "/" + path)
    f.seek(offset)
    em = email.message_from_string(f.read(_len))
    f.close()

    gen = em.walk()
    part = next(gen)
    while index:
        part = next(gen)
        index -= 1

    return (part.get_content_type(), part.get_filename(),
            part.get_payload(decode = True))


def result(row):
    return { "subject": row["subject"].decode("utf-8", errors = "ignore"),
             "from": row["from"].decode("utf-8", errors = "ignore"),
             "date": row["date"],
             "path": row["path"].decode("utf-8"),
             "offset": row["offset"],
             "len": row["length"] }


def message(path, offset, _len):
    f = open(config["lists-base"] + "/" + path)
    f.seek(offset)
    em = email.message_from_string(f.read(_len))
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


def escape(data):
    data = dict(data)
    for key in data:
        if not isinstance(data[key], list):
            try:
                data[key] = cgi.escape(str(data[key]))
            except UnicodeDecodeError:
                data[key] = cgi.escape(data[key].decode("utf-8",
                                                        errors = "ignore"))
        
    return data


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


tls = threading.local()
config = common.load_config()
application = Application()


if __name__ == "__main__":
    wsgiref.simple_server.make_server('', 8080, application).serve_forever()
