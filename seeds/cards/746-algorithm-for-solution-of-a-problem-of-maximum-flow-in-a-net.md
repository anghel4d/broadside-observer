---
title: Algorithm for Solution of a Problem of Maximum Flow in a Network with Power Estimation
authors:
  - E. A. Dinic
year: 1970
venue: Soviet Math. Doklady
arxiv: null
doi: null
source: "https://www.cs.bgu.ac.il/~dinitz/Papers/D70.pdf"
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
see:
  - "744-maximal-flow-through-a-network"
---

# Algorithm for Solution of a Problem of Maximum Flow in a Network with Power Estimation

## One-sentence takeaway

Dinic’s algorithm computes a blocking flow in the residual level graph, then rebuilds layers, for an \(O(V^2 E)\) max-flow with a polynomial “power” estimate.

## Why it matters here

The practical step up from Edmonds–Karp for contest and production flow code: fewer phases, unit-capacity specializations that are even faster. Push–relabel may win on some topologies; this is the layered-network method.

## Key ideas

- BFS builds a level graph from the source in the residual network.
- A blocking flow saturates every source–sink path in that DAG; then the level graph is rebuilt.
- There are \(O(V)\) phases; a blocking flow is \(O(VE)\), hence \(O(V^2 E)\) classically.
- Original Russian: Dokl. Akad. Nauk SSSR 194(4), 1970, pp. 754–757; English: *Soviet Math. Dokl.* 11 (1970), pp. 1277–1280.
- Author’s later exposition: “Dinitz’ Algorithm: The Original Version and Even’s Version” (2006).

## Caveats

## Links

- Author PDF: https://www.cs.bgu.ac.il/~dinitz/Papers/D70.pdf
- Author page: https://www.cs.bgu.ac.il/~dinitz/pub.html
- Math-Net (Russian): https://www.mathnet.ru/eng/dan35701
