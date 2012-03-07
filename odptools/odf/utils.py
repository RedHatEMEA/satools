#!/usr/bin/python

import __init__
import codecs
import re
import sys

def iter_pages(srcstrs, callback, progress = True, **kwargs):
    for srcstr in srcstrs:
        rangestr = "[-]"

        m = re.search("^(.*)(\[.*\])$", srcstr)
        if m: (srcstr, rangestr) = (m.group(1), m.group(2))

        src = __init__.Odp()
        src.load(srcstr)
        pages = src.content._body()._presentation()._pages()
        ranges = parserangestr(rangestr, len(pages))

        srcstr_p = srcstr
        if len(srcstr_p) > 65: srcstr_p = "..." + srcstr_p[-62:]

        i = 1
        i_max = sum(map(lambda r: r[1] - r[0], ranges))

        for r in ranges:
            for p in range(r[0], r[1]):
                if progress:
                    print >>sys.stderr, "\r[%s] %s: %d/%d" % \
                        (spinner(i), srcstr_p, i, i_max),
                
                callback(src, p, **kwargs)

                i += 1

        print >>sys.stderr, "\r   "

def parserangestr(rangestr, maxlen):
    """
    Converts a string containing a bracket-enclosed comma-separated
    list of 0-based closed ranges into a list of 0-based half-open
    range tuples.  Input ranges may be of the form X (shortcut for
    X-X), X-Y, -Y (shortcut for 1-Y), X- (shortcut for X-maxlen) or -
    (shortcut for 0-maxlen).  Order and separation of input ranges is
    conserved in output.  Output is verified to ensure that each
    tuple's elements are ascending (i.e. X < Y), that X >= 0 and that
    Y <= maxlen.  None is returned on error.

    Example:
      parserangestr("[7,,-2,9-,4-5]", 12) => [(7, 8), (0, 3), (9, 12), (4, 6)]
    """

    rangestr = re.sub("\s+", "", rangestr)

    if not re.match("^\[(\d*-?\d*)(,\d*-?\d*)*\]$", rangestr):
        return None

    ranges = []
    for subrangestr in rangestr[1:-1].split(","):
        if subrangestr.isdigit():
            ranges.append((int(subrangestr), int(subrangestr) + 1))
        elif subrangestr != "":
            m = re.match("(\d*)-(\d*)", subrangestr)
            ranges.append((int((m.group(1), 0)[m.group(1) == ""]),
                           int((m.group(2), maxlen - 1)[m.group(2) == ""]) + 1))

    for r in ranges:
        if r[0] < 0 or r[1] > maxlen or r[0] >= r[1]:
            return None

    return ranges

def set_encoding():
    if sys.stdout.encoding == None:
        sys.stdout = codecs.getwriter("UTF-8")(sys.stdout)

def spinner(i):
    return ("-", "\\", "|", "/")[i % 4]
