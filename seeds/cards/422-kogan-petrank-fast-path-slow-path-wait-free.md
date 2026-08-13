---
title: "A Methodology for Creating Fast Wait-Free Data Structures"
authors:
  - "Alex Kogan"
  - "Erez Petrank"
year: 2012
venue: "PPoPP"
arxiv: null
doi: "10.1145/2145816.2145835"
source: "https://doi.org/10.1145/2145816.2145835"
topics:
  - lockfree
  - queues
seed_rank: 422
seed_batch: "lineage-concurrent-data-structures-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Wait-Free Queues with Multiple Enqueuers and Dequeuers"
    url: "https://doi.org/10.1145/1941553.1941585"
    year: 2011
    arxiv: null
    doi: "10.1145/1941553.1941585"
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
  - "421-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
---

# A Methodology for Creating Fast Wait-Free Data Structures

## One-sentence takeaway

Fast-path/slow-path recipe: run a lock-free algorithm most of the time; fall back to a wait-free helper path after bounded patience.

## Why it matters here

The dominant engineering pattern behind practical wait-free queues (and wCQ) that Anoptic should default to when wait-freedom is required.

## Key ideas

- Methodology, not a single structure: compose efficient lock-free fast path with wait-free slow path.
- Applied to their 2011 wait-free queue to match lock-free performance in practice.
- Also demonstrated on wait-free linked lists in companion work.
- Later YMC, wCQ, and others instantiate variants of this patience/helping idea.

## Caveats

- Slow-path descriptors and helping still need careful SMR/allocator design for bounded memory.
- Patience tuning is workload-sensitive.
- Seed card; promote before relying on fine-grained claims.

## Links

- DOI: [10.1145/2145816.2145835](https://doi.org/10.1145/2145816.2145835)
- PDF: https://csaws.cs.technion.ac.il/~erez/Papers/wf-methodology-ppopp12.pdf
