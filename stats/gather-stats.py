#!/usr/bin/python3

import calendar
import gzip
import os
import re
import time

def accesslogs():
    path = "/var/log/httpd"
    for f in [f for f in sorted(os.listdir(path)) if "access_log" in f]:
        yield "/".join((path, f))

rx = re.compile("^([^ ]+) ([^ ]+) ([^ ]+) \[([^\]]+)\] \"(.*?)\" ([^ ]+) ([^ ]+)")
fields = ("ip", "ident", "user", "date", "request", "code", "size")

def match(line):
    m = rx.match(line)
    if not m: print(line)
    d = dict(zip(fields, m.groups()))
    d["day"] = calendar.timegm(time.strptime(d["date"].split("/", 1)[1].split(":", 1)[0], "%b/%Y"))
    d["date"] = time.strptime(d["date"].split(" ")[0], "%d/%b/%Y:%H:%M:%S")
    #d["day"] = calendar.timegm(d["date"]) / 86400 * 86400
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
        print('"date" ' + " ".join(['"' + b.name + '"' for b in Base.aggs]))
        for d in sorted(k):
            date = time.strftime('"%m/%Y" ', time.gmtime(d))
            print(date + " ".join([str(b.count(d)) for b in Base.aggs]))
            
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

class TUD(Base):
    name = "total unique users"
    def aggregate(self, d):
        self.saggregate(d, d["user"])

class SUD(Base):
    name = "/search unique users"
    def aggregate(self, d):
        if d["request"].startswith("GET /search/s?"):
            self.saggregate(d, d["user"])

class JUD(Base):
    name = "/juno unique users"
    def aggregate(self, d):
        if d["request"].startswith("GET /juno/s/"):
            self.saggregate(d, d["user"])

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
        if "noarch.rpm" in d["request"]:
            self.saggregate(d, d["line"])

Base.aggs.append(TID())
Base.aggs.append(SID())
Base.aggs.append(JID())
Base.aggs.append(SQD())
Base.aggs.append(JQD())
Base.aggs.append(JOD())
Base.aggs.append(JDD())
Base.aggs.append(RDD())
Base.aggs.append(TUD())
Base.aggs.append(SUD())
Base.aggs.append(JUD())

if __name__ == "__main__":
    for log in accesslogs():
        if log[-3:] == ".gz":
            f = gzip.open(log)
        else:
            f = open(log)
        for l in f:
            ll = match(l)
            Base._aggregate(ll)
        f.close()

    Base.report()
