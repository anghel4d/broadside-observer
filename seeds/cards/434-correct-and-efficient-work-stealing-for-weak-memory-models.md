---
title: "Correct and Efficient Work-Stealing for Weak Memory Models"
authors:
  - "Nhat Minh Lê"
  - "Antoniu Pop"
  - "Albert Cohen"
  - "Francesco Zappa Nardelli"
year: 2013
venue: "PPoPP"
arxiv: null
doi: "10.1145/2442516.2442524"
source: "https://doi.org/10.1145/2442516.2442524"
topics:
  - work-stealing-schedulers
  - chase-lev
  - weak-memory
  - lockfree
seed_rank: 434
seed_batch: "lineage-work-stealing-schedulers-schedulers-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: work-stealing-schedulers
cites:
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    doi: "10.1145/1073970.1073974"
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    doi: "10.1145/324133.324234"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    doi: "10.1145/277650.277725"
  - title: "Fence-Free Work Stealing on Bounded TSO Processors"
    url: "https://doi.org/10.1145/2541940.2541987"
    year: 2014
    doi: "10.1145/2541940.2541987"
  - title: "Formal Verification of Chase-Lev Deque in Concurrent Separation Logic"
    url: "https://arxiv.org/abs/2309.03642"
    year: 2023
    arxiv: "2309.03642"
see:
  - "291-dynamic-circular-work-stealing-deque"
  - "200-scheduling-multithreaded-computations-by-work-stealing"
  - "305-the-implementation-of-the-cilk-5-multithreaded-language"
  - "435-fence-free-work-stealing-on-bounded-tso-processors"
  - "229-formal-verification-of-chase-lev-deque-in-concurrent-separat"
---

# Correct and Efficient Work-Stealing for Weak Memory Models

## One-sentence takeaway

First correctness proof and barrier-optimized Chase–Lev for POWER/ARM plus portable C11—the deque variant most native code should copy.

## Why it matters here

Game/engine hosts run on ARM and x86; this paper is the practical recipe for Chase–Lev atomics/fences that Broadside job systems must get right.

## Key ideas

- Original Chase–Lev assumed sequential consistency; weak models need explicit barriers.
- Proves an optimized POWER/ARM implementation; also studies x86 and C11 variants.
- Systematic barrier-tuning experiments show large gains from hand-placed fences vs blanket seq_cst.
- De facto reference for libfork / modern C++ Chase–Lev ports on relaxed hardware.

## Caveats

## Links

- DOI: [10.1145/2442516.2442524](https://doi.org/10.1145/2442516.2442524)
- URL: https://doi.org/10.1145/2442516.2442524
