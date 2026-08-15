---
title: Interval-Based Memory Reclamation
authors:
- Haosen Wen
- Joseph Izraelevitz
- Wentao Cai
- H. Alan Beadle
- Michael L. Scott
year: 2018
venue: PPoPP
arxiv: null
doi: 10.1145/3178487.3178488
source: https://doi.org/10.1145/3178487.3178488
topics:
- memory-allocation
- reclamation
seed_rank: 323
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 8
lineage: memory-reclamation
cites:
- title: 'Hazard Eras: Non-Blocking Memory Reclamation'
  url: https://doi.org/10.1145/3087556.3087588
  year: 2017
  arxiv: null
  doi: 10.1145/3087556.3087588
- title: 'DEBRA: Distributed Epoch-Based Reclamation'
  url: https://doi.org/10.1145/2767386.2767436
  year: 2015
  arxiv: null
  doi: 10.1145/2767386.2767436
- title: 'Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects'
  url: https://doi.org/10.1109/TPDS.2004.8
  year: 2004
  arxiv: null
  doi: 10.1109/TPDS.2004.8
see:
- "455-hazard-eras-non-blocking-memory-reclamation"
- "330-debra-distributed-epoch-based-reclamation"
- "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Interval-Based Memory Reclamation

## One-sentence takeaway

IBR lets a thread reserve every block whose birth–retire lifetime intersects a bounded epoch interval, so reclamation stays robust like hazard pointers without a fence on every pointer follow.

## Why it matters here

Lock-free queues and ECS structural changes in ano need a reclamation scheme that a stalled worker cannot pin forever and that does not tax the read path the way hazard pointers do.


## Key ideas

- Epoch-based reclamation is fast but not robust: one stalled thread reserves the entire future heap. Hazard pointers are robust but need an `unreserve` and a store-load fence per dereference.
- Each block is tagged with a birth epoch (and a retire epoch when retired). A thread posts a reserved interval; a retired block is freeable iff its lifetime misses every reserved interval.
- Three schemes trade cost vs. generality: persistent-object IBR (immutable-pointer structures), tagged-pointer IBR (epoch in the pointer word), and related variants.
- API matches EBR (`start_op` / `end_op` / `retire`) — no per-pointer `unreserve`. Constant space per thread, no special OS or hardware support.

## Caveats

## Links

- DOI: [10.1145/3178487.3178488](https://doi.org/10.1145/3178487.3178488)
- PDF: https://www.cs.rochester.edu/u/hwen5/papers/wen-ppopp-2018.pdf
