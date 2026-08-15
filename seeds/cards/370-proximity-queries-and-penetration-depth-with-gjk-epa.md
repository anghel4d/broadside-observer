---
title: "Proximity Queries and Penetration Depth Computation on 3D Game Objects"
authors:
  - "Gino van den Bergen"
year: 2001
venue: "GDC"
arxiv: null
doi: null
source: "https://graphics.stanford.edu/courses/cs468-01-fall/Papers/van-den-bergen.pdf"
topics:
  - physics
  - epa
seed_rank: 370
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "A Fast Procedure for Computing the Distance Between Complex Objects in Three-Dimensional Space"
    url: "https://doi.org/10.1109/56.2083"
    year: 1988
    arxiv: null
    doi: "10.1109/56.2083"
see:
  - "308-a-fast-procedure-for-computing-the-distance-between-complex-"
---

# Proximity Queries and Penetration Depth Computation on 3D Game Objects

## One-sentence takeaway

GJK finds the closest points of two convex shapes; when they overlap, Expanding Polytope Algorithm grows the simplex into the Minkowski difference until it hits the origin, giving a penetration vector.

## Why it matters here

Anoptic’s narrowphase is GJK/EPA whether the bodies are capsules, hulls, or Minkowski sums of both. This GDC 2001 write-up is the game-engine recipe: support mappings, cached simplices, and EPA as the penetration-depth partner GJK never had.

## Key ideas

- GJK iterates a simplex in A⊖B toward the origin; termination with the origin outside means disjoint, and the closest-feature witness is free.
- On intersection the simplex contains the origin but does not give a usable penetration; EPA expands it into a polytope whose nearest facet is the minimum translation vector.
- Both algorithms need only a support function, so capsules, boxes, cylinders, and convex hulls share one code path.
- Practical notes: warm-start from last frame’s simplex, and fall back when EPA’s polytope becomes degenerate.

## Caveats

## Links

- Stanford course PDF: https://graphics.stanford.edu/courses/cs468-01-fall/Papers/van-den-bergen.pdf
