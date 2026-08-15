---
title: "Barycode-based GJK Algorithm"
authors:
  - "Yu Zhang"
  - "Yangming Wu"
  - "Xigui Wang"
  - "Xiaocheng Zhou"
year: 2020
venue: "arXiv cs.RO"
arxiv: "2011.09117"
doi: null
source: "https://arxiv.org/abs/2011.09117"
topics:
  - physics
seed_rank: 251
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
cites:
  - title: "A Fast Procedure for Computing the Distance Between Complex Objects in Three-Dimensional Space"
    url: "https://doi.org/10.1109/56.2083"
    year: 1988
    arxiv: null
    doi: "10.1109/56.2083"
  - title: "A Fast and Robust GJK Implementation for Collision Detection of Convex Objects"
    url: "https://doi.org/10.1080/10867651.1999.10487502"
    year: 1999
    arxiv: null
    doi: "10.1080/10867651.1999.10487502"
  - title: "Enhancing GJK: Computing Minimum and Penetration Distances between Convex Polyhedra"
    url: "https://doi.org/10.1109/ROBOT.1997.606761"
    year: 1997
    arxiv: null
    doi: "10.1109/ROBOT.1997.606761"
  - title: "Real-Time Collision Detection"
    url: "https://doi.org/10.1201/b14581"
    year: 2005
    arxiv: null
    doi: "10.1201/b14581"
see:
  - "295-real-time-collision-detection"
---

# Barycode-based GJK Algorithm

## One-sentence takeaway

A 2D GJK rewrite that classifies the closest simplex with barycentric region codes, then early-outs when only a boolean hit test is needed, beating Bullet, FCL, OpenGJK, Box2D, and Apollo on random convex pairs.

## Why it matters here

Anoptic's physics and pickup traces still sit on GJK-family closest-feature queries. A cheaper 2D distance kernel with a binary-only fast path is the right shape for GRID COMMAND hit tests and for keeping engine collision off the agent tick.

## Key ideas

- Replace Johnson's sub-distance casework with a barycode: the signs of barycentric coordinates pick the Voronoi region of the current simplex in one unified test.
- The same code path covers distant, touching, and overlapping pairs instead of splitting those cases into separate Johnson branches.
- A collision-only subroutine tightens GJK exit conditions so a separating-axis witness can stop before a full closest-point solve.
- Benchmarks against Bullet, FCL, OpenGJK, Box2D, and Apollo on random 2D convex sets show wins for both distance and boolean queries.

## Caveats

## Links

- arXiv: [2011.09117](https://arxiv.org/abs/2011.09117)
- PDF: https://arxiv.org/pdf/2011.09117
