---
title: "Subgoal Graphs for Optimal Pathfinding"
authors:
  - "Tansel Uras"
  - "Sven Koenig"
  - "Carlos Hernández"
year: 2013
venue: "ICAPS"
arxiv: null
doi: "10.1609/icaps.v23i1.13568"
source: "https://ojs.aaai.org/index.php/ICAPS/article/view/13568"
topics:
  - pathfinding
seed_rank: 332
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: pathfinding
cites:
  - title: "Near Optimal Hierarchical Pathfinding (HPA*)"
    url: "https://doi.org/10.1613/jair.1423"
    year: 2004
    arxiv: null
    doi: "10.1613/jair.1423"
  - title: "Online Graph Pruning for Pathfinding on Grid Maps"
    url: "https://doi.org/10.1609/aaai.v25i1.7994"
    year: 2011
    arxiv: null
    doi: "10.1609/aaai.v25i1.7994"
see:
  - "294-near-optimal-hierarchical-pathfinding-hpa"
  - "196-online-graph-pruning-for-pathfinding-on-grid-maps"
---

# Subgoal Graphs for Optimal Pathfinding

## One-sentence takeaway

Subgoal graphs put vertices at obstacle corners of an eight-neighbor grid and keep only direct-h-reachable edges, so a tiny high-level search plus cheap octile refinements yields a true shortest grid path.

## Why it matters here

GRID COMMAND maps are grids with blocked cells; this ICAPS 2013 preprocessor is the optimal, low-memory alternative to HPA* abstractions and to raw A*/JPS.

## Key ideas

- A cell is a subgoal iff two perpendicular cardinal neighbors are free and the diagonal between them is blocked — i.e., an obstacle corner.
- Two cells are direct-h-reachable when a shortest octile trajectory between them is a real path that contains no other subgoal. Those pairs become graph edges.
- Query: try a direct path; otherwise connect start and goal to their direct-h-reachable subgoals, A* the subgraph, then DFS-refine each edge in `O(dx·dy)` (linear when safe-h-reachable).
- Two-level variant prunes local subgoals. On StarCraft maps: <50 ms preprocess, ~2.3 MB, ~25× faster than A*; two-level ~85×; with pairwise global distances ~165×. Fastest optimal complete-path entry at GPPC 2012.
- The canonical paper is *Subgoal Graphs for Optimal Pathfinding in Eight-Neighbor Grids* (ICAPS 2013, DOI 10.1609/icaps.v23i1.13568), not a 2015 SoCS note.

## Caveats

## Links

- DOI: [10.1609/icaps.v23i1.13568](https://doi.org/10.1609/icaps.v23i1.13568)
- PDF: https://idm-lab.org/bib/abstracts/papers/icaps13.pdf
