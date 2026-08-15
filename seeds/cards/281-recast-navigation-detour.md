---
title: "Recast Navigation / Detour"
authors:
  - "Mikko Mononen"
year: 2009
venue: "GitHub / GDC"
arxiv: null
doi: null
source: "https://github.com/recastnavigation/recastnavigation"
topics:
  - navmesh
seed_rank: 281
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: pathfinding
cites:
  - title: "Simplified 3D Movement and Pathfinding Using Navigation Meshes"
    url: "https://www.gamedevs.org/uploads/simplified-3d-movement-and-pathfinding-using-navigation-meshes.pdf"
    year: 2000
    arxiv: null
    doi: null
  - title: "Near Optimal Hierarchical Path-Finding"
    url: "https://webdocs.cs.ualberta.ca/~jonathan/PREVIOUS/Grad/Papers/jogd.pdf"
    year: 2004
    arxiv: null
    doi: null
  - title: "Understanding Goal-Based Vector Field / Flow Field Pathfinding"
    url: "https://web.archive.org/web/20201111190441/https://gamedevelopment.tutsplus.com/tutorials/understanding-goal-based-vector-field-pathfinding--gamedev-9007"
    year: 2013
    arxiv: null
    doi: null
see:
  - "302-simplified-3d-movement-and-pathfinding-using-navigation-mesh"
  - "294-near-optimal-hierarchical-pathfinding-hpa"
  - "279-understanding-goal-based-vector-field-flow-field-pathfinding"
---

# Recast Navigation / Detour

## One-sentence takeaway

Recast voxelizes triangle soup into a walkable heightfield, watershed-partitions it into a navmesh, and Detour A*-searches that mesh with string-pulling, off-mesh links, and crowd steering.

## Why it matters here

This is the industry-standard navmesh toolkit GRID COMMAND should wrap, not reimplement. Recast is bake; Detour is runtime query — keep that split.

## Key ideas

- Recast: rasterize input geometry to a heightfield, filter ledges and low spans, erode by agent radius, then watershed / monotone partition into convex polygons.
- Detour: tiled navmesh, A* on the dual graph, funnel / string-pull to a corner-optimal polyline, off-mesh connections for jumps and teleports.
- Crowd module adds local avoidance (ORCA-flavored) on top of the mesh so many agents share one navmesh.
- Tiling lets you stream and rebuild regions without rebaking the world.
- Started by Mikko Mononen around 2009; now the `recastnavigation` org. Used by Unity, Unreal, and countless custom engines.

## Caveats

## Links

- GitHub: https://github.com/recastnavigation/recastnavigation
