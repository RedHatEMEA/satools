#!/usr/bin/python3

import argparse
import email.utils
import common
import mailbox
import os
import re
import search
import sqlite3
import sys

def version(x, y, z):
    return x * 10000 + y * 100 + z

class MailDB(object):
    def __init__(self, dbpath):
        self.db = sqlite3.connect(dbpath)
        self.db.row_factory = sqlite3.Row
        self.db.text_factory = str
        self._create_tables()

    def _create_tables(self):
        self.db.execute("CREATE TABLE IF NOT EXISTS messages"
                        "(id INTEGER PRIMARY KEY NOT NULL,"
                        " list TEXT NOT NULL, path TEXT NOT NULL,"
                        " date INTEGER NOT NULL, offset INTEGER NOT NULL,"
                        " length INTEGER NOT NULL)")

        try:
            if version(*sqlite3.sqlite_version_info) >= version(3, 7, 4):
                self.db.execute("CREATE VIRTUAL TABLE messages_fts USING fts4"
                                "(from TEXT NOT NULL, subject TEXT NOT NULL,"
                                " body TEXT NOT NULL)")
            else:
                self.db.execute("CREATE VIRTUAL TABLE messages_fts USING fts3"
                                "(from TEXT NOT NULL, subject TEXT NOT NULL,"
                                " body TEXT NOT NULL)")

        except sqlite3.OperationalError:
            pass

        self.db.execute("CREATE INDEX IF NOT EXISTS i_messages_list_date ON "
                        "messages(list, date)")

        self.db.execute("CREATE INDEX IF NOT EXISTS i_messages_path ON "
                        "messages(path)")

        self.db.commit()

    def close(self):
        self.db.commit()
        self.db.close()

    def delete_records(self, path):
        self.db.execute("DELETE FROM messages_fts WHERE rowid IN "
                        "(SELECT rowid FROM messages WHERE path = ?)", (path, ))
        self.db.execute("DELETE FROM messages WHERE path = ?", (path, ))

    def insert_record(self, path, date, offset, length, _list, _from, subject,
                      body):
        c = self.db.execute("INSERT INTO messages('list', 'path', 'date', "
                            "'offset', 'length') VALUES(?, ?, ?, ?, ?)",
                            (_list, path, date, offset, length))
        rowid = c.lastrowid

        self.db.execute("INSERT INTO messages_fts('rowid', 'from', "
                        "'subject', 'body') VALUES(?, ?, ?, ?)",
                        (rowid, _from, subject, body))

    def count(self, string):
        w = search.build_where(string)

        c = self.db.execute("SELECT COUNT(*) "
                            "FROM messages, messages_fts "
                            "WHERE messages.rowid = messages_fts.rowid AND "
                            "(%s)" % w.sql, w.args)
        return c.fetchone()[0]

    def search(self, string, offset = 0, limit = 1000):
        w = search.build_where(string)
        w.args.extend([offset, limit])

        return self.db.execute("SELECT subject, messages_fts.'from' AS 'from', "
                               "date, path, offset, length "
                               "FROM messages, messages_fts "
                               "WHERE messages.rowid = messages_fts.rowid AND "
                               "(%s) ORDER BY date DESC LIMIT ?, ?" % w.sql,
                               w.args)

decoderegex = re.compile("=\?.*?\?=", flags = re.S)

def parse_args():
    ap = argparse.ArgumentParser()
    grp = ap.add_mutually_exclusive_group(required = True)
    grp.add_argument("-a", action="store_true", dest = "all",
                     help = "re-index all folders")
    grp.add_argument("list/year/month", nargs = "?",
                    help = "path to folder")
    ap.add_argument("-b", dest = "base", default = config["lists-base"],
                    help = "base directory for mail archive")

    return vars(ap.parse_args())

def _decode(a):
    a = list(a)
    if a[1] is None: return a[0]
    # It appears that Chinese e-mails commonly erroneously mark their charset as
    # gb2312, when in fact they are in gb18030.  The former is a strict subset
    # of the latter.
    if a[1] == "gb2312": a[1] = "gb18030"
    return a[0].decode(a[1])

def __decode(data):
    # According to RFC2047, whitespace is not permitted within =?...?= clauses.
    data = data.group(0)
    data = data.replace("\r", "")
    data = data.replace("\n", "")
    data = data.replace("\t", "")
    data = data.replace(" ", "")
    return data

def decode(data):
    if data is None: return data
    data = decoderegex.sub(__decode, data)
    return " ".join([_decode(h) for h in email.header.decode_header(data)])

def index(base, _list, path):
    print("Indexing %s..." % path, file = sys.stderr)

    maildb = MailDB(base + "/.index")

    maildb.delete_records(path)

    mbox = mailbox.mbox(base + "/" + path)

    for msg in mbox.keys():
        if "Date" not in mbox[msg]: continue

        body = ""
        for part in mbox[msg].walk():
            if part.get_content_type() == "text/plain" and \
                    part["Content-Transfer-Encoding"] != "base64":
                body += part.get_payload()

        date = email.utils.parsedate_tz(mbox[msg]["Date"])
        date = int(email.utils.mktime_tz(date))

        offset = mbox._toc[msg][0]
        length = 1 + mbox._toc[msg][1] - offset

        try:
            subject = decode(mbox[msg]["Subject"])
            _from = decode(mbox[msg]["From"])
            maildb.insert_record(path, date, offset, length, _list, _from,
                                 subject, body)
        except LookupError:
            # We found a charset Python doesn't know about.  Too bad.
            pass

    maildb.close()

if __name__ == "__main__":
    global config
    config = common.load_config()
    args = parse_args()

    if args["all"]:
        os.nice(10)

        for dirpath, dirnames, filenames in sorted(os.walk(args["base"])):
            for f in sorted(filenames):
                if f[:1] == ".": continue
                
                path = os.path.relpath(dirpath, args["base"]) + "/" + f
                index(args["base"], path.split("/")[0], path)

    else:
        path = args["list/year/month"].lstrip("/")
        index(args["base"], path.split("/")[0], path)
