searchgrammar: searchgrammar.tab.c lex.yy.c
	cc lex.yy.c searchgrammar.tab.c -o searchgrammar

%.tab.c: %.y
	bison -d $<

lex.yy.c: searchgrammar.l
	lex $<

clean:
	rm -f lex.yy.c searchgrammar.tab.[ch] searchgrammar
