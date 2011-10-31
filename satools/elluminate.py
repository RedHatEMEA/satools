#!/usr/bin/python

import argparse
import common
import cookielib
import getpass
import lxml.etree
import os
import re
import sys
import urllib
import urllib2
import urlparse

JARS = "jars"

def parse_args():
    global ap
    ap = argparse.ArgumentParser()
    sp = ap.add_subparsers(title = "subcommands")

    ap_ls = sp.add_parser("ls", help = "list saved jnlp files")
    ap_ls.set_defaults(func = ls)
    ap_mv = sp.add_parser("mv", help = "rename saved jnlp file")
    ap_mv.add_argument("oldjnlpfile")
    ap_mv.add_argument("newjnlpfile")
    ap_mv.set_defaults(func = mv)
    ap_play = sp.add_parser("play", help = "play saved jnlp file")
    ap_play.add_argument("jnlpfile")
    ap_play.set_defaults(func = play)
    ap_rm = sp.add_parser("rm", help = "remove saved jnlp file")
    ap_rm.add_argument("jnlpfile")
    ap_rm.set_defaults(func = rm)
    ap_save = sp.add_parser("save", help = "save URL to jnlp file")
    ap_save.add_argument("url", help = "URL to save, maybe starting like "
                         "https://sas.elluminate.com/p.jnlp?psid=... .  "
                         "Prints jnlp filename when done.")
    ap_save.add_argument("--username", help = "Elluminate username, "
                         "if required")
    ap_save.set_defaults(func = save)

    return ap.parse_args()

def fetchjars(xml):
    for ref in sorted(xml.xpath("//@href")):
        common.retrieve(xml.get("codebase") + "/" + ref, JARS + "/" + ref)

def getjnlpurl(url):
    f = common.retrieve_m(url)
    m = re.search("LaunchURL = \"(.*?)\"", f.read())
    f.close()

    t = urllib.splittype(url)
    return t[0] + "://" + urllib.splithost(t[1])[0] + m.group(1)

def quiet():
    f = open("/dev/null", "w")
    os.dup2(f.fileno(), 1)
    os.dup2(f.fileno(), 2)
    f.close()

def ls(args):
    print "\n".join(sorted(filter(lambda x: x != JARS and
                                  not x.endswith(".vcr"), os.listdir("."))))

def mv(args):
    os.rename(args.oldjnlpfile, args.newjnlpfile)

def play(args):
    quiet()
    os.execlp("javaws", "javaws", args.jnlpfile)

def rm(args):
    xml = lxml.etree.parse(args.jnlpfile).getroot()
    xmlargs = xml.xpath("//argument")
    for i in range(len(xmlargs) - 1):
        if xmlargs[i].text == "-play":
            vcrfile = xmlargs[i + 1].text
            if vcrfile.startswith("file://"):
                vcrfile = vcrfile[7:]
            os.unlink(vcrfile)
            break

    os.unlink(args.jnlpfile)

def login(args):
    if args.username is None:
        print "%s: error: --username argument required" % ap.prog
        sys.exit(1)

    password = getpass.getpass()

    urllib2.urlopen("https://sas.elluminate.com/site/internal/home",
                    urllib.urlencode({ "username": args.username,
                                       "password": password })).close()

def save(args):
    jnlpurl = args.url

    if re.search("/internal/", jnlpurl):
        login(args)

    if re.search("/(mr|p).jnlp\?", jnlpurl):
        jnlpurl = getjnlpurl(jnlpurl)

    vcrfile = urlparse.parse_qs(jnlpurl[jnlpurl.index("?") + 1:])["psid"][0]
    jnlpfile = vcrfile + ".jnlp"

    common.retrieve(jnlpurl, jnlpfile, force = True)

    try:
        xml = lxml.etree.parse(jnlpfile).getroot()
    except lxml.etree.XMLSyntaxError:
        os.unlink(jnlpfile)
        print "%s: couldn't retrieve jnlp: credentials incorrect?" % ap.prog
        sys.exit(1)
        
    xmlargs = xml.xpath("//argument")
    for i in range(len(xmlargs) - 1):
        if xmlargs[i].text == "-play":
            common.retrieve(xmlargs[i + 1].text, vcrfile)
            xmlargs[i + 1].text = "file://" + config["elluminate-base"] + "/" + vcrfile
            break

    xml.set("codebase", "file://" + config["elluminate-base"] + "/" + JARS)

    f = open(jnlpfile, "w")
    f.write(lxml.etree.tostring(xml, xml_declaration = True))
    f.close()

    fetchjars(xml)

    print jnlpfile

if __name__ == "__main__":
    global config
    config = common.load_config()
    args = parse_args()

    common.mkdirs(config["elluminate-base"] + "/" + JARS)
    os.chdir(config["elluminate-base"])

    cj = cookielib.CookieJar()
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
    urllib2.install_opener(opener)

    args.func(args)
