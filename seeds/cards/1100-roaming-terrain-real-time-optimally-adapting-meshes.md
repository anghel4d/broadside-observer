---
title: "ROAMing Terrain: Real-time Optimally Adapting Meshes"
authors:
  - "Mark Duchaineau"
  - "Murray Wolinsky"
  - "David E. Sigeti"
  - "Mark C. Miller"
  - "Charles Aldrich"
  - "Mark B. Mineev-Weinstein"
year: 1997
venue: "IEEE Visualization"
arxiv: null
doi: "10.1109/VISUAL.1997.663860"
source: "https://doi.org/10.1109/VISUAL.1997.663860"
topics:
  - "terrain"
  - "lod"
  - "bintree"
  - "procedural-content-codegen"
seed_rank: 1100
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "engines"
relevance_score: 9
lineage: roam-terrain
cites:
  - title: "Real-Time Continuous Level of Detail Rendering of Height Fields"
    url: "https://doi.org/10.1145/237170.237269"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237269"
  - title: "Progressive Meshes"
    url: "https://doi.org/10.1145/237170.237216"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237216"
  - title: "Geometry Clipmaps: Terrain Rendering Using Nested Regular Grids"
    url: "https://doi.org/10.1145/1186562.1015799"
    year: 2004
    arxiv: null
    doi: "10.1145/1186562.1015799"
  - title: "The Clipmap: A Virtual Mipmap"
    url: "https://doi.org/10.1145/280814.280855"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280855"
see:
  - "362-geometry-clipmaps-terrain-rendering-using-nested-regular-gri"
  - "1070-the-clipmap-a-virtual-mipmap"
  - "375-progressive-meshes"
  - "373-surface-simplification-using-quadric-error-metrics"
---

# ROAMing Terrain: Real-time Optimally Adapting Meshes

## One-sentence takeaway

Two priority queues over a triangle bintree: split the worst error, merge the cheapest, and the mesh *is* the view-dependent LOD — frame time proportional to triangle *changes*, not terrain size.

## Why it matters here

Geometry clipmaps (362) already told Anoptic "don't ROAM on the CPU, keep nested regular grids." The missing card is the algorithm 362 is the successor of. GRID COMMAND's procedural height field still has to answer "which triangles this frame" for CPU collision, minimap, and editor views; ROAM's split/merge queues plus forced splits for crack-free diamond neighbours are that answer. Clipmaps (1070/362) won GPU raster; ROAM remains the right *adaptive* mesh when the error metric is gameplay (silhouette of a ridge, unit-scale bump) not a clipmap ring.

## Key ideas

- Preprocess a longest-edge-bisection bintree over the height field. Every node is a right triangle; children are the two halves.
- Per frame: a split queue (priority = view-dependent error) and a merge queue. Pop split until the triangle budget / error bound is met; merge when a diamond is cheap enough. Incremental from the previous frame, so cost tracks *changes*.
- Guaranteed error bounds and a specified triangle count, not "hope the heuristic is close."
- Incremental triangle stripping and deferred priority updates. Dynamic terrain (craters) is a local priority bump.

## Caveats

- CPU split/merge does not map to a mesh-shader GPU path; Anoptic's shipped renderer should stay clipmap/meshlet. Use ROAM for CPU-side queries and tools.
- On modern GPUs, dumping extra triangles is cheaper than the queue bookkeeping (geomipmap / CDLOD lesson).
- Diamond / forced-split rules are easy to get wrong; cracks appear if a neighbour is not split in lockstep.

## Links

- DOI: [10.1109/VISUAL.1997.663860](https://doi.org/10.1109/VISUAL.1997.663860)
- OSTI preprint UCRL-JC-127870: [https://www.osti.gov/biblio/632827](https://www.osti.gov/biblio/632827)
- Author page: [http://www.cognigraph.com/ROAM_homepage/](http://www.cognigraph.com/ROAM_homepage/)
