TOPDIR:=$(shell rpm --eval %{_topdir})

rpm: clean
	mkdir -p "$(TOPDIR)/SOURCES"
	tar --exclude=.git --owner=root --group=root -czf "$(TOPDIR)/SOURCES/satools.tar.gz" .
	rpmbuild -ba rpm/satools.spec

clean:
	rm -f satools/*.pyc

.PHONY: clean rpm