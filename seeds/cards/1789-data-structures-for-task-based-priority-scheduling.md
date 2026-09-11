---
title: "Data Structures for Task-based Priority Scheduling"
authors: ["Martin Wimmer", "Daniel Cederman", "Francesco Versaci", "Jesper Larsson Träff", "Philippas Tsigas"]
year: 2013
venue: "arXiv (cs.DC)"
arxiv: "1312.2501"
doi: null
source: "https://arxiv.org/abs/1312.2501"
topics: [work-stealing-schedulers, job-system]
seed_rank: 1789
seed_batch: "craft-2026-09-11"
reviewed: "2026-09-11"
pool: "systems"
relevance_score: 9
lineage: work-stealing-schedulers
cites:
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    arxiv: null
    doi: "10.1145/1073970.1073974"
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    arxiv: null
    doi: "10.1145/324133.324234"
  - title: "Libfork: Portable Continuation-Stealing With Stackless Coroutines"
    url: "https://arxiv.org/abs/2402.18480"
    year: 2025
    arxiv: "2402.18480"
    doi: "10.1109/tpds.2025.3543442"
  - title: "A Lock-Free Work-Stealing Algorithm for Bulk Operations"
    url: "https://arxiv.org/abs/2603.05766"
    year: 2026
    arxiv: "2603.05766"
    doi: null
  - title: "Job System and Fiber Architecture (Naughty Dog)"
    url: "https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine"
    year: 2015
    arxiv: null
    doi: null
see:
  - "291-dynamic-circular-work-stealing-deque"
  - "229-formal-verification-of-chase-lev-deque-in-concurrent-separat"
  - "200-scheduling-multithreaded-computations-by-work-stealing"
  - "433-idempotent-work-stealing"
  - "435-fence-free-work-stealing-on-bounded-tso-processors"
  - "1556-libfork-portable-continuation-stealing-with-stackless-coroutines"
  - "206-a-lock-free-work-stealing-algorithm-for-bulk-operations"
  - "105-job-system-and-fiber-architecture-naughty-dog"
  - "106-parallelizing-the-naughty-dog-engine-using-fibers"
---

# Data Structures for Task-based Priority Scheduling

## One-sentence takeaway

Wimmer et al. give three lock-free priority-aware work-stealing designs — a scalable WS extension with no inter-thread order, a centralized k-FIFO with stronger (still relaxed) guarantees, and a hybrid k-priority that is the recommended compromise.

## Why it matters here

Anoptic jobs are not all equal: GRID COMMAND AI/animation ticks, cull, and streaming have priorities, but a global heap kills steal scalability. This is the leftover of Chase-Lev / libfork / Naughty Dog fibers 105 — *how to add priority without collapsing the deque*. Tune k until HUD/simulation jobs jump the queue without turning the scheduler into a contended PQ.

## Key ideas

- **Priority WS extension.** Local deques respect priority; steals do not, so you keep Chase-Lev-like scalability and give up cross-thread order — fine when priority is a hint, not a deadline.
- **Centralized k-FIFO.** Stronger relaxed sequential spec; parameter k trades how far a low-priority task can overtake a high-priority one against contention. Stronger guarantees, less scale.
- **Hybrid k-priority.** Combine both: WS-like scale at large k, centralized-like order at small k. The paper's generic recommendation for priority task scheduling.
- **SSSP as the litmus.** Parallel Dijkstra shows the centralized and hybrid structures bound useful work; 80-core Xeon numbers back the trade-off. Same shape as "important jobs first" in an engine frame.

## Caveats

arXiv `1312.2501` (Dec 2013); PPoPP 2014 published a 2-page poster (`10.1145/2555243.2555278`) of the same title — full algorithm is the arXiv. Configurable Strategies for Work-stealing (`1305.6474`) is a related Wimmer paper (cite, do not mint). Do not remint Chase-Lev 291/229, Blumofe 200, Idempotent 433, Fence-free TSO 435, libfork 1556, Bulk WS 206, or Naughty Dog 105/106.

## Links

- arXiv abs: https://arxiv.org/abs/1312.2501
- PDF: https://arxiv.org/pdf/1312.2501
- PPoPP 2014 poster DOI: https://doi.org/10.1145/2555243.2555278
