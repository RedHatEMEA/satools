#!/usr/bin/python

import calendar
import ply.lex
import ply.yacc

class SearchException(Exception):
    pass

class Where(object):
    def __init__(self, sql, args, merge = True):
        (self.sql, self.args, self.merge) = (sql, args, merge)

reserved = ["AFTER", "BEFORE", "IN", "IS", "NEAR", "NOT", "OR", "UNDER"]
tokens = ["INT", "QSTRING", "STRING"] + reserved

def t_STRING(t):
    '[^" ()/:-]+'
    if t.value.upper() in reserved: t.value = t.type = t.value.upper()
    if t.value.isdigit(): t.type = "INT"
    return t

t_QSTRING = '"[^"]*"'
t_ignore = " "
literals = ('(', ')', "/", ':')

def t_error(t):
    raise SearchException('Illegal character "%s"' % t.value[0])

def p_error(p):
    if p:
        raise SearchException('Syntax error at "%s"' % p.value)
    else:
        raise SearchException("Syntax error at EOF")

def p_passthrough(p):
    """query          : or_expr
       or_expr        : and_expr
       and_expr       : not_expr
       not_expr       : expr
       match_expr     : string
       near_op        : NEAR
       string         : basestring
                      | QSTRING
       barestring     : basestring
       basestring     : AFTER
                      | BEFORE
                      | IN
                      | INT
                      | IS
                      | STRING
                      | UNDER"""
    p[0] = p[1]

def p_or_expr(p):
    """or_expr        : or_expr OR and_expr"""
    p[0] = Where("(%s OR %s)" % (p[1].sql, p[3].sql), p[1].args + p[3].args,
                 p[1].merge or p[3].merge)

def p_and_expr(p):
    """and_expr       : and_expr not_expr"""
    p[0] = Where("(%s AND %s)" % (p[1].sql, p[2].sql), p[1].args + p[2].args,
                 p[1].merge and p[2].merge)

def p_not_expr(p):
    """not_expr       : NOT expr"""
    p[0] = Where("(NOT %s)" % p[2].sql, p[2].args)

def p_expr_after(p):
    """expr           : AFTER ":" INT "/" INT "/" INT"""
    p[0] = Where("(mtime >= ?)", [calendar.timegm((int(p[7]), int(p[5]), int(p[3]), 0, 0, 0))])

def p_expr_before(p):
    """expr           : BEFORE ":" INT "/" INT "/" INT"""
    p[0] = Where("(mtime < ?)", [calendar.timegm((int(p[7]), int(p[5]), int(p[3]), 0, 0, 0))])

def p_expr_in(p):
    """expr           : IN ":" barestring"""
    p[3] = p[3].strip("/") + "/"
    l = len(p[3])
    p[0] = Where('(SUBSTR(preso, 1, ?) = ? AND SUBSTR(preso, ?) NOT LIKE "%/%")',
                 [l, p[3], l + 1])

def p_expr_is(p):
    """expr           : IS ":" barestring"""
    p[3] = p[3].lstrip("/")
    p[0] = Where("(preso = ?)", [p[3]], False)

def p_expr_under(p):
    """expr           : UNDER ":" barestring"""
    p[3] = p[3].strip("/") + "/"
    p[0] = Where("(SUBSTR(preso, 1, ?) = ?)", [len(p[3]), p[3]])

def p_expr_paren(p):
    """expr           : "(" or_expr ")" """
    p[0] = p[2]

def p_expr_match(p):
    """expr           : match_expr"""
    p[0] = Where("(slides.rowid IN (SELECT docid FROM slides_fts WHERE slides_fts MATCH ?))", [p[1]])

def p_match_expr(p):
    """match_expr     : match_expr near_op string"""
    p[0] = " ".join(p[1:])

def p_near_op(p):
    """near_op        : NEAR "/" INT"""
    p[0] = "".join(p[1:])

def p_barestring_qstring(p):
    """barestring     : QSTRING"""
    p[0] = p[1][1:-1]

lexer = ply.lex.lex()
ply.yacc.yacc(debug = 0)

def build_where(s):
    return ply.yacc.parse(s)

if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1:
        lexer.input(sys.argv[1])
        while True:
            tok = lexer.token()
            if not tok: break
            print tok
            
        try:
            w = build_where(sys.argv[1])
            print (w.sql, w.args, w.merge)
        except SearchException, e:
            print e
