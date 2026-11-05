---
title: "Ultrafast Screen-Space Refractions and Caustics via Newton's Method"
authors:
  - "Chase Mayer"
  - "Ulf Assarsson"
  - "Erik Sintorn"
year: 2026
venue: "Journal of Computer Graphics Techniques (JCGT) 15(1)"
arxiv: null
doi: null
source: "https://jcgt.org/published/0015/01/03/"
topics:
  - "vulkan-realtime-rendering"
  - "radiance-cascades-gi"
seed_rank: 2523
seed_batch: "craft-2026-11-05"
reviewed: "2026-11-05"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Ultrafast Screen-Space Refractions and Caustics via Newton's Method"
    url: "https://jcgt.org/published/0015/01/03/"
    year: 2026
    arxiv: null
    doi: null
see: ["398-approximating-dynamic-global-illumination-in-image-space-ssd"]
---

# Ultrafast Screen-Space Refractions and Caustics via Newton's Method

## One-sentence takeaway

Replace screen-space refraction ray marching with Newton root-finding on the difference between refracted-ray depth and G-buffer depth, converging in a few iterations (0.048 ms on a boat scene; 83–98% of pixels succeed in ≤4 steps) with Sousa-style fallback on failures, and reuse the same trick for screen-space caustic photons.

## Why it matters here

Anoptic already lives in G-buffer / screen-space territory for cheap water and glass; Newton's method is a drop-in step-size rule for the existing march, not a new pipeline, and the failure taxonomy (depth discontinuities, bad initial guesses) is the kind of JCGT engineering note that ports straight into a Vulkan fullscreen pass.

## Key ideas

- **Root, not march.** Per pixel define $f$ as refracted-ray depth minus G-buffer depth; Newton steps using the tangent plane at the current G-buffer hit.
- **Fast in practice.** Boat scene: refractions 0.048 ms; left view 83% succeed within four iterations, right view 98% within two; failures fall back to Sousa 2005.
- **Failure handling.** Detect discontinuities and poor seeds; mitigate or resolve before falling back rather than silently looping.
- **Caustics.** Same root-finder on refracted light rays for screen-space caustics, not only eye-path refraction.
- **Lineage.** Positions Newton (used offline for parametric hits and caustics) as the realtime replacement for linear/hierarchical depth marches.

## Caveats

Screen-space only — missing backfaces and off-screen geometry still fail. Gains assume a G-buffer already paid for. I read the JCGT abstract, introduction and figure captions (PDF).

## Links

- JCGT page: https://jcgt.org/published/0015/01/03/
- PDF: https://jcgt.org/published/0015/01/03/paper.pdf
