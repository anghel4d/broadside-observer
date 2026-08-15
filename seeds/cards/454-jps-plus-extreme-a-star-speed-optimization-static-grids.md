---
title: "JPS+: An Extreme A* Speed Optimization for Static Uniform Cost Grids"
authors:
  - "Steve Rabin"
  - "Fernando Silva"
year: 2015
venue: "Game AI Pro 2"
arxiv: null
doi: null
source: "https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter14_JPS_Plus_An_Extreme_A_Star_Speed_Optimization_for_Static_Uniform_Cost_Grids.pdf"
topics:
  - pathfinding
  - jps
seed_rank: 454
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: pathfinding
cites:
  - title: "Online Graph Pruning for Pathfinding on Grid Maps"
    url: "https://doi.org/10.1609/aaai.v25i1.7994"
    year: 2011
    doi: "10.1609/aaai.v25i1.7994"
  - title: "Improving Jump Point Search"
    url: "https://ojs.aaai.org/index.php/ICAPS/article/view/13620"
    year: 2014
see:
  - "196-online-graph-pruning-for-pathfinding-on-grid-maps"
  - "266-improving-jump-point-search"
---

# JPS+: An Extreme A* Speed Optimization for Static Uniform Cost Grids

## One-sentence takeaway

Rabin and Silva precompute signed distances from every grid cell to the next jump point or wall in eight directions, so runtime JPS+ never recursively jumps and only expands those pre-labeled nodes.

## Why it matters here

GRID COMMAND unit pathing on large static maps wants preprocess-once, query-cheap optimal search; this chapter is the concrete burn-in that turns Harabor's online JPS into that query.

## Key ideas

- Online JPS already prunes equivalent grid paths and only opens jump points; JPS+ stores the jump/wall distances so the recursive scan disappears.
- Forced neighbors mark primary jump points; cardinal then diagonal sweeps fill positive distances to the next relevant jump and non-positive distances to walls.
- On a 40×40 open example they report A* at 180 ns, JPS at 15 ns, and JPS+ at 1.55 ns (~116× A*) while remaining optimal.
- Memory is one distance per cell per direction; the map must stay uniform-cost and mostly static or the table is invalid.

## Caveats

## Links

- PDF: https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter14_JPS_Plus_An_Extreme_A_Star_Speed_Optimization_for_Static_Uniform_Cost_Grids.pdf
