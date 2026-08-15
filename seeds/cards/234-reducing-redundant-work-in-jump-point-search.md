---
title: "Reducing Redundant Work in Jump Point Search"
authors:
  - "Shizhe Zhao"
  - "Daniel Harabor"
  - "Peter J. Stuckey"
year: 2023
venue: "arXiv:cs.RO"
arxiv: "2306.15928"
doi: null
source: "https://arxiv.org/abs/2306.15928"
topics:
  - pathfinding
seed_rank: 234
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
  - title: "Improving Jump Point Search"
    url: "https://ojs.aaai.org/index.php/ICAPS/article/view/13620"
    year: 2014
    arxiv: null
    doi: null
see:
  - "196-online-graph-pruning-for-pathfinding-on-grid-maps"
  - "266-improving-jump-point-search"
---

# Reducing Redundant Work in Jump Point Search

## One-sentence takeaway

Constrained JPS (CJPS) is an online fix for two JPS pathologies — repeated successor scans of the same map region, and expansion of suboptimal nodes — and is up to 7× faster on large game maps and 14× on crafted worst cases.

## Why it matters here

GRID COMMAND maps change as buildings and units appear; a purely online JPS that does not rescan the same empty rooms is the pathfinder you want when the grid is not a static bake.

## Key ideas

- Stock JPS can scan the same corridor many times looking for successors, and can generate nodes that are already known to be suboptimal.
- Both pathologies show up on real game maps, not only on synthetic traps.
- CJPS stays online: no offline jump-point precomputation, so dynamic obstacles are allowed.
- Overheads are low enough that CJPS is often faster than JPS even when the pathologies are mild.
- Peak gains: 7× on large game maps, 14× on pathological instances.

## Caveats

## Links

- arXiv: [2306.15928](https://arxiv.org/abs/2306.15928)
- PDF: https://arxiv.org/pdf/2306.15928
