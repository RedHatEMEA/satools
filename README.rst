==============
SATOOLS README
==============
:Info: See <https://github.com/RedHatUKI/satools> for the github repository.
:Author: Jim Minter <jminter@redhat.com>
:Description: Initial stab at a README for Jim Minter's satools scripts, this first cut only covers the mailing list search tool.

Mailing List Search Tool
========================

Config files
------------

Config files are created in:
**~/.satools** - the satools config file, if this file doesn't exist a basic version is created but it still needs editing before the scripts will work - see more details below. There is also a sample .satools file that you can move to your home directory in the satools directory where all the scripts are.
**~/content/lists** - this directory contains the mailing list archive files when downloaded by the sync-lists.py script.

satools scripts
---------------

**sync-lists.py** - This script synchronises the mailing list archives from the servers based on the config in ~/.satools
**lgrep.py** - this script can be used to grep the mailing list database for strings and generates a mbox file which can be opened by the viewer of your choice.

sync-lists.py
~~~~~~~~~~~~~

usage::

    sync-lists.py

No arguments required - all config comes from ~/.satools

**Note**: if you get the following error::

    Traceback (most recent call last):
      File "./sync-lists.py", line 6, in <module>
        import lxml.html
    ImportError: No module named lxml.html

Then you need to install the lxml library for python, follow the installation instructions here: http://lxml.de/installation.html#installation

lgrep.py
~~~~~~~~

usage::

    lgrep.py [-h] [-b BASE] querystring [querystring ...]

    positional arguments:
      querystring

    optional arguments:
      -h, --help   show this help message and exit
      -b BASE      base directory for mail archive

**Note**: for lgrep.py to work you need to have first configured .satools and also run sync-lists.py at least once so that there are some archives to search through.



