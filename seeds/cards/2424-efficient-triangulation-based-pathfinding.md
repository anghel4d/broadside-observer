---
title: "Efficient Triangulation-Based Pathfinding"
authors:
  - "Douglas Demyen"
  - "Michael Buro"
year: 2006
venue: "Proceedings of the Twenty-First National Conference on Artificial Intelligence (AAAI-06), pp. 942-947"
arxiv: null
doi: null
source: "https://cdn.aaai.org/AAAI/2006/AAAI06-148.pdf"
topics:
  - pathfinding
  - constrained-delaunay-triangulation
  - map-abstraction
  - rts-ai
seed_rank: 2424
seed_batch: "archive-2026-10-26"
reviewed: "2026-10-26"
pool: "game-ai"
relevance_score: 8
lineage: pathfinding
see:
  - 294-near-optimal-hierarchical-pathfinding-hpa
  - 281-recast-navigation-detour
  - 302-simplified-3d-movement-and-pathfinding-using-navigation-mesh
  - 349-lazy-theta-any-angle-path-planning-and-path-length-analysis
cites:
  - title: "Efficient Triangulation-Based Pathfinding"
    url: "https://cdn.aaai.org/AAAI/2006/AAAI06-148.pdf"
    year: 2006
    arxiv: null
    doi: null
---

# Efficient Triangulation-Based Pathfinding

## One-sentence takeaway

Demyen and Buro search a constrained Delaunay triangulation of the map instead of a grid (TA*), then collapse it into an abstract graph of degree-3 "decision" triangles joined by corridors (TRA*), so that pathfinding reduces to choosing which side of each obstacle to pass; with per-edge width checks for unit radius and a modified funnel algorithm for exact path lengths, both find most paths far faster than grid A* and PRA* on Baldur's Gate and WarCraft III maps.

## Why it matters here

GRID COMMAND needs fast, near-optimal paths for units of different sizes in an RTS, under tight per-frame budgets. This paper is the RTS-specific answer from a group that works on StarCraft-style AI: one triangulation serves all unit radii (the width through each triangle is stored, so no per-size clearance maps), the abstraction's size depends on the number of obstacles rather than their shape, and the search is anytime, so a first path can be returned within budget and refined later. It is a concrete alternative to HPA*-on-grids worth benchmarking against the navmesh route (Recast/Detour).

## Key ideas

- **Representation.** Barriers become constrained edges of a constrained Delaunay triangulation; the Delaunay property (maximising the minimum angle) ensures an optimal path never crosses a triangle more than once.
- **Width.** For each triangle and pair of unconstrained edges they compute the width of the passage between them; a width of 2r is necessary and sufficient for a circular unit of radius r to pass, so one structure serves every unit size.
- **TA\*.** A* over triangles adjacent across unconstrained edges, with the true path length through a triangle channel computed by a modified funnel algorithm (after Hershberger and Snoeyink) that accounts for radius; g-values are admissible underestimates taken as a maximum of several bounds; search continues after the first path until no open node can beat the best path, which makes it anytime and eventually optimal.
- **Abstraction (TRA\*).** Triangles are classified as degree-0, 1, 2 or 3 by how many of their edges lead to other graph structures: dead ends and trees collapse to degree-1, corridors become degree-2, junctions in "rooms" are degree-3; search runs on the degree-3 graph, recording corridor widths and lengths.
- **Point location.** A 10 × 10 grid of sector anchors speeds up finding the start triangle, which had dominated query time.
- **Evidence.** 75 Baldur's Gate and 41 WarCraft III maps scaled to 512 × 512, 148,480 paths; most paths found in under 1 ms; TA* already beats grid A* and PRA* on first-path time, and TRA* is faster still; preprocessing was about 20 µs per triangle.

## Caveats

Many small obstacles (the trees sprinkled over WarCraft III maps) inflate the triangle count and the number of near-equal paths, so a small fraction of searches took several times longer; the authors' fix (do not expand a triangle twice before the first path is found) speeds up first paths without affecting later ones, per the paper. Inputs were grid maps, so jagged edges cost TA* extra triangles. Static maps only in the experiments, though they point to dynamic constrained triangulation updates (Kallmann et al. 2003). Neither algorithm was heavily optimised; the A* and PRA* timings were taken from an earlier paper and halved for CPU differences.

## Links

- Paper (AAAI-06 proceedings PDF): https://cdn.aaai.org/AAAI/2006/AAAI06-148.pdf
- Paper (author copy, PDF): https://skatgame.net/mburo/ps/tra.pdf
