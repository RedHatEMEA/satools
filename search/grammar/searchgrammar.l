%{
#define YYSTYPE char *
#include "searchgrammar.tab.h"
%}

%%
NEAR                      yylval = strdup(yytext); return NEAR;
OR                        yylval = strdup(yytext); return OR;
[0-9]*                    yylval = strdup(yytext); return INTEGER;
[a-zA-Z0-9][-a-zA-Z0-9]*  yylval = strdup(yytext); return STRING;
\"                        return QUOTE;
\/                        return SLASH;
-                         return NOT;
:                         return COLON;
\*			  return STAR;
[ ]+
\n                        yyterminate();
%%
