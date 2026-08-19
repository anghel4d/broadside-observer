---
title: "Fast, Minimum Storage Ray-Triangle Intersection"
authors:
  - "Tomas Möller"
  - "Ben Trumbore"
year: 1997
venue: "Journal of Graphics Tools"
arxiv: null
doi: "10.1080/10867651.1997.10487468"
source: "https://doi.org/10.1080/10867651.1997.10487468"
topics:
  - "ray-triangle"
  - "barycentric"
  - "picking"
  - "vulkan-realtime-rendering"
seed_rank: 1097
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 10
lineage: moller-trumbore
cites:
  - title: "An Efficient Ray-Polygon Intersection"
    url: "https://doi.org/10.1016/B978-0-08-050753-8.50082-6"
    year: 1990
    arxiv: null
    doi: "10.1016/B978-0-08-050753-8.50082-6"
  - title: "Point in Polygon Strategies"
    url: "https://doi.org/10.1016/B978-0-12-336156-1.50013-6"
    year: 1994
    arxiv: null
    doi: "10.1016/B978-0-12-336156-1.50013-6"
  - title: "A Fast Voxel Traversal Algorithm for Ray Tracing"
    url: "https://doi.org/10.2312/egtp.19871000"
    year: 1987
    arxiv: null
    doi: "10.2312/egtp.19871000"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
see:
  - "152-the-rendering-equation"
  - "1010-the-reyes-image-rendering-architecture"
  - "1071-a-parallel-algorithm-for-polygon-rasterization"
  - "251-barycode-based-gjk-algorithm"
  - "370-proximity-queries-and-penetration-depth-with-gjk-epa"
---

# Fast, Minimum Storage Ray-Triangle Intersection

## One-sentence takeaway

Solve one 3×3 system and you get *t* plus barycentric *(u,v)* without storing a plane equation — the ray/triangle kernel every engine still ships.

## Why it matters here

Archive had Kajiya (152) and Pineda edge functions (1071) but not the picking / ray-query primitive Anoptic actually runs: mouse-pick a meshlet, fire a probe, test a bullet, walk a BVH leaf. Möller–Trumbore 1997 is that kernel. Translate the triangle to the origin, change basis so the ray is *x* and the triangle is the unit triangle in *yz*, and the solution vector is *(t, u, v)*. No per-triangle plane, 25–50% less mesh storage, barycentrics fall out for UV/normal interpolation. GJK (251/370) is the convex-body cousin; this is the triangle cousin.

## Key ideas

- A point on the triangle is *(1−u−v)V0 + u V1 + v V2* with *u≥0, v≥0, u+v≤1*. Intersect with *O + tD* by solving *M [t u v]ᵀ = O−V0* where *M = [−D, V1−V0, V2−V0]*.
- Cramer's rule / scalar triple products: one determinant for *t*, two for barycentrics. Early-out if *u* or *v* leaves the triangle.
- Plane equation is neither precomputed nor stored — important when the mesh is a soup of shared vertices, not a list of padded triangles.
- *(u,v)* is immediately the interpolant for attributes. Back-face *det(M)* sign is a winding test.

## Caveats

- Watertight variants (Woop / Shevtsov / Baldwin–Weber) exist because floating-point holes appear on shared edges; production path tracers often replace the 1997 inner loop.
- Precomputed planes can still win if you have the memory and a fat triangle record.
- This is the leaf test, not the acceleration structure (Amanatides grid 1098, BVH SAH, Embree).

## Links

- DOI: [10.1080/10867651.1997.10487468](https://doi.org/10.1080/10867651.1997.10487468)
- Author PDF (JGT): commonly circulated as *raytri_jgt*; Cornell scan of the 1997 JGT article
- ACM reprint: [10.1145/1198555.1198746](https://doi.org/10.1145/1198555.1198746)
