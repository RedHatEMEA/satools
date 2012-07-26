#!/usr/bin/python -ttu

import common
import lxml.etree
import os

def sync(query, keep):
    xml = common.retrieve_m(config["gsa-url"] + "?client=internal&output=xml&num=1000&filter=0&q=" + query)
    xml = lxml.etree.parse(xml)

    if int(xml.xpath("//M/text()")[0]) == 1000:
        raise Exception("search returned too many results")

    for result in xml.xpath("//U/text()"):
        dest = result.split("//")[1]
        dest = dest.replace("~", "")
        common.mkdirs(os.path.split(dest)[0])
        common.retrieve(result, dest)
        keep.add(dest)

if __name__ == "__main__":
    global config
    config = common.load_config()

    common.mkdirs(config["gsa-base"])
    os.chdir(config["gsa-base"])

    lock = common.Lock(".lock")

    keep = set()
    for query in config["gsa-sync"]:
        sync(query, keep)

    for dirpath, dirnames, filenames in os.walk(".", topdown = False):
        for f in filenames:
            path = os.path.relpath(dirpath, ".") + "/" + f
            if not path.startswith("./.") and path not in keep:
                os.unlink(path)

        if not os.listdir(dirpath):
            os.rmdir(dirpath)

    with open(".sync-done", "w") as f:
        pass
        
