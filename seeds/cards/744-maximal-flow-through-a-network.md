---
title: Maximal Flow Through a Network
authors:
  - "L. R. Ford, Jr."
  - D. R. Fulkerson
year: 1956
venue: Canadian Journal of Mathematics
arxiv: null
doi: 10.4153/CJM-1956-045-5
source: "https://doi.org/10.4153/CJM-1956-045-5"
topics:
  - max-flow
  - ford-fulkerson
seed_rank: 744
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# Maximal Flow Through a Network

## One-sentence takeaway

Maximum flow equals minimum cut, and any flow can be augmented along a residual path until no such path remains.

## Why it matters here

Bandwidth, matching, circulation, and cut-based segmentation in Anoptic maps are flow problems. Ford–Fulkerson is the definition of residual graphs; Edmonds–Karp, Dinic, and push–relabel are later ways to choose the next path.

## Key ideas

- A feasible flow on capacitated arcs has a value; a cut’s capacity is an upper bound on that value.
- The max-flow min-cut theorem: the two quantities are equal, witnessed by a saturated cut.
- An augmenting path in the residual network strictly increases flow; integrality of capacities yields integral flows.
- Pathological path choices need not terminate (or can be exponential); shortest/capacity-scaling specializations come later.
- Canad. J. Math. 8, 1956, pp. 399–404.

## Caveats

## Links

- DOI: [10.4153/CJM-1956-045-5](https://doi.org/10.4153/CJM-1956-045-5)
- Cambridge: https://www.cambridge.org/core/journals/canadian-journal-of-mathematics/article/maximal-flow-through-a-network/5D6E16247C586B9AA9FB67DB59AA986D
