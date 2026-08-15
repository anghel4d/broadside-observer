---
title: "FLeeC: a Fast Lock-Free Application Cache"
authors:
  - "André J. Costa"
  - "Nuno M. Preguiça"
  - "João M. Lourenço"
year: 2024
venue: "INForum 2023 / arXiv:cs.DC"
arxiv: "2406.09428"
doi: null
source: "https://arxiv.org/abs/2406.09428"
topics:
  - lockfree
seed_rank: 221
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
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
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
---

# FLeeC: a Fast Lock-Free Application Cache

## One-sentence takeaway

FLeeC is a Memcached-compatible application cache whose main tables accept any number of concurrent readers and writers via lock-free eviction and lock-free lookups.

## Why it matters here

Anoptic and Broadside both keep hot key/value working sets (entity lookups, command dedup); a drop-in Memcached that does not serialize eviction is the cache analog of a lock-free hash map.

## Key ideas

- Blocking Memcached pays for mutexes on the hash table and LRU under write contention.
- FLeeC redesigns those structures so inserts, lookups, and evictions stay non-blocking even when many cores hit the same keys.
- The new eviction policy and lookup path are the two algorithms the paper isolates and measures.
- It is a plug-in replacement for stock Memcached.
- Reported speedups reach 6× on high-contention workloads (INForum 2023).

## Caveats

## Links

- arXiv: [2406.09428](https://arxiv.org/abs/2406.09428)
- PDF: https://arxiv.org/pdf/2406.09428
