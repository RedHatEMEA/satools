TOPDIR:=$(shell rpm --eval %{_topdir})

rpm: rpm-base
	rpmbuild -ba rpm/satools.spec
	rpmbuild -ba rpm/satools-search.spec

rpm-sign: rpm-base
	rpmbuild -ba --sign rpm/satools.spec
	rpmbuild -ba --sign rpm/satools-search.spec

rpm-base: clean
	mkdir -p "$(TOPDIR)/SOURCES"
	tar --exclude=.git --owner=root --group=root -czf "$(TOPDIR)/SOURCES/satools.tar.gz" .

search:
	cd search/app/static && sencha build -p app.jsb3 -d .

clean:
	find -name '*.pyc' -print0 | xargs -i -0 rm -f '{}'
	rm -f search/app/static/app-all.js search/app/static/all-classes.js

.PHONY: clean rpm rpm-base rpm-sign search
