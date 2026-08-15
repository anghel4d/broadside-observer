---
title: "Wait-Free Updates and Range Search using Uruv"
authors:
  - "Gaurav Bhardwaj"
  - "Abhay Jain"
  - "Bapi Chatterjee"
  - "Sathya Peri"
year: 2023
venue: "arXiv:cs.DC"
arxiv: "2307.14744"
doi: null
source: "https://arxiv.org/abs/2307.14744"
topics:
  - lockfree
seed_rank: 237
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
see:
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# Wait-Free Updates and Range Search using Uruv

## One-sentence takeaway

Uruv is a proactive, linearizable wait-free B+tree: a balanced search index over a linked list that finally gives CRUD plus range queries a fully wait-free implementation.

## Why it matters here

Anoptic entity indexes and GRID COMMAND spatial buckets need wait-free range scans that cannot be blocked by a stalled updater; Uruv is the first practical wait-free B+tree the seed spine has for that ADT.

## Key ideas

- CRUD + range is a common analytics ADT; no prior structure was fully wait-free for it.
- Structure: linked-list leaves with a balanced search index installed on top.
- "Proactive" means helping is arranged so a slow thread does not pin the range scan.
- First wait-free and proactive concurrent B+tree in the authors' accounting.
- Beats prior lock-free B+trees on dictionary ops and a recent lock-free range-query design.

## Caveats

## Links

- arXiv: [2307.14744](https://arxiv.org/abs/2307.14744)
- PDF: https://arxiv.org/pdf/2307.14744
