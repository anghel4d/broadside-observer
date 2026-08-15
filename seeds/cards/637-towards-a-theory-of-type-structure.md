---
title: "Towards a Theory of Type Structure"
authors:
  - "John C. Reynolds"
year: 1974
venue: "Colloque sur la Programmation / LNCS 19"
arxiv: null
doi: "10.1007/3-540-06859-7_148"
source: "https://doi.org/10.1007/3-540-06859-7_148"
topics:
  - system-f
  - polymorphism
  - reynolds
  - type-structure
seed_rank: 637
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
see:
  - "629-a-theory-of-type-polymorphism-in-programming"
---

# Towards a Theory of Type Structure

## One-sentence takeaway

Reynolds independently invents the second-order polymorphic λ-calculus — type abstraction Λα. e and type application e[τ] — as a typed theory of representation independence.

## Why it matters here

Reynolds System F is the type-theoretic backbone for parametric polymorphism in ano APIs and for reading Wadler’s free theorems. Twin discovery with Girard’s 1971 proof-theoretic System F.

## Key ideas

- Polymorphic types quantify over *types*, not merely over values: a term can be abstracted on a type variable.
- The calculus is impredicative: a type variable may be instantiated at a polymorphic type.
- Abstraction is the mechanism of representation independence — clients cannot inspect which type they were given.
- LNCS 19 (Paris Colloque sur la Programmation, 1974). Girard’s 1971 / 1986 papers are the proof-theory twin, not a citation of this one.

## Caveats

## Links

- DOI: [10.1007/3-540-06859-7_148](https://doi.org/10.1007/3-540-06859-7_148)
