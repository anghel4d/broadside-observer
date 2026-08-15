---
title: "LMAX Disruptor"
authors:
  - "Martin Thompson"
  - "Dave Farley"
  - "Michael Barker"
  - "Patricia Gee"
  - "Andrew Stewart"
year: 2011
venue: "LMAX technical paper"
arxiv: null
doi: null
source: "https://lmax-exchange.github.io/disruptor/files/Disruptor-1.0.pdf"
topics:
  - lockfree
  - queues
seed_rank: 347
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
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
see:
  - "031-michael-scott-lock-free-queue"
  - "424-vyukov-bounded-mpmc-queue"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# LMAX Disruptor

## One-sentence takeaway

The Disruptor is a preallocated ring buffer plus sequence barriers: producers claim slots by incrementing a cursor, consumers wait on that cursor, and mechanical-sympathy layout (no linked nodes, padded counters) keeps the whole path out of the allocator and out of false sharing.

## Why it matters here

Ano frame graphs and Broadside netcode want a single-producer or few-producer pipeline that never mallocs on the tick; this 2011 LMAX paper is the design those “mechanical sympathy” queues copy.

## Key ideas

- Preallocate every slot. The queue never allocates after startup, so GC / malloc jitter disappears.
- A `Sequence` per producer/consumer is a padded atomic counter. Claiming `n` slots is one CAS on the cursor; consumers read entries up to the minimum published sequence they depend on.
- Multi-consumer graphs are expressed as barriers (A happens-before B) rather than extra queues, so one event is processed in stages without copying.
- Compared with java.util.concurrent queues, they report orders-of-magnitude lower latency at LMAX’s exchange volumes, mostly from removing contention and linked-node cache misses.
- Canonical PDF: https://lmax-exchange.github.io/disruptor/files/Disruptor-1.0.pdf — pin that, not only the project landing page.

## Caveats

## Links

- Paper: https://lmax-exchange.github.io/disruptor/files/Disruptor-1.0.pdf
- Project: https://lmax-exchange.github.io/disruptor/
