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

List Search uses SQLite full-text searching (http://www.sqlite.org/fts3.html) to provide its results. The FTS query language is documented in full at http://www.sqlite.org/fts3.html#section_3 and an overview is given below. Note if referring to the SQLite documentation that List Search uses the "standard query syntax", not the "enhanced query syntax".

List Search supports three basic query types:

* **Token or token prefix queries.** List Search may be queried for all messages that contain a specified term, or for all messages that contain a term with a specified prefix. The query expression for a specific term is simply the term itself. The query expression used to search for a term prefix is the prefix itself with a '*' character appended to it. For example:

    Query for all messages containing the term "linux":

    ::

      linux

    Query for all messages containing a term with the prefix "lin". This will match all messages that contain "linux", but also those that contain terms "linear", "linker", "linguistic" and so on:

    ::

      lin*

  Normally, a token or token prefix query is matched against the message text body, from and subject fields, and list name. This may be overridden by specifying a column-name ("list", "from", "subject" or "body") followed by a ":" character before a basic term query. There may be space between the ":" and the term to query for, but not between the column-name and the ":" character. For example:

    Query for all messages where the term "linux" appears in the message subject, and the term "problems" appears in the message text body, from or subject field, or list name:
    ::

      subject:linux problems

* **Phrase queries.** A phrase query is a query that retrieves all messages that contain a nominated set of terms or term prefixes in a specified order with no intervening tokens. Phrase queries are specified by enclosing a space separated sequence of terms or term prefixes in double quotes ("). For example:

    Query for all messages that contain the phrase "linux applications":
    ::

      "linux applications"

    Query for all messages that contain a phrase that matches "lin* app*". As well as "linux applications", this will match common phrases such as "linoleum appliances" or "link apprentice":
    ::

      "lin* app*"

* **NEAR queries.** A NEAR query is a query that returns messages that contain two or more nominated terms or phrases within a specified proximity of each other (by default with 10 or fewer intervening terms). A NEAR query is specified by putting the keyword "NEAR" between two phrase, term or prefix queries. To specify a proximity other than the default, an operator of the form "NEAR/<N>" may be used, where <N> is the maximum number of intervening terms allowed. For example:

    Search for messages that contain the terms "sqlite" and "database" with not more than 10 intervening terms. Note that the order in which the terms appear in the message does not have to be the same as the order in which they appear in the query:

    ::

      sqlite NEAR database

    Search for messages that contain the terms "sqlite" and "database" with not more than 6 intervening terms. Note that the order in which the terms appear in the message does not have to be the same as the order in which they appear in the query:

    ::

      database NEAR/6 sqlite

    Search for messages that contain the phrase "ACID compliant" and the term "database" with not more than 2 terms separating the two:

    ::

      database NEAR/2 "ACID compliant"

  More than one NEAR operator may appear in a single query. In this case each pair of terms or phrases separated by a NEAR operator must appear within the specified proximity of each other in the message.

    The following query selects messages that contains an instance of the term "sqlite" separated by two or fewer terms from an instance of the term "acid", which is in turn separated by two or fewer terms from an instance of the term "relational":

      ::

        sqlite NEAR/2 acid NEAR/2 relational

Phrase and NEAR queries may not span multiple columns within a row.

The three basic query types described above may be used to query the full-text index for the set of messages that match the specified criteria. It is possible to perform various set operations on the results of basic queries. There are currently three supported operations:

* Concatenating two basic queries determines the intersection of two sets of messages (this is effectively the AND operator, however note that specifying the string "AND" as part of a standard query syntax query is interpreted as a term query for the set of messages containing the term "AND").

* The OR operator calculates the union of two sets of messages.

* The unary "-" operator (effectively the NOT operator) may be used to compute the relative complement of one set of messages with respect to another. The unary "-" operator may be applied to basic term and term-prefix queries (but not to phrase or NEAR queries). A term or term-prefix that has a unary "-" operator attached to it may not appear as an operand to an OR operator. An FTS query may not consist entirely of terms or term-prefix queries with unary "-" operators attached to them.

    Search for the set of messages that contain the term "sqlite" but do not contain the term "database":
    ::

      sqlite -database

Note that parentheses are not supported. The precedence of operators when using the standard query syntax is: unary "-" operator (tightest grouping), OR, concatenation (AND) (loosest grouping).

The following example illustrates precedence of operators.
  Search for messages that contain at least one of the terms "database" and "sqlite", and also contain the term "library":
  ::

    sqlite OR database library

