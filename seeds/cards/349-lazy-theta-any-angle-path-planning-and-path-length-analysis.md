---
title: "Lazy Theta*: Any-Angle Path Planning and Path Length Analysis"
authors:
  - "Alex Nash"
  - "Sven Koenig"
  - "Craig Tovey"
year: 2010
venue: "AAAI"
arxiv: null
doi: "10.1609/aaai.v24i1.7566"
source: "https://ojs.aaai.org/index.php/AAAI/article/view/7566"
topics:
  - pathfinding
seed_rank: 349
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: pathfinding
cites:
  - title: "Theta*: Any-Angle Path Planning on Grids"
    url: "https://ojs.aaai.org/index.php/AIIDE/article/view/18782"
    year: 2007
    arxiv: null
    doi: null
  - title: "Online Graph Pruning for Pathfinding on Grid Maps"
    url: "https://doi.org/10.1609/aaai.v25i1.7994"
    year: 2011
    arxiv: null
    doi: "10.1609/aaai.v25i1.7994"
  - title: "Field D*: An Interpolation-Based Path Planner"
    url: "https://doi.org/10.1002/rob.20147"
    year: 2006
    arxiv: null
    doi: "10.1002/rob.20147"
see:
  - "355-theta-any-angle-path-planning-on-grids"
  - "196-online-graph-pruning-for-pathfinding-on-grid-maps"
  - "468-field-d-an-interpolation-based-path-planner"
---

# Lazy Theta*: Any-Angle Path Planning and Path Length Analysis

## One-sentence takeaway

Lazy Theta* assumes a vertex’s parent is visible, and only runs the line-of-sight check when that vertex is expanded, cutting LOS tests by about 10× versus Theta* on 26-neighbor 3D grids with no measured path-length penalty.

## Why it matters here

GRID COMMAND 3D nav (flyers, multi-level interiors) cannot afford a LOS query on every neighbor; this AAAI 2010 variant is the any-angle search that stays cheap enough to run online.

## Key ideas

- Grid A* paths are up to ~8% longer than true shortest paths in 2D (8-neighbor) and ~13% longer in 3D (26-neighbor). That gap is why any-angle methods exist.
- Theta* considers a neighbor’s parent as the grandparent when LOS exists, producing heading changes only at blocking corners.
- Lazy Theta* postpones that LOS test: it sets the parent speculatively, then when expanding `s` it verifies LOS(parent(s), s) and repairs parent/g if blocked.
- Empirically: an order of magnitude fewer LOS checks, more expansions, same path length as Theta* in the reported 3D experiments. Not a proof of continuous-space optimality.
- AAAI 2010, DOI 10.1609/aaai.v24i1.7566 (the ocs/AAAI10/1930 URL is the old OCS landing).

## Caveats

## Links

- DOI: [10.1609/aaai.v24i1.7566](https://doi.org/10.1609/aaai.v24i1.7566)
- AAAI: https://ojs.aaai.org/index.php/AAAI/article/view/7566
