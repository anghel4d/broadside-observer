---
title: "Deep Shadow Maps"
authors: ["Tom Lokovic", "Eric Veach"]
year: 2000
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/344779.344958"
source: "https://doi.org/10.1145/344779.344958"
topics: [shadow-maps, volumetric-shadows, hair-fur]
seed_rank: 1012
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "graphics"
relevance_score: 9
lineage: shadow-maps
cites:
  - title: "Casting Curved Shadows on Curved Surfaces"
    url: "https://doi.org/10.1145/800248.807402"
    year: 1978
    arxiv: null
    doi: "10.1145/800248.807402"
  - title: "Percentage-Closer Filtering"
    url: "https://doi.org/10.1145/37401.37435"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37435"
see:
  - "356-cascaded-shadow-maps"
  - "359-variance-shadow-maps"
  - "410-depth-peeling-order-independent-transparency"
---

# Deep Shadow Maps

## One-sentence takeaway

Store a compressed fractional-visibility-vs-depth function per shadow-map pixel instead of a single Z, so hair, fur, smoke, and motion-blurred occluders shadow correctly and prefilter.

## Why it matters here

Williams 1978 (1005) plus cascaded/VSM (356, 359) cover opaque hard/soft shadows. Production Anoptic scenes that grow foliage, particles, or translucent soldiers need the 2000 Pixar step: visibility as a function of depth, mip-filterable, an order of magnitude smaller than a high-res ordinary map of equal quality.

## Key ideas

- An ordinary shadow map stores one depth per pixel. A deep shadow map stores a piecewise-linear (compressed) record of how much light survives down to each depth.
- Prefiltering: because the representation is a visibility function, it mip-maps; lookups are cheaper and the memory footprint drops dramatically versus supersampled binary maps.
- Semitransparent surfaces and volumetric media (fog, smoke) are first-class; so are important cases of motion blur, at no extra algorithmic cost.
- Compression of the visibility curve is lossy but controllable; the paper shows hair-dense and fog-dense shots from Pixar production.
- Drop-in alternative to ordinary shadow maps in an existing renderer: same light-space projection, different texel payload.

## Caveats


## Links

- DOI: [10.1145/344779.344958](https://doi.org/10.1145/344779.344958)
- Project: https://graphics.stanford.edu/papers/deepshadows/
- PDF: https://graphics.stanford.edu/papers/deepshadows/gamma-fixed/deepshad.pdf
