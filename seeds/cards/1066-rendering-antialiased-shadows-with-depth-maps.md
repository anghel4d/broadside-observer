---
title: "Rendering Antialiased Shadows with Depth Maps"
authors:
  - "William T. Reeves"
  - "David H. Salesin"
  - "Robert L. Cook"
year: 1987
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/37401.37435"
source: "https://doi.org/10.1145/37401.37435"
topics:
  - "percentage-closer-filtering"
  - "shadow-maps"
  - "penumbra"
  - "reyes"
seed_rank: 1066
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "graphics"
relevance_score: 10
lineage: percentage-closer-filtering
cites:
  - title: "Casting Curved Shadows on Curved Surfaces"
    url: "https://doi.org/10.1145/800248.807402"
    year: 1978
    arxiv: null
    doi: "10.1145/800248.807402"
  - title: "Shadow Algorithms for Computer Graphics"
    url: "https://doi.org/10.1145/563858.563901"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563901"
  - title: "The Reyes Image Rendering Architecture"
    url: "https://doi.org/10.1145/37401.37414"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37414"
  - title: "Deep Shadow Maps"
    url: "https://doi.org/10.1145/344779.344958"
    year: 2000
    arxiv: null
    doi: "10.1145/344779.344958"
see:
  - "1005-casting-curved-shadows-on-curved-surfaces"
  - "1043-shadow-algorithms-for-computer-graphics"
  - "1012-deep-shadow-maps"
  - "1010-the-reyes-image-rendering-architecture"
  - "356-cascaded-shadow-maps"
  - "359-variance-shadow-maps"
---

# Rendering Antialiased Shadows with Depth Maps

## One-sentence takeaway

Compare first, filter second: percentage-closer filtering turns a binary depth-map test into an antialiased (and optionally soft) shadow, instead of averaging depths and then testing.

## Why it matters here

Archive 1005 is Williams's shadow *map*; 1043 is Crow's shadow *volumes*; 1012 is the deep-map density function. Every real-time engine still ships the missing operator: PCF. Anoptic's Vulkan shadow pass is a depth atlas plus a gather of comparison samples — this is the 1987 paper that reversed the filter/compare order so mip-style filtering of a depth buffer actually works. Soft-looking umbrae fall out of the same knob (filter width) without a separate penumbra model.

## Key ideas

- Ordinary texture filtering of a depth map is wrong: the filtered z has no geometric meaning on silhouettes, and the subsequent compare is still binary.
- PCF: for a reconstruction region, compare the receiver depth against every depth-map sample, then filter the 0/1 results. The answer is the fraction of the region in shadow.
- Floating-point depth maps and folding the shadow term into shading (not a post-process) are called out as the other two production fixes.
- Filter width is a softness control; large kernels give penumbra-like edges at the cost of light leaks if the bias is sloppy.
- Pixar / Reyes-era paper (same SIGGRAPH 1987 volume as 1010).

## Caveats

- Classic PCF is a box/tent over a regular tap pattern, not a physically sized penumbra (PCSS / VSM / ESM are later).
- Bias, slope-scale bias, and cascade choice (356) are still the engineering tax; this paper does not solve peter-panning.
- The "soft shadow" is a filter artifact, not a light-source solid angle.

## Links

- DOI: [10.1145/37401.37435](https://doi.org/10.1145/37401.37435)
- SIGGRAPH History: https://history.siggraph.org/learning/rendering-antialiased-shadows-with-depth-maps-by-reeves-salesin-and-cook/
- Author PDF: https://graphics.pixar.com/library/ShadowMaps/
