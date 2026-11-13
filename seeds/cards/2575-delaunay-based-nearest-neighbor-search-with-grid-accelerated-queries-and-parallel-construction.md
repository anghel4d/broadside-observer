---
title: "Delaunay-Based Nearest Neighbor Search with Grid-Accelerated Queries and Parallel Construction"
authors:
  - "Pengfei Wang"
  - "Shiqing Xin"
  - "Changhe Tu"
year: 2026
venue: "arXiv preprint (cs.GR)"
arxiv: "2611.15320"
doi: null
source: "https://arxiv.org/abs/2611.15320"
topics:
  - "nearest-neighbor-search"
  - "delaunay"
  - "distance-fields"
  - "spatial-indexing"
  - "parallel-construction"
seed_rank: 2575
seed_batch: "craft-2026-11-13"
reviewed: "2026-11-13"
pool: "graphics"
relevance_score: 8
lineage: algorithms-and-complexity
cites: []
see:
  - "2281-distance-transforms-of-sampled-functions"
  - "1633-jump-flooding-in-gpu"
  - "2560-adaptively-sampled-distance-fields"
---

# Delaunay-Based Nearest Neighbor Search with Grid-Accelerated Queries and Parallel Construction

## One-sentence takeaway

When points live on a surface but queries fill the surrounding volume (the exact shape of building a distance field around a mesh), walking the history DAG of an incremental Delaunay construction beats k-d trees and grids, and this paper fixes its two practical blockers: a coarse grid that hands each query a valid starting node on the DAG (about 2x faster queries, still exact), and a parallel insertion order that keeps expected query cost logarithmic (about 10x faster construction).

## Why it matters here

Anoptic wants signed distance fields for text, shadows and cone/sphere tracing, and the usual tools are jump flooding (fast, approximate) or brute grids (fine when samples are volumetric, poor when they hug a surface). DP-NNS is an exact alternative whose structure is a DAG of point-location steps rather than a spatial partition, so it does not degrade when the data is a thin 2-manifold in 3D. The grid-seeded start is the kind of cheap, exactness-preserving shortcut that ports to GPU bake passes, and the query reordering for cache locality is plain DOD practice.

## Key ideas

- **Successor DAG.** Incremental Delaunay insertion records which simplices replaced which; nearest-neighbor search descends that history instead of a tree over space.
- **Grid initialization.** Precompute, per grid cell, a starting node on the DAG that is guaranteed valid, so queries skip the top of the walk without losing exactness.
- **Parallel construction with a query-cost argument.** Naive parallel insertion makes later queries slower; the authors analyse why and give an insertion schedule that keeps logarithmic expected query cost under stated geometric assumptions.
- **Query reordering** for cache locality before the batch runs.
- Reported to beat widely used nearest-neighbor libraries on query time.

## Caveats

Read from the abstract only; the speedups are the authors' numbers and the "stated geometric assumptions" for the parallel bound are not spelled out there. It is a CPU result as described; a GPU port of the DAG walk is not claimed. For approximate fields, jump flooding will still be cheaper.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.15320
- PDF: https://arxiv.org/pdf/2611.15320
