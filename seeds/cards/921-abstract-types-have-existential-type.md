---
title: "Abstract Types Have Existential Type"
authors:
  - "John C. Mitchell"
  - "Gordon D. Plotkin"
year: 1988
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/44501.44504"
source: "https://doi.org/10.1145/44501.44504"
topics:
  - existential-types
  - abstract-data-types
  - mitchell
  - plotkin
seed_rank: 921
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
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
  - title: "The Definition of Standard ML (Revised)"
    url: "https://mitpress.mit.edu/9780262631815/the-definition-of-standard-ml/"
    year: 1997
    arxiv: null
    doi: null
see:
  - "892-types-abstraction-and-parametric-polymorphism"
  - "919-on-understanding-types-data-abstraction-and-polymorphism"
  - "880-a-theory-of-type-polymorphism-in-programming"
  - "154-the-definition-of-standard-ml-revised"
---

# Abstract Types Have Existential Type

## One-sentence takeaway

Shows abstract data types are captured by existential types in a typed lambda calculus.

## Why it matters here

The ADT↔∃ type classic — how modules/abstraction should be typed even outside full ML modules.

## Key ideas

- Existential pack/unpack as ADT introduction/elimination.
- Representation independence via existentials.
- Connects to Reynolds abstraction and Cardelli–Wegner taxonomy.
- Journal version of the POPL 85 result.

## Caveats

- Seed card from the wisdom-of-the-perfects PL haul; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI pagination against your preferred edition before formal citation.

## Links

- DOI: [10.1145/44501.44504](https://doi.org/10.1145/44501.44504)
- URL: https://doi.org/10.1145/44501.44504
