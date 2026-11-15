---
title: "The Role of Semirings in Incremental View Maintenance"
authors:
  - "Eden Chmielewski"
  - "Andrei Draghici"
  - "Dan Olteanu"
  - "Haozhe Zhang"
year: 2026
venue: "arXiv preprint (cs.DB)"
arxiv: "2606.07795"
doi: null
source: "https://arxiv.org/abs/2606.07795"
topics:
  - "incremental-view-maintenance"
  - "semirings"
  - "conjunctive-queries"
  - "provenance"
  - "constant-delay-enumeration"
seed_rank: 2600
seed_batch: "craft-2026-11-15"
reviewed: "2026-11-15"
pool: "languages"
relevance_score: 7
lineage: contemporary-databases
cites:
  - title: "Recent Increments in Incremental View Maintenance (Olteanu, Gems of PODS 2024)"
    url: "https://arxiv.org/abs/2404.17679"
    year: 2024
    arxiv: "2404.17679"
    doi: null
see:
  - "1489-dbsp-automatic-incremental-view-maintenance-for-rich-query-languages"
  - "1841-maintaining-views-incrementally"
  - "2500-vectorizing-recurrences-over-semirings"
  - "2528-leapfrog-triejoin-a-worst-case-optimal-join-algorithm"
---

# The Role of Semirings in Incremental View Maintenance

## One-sentence takeaway

How cheaply a query can be kept up to date under inserts depends on the semiring its rows are annotated with: for a broad class of semirings (counts, provenance, covariance, tropical and other idempotent or ordered ones), a self-join-free conjunctive query can be maintained with constant amortized update time and constant enumeration delay if and only if it is "p-hierarchical" and alpha-acyclic.

## Why it matters here

ano's tables will carry more than set membership: counts, min-cost (tropical) values for pathfinding, provenance for "why did this rule fire". This paper says which query shapes stay O(1) per insert for each of those annotation types and which cannot, so it doubles as a lint for ano's standing rules: if a rule's join is not p-hierarchical, expect to pay more per tick. Olteanu's Gems of PODS survey (cited) is the readable map of the F-IVM line this result belongs to.

## Key ideas

- **Setting.** Insert-only IVM over semiring-annotated databases; the complexity depends on the semiring.
- **p-hierarchical queries.** A new class of conjunctive queries. For zero-sum-free, zero-divisor-free commutative semirings, any p-hierarchical query with fractional hypertree width fhtw gets O(N^(fhtw−1)) amortized update over N inserts, plus constant-delay enumeration; alpha-acyclic ones get constant amortized update.
- **Lower bounds.** Under standard conjectures, for a class including the natural, provenance, covariance, tropical and other idempotent or strictly ordered semirings, self-join-free conjunctive queries that are not p-hierarchical cannot have constant update and constant delay.
- **Dichotomy.** Together: constant update and delay exactly for p-hierarchical alpha-acyclic queries.

## Caveats

Theory result, read from the abstract only. Insert-only: deletes and updates (which a game world produces every tick) are outside the stated dichotomy. Self-join-free conjunctive queries exclude recursion and many rule shapes ano will need, so this bounds the easy cases rather than the whole language.

## Links

- arXiv abstract: https://arxiv.org/abs/2606.07795
- PDF: https://arxiv.org/pdf/2606.07795
- Survey, Recent Increments in IVM: https://arxiv.org/abs/2404.17679
