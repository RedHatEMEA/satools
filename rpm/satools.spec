Name:		satools
Version:	0.5
Release:	1
Summary:	Red Hat EMEA SA tools
License:	GPL
URL:		https://github.com/RedHatEMEA/satools
Source:		satools.tar.gz
BuildArch:	noarch
Requires:	mimehandler(application/x-java-jnlp-file), python3-lxml, python3-ply, python3-requests
BuildRequires:	redhat-rpm-config, python3-devel, python3-ply

%define _srcdefattr (-,root,root)

%description
Red Hat EMEA SA tools

%prep
%setup -qc

%build
%__make satools

%install
mkdir -p %{buildroot}/%{python3_sitelib}
cp -a satools %{buildroot}/%{python3_sitelib}

%clean
rm -rf %{buildroot}

%posttrans
for i in elluminate lgrep mailindex sync-clearspace sync-gsa sync-jive sync-lists sync-product-docs sync-pt sync-resourcelibrary sync-rhn-channel-dumps sync-webdav
do
  ln -sf %{python3_sitelib}/satools/$i.py %{_bindir}/$i
done

%postun
for i in elluminate lgrep mailindex sync-clearspace sync-gsa sync-jive sync-lists sync-product-docs sync-pt sync-resourcelibrary sync-rhn-channel-dumps sync-webdav
do
  rm -f %{_bindir}/$i
done

%files
%defattr(-,root,root,-)
%{python3_sitelib}/satools
%doc README.rst

%changelog

* Wed Aug 07 2013 Jim Minter <jminter@redhat.com> 0.5

* Mon Sep 03 2012 Jim Minter <jminter@redhat.com> 0.4

* Mon Mar 19 2012 Jim Minter <jminter@redhat.com> 0.3

* Fri Nov 18 2011 Jim Minter <jminter@redhat.com> 0.2

* Mon Nov 14 2011 Jim Minter <jminter@redhat.com> 0.1
- First release
