---
title: "Top Down Operator Precedence"
authors:
  - "Vaughan R. Pratt"
year: 1973
venue: "POPL"
arxiv: null
doi: "10.1145/512927.512931"
source: "https://tdop.github.io/"
topics:
  - parsing
  - operator-precedence
  - pratt-parser
  - language-implementation
  - extensible-syntax
seed_rank: 1836
seed_batch: "archive-2026-10-06"
reviewed: "2026-10-06"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Syntactic Analysis and Operator Precedence"
    url: "https://doi.org/10.1145/321172.321179"
    year: 1963
    arxiv: null
    doi: "10.1145/321172.321179"
  - title: "On the Translation of Languages from Left to Right"
    url: "https://doi.org/10.1016/S0019-9958(65)90426-2"
    year: 1965
    arxiv: null
    doi: "10.1016/S0019-9958(65)90426-2"
  - title: "Syntax Macros and Extended Translation"
    url: "https://doi.org/10.1145/365876.365879"
    year: 1966
    arxiv: null
    doi: "10.1145/365876.365879"
---

# Top Down Operator Precedence

## One-sentence takeaway

Attach the parsing code to tokens, not grammar rules: each token gets a null denotation (nud), a left denotation (led) and a left binding power, and one tiny loop — keep consuming while rbp < lbp — parses infix, prefix and mixfix expressions top-down.

## Why it matters here

ano has a dense array/operator surface (BQN-style glyphs plus a Japanese surface) and wants user-extensible syntax without dragging in a parser generator. Pratt's scheme is the standard hand-written answer: operator tables are data, new operators are a nud/led pair plus a number, and error reporting falls out of "this token has no led here". It is also the natural shape for GRID COMMAND console/order syntax and for engine debug expressions.

## Key ideas

- **Lexical semantics.** Each semantic token owns a program ("semantic code"); translating a string means running each token's code in turn rather than walking BNF productions.
- **nud / led.** Code for a token with no preceding expression is its null denotation; with a preceding expression ("left") it is its left denotation — prefix vs infix uses of the same token come for free.
- **Binding powers.** The parser is called with a right binding power (rbp) fixed for that call; the lbp is a property of the current input token; the loop continues into the led only while rbp < lbp, otherwise it returns left to its caller. Right-associativity is a decrement of the right binding power.
- **Association theorems.** Pratt argues that with type-consistent conventions, association problems have at most one solution consistent with operator data types (Theorem 1), and that binding-power numbers capture what the computer needs.
- **Error detection.** Using a token without its expected left argument (or with an unexpected one) invokes non-existent semantic code, which becomes a cheap error hook.
- **Practice-first stance.** Explicitly positions itself against BNF-centric automata theory for real translators; prototyped in the CGOL pilot language.

## Caveats

Not a grammar formalism — you lose a declarative grammar artifact and generator-checked ambiguity; precedence numbers can drift into folklore without discipline. No complexity or benchmark claims beyond "extremely efficient in practice". Statement-level syntax still needs ordinary recursive descent around it. Distinct from Earley 1102, Packrat 1467 and PEG 1468 — complementary, not a remint. The open link is a faithful HTML transcription; the ACM PDF is the archival version.

## Links

- HTML transcription (tdop.github.io): https://tdop.github.io/
- DOI (POPL 1973, pp. 41–51): https://doi.org/10.1145/512927.512931
- ACM DL: https://dl.acm.org/doi/10.1145/512927.512931
