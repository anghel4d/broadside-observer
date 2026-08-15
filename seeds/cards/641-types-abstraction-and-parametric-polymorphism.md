---
title: "Types, Abstraction and Parametric Polymorphism"
authors:
  - "John C. Reynolds"
year: 1983
venue: "IFIP Congress (Information Processing 83)"
arxiv: null
doi: null
source: "https://www.cs.cmu.edu/~crary/819-f09/Reynolds83.pdf"
topics:
  - parametricity
  - reynolds
  - polymorphism
  - abstraction
seed_rank: 641
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Towards a Theory of Type Structure"
    url: "https://doi.org/10.1007/3-540-06859-7_148"
    year: 1974
    arxiv: null
    doi: "10.1007/3-540-06859-7_148"
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
see:
  - "637-towards-a-theory-of-type-structure"
  - "629-a-theory-of-type-polymorphism-in-programming"
---

# Types, Abstraction and Parametric Polymorphism

## One-sentence takeaway

Reynolds gives polymorphism a relational semantics: a polymorphic term maps related arguments to related results, so it cannot inspect the hidden type.

## Why it matters here

The parametricity paper behind Wadler’s free theorems and behind treating polymorphic ano interfaces as information-hiding. If a GRID COMMAND API is ∀α. …, clients (and the compiler) may assume representation independence.

## Key ideas

- Identity extension / relational interpretation: each type denotes a relation, and ∀α. τ denotes the intersection over all relations for α.
- A well-typed polymorphic term is parametric: it acts uniformly at every type.
- Representation independence of abstract types is the special case where the hidden representation is related to itself by an invariant.
- IFIP ’83 (Paris), *Information Processing 83*, North-Holland, pp. 513–523. CMU hosts the usual scan.

## Caveats

## Links

- PDF: https://www.cs.cmu.edu/~crary/819-f09/Reynolds83.pdf
