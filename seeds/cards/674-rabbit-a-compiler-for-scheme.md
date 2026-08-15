---
title: "RABBIT: A Compiler for Scheme"
authors:
  - "Guy Lewis Steele Jr."
year: 1978
venue: "MIT AI TR-474"
arxiv: null
doi: null
source: "https://dspace.mit.edu/handle/1721.1/6913"
topics:
  - rabbit
  - scheme
  - cps
  - compilers
  - steele
seed_rank: 674
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Scheme: An Interpreter for Extended Lambda Calculus"
    url: "https://dspace.mit.edu/handle/1721.1/5794"
    year: 1975
    arxiv: null
    doi: null
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
see:
  - "673-scheme-an-interpreter-for-extended-lambda-calculus"
  - "630-definitional-interpreters-for-higher-order-programming-langu"
---

# RABBIT: A Compiler for Scheme

## One-sentence takeaway

Steele's 1978 thesis compiles Scheme by converting to continuation-passing style, then emitting MACLISP, proving a lexically scoped Lisp can be fast.

## Why it matters here

RABBIT is the CPS-compiler ancestor of Appel, Flanagan–ANF, and every "Scheme is compilable" claim Anoptic would reuse for an ano host.

## Key ideas

- CPS conversion makes every call a tail call and every intermediate a name, so the back end is essentially a register allocator plus closure constructor.
- Environment and closure strategies (what to close over, when to copy) are analysed rather than left to the interpreter.
- The compiler is written in Scheme and bootstrapped; the point is credibility against Lisp compilers of the day, not a new source language.
- MIT AI TR-474, 1978; DSpace handle 1721.1/6913. Appel 1992 scales the same idea to SML/NJ.

## Caveats

## Links

- DSpace: https://dspace.mit.edu/handle/1721.1/6913
