---
title: "Michael & Scott Lock-Free Queue"
authors:
  - "Maged M. Michael"
  - "Michael L. Scott"
year: 1996
venue: "PODC"
arxiv: null
doi: "10.1145/248052.248106"
source: "https://doi.org/10.1145/248052.248106"
topics:
  - lockfree
  - engine
seed_rank: 31
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
see:
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "036-wait-free-synchronization"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Michael & Scott Lock-Free Queue

## One-sentence takeaway

The PODC’96 MS-queue is a linearizable lock-free MPMC linked FIFO: a dummy sentinel, a CAS on tail to enqueue, a CAS on head to dequeue — still the reference algorithm in java.util.concurrent.

## Why it matters here

Root of Anoptic’s `concurrent-data-structures` lineage. Every later baskets / LCRQ / Vyukov / Disruptor design is measured against this two-CAS queue and against the ABA hole it leaves open.

## Key ideas

- Separate head and tail pointers plus a dummy node so enqueue and dequeue touch different cache lines in the common case and never empty-race into a single-node special case.
- Enqueue: swing tail via CAS (helping if tail lags). Dequeue: swing head via CAS. Progress is lock-free, not wait-free — a stalled thread can be helped, but a fast looper can starve others.
- The paper also gives a practical two-lock blocking queue; the lock-free variant is the one that became canonical.
- Correctness is argued under Herlihy–Wing linearizability; the linearization points are the successful CASes.
- Unbounded node allocation implies a reclamation scheme (GC, hazard pointers, epochs). Head/tail CAS hot spots are why later work adds elimination, FAA rings, and bounded buffers.

## Caveats

## Links

- DOI: [10.1145/248052.248106](https://doi.org/10.1145/248052.248106)
