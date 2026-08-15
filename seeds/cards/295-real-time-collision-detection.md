---
title: "Real-Time Collision Detection"
authors:
  - "Christer Ericson"
year: 2005
venue: "Morgan Kaufmann"
arxiv: null
doi: "10.5555/2821575"
source: "https://www.sciencedirect.com/book/9781558607323/real-time-collision-detection"
topics:
  - physics
  - collision
seed_rank: 295
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
cites:
  - title: "A fast procedure for computing the distance between complex objects in three-dimensional space"
    url: "https://doi.org/10.1109/56.2083"
    year: 1988
    arxiv: null
    doi: "10.1109/56.2083"
  - title: "Barycode-based GJK Algorithm"
    url: "https://arxiv.org/abs/2011.09117"
    year: 2020
    arxiv: "2011.09117"
    doi: null
see:
  - "251-barycode-based-gjk-algorithm"
---

# Real-Time Collision Detection

## One-sentence takeaway

Ericson's 2005 Morgan Kaufmann book is the working engineer's encyclopedia of BVHs, GJK, SAT, swept tests, and numerical robustness — still the first book you pull off the shelf for a gameplay collision question.

## Why it matters here

Anoptic traces, pickups, and character controllers should cite this rather than blog folklore. The robustness chapters (epsilon, shared-edge winding, SAT vs GJK) are why two convexes don't fall through each other on a bad frame.

## Key ideas

- Hierarchical broadphase (AABB trees, spheres, k-DOPs, grids) then a narrowphase catalog: SAT for polyhedra, GJK/EPA for general convexes, and specialized primitive tests.
- Continuous / swept tests are first-class, not an appendix — required once objects move more than their radius per tick.
- Entire chapters on robustness: what "coplanar" means in float, how to pick an epsilon, how to not generate opposite normals on a shared edge.
- ISBN 978-1-55860-732-3, Morgan Kaufmann / Elsevier. The r-5.org PDF previously listed is an unauthorized scan; landing page is the publisher record. Year is 2005 (not 2004).
- Previous cites (Rosetta Stone, MGPBD) were bibliographic noise and have been dropped.

## Caveats

## Links

- Publisher: https://www.sciencedirect.com/book/9781558607323/real-time-collision-detection
- DOI: [10.5555/2821575](https://doi.org/10.5555/2821575)
