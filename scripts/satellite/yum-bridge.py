#!/usr/bin/python

from spacewalk.server import rhnLib, rhnSQL
import os
import re
import wsgiref.util

def get_path(channel, filename):
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

    c.execute(channel = channel, name = nevra[0], version = nevra[2],
              release = nevra[3], arch = nevra[4])

    return c.fetchone_dict()["path"]

def app(environ, start_response):
    m = re.match("^/([-_a-z0-9]+)/repodata/([-_.a-z0-9]+)$",
                 environ["PATH_INFO"])
    if m:
        path = "/var/cache/rhn/repodata/%s/%s" % (m.group(1), m.group(2))
        start_response("200 OK", [("Content-Length",
                                   str(os.stat(path).st_size))])
        return open(path)

    m = re.match("^/([-_a-z0-9]+)/getPackage/([-+_.a-z0-9]+)$",
                 environ["PATH_INFO"])
    if m:
        path = "/var/satellite/" + get_path(m.group(1), m.group(2))
        start_response("200 OK", [("Content-Length",
                                   str(os.stat(path).st_size))])
        return open(path)

    start_response("404 Not Found", [])
    return []

def main(ip = "0.0.0.0", port = "8085"):
    import BaseHTTPServer
    import wsgiref.simple_server

    BaseHTTPServer.BaseHTTPRequestHandler.address_string = \
        lambda x: x.client_address[0]

    rhnSQL.initDB()

    server = wsgiref.simple_server.make_server(ip, int(port), app)
    print "Listening on %s:%s..." % (ip, port)
    server.serve_forever()

if __name__ == "__main__":
    import sys
    main(*sys.argv[1:])
