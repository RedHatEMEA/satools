#!/usr/bin/python

import argparse
import email.utils
import common
import mailbox
import os
import os.path
import sqlite3
import sys

class MailDB:
    def __init__(self, dbpath):
        self.db = sqlite3.connect(dbpath)
        self.db.row_factory = sqlite3.Row
        self.db.text_factory = str
        self._create_tables()

    def _create_tables(self):
        self.db.execute("CREATE TABLE IF NOT EXISTS messages"
                        "(id INTEGER PRIMARY KEY NOT NULL, "
                        " path TEXT NOT NULL, date INTEGER NOT NULL, "
                        " offset INTEGER NOT NULL, length INTEGER NOT NULL)")

        try:
            self.db.execute("CREATE VIRTUAL TABLE messages_fts USING fts4"
                            "(list TEXT NOT NULL, from TEXT NOT NULL, "
                            "subject TEXT NOT NULL, body TEXT NOT NULL)")

        except sqlite3.OperationalError:
            pass

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
        c = self.db.execute("INSERT INTO messages('path', 'date', 'offset', "
                            "'length') VALUES(?, ?, ?, ?)",
                            (path, date, offset, length))
        rowid = c.lastrowid

        self.db.execute("INSERT INTO messages_fts('rowid', 'list', 'from', "
                        "'subject', 'body') VALUES(?, ?, ?, ?, ?)",
                        (rowid, _list.replace("-", ""), _from, subject, body))

    def count(self, string):
        c = self.db.execute("SELECT COUNT(*) "
                            "FROM messages, messages_fts "
                            "WHERE messages.rowid = messages_fts.rowid AND "
                            "messages_fts.messages_fts MATCH ?", (string, ))
        return c.fetchone()[0]

    def search(self, string, offset = 0, limit = 1000):
        return self.db.execute("SELECT subject, messages_fts.'from' AS 'from', "
                               "date, path, offset, length "
                               "FROM messages, messages_fts "
                               "WHERE messages.rowid = messages_fts.rowid AND "
                               "messages_fts.messages_fts MATCH ? "
                               "ORDER BY date DESC LIMIT ?, ?",
                               (string, offset, limit))

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
    if a[1] is None: return a[0]
    else: return a[0].decode(a[1])

def decode(data):
    try:
        data = " ".join(map(_decode, email.header.decode_header(data)))
    except (LookupError, UnicodeDecodeError):
        pass
    return data

def index(base, _list, path):
    print >>sys.stderr, "Indexing %s..." % path

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

        subject = decode(mbox[msg]["Subject"])
        _from = decode(mbox[msg]["From"])
        maildb.insert_record(path, date, offset, length, _list,
                             _from, subject, body)

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
