---
title: "Simplified 3D Movement and Pathfinding Using Navigation Meshes"
authors:
  - "Greg Snook"
year: 2000
venue: "Game Programming Gems"
arxiv: null
doi: null
source: "https://gameenginegems.com/gemsdb/article.php?id=92"
topics:
  - navmesh
  - pathfinding
seed_rank: 302
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
  - title: "Recast Navigation / Detour"
    url: "https://github.com/recastnavigation/recastnavigation"
    year: 2009
    arxiv: null
    doi: null
see:
  - "205-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
---

# Simplified 3D Movement and Pathfinding Using Navigation Meshes

## One-sentence takeaway

Snook represents walkable 3D space as a mesh of convex polygons and runs A* on the polygon adjacency graph instead of a dense voxel or waypoint grid.

## Why it matters here

GRID COMMAND and any Anoptic ground unit still need a cheap walkable surface; this chapter is the game-industry source of the navmesh corridor that Recast/Detour later automated.

## Key ideas

- Convex polygons tile the walkable surface so any two points inside one polygon can be connected by a straight segment that stays on the mesh.
- Shared edges become graph arcs; A* searches the polygon graph, which is orders of magnitude smaller than a grid at the same spatial resolution.
- The resulting polygon string is a corridor, not a final trajectory: funnel / string-pulling turns it into a taut path that hugs portal vertices.
- Agents then steer inside the corridor, which keeps them on the surface even when the graph path is coarse.
- The chapter appears as Game Programming Gems 3.6 (Charles River Media, 2000, pp. 288–304) and is the usual citation for “navmeshes in games.”

## Caveats

## Links

- Gems database: https://gameenginegems.com/gemsdb/article.php?id=92
- Book: *Game Programming Gems*, Mark DeLoura (ed.), Charles River Media, 2000
