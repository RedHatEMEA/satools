#!/usr/bin/python3

from .ns import *
from . import classes
from . import juno
import copy
import itertools
import lxml.etree
import sys
import os
import zipfile

class Styledef:
    @staticmethod
    def _nameattribute(s):
        if s.tag == TABLE_table_template:
            return TEXT_style_name
        elif s.tag == TEXT_list_style:
            return STYLE_name
        elif s.tag == NUMBER_date_style:
            return STYLE_name
        elif s.prefix == "style":
            return STYLE_name
        elif s.prefix == "draw":
            return DRAW_name

        raise Exception("style definition tag %s requires special case" % s.tag)

    @staticmethod
    def getName(s):
        rv = s.get(Styledef._nameattribute(s))
        if rv == "":
            raise Exception("style definition tag %s requires special case" % s.tag)
        return rv

    @staticmethod
    def setName(s, name):
        s.set(Styledef._nameattribute(s), name)

"""
    def __init__(self, ctx, tag, name):
        self.ctx = ctx
        self.tag = tag
        self.name = name

    def __eq__(self, other):
        return self.ctx == other.ctx and self.tag == other.tag and self.name == other.name

    def __copy__(self):
        return Style(self.ctx, self.tag, self.name)
"""

class Odf(object):
    def __init__(self, filename = None):
        if filename is not None:
            self.load(filename)
            return

        self._files = {"META-INF/manifest.xml": classes.MANIFEST_manifest.new(self.mimetype),
                       "mimetype": self.mimetype}

        self.addfile("text/xml", "content.xml", classes.OFFICE_document_content.new())
        self.addfile("text/xml", "meta.xml", classes.OFFICE_document_meta.new())
        self.addfile("text/xml", "settings.xml", classes.OFFICE_document_settings.new())
        self.addfile("text/xml", "styles.xml", classes.OFFICE_document_styles.new())
        self._setshortcuts()
        self._buildstyledir()

    def load(self, filename, noparse = False):
        self.filename = filename
        self._files = {}

        z = zipfile.ZipFile(filename)
        for f in z.namelist():
            data = z.read(f)
            if f in ("META-INF/manifest.xml", "content.xml", "meta.xml",
                     "settings.xml", "styles.xml"):
                self._files[f] = lxml.etree.fromstring(data, classes.parser)
            else:
                self._files[f] = data

        self._setshortcuts()
        if not noparse:
            self._buildstyledir()

            if self._isoldgenerator():
                print("Warning: %s generated by old or unknown program, results may vary" % self.filename, file = sys.stderr)

    def save(self, filename):
        self.filename = filename

        z = zipfile.ZipFile(filename, "w", zipfile.ZIP_DEFLATED)
        for f in self._files:
            if isinstance(self._files[f], lxml.etree._Element):
                z.writestr(f, lxml.etree.tostring(self._files[f],
                                             xml_declaration = True,
                                             encoding="UTF-8"))
            else:
                z.writestr(f, self._files[f])
        z.close()

    def addfile(self, mediatype, fullpath, obj):
        self.delfile(fullpath)
        self._files[fullpath] = obj

        manifest = self._files["META-INF/manifest.xml"]
        manifest.append(classes.MANIFEST_file_entry.new(mediatype, fullpath))

    def delfile(self, fullpath):
        if fullpath in self._files: del self._files[fullpath]

        manifest = self._files["META-INF/manifest.xml"]
        e = manifest._file_entry(fullpath)
        if e is not None:
            manifest.remove(e)

    def mpstylenamewouldconflict(self, name):
        if self.hasstyle("content", STYLE_master_page, name): return True
        for suffix in masterpagesuffixes:
            if self.hasstyle("content", STYLE_style,
                             "%s-%s" % (name, suffix)):
                return True
        return False

    def hasstyle(self, ctx, tag, name, strict = False):
        if strict or ctx == "styles":
            return (ctx, tag) in self._styledir and name in self._styledir[ctx, tag]
        else:
            return ((ctx, tag) in self._styledir and name in self._styledir[ctx, tag]) or self.hasstyle("styles", tag, name)


    def getstyle(self, ctx, tag, name):
        if ctx == "styles":
            return (ctx, self._styledir[ctx, tag][name])
        else:
            if self.hasstyle(ctx, tag, name, strict = True):
                return (ctx, self._styledir[ctx, tag][name])
            else:
                return ("styles", self._styledir["styles", tag][name])

    def hasstylemap(self, src, ctx, tag, name):
        return (src, ctx, tag, name) in self._stylemap

    def getstylemap(self, src, ctx, tag, name):
        return self._stylemap[src, ctx, tag, name]

    @staticmethod
    def styleref2deftag(tag, attrib):
        if attrib in _map: return _map[attrib]

        if attrib == TEXT_style_name and tag == TEXT_list:
            return TEXT_list_style
        elif attrib == STYLE_data_style_name and tag == TEXT_date:
            return NUMBER_date_style
        else:
            return STYLE_style

    def _buildstyledir1(self, ctx, src):
        ctx = None

        for e in src:
            if ctx is None:
                srcroot = getroot(e)
                if srcroot.tag == self.content.tag:
                    ctx = "content"
                elif srcroot.tag == self.styles.tag:
                    ctx = "styles"
                else:
                    raise Exception("style context unknown")

            (tag, name) = (e.tag, Styledef.getName(e))
            if self.hasstyle(ctx, tag, name, strict = True):
                raise Exception("styledef %s/%s already present" % (tag, name))

            if (ctx, tag) not in self._styledir: self._styledir[ctx, tag] = {}
            self._styledir[ctx, tag][name] = e

    def _buildstyledir(self):
        self._styledir = {}
        self._buildstyledir1("styles", self.styles._automatic_styles())
        self._buildstyledir1("styles", self.styles._master_styles())
        self._buildstyledir1("styles", self.styles._styles())
        self._buildstyledir1("content", self.content._automatic_styles())

    def _setshortcuts(self):
        for f in ("META-INF/manifest.xml", "mimetype", "content.xml",
                  "meta.xml", "settings.xml", "styles.xml"):
            setattr(self, f.split("/")[-1].split(".")[0], self._files[f])

    def _setting(self, item):
        return self.settings._settings()._config_item_set("ooo:configuration-settings")._config_item(item)

    def _isoldgenerator(self):
        try:
            gen = self.meta._meta()._generator().text
            vsn = [int(v) for v in gen.split("$")[0].split("/")[1].split(".")]
            if vsn[0] >= 3: return False
        except Exception:
            pass

        return True

