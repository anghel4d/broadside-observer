---
title: "Improved Alpha-Tested Magnification for Vector Textures and Special Effects (SDF)"
authors:
  - "Chris Green"
year: 2007
venue: "SIGGRAPH 2007 sketches"
arxiv: null
doi: "10.1145/1281500.1281665"
source: "https://steamcdn-a.akamaihd.net/apps/valve/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf"
topics:
  - sdf
  - text
seed_rank: 286
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
cites:
  - title: "Resolution independent curve rendering using programmable graphics hardware"
    url: "https://doi.org/10.1145/1073204.1073303"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073303"
  - title: "Adaptively sampled distance fields"
    url: "https://doi.org/10.1145/344779.344899"
    year: 2000
    arxiv: null
    doi: "10.1145/344779.344899"
  - title: "The Direct3D 10 system"
    url: "https://doi.org/10.1145/1141911.1141947"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141947"
  - title: "Silhouette maps for improved texture magnification"
    url: "https://doi.org/10.1145/1058129.1058139"
    year: 2004
    arxiv: null
    doi: "10.1145/1058129.1058139"
  - title: "Real-time texture-mapped vector glyphs"
    url: "https://doi.org/10.1145/1111411.1111433"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111433"
see: []
---

# Improved Alpha-Tested Magnification for Vector Textures and Special Effects (SDF)

## One-sentence takeaway

Store a signed distance field in a low-resolution alpha texture and reconstruct a sharp, antialiased silhouette in the shader by thresholding the interpolated distance — Valve's 2007 trick for resolution-independent UI text, decals, and shadows.

## Why it matters here

Anoptic HUD, world text, and cheap contact shadows all want this. One 64² SDF atlas beats a stack of bitmap mip chains, and the same field feeds outline / glow / drop-shadow without extra geometry.

## Key ideas

- Encode the distance to the nearest edge (positive inside) in the alpha channel; bilinear filtering of the field is still a valid distance approximation.
- A shader `clip(d - 0.5)` (plus a fwidth-based smoothstep) yields a crisp magnified edge from a tiny texture.
- Outlines, glows, and drop shadows are just extra thresholds or derivatives on the same sample.
- Beats vector-texture and silhouette-map alternatives of the era on GPU cost; authoring is a one-time distance transform of a high-res mask.
- SIGGRAPH 2007 sketch, DOI 10.1145/1281500.1281665. Canonical PDF is Valve's SIGGRAPH upload, not the ACM paywall landing page.

## Caveats

## Links

- Valve PDF: https://steamcdn-a.akamaihd.net/apps/valve/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf
- DOI: [10.1145/1281500.1281665](https://doi.org/10.1145/1281500.1281665)
