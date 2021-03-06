Name:		satools-odptools
Version:	0.5
Release:	1
Summary:	Red Hat UK&I SA tools ODP tools
License:	GPL
URL:		https://github.com/RedHatEMEA/satools
Source:		satools-odptools.tar.gz
BuildArch:	noarch
Requires:	libreoffice-graphicfilter, libreoffice-headless, libreoffice-impress, libreoffice-pyuno, satools = %{version}-%{release}
BuildRequires:	python3-devel, redhat-rpm-config

%define _srcdefattr (-,root,root)

%description
Red Hat UK&I SA tools ODP tools

%prep
%setup -qc

%install
mkdir -p %{buildroot}/%{python3_sitelib}
cp -a odptools %{buildroot}/%{python3_sitelib}
rm -rf  %{buildroot}/%{python3_sitelib}/test

%clean
rm -rf %{buildroot}

%posttrans
for i in odp_cat odp_explode odp_lsfonts odp_render odt_to_text odp_to_text
do
  ln -sf %{python3_sitelib}/odptools/$i.py %{_bindir}/$i
done

%postun
for i in odp_cat odp_explode odp_lsfonts odp_render odt_to_text odp_to_text
do
  rm -f %{_bindir}/$i
done

%files
%defattr(-,root,root,-)
%{python3_sitelib}/odptools
%doc README.rst

%changelog

* Sat May 10 2014 Jim Minter <jminter@redhat.com> 0.5

* Mon Sep 03 2012 Jim Minter <jminter@redhat.com> 0.4

* Mon Mar 19 2012 Jim Minter <jminter@redhat.com> 0.3
- First release