class Odt(Odf):
    mimetype = "application/vnd.oasis.opendocument.text"

class Odp(Odf):
    mimetype = "application/vnd.oasis.opendocument.presentation"

    def __init__(self, filename = None):
        self._mpstyles = {}
        self._stylemap = {}
        self._styleindex = {}

        super(Odp, self).__init__(filename)

        if filename is None:
            self.content._body().append(classes.OFFICE_presentation.new())

    @staticmethod
    def is_odp(filename):
        try: z = zipfile.ZipFile(filename)
        except zipfile.BadZipfile: return False

        try: mimetype = z.read("mimetype")
        except KeyError: mimetype = ""

        z.close()

        return mimetype.strip() == Odp.mimetype

    def load(self, filename, noparse = False):
        super(Odp, self).load(filename, noparse = noparse)
        if not noparse:
            self._buildmpstyles()
            self._fixparagraphsummation()

    def _buildmpstyle(self, mpstyle):
        self._mpstyles[mpstyle] = mpstyle
        for suffix in masterpagesuffixes:
            self._mpstyles["%s-%s" % (mpstyle, suffix)] = mpstyle

    def _buildmpstyles(self):
        self._mpstyles = {}
        for page in self.content._body()._presentation()._pages():
            mpstyle = page.get(DRAW_master_page_name)
            if mpstyle is not None:
                self._buildmpstyle(mpstyle)

    def _fixparagraphsummation(self):
        if self._setting("ParagraphSummation") is not None:
            if self._setting("ParagraphSummation").text == "true":
                conv(self)
                self._setting("ParagraphSummation").text = "false"
                return True
        return False

