---
title: "OBBTree: A Hierarchical Structure for Rapid Interference Detection"
authors:
  - "S. Gottschalk"
  - "M. C. Lin"
  - "D. Manocha"
year: 1996
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/237170.237244"
source: "https://doi.org/10.1145/237170.237244"
topics:
  - "collision"
  - "obb"
  - "separating-axis-theorem"
  - "ecs-data-oriented-simulation"
seed_rank: 1099
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "engines"
relevance_score: 10
lineage: obbtree
cites:
  - title: "A Fast Procedure for Computing the Distance Between Complex Objects in Three-Dimensional Space"
    url: "https://doi.org/10.1109/56.2083"
    year: 1988
    arxiv: null
    doi: "10.1109/56.2083"
  - title: "I-COLLIDE: An Interactive and Exact Collision Detection System for Large-Scale Environments"
    url: "https://doi.org/10.1145/199404.199437"
    year: 1995
    arxiv: null
    doi: "10.1145/199404.199437"
  - title: "Proximity Queries and Penetration Depth Computation on 3D Game Objects"
    url: "https://doi.org/10.2312/egs.20011035"
    year: 2001
    arxiv: null
    doi: null
  - title: "Real-Time Collision Detection"
    url: "https://doi.org/10.1201/b22209"
    year: 2004
    arxiv: null
    doi: "10.1201/b22209"
see:
  - "251-barycode-based-gjk-algorithm"
  - "370-proximity-queries-and-penetration-depth-with-gjk-epa"
  - "295-real-time-collision-detection"
  - "373-surface-simplification-using-quadric-error-metrics"
---

# OBBTree: A Hierarchical Structure for Rapid Interference Detection

## One-sentence takeaway

Oriented boxes plus the separating-axis theorem: ~200 ops to reject two OBBs, so a tree of them does exact collision on hundred-thousand-polygon soups at interactive rates.

## Why it matters here

The library had GJK (251/370) and Ericson's handbook (295) but not the *hierarchy* game engines actually put on rigid props — RAPID / OBBTree. AABB trees waste volume on rotated ships; spheres waste more. Gottschalk–Lin–Manocha 1996 fit an OBB per subtree from the vertex covariance, split on the longest axis, and overlap-test two oriented boxes with at most 15 separating-axis projections. Anoptic unit-vs-terrain and projectile-vs-meshlet collision is this tree walking two models, not a GJK on the whole mesh. SAT is the inner loop; GJK is the convex primitive.

## Key ideas

- Build: covariance of the triangles in a node → eigenvectors as box axes; split along the longest axis; recurse. Works on polygon soups (cracks, T-joints, open shells).
- Query: SAT in 3D — 3 face normals of A, 3 of B, 9 cross products. A scalar projection gap is a separating axis. ~100–200 ops in practice, an order of magnitude faster than earlier OBB tests.
- Tight fit of OBBs vs AABBs / spheres is the culling win when models are long and rotated (vehicles, weapons, ships).
- Implemented as RAPID; compared against sphere-trees and AABB-trees on CAD and scanned geometry.

## Caveats

- Precomputed trees assume rigid motion. Deforming meshes need refit or a different volume (k-DOP, AABB refit).
- 15-axis SAT is overkill for AABBs (3 axes). Don't OBB-test what an AABB sweep would reject cheaper.
- Contact *points* and penetration depth are later (EPA, GJK 370); this paper is boolean interference plus hierarchy.

## Links

- DOI: [10.1145/237170.237244](https://doi.org/10.1145/237170.237244)
- UNC TR96-013: [https://www.cs.unc.edu/techreports/96-013.pdf](https://www.cs.unc.edu/techreports/96-013.pdf)
- Author PDF: [https://gamma.cs.unc.edu/SSV/obb.pdf](https://gamma.cs.unc.edu/SSV/obb.pdf)
