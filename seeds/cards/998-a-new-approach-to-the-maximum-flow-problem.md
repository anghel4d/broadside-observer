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
seed_rank: 998
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
  card: 995-maximal-flow-through-a-network
- title: Algorithm for Solution of a Problem of Maximum Flow in a Network with Power Estimation
  url: "https://en.wikipedia.org/wiki/Dinic%27s_algorithm"
  year: 1970
  arxiv: null
  doi: null
  card: 997-algorithm-for-solution-of-a-problem-of-maximum-flow-in-a-net
---

# A New Approach to the Maximum-Flow Problem

## One-sentence takeaway

Push–relabel (preflow-push) max-flow with strong practical and theoretical performance.

## Why it matters here

Often the engineering default for large max-flow instances.

## Key ideas

- Preflows with excess at vertices.
- Push and relabel operations.
- Highest-label/gap heuristics in practice.
- Influenced later almost-linear algorithms.

## Caveats

- Heuristics matter as much as asymptotics.
- Dinic may win on unit-capacity graphs.

## Links

- DOI: [10.1145/48014.61051](https://doi.org/10.1145/48014.61051)
- URL: https://doi.org/10.1145/48014.61051
