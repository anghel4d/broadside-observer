---
title: "Improving Jump Point Search"
authors:
  - "Daniel Harabor"
  - "Alban Grastien"
year: 2014
venue: "ICAPS 2014"
arxiv: null
doi: "10.1609/icaps.v24i1.13633"
source: "https://ojs.aaai.org/index.php/ICAPS/article/view/13633"
topics:
  - pathfinding
  - jps
seed_rank: 266
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: pathfinding
cites:
  - title: "Online Graph Pruning for Pathfinding on Grid Maps"
    url: "https://doi.org/10.1609/aaai.v25i1.7994"
    year: 2011
    arxiv: null
    doi: "10.1609/aaai.v25i1.7994"
  - title: "JPS+: An Extreme A* Speed Optimization for Static Uniform Cost Grids"
    url: "https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter14_JPS_Plus_An_Extreme_A_Star_Speed_Optimization_for_Static_Uniform_Cost_Grids.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "Reducing Redundant Work in Jump Point Search"
    url: "https://arxiv.org/abs/2306.14221"
    year: 2023
    arxiv: "2306.14221"
    doi: null
  - title: "Subgoal Graphs for Optimal Pathfinding"
    url: "https://doi.org/10.1609/socs.v6i1.18355"
    year: 2015
    arxiv: null
    doi: null
see:
  - "196-online-graph-pruning-for-pathfinding-on-grid-maps"
  - "454-jps-plus-extreme-a-star-speed-optimization-static-grids"
  - "234-reducing-redundant-work-in-jump-point-search"
  - "332-subgoal-graphs-for-optimal-pathfinding"
---

# Improving Jump Point Search

## One-sentence takeaway

ICAPS 2014 tightens original JPS with a stronger diagonal-first pruning rule and a target-pruning / JP-first search order that expands far fewer jump points on uniform-cost grids.

## Why it matters here

GRID COMMAND's ground layer is a uniform-cost grid until it isn't. These JPS improvements are the cheap optimal search you run before paying for navmesh or HPA* abstraction.

## Key ideas

- Original JPS (Harabor & Grastien 2011) already skips symmetric grid paths by jumping to forced neighbors.
- This paper's improved pruning identifies more intermediate nodes that cannot lie on a unique optimal path.
- Search can prefer jump points that make progress toward the target, cutting the open list further.
- Still optimal on uniform-cost 8-connected grids; JPS+ later precomputes the jump map on top of this family.
- ICAPS 2014, DOI 10.1609/icaps.v24i1.13633 (not the 13620 id previously listed).

## Caveats

## Links

- ICAPS proceedings: https://ojs.aaai.org/index.php/ICAPS/article/view/13633
- DOI: [10.1609/icaps.v24i1.13633](https://doi.org/10.1609/icaps.v24i1.13633)
