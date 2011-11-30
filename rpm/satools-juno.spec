Name:		satools-juno
Version:	0.3
Release:	1%{?dist}
Summary:	Red Hat UK&I SA tools ODP search engine
License:	GPL
URL:		https://github.com/RedHatUKI/satools
Source:		satools-juno.tar.gz
BuildArch:	noarch
Requires:	satools-odptools, python-imaging, python-webpy, httpd, mod_wsgi
BuildRequires:	redhat-rpm-config

%define _srcdefattr (-,root,root)

%description
Red Hat UK&I SA tools ODP search engine

%prep
%setup -qc

%build
%__make juno

%install
mkdir -p %{buildroot}/opt/satools/juno/static/extjs
cp -a juno/app/*.py %{buildroot}/opt/satools/juno
cp -a juno/app/static/{app-all.js,app.css,postToURL.js} %{buildroot}/opt/satools/juno/static
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

%post
service httpd reload

%postun
service httpd reload

%files
%defattr(-,root,root,-)
/
%doc README.rst

%changelog

* Thu Nov 24 2011 Jim Minter <jminter@redhat.com> 0.3
- First release
