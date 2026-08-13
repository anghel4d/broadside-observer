---
title: "Thread Scheduling for Multiprogrammed Multiprocessors"
authors:
  - "Nimar S. Arora"
  - "Robert D. Blumofe"
  - "C. Greg Plaxton"
year: 1998
venue: "SPAA"
arxiv: null
doi: "10.1145/277651.277678"
source: "https://doi.org/10.1145/277651.277678"
topics:
  - work-stealing-schedulers
  - deque
  - lockfree
seed_rank: 431
seed_batch: "lineage-work-stealing-schedulers-schedulers-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: work-stealing-schedulers
cites:
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    doi: "10.1145/324133.324234"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    doi: "10.1145/277650.277725"
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    doi: "10.1145/1073970.1073974"
see:
  - "200-scheduling-multithreaded-computations-by-work-stealing"
  - "305-the-implementation-of-the-cilk-5-multithreaded-language"
  - "291-dynamic-circular-work-stealing-deque"
---

# Thread Scheduling for Multiprogrammed Multiprocessors

## One-sentence takeaway

Non-blocking THE work-stealing-schedulers deque under adversarial multiprogramming—the structural precursor to Chase–Lev.

## Why it matters here

Defines the owner-bottom / thief-top deque contract every modern job pool still uses; essential when designing Anoptic worker queues that must survive OS preemption.

## Key ideas

- User-level work-stealing-schedulers scheduler analyzed against an adversarial kernel process scheduler.
- Each process owns a deque: owner push/pop at bottom (LIFO); thieves steal from top (FIFO).
- Non-blocking implementation (THE protocol) so a descheduled owner cannot stall thieves forever.
- Expected time O(T_1/P_A + T_∞·P/P_A) where P_A is average allocated processors—optimal up to constants.

## Caveats

- Seed card from lineage epistemology pass; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/277651.277678](https://doi.org/10.1145/277651.277678)
- URL: https://doi.org/10.1145/277651.277678