def equal(x, y):
    if x.tag != y.tag: return False
    if x.attrib != y.attrib: return False
    return True

def getroot(e):
    return e.getroottree().getroot()

def clone(_dst, src):
    srcroot = getroot(src)

    for dst in (_dst.content, _dst.settings, _dst.styles, _dst.manifest, None):
        if dst is None:
            raise Exception("can't find destination xml tree")

        if srcroot.tag == dst.tag:
            break

    ancestors = list(src.iterancestors())[:-1]
    ancestors.reverse()

    for a in ancestors:
        for _dst in itertools.chain(dst.iterchildren(a.tag), [None]):
            if _dst is None:
                raise Exception("destination xml tree incomplete")

            if equal(a, _dst):
                break

        dst = _dst

    e = copy.deepcopy(src)
    dst.append(e)
    return e

def clonefile2(dst, src, manifest):
    # don't call me on directories...

    fullpath = manifest.get(MANIFEST_full_path)

    # TODO: maybe should only coalesce Pictures/*?
    # TODO: implement caching?
    newpath = None
    for f in dst._files:
        if dst._files[f] == src._files[fullpath]:
            newpath = f
            break

    if newpath is None:
        # file not found, need to copy
        newpath = fullpath
        if newpath in dst._files:
            # and need to rename
            for i in itertools.count(1):
                testpath = os.path.splitext(newpath)
                testpath = namestrip(testpath[0]) + str(i) + testpath[1]
                if testpath not in dst._files:
                    newpath = testpath
                    break

        dst._files[newpath] = src._files[fullpath]

    if dst.manifest._file_entry(newpath) is None:
        newmanifest = clone(dst, manifest)
        newmanifest.set(MANIFEST_full_path, newpath)
        newmanifest.tail = ""

    return newpath

def clonefile(dst, src, manifest):
    fullpath = manifest.get(MANIFEST_full_path)

    if dst.manifest._file_entry(fullpath) is None:
        clone(dst, manifest).tail = ""

    if fullpath in src._files and fullpath not in dst._files:
        dst._files[fullpath] = src._files[fullpath]

def clonepage(dst, src, page):
    newpage = clone(dst, page)
    resolvedeps(dst, src, "content", newpage)

    if dst._setting("DefaultTabStop") == None:
        tabstop = src._setting("DefaultTabStop")
        clone(dst, tabstop)

    elif dst._setting("DefaultTabStop").text != src._setting("DefaultTabStop").text:
        print("Warning: DefaultTabStop conflict", file = sys.stderr)

def resolvehref(dst, src, e, refname):
    # TODO: cache hrefs for performance?
    p = os.path.normpath(refname)
    manifest = src.manifest._file_entry(p)
    if manifest is not None:
        # single file
        newp = clonefile2(dst, src, manifest)
        e.set(XLINK_href, newp)

    else:
        # perhaps a directory
        # TODO: implement cross-mapped directories
        # TODO: consider ObjectReplacements :/
        manifests = src.manifest._file_entries(p + "/")
        for manifest in manifests:
            clonefile(dst, src, manifest)

