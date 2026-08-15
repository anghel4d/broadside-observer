---
title: "Solution of a Problem in Concurrent Programming Control"
authors:
  - "Edsger W. Dijkstra"
year: 1965
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/365559.365617"
source: "https://doi.org/10.1145/365559.365617"
topics:
  - mutual-exclusion
  - concurrency
  - dijkstra
  - dekker
seed_rank: 587
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "The Structure of the 'THE'-Multiprogramming System"
    url: "https://doi.org/10.1145/363095.363143"
    year: 1968
    arxiv: null
    doi: "10.1145/363095.363143"
  - title: "Cooperating Sequential Processes"
    url: "https://www.cs.utexas.edu/users/EWD/ewd01xx/EWD123.PDF"
    year: 1968
    arxiv: null
    doi: null
see:
  - "586-the-structure-of-the-the-multiprogramming-system"
  - "588-cooperating-sequential-processes"
---

# Solution of a Problem in Concurrent Programming Control

## One-sentence takeaway

Dijkstra publishes a software mutual-exclusion algorithm for N processes that uses only atomic read/write of shared memory.

## Why it matters here

Critical sections in the engine and in agent workers are this problem. The 1965 CACM note is the problem statement the field still uses.

## Key ideas

- N sequential processes must never be in a critical section together, must not deadlock, and must not require a central scheduler.
- The solution uses per-process flags and a turn variable; it generalizes Dekker's two-process algorithm.
- Only atomic load and store are assumed — no test-and-set yet.
- The note is one page (CACM 8(9):569) and immediately became the standard reference.
- Semaphores in EWD123 / THE are the higher-level primitive this combinatorial solution motivates.

## Caveats

## Links

- DOI: [10.1145/365559.365617](https://doi.org/10.1145/365559.365617)
- URL: https://doi.org/10.1145/365559.365617
