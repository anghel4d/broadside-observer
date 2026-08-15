---
title: Efficient Algorithms for Graph Manipulation
authors:
  - John Hopcroft
  - Robert Tarjan
year: 1973
venue: Communications of the ACM
arxiv: null
doi: 10.1145/362248.362272
source: "https://doi.org/10.1145/362248.362272"
topics:
  - graph-algorithms
  - hopcroft-tarjan
seed_rank: 749
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
  - title: Depth-First Search and Linear Graph Algorithms
    url: "https://doi.org/10.1137/0201010"
    year: 1972
    arxiv: null
    doi: 10.1137/0201010
see:
  - "748-depth-first-search-and-linear-graph-algorithms"
---

# Efficient Algorithms for Graph Manipulation

## One-sentence takeaway

Hopcroft–Tarjan give carefully engineered linear-time algorithms for finding the connected, biconnected, and triconnected components of a graph, written as a systems paper.

## Why it matters here

The companion-era engineering note to Tarjan 1972: stack discipline, adjacency-list representation, and the component structure a graph library actually ships. Planarity testing has a long subsequent literature; this card is the manipulation core.

## Key ideas

- Represent the graph so DFS, low-link, and stack operations are \(O(V+E)\).
- Connected / biconnected / triconnected components are computed by the same walk with more bookkeeping.
- The paper is explicitly about implementing the algorithms, not only proving them.
- Tarjan’s 1972 SIAM paper is the cited linear-time DFS theory.
- CACM 16(6), June 1973, pp. 372–378.

## Caveats

## Links

- DOI: [10.1145/362248.362272](https://doi.org/10.1145/362248.362272)
- ACM: https://dl.acm.org/doi/10.1145/362248.362272
