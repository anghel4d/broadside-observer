---
title: "Primitives for the Manipulation of General Subdivisions and the Computation of Voronoi Diagrams"
authors:
  - "Leonidas J. Guibas"
  - "Jorge Stolfi"
year: 1985
venue: "ACM TOG 4(2)"
arxiv: null
doi: "10.1145/282918.282923"
source: "https://doi.org/10.1145/282918.282923"
topics:
  - "quad-edge"
  - "mesh-topology"
  - "computational-geometry"
  - "voronoi-delaunay"
seed_rank: 1358
seed_batch: "archive-2026-08-26"
reviewed: "2026-08-26"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "Progressive Meshes"
    url: "https://doi.org/10.1145/237170.237216"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237216"
  - title: "Dual Contouring of Hermite Data"
    url: "https://doi.org/10.1145/566570.566586"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566586"
  - title: "Recursively Generated B-Spline Surfaces on Arbitrary Topological Meshes"
    url: "https://doi.org/10.1016/0010-4485(78)90110-0"
    year: 1978
    arxiv: null
    doi: "10.1016/0010-4485(78)90110-0"
see:
  - "375-progressive-meshes"
  - "408-dual-contouring-of-hermite-data"
  - "302-simplified-3d-movement-and-pathfinding-using-navigation-mesh"
---

# Primitives for the Manipulation of General Subdivisions and the Computation of Voronoi Diagrams

## One-sentence takeaway

Represent every edge together with its dual and mirror orientations, then build arbitrary planar subdivisions with only MakeEdge and Splice.

## Problem

Mesh code usually scatters topology across vertex, edge, and face tables whose invariants are easy to break. Primal navigation, dual navigation, orientation reversal, and local edits become separate cases, while geometric predicates get tangled with pointer surgery.

## Design

A quad-edge packages four directed edge records: two orientations of a primal edge and two of its dual. A fixed Rot operator moves between primal and dual; Next walks an origin ring. MakeEdge creates the atomic subdivision and Splice joins or splits edge rings. Those two topological operations are complete; Delaunay/Voronoi construction then adds only geometric predicates such as InCircle.

## Evidence

ACM TOG 4(2), 1985, pp. 74–123. Guibas and Stolfi derive the algebra, prove the primitive operations sufficient for generalized subdivisions, and implement both O(n log n) divide-and-conquer and simpler incremental Voronoi/Delaunay algorithms. The same representation remains a standard reference for robust mesh topology.

## Limitations

Quad-edge stores four records per undirected edge and is pointer-heavy for GPUs. It targets oriented 2-manifold subdivisions; non-manifold complexes need extensions. Robustness still depends on exact orientation/InCircle predicates, and compact indexed half-edge layouts may traverse faster in production.

## Implications for Broadside

Anoptic should separate topology algebra from geometry predicates. ano can store the four orientations as compact integer columns and expose Splice as the only mutation primitive, making invariants testable and edits transactional. GRID COMMAND navigation, terrain triangulation, and editor cuts then share one dual-aware substrate instead of bespoke adjacency repairs.

## Bottom line

Mint the topology algebra. Progressive meshes (375) change resolution and dual contouring (408) extracts surfaces; quad-edge is the invariant-preserving structure beneath edits and primal/dual queries.

## Links

- DOI: [10.1145/282918.282923](https://doi.org/10.1145/282918.282923)
