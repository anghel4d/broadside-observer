---
title: "Dynamic Circular Work-Stealing Deque"
authors:
  - "David Chase"
  - "Yossi Lev"
year: 2005
venue: "SPAA 2005"
arxiv: null
doi: "10.1145/1073970.1073974"
source: "https://doi.org/10.1145/1073970.1073974"
topics:
  - work-stealing-schedulers
seed_rank: 291
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: work-stealing-schedulers
cites:
  - title: "Thread Scheduling for Multiprogrammed Multiprocessors"
    url: "https://doi.org/10.1145/277651.277678"
    year: 1998
    doi: "10.1145/277651.277678"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    doi: "10.1145/277650.277725"
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    doi: "10.1145/324133.324234"
  - title: "Idempotent Work Stealing"
    url: "https://doi.org/10.1145/1504176.1504186"
    year: 2009
    doi: "10.1145/1504176.1504186"
  - title: "Correct and Efficient Work-Stealing for Weak Memory Models"
    url: "https://doi.org/10.1145/2442516.2442524"
    year: 2013
    doi: "10.1145/2442516.2442524"
  - title: "Fence-Free Work Stealing on Bounded TSO Processors"
    url: "https://doi.org/10.1145/2541940.2541987"
    year: 2014
    doi: "10.1145/2541940.2541987"
  - title: "Formal Verification of Chase-Lev Deque in Concurrent Separation Logic"
    url: "https://arxiv.org/abs/2309.03642"
    year: 2023
    arxiv: "2309.03642"
  - title: "A Lock-Free Work-Stealing Algorithm for Bulk Operations"
    url: "https://arxiv.org/abs/2603.05766"
    year: 2026
    arxiv: "2603.05766"
see:
  - "431-thread-scheduling-for-multiprogrammed-multiprocessors"
  - "305-the-implementation-of-the-cilk-5-multithreaded-language"
  - "200-scheduling-multithreaded-computations-by-work-stealing"
  - "433-idempotent-work-stealing"
  - "434-correct-and-efficient-work-stealing-for-weak-memory-models"
  - "435-fence-free-work-stealing-on-bounded-tso-processors"
  - "229-formal-verification-of-chase-lev-deque-in-concurrent-separat"
  - "206-a-lock-free-work-stealing-algorithm-for-bulk-operations"
---

# Dynamic Circular Work-Stealing Deque

## One-sentence takeaway

Chase-Lev replaces Cilk's THE protocol with a circular array that the owner grows lock-free, so push/pop stay wait-free on one end and steal is a single CAS on the other.

## Why it matters here

This is the deque under almost every modern job system, including whatever ano uses for ECS/system fan-out. If the owner never fights a thief except at the last element, you can afford one deque per worker.

## Key ideas

- Owner pushes and pops at the bottom with no atomics in the common case; thieves CAS the top index.
- The backing store is a power-of-two circular buffer. When it fills, the owner allocates a larger array and copies — other threads still see a consistent snapshot via an epoch-ish top/bottom pair.
- Fixes the fixed-size limitation of the original Cilk THE deque without taking a lock on grow.
- SPAA 2005, DOI 10.1145/1073970.1073974. Later papers (Lé et al. 2013, formal verification 2023) are about compiling this algorithm onto weaker memory models, not replacing it.

## Caveats

## Links

- DOI: [10.1145/1073970.1073974](https://doi.org/10.1145/1073970.1073974)
