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

Scripts
-------

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

See the section below **How To Search** for more detailed information on the formats possible with querystring.

How To Search
-------------

SA tools list search queries are formed of one or more of the following three basic query types:

* **General word or prefix queries.** These return messages where any of the indexed text (i.e., the message body, subject and from fields and mailing list name) contains the given word, or in the case of a prefix query, any word which starts with the given prefix. Matching is case-insensitive only for non-extended latin characters (a-z), otherwise it is case sensitive, and the indexer does not strip accents.

    Return messages containing the word *linux*:

    ::

      linux

    Return messages containing a word which starts with the prefix *lin*. This will match all messages that contain the word *linux*, but also those that contain the words *linear*, *linker*, *linguistic*, etc.:

    ::

      lin*

* **Field queries.** By default, a general query is executed over the message body, subject and from fields, and the mailing list name. You may restrict the search to a specific field by specifying a field name followed by a colon (i.e. **list:**, **from:**, **subject:** or **body:**) followed by a general query.

    Return messages where the word *linux* appears in the message subject, and the word *problems* appears in the message body, subject or from fields, or mailing list name:
    ::

      subject:linux problems


    Return messages from *jminter@redhat.com* where the word *linux* appears in the message subject:
    ::

      from:jminter@redhat.com subject:linux

    Return messages sent to list *foo-list* where the word *linux* appears in the message subject:
    ::

      list:foo-list subject:linux

* **Quoted queries.** These return messages containing the words matching the given general or prefix queries, in the specified order with no intervening words. Phrase queries are specified by enclosing one or more space-separated words or prefixes in double quotes. Field queries may not be included in quoted queries.

    Return messages that contain the phrase *linux applications*:

    ::

      "linux applications"

    Return messages that contain a phrase matching lin* app*. As well as *linux applications*, this would match such common phrases as *linoleum appliances* or *link apprentices*, etc.:

    ::

      "lin* app*"

Basic queries of the above three types may be joined using the following four operators, in order of precedence (strongest first):

* **The "-" operator.** This negates the sense of the general query which follows. Note that the "-" operator may not be used with field or phrase queries, and the overall sense of the query submitted must be positive.

    Return messages that contain the word *linux* and not the word *windows*:

    ::

      linux -windows

* **The NEAR operator.** Note that **NEAR** must be typed in capitals. This returns messages that contain the two given positive general or positive quoted queries within a certain proximity of eachother. By default the **NEAR** operator matches when there are 10 or fewer intervening words; a different limit N may be specified by specifying an operator of the form **NEAR/N**. The order in which the given words or phrases appear in the message does not have to be the same as the order in which they appear in the query.

    Return messages containing the words *linux* and *kernel* with not more than 10 intervening words:

    ::

      linux NEAR kernel

    Return messages containing the words *linux* and *kernel* with not more than 5 intervening words:

    ::

      linux NEAR/5 kernel

    Return messages contain the phrase *operating system* and word *linux* with not more than 2 words separating the two:

    ::

      linux NEAR/2 "operating system"

* **The OR operator.** Note that **OR** must be typed in capitals. This returns messages that match at least one of the two given positive subqueries.

    Return messages that contain the word *linux* or the word *windows*, or both:

    ::

      linux OR windows

* **The implicit "and" operator.** This returns messages that match both of the given positive subqueries. As may by now be clear, the "and" operator is not actually given, but is implicitly understood when subqueries are concatenated.

    Return messages sent to list *foo-list* where the word *linux* appears in the message subject:

    ::

      list:foo-list subject:linux

Implementation detail: SA tools list search uses SQLite full-text searching to provide its results. The FTS query language is documented in full at http://www.sqlite.org/fts3.html#section_3; only an overview specific to searching mailing lists is given here. Note if referring to the SQLite documentation that SA tools list search uses the SQLite *standard query syntax*, not the *enhanced query syntax*.
