#!/usr/bin/python3

from satools import common
from satools import mailindex
import argparse
import os
import sys

def parse_args():
    ap = argparse.ArgumentParser()
    ap.add_argument("-b", dest = "base", default = config["lists-base"],
                    help = "base directory for mail archive")
    ap.add_argument("querystring", nargs = "+")

    return vars(ap.parse_args())

if __name__ == "__main__":
    global config
    config = common.load_config()
    args = parse_args()

    execpath = config["lgrep-exec"]
    if execpath is None:
        print("Please configure your MUA in $HOME/.satools before running %s." % sys.argv[0], file = sys.stderr)
        sys.exit(1)

    query = " ".join(args["querystring"])

    maildb = mailindex.MailDB(args["base"] + "/.index")

    common.mkdirs(os.path.split(config["lgrep-mailbox"])[0])
    common.unlink(config["lgrep-mailbox"])
    mbox = open(config["lgrep-mailbox"], "w")

    for row in maildb.search(query):
        f = open(os.sep.join((args["base"], row["path"])))
        f.seek(row["offset"])
        mbox.write(f.read(row["length"]))
        f.close()

    mbox.close()
    common.mkro(config["lgrep-mailbox"])

    maildb.close()

    execpath = execpath.replace("%filename", os.path.split(config["lgrep-mailbox"])[1])
    execpath = execpath.replace("%path", config["lgrep-mailbox"])
    execpath = execpath.split(" ")

    try:
        os.execvp(execpath[0], execpath)

    except OSError:
        print("Failed to exec \"%s\", please edit $HOME/.satools." % path, file = sys.stderr)
        sys.exit(1)
