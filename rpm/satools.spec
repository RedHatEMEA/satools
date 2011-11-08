Name:		satools
Version:	0.1
Release:	1%{?dist}
Summary:	Red Hat UK&I SA tools
License:	GPL
URL:		https://github.com/RedHatUKI/satools
Source:		satools.tar.gz
BuildArch:	noarch
Requires:	python-lxml, mimehandler(application/x-java-jnlp-file)

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
for i in elluminate lgrep mailindex sync-lists sync-product-docs sync-references
do
  ln -sf %{python_sitelib}/satools/$i.py %{_bindir}/$i
done

%postun
for i in elluminate lgrep mailindex sync-lists sync-product-docs sync-references
do
  rm -f %{_bindir}/$i
done

%files
%defattr(-,root,root,-)
%{python_sitelib}
%doc README

%changelog

* Tue Nov 08 2011 Jim Minter <jminter@redhat.com> 0.1
- First release
