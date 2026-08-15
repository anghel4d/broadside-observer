---
title: "Safe Memory Reclamation for Dynamic Lock-Free Objects Using Atomic Reads and Writes"
authors:
  - "Maged M. Michael"
year: 2002
venue: "PODC 2002"
arxiv: null
doi: "10.1145/571825.571829"
source: "https://doi.org/10.1145/571825.571829"
topics:
  - memory-allocation
  - hazard-pointers
  - reclamation
seed_rank: 297
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
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "031-michael-scott-lock-free-queue"
---

# Safe Memory Reclamation for Dynamic Lock-Free Objects Using Atomic Reads and Writes

## One-sentence takeaway

Michael's PODC 2002 paper is the original hazard-pointer algorithm: a thread publishes the pointer it is about to dereference, and a retire list is scanned against every published hazard before free.

## Why it matters here

This is the wait-free-compatible reclaimer ano reaches for when epochs would stall. The 2004 TPDS journal version (card 024) is the polished write-up; this is the conference original.

## Key ideas

- Each thread owns a small array of hazard pointers. Before dereferencing a shared node, write that pointer into a hazard slot (with a store-load barrier).
- `retire(node)` appends to a local list. When the list is long enough, scan all hazard slots; any node not currently hazarded may be freed.
- Only atomic reads and writes — no DCAS, no per-object refcounts, no quiescent-state tracking.
- Bounds unreclaimed junk by O(threads × hazards per thread), independent of how long a thread sleeps *after* dropping its hazards.
- PODC 2002, DOI 10.1145/571825.571829. Followed by the 2004 IEEE TPDS "Hazard Pointers" article.

## Caveats

## Links

- DOI: [10.1145/571825.571829](https://doi.org/10.1145/571825.571829)
