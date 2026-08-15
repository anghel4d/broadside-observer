---
title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
authors:
  - "Maged M. Michael"
year: 2004
venue: "IEEE TPDS"
arxiv: null
doi: "10.1109/TPDS.2004.8"
source: "https://doi.org/10.1109/TPDS.2004.8"
topics:
  - lockfree
  - memory
seed_rank: 24
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: memory-reclamation
cites:
  - title: "Safe Memory Reclamation for Dynamic Lock-Free Objects Using Atomic Reads and Writes"
    url: "https://doi.org/10.1145/571825.571829"
    year: 2002
    arxiv: null
    doi: "10.1145/571825.571829"
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "297-safe-memory-reclamation-for-dynamic-lock-free-objects-using-"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
---

# Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects

## One-sentence takeaway

A retiring thread may free a node only after no live hazard pointer in the process still names it — wait-free for readers, lock-free for reclaimers, and usable without a garbage collector.

## Why it matters here

Anoptic lock-free queues, maps, and work-stealing deques all hit the ABA/reclamation wall. Hazard pointers are the portable answer when you do not want epochs, RCU grace periods, or a GC.

## Key ideas

- The 2002 PODC algorithm is refined and measured here: each thread owns a small set of hazard pointers that it writes *before* dereferencing a shared pointer.
- Reclamation scans the global hazard-pointer array; any retired node not present may be freed. Scan cost is proportional to the (small) number of hazard pointers, not to heap size.
- Progress: a reader never waits; a reclaimer is lock-free. Contrast with reference counting (atomic traffic on every read) and with quiescent-state / epoch schemes (delayed, unbounded).
- Works on the Michael–Scott queue and other dynamic lock-free objects; the method is structure-agnostic as long as the published pointers are the only ones that may still be followed.
- Later work (hazard eras, DEBRA, interval-based reclamation) changes *when* a pointer is considered hazardous; the publication protocol is still this paper.

## Caveats

## Links

- DOI: [10.1109/TPDS.2004.8](https://doi.org/10.1109/TPDS.2004.8)
