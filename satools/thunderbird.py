#!/usr/bin/python

import common
import os
import subprocess
import sys

def init():
    global config
    config = common.load_config()

    if config["thunderbird-base"] is None:
        return

    if isrunning():
        print >>sys.stderr, \
            "thunderbird.py: thunderbird is running, disabling plugin"
        config["thunderbird-base"] = None
        return

    rmpath(config["thunderbird-folder"])
    mkpath(config["thunderbird-folder"])

    config["thunderbird-base"] = base(spd(config["thunderbird-folder"]))

def isrunning():
    return subprocess.call(["pidof", "thunderbird"],
                           stdout = open("/dev/null")) == 0

def rmpath(path):
    common.rmtree(base(spd(path)))
    common.unlink(base(halfspd(path) + ".msf"))
    common.unlink(base(halfspd(path)))

def base(path):
    return config["thunderbird-base"] + "/" + path

def spd(path):
    if path == "": return ""
    return "/".join(map(lambda x: x + ".sbd", path.split("/")))

def halfspd(path):
    (parent, child) = os.path.split(path)
    return "/".join(map(lambda x: x + ".sbd", parent.split("/"))) + "/" + child

def mkpath(path):
    if os.path.exists(base(spd(path))):
        return

    (parent, child) = os.path.split(path)
    parentsbd = base(spd(parent))

    if not os.path.exists(parentsbd):
        mkpath(parent)

    os.mkdir(parentsbd + "/" + spd(child))
    with open(parentsbd + "/" + child, "w") as f:
        pass

def link(path):
    if config["thunderbird-base"] is not None:
        mkpath(os.path.split(path)[0])
        os.link(path, base(halfspd(path)))
