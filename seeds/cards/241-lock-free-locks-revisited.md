---
title: "Lock-Free Locks Revisited"
authors:
  - "Naama Ben-David"
  - "Guy E. Blelloch"
  - "Yuanhao Wei"
year: 2022
venue: "PPoPP 2022"
arxiv: "2201.00813"
doi: null
source: "https://arxiv.org/abs/2201.00813"
topics:
  - lockfree
seed_rank: 241
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
see:
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# Lock-Free Locks Revisited

## One-sentence takeaway

Flock lets you write fine-grained lock-based C++ and run it lock-free: helpers replay the critical section through idempotent loads/stores logged so multiple executions look like one.

## Why it matters here

Anoptic still has lock-shaped resource tables; Flock is the path that keeps that code and only swaps the lock implementation, which is how 218's recoverable transform later sits on the same idea.

## Key ideas

- Earlier lock-free locks were considered impractical and, the authors say, had never actually been implemented.
- Idempotence is the key trick: a shared log plus idempotent load/store/LL-SC/alloc/free makes a helped critical section appear once.
- The library is almost drop-in — user code just uses those idempotent primitives inside the locked region.
- Flock can run the same data structure in lock-free or ordinary blocking mode.
- Lock-free mode matches blocking speed on most workloads and wins when threads are oversubscribed. Trees and lists are the evaluated structures. PPoPP 2022.

## Caveats

## Links

- arXiv: [2201.00813](https://arxiv.org/abs/2201.00813)
- PDF: https://arxiv.org/pdf/2201.00813
