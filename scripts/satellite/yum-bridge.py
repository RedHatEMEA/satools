#!/usr/bin/python

from spacewalk.server import rhnLib, rhnSQL
import BaseHTTPServer
import os
import re
import SocketServer
import sys
import threading
import wsgiref.simple_server
import wsgiref.util


dblock = threading.Lock()


class ThreadingWSGIServer(SocketServer.ThreadingMixIn,
                          wsgiref.simple_server.WSGIServer):
    pass


def get_path(channel, filename):
    with dblock:
        nevra = rhnLib.parseRPMFilename(filename)

        c = rhnSQL.prepare("""
          SELECT rhnPackage.path
          FROM rhnPackage, rhnChannelPackage, rhnChannel, rhnPackageName,
            rhnPackageEVR, rhnPackageArch
          WHERE rhnPackage.name_id = rhnPackageName.id AND
            rhnPackageName.name = :name AND
            rhnPackage.evr_id = rhnPackageEVR.id AND
            rhnPackageEVR.version = :version AND
            rhnPackageEVR.release = :release AND
            rhnPackage.package_arch_id = rhnPackageArch.id AND
            rhnPackageArch.label = :arch AND
            rhnPackage.id = rhnChannelPackage.package_id AND
            rhnChannelPackage.channel_id = rhnChannel.id AND
            rhnChannel.label = :channel
        """)

        c.execute(channel=channel, name=nevra[0], version=nevra[2],
                  release=nevra[3], arch=nevra[4])

        return c.fetchone_dict()["path"]


def app(environ, start_response):
    m = re.match("^/([^/]+)/repodata/([^/]+)$",
                 environ["PATH_INFO"])
    if m:
        if m.group(1) in [".", ".."] or m.group(2) in [".", ".."]:
            raise Exception
        path = "/var/cache/rhn/repodata/%s/%s" % (m.group(1), m.group(2))
        start_response("200 OK", [("Content-Length",
                                   str(os.stat(path).st_size))])
        return open(path)

    m = re.match("^/([^/]+)/getPackage/([^/]+)$", environ["PATH_INFO"])
    if m:
        if m.group(1) in [".", ".."] or m.group(2) in [".", ".."]:
            raise Exception
        path = "/var/satellite/" + get_path(m.group(1), m.group(2))
        start_response("200 OK", [("Content-Length",
                                   str(os.stat(path).st_size))])
        return open(path)

    m = re.match("^/([^/]+)\.repo$", environ["PATH_INFO"])
    if m:
        gpgkey = "/etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release"
        if m.group(1).endswith("-beta") or "-beta-" in m.group(1):
            gpgkey = "/etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta"

        start_response("200 OK", [("Content-Type", "text/plain")])
        return ["""[%(channel)s]
name=%(channel)s
baseurl=http://%(host)s/%(channel)s
enabled=1
gpgcheck=1
gpgkey=file://%(gpgkey)s
""" % {"channel": m.group(1), "host": environ["HTTP_HOST"], "gpgkey": gpgkey}]

    m = re.match("^/$", environ["PATH_INFO"])
    if m:
        start_response("200 OK", [("Content-Type", "text/html")])
        return ["<a href=\"%s.repo\">%s</a><br>\n" % (d, d)
                for d in sorted(os.listdir("/var/cache/rhn/repodata"))]

    start_response("404 Not Found", [])
    return []


def main(ip="0.0.0.0", port="8085"):
    BaseHTTPServer.BaseHTTPRequestHandler.address_string = \
        lambda x: x.client_address[0]

    with dblock:
        rhnSQL.initDB()

    server = wsgiref.simple_server.make_server(ip, int(port), app,
                                               ThreadingWSGIServer)
    print "Listening on %s:%s..." % (ip, port)
    server.serve_forever()


if __name__ == "__main__":
    main(*sys.argv[1:])