def resolvestyleref(dst, src, ctx, e, a, refname):
    deftag = Odf.styleref2deftag(e.tag, a)

    if dst.hasstylemap(src, ctx, deftag, refname):
        (_ctx, tag, name) = dst.getstylemap(src, ctx, deftag, refname)
        newstyle = dst.getstyle(ctx, tag, name)[1]

    else:
        # TODO: search dst styles for equality match
        #       (coalescing)
        # TODO: equality must include root

        if a == DRAW_master_page_name and refname in src._mpstyles:
            clonempstyle(dst, src, src._mpstyles[refname])
            (_ctx, tag, name) = dst.getstylemap(src, "styles", deftag, refname)
            newstyle = dst.getstyle(ctx, tag, name)[1]

        else:
            (stylectx, style) = src.getstyle(ctx, deftag, refname)
            newstyle = clonestyle(dst, src, stylectx, style)
            resolvedeps(dst, src, stylectx, newstyle)

    e.set(a, Styledef.getName(newstyle))

def resolvedeps(dst, src, ctx, xml):
    for e in xml.iter():
        for a in e.keys():
            if a in styledepattribs:
                if a in (DRAW_class_names, DRAW_stroke_dash_names, 
                         PRESENTATION_class_names, TEXT_class_names):
                    raise Exception("attribute %s not implemented" % a)

                if a == TEXT_style_name and e.tag == TABLE_table_template:
                    # this is actually a definition, not a reference
                    continue

                refname = e.get(a)
                if refname == "":
                    continue

                if a == XLINK_href:
                    resolvehref(dst, src, e, refname)
                else:
                    resolvestyleref(dst, src, ctx, e, a, refname)

def clonempstyle(dst, src, name):
    index = None
    if dst.mpstylenamewouldconflict(name):
        for index in map(str, itertools.count(1)):
            if not dst.mpstylenamewouldconflict(changeindex(name, index)):
                break

    newstyles = [clonestyle(dst, src, "styles", src.getstyle("styles", STYLE_master_page, name)[1], index = index)]
    for suffix in masterpagesuffixes:
        newstyles.append(clonestyle(dst, src, "styles", src.getstyle("styles", STYLE_style, "%s-%s" % (name, suffix))[1], index = index, suffix = "-" + suffix))

    for newstyle in newstyles:
        resolvedeps(dst, src, "styles", newstyle)

    dst._buildmpstyle(name)

def namestrip(name, suffix = ""):
    if suffix != "":
        if name[-len(suffix):] != suffix: raise Exception("suffix mismatch")
        name = name[:-len(suffix)]

    return name.rstrip("0123456789")

def changeindex(name, index, suffix = ""):
    return namestrip(name, suffix) + index + suffix

def clonestyle(dst, src, stylectx, style, index = None, suffix = ""):
    newstyle = clone(dst, style)

    name = Styledef.getName(newstyle)

    if index is not None:
        name = changeindex(name, index, suffix)

    elif dst.hasstyle(stylectx, newstyle.tag, name, strict = True):
        if suffix != "":
            raise Exception("styleindex not implemented")

        one = dst._styleindex.get(namestrip(name), 1)
        for index in map(str, itertools.count(one)):
            name = changeindex(name, index)
            if not dst.hasstyle("content", newstyle.tag, name):
                dst._styleindex[namestrip(name)] = int(index) + 1
                break

    if dst.hasstyle(stylectx, newstyle.tag, name, strict = True):
        raise Exception("style %s already exists" % name)

    Styledef.setName(newstyle, name)

    if index is not None:
        for dntag in (STYLE_display_name, DRAW_display_name):
            dnv = newstyle.get(dntag)
            if dnv is not None:
                newstyle.set(dntag, changeindex(dnv, index, suffix))

    dst._buildstyledir1(stylectx, [newstyle])

    dst._stylemap[src, stylectx, style.tag, Styledef.getName(style)] = (stylectx, style.tag, name)
    if stylectx == "styles" and not src.hasstyle("content", style.tag, Styledef.getName(style), strict = True):
        dst._stylemap[src, "content", style.tag, Styledef.getName(style)] = (stylectx, style.tag, name)

    return newstyle


