---
title: "Pre-Integrated Skin Shading"
authors: ["Eric Penner", "George Borshukov"]
year: 2011
venue: "GPU Pro 2"
arxiv: null
doi: "10.1201/b11325-9"
source: "https://doi.org/10.1201/b11325-9"
topics: [subsurface-scattering]
seed_rank: 1320
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: subsurface-scattering
cites:
  - title: "Fast Skin Shading"
    url: "https://therealmjp.github.io/posts/sss-intro/"
    year: 2009
    arxiv: null
    doi: null
see:
  - "1340-fast-skin-shading"
---

# Pre-Integrated Skin Shading

## One-sentence takeaway

Bake curvature+shadow SSS; no runtime blur.

## Problem

Predecessor chain TSD too heavy for consoles → pre-integrated. This paper's job: Bake curvature+shadow SSS; no runtime blur.

## Design

Bake curvature+shadow SSS; no runtime blur. Lineage: TSD too heavy for consoles → pre-integrated.

## Evidence

GPU Pro 2 2011. DOI `10.1201/b11325-9`. Bake curvature+shadow SSS; no runtime blur.

## Limitations

Real-time approximation. Misses off-screen lighting and thick-part transport. Not a replacement for path-traced SSS.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint this 2011 GPU Pro 2 paper. Bake curvature+shadow SSS; no runtime blur.

## Links

- DOI: [10.1201/b11325-9](https://doi.org/10.1201/b11325-9)
