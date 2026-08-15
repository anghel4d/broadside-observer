---
title: "Finding Next Gen: CryEngine 2 (SSAO)"
authors:
  - "Martin Mittring"
year: 2007
venue: "SIGGRAPH Courses / Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://advances.realtimerendering.com/s2007/Mittring-Finding_NextGen_CryEngine2(Siggraph07 Course Notes).pdf"
topics:
  - ssao
  - ao
seed_rank: 484
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: ambient-occlusion
cites:
  - title: "Dynamic Ambient Occlusion and Indirect Lighting"
    url: "https://developer.nvidia.com/gpugems/gpugems2/part-i-geometric-complexity/chapter-14-dynamic-ambient-occlusion-and-indirect"
    year: 2005
---

# Finding Next Gen: CryEngine 2 (SSAO)

## One-sentence takeaway

Mittring's CryEngine 2 course notes popularize screen-space ambient occlusion: a full-screen pass that samples the existing depth buffer in a hemisphere, compares depths, and darkens nearby occluded ambient lighting.

## Why it matters here

Industrial catalyst for every later AO post-process Anoptic might ship (HBAO, GTAO); the cheap contact-shadow layer that sits beside — not instead of — probe/cascade GI.

## Key ideas

- Sample nearby pixels in the depth buffer, fade influence with distance, and apply the result primarily to ambient rather than direct light.
- Per-pixel rotation of a spherical sample set (4×4 noise / reflect across a random plane) cuts the sample count; a depth-aware blur hides the remaining noise.
- Fully dynamic — no precomputed volume — but quality depends on tessellation and depth precision.
- Section 8.5.4.3 of the SIGGRAPH 2007 Advances course notes is the detailed writeup; the companion slide deck summarizes the same pass.

## Caveats

## Links

- Course notes: https://advances.realtimerendering.com/s2007/Mittring-Finding_NextGen_CryEngine2(Siggraph07%20Course%20Notes).pdf
- Slides: https://www.advances.realtimerendering.com/s2007/Mittring-Finding_NextGen_CryEngine2(Siggraph07).pdf
