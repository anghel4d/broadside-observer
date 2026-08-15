---
title: "Concurrent Reference Counting and Resource Management in Wait-free Constant Time"
authors:
  - "Guy E. Blelloch"
  - "Yuanhao Wei"
year: 2020
venue: "arXiv cs.DC"
arxiv: "2002.07053"
doi: null
source: "https://arxiv.org/abs/2002.07053"
topics:
  - memory-allocation
  - lockfree
seed_rank: 252
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-reclamation
cites:
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "036-wait-free-synchronization"
---

# Concurrent Reference Counting and Resource Management in Wait-free Constant Time

## One-sentence takeaway

Acquire-retire protects read-destruct races with expected constant-time overhead, O(P²) space and delayed destructs, using only single-word reads, writes, and CAS.

## Why it matters here

Ano's lock-free ECS and job queues need a reclamation story that is not epoch-blocking and not hazard-pointer slow. Acquire-retire is the interface shape for wait-free refcounts, ownership moves, and retiring component storage.

## Key ideas

- Four primitives: acquire/release around a use, retire/eject to delay destruction until no protector remains.
- Expected constant-time operations; space and deferred destructs bounded by O(P²) for P processes.
- Three applications on the same interface: memory reclamation for stacks and queues, wait-free reference counts, and ownership with move/copy/destruct.
- Avoids the read-side cost of hazard-pointer scans and the grace-period stalls of RCU/epochs while staying wait-free.

## Caveats

## Links

- arXiv: [2002.07053](https://arxiv.org/abs/2002.07053)
- PDF: https://arxiv.org/pdf/2002.07053
