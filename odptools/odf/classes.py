#!/usr/bin/python

import lxml.etree
import ns

def elem(name):
    return parser.makeelement(name, nsmap = ns.nsmap)

def subelem(parent, name):
    e = elem(name)
    parent.append(e)
    return e

class CONFIG_config_item_set(lxml.etree.ElementBase):
    def _config_item(self, name):
        for e in self.iterchildren(ns.CONFIG_config_item):
            if e.get(ns.CONFIG_name) == name: return e
        return None

class DRAW_page(lxml.etree.ElementBase):
    @staticmethod
    def _iter_xml(x):
        t = ""

        if x.tag == ns.TEXT_tab: t += "\t"
    
        if x.text is not None:
            t += x.text

        for i in x.iterchildren():
            t += DRAW_page._iter_xml(i)

        if x.tail is not None:
            t += x.tail

        return t

    @staticmethod
    def _read_dim(xml, dim):
        if dim == "x":
            rv = xml.get(ns.SVG_x, "infcm")
        elif dim == "y":
            rv = xml.get(ns.SVG_y, "infcm")
        else:
            raise Exception("unexpected dimension")
        if rv[-2:] != "cm": raise Exception("unexpected units")
        return float(rv[:-2])

    @staticmethod
    def _child_cmp(a, b):
        return cmp(DRAW_page._read_dim(a, "y"), DRAW_page._read_dim(b, "y")) \
            or cmp(DRAW_page._read_dim(a, "x"), DRAW_page._read_dim(b, "x"))

    def as_text(self):
        children = [c for c in self.iterchildren()]
        children = sorted(children, cmp = DRAW_page._child_cmp)

        t = []
        for c in children:
            if c.tag == ns.PRESENTATION_notes: continue

            for p in c.iterdescendants(ns.TEXT_p):
                t.append(DRAW_page._iter_xml(p))

        return "\n".join(t)

class MANIFEST_file_entry(lxml.etree.ElementBase):
    @staticmethod
    def new(mediatype, fullpath, version = None):
        x = elem(ns.MANIFEST_file_entry)
        x.set(ns.MANIFEST_media_type, mediatype)
        x.set(ns.MANIFEST_full_path, fullpath)
        if version is not None:
            x.set(ns.MANIFEST_version, version)

        return x

class MANIFEST_manifest(lxml.etree.ElementBase):
    @staticmethod
    def new(mimetype):
        x = elem(ns.MANIFEST_manifest)
        x.set(ns.MANIFEST_version, "1.2")
        x.append(MANIFEST_file_entry.new(mimetype, "/", "1.2"))

        return x

    def _file_entry(self, full_path):
        for e in self.iterchildren(ns.MANIFEST_file_entry):
            if e.get(ns.MANIFEST_full_path) == full_path: return e
        return None

    def _file_entries(self, full_path):
        return [e for e in self.iterchildren(ns.MANIFEST_file_entry) if e.get(ns.MANIFEST_full_path).startswith(full_path)]

class OFFICE_body(lxml.etree.ElementBase):
    def _presentation(self):
        return self.iterchildren(ns.OFFICE_presentation).next()

class OFFICE_document_content(lxml.etree.ElementBase):
    @staticmethod
    def new():
        x = elem(ns.OFFICE_document_content)
        x.set(ns.OFFICE_version, "1.2")

        subelem(x, ns.OFFICE_scripts)
        subelem(x, ns.OFFICE_automatic_styles)
        subelem(x, ns.OFFICE_body)

        return x

    def _automatic_styles(self):
        return self.iterchildren(ns.OFFICE_automatic_styles).next()

    def _body(self):
        return self.iterchildren(ns.OFFICE_body).next()

class OFFICE_document_meta(lxml.etree.ElementBase):
    @staticmethod
    def new():
        x = elem(ns.OFFICE_document_meta)
        x.set(ns.OFFICE_version, "1.2")
    
        subelem(x, ns.OFFICE_meta)

        return x

    def _meta(self):
        return self.iterchildren(ns.OFFICE_meta).next()

class OFFICE_document_settings(lxml.etree.ElementBase):
    @staticmethod
    def new():
        x = elem(ns.OFFICE_document_settings)
        x.set(ns.OFFICE_version, "1.2")

        e = subelem(x, ns.OFFICE_settings)
        subelem(e, ns.CONFIG_config_item_set).set(ns.CONFIG_name, "ooo:view-settings")
        subelem(e, ns.CONFIG_config_item_set).set(ns.CONFIG_name, "ooo:configuration-settings")
        
        return x

    def _settings(self):
        return self.iterchildren(ns.OFFICE_settings).next()

class OFFICE_document_styles(lxml.etree.ElementBase):
    @staticmethod
    def new():
        x = elem(ns.OFFICE_document_styles)
        x.set(ns.OFFICE_version, "1.2")

        subelem(x, ns.OFFICE_styles)
        subelem(x, ns.OFFICE_automatic_styles)
        subelem(x, ns.OFFICE_master_styles)

        return x

    def _automatic_styles(self):
        return self.iterchildren(ns.OFFICE_automatic_styles).next()

    def _master_styles(self):
        return self.iterchildren(ns.OFFICE_master_styles).next()

    def _styles(self):
        return self.iterchildren(ns.OFFICE_styles).next()

class OFFICE_meta(lxml.etree.ElementBase):
    def _generator(self):
        return self.iterchildren(ns.META_generator).next()

class OFFICE_presentation(lxml.etree.ElementBase):
    @staticmethod
    def new():
        return elem(ns.OFFICE_presentation)

    def _pages(self):
        return [p for p in self.iterchildren(ns.DRAW_page)]

class OFFICE_settings(lxml.etree.ElementBase):
    def _config_item_set(self, name):
        for e in self.iterchildren(ns.CONFIG_config_item_set):
            if e.get(ns.CONFIG_name) == name: return e
        return None

class STYLE_style(lxml.etree.ElementBase):
    def _paragraph_properties(self):
        return self.iterchildren(ns.STYLE_paragraph_properties).next()

def __init__():
    global parser
    parser = lxml.etree.XMLParser()
    lookup = lxml.etree.ElementNamespaceClassLookup()
    parser.set_element_class_lookup(lookup)

    gs = globals()

    for g in sorted(gs):
        if isinstance(gs[g], type):
            (namespace, element) = g.split("_", 1)
            namespace = namespace.lower()
            element = element.replace("_", "-")
            lookup.get_namespace(ns.nsmap[namespace])[element] = gs[g]

    global __init__
    del __init__

__init__()
