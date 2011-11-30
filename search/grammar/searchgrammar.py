#!/usr/bin/python

import ply.lex
import ply.yacc
import sys

tokens = ("COLON", "INTEGER", "NEAR", "NOT", "OR", "QUOTE", "SLASH", "STAR",
          "STRING")

def t_INTEGER(t):
    """[0-9]+"""
    return t

def t_NEAR(t):
    """NEAR"""
    return t

def t_OR(t):
    """OR"""
    return t

t_COLON = ":"
t_NOT = "-"
t_QUOTE = '"'
t_SLASH = "/"
t_STAR = "\*"
t_STRING = "[a-zA-Z0-9][-a-zA-Z0-9]*"

t_ignore = " "

def t_error(t):
    print("Illegal character '%s'" % t.value[0])
    t.lexer.skip(1)

def p_error(p):
    if p:
        print("Syntax error at '%s'" % p.value)
    else:
        print("Syntax error at EOF")

def p_query(p):
    """query          : andphrase"""
    print ">> %s" % p[1]

def p_andphrase(p):
    """andphrase      : andphrase andsubexpr
                      | andsubexpr
       andsubexpr     : orphrase
                      | notphrase
       orphrase       : orphrase OR nearphrase
                      | nearphrase
       nearphrase     : nearphrase nearexpr phrase
                      | phrase"""
    p[0] = " ".join(p[1:])

def p_nearexpr(p):
    """nearexpr       : NEAR SLASH INTEGER
                      | NEAR
       notphrase      : NOT term
       phrase         : term
                      | QUOTE fullterms QUOTE
                      | termprefix COLON fullterm"""
    p[0] = "".join(p[1:])

def p_fullterms(p):
    """fullterms      : fullterms fullterm
                      | fullterm
       fullterm       : fulltermprefix STAR
                      | fulltermprefix
       term           : termprefix STAR
                      | termprefix
       fulltermprefix : termprefix
                      | NEAR
                      | OR
       termprefix     : INTEGER
                      | STRING"""
    p[0] = " ".join(p[1:])

ply.lex.lex()
ply.yacc.yacc()
ply.yacc.parse(sys.argv[1])
