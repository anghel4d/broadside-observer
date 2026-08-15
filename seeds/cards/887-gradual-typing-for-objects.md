---
title: Gradual Typing for Objects
authors:
- Jeremy G. Siek
- Walid Taha
year: 2007
venue: ECOOP
arxiv: null
doi: 10.1007/978-3-540-73589-2_2
source: "https://doi.org/10.1007/978-3-540-73589-2_2"
topics:
- gradual-typing
- objects
- type-safety
seed_rank: 887
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Gradual Typing for Functional Languages"
    url: "https://scheme2006.cs.uchicago.edu/13-siek.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "886-gradual-typing-for-functional-languages"
---

# Gradual Typing for Objects

## One-sentence takeaway

Gradual typing lifts to structural objects: method types are consistent (not merely subtypes), and casts wrap objects so missing or wrong methods fail at the call, with blame.

## Why it matters here

OO gradual typing is what TypeScript/Flow-style optional object typing gesturaly wants — this ECOOP paper is the typed-object calculus those systems simplified (and unsoundly relaxed).

## Key ideas

- Structural object types with width/depth consistency against `?`; an untyped object is consistent with any object type.
- Cast semantics for methods: a wrapped object checks the method on invocation rather than on wrap, because methods are higher-order.
- Extends the 2006 functional system rather than starting from a class-based nominal calculus.
- Bridge from the Scheme-workshop core to the industrial optional-OO setting (later Understanding TypeScript / Safe TypeScript).
- ECOOP 2007, LNCS 4609. Springer DOI 10.1007/978-3-540-73589-2_2.

## Caveats

## Links

- DOI: [10.1007/978-3-540-73589-2_2](https://doi.org/10.1007/978-3-540-73589-2_2)
