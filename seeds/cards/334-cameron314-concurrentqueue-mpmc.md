---
title: "cameron314 concurrentqueue (MPMC)"
authors:
  - "Cameron Desrochers"
year: 2014
venue: "GitHub"
arxiv: null
doi: null
source: "https://github.com/cameron314/concurrentqueue"
topics:
  - lockfree
  - queues
seed_rank: 334
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Bounded MPMC Queue (1024cores)"
    url: "https://www.1024cores.net/home/lock-free-algorithms/queues/bounded-mpmc-queue"
    year: 2010
    arxiv: null
    doi: null
  - title: "LMAX Disruptor"
    url: "https://lmax-exchange.github.io/disruptor/"
    year: 2011
    arxiv: null
    doi: null
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
see:
  - "031-michael-scott-lock-free-queue"
  - "424-vyukov-bounded-mpmc-queue"
  - "347-lmax-disruptor"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# cameron314 concurrentqueue (MPMC)

## One-sentence takeaway

`moodycamel::ConcurrentQueue` is a practical C++11 unbounded MPMC queue that gives each producer a block of implicit tokens so enqueue rarely contends, and consumers steal blocks rather than CAS every node.

## Why it matters here

Ano job queues and Broadside netcode mailboxes need a drop-in MPMC that is faster than Michael–Scott and easier than a Disruptor; this is the library engines actually vendor.

## Key ideas

- Unbounded (grows by blocks) and also ships `BlockingConcurrentQueue` and a bounded `ReaderWriterQueue` sibling.
- Producers can be implicit (hashed by thread id) or explicit (`ProducerToken` / `ConsumerToken`) for the lowest-overhead path.
- Elements live in cache-line-sized blocks; a consumer claims a whole block, so the common dequeue is a local index bump, not a lock-free node swing.
- Bulk enqueue/dequeue APIs amortize atomics across many items — the usual game-engine pattern for command buffers.
- MIT-licensed single-header-ish C++ at https://github.com/cameron314/concurrentqueue (first public release 2014).

## Caveats

## Links

- Repo: https://github.com/cameron314/concurrentqueue
