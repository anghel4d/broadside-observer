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
seed_rank: 701
seed_batch: "lineage-shallow-2026-08-13"
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
  - title: "Improving Jump Point Search"
    url: "https://ojs.aaai.org/index.php/ICAPS/article/view/13620"
    year: 2014
    arxiv: null
    doi: null
see:
  - "253-online-graph-pruning-for-pathfinding-on-grid-maps"
  - "342-improving-jump-point-search"
---
# JPS+: An Extreme A* Speed Optimization for Static Uniform Cost Grids

## One-sentence takeaway

Precomputed jump/wall distances turn JPS into a near-constant-touch optimal grid search — often ~100x A* on open maps.

## Why it matters here

GRID COMMAND unit pathing on large static grids needs preprocess-once, query-cheap optimal search.

## Key ideas

- Store per-edge distances to next jump point/wall (O(n) memory).
- Eliminates online recursive jumping from classic JPS.
- Orthogonal to goal bounding; often combined.
- Needs mostly-static uniform-cost grids.

## Caveats

- Preprocess invalidation matters for destructible terrain.
- Diagonal/octile rules must match runtime topology.
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

- URL: https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter14_JPS_Plus_An_Extreme_A_Star_Speed_Optimization_for_Static_Uniform_Cost_Grids.pdf
