---
title: "Understanding Goal-Based Vector Field / Flow Field Pathfinding"
authors:
  - "Sidney Durant"
year: 2013
venue: "Envato Tuts+ Game Development"
arxiv: null
doi: null
source: "https://web.archive.org/web/20201111190441/https://gamedevelopment.tutsplus.com/tutorials/understanding-goal-based-vector-field-pathfinding--gamedev-9007"
topics:
  - pathfinding
  - flowfields
seed_rank: 279
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
  - title: "Near Optimal Hierarchical Path-Finding"
    url: "https://webdocs.cs.ualberta.ca/~jonathan/PREVIOUS/Grad/Papers/jogd.pdf"
    year: 2004
    arxiv: null
    doi: null
  - title: "Continuum Crowds"
    url: "https://doi.org/10.1145/1141911.1141978"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141978"
  - title: "Recast Navigation / Detour"
    url: "https://github.com/recastnavigation/recastnavigation"
    year: 2009
    arxiv: null
    doi: null
see:
  - "205-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
  - "294-near-optimal-hierarchical-pathfinding-hpa"
  - "357-continuum-crowds"
  - "281-recast-navigation-detour"
---

# Understanding Goal-Based Vector Field / Flow Field Pathfinding

## One-sentence takeaway

One Dijkstra / brushfire from the goal builds a heatmap; its gradient is a vector field that every unit reads, so thousands of agents share one path computation instead of running A* each.

## Why it matters here

GRID COMMAND's mass-move order is this algorithm. Cost is paid per destination, not per unit — the right complexity for an RTS.

## Key ideas

- Heatmap: wavefront / BFS from the goal stores path-distance (not Euclidean) on every reachable tile.
- Vector field: per tile, `v.x = left.d − right.d`, `v.y = up.d − down.d`, then normalize; blocked neighbors reuse the current cell's distance.
- Agents just follow `velocity = field(cell) * desired_speed`; steering behaviors can wrap that as a desired velocity.
- Local optima (zero vector where two equal-cost paths cancel) are fixed by seeding four adjacent goal cells and optionally subdividing the grid.
- Tutorial by Sidney Durant, 5 July 2013. Live Tuts+ URL now 301s; Wayback capture is the stable artifact. Author restored from "E. Graham / community".

## Caveats

## Links

- Archived tutorial: https://web.archive.org/web/20201111190441/https://gamedevelopment.tutsplus.com/tutorials/understanding-goal-based-vector-field-pathfinding--gamedev-9007
