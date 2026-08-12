---
title: "FAAArrayQueue (Concurrency Freaks)"
authors:
  - "Pedro Ramalhete"
  - "Andreia Correia"
year: 2016
venue: "Concurrency Freaks / GitHub"
arxiv: null
doi: null
source: "https://github.com/pramalhe/ConcurrencyFreaks/blob/master/CPP/queues/array/FAAArrayQueue.hpp"
topics:
  - lockfree
  - queues
seed_rank: 511
seed_batch: "lineage-lock-free-queues-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
lineage: lock-free-queues
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
    card: "032-michael-scott-lock-free-queue"
  - title: "Fast Concurrent Queues for x86 Processors"
    url: "https://doi.org/10.1145/2442516.2442527"
    year: 2013
    arxiv: null
    doi: "10.1145/2442516.2442527"
    card: "507-morrison-afek-lcrq-fast-concurrent-queues-x86"
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
    card: "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - title: "Concurrency Freaks: FAAArrayQueue - MPMC lock-free queue"
    url: "http://concurrencyfreaks.blogspot.com/2016/11/faaarrayqueue-mpmc-lock-free-queue-part.html"
    year: 2016
    arxiv: null
    doi: null
    card: null
---

# FAAArrayQueue (Concurrency Freaks)

## One-sentence takeaway

Portable LCRQ-class MPMC: linked arrays indexed by FAA + single-width CAS (no CAS2), with hazard-pointer reclamation.

## Why it matters here

Practical Anoptic choice when you want FAA scalability in portable C++/Java without x86 CAS2.

## Key ideas

- Linked list of fixed-size arrays; enqueue/dequeue reserve indices via FAA.
- Single-width CAS only — portable beyond x86 CAS2 machines and into managed languages.
- Performance close to LCRQ in authors’ benchmarks; sometimes better on bursty node allocation.
- Documented failure modes when few producers face many consumers (ticket bump-out).

## Caveats

- Not a peer-reviewed conference paper; industrial/blog+code artifact — still widely cited in later PPoPP work.
- Needs hazard pointers (or similar) for node reclamation.
- Watch producer/consumer imbalance pathologies shared with LCRQ-style FAA tickets.

## Links

- Code: https://github.com/pramalhe/ConcurrencyFreaks/blob/master/CPP/queues/array/FAAArrayQueue.hpp
- Write-up: http://concurrencyfreaks.blogspot.com/2016/11/faaarrayqueue-mpmc-lock-free-queue-part.html
