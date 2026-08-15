---
title: "On Understanding Types, Data Abstraction, and Polymorphism"
authors:
  - "Luca Cardelli"
  - "Peter Wegner"
year: 1985
venue: "ACM Computing Surveys"
arxiv: null
doi: "10.1145/6041.6042"
source: "https://doi.org/10.1145/6041.6042"
topics:
  - cardelli
  - polymorphism
  - data-abstraction
  - types
  - survey
seed_rank: 668
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
  - title: "Types, Abstraction and Parametric Polymorphism"
    url: "https://people.mpi-sws.org/~dreyer/tor/papers/reynolds.pdf"
    year: 1983
    arxiv: null
    doi: null
  - title: "Programming with Abstract Data Types"
    url: "https://doi.org/10.1145/800233.807045"
    year: 1974
    arxiv: null
    doi: "10.1145/800233.807045"
see:
  - "629-a-theory-of-type-polymorphism-in-programming"
  - "641-types-abstraction-and-parametric-polymorphism"
  - "686-programming-with-abstract-data-types"
---

# On Understanding Types, Data Abstraction, and Polymorphism

## One-sentence takeaway

Cardelli and Wegner draw the map still in use: universal (parametric / inclusion) versus ad-hoc polymorphism, with abstract data types and objects as typed abstraction mechanisms on top.

## Why it matters here

When ano talks about "polymorphic" kernels or GRID COMMAND talks about "typed objects," this 1985 *Computing Surveys* paper is the taxonomy — not a later OO textbook restating it.

## Key ideas

- Universal polymorphism is one algorithm at many types (parametric) or a subtype hierarchy (inclusion); ad-hoc polymorphism is overloading or coercion, a finite set of distinct algorithms.
- Functors and existential packages are how you say "this module hides a representation"; objects add recursive self-types and method override to that picture.
- The Fun calculus they sketch is an explanatory typed λ-calculus with second-order types and bounded quantification, not a full language definition.
- *ACM Computing Surveys* 17(4):471–523, 1985, DOI 10.1145/6041.6042. Mitchell–Plotkin 1988 is the theorem that ADTs *are* existentials.

## Caveats

## Links

- DOI: [10.1145/6041.6042](https://doi.org/10.1145/6041.6042)
