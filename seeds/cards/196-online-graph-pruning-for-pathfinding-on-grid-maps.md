---
title: Online Graph Pruning for Pathfinding on Grid Maps
authors:
- Daniel Harabor
- Alban Grastien
year: 2011
venue: AAAI
arxiv: null
doi: 10.1609/aaai.v25i1.7994
source: https://doi.org/10.1609/aaai.v25i1.7994
topics:
- pathfinding
- jps
seed_rank: 196
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 10
lineage: pathfinding
cites:
  - title: A Formal Basis for the Heuristic Determination of Minimum Cost Paths
    url: https://doi.org/10.1109/TSSC.1968.300136
    year: 1968
    arxiv: null
    doi: 10.1109/TSSC.1968.300136
  - title: Near Optimal Hierarchical Pathfinding (HPA*)
    url: https://doi.org/10.1613/jair.1423
    year: 2004
    arxiv: null
    doi: 10.1613/jair.1423
see:
  - "205-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
  - "294-near-optimal-hierarchical-pathfinding-hpa"
---

# Online Graph Pruning for Pathfinding on Grid Maps

## One-sentence takeaway

Jump Point Search prunes symmetric shortest-path prefixes on uniform-cost grids so A* expands far fewer nodes while remaining optimal.

## Why it matters here

RTS and GRID COMMAND pathfinding on grid maps is this problem: eight-connected uniform cost, huge open space, many units. JPS is the online prune that makes A* cheap enough without a precomputed nav abstraction.

## Key ideas

- On uniform grids, many shortest paths are symmetric; expanding all of them is wasted work.
- Jump points are turning or forced-neighbour locations; the search jumps over the empty straight-line runs between them.
- The algorithm is still optimally correct for uniform-cost grids because pruned nodes cannot lie on a unique shortest path.
- Search is online and needs no precomputation, unlike some hierarchical grid methods.
- Node expansions drop sharply versus vanilla A* on typical game maps, which is why JPS became the default grid speedup.

## Caveats

## Links

- DOI: [10.1609/aaai.v25i1.7994](https://doi.org/10.1609/aaai.v25i1.7994)
- AAAI: https://ojs.aaai.org/index.php/AAAI/article/view/7994
