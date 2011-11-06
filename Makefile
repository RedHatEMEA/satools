TOPDIR:=$(shell rpm --eval %{_topdir})

rpm: clean
	mkdir -p "$(TOPDIR)/SOURCES"
	tar --exclude=.git --owner=root --group=root -czf "$(TOPDIR)/SOURCES/satools.tar.gz" .
	rpmbuild -ba rpm/satools.spec

search:
	cd search/static && sencha build -p app.jsb3 -d .

clean:
	find -name '*.pyc' -print0 | xargs -i -0 rm -f '{}'
	rm -f search/static/app-all.js search/static/all-classes.js

.PHONY: clean rpm search