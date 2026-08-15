---
title: A New Approach to the Maximum-Flow Problem
authors:
  - Andrew V. Goldberg
  - Robert E. Tarjan
year: 1988
venue: JACM
arxiv: null
doi: 10.1145/48014.61051
source: "https://doi.org/10.1145/48014.61051"
topics:
  - max-flow
  - push-relabel
seed_rank: 747
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
  - title: Depth-First Search and Linear Graph Algorithms
    url: "https://doi.org/10.1137/0201010"
    year: 1972
    arxiv: null
    doi: 10.1137/0201010
see:
  - "744-maximal-flow-through-a-network"
  - "745-theoretical-improvements-in-algorithmic-efficiency-for-netwo"
  - "748-depth-first-search-and-linear-graph-algorithms"
---

# A New Approach to the Maximum-Flow Problem

## One-sentence takeaway

Push–relabel works with preflows and per-vertex excess: push residual flow to a lower-labeled neighbor, or relabel a vertex that cannot push, instead of maintaining a single augmenting path.

## Why it matters here

Often the engineering default for large max-flow instances (matching, circulation, cut segmentation). Highest-label and gap heuristics matter as much as the \(O(V^2 E)\) / \(O(V^3)\) bounds; Dinic may still win on unit-capacity graphs.

## Key ideas

- A preflow may leave excess at intermediate vertices; the algorithm locally discharges excess until only the sink (and source) have it.
- Each vertex carries a distance label that is a valid lower bound on residual distance to the sink; relabel raises that bound.
- FIFO, highest-label, and gap heuristics turn the method into the practical champion of the 1990s.
- Ford–Fulkerson residual graphs and Edmonds–Karp polynomial path methods are the cited baseline; the paper is JACM 35(4), 1988, pp. 921–940 (conference version STOC 1986).
- Later almost-linear algorithms still use the preflow/label vocabulary.

## Caveats

## Links

- DOI: [10.1145/48014.61051](https://doi.org/10.1145/48014.61051)
- ACM: https://dl.acm.org/doi/10.1145/48014.61051
