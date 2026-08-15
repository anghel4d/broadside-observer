---
title: "A Fast Procedure for Computing the Distance Between Complex Objects (GJK)"
authors:
  - "E. G. Gilbert"
  - "D. W. Johnson"
  - "S. S. Keerthi"
year: 1988
venue: "IEEE Journal on Robotics and Automation"
arxiv: null
doi: "10.1109/56.2083"
source: "https://doi.org/10.1109/56.2083"
topics:
  - physics
  - gjk
seed_rank: 308
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
cites:
  - title: "Convex Analysis"
    url: "https://doi.org/10.1515/9781400873173"
    year: 1970
    arxiv: null
    doi: "10.1515/9781400873173"
  - title: "Spatial Planning: A Configuration Space Approach"
    url: "https://doi.org/10.1109/tc.1983.1676196"
    year: 1983
    arxiv: null
    doi: "10.1109/tc.1983.1676196"
  - title: "Distance functions and their application to robot path planning in the presence of obstacles"
    url: "https://doi.org/10.1109/jra.1985.1087003"
    year: 1985
    arxiv: null
    doi: "10.1109/jra.1985.1087003"
see: []
---

# A Fast Procedure for Computing the Distance Between Complex Objects (GJK)

## One-sentence takeaway

GJK computes the Euclidean distance between two convex objects by iteratively building a simplex in their Minkowski difference until it contains the origin or proves a separating plane.

## Why it matters here

Every Anoptic/Broadside rigid-body narrowphase that talks to GJK/EPA inherits this 1988 procedure; support mappings let you collide hulls, capsules, and cylinders without an explicit mesh Boolean.

## Key ideas

- Distance between convex sets `A` and `B` is the distance from the origin to `A − B`; a support function `s_{A−B}(d) = s_A(d) − s_B(−d)` never needs the full Minkowski difference.
- Each iteration adds the support point in the current search direction and reduces the simplex (point / segment / triangle / tetrahedron) to the feature closest to the origin.
- When the origin is outside, the new search direction is the vector from that closest feature; when it is inside, the objects intersect and distance is zero.
- Complexity is essentially independent of surface complexity as long as support is cheap, which is why game physics keeps GJK rather than SAT on high-poly hulls.
- EPA (Expanding Polytope Algorithm) is the later penetration-depth companion; this paper is the distance algorithm itself.

## Caveats

## Links

- DOI: [10.1109/56.2083](https://doi.org/10.1109/56.2083)
- PDF: https://graphics.stanford.edu/courses/cs164-09-spring/Handouts/paper_GJKoriginal.pdf
