---
title: "The Structure of the 'THE'-Multiprogramming System"
authors:
  - "Edsger W. Dijkstra"
year: 1968
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/363095.363143"
source: "https://doi.org/10.1145/363095.363143"
topics:
  - operating-systems
  - layers
  - dijkstra
  - synchronization
seed_rank: 586
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "Solution of a Problem in Concurrent Programming Control"
    url: "https://doi.org/10.1145/365559.365617"
    year: 1965
    arxiv: null
    doi: "10.1145/365559.365617"
  - title: "Cooperating Sequential Processes"
    url: "https://www.cs.utexas.edu/users/EWD/ewd01xx/EWD123.PDF"
    year: 1968
    arxiv: null
    doi: null
see:
  - "587-solution-of-a-problem-in-concurrent-programming-control"
  - "588-cooperating-sequential-processes"
---

# The Structure of the 'THE'-Multiprogramming System

## One-sentence takeaway

THE is a layered multiprogramming OS whose semaphores and hierarchical abstractions make concurrency intellectually manageable.

## Why it matters here

Engine and agent runtimes that stack "above" synchronization primitives are THE's architecture: prove each layer assuming the one below.

## Key ideas

- Six layers, from processor allocation up through user programs; each layer is a virtual machine for the next.
- Semaphores (`P`/`V`) synchronize cooperating sequential processes without busy waiting as the design primitive.
- Harmonious cooperation and deadlock avoidance are design obligations, not afterthoughts.
- The paper is an experience report on the Eindhoven THE system, not a toy specification.
- CACM May 1968; pairs with the 1965 mutex note and the EWD123 monograph.

## Caveats

## Links

- DOI: [10.1145/363095.363143](https://doi.org/10.1145/363095.363143)
- URL: https://doi.org/10.1145/363095.363143
