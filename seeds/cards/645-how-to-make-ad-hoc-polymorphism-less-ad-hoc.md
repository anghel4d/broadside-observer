---
title: "How to Make Ad-Hoc Polymorphism Less Ad Hoc"
authors:
  - "Philip Wadler"
  - "Stephen Blott"
year: 1989
venue: "POPL"
arxiv: null
doi: "10.1145/75277.75283"
source: "https://doi.org/10.1145/75277.75283"
topics:
  - type-classes
  - ad-hoc-polymorphism
  - haskell
  - wadler
seed_rank: 645
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
  - title: "Principal Type-Schemes for Functional Programs"
    url: "https://doi.org/10.1145/582153.582176"
    year: 1982
    arxiv: null
    doi: "10.1145/582153.582176"
see:
  - "629-a-theory-of-type-polymorphism-in-programming"
  - "640-principal-type-schemes-for-functional-programs"
---

# How to Make Ad-Hoc Polymorphism Less Ad Hoc

## One-sentence takeaway

Wadler and Blott introduce type classes: a named collection of overloaded operations, resolved by the type checker, that extends Hindley–Milner without destroying principal types.

## Why it matters here

The type-class paper — how Haskell-style overloading (`Eq`, `Num`, later `Monad`) stays compatible with inferred polymorphism. If ano grows ad-hoc overloading (numeric arrays, pretty-print, serialise), this is the disciplined alternative to C++-style ad hoc.

## Key ideas

- A class declares a suite of operations; an instance supplies them at a particular type.
- Dictionary-passing is the implementation reading: the compiler inserts a record of functions.
- Predicates on type schemes (`Eq α ⇒ α → α → Bool`) keep principal types.
- POPL 1989, pp. 60–76; foundation of Haskell’s class hierarchy.

## Caveats

## Links

- DOI: [10.1145/75277.75283](https://doi.org/10.1145/75277.75283)
