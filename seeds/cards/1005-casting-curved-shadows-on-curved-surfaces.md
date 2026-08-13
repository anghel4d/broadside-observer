---
title: "Casting Curved Shadows on Curved Surfaces"
authors: ["Lance Williams"]
year: 1978
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800248.807402"
source: "https://doi.org/10.1145/800248.807402"
topics: [shadow-maps, z-buffer, real-time-graphics]
seed_rank: 1005
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "graphics"
relevance_score: 10
lineage: shadow-maps
cites:
  - title: "Cascaded Shadow Maps"
    url: "https://developer.download.nvidia.com/SDK/10.5/opengl/src/cascaded_shadow_maps/doc/cascaded_shadow_maps.pdf"
    year: 2006
    arxiv: null
    doi: null
  - title: "Variance Shadow Maps"
    url: "https://doi.org/10.1145/1111411.1111440"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111440"
see:
  - "356-cascaded-shadow-maps"
  - "359-variance-shadow-maps"
  - "402-imperfect-shadow-maps-for-efficient-computation-of-indirect-"
---

# Casting Curved Shadows on Curved Surfaces

## One-sentence takeaway

Render the scene from the light into a Z-buffer (the shadow map), then compare depths from the eye; shadows on curved patches cost about two renders plus a fixed transform.

## Why it matters here

Anoptic already has cascaded, variance, and imperfect shadow maps (356, 359, 402) but not Williams 1978 — the algorithm every real-time engine still implements. This is the source of light-space depth comparison, self-shadowing caveats, and the "shadows make spatial layout intelligible" argument.

## Key ideas

- Two-pass algorithm: first a Z-buffer from the light, then a comparison of transformed eye-space depths against that map.
- Works for smooth surface patches, not only planar polygons; no extra shadow volumes or extra scene entities are added.
- Cost is roughly twice a normal render per light, plus a transform whose modified post-process form is bounded by screen resolution rather than depth complexity.
- The light-source pass needs no shading, which is a substantial saving under expensive illumination models.
- Discrete Z-buffer artifacts (quantization, dither, interpolation, self-shadowing) are already diagnosed in the original paper; bias and PCF are later patches on this skeleton.

## Caveats

- Hard shadows only; penumbrae, cascaded splits, VSM, and deep visibility functions are later papers (keep Deep Shadow Maps as the 2000 companion, not a remint of this).
- The 1978 Z-buffer has no 24-bit depth or hardware PCF; reproducing the paper literally on Vulkan still needs slope-scale bias and a comparison sampler.
- DOI 10.1145/800248.807402 is the SIGGRAPH '78 proceedings paper.

## Links

- DOI: [10.1145/800248.807402](https://doi.org/10.1145/800248.807402)
- PDF: https://cseweb.ucsd.edu/~ravir/274/15/papers/p270-williams.pdf
- SIGGRAPH History: https://history.siggraph.org/learning/casting-curved-shadows-on-curved-surfaces-by-williams/
