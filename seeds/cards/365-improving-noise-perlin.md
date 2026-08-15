---
title: "Improving Noise"
authors:
  - "Ken Perlin"
year: 2002
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/566570.566636"
source: "https://doi.org/10.1145/566570.566636"
topics:
  - pcg
  - noise
seed_rank: 365
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "An image synthesizer"
    url: "https://doi.org/10.1145/325165.325247"
    year: 1985
    arxiv: null
    doi: "10.1145/325165.325247"
  - title: "Hypertexture"
    url: "https://doi.org/10.1145/74333.74359"
    year: 1989
    arxiv: null
    doi: "10.1145/74333.74359"
---

# Improving Noise

## One-sentence takeaway

Perlin replaces the 1985 interpolation and gradient set so the noise field no longer shows axis-aligned artifacts and is cheaper to evaluate.

## Why it matters here

Anoptic terrain, clouds, and Broadside sea state still start from gradient noise. This is the version you actually implement: a permutation table, 12-edge gradients of a cube, and a C2 fade (`6t^5 − 15t^4 + 10t^3`) instead of the old Hermite that left second-derivative discontinuities.

## Key ideas

- The 1985 cubic Hermite fade has a discontinuous second derivative; the new quintic fade removes the Mach-band look when you bump-map or displace.
- Gradients are picked from the 12 mid-edge directions of a cube, not a random sphere sample, which removes the cardinal-axis clumping.
- A single 256-entry permutation table hashes all dimensions; 3-D evaluation is eight lattice corners, not a larger stencil.
- Still band-limited and repeatable — the properties procedural worlds need — just without the classic Perlin grid look.

## Caveats

## Links

- DOI: https://doi.org/10.1145/566570.566636
- Author notes: https://mrl.cs.nyu.edu/~perlin/paper445.pdf
