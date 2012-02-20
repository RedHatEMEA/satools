#!/usr/bin/python

import web

def whoami():
    return "jminter"
    # return web.ctx.environ["REMOTE_USER"].split("@")[0]

def can_write(path):
    home = "/home/" + whoami()
    return path == home or can_write_parent(path)

def can_write_parent(path):
    home = "/home/" + whoami()
    return path.startswith(home + "/")
