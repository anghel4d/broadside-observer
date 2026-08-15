---
title: "A History of CLU"
authors:
  - "Barbara Liskov"
year: 1993
venue: "HOPL-II / ACM SIGPLAN Notices"
arxiv: null
doi: "10.1145/155360.155367"
source: "https://doi.org/10.1145/155360.155367"
topics:
  - clu
  - liskov
  - abstract-data-types
  - hopl
seed_rank: 685
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Programming with Abstract Data Types"
    url: "https://doi.org/10.1145/800233.807045"
    year: 1974
    arxiv: null
    doi: "10.1145/800233.807045"
  - title: "Abstract Types Have Existential Type"
    url: "https://doi.org/10.1145/44501.45065"
    year: 1988
    arxiv: null
    doi: "10.1145/44501.45065"
see:
  - "686-programming-with-abstract-data-types"
  - "670-abstract-types-have-existential-type"
---

# A History of CLU

## One-sentence takeaway

Liskov's HOPL-II history of CLU is the story of putting abstract data types into a language: clusters with sealed representations, iterators, exceptions, and parameterized types.

## Why it matters here

CLU is the ADT-in-languages classic — the linguistic ancestor of every later "interface vs representation" module Anoptic or ano would write, and of the Liskov substitution culture that followed.

## Key ideas

- CLU was the first implemented language with direct linguistic support for data abstraction; a cluster is the ADT, not a comment convention.
- Iterators (`yield`) and a termination-oriented exception mechanism are first-class language features, not library patterns.
- Parameterized types keep abstraction from becoming monomorphic; representation is sealed from clients.
- HOPL-II / *SIGPLAN Notices* 28(3), 1993, DOI 10.1145/155360.155367. The 1974 Liskov–Zilles paper is the idea; this is the language.

## Caveats

## Links

- DOI: [10.1145/155360.155367](https://doi.org/10.1145/155360.155367)
