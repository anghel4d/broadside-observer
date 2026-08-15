---
title: "The Essence of Compiling with Continuations"
authors:
  - "Cormac Flanagan"
  - "Amr Sabry"
  - "Bruce F. Duba"
  - "Matthias Felleisen"
year: 1993
venue: "PLDI"
arxiv: null
doi: "10.1145/155090.155113"
source: "https://doi.org/10.1145/155090.155113"
topics:
  - cps
  - anf
  - compilers
  - felleisen
seed_rank: 666
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Compiling with Continuations"
    url: "https://doi.org/10.1017/CBO9780511609619"
    year: 1992
    arxiv: null
    doi: "10.1017/CBO9780511609619"
  - title: "RABBIT: A Compiler for Scheme"
    url: "https://dspace.mit.edu/handle/1721.1/6913"
    year: 1978
    arxiv: null
    doi: null
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
see:
  - "667-compiling-with-continuations"
  - "674-rabbit-a-compiler-for-scheme"
  - "630-definitional-interpreters-for-higher-order-programming-langu"
---

# The Essence of Compiling with Continuations

## One-sentence takeaway

A-normal form names every intermediate value and makes control flow explicit, so a compiler can get the benefits of CPS without administrative λs or a continuation-passing backend.

## Why it matters here

Ano lowering and any Anoptic shader/CPU IR that wants "one operation, one name" is ANF, not full CPS; this PLDI 1993 paper is why you can stop CPS-converting the world.

## Key ideas

- Classic CPS transforms introduce administrative redexes (`λk. k M`) that a compiler must immediately β-reduce; those redexes are an artifact of the transform, not of the source.
- ANF (`let x = e in …` with `e` a value or a primitive application) is the range of a CPS transform after administrative reductions, written back in direct style.
- Source → ANF → machine matches Source → CPS → machine for the analyses SML/NJ-style compilers actually run (assignment conversion, unsoundness of naïve β, etc.).
- PLDI 1993, DOI 10.1145/155090.155113 (the later SIGPLAN Notices reprint is 10.1145/173262.155113). Appel 1992 is the CPS-as-IR book this paper answers.

## Caveats

## Links

- DOI: [10.1145/155090.155113](https://doi.org/10.1145/155090.155113)
