#!/usr/bin/python -u

import common
import itertools
import lxml.etree
import os
import Queue
import re
import requests
import sys
import threading
import time
import traceback
import urllib


retries = 10
step = 50
q = Queue.Queue(step)
lock = threading.Lock()
files = set()
tls = threading.local()


class Download(object):
  def __init__(self, href, path):
    self.href = href
    self.path = path

  def download(self, mtime):
    r = get(self.href, stream = True)

    p = os.path.split(self.path)
    tempname = os.path.join(p[0], "." + p[1])

    with open(tempname, "wb") as f:
      for data in r.iter_content(4096):
        f.write(data)

      f.flush()
      os.fsync(f.fileno())

    os.utime(tempname, (mtime, mtime))
    common.mkro(tempname)
    common.rename(tempname, self.path)


class HTML(object):
  def __init__(self, data):
    parser = lxml.etree.HTMLParser()
    self.xml = lxml.etree.fromstring(data.replace("\r\n", "\n"), parser)


class Document(HTML):
  def __init__(self, data):
    super(Document, self).__init__(data)

    details = self.xml.xpath("//div[@class='jive-content-header-details']")[0]
    text = lxml.etree.tostring(details, method = "text", encoding = "UTF-8")
    r = re.search("Last Modified:.*?\n(.*?)\nby", text, re.S)
    self.mtime = time.mktime(time.strptime(r.group(1), "%b %d, %Y %I:%M %p"))

    insert = None
    self.path = self.xml.xpath("//div[@id='jive-breadcrumb']/span/a")
    if self.path[1].get("href").startswith("/groups/"):
      insert = "Groups"
    elif self.path[1].get("href").startswith("/community/"):
      insert = "Communities"
    self.path = [p.text.strip().replace("/", "_") for p in self.path][:-1]
    if insert:
      self.path.insert(1, insert)

    self.downloads = []

    # handle potential binary document
    hrefs = self.xml.xpath("//span[@class='jive-wiki-body-file-info']/a/@href")
    if len(hrefs):
      dlpath = self.path + [urllib.unquote(hrefs[0].split("/")[-1]).decode("utf-8")]
      self.downloads.append(Download(hrefs[0], "/".join(dlpath)))

    # handle potential attachment document
    title = self.xml.xpath("//div[@class='jive-content-title']/h2")[0]
    self.path += [title[0].tail.strip()]

    hrefs = self.xml.xpath("//div[@class='jive-attachments']//a/@href")
    for href in hrefs:
      dlpath = self.path + [urllib.unquote(href.split("/")[-1]).decode("utf-8")]
      self.downloads.append(Download(href, "/".join(dlpath)))


class Index(HTML):
  def __init__(self, data):
    super(Index, self).__init__(data)

    xp = self.xml.xpath("//td[@class='jive-table-cell-subject']/a")
    self.hrefs = [x.get("href") for x in xp]


def get(href, **kwargs):
  for i in range(retries):
    try:
      log(href)
      r = tls.s.get(config["clearspace-root"] + href,
                    auth = (config["clearspace-username"],
                            config["clearspace-password"]),
                    headers = { "Accept-Language": "en" },
                    **kwargs)

      if r.status_code != 200:
        raise Exception("Bad status code %u with url: %s" % (r.status_code, href))

      break

    except Exception as e:
      if i == retries - 1:
        raise
      
      log("%s, sleeping..." % e.message)
      time.sleep(10)

  return r

def download(cls, href):
  r = get(href)
  doc = cls(r.text)

  for dl in doc.downloads:
    if not dl.path.lower().endswith(".odp"):
      continue

    with lock:
      if dl.path in files:
        continue
      files.add(dl.path)

    if not os.path.exists(dl.path) or os.path.getmtime(dl.path) != doc.mtime:
      common.mkdirs(os.path.dirname(dl.path))
      dl.download(doc.mtime)

def worker():
  tls.s = requests.Session()
  while True:
    items = q.get()
    try:
      items[0](*items[1:])
    except Exception:
      log(str(items) + "\n" + traceback.format_exc())
    q.task_done()

def iter_index(basehref, d, cls):
  d["step"] = step
  for i in itertools.count(step = step):
    d["offset"] = i
    r = get(basehref % d)
    index = Index(r.text)

    for href in index.hrefs:
      q.put((download, cls, href))

    if len(index.hrefs) != step:
      break

def users():
  get("/")
  for i in itertools.count(step = step):
    r = get("/api/rest/userService/usersBounded/%u/%u" % (i, step))
    xml = lxml.etree.fromstring(r.text)
    ids = xml.xpath("//ID/text()")
    for i in ids:
      yield int(i)
    if len(ids) != step:
      break

def cleanup():
  for dirpath, dirnames, filenames in os.walk(".", topdown = False):
    for f in filenames:
      path = os.path.normpath(os.path.join(dirpath, f))
      if path.decode("utf-8") not in files and path[0] != ".":
        os.unlink(path)

    if not os.listdir(dirpath):
      os.rmdir(dirpath)

def log(s):
  with lock:
    print >>sys.stderr, s

def main():
  global config
  config = common.load_config()
  config["clearspace-base"] = os.environ["HOME"] + "/docspace-2" # TODO: remove

  common.mkdirs(config["clearspace-base"])
  os.chdir(config["clearspace-base"])

  l = common.Lock(".lock")

  threads = int(config["clearspace-threads"])
  for i in range(threads):
    t = threading.Thread(target = worker, name = i)
    t.daemon = True
    t.start()

  tls.s = requests.Session()

  for i in users():
    iter_index("/view-documents.jspa?start=%(offset)u&numResults=%(step)u&targetUser=%(user)u", {"user": i}, Document)

  q.join()

  cleanup()

  common.write_sync_done()

if __name__ == "__main__":
  main()
