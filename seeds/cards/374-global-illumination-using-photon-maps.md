---
title: "Global Illumination using Photon Maps"
authors:
  - "Henrik Wann Jensen"
year: 1996
venue: "EGWR"
arxiv: null
doi: null
source: "https://graphics.stanford.edu/~henrik/papers/ewr7/ewr7.html"
topics:
  - gi
  - photon
seed_rank: 374
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "The rendering equation"
    url: "https://doi.org/10.1145/15886.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15886.15902"
  - title: "The RADIANCE lighting simulation and rendering system"
    url: "https://doi.org/10.1145/192161.192286"
    year: 1994
    arxiv: null
    doi: "10.1145/192161.192286"
  - title: "Multidimensional binary search trees used for associative searching"
    url: "https://doi.org/10.1145/361002.361007"
    year: 1975
    arxiv: null
    doi: "10.1145/361002.361007"
see:
  - "152-the-rendering-equation"
---

# Global Illumination using Photon Maps

## One-sentence takeaway

Trace photons from the lights into a kd-tree, then render with distribution ray tracing that uses a dense caustic map plus a coarse global map for radiance estimates, sampling, and shadow culling.

## Why it matters here

Photon maps are the offline GI classic that still explains caustics, final gather, and “store flux, estimate radiance with k-nearest.” Anoptic RC / DDGI are the real-time cousins: same split between a cheap cached field and an accurate first bounce.

## Key ideas

- Two maps: a high-density caustic map visualized directly, and a low-density global map used as a radiance cache / importance guide — not as the beauty pass.
- Shadow photons (hits after the first surface along a light ray) skip most shadow rays in fully lit or fully occluded regions.
- Radiance estimate: expand a sphere until it holds N photons, divide by πr², optionally cone-filter to kill blur at discontinuities.
- Compared with Radiance on Cornell-box variants, the two-pass method was several times faster at similar quality because recursion dies after the first diffuse bounce.

## Caveats

## Links

- Author page: https://graphics.stanford.edu/~henrik/papers/ewr7/ewr7.html
- Extended PDF: https://graphics.stanford.edu/~henrik/papers/ewr7/egwr96.pdf
