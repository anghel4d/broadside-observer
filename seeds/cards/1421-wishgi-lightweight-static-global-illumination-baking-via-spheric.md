---
title: "WishGI: Lightweight Static Global Illumination Baking via Spherical Harmonics Fitting"
authors:
  - "Junke Zhu"
  - "Zehan Wu"
  - "Qixing Zhang"
  - "Cheng Liao"
  - "Zhangjin Huang"
year: 2025
venue: "SIGGRAPH / TOG"
arxiv: "2506.01288"
doi: "10.1145/3730935"
source: "https://arxiv.org/abs/2506.01288"
topics:
  - "lightmaps"
  - "sh"
  - "tod"
  - "mobile"
  - "baking"
seed_rank: 1421
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: china-graphics
cites:
  - title: "Precomputed Radiance Transfer"
    url: "https://doi.org/10.1145/566570.566612"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566612"
  - title: "An Efficient Representation for Irradiance Environment Maps"
    url: "https://doi.org/10.1145/383259.383317"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383317"
see:
  - "366-precomputed-radiance-transfer"
  - "367-an-efficient-representation-for-irradiance-environment-maps"
---

# WishGI: Lightweight Static Global Illumination Baking via Spherical Harmonics Fitting

## One-sentence takeaway

Lightweight SH-fit GI bake with LOD + 24h TOD in tiny memory. Shipping-shaped USTC 2025.

## Why it's lovely

Why you might love this: A lightmap that still does 24 hours, in a mobile memory budget. USTC WishGI — bake, don't pretend to path-trace.

## Problem

Static GI baking is either huge (lightmaps × TOD) or dead (one sky). Mobile wants LOD + 24h TOD in tiny memory, with SH that actually fits.

## Design

- SH fitting for baked GI, lightweight enough for mobile.
- LOD + 24h time-of-day in a compact store.
- SIGGRAPH / TOG 2025; arXiv 2506.01288 (POOL); DOI 10.1145/3730935; USTC GCL page also in KEEP.
- USTC GCL. Production-shaped, not a NeRF.

## Evidence

USTC 2025 TOG. Shipping-shaped baked GI. Do not drop for Enlighten/PRT near-equivalents.

## Limitations

Static geometry. Not Lumen. SH order bounds the sharpness (same family as PRT 366 / irradiance env maps 367).

## Implications for Broadside

Anoptic mid-spec / mobile bake: WishGI next to Enlighten (1390) and PRT (366). China-graphics lineage.

## Bottom line

Mint WishGI. USTC baked SH GI, 2025.

## Links

- arXiv: [2506.01288](https://arxiv.org/abs/2506.01288)
- DOI: [10.1145/3730935](https://doi.org/10.1145/3730935)
