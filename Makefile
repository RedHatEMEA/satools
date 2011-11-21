TOPDIR:=$(shell rpm --eval %{_topdir})

ifneq ($(SIGN),)
override SIGN=--sign
endif

all: satools.rpm satools-search.rpm

all-sign:
	$(MAKE) all SIGN=1

%.rpm: rpm/%.spec preprep-%
	rpmbuild -ba $(SIGN) $<

preprep-satools: rpm-base
	tar --exclude=.git --owner=root --group=root -czf "$(TOPDIR)/SOURCES/satools.tar.gz" Makefile README.rst rpm/satools.spec satools

preprep-satools-search: rpm-base
	tar --exclude=.git --owner=root --group=root -czf "$(TOPDIR)/SOURCES/satools-search.tar.gz" contrib/ext-4.0.2a Makefile README.rst rpm/satools-search.spec search

rpm-base: clean
	mkdir -p "$(TOPDIR)/SOURCES"

clean:
	find -name '*.pyc' -print0 | xargs -i -0 rm -f '{}'
	rm -f search/app/static/app-all.js search/app/static/all-classes.js

search:
	cd search/app/static && sencha build -p app.jsb3 -d .

.PHONY: %.rpm all clean preprep-satools preprep-satools-search rpm-base search
