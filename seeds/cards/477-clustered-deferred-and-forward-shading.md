---
title: "Clustered Deferred and Forward Shading"
authors:
  - "Ola Olsson"
  - "Markus Billeter"
  - "Ulf Assarsson"
year: 2012
venue: "HPG"
arxiv: null
doi: "10.2312/EGGH/HPG12/087-096"
source: "https://doi.org/10.2312/EGGH/HPG12/087-096"
topics:
  - clustered-shading
  - gpu-driven
seed_rank: 477
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "Tiled Shading"
    url: "https://doi.org/10.1080/2151237X.2011.621761"
    year: 2011
    doi: "10.1080/2151237X.2011.621761"
---

# Clustered Deferred and Forward Shading

## One-sentence takeaway

Clustered shading bins view samples into 3D (and optionally normal) clusters instead of 2D screen tiles so each light is tested against a tight world-space volume and scenes with ~10^6 local lights stay real-time.

## Why it matters here

Lighting-side counterpart to meshlet/visibility-buffer geometry: Anoptic forward+ should assign lights per cluster, not per 32×32 tile that spans a depth discontinuity.

## Key ideas

- 2D tiled shading over-assigns lights wherever a tile's Z-min/Z-max spans empty space (their Necropolis view: tiled 18.8 ms vs clustered 9.4 ms).
- A cluster key is \((i,j,k[,n])\) — screen tile plus log-view-Z (and optional quantized normal) — so shading cost tracks local light density.
- Pipeline: rasterize G-buffer (or pre-Z for forward), assign samples to clusters, compact the unique occupied clusters, insert lights, then shade.
- Supports both deferred and forward; fully dynamic lights and geometry; designed for limited-range lights without shadows.

## Caveats

## Links

- DOI: [10.2312/EGGH/HPG12/087-096](https://doi.org/10.2312/EGGH/HPG12/087-096)
- PDF: https://www.highperformancegraphics.org/previous/www_2012/media/Papers/HPG2012_Papers_Olsson.pdf
