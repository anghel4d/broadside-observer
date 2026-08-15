---
title: "Near Optimal Hierarchical Pathfinding (HPA*)"
authors:
  - "Adi Botea"
  - "Martin Müller"
  - "Jonathan Schaeffer"
year: 2004
venue: "Journal of Game Development"
arxiv: null
doi: null
source: "https://webdocs.cs.ualberta.ca/~jonathan/PREVIOUS/Grad/Papers/jogd.pdf"
topics:
  - pathfinding
  - hpa
seed_rank: 294
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: pathfinding
cites:
  - title: "A Formal Basis for the Heuristic Determination of Minimum Cost Paths"
    url: "https://doi.org/10.1109/TSSC.1968.300136"
    year: 1968
    arxiv: null
    doi: "10.1109/TSSC.1968.300136"
  - title: "Online Graph Pruning for Pathfinding on Grid Maps"
    url: "https://doi.org/10.1609/aaai.v25i1.7994"
    year: 2011
    arxiv: null
    doi: "10.1609/aaai.v25i1.7994"
  - title: "Subgoal Graphs for Optimal Pathfinding"
    url: "https://doi.org/10.1609/socs.v6i1.18355"
    year: 2015
    arxiv: null
    doi: "10.1609/socs.v6i1.18355"
  - title: "Recast Navigation / Detour"
    url: "https://github.com/recastnavigation/recastnavigation"
    year: 2009
    arxiv: null
    doi: null
see:
  - "205-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
  - "196-online-graph-pruning-for-pathfinding-on-grid-maps"
  - "332-subgoal-graphs-for-optimal-pathfinding"
  - "281-recast-navigation-detour"
---

# Near Optimal Hierarchical Pathfinding (HPA*)

## One-sentence takeaway

HPA* pre-partitions a grid into clusters, builds an abstract graph of inter-cluster entrances, searches that graph, then refines each abstract edge locally — near-optimal paths at a fraction of flat A* cost.

## Why it matters here

GRID COMMAND's strategic layer wants this: one abstract search for the army-level route, cheap local refinement per unit. Recast tiles are the navmesh cousin of HPA* clusters.

## Key ideas

- Cluster the map (typically square blocks). Border cells that touch a neighboring cluster become entrances; precompute intra-cluster distances between a cluster's own entrances.
- Online search: insert start and goal into the abstract graph, A* on that graph, then replace each abstract edge with the cached (or on-demand) low-level path.
- Hierarchical depth is tunable; more levels trade optimality for speed. After smoothing, paths stay within about 1% of optimal while search is up to 10× faster than a well-tuned A* on Baldur's Gate maps.
- Dynamic worlds only invalidate the clusters that changed, not the whole abstract graph. The abstract path of cluster crossings can be refined lazily so a unit can start moving before the whole polyline exists.
- Journal of Game Development 1(1):7–28, 2004. The previously listed JAIR DOI 10.1613/jair.1423 is a different paper.

## Caveats

## Links

- Author PDF: https://webdocs.cs.ualberta.ca/~jonathan/PREVIOUS/Grad/Papers/jogd.pdf