# If ParagraphSummation is true, the distance between two paragraphs
# is the sum of ParaTopMargin of the previous and ParaBottomMargin of
# the next paragraph. If false, only the greater of the two is
# choosen.

def cm(x):
    if x is None: return x
    if x[-2:] != "cm": raise Exception()
    return float(x[:-2])

def conv(odp):
    for page in odp.content._body()._presentation()._pages():
        # need to include draw:frame as well as draw:custom-shape?
        for cs in page.iterdescendants(DRAW_custom_shape):
            ps = list(cs.iterdescendants(TEXT_p))
            for i in range(0, len(ps) - 1):
                if ps[i].get(TEXT_style_name) is None or ps[i + 1].get(TEXT_style_name) is None: continue

                (ctx1, s1) = odp.getstyle("content", STYLE_style, ps[i].get(TEXT_style_name))
                (ctx2, s2) = odp.getstyle("content", STYLE_style, ps[i + 1].get(TEXT_style_name))

                s1b = cm(s1._paragraph_properties().get(FO_margin_bottom))
                s2t = cm(s2._paragraph_properties().get(FO_margin_top))

                if s1b is None or s2t is None: continue

                news1b = s1b + s2t
                news1 = clonestyle(odp, odp, ctx1, s1)

                news1._paragraph_properties().set(FO_margin_bottom, "%0.3fcm" % news1b)
                ps[i].set(TEXT_style_name, news1.get(STYLE_name))


styledepattribs = (CHART_style_name, DRAW_class_names,
                   DRAW_fill_gradient_name, DRAW_fill_hatch_name,
                   DRAW_fill_image_name, DRAW_marker_end,
                   DRAW_marker_start, DRAW_master_page_name,
                   DRAW_opacity_name, DRAW_stroke_dash,
                   DRAW_stroke_dash_names, DRAW_style_name,
                   DRAW_text_style_name, FORM_text_style_name,
                   PRESENTATION_class_names,
                   PRESENTATION_presentation_page_layout_name,
                   PRESENTATION_style_name, STYLE_apply_style_name,
                   STYLE_data_style_name, STYLE_leader_text_style,
                   STYLE_list_style_name, STYLE_master_page_name,
                   STYLE_next_style_name, STYLE_page_layout_name,
                   STYLE_parent_style_name,
                   STYLE_percentage_data_style_name,
                   STYLE_register_truth_ref_style_name, STYLE_style_name,
                   STYLE_text_line_through_text_style,
                   TABLE_default_cell_style_name,
                   TABLE_paragraph_style_name, TABLE_style_name,
                   TABLE_template_name, TEXT_citation_body_style_name,
                   TEXT_citation_style_name, TEXT_class_names,
                   TEXT_cond_style_name, TEXT_default_style_name,
                   TEXT_main_entry_style_name, TEXT_master_page_name,
                   TEXT_style_name, TEXT_style_override,
                   TEXT_visited_style_name, XLINK_href)

masterpagesuffixes = ("background", "backgroundobjects", "notes", "outline1",
                      "outline2", "outline3", "outline4", "outline5",
                      "outline6", "outline7", "outline8", "outline9",
                      "subtitle", "title")

_map = { DRAW_fill_gradient_name: DRAW_gradient,
         DRAW_fill_hatch_name: DRAW_hatch,
         DRAW_fill_image_name: DRAW_fill_image,
         DRAW_marker_start: DRAW_marker,
         DRAW_marker_end: DRAW_marker,
         DRAW_master_page_name: STYLE_master_page,
         DRAW_opacity_name: DRAW_opacity,
         DRAW_stroke_dash: DRAW_stroke_dash,
         PRESENTATION_presentation_page_layout_name:
             STYLE_presentation_page_layout,
         STYLE_list_style_name: TEXT_list_style,
         STYLE_page_layout_name: STYLE_page_layout,
         TABLE_template_name: TABLE_table_template }

