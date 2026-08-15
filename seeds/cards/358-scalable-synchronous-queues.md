---
title: "Scalable Synchronous Queues"
authors:
  - "William N. Scherer III"
  - "Doug Lea"
  - "Michael L. Scott"
year: 2006
venue: "PPoPP"
arxiv: null
doi: "10.1145/1122971.1123012"
source: "https://doi.org/10.1145/1122971.1123012"
topics:
  - lockfree
  - queues
seed_rank: 358
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
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "Using Elimination to Implement Scalable and Lock-Free FIFO Queues"
    url: "https://doi.org/10.1145/1073970.1074013"
    year: 2005
    arxiv: null
    doi: "10.1145/1073970.1074013"
see:
  - "031-michael-scott-lock-free-queue"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "419-moir-elimination-backoff-lock-free-fifo-queues"
---

# Scalable Synchronous Queues

## One-sentence takeaway

A synchronous queue is a handoff: enqueue waits for a dequeue (and vice versa), and Scherer/Lea/Scott make that handoff scale with dual data structures plus spinning-then-parking.

## Why it matters here

Anoptic job/thread pools and GRID COMMAND worker handoff should not bounce every task through a bounded MPMC buffer. `SynchronousQueue` (this paper, later `java.util.concurrent`) is the rendezvous: a producer gives a job directly to an idle worker, or parks. That is the right primitive when you want “no queueing delay if a consumer is waiting.”

## Key ideas

- Dual data structures (Scherer/Scott): nodes carry a reservation that a complementary operation can fulfill, so the same list serves both waiting producers and waiting consumers.
- Combining / elimination at the stack-like end lets complementary operations pair off without touching a hot tail pointer.
- The implementation spins briefly (to catch a nearly-arrived partner) then parks, which is why it won the Java 6 `SynchronousQueue` rewrite.
- Linearizable transfer; non-overlapping transfers proceed concurrently.

## Caveats

## Links

- DOI: https://doi.org/10.1145/1122971.1123012
