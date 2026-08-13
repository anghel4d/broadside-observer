---
title: "Bounded MPMC Queue (1024cores)"
authors:
  - "Dmitry Vyukov"
year: 2010
venue: "1024cores"
arxiv: null
doi: null
source: "https://www.1024cores.net/home/lock-free-algorithms/queues/bounded-mpmc-queue"
topics:
  - lockfree
  - queues
seed_rank: 508
seed_batch: "lineage-concurrent-data-structures-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "cameron314 concurrentqueue (MPMC)"
    url: "https://github.com/cameron314/concurrentqueue"
    year: 2014
    arxiv: null
    doi: null
  - title: "LMAX Disruptor"
    url: "https://lmax-exchange.github.io/disruptor/"
    year: 2011
    arxiv: null
    doi: null
see:
  - "032-michael-scott-lock-free-queue"
  - "413-cameron314-concurrentqueue-mpmc"
  - "427-lmax-disruptor"
---

# Bounded MPMC Queue (1024cores)

## One-sentence takeaway

Canonical industrial bounded MPMC ring: per-cell sequence numbers, one CAS per op, cache-line separated enqueue/dequeue indices.

## Why it matters here

Default craft reference for Anoptic fixed-capacity job/event rings — copied into MySQL, game engines, and countless C++ codebases.

## Key ideas

- Array/ring of cells each holding a sequence_ atomic; power-of-two capacity.
- Producers/consumers claim positions via CAS on enqueue_pos_/dequeue_pos_, then publish via sequence stores.
- Separates producer and consumer cache lines; no allocator traffic on the fast path.
- Author notes it is “not lock-free in the official meaning” yet mutex-free and extremely practical.

## Caveats

- Bounded; full/empty returns failure (or must be wrapped with waiting).
- Progress/formality weaker than academic lock-/wait-free queues — still the right tool often.
- Exact first-publication year on 1024cores is fuzzy; 2010 is conventional for this lineage pass.

## Links

- URL: https://www.1024cores.net/home/lock-free-algorithms/queues/bounded-mpmc-queue
- Mirror: https://sites.google.com/site/1024cores/home/lock-free-algorithms/queues/bounded-mpmc-queue
