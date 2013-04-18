Name:		satools-juno
Version:	0.4
Release:	6
Summary:	Red Hat UK&I SA tools presentation search engine
License:	GPL
URL:		https://github.com/RedHatEMEA/satools
Source:		satools-juno.tar.gz
BuildArch:	noarch
Requires:	httpd, mod_wsgi, python-imaging, python-webpy, satools-odptools = %{version}-%{release}
BuildRequires:	redhat-rpm-config

%define _srcdefattr (-,root,root)

%description
Red Hat UK&I SA tools presentation search engine

%prep
%setup -qc

%build
%__make juno

%install
mkdir -p %{buildroot}/opt/satools/juno/static/extjs
cp -a juno/app/*.py %{buildroot}/opt/satools/juno
cp -a juno/app/static/{app-all.js,help.html} %{buildroot}/opt/satools/juno/static
cp juno/app/static/index-prod.html %{buildroot}/opt/satools/juno/static/index.html
cp juno/app/static/extjs/ext.js %{buildroot}/opt/satools/juno/static/extjs
cp -a juno/app/static/extjs/resources %{buildroot}/opt/satools/juno/static/extjs

mkdir -p %{buildroot}/etc/httpd/conf.d
cp juno/httpd-conf/* %{buildroot}/etc/httpd/conf.d

%clean
rm -rf %{buildroot}

%pre
/usr/sbin/groupadd -f -r satools
/usr/bin/id satools &>/dev/null || /usr/sbin/useradd -r -s /sbin/nologin -m -k /dev/null -g satools satools
/bin/chmod 0701 /home/satools

%post
/bin/ln -s /home/satools/content/juno/slides /opt/satools/juno/static 2>/dev/null
/bin/ln -s /home/satools/content/juno/thumbs /opt/satools/juno/static 2>/dev/null
/sbin/service httpd reload

%postun
/sbin/service httpd reload

%files
%defattr(-,root,root,-)
/opt/satools/juno
%doc README.rst
%config(noreplace) /etc/httpd/conf.d/satools-juno.conf

%changelog

* Mon Sep 03 2012 Jim Minter <jminter@redhat.com> 0.4

* Mon Mar 19 2012 Jim Minter <jminter@redhat.com> 0.3
- First release
