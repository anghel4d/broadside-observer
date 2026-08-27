---
title: "Decimation of Triangle Meshes"
authors: ["William J. Schroeder", "Jonathan A. Zarge", "William E. Lorensen"]
year: 1992
venue: "SIGGRAPH 1992"
arxiv: null
doi: "10.1145/133994.134010"
source: "https://doi.org/10.1145/133994.134010"
topics: [mesh-shaders-gpu-driven, vulkan-realtime-rendering]
seed_rank: 1435
seed_batch: "archive-2026-08-28"
reviewed: "2026-08-28"
pool: "graphics"
relevance_score: 9
lineage: mesh-simplification
cites:
  - title: "Progressive Meshes"
    url: "https://doi.org/10.1145/237348.237349"
    year: 1996
    arxiv: null
    doi: "10.1145/237348.237349"
  - title: "Surface Simplification Using Quadric Error Metrics"
    url: "https://doi.org/10.1145/258734.258849"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258849"
see:
  - "375-progressive-meshes"
  - "373-surface-simplification-using-quadric-error-metrics"
  - "362-geometry-clipmaps-terrain-rendering-using-nested-regular-gri"
  - "1100-roaming-terrain-real-time-optimally-adapting-meshes"
---

# Decimation of Triangle Meshes

## One-sentence takeaway

Reduce triangle count by repeatedly deleting vertices whose local geometry is approximable by their neighbors, then retriangulating the hole — a practical, topology-aware LOD builder for scanned and CAD meshes.

## Why it matters here

Anoptic meshlets and GRID COMMAND terrain proxies need *authored* coarse levels, not only runtime cluster culls. Schroeder’s vertex-remove / hole-fill loop is the readable ancestor of Hoppe progressive meshes (375) and Garland–Heckbert quadrics (373): classify vertices (simple, complex, boundary, corner), score geometric error, delete when safe, retriangulate. Pipeline that as an offline baker into meshlet LODs and keep Nanite-style continuous LOD as a later escalation.

## Key ideas

- **Vertex classification.** Only delete vertices whose neighborhood admits a faithful local plane/edge approximation; protect sharp features and boundaries.
- **Error-driven priority.** Score candidates by distance to the approximating surface; delete lowest-error vertices first.
- **Hole retriangulation.** After deletion, retriangulate the cavity without introducing flips or non-manifold joins.
- **Evidence.** SIGGRAPH 1992 (GE / Visualization roots). Became a default medical/CAD decimator and the conceptual base later progressive and quadric methods refine.

## Caveats

Greedy local deletes are not globally optimal; feature preservation is heuristic; does not by itself give continuous geomorphs (Hoppe) or optimal contraction pairs (quadrics). Volume meshes, attributes, and UVs need extra channels. Prefer 373/375 when you already know you want edge-collapse streams.

## Links

- DOI: https://doi.org/10.1145/133994.134010
- ACM DL: https://dl.acm.org/doi/10.1145/133994.134010
