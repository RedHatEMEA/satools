#!/usr/bin/python

import common
import mailbox
import mailindex
import sys
import os

def init():
    global config
    config = common.load_config()

def cleanfilename(fn):
    fn = mailindex.decode(fn)
    fn = fn.replace("\n", "_")
    fn = fn.replace("\t", "_")
    fn = fn.replace("/", "_")
    return fn

def extract(path):
    if config["attachments-enabled"] != "1":
        return

    print >>sys.stderr, "Extracting attachments from %s..." % path

    mbox = mailbox.mbox(config["lists-base"] + "/" + path)

    for msg in mbox.keys():
        index = 0
        for part in mbox[msg].walk():
            fn = part.get_filename()
            typ = part.get_content_type()
            if fn is not None \
                    and not part.get("Content-Disposition", "inline").startswith("inline") \
                    and typ not in \
                    ('application/pgp-signature', 'application/pkcs7-signature',
                     'application/x-pkcs7-signature', 'image/x-icon',
                     'message/external-body', 'message/rfc822', 'text/calendar',
                     'text/x-vcard'):

                p = config["attachments-base"] + "/" + path

                try:
                    fn = cleanfilename(fn)

                    if config["attachments-odponly"] != "1" or \
                            fn.lower().endswith(".odp") or \
                            typ.lower().startswith("application/vnd.oasis.opendocument.presentation"):
                        common.mkdirs(p)
                        p += "/%03u-%03u-%s" % (msg, index, fn)

                        if not os.path.exists(p):
                            temppath = common.mktemppath(p)
                        
                            f = open(temppath, "w")
                            f.write(part.get_payload(decode = True))

                            f.flush()
                            os.fsync(f.fileno())
                            f.close()
                
                            common.rename(temppath, p)

                except UnicodeEncodeError:
                    pass

            index += 1

init()
