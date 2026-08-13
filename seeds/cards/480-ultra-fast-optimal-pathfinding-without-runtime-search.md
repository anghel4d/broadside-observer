---
title: Ultra-Fast Optimal Pathfinding without Runtime Search
authors:
- Adi Botea
year: 2011
venue: AIIDE
arxiv: null
doi: 10.1609/aiide.v7i1.12443
source: https://doi.org/10.1609/aiide.v7i1.12443
topics:
- pathfinding
- cpd
seed_rank: 480
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 9
lineage: pathfinding
cites:
- title: Online Graph Pruning for Pathfinding on Grid Maps
  url: https://www.aaai.org/ocs/index.php/AAAI/AAAI11/paper/view/3761
  year: 2011
  arxiv: null
  doi: null
- title: 'JPS+: An Extreme A* Speed Optimization for Static Uniform Cost Grids'
  url: https://www.gdcvault.com/
  year: 2015
  arxiv: null
  doi: null
- title: A Formal Basis for the Heuristic Determination of Minimum Cost Paths
  url: https://doi.org/10.1109/TSS.1968.253136
  year: 1968
  arxiv: null
  doi: null
see:
- "196-online-graph-pruning-for-pathfinding-on-grid-maps"
- "454-jps-plus-extreme-a-star-speed-optimization-static-grids"
- "205-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
---

# Ultra-Fast Optimal Pathfinding without Runtime Search

## One-sentence takeaway

Compressed Path Databases answer optimal grid moves by lookup instead of runtime A*/JPS search.

## Why it matters here

Static GRID COMMAND maps can trade preprocess memory for tiny first-move lag across many units.

## Key ideas

- Precompute all-pairs first moves; compress with rectangle/run-length encodings.
- Runtime extracts optimal next step without expanding open lists.
- Complements JPS when maps are mostly static.
- First-move lag independent of path length.

## Caveats

- Dynamic terrain invalidates CPDs; hybrid with JPS/HPA* needed.
- Memory/preprocess dominate for huge rebuilt maps.

## Links

- DOI: [10.1609/aiide.v7i1.12443](https://doi.org/10.1609/aiide.v7i1.12443)
- URL: https://doi.org/10.1609/aiide.v7i1.12443
