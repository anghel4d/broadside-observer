---
title: "Penumbra Maps: Approximate Soft Shadows in Real-Time"
authors: ["Chris Wyman", "Charles D. Hansen"]
year: 2003
venue: "Rendering Techniques"
arxiv: null
doi: "10.2312/EGWR/EGWR03/202-207"
source: "https://doi.org/10.2312/EGWR/EGWR03/202-207"
topics: [penumbra-maps]
seed_rank: 1530
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: soft-shadows
cites:
  - title: "Rendering Fake Soft Shadows with Smoothies"
    url: "https://doi.org/10.2312/EGWR/EGWR03/208-218"
    year: 2003
    arxiv: null
    doi: "10.2312/EGWR/EGWR03/208-218"
  - title: "Approximate Soft Shadows on Arbitrary Surfaces using Penumbra Wedges"
    url: "https://doi.org/10.2312/EGWR/EGWR02/297-306"
    year: 2002
    arxiv: null
    doi: "10.2312/EGWR/EGWR02/297-306"
  - title: "Rendering Antialiased Shadows with Depth Maps"
    url: "https://graphics.pixar.com/library/ShadowMaps/paper.pdf"
    year: 1987
    arxiv: null
    doi: null
see:
  - "1066-rendering-antialiased-shadows-with-depth-maps"
---

# Penumbra Maps: Approximate Soft Shadows in Real-Time

## One-sentence takeaway

Wyman–Hansen inner/outer penumbra maps from silhouettes: two extra maps that interpolate hard umbra to fully lit — approximate soft shadows in real-time, 2003.

## Why it matters here

Same year as Smoothies (this batch) but in SM space: rasterize silhouette cones into *maps*, then lookup. Reeves 1066 is PCF; this is silhouette-driven map filtering. Fuzzy INDEX overlap with SHEXP 1415 is title-tokens only — different paper.

## Key ideas

- **Inner and outer maps.** One map bounds the umbra, one the penumbra extent, both built from silhouette cones in light space.
- **Interpolate vis.** A receiver between inner and outer maps gets a smooth occupancy; outside is lit; inside is hard umbra.
- **Realtime SM path.** Uses the existing shadow-map rasterizer plus a silhouette pass — no wedge fill.
- **Evidence.** EGWR 2003, doi `10.2312/EGWR/EGWR03/202-207`.

## Caveats

- Silhouette holes, overlapping occluders, and large lights break the inner/outer model. Not a remint of 1415. Not PCSS.

## Links

- DOI: https://doi.org/10.2312/EGWR/EGWR03/202-207
