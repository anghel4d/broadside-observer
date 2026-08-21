---
title: "Optimized Spatial Hashing for Collision Detection of Deformable Objects"
authors:
  - "Matthias Teschner"
  - "Bruno Heidelberger"
  - "Matthias Müller"
  - "Danat Pomeranets"
  - "Markus Gross"
year: 2003
venue: "VMV"
arxiv: null
doi: null
source: "https://cg.informatik.uni-freiburg.de/publications/2003_VMV_collisionDetectionHashing.pdf"
topics:
  - "spatial-hashing"
  - "collision-detection"
  - "deformable-bodies"
  - "ecs-data-oriented-simulation"
seed_rank: 1136
seed_batch: "archive-2026-08-22"
reviewed: "2026-08-22"
pool: "engines"
relevance_score: 10
lineage: spatial-hashing
cites:
  - title: "OBBTree: A Hierarchical Structure for Rapid Interference Detection"
    url: "https://doi.org/10.1145/237170.237244"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237244"
  - title: "Real-Time Collision Detection"
    url: "https://doi.org/10.1201/b22209"
    year: 2004
    arxiv: null
    doi: "10.1201/b22209"
  - title: "Particle-Based Fluid Simulation for Interactive Applications"
    url: "https://doi.org/10.2312/SCA/SCA03/154-159"
    year: 2003
    arxiv: null
    doi: "10.2312/SCA/SCA03/154-159"
  - title: "Position Based Dynamics"
    url: "https://doi.org/10.1016/j.gvc.2007.01.007"
    year: 2007
    arxiv: null
    doi: "10.1016/j.gvc.2007.01.007"
see:
  - "1099-obbtree-a-hierarchical-structure-for-rapid-interference-detection"
  - "295-real-time-collision-detection"
  - "407-particle-based-fluid-simulation-for-interactive-applications"
  - "287-position-based-dynamics"
---

# Optimized Spatial Hashing for Collision Detection of Deformable Objects

## One-sentence takeaway

Hash the infinite regular grid into a 1-D table: no octree, no world AABB, rebuild is a scatter of primitives, and self-collision falls out of the same bucket.

## Why it matters here

OBBTree (1099) is the *rigid* hierarchy. Deforming cloth, tetrahedral flesh, and Anoptic unit swarms cannot afford a refit of oriented boxes every frame. Teschner et al. 2003 is the broadphase everyone still pastes: \(H(x,y,z) = (x\,p_1 \oplus y\,p_2 \oplus z\,p_3) \bmod m\) with large primes, cell size ≈ average edge length, table size a prime near primitive count. Vertices hash in; tets/triangles hash the cells they overlap; pairs in a bucket are the narrowphase. GJK/SAT stay the primitive; this is the grid that does not rebuild a tree.

## Key ideas

- Implicit infinite grid. No pre-pass for a global bounding box. Hash collisions (two cells → one slot) are tolerated and measured; pick primes and \(m\) so they stay rare.
- Two-phase: (1) hash vertices, (2) hash volume elements into the cells they overlap. A vertex in a tet's cell is a candidate; barycentric coords give penetration depth for response.
- Same structure detects inter-object *and* self-collision — a bucket can hold two primitives of one mesh.
- Parameters that actually matter: hash function (bit-xor of scaled coords), table size (prime), cell size (≈ mean edge). They sweep these on 20k-tet scenes at real-time rates.

## Caveats

- Uniform cell size. Highly graded meshes want a hierarchy or two hashes. Huge sparse worlds still pay for occupied cells only, but a bad \(m\) clusters.
- Hash collisions increase narrowphase work; they are not correctness bugs.
- Original paper is tets; triangles/edges are the obvious adaptation (and what games ship).

## Links

- Author PDF (Freiburg): [https://cg.informatik.uni-freiburg.de/publications/2003_VMV_collisionDetectionHashing.pdf](https://cg.informatik.uni-freiburg.de/publications/2003_VMV_collisionDetectionHashing.pdf)
- ETH abstract: [https://cgl.ethz.ch/Downloads/Publications/Papers/2003/Tes03/Tes03.abstract](https://cgl.ethz.ch/Downloads/Publications/Papers/2003/Tes03/Tes03.abstract)
- VMV 2003, pp. 47–54
