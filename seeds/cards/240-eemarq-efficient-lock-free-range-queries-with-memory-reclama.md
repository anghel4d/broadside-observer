---
title: 'EEMARQ: Efficient Lock-Free Range Queries with Memory Reclamation'
authors:
- Gali Sheffi
- Pedro Ramalhete
- Erez Petrank
year: 2022
venue: arXiv:cs.DB
arxiv: '2210.17086'
doi: null
source: https://arxiv.org/abs/2210.17086
topics:
- memory-allocation
- lockfree
seed_rank: 240
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 9
lineage: memory-reclamation
cites:
- title: Interval-Based Memory Reclamation
  url: https://doi.org/10.1145/3178487.3178488
  year: 2018
  arxiv: null
  doi: 10.1145/3178487.3178488
- title: 'Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects'
  url: https://doi.org/10.1109/TPDS.2004.8
  year: 2004
  arxiv: null
  doi: 10.1109/TPDS.2004.8
- title: 'DEBRA: Distributed Epoch-Based Reclamation'
  url: https://www.cs.utoronto.ca/~tabrown/debra/
  year: 2015
  arxiv: null
  doi: null
see:
- "323-interval-based-memory-reclamation"
- "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
- "330-debra-distributed-epoch-based-reclamation"
---

# EEMARQ: Efficient Lock-Free Range Queries with Memory Reclamation

## One-sentence takeaway

EEMARQ is the first MVCC range-query scheme that pairs multi-version nodes with lock-free reclamation, so insert, delete, contains, and range stay fully lock-free.

## Why it matters here

Anoptic spatial indexes cannot take a lock or a blocking epoch just to answer "units in this AABB"; EEMARQ is the range-query design that does not give up reclamation to get linearizable scans.

## Key ideas

- MVCC keeps old node versions so a range scan can ride a snapshot while writers update in place.
- Prior linearizable range structures were slow, used locks, or depended on blocking reclaimers.
- Combining MVCC with a lock-free reclaimer is the actual contribution — versions do not leak and do not block.
- Evaluation: faster than existing solutions on most workloads, with lower space overhead.
- Full lock-freedom is preserved for all four operations.

## Caveats

## Links

- arXiv: [2210.17086](https://arxiv.org/abs/2210.17086)
- PDF: https://arxiv.org/pdf/2210.17086
