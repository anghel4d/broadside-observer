---
title: "Using Elimination to Implement Scalable and Lock-Free FIFO Queues"
authors:
  - "Mark Moir"
  - "Daniel Nussbaum"
  - "Ori Shalev"
  - "Nir Shavit"
year: 2005
venue: "SPAA"
arxiv: null
doi: "10.1145/1073970.1074013"
source: "https://doi.org/10.1145/1073970.1074013"
topics:
  - lockfree
  - queues
seed_rank: 419
seed_batch: "lineage-concurrent-data-structures-2026-08-13"
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
see:
  - "031-michael-scott-lock-free-queue"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# Using Elimination to Implement Scalable and Lock-Free FIFO Queues

## One-sentence takeaway

Shows elimination (pairing concurrent opposite operations) can scale linearizable FIFO queues, not only stacks/counters.

## Why it matters here

Useful when Anoptic producer/consumer bursts cancel each other — backoff via elimination instead of hammering MS head/tail.

## Key ideas

- Transforms non-scalable FIFO implementations (applied to MS-queue) into scalable ones via elimination backoff.
- Preserves lock-freedom and linearizability while improving high-load scalability.
- Opposite concurrent enqueue/dequeue pairs can complete without touching the central structure.
- Empirical CMT multiprocessor results: similar low-load cost, better high-load scaling than plain MS.

## Caveats

## Links

- DOI: [10.1145/1073970.1074013](https://doi.org/10.1145/1073970.1074013)
- PDF: https://people.csail.mit.edu/shanir/publications/SPAA2005.pdf
