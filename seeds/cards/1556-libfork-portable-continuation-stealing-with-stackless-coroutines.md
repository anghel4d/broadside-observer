---
title: "Libfork: Portable Continuation-Stealing With Stackless Coroutines"
authors: ["Conor John Williams", "James A. Elliott"]
year: 2025
venue: "IEEE Transactions on Parallel and Distributed Systems"
arxiv: "2402.18480"
doi: "10.1109/tpds.2025.3543442"
source: "https://arxiv.org/abs/2402.18480"
topics: [lockfree-game-parallelism, job-system, work-stealing-schedulers]
seed_rank: 1556
seed_batch: "craft-2026-09-03"
reviewed: "2026-09-03"
pool: "engines"
relevance_score: 10
lineage: work-stealing-schedulers
cites:
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    arxiv: null
    doi: "10.1145/324133.324234"
  - title: "Cilk: An Efficient Multithreaded Runtime System"
    url: "https://doi.org/10.1145/209936.209958"
    year: 1995
    arxiv: null
    doi: "10.1145/209936.209958"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    arxiv: null
    doi: "10.1145/277650.277725"
see:
  - "200-scheduling-multithreaded-computations-by-work-stealing"
  - "206-a-lock-free-work-stealing-algorithm-for-bulk-operations"
  - "105-job-system-and-fiber-architecture-naughty-dog"
  - "1491-nblfq-a-lock-free-mpmc-queue-optimized-for-low-contention"
---

# Libfork: Portable Continuation-Stealing With Stackless Coroutines

## One-sentence takeaway

C++20 stackless coroutines plus user-space segmented stacks make portable continuation-stealing fork-join practical — lock-free libfork beats OpenMP ~7.2× and TBB ~2.7× on average while using far less memory.

## Why it matters here

Anoptic’s CPU job system (RTS/4X sim ticks, ano systems, GRID COMMAND AI) still sits on work-stealing/fiber lore (200/206/105) plus NBLFQ queues (1491). Continuation-stealing (steal the parent continuation, not only the child) is the memory-optimal fork-join model Naughty Dog fibers approximate; libfork shows you can get it in portable C++20 without a custom compiler. Ship geometric segmented stacks plus a NUMA-aware scheduler for Anoptic workers this week instead of another child-stealing OpenMP/TBB port.

## Key ideas

- **Fully-strict fork-join.** Nested parallelism where a parent waits for its children; the Cilk-style contract Blumofe–Leiserson (200) proved, now as a C++20 library rather than a compiler.
- **Continuation vs child stealing.** Thieves steal the *parent continuation* (the rest of the fork), not only spawned children. That is the memory-optimal model Cilk-5 implemented with cactus stacks and that Naughty Dog fibers (105) approximate in an engine; TBB-style child stealing is the portable fallback this paper is trying to retire.
- **C++20 coroutines as suspend/resume frames.** Stackless coroutine frames are the suspend points; the runtime is lock-free. You do not get a custom Cilk compiler — you get ISO C++.
- **Geometric segmented user-space stacks.** Growable segments instead of a giant per-worker stack or a cactus-stack compiler. The empirical claim: **7.2×** vs libomp at **10×** less memory, **2.7×** vs TBB at **6.2×** less memory (averages from the paper).
- **NUMA-aware scheduler.** When parallelism is high, NUMA optimizations match busy-wait schedulers rather than leaving workers hopping sockets.

## Caveats

C++20 coroutine requirement. Stackless means you cannot suspend through ordinary nested C calls — call chains that yield must be coroutine-aware, which is a real tax on a C Anoptic core that still calls into C libraries. HPC microbenchmarks are not game-frame tail latency. Not a remint of 200 / 206 / 105 / 1491.

## Links

- arXiv abs: https://arxiv.org/abs/2402.18480
- PDF: https://arxiv.org/pdf/2402.18480
- DOI: https://doi.org/10.1109/tpds.2025.3543442
- Code: https://github.com/ConorWilliams/libfork
