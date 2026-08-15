---
title: "Cooperating Sequential Processes"
authors:
  - "Edsger W. Dijkstra"
year: 1968
venue: "Technological University Eindhoven report (later in Genuys, Programming Languages)"
arxiv: null
doi: null
source: "https://www.cs.utexas.edu/users/EWD/ewd01xx/EWD123.PDF"
topics:
  - semaphores
  - concurrency
  - dijkstra
seed_rank: 588
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
  - title: "Solution of a Problem in Concurrent Programming Control"
    url: "https://doi.org/10.1145/365559.365617"
    year: 1965
    arxiv: null
    doi: "10.1145/365559.365617"
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/359576.359585"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359585"
see:
  - "586-the-structure-of-the-the-multiprogramming-system"
  - "587-solution-of-a-problem-in-concurrent-programming-control"
  - "046-communicating-sequential-processes"
---

# Cooperating Sequential Processes

## One-sentence takeaway

EWD123 introduces `P`/`V` semaphores and works the classic synchronization problems — this is Dijkstra's cooperating-processes monograph, not Hoare's CSP.

## Why it matters here

Engine queues, worker pools, and renderer/simulation handoff are producer–consumer. Use this card for semaphores; use card 046 for Hoare's later calculus.

## Key ideas

- A semaphore is an integer with atomic `P` (wait/down) and `V` (signal/up); mutual exclusion and scheduling are both expressible.
- Producer–consumer with a bounded buffer is the first extended example.
- Dining philosophers, sleeping barber, and related hazards show deadlock and starvation as design errors.
- The 1965/68 Eindhoven notes circulated as EWD123 and were printed in Genuys (ed.), *Programming Languages* (Academic Press, 1968).
- Name collision with Hoare 1978 is historical; the two artifacts solve different problems.

## Caveats

## Links

- URL: https://www.cs.utexas.edu/users/EWD/ewd01xx/EWD123.PDF
