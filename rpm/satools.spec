Name:		satools
Version:	0.1
Release:	1%{?dist}
Summary:	Red Hat UK&I SA tools
License:	GPL
URL:		https://github.com/RedHatUKI/satools
Source:		satools.tar.gz
BuildArch:	noarch
Requires:	python-lxml

%define _srcdefattr (-,root,root)

%description
Red Hat UK&I SA tools

%prep
%setup -qc

%install
mkdir -p %{buildroot}/%{python_sitelib}
cp -a satools %{buildroot}/%{python_sitelib}

%clean
rm -rf %{buildroot}

%post
ln -sf %{python_sitelib}/satools/sync-product-docs.py %{_bindir}/sync-product-docs

%postun
rm -f %{buildroot}/%{_bindir}/sync-product-docs

%files
%defattr(-,root,root,-)
%{python_sitelib}
%doc README

%changelog

* Mon Oct 31 2011 Jim Minter <jminter@redhat.com> 0.1
- First release
