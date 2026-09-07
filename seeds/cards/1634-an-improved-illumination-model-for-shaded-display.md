---
title: "An Improved Illumination Model for Shaded Display"
authors:
  - "Turner Whitted"
year: 1980
venue: "Communications of the ACM 23(6)"
arxiv: null
doi: "10.1145/358876.358882"
source: "https://dl.acm.org/doi/pdf/10.1145/358876.358882"
topics:
  - ray-tracing
  - global-illumination
  - reflection-refraction
seed_rank: 1634
seed_batch: "archive-2026-09-08"
reviewed: "2026-09-08"
pool: "graphics"
relevance_score: 10
lineage: ray-tracing
cites:
  - title: "Illumination for computer generated pictures"
    url: "https://doi.org/10.1145/360825.360839"
    year: 1975
    arxiv: null
    doi: "10.1145/360825.360839"
see:
  - "152-the-rendering-equation"
  - "1038-the-a-buffer-an-antialiased-hidden-surface-method"
  - "1010-the-reyes-image-rendering-architecture"
  - "1043-shadow-algorithms-for-computer-graphics"
  - "450-instant-radiosity"
---

# An Improved Illumination Model for Shaded Display

## One-sentence takeaway

Whitted extends local Phong-style shading with recursive ray tracing for true specular reflection, refraction, and shadows, and folds adaptive supersampling into the visibility query — the paper that made global specular light transport a practical display algorithm.

## Why it matters here

Every path tracer, hybrid GI probe, and one-recursive-reflection debug view in Anoptic descends from this 1980 CACM paper. Kajiya's rendering equation (152) is the integral formalism; Whitted is the operational recursive-ray algorithm that first delivered mirrors, glass, and ray-traced shadows on curved surfaces. Complements A-buffer 1038, REYES 1010, Crow shadows 1043, Instant Radiosity 450 — do not remint those.

## Key ideas

- **Global terms in the shader.** Intensity at a visible point adds contributions from reflected and transmitted rays (Snell/Fresnel-style recursion) plus shadow rays to each light — not only local N·L / Phong lobes.
- **Ray tree per pixel.** Primary visibility rays spawn reflection, refraction, and shadow children; recursion depth and tree pruning keep cost bounded while still capturing mirrors and dielectrics.
- **Curved surfaces first-class.** Works with analytic surfaces as well as polygons because the query is ray ∩ surface, not a z-buffer sample.
- **Anti-aliasing inside visibility.** Adaptive supersampling examines intensity variance in a pixel region and fires more rays where needed — AA is not a separate post-pass.

## Caveats

- Specular-only global transport: diffuse interreflection waits for radiosity / Kajiya / path tracing. Whitted mirrors look right; Whitted matte corners stay locally shaded.
- Cost scales with ray-tree branching and depth; 1980 hardware needed offline rendering. Modern RTX/hardware RT changes constants, not the algorithm's structure.
- ACM PDF used here; DOI 10.1145/358876.358882. Sometimes cited as SIGGRAPH'79 precursor talk — CACM 23(6) June 1980 is the archival article.

## Links

- DOI / ACM PDF: https://doi.org/10.1145/358876.358882
- ACM citation page: https://dl.acm.org/doi/10.1145/358876.358882
