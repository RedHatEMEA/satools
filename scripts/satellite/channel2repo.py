#!/usr/bin/python

# Based on channel2repo.py by Rhys Oxenham <roxenham@redhat.com>
# example usage (e.g. for RHEV 3.1 beta + CloudForms v1 w/deps)
# ./channel2repo.py satellite.example.com username password --createrepo -c jbappplatform-6-x86_64-server-6-rpm -c rhel-x86_64-rhev-agent-6-server-beta -c rhel-x86_64-rhev-mgmt-agent-6-beta -c rhel-x86_64-server-6 -c rhel-x86_64-server-6-cf-ce-1 -c rhel-x86_64-server-6-cf-se-1 -c rhel-x86_64-server-6-cf-tools-1 -c rhel-x86_64-server-6-rhevm-3-beta -c rhel-x86_64-server-optional-6 -c rhel-x86_64-server-supplementary-6 -c rhn-tools-rhel-x86_64-server-6

import argparse
import os
import sys
import xmlrpclib

def parse_args():
  ap = argparse.ArgumentParser()
  ap.add_argument("hostname")
  ap.add_argument("username")
  ap.add_argument("password")
  ap.add_argument("-c", "--channel", default = [], dest = "channel",
                  nargs = "+")
  ap.add_argument("--createrepo", action = "store_true")
  return ap.parse_args()

if __name__ == "__main__":
  args = parse_args()

  client = xmlrpclib.Server("http://%s/rpc/api" % args.hostname)
  key = client.auth.login(args.username, args.password)

  for c in args.channel:
    print >>sys.stderr, "Dumping channel %s..." % c
    if not os.path.exists(c):
      os.mkdir(c)

    pkgs = client.channel.software.listLatestPackages(key, c)
    for i, pkg in enumerate(pkgs):
      filename = client.packages.getDetails(key, pkg["id"])["file"]
      print >>sys.stderr, "[%u/%u] %s" % (i + 1, len(pkgs), filename)

      f = open(os.path.join(c, filename), "w")
      f.write(client.packages.getPackage(key, pkg["id"]).data)
      f.close()

  client.auth.logout(key)

  if args.createrepo:
    os.system("createrepo .")
