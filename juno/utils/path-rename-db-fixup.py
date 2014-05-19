#!/usr/bin/python3

import sqlite3

map = [(old, new)]

db = sqlite3.connect(".db")

for src, dest in map:
  print src
  db.execute("UPDATE presos SET path = ? || SUBSTR(path, ?) WHERE SUBSTR(path, 1, ?) = ?", (dest, len(src) + 1, len(src), src))
  db.execute("UPDATE presos SET dirname = ? || SUBSTR(dirname, ?) WHERE SUBSTR(dirname, 1, ?) = ?", (dest, len(src) + 1, len(src), src))
  db.execute("UPDATE slides SET preso = ? || SUBSTR(preso, ?) WHERE SUBSTR(preso, 1, ?) = ?", (dest, len(src) + 1, len(src), src))

db.execute("INSERT INTO slides_fts(slides_fts) VALUES('optimize')")
db.execute("VACUUM")
db.commit()
db.close()
