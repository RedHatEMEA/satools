Name:		satools
Version:	0.4
Release:	6
Summary:	Red Hat UK&I SA tools
License:	GPL
URL:		https://github.com/RedHatEMEA/satools
Source:		satools.tar.gz
BuildArch:	noarch
Requires:	mimehandler(application/x-java-jnlp-file), python-argparse, python-BeautifulSoup, python-lxml, python-ply, python-requests
BuildRequires:	redhat-rpm-config, python-ply

%define _srcdefattr (-,root,root)

%description
Red Hat UK&I SA tools

%prep
%setup -qc

%build
%__make satools

%install
mkdir -p %{buildroot}/%{python_sitelib}
cp -a satools %{buildroot}/%{python_sitelib}

%clean
rm -rf %{buildroot}

%posttrans
for i in elluminate lgrep mailindex sync-clearspace sync-gsa sync-lists sync-product-docs sync-pt sync-resourcelibrary sync-rhn-channel-dumps sync-webdav
do
  ln -sf %{python_sitelib}/satools/$i.py %{_bindir}/$i
done

%postun
for i in elluminate lgrep mailindex sync-clearspace sync-gsa sync-lists sync-product-docs sync-pt sync-resourcelibrary sync-rhn-channel-dumps sync-webdav
do
  rm -f %{_bindir}/$i
done

%files
%defattr(-,root,root,-)
%{python_sitelib}/satools
%doc README.rst

%changelog

* Mon Sep 03 2012 Jim Minter <jminter@redhat.com> 0.4

* Mon Mar 19 2012 Jim Minter <jminter@redhat.com> 0.3

* Fri Nov 18 2011 Jim Minter <jminter@redhat.com> 0.2

* Mon Nov 14 2011 Jim Minter <jminter@redhat.com> 0.1
- First release
