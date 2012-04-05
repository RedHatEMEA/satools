#!/usr/bin/python

import calendar
import os
import re
import time

def accesslogs():
    path = "/var/log/httpd"
    for f in filter(lambda x: x.startswith("access_log-"),
                    sorted(os.listdir(path))):
        yield "/".join((path, f))
    yield "/".join((path, "access_log"))

rx = re.compile("([^ ]+) ([^ ]+) ([^ ]+) \[([^\]]+)\] \"([^\"]+)\" ([^ ]+) ([^ ]+) \"([^\"]+)\" \"([^\"]+)\"")
fields = ("ip", "ident", "user", "date", "request", "code", "size", "referer", "agent")

def match(line):
    m = rx.match(line)
    if not m: print line
    d = dict(zip(fields, m.groups()))
    d["date"] = time.strptime(d["date"].split(" ")[0], "%d/%b/%Y:%H:%M:%S")
    d["day"] = calendar.timegm(d["date"]) / 86400 * 86400
    d["line"] = line
    return d

class Base(object):
    aggs = []

    def __init__(self):
        self.d = dict()

    @staticmethod
    def _aggregate(d):
        for b in Base.aggs: b.aggregate(d)

    def saggregate(self, d, i):
        if d["day"] not in self.d: self.d[d["day"]] = set()
        self.d[d["day"]].add(i)

    def count(self, item):
        if item not in self.d: return 0
        return len(self.d[item])

    @staticmethod
    def report():
        k = set()
        for b in Base.aggs: k = k | set(b.d.keys())
        print '"date" ' + " ".join(['"' + b.name + '"' for b in Base.aggs])
        for d in sorted(k):
            date = time.strftime('"%d/%m/%Y" ', time.gmtime(d))
            print date + " ".join([str(b.count(d)) for b in Base.aggs])
            
class TID(Base):
    name = "total unique IPs"
    def aggregate(self, d):
        self.saggregate(d, d["ip"])

class SID(Base):
    name = "/search unique IPs"
    def aggregate(self, d):
        if d["request"].startswith("GET /search"):
            self.saggregate(d, d["ip"])

class JID(Base):
    name = "/juno unique IPs"
    def aggregate(self, d):
        if d["request"].startswith("GET /juno"):
            self.saggregate(d, d["ip"])

class SQD(Base):
    name = "/search searches"
    def aggregate(self, d):
        if d["request"].startswith("GET /search/s?"):
            self.saggregate(d, d["line"])

class JQD(Base):
    name = "/juno searches"
    def aggregate(self, d):
        if d["request"].startswith("GET /juno/s/"):
            self.saggregate(d, d["line"])

class JOD(Base):
    name = "/juno presentations created"
    def aggregate(self, d):
        if d["request"].startswith("POST /juno/odp"):
            self.saggregate(d, d["line"])

class JDD(Base):
    name = "/juno presentations downloaded"
    def aggregate(self, d):
        if d["request"].startswith("GET /juno/dl"):
            self.saggregate(d, d["line"])

class RDD(Base):
    name = "SA tools RPM downloaded"
    def aggregate(self, d):
        if d["request"].startswith("GET /repo/16/satools-0.3-1.fc16.noarch.rpm"):
            self.saggregate(d, d["line"])

Base.aggs.append(TID())
Base.aggs.append(SID())
Base.aggs.append(JID())
Base.aggs.append(SQD())
Base.aggs.append(JQD())
Base.aggs.append(JOD())
Base.aggs.append(JDD())
Base.aggs.append(RDD())

if __name__ == "__main__":
    for log in accesslogs():
        with open(log) as f:
            for l in f:
                ll = match(l)
                Base._aggregate(ll)

    Base.report()
