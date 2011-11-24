#!/usr/bin/python

from satools import common
import argparse
import os
import sqlite3
import textwrap

class DB(object):
    def __init__(self, name):
        self.db = None
        self.name = name
        self.connect()

    def createschema(self):
        self.close()
        common.unlink(self.name)
        self.connect()

        sql = [ """
            CREATE TABLE presos (path TEXT PRIMARY KEY NOT NULL,
                                 mtime INTEGER NOT NULL);
                """, """
            CREATE TABLE slides (preso TEXT NOT NULL REFERENCES presos
                                   ON UPDATE CASCADE ON DELETE CASCADE,
                                 slide INTEGER NOT NULL,
                                 checksum TEXT NOT NULL,
                                 UNIQUE (preso, slide));
                """, """
            CREATE VIRTUAL TABLE slides_fts USING fts4 (content);
                """, """
            CREATE TRIGGER t_slides_fts_del AFTER DELETE ON slides
              BEGIN
                DELETE FROM slides_fts WHERE docid = old.rowid;
              END;
                """, """
            CREATE TRIGGER t_slides_fts_up AFTER UPDATE ON slides
              BEGIN
                UPDATE slides_fts SET docid = new.rowid WHERE docid = old.rowid;
              END;
                """ ]

        for s in map(lambda x: textwrap.dedent(x).strip(), sql):
            self.execute(s)

        self.commit()

    def close(self):
        if self.db is not None:
            self.db.close()
            self.db = None

    def commit(self):
        self.db.commit()

    def connect(self):
        self.close()

        self.db = sqlite3.connect(self.name)
        self.db.row_factory = sqlite3.Row
        #self.db.text_factory = str
        self.execute("PRAGMA foreign_keys = 1")

    def execute(self, sql, args = None):
        #print sql
        if args:
            return self.db.execute(sql, args)
        else:
            return self.db.execute(sql)

    def executemany(self, sql, params):
        #print sql
        return self.db.executemany(sql, params)

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", choices=["create"], help = "command")
    return ap.parse_args()

config = common.load_config()

if __name__ == "__main__":
    common.mkdirs(config["juno-base"])
    os.chdir(config["juno-base"])

    args = parse_args()

    if args.cmd == "create":
        DB(".db").createschema()
