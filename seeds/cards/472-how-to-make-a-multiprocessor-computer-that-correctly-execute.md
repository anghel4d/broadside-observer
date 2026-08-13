---
title: How to Make a Multiprocessor Computer That Correctly Executes Multiprocess
  Programs
authors:
- Leslie Lamport
year: 1979
venue: IEEE Trans. Computers
arxiv: null
doi: 10.1109/TC.1979.1675439
source: https://doi.org/10.1109/TC.1979.1675439
topics:
- consistency
- concurrency
seed_rank: 472
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 9
lineage: concurrent-data-structures
cites:
- title: 'Linearizability: A Correctness Condition for Concurrent Objects'
  url: https://doi.org/10.1145/78969.78972
  year: 1990
  arxiv: null
  doi: 10.1145/78969.78972
- title: Release Consistency versus Sequential Consistency
  url: https://www.hpl.hp.com/techreports/Compaq-DEC/WRL-92-5.pdf
  year: 1992
  arxiv: null
  doi: null
- title: Wait-Free Synchronization
  url: https://doi.org/10.1145/114005.102808
  year: 1991
  arxiv: null
  doi: 10.1145/114005.102808
see:
- "203-linearizability-a-correctness-condition-for-concurrent-objec"
- "414-release-consistency-versus-sequential-consistency"
- "036-wait-free-synchronization"
---

# How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs

## One-sentence takeaway

Sequential consistency is the classic multiprocessor correctness baseline that linearizability refines for objects.

## Why it matters here

Predecessor node for the linearizability to concurrent structures spine.

## Key ideas

- Single global order agreeing with program order.
- Foundation for later object-level linearizability.
- Mental model programmers wish hardware provided.
- Contrasts with release/weak consistency.

## Caveats

- SC is stronger/more expensive than TSO on real hardware.
- Linearizability is per-object and real-time constrained — not identical to SC.

## Links

- DOI: [10.1109/TC.1979.1675439](https://doi.org/10.1109/TC.1979.1675439)
- URL: https://doi.org/10.1109/TC.1979.1675439
