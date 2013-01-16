TOPDIR:=$(shell rpm --eval %{_topdir})

ifneq ($(SIGN),)
override SIGN=--sign
endif

all: satools.rpm satools-juno.rpm satools-odptools.rpm satools-search.rpm

all-sign:
	$(MAKE) all SIGN=1

%.rpm: rpm/%.spec preprep-%
	rpmbuild -ba $(SIGN) $<

preprep-satools: rpm-base
	tar --exclude=.git --owner=root --group=root -czf "$(TOPDIR)/SOURCES/satools.tar.gz" Makefile README.rst rpm/satools.spec satools

preprep-satools-juno: rpm-base
	tar --exclude=.git --owner=root --group=root -czf "$(TOPDIR)/SOURCES/satools-juno.tar.gz" contrib/extjs-4.1.1 Makefile README.rst rpm/satools-juno.spec juno

preprep-satools-odptools: rpm-base
	tar --exclude=.git --owner=root --group=root -czf "$(TOPDIR)/SOURCES/satools.tar.gz" Makefile README.rst rpm/satools-odptools.spec odptools

preprep-satools-search: rpm-base
	tar --exclude=.git --owner=root --group=root -czf "$(TOPDIR)/SOURCES/satools-search.tar.gz" contrib/extjs-4.1.1 Makefile README.rst rpm/satools-search.spec search

rpm-base: clean
	mkdir -p "$(TOPDIR)/SOURCES"

clean:
	find -name '*.pyc' -print0 | xargs -i -0 rm -f '{}'
	rm -f juno/app/static/app-all.js juno/app/static/all-classes.js
	rm -f juno/app/parsetab.py search/app/parsetab.py
	rm -f search/app/static/app-all.js search/app/static/all-classes.js

juno:
	cd juno/app && python search.py
	cd juno/app/static && sencha build -p app.jsb3 -d .

satools:
	cd satools && python search.py

search:
	cd search/app/static && sencha build -p app.jsb3 -d .
	cd search/app && python -c 'import app'

juno-lint:
	cd juno/app/static && jsl -nologo -nofilelisting -conf ../jsl.conf -process app.js -process 'controller/*.js' -process 'store/*.js' -process 'view/*.js'

search-lint:
	cd search/app/static && jsl -nologo -nofilelisting -conf ../jsl.conf -process app.js -process 'controller/*.js' -process 'store/*.js' -process 'view/*.js'

juno-tidy:
	cd juno/app/static && tidy -m -i --tidy-mark 0 help.html

search-tidy:
	cd search/app/templates && tidy -m -i --tidy-mark 0 help.html

.PHONY: %.rpm all clean juno preprep-satools preprep-satools-juno preprep-satools-search rpm-base satools search
