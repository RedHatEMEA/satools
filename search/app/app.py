#!/usr/bin/python

from satools import common
from satools import mailindex
import cgi
import email
import json
import os
import re
import time
import urlparse
import web

class Index(object):
    def GET(self):
        raise web.seeother("/static/")

class Search(object):
    validator = { "start": re.compile("^[0-9]*$"),
                  "limit": re.compile("^[0-9]*$") }

    def GET(self):
        web.header("Content-Type", "application/json")

        q = dict(urlparse.parse_qsl(web.ctx.query[1:]))

        data = { "success": "true",
                 "total": 0,
                 "rows": [],
                 "error": "" }

        if not validate(q, self.validator):
            raise Exception("invalid input")

        q["start"] = min(int(q.get("start", 0)), 1000)
        q["limit"] = min(int(q.get("limit", 50)), 1000 - q["start"])
        q["q"] = q.get("q", "")

        # TODO: we're currently running 2 SQL queries here...
        data["total"] = min(web.ctx.maildb.count(q["q"]), 1000)
        
        for row in web.ctx.maildb.search(q["q"], offset = q["start"],
                                         limit = q["limit"]):
            data["rows"].append(escape(result(row)))

        return json.dumps(data)

class Message(object):
    validator = { "path": re.compile("^[a-zA-Z-]+/[0-9]{4}/[0-9]{2}$"),
                  "offset": re.compile("^[0-9]+$"),
                  "length": re.compile("^[0-9]+$") }

    def GET(self):
        web.header("Content-Type", "application/json")
       
        q = dict(urlparse.parse_qsl(web.ctx.query[1:]))

        if not validate(q, self.validator):
            raise Exception("invalid input")
 
        data = escape(message(q["path"], int(q["offset"]), int(q["length"])))

        return json.dumps(data)

class Help(object):
    def GET(self):
        web.header("Content-Type", "text/html")

        keys = {}

        try:
            mtime = os.stat(config["lists-base"] + "/.sync-done").st_mtime
            keys["update"] = "The last successful index update completed " + \
                "on %s." % time.strftime("%d/%m/%Y", time.gmtime(mtime))
        except OSError:
            keys["update"] = "The index has not yet been populated."

        keys["lists"] = \
            "<br/>".join(sorted(filter(lambda x: x[0] != ".",
                                       os.listdir(config["lists-base"]))))
        keys["lists-start-year"] = config["lists-start-year"]

        # TODO: hacky, can mod_wsgi run app.py as satools to inherit $HOME?
        if "HOME" in os.environ:
            f = open("templates/help.html")
        else:
            f = open("/opt/satools/search/templates/help.html")

        data = f.read()
        f.close()

        for k in keys:
            data = data.replace("$" + k, keys[k])

        return data

def result(row):
    return { "subject": row["subject"].decode("utf-8"),
             "from": row["from"].decode("utf-8"),
             "date": row["date"],
             "path": row["path"],
             "offset": row["offset"],
             "length": row["length"] }

def message(path, offset, length):
    f = open(config["lists-base"] + "/" + path)
    f.seek(offset)
    em = email.message_from_string(f.read(length))
    f.close()

    body = []
    for part in em.walk():
        if part.get_content_type() == "text/plain" and \
                part.get("Content-Disposition", "inline").startswith("inline"):
            payload = part.get_payload(decode = True)
            charset = part.get_content_charset()
            payload = mailindex._decode([payload, charset])
            body.append(payload)

    date = email.utils.parsedate_tz(em["Date"])
    date = int(email.utils.mktime_tz(date))

    return { "list": path.split("/", 1)[0], 
             "body": "".join(body),
             "date": date,
             "from": mailindex.decode(em["From"]),
             "to": mailindex.decode(em["To"]),
             "subject": mailindex.decode(em["Subject"]) }

def escape(data):
    data = dict(data)
    for key in data:
        data[key] = cgi.escape(unicode(data[key]))
        
    return data

def validate(q, regexps):
    for key in regexps:
        if not regexps[key].match(q.get(key, "")):
            return False
    return True

urls = ("/?", "Index",
        "/s", "Search",
        "/m", "Message",
        "/help", "Help"
        )

def db_load_hook():
    web.ctx.maildb = mailindex.MailDB(config["lists-base"] + "/.index")

def db_unload_hook():
    web.ctx.maildb.close()

web.config.debug = False
app = web.application(urls, globals())
app.add_processor(web.loadhook(db_load_hook))
app.add_processor(web.unloadhook(db_unload_hook))
application = app.wsgifunc()
config = common.load_config()

if __name__ == "__main__":
    app.run()
