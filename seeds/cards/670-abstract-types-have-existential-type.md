---
title: "Abstract Types Have Existential Type"
authors:
  - "John C. Mitchell"
  - "Gordon D. Plotkin"
year: 1988
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/44501.45065"
source: "https://doi.org/10.1145/44501.45065"
topics:
  - existential-types
  - abstract-data-types
  - mitchell
  - plotkin
seed_rank: 670
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Types, Abstraction and Parametric Polymorphism"
    url: "https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf"
    year: 1983
    arxiv: null
    doi: null
  - title: "On Understanding Types, Data Abstraction, and Polymorphism"
    url: "https://doi.org/10.1145/6041.6042"
    year: 1985
    arxiv: null
    doi: "10.1145/6041.6042"
  - title: "Programming with Abstract Data Types"
    url: "https://doi.org/10.1145/800233.807045"
    year: 1974
    arxiv: null
    doi: "10.1145/800233.807045"
see:
  - "641-types-abstraction-and-parametric-polymorphism"
  - "668-on-understanding-types-data-abstraction-and-polymorphism"
  - "686-programming-with-abstract-data-types"
---

# Abstract Types Have Existential Type

## One-sentence takeaway

Mitchell and Plotkin type an abstract data type as an existential package: pack a representation with its operations, unpack only under a locally fresh type name.

## Why it matters here

This is how ano modules and any Anoptic "sealed component API" should be typed even without full ML functors — representation independence is an ∃, not a comment. The old card DOI was Olderog–Apt fairness.

## Key ideas

- A data algebra (type + operations), as in CLU/Ada/ML abstypes, is a value of type `∃t. τ(t)`; pack/unpack are the intro/elim forms.
- SOL, a second-order typed λ-calculus, lets data algebras be passed as arguments and returned as results.
- Representation independence follows: two packages with related representations are indistinguishable by clients who only unpack.
- TOPLAS 10(3):470–502, 1988, DOI 10.1145/44501.45065 (journal form of POPL 85, DOI 10.1145/318593.318606).

## Caveats

## Links

- DOI: [10.1145/44501.45065](https://doi.org/10.1145/44501.45065)
