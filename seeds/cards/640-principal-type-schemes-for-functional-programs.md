---
title: "Principal Type-Schemes for Functional Programs"
authors:
  - "Luis Damas"
  - "Robin Milner"
year: 1982
venue: "POPL"
arxiv: null
doi: "10.1145/582153.582176"
source: "https://doi.org/10.1145/582153.582176"
topics:
  - hindley-milner
  - type-inference
  - algorithm-w
  - ml
seed_rank: 640
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
  - title: "The Principal Type-Scheme of an Object in Combinatory Logic"
    url: "https://doi.org/10.1090/S0002-9947-1969-0253905-6"
    year: 1969
    arxiv: null
    doi: "10.1090/S0002-9947-1969-0253905-6"
see:
  - "629-a-theory-of-type-polymorphism-in-programming"
  - "628-the-principal-type-scheme-of-an-object-in-combinatory-logic"
---

# Principal Type-Schemes for Functional Programs

## One-sentence takeaway

Damas and Milner present Algorithm W and prove it computes a principal type-scheme for every typable term of Milner’s 1978 polymorphic type system.

## Why it matters here

The inference *algorithm* card — what a compiler implements when it says Hindley–Milner. Ano type inference, if it stays prenex, is W plus whatever constraints (rows, ranks, effects) we add later.

## Key ideas

- Algorithm W: walk the term, generate unification problems, generalize at `let`.
- Completeness: if a term has any type, W finds a principal scheme of which every other type is an instance.
- Soundness relative to the 1978 JCSS type system, not a new type theory.
- Still the mental model for HM extensions (refs, rows, type classes, constraints).

## Caveats

## Links

- DOI: [10.1145/582153.582176](https://doi.org/10.1145/582153.582176)
