---
title: "Recursively Generated B-Spline Surfaces on Arbitrary Topological Meshes"
authors:
  - "E. Catmull"
  - "J. Clark"
year: 1978
venue: "Computer-Aided Design"
arxiv: null
doi: "10.1016/0010-4485(78)90110-0"
source: "https://doi.org/10.1016/0010-4485(78)90110-0"
topics:
  - graphics
  - subdivision-surfaces
  - catmull-clark
seed_rank: 1146
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "A Subdivision Algorithm for Computer Display of Curved Surfaces"
    url: "https://collections.lib.utah.edu/details?id=709785"
    year: 1974
    arxiv: null
    doi: null
    card: "1145-a-subdivision-algorithm-for-computer-display-of-curved-surfa"
  - title: "Smooth Subdivision Surfaces Based on Triangles"
    url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/thesis-10.pdf"
    year: 1987
    arxiv: null
    doi: null
    card: "1147-smooth-subdivision-surfaces-based-on-triangles"
  - title: "Behaviour of Recursive Division Surfaces Near Extraordinary Points"
    url: "https://doi.org/10.1016/0010-4485(78)90111-2"
    year: 1978
    arxiv: null
    doi: "10.1016/0010-4485(78)90111-2"
    card: "1148-behaviour-of-recursive-division-surfaces-near-extraordinary-"
---

# Recursively Generated B-Spline Surfaces on Arbitrary Topological Meshes

## One-sentence takeaway

Catmull–Clark subdivision: refine arbitrary polyhedral meshes toward bicubic B-spline limits—the film/game surface workhorse.

## Why it matters here

Still the default subdiv scheme behind hero assets and DCC tools.

## Key ideas

- Face/edge/vertex point masks.
- Works on arbitrary topology (not just grids).
- C2 everywhere except extraordinary vertices.
- Industry standard with Loop/Doo–Sabin siblings.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1016/0010-4485(78)90110-0](https://doi.org/10.1016/0010-4485(78)90110-0)
- URL: https://doi.org/10.1016/0010-4485(78)90110-0
