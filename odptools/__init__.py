#!/usr/bin/python

import juno
import zipfile

def is_odp(filename):
    try: z = zipfile.ZipFile(filename)
    except zipfile.BadZipfile: return False
    
    try: mimetype = z.read("mimetype")
    except KeyError: mimetype = ""
    
    z.close()

    return mimetype.strip() == "application/vnd.oasis.opendocument.presentation"
