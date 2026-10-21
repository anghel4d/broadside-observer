---
title: "Fast Poisson Disk Sampling in Arbitrary Dimensions"
authors:
  - "Robert Bridson"
year: 2007
venue: "ACM SIGGRAPH 2007 Sketches, Article 22"
arxiv: null
doi: "10.1145/1278780.1278807"
source: "https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph07-poissondisk.pdf"
topics:
  - poisson-disk-sampling
  - blue-noise
  - procedural-placement
  - spatial-grids
seed_rank: 2380
seed_batch: "archive-2026-10-22"
reviewed: "2026-10-22"
pool: "graphics"
relevance_score: 8
lineage: sampling
see:
  - 2278-the-void-and-cluster-method-for-dither-array-generation
  - 1135-a-cellular-texture-basis-function
  - 1442-lightweight-multidimensional-adaptive-sampling-for-gpu-ray-tracing
cites:
  - title: "Fast Poisson Disk Sampling in Arbitrary Dimensions"
    url: "https://doi.org/10.1145/1278780.1278807"
    year: 2007
    arxiv: null
    doi: "10.1145/1278780.1278807"
---

# Fast Poisson Disk Sampling in Arbitrary Dimensions

## One-sentence takeaway

Bridson turns dart throwing into an O(N) Poisson-disk sampler for any dimension with two ideas — a background grid with cell size r/√n so each cell holds at most one sample (a plain n-dimensional integer array), and an "active list" from which a random sample spawns up to k (typically 30) candidates in the annulus between r and 2r, retiring the sample when all k are rejected — a one-page sketch that became the default way to scatter blue-noise points.

## Why it matters here

GRID COMMAND map generation needs well-spaced placements — trees, rocks, resource nodes, spawn points, decals — that look natural without clumping, and Anoptic needs blue-noise sample sets for rendering and particle seeding. This algorithm is short enough to write as one ano function over a grid array, works unchanged in 2D, 3D or space-time (n = 3 or 4), and runs in time proportional to the number of points produced, so it can run at map load or per chunk.

## Key ideas

- **Grid acceleration.** Choosing cell size r/√n guarantees at most one sample per cell, so the neighbour check for a candidate only inspects a constant number of nearby cells; −1 marks an empty cell, otherwise the cell holds the sample index.
- **Active list.** Start with one uniformly random sample. Repeatedly pick a random active sample, generate up to k uniform points in the spherical annulus [r, 2r] around it, and accept the first point that is at least r from every existing sample; if none of the k succeed, remove the sample from the active list.
- **Why it is linear.** Each sample is accepted once and removed after at most k failed candidates, and each candidate test is constant time thanks to the grid, so total work is O(N) for fixed k and dimension.
- **Why the annulus.** Sampling only near existing samples follows the same insight as Dunbar and Humphreys' 2D scalloped-sector method — every maximal Poisson-disk set must place points in that band — but discovers the allowed region by rejection instead of computing it exactly, which is what lets it generalise beyond 2D.
- **Quality.** The 2D periodogram shown in the sketch has the blue-noise profile expected of Poisson-disk sampling.

## Caveats

It is a one-page sketch with no proof that the result is maximal (a rejected sample can leave small uncovered gaps, controlled by k) and no quantitative comparison of spectral quality against exact maximal samplers. Sequential by construction: the active-list process does not parallelise directly, and GPU or tiled variants (e.g. Wei's parallel Poisson disk sampling, tile-based methods) are needed for large worlds; uniform r only, so variable-density placement needs a modified distance test. The constant grows with dimension because the neighbourhood and annulus rejection rate grow.

## Links

- Paper (author PDF): https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph07-poissondisk.pdf
- Paper (DOI, SIGGRAPH 2007 sketches): https://doi.org/10.1145/1278780.1278807
