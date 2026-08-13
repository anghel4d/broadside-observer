---
title: "Are Your Epochs Too Epic? Batch Free Can Be Harmful"
authors:
  - "Daewoo Kim"
  - "Trevor Brown"
  - "Ajay Singh"
year: 2024
venue: "PPoPP"
arxiv: "2401.11347"
doi: "10.1145/3627535.3638491"
source: "https://arxiv.org/abs/2401.11347"
topics:
  - lockfree-game-parallelism
  - custom-allocators-runtime
seed_rank: 5
seed_batch: "craft-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-reclamation
cites:
  - title: "Epoch-Based Reclamation / Practical Lock-Freedom"
    url: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf"
    year: 2004
    arxiv: null
    doi: null
  - title: "DEBRA: Distributed Epoch-Based Reclamation"
    url: "https://doi.org/10.1145/2851141.2851167"
    year: 2015
    arxiv: null
    doi: "10.1145/2851141.2851167"
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
see:
  - "369-epoch-based-reclamation-practical-lock-freedom"
  - "409-debra-distributed-epoch-based-reclamation"
  - "012-mimalloc-free-list-sharding-in-action"
  - "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Are Your Epochs Too Epic? Batch Free Can Be Harmful

## One-sentence takeaway

EBR’s well-known delay sensitivity is actually an allocator interaction: long epochs + bounded thread caches make `free` explode into a burst of uncached remote work.

## Why it matters here

Anoptic’s lock-free buses will sit on EBR-class reclamation *and* mimalloc/jemalloc-class heaps. This paper is the workbench diagnosis: if a sim thread hiccups, you do not just leak a few nodes — you detonate the allocator’s batch-free path on the next epoch advance. That is a GRID COMMAND hitch in disguise. The fix is operational (bound epoch length, drain differently), not “write a new queue.”

## Key ideas

- Reproduces the mysterious EBR slowdown in a popular data-structure benchmark and traces it to modern allocators, not to the reclamation algorithm per se.
- Thread-caching mallocs bound local free lists and dump the rest to a global structure; a long epoch then a mass `free` turns into a cache-cold allocator storm.
- “Batch free can be harmful”: the optimization that makes `free` cheap in the common case is the one that makes delayed EBR frees catastrophic.
- Practical levers: shorter epochs, incremental unlinking, allocator APIs that can take a *list* of nodes without bouncing through the thread cache.
- PPoPP 2024; Brown/Singh line (DEBRA, HP variants).

## Caveats

- Diagnosis of a performance cliff, not a new SMR algorithm. Pair with DEBRA/HP cards for the actual recipes.
- Allocator internals (mimalloc/jemalloc/tcmalloc) change; re-measure on the heap Anoptic actually ships.
- Does not argue against EBR — it argues against *unbounded* epochs on top of batching heaps.

## Links

- arXiv: [2401.11347](https://arxiv.org/abs/2401.11347)
- PDF: https://arxiv.org/pdf/2401.11347
- DOI: [10.1145/3627535.3638491](https://doi.org/10.1145/3627535.3638491)
