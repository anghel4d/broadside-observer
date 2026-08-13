---
title: "Monitors: An Operating System Structuring Concept"
authors:
  - "C. A. R. Hoare"
year: 1974
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/355620.361161"
source: "https://doi.org/10.1145/355620.361161"
topics:
  - concurrency
  - monitors
  - synchronization
  - hoare
seed_rank: 1106
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "Introduction and Overview of the Multics System"
    url: "https://multicians.org/fjcc1.html"
    year: 1965
    arxiv: null
    doi: null
    card: "1105-introduction-and-overview-of-the-multics-system"
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/359576.359585"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359585"
    card: "047-communicating-sequential-processes"
  - title: "A New Solution of Dijkstra's Concurrent Programming Problem"
    url: "https://doi.org/10.1145/361082.361093"
    year: 1974
    arxiv: null
    doi: "10.1145/361082.361093"
    card: "1124-a-new-solution-of-dijkstra-s-concurrent-programming-problem"
  - title: "Myths About the Mutual Exclusion Problem"
    url: "https://doi.org/10.1016/0020-0190(81)90133-8"
    year: 1981
    arxiv: null
    doi: "10.1016/0020-0190(81)90133-8"
    card: "1125-myths-about-the-mutual-exclusion-problem"
---

# Monitors: An Operating System Structuring Concept

## One-sentence takeaway

Monitors package mutual exclusion with condition variables—the structuring concept behind Mesa, Java synchronized, and many runtimes.

## Why it matters here

Still the readable shared-memory concurrency model before lock-free queues (concurrent-data-structures lineage).

## Key ideas

- Monitor as module with implicit mutual exclusion.
- Condition variables: wait/signal discipline.
- Structured alternative to raw semaphores.
- Bridge from Dijkstra THE to modern language runtimes.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/355620.361161](https://doi.org/10.1145/355620.361161)
- URL: https://doi.org/10.1145/355620.361161
