Name:		satools-odptools
Version:	0.4
Release:	6
Summary:	Red Hat UK&I SA tools ODP tools
License:	GPL
URL:		https://github.com/RedHatEMEA/satools
Source:		satools.tar.gz
BuildArch:	noarch
Requires:	libreoffice-graphicfilter, libreoffice-headless, libreoffice-impress, libreoffice-pyuno, satools = %{version}-%{release}
BuildRequires:	redhat-rpm-config

%define _srcdefattr (-,root,root)

%description
Red Hat UK&I SA tools ODP tools

%prep
%setup -qc

%install
mkdir -p %{buildroot}/%{python_sitelib}
cp -a odptools %{buildroot}/%{python_sitelib}
rm -rf  %{buildroot}/%{python_sitelib}/test

%clean
rm -rf %{buildroot}

%posttrans
for i in odp_cat odp_explode odp_lsfonts odp_render odt_to_text odp_to_text
do
  ln -sf %{python_sitelib}/odptools/$i.py %{_bindir}/$i
done

%postun
for i in odp_cat odp_explode odp_lsfonts odp_render odt_to_text odp_to_text
do
  rm -f %{_bindir}/$i
done

%files
%defattr(-,root,root,-)
%{python_sitelib}/odptools
%doc README.rst

%changelog

* Mon Sep 03 2012 Jim Minter <jminter@redhat.com> 0.4

* Mon Mar 19 2012 Jim Minter <jminter@redhat.com> 0.3
- First release
