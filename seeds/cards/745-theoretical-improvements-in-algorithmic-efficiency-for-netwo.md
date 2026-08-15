---
title: Theoretical Improvements in Algorithmic Efficiency for Network Flow Problems
authors:
  - Jack Edmonds
  - Richard M. Karp
year: 1972
venue: JACM
arxiv: null
doi: 10.1145/321694.321699
source: "https://doi.org/10.1145/321694.321699"
topics:
  - max-flow
  - edmonds-karp
seed_rank: 745
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
  - title: Maximal Flow Through a Network
    url: "https://doi.org/10.4153/CJM-1956-045-5"
    year: 1956
    arxiv: null
    doi: 10.4153/CJM-1956-045-5
see:
  - "744-maximal-flow-through-a-network"
---

# Theoretical Improvements in Algorithmic Efficiency for Network Flow Problems

## One-sentence takeaway

Always augment along a shortest residual path (BFS) and Ford–Fulkerson becomes polynomial: \(O(VE^2)\).

## Why it matters here

The first max-flow algorithm you should teach or ship when “just augment” is too vague. Dinic’s blocking flows and Goldberg–Tarjan push–relabel are faster successors; this is the polynomial instantiation of Ford–Fulkerson.

## Key ideas

- Residual shortest paths (hop distance) never decrease; each edge can be critical only \(O(V)\) times.
- The resulting bound is \(O(VE^2)\) augmentations-accounting, independent of capacity magnitudes.
- Capacity scaling is the paper’s other polynomial method for the same problems.
- Ford–Fulkerson 1956 is the cited non-polynomial parent; Dinic 1970 is the layered-network cousin (independent, slightly earlier in the USSR).
- JACM 19(2), April 1972, pp. 248–264.

## Caveats

## Links

- DOI: [10.1145/321694.321699](https://doi.org/10.1145/321694.321699)
- ACM: https://dl.acm.org/doi/10.1145/321694.321699
