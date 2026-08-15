---
title: "Variance Shadow Maps"
authors:
  - "William Donnelly"
  - "Andrew Lauritzen"
year: 2006
venue: "I3D"
arxiv: null
doi: "10.1145/1111411.1111440"
source: "https://doi.org/10.1145/1111411.1111440"
topics:
  - shadows
seed_rank: 359
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Casting curved shadows on curved surfaces"
    url: "https://doi.org/10.1145/800248.807402"
    year: 1978
    arxiv: null
    doi: "10.1145/800248.807402"
  - title: "Deep shadow maps"
    url: "https://doi.org/10.1145/344779.344958"
    year: 2000
    arxiv: null
    doi: "10.1145/344779.344958"
  - title: "Summed-area tables for texture mapping"
    url: "https://doi.org/10.1145/800031.808600"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808600"
---

# Variance Shadow Maps

## One-sentence takeaway

Store depth mean and mean-square in the shadow map and use Chebyshev’s inequality to estimate P(occluder > receiver), so the map can be prefiltered like a color texture.

## Why it matters here

Anoptic already wants cheap soft shadows on cascaded sun lights. VSM is the “filter the shadow map with a mipmap / SAT / Gaussian” trick — one texture gather instead of a PCF kernel — at the cost of light bleeding that later EVSM/MSM papers patch.

## Key ideas

- A shadow test is a one-tailed probability over the depth distribution in the filter footprint; the first two moments bound that probability.
- Because moments are linear, you can mipmap, blur, or SAT-filter the shadow map and the estimate stays consistent.
- Classic failure: light bleeding where variance is high (overlapping depths). Hardware 32-bit filtering and exponential / moment variants exist to contain it.
- Complements CSM: cascades fix resolution, VSM fixes filtering.

## Caveats

## Links

- DOI: https://doi.org/10.1145/1111411.1111440
