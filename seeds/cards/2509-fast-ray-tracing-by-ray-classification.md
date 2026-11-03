---
title: "Fast Ray Tracing by Ray Classification"
authors:
  - "James Arvo"
  - "David Kirk"
year: 1987
venue: "SIGGRAPH 87, Computer Graphics 21(4):55–64"
arxiv: null
doi: "10.1145/37401.37409"
source: "https://artis.inrialpes.fr/Members/Cyril.Soler/DEA/Ombres/Papers/Arvo.Sig87.pdf"
topics:
  - "ray-tracing"
  - "acceleration-structures"
  - "ray-space"
  - "5d-subdivision"
  - "visibility"
seed_rank: 2509
seed_batch: "archive-2026-11-04"
reviewed: "2026-11-04"
pool: "graphics"
lineage: ray-tracing
relevance_score: 8
cites:
  - title: "Fast Ray Tracing by Ray Classification"
    url: "https://artis.inrialpes.fr/Members/Cyril.Soler/DEA/Ombres/Papers/Arvo.Sig87.pdf"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37409"
see: ["1840-heuristics-for-ray-tracing-using-space-subdivision", "1634-an-improved-illumination-model-for-shaded-display"]
---

# Fast Ray Tracing by Ray Classification

## One-sentence takeaway

Instead of subdividing 3D object space, Arvo and Kirk subdivide 5D *ray space*: a 3D origin box times a 2D direction region. Each hypercube gets a list of candidate objects that any ray in it could hit, and the hypercubes are refined lazily, giving near-constant ray cost in complex scenes.

## Why it matters here

Radiance cascades are also a hierarchy over position × direction, with coarse spatial probes paired with fine angular intervals and the reverse. Arvo–Kirk is the 1987 ancestor of treating ray space itself as the thing to partition and attaching conservative visibility (candidate sets) to each cell. It is a useful reference point for building a 3D RC or FMM-style interaction list from origin × direction cells, rather than probe grids.

## Key ideas

- A ray is classified by its origin (3D box) and direction (a point on one of six faces of a direction cube, 2D), so each class is a 5D hypercube.
- Each hypercube's candidate list holds the objects intersecting its "beam" (the swept volume of all its rays). Subdivision is lazy and only happens where rays actually go.
- The paper compares extents for the beam–object test (boxes, spheres, plane-sets, convex polyhedra) and adds candidate sorting, caching and backface culling.
- Measured on complex scenes, the cost per ray becomes nearly independent of scene complexity.

## Caveats

- Memory grows quickly with 5D refinement, and the build is scene-static. Modern BVHs (SAH, wide BVHs) beat it for general ray tracing on GPUs.
- The connection to radiance cascades is an analogy drawn here, not a claim in the paper.

## Links

- [PDF (INRIA ARTIS mirror)](https://artis.inrialpes.fr/Members/Cyril.Soler/DEA/Ombres/Papers/Arvo.Sig87.pdf)
- [ACM DOI](https://doi.org/10.1145/37401.37409)
- [ACM SIGGRAPH History Archive entry](https://history.siggraph.org/learning/fast-ray-tracing-by-ray-classification-by-arvo-and-kirk/)
