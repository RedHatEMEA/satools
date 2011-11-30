%{
#include <stdio.h>
#include <string.h>
#define YYSTYPE char *
 
void yyerror(const char *str) {
  fprintf(stderr, "error: %s\n", str);
}
 
int yywrap() {
  return 1;
} 

int main() {
  yyparse();
}
%}

%token COLON INTEGER NEAR NOT OR QUOTE SLASH STAR STRING

%%

query          : andphrase {
                   printf(">> %s\n", $1);
                 };

andphrase      : andphrase andsubexpr {
                   asprintf(&$$, "(%s %s)", $1, $2);
                 }
               | andsubexpr {
                   $$ = $1;
                 };

andsubexpr     : orphrase {
                   $$ = $1;
                 }
               | notphrase {
                   $$ = $1;
                 };

orphrase       : orphrase OR nearphrase {
                   asprintf(&$$, "(%s OR %s)", $1, $3);
                 }
               | nearphrase {
                   $$ = $1;
                 };

nearphrase     : nearphrase nearexpr phrase {
                   asprintf(&$$, "(%s %s %s)", $1, $2, $3);
                 }
               | phrase {
                   $$ = $1;
                 };

nearexpr       : NEAR SLASH INTEGER {
                   asprintf(&$$, "NEAR/%s", $3);
                 }
               | NEAR {
                   $$ = strdup("NEAR");
                 };

notphrase      : NOT term {
                   asprintf(&$$, "-%s", $2);
                 }

phrase         : term {
                   $$ = $1;
                 }
               | QUOTE fullterms QUOTE {
                   asprintf(&$$, "\"%s\"", $2);
                 }
               | termprefix COLON fullterm {
                   asprintf(&$$, "%s:%s", $1, $3);
                 };

fullterms      : fullterms fullterm {
                   asprintf(&$$, "%s %s", $1, $2);
                 }
               | fullterm {
                   $$ = $1;
                 };

fullterm       : fulltermprefix STAR {
                   asprintf(&$$, "%s*", $1);
                 }
               | fulltermprefix {
                   $$ = $1;
                 }

term           : termprefix STAR {
                   asprintf(&$$, "%s*", $1);
                 }
               | termprefix {
                   $$ = $1;
                 };

fulltermprefix : termprefix {
                   $$ = $1;
                 }
               | NEAR {
                   $$ = $1;
                 }
               | OR {
                   $$ = $1;
                 };

termprefix     : INTEGER {
                   $$ = $1;
                 }
               | STRING {
                   $$ = $1;
                 };
%%
