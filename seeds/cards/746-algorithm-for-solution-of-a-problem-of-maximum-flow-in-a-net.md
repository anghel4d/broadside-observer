---
title: Algorithm for Solution of a Problem of Maximum Flow in a Network with Power Estimation
authors:
- Y. Dinic
year: 1970
venue: Soviet Math. Doklady
arxiv: null
doi: null
source: "https://en.wikipedia.org/wiki/Dinic%27s_algorithm"
topics:
- max-flow
- dinic
seed_rank: 746
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: Maximal Flow Through a Network
  url: "https://doi.org/10.4153/CJM-1956-045-5"
  year: 1956
  arxiv: null
  doi: 10.4153/CJM-1956-045-5
- title: Theoretical Improvements in Algorithmic Efficiency for Network Flow Problems
  url: "https://doi.org/10.1145/321694.321699"
  year: 1972
  arxiv: null
  doi: 10.1145/321694.321699
- title: A New Approach to the Maximum-Flow Problem
  url: "https://doi.org/10.1145/48014.61051"
  year: 1988
  arxiv: null
  doi: 10.1145/48014.61051
see:
- "744-maximal-flow-through-a-network"
- "745-theoretical-improvements-in-algorithmic-efficiency-for-netwo"
- "747-a-new-approach-to-the-maximum-flow-problem"
---

# Algorithm for Solution of a Problem of Maximum Flow in a Network with Power Estimation

## One-sentence takeaway

Dinic’s blocking-flow algorithm — layered networks and faster max-flow.

## Why it matters here

Practical step up from Edmonds–Karp for contest and production flow code.

## Key ideas

- Level graph via BFS.
- Blocking flows in DAG layers.
- O(V²E) classic bound.
- Ancestor of many modern flow algorithms.

## Caveats

- Original Russian publication.
- Push-relabel may win on some topologies.

## Links

- URL: https://en.wikipedia.org/wiki/Dinic%27s_algorithm
