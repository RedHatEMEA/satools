#!/usr/bin/python3

import argparse
import codecs
import common
import itertools
import json
import lxml.html
import os
import queue
import requests
import sys
import threading
import time
import traceback
import urllib.parse


files = set()
lock = threading.Lock()
q = queue.Queue(200)
tls = threading.local()
max_index = 0
index = 0


def get(url, *args, **kwargs):
  for i in range(10):
    try:
      r = tls.s.get(url, *args, **kwargs)
      if r.status_code == 200:
        return r

      log("WARNING: %u on %s, retry %u" % (r.status_code, url, i))
    except Exception as e:
      log("WARNING: exception %s on %s, retry %u" % (e, url, i))

    time.sleep(10)

  raise Exception("ERROR: gave up on %s" % url)


def parse_args():
  ap = argparse.ArgumentParser()
  ap.add_argument("username")
  ap.add_argument("password")

  return ap.parse_args()


def path(url):
  r = get(url)
  r = lxml.html.fromstring(r.content)

  path = r.xpath("//div[@id = 'jive-breadcrumb']//a")
  if path[1].get("href").startswith("/groups/"):
    category = "Groups"
  elif path[1].get("href").startswith("/community/"):
    category = "Communities"
  elif path[1].get("href").startswith("/people/"):
    category = "People"
  else:
    raise Exception("unknown category")

  path = [category] + [p.text.strip().replace("/", "_") for p in path][1:-1]

  return "/".join(path)


def download(url, path, mtime):
  with lock:
    if path in files:
      return
    files.add(path)

  if os.path.exists(path) and os.path.getmtime(path) == mtime:
    return

  common.mkdirs(os.path.dirname(path))

  log(url + " -> " + path)
  r = get(url, stream = True)

  p = os.path.split(path)
  temppath = os.path.join(p[0], "." + p[1])

  with open(temppath, "wb") as f:
    for data in r.iter_content(4096):
      f.write(data)

    f.flush()
    os.fsync(f.fileno())

  os.utime(temppath, (mtime, mtime))
  common.mkro(temppath)
  common.rename(temppath, path)


def iter_content(c):
  ODP = "application/vnd.oasis.opendocument.presentation"
  if c.get("contentType", "") != ODP and \
     all([a["contentType"] != ODP for a in c.get("attachments", [])]):
    return

  root = path(c["resources"]["html"]["ref"])
  mtime = time.mktime(time.strptime(c["updated"], "%Y-%m-%dT%H:%M:%S.%f+0000"))

  if c.get("contentType", "") == ODP:
    download(c["binaryURL"], root + "/" + c["name"], mtime)

  for a in c.get("attachments", []):
    if a["contentType"] == ODP:
      download(a["url"], root + "/" + a["name"], mtime)


def contents():
  for p in people():
    url = config["jive-root"] + "/api/core/v3/contents?sort=dateCreatedAsc&filter=author%28" + urllib.parse.quote(p) + "%29&abridged=true&count=100&startIndex=0"

    while True:
      log(url)
      r = get(url)
      r = json.loads(r.text[r.text.find("\n") + 1:])
      for c in r["list"]:
        yield c

      if "next" not in r.get("links", {}):
        break

      url = r["links"]["next"]


def people():
  global index

  for index in itertools.count(step = 100):
    url = config["jive-root"] + "/api/core/v3/people?sort=dateJoinedAsc&fields=resources&count=100&startIndex=%u" % index

    log(url)
    r = get(url)
    r = json.loads(r.text[r.text.find("\n") + 1:])

    if not r["list"]:
      break

    for p in r["list"]:
      yield p["resources"]["self"]["ref"]


def worker(cookies):
  tls.s = requests.Session()
  tls.s.cookies = cookies

  while True:
    items = q.get()
    try:
      items[0](*items[1:])
    except Exception:
      log(str(items) + "\n" + traceback.format_exc())
    q.task_done()


def cleanup():
  if index < max_index:
    log("cleanup(): index < max_index: returning")
    return

  for dirpath, dirnames, filenames in os.walk(".", topdown = False):
    for f in filenames:
      path = os.path.normpath(os.path.join(dirpath, f))
      if path.decode("utf-8") not in files and path[0] != ".":
        os.unlink(path)

    if not os.listdir(dirpath):
      os.rmdir(dirpath)


def log(s):
  with lock:
    print(s, file = sys.stderr)


def login(username, password):
  url = config["jive-root"]
  r = get(url)
  r = lxml.html.fromstring(r.content)

  url = urllib.parse.urljoin(url, r.xpath("//form/@action")[0])
  form = { i.name: i.value for i in r.xpath("//form//input[@name]") }
  r = tls.s.post(url, form)
  r = lxml.html.fromstring(r.content)

  url = urllib.parse.urljoin(url, r.xpath("//form/@action")[0])
  form = { i.name: i.value for i in r.xpath("//form//input[@name]") }
  form.update({ "j_username": username, "j_password": password })
  r = tls.s.post(url, form)
  r = lxml.html.fromstring(r.content)

  url = urllib.parse.urljoin(url, r.xpath("//form/@action")[0])
  form = { i.name: i.value for i in r.xpath("//form//input[@name]") }
  r = tls.s.post(url, form)


def main(username, password):
  global config
  config = common.load_config()

  common.mkdirs(config["jive-base"])
  os.chdir(config["jive-base"])

  l = common.Lock(".lock")

  global max_index
  try:
    with open(".max-index") as f:
      max_index = int(f.read())
  except IOError:
    pass

  tls.s = requests.Session()
  login(username, password)

  threads = int(config["jive-threads"])
  for i in range(threads):
    t = threading.Thread(target = worker, name = i, args = (tls.s.cookies, ))
    t.daemon = True
    t.start()

  for c in contents():
    q.put((iter_content, c))

  q.join()
  cleanup()
  common.write_sync_done()

  global index
  with open(".max-index", "w") as f:
    print(index, file = f)

if __name__ == "__main__":
  if sys.stderr.encoding == None:
    sys.stderr = codecs.getwriter("UTF-8")(sys.stderr)

  args = parse_args()
  main(args.username, args.password)
