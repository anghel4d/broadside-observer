---
title: "Bitmask Soft Shadows"
authors: ["Michael Schwarz", "Marc Stamminger"]
year: 2007
venue: "Computer Graphics Forum"
arxiv: null
doi: "10.1111/j.1467-8659.2007.01074.x"
source: "https://doi.org/10.1111/j.1467-8659.2007.01074.x"
topics: [bitmask, soft-shadows]
seed_rank: 1523
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: soft-shadows
cites:
  - title: "Real-time Soft Shadow Mapping by Backprojection"
    url: "https://doi.org/10.2312/EGWR/EGSR06/227-234"
    year: 2006
    arxiv: null
    doi: "10.2312/EGWR/EGSR06/227-234"
  - title: "Percentage-Closer Soft Shadows"
    url: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
    year: 2005
    arxiv: null
    doi: null
---

# Bitmask Soft Shadows

## One-sentence takeaway

Schwarz–Stamminger bitmask occluder fusion: each SM sample sets bits on a discretized light, OR-reducing overlapping backprojections — the SSM quality jump.

## Why it matters here

Guennebaud 2006 (this batch) over-counts overlapping micro-occluders. Bitmasks make the union on the light cheap and robust. Still the quality reference for raster SSM before RT shadows.

## Key ideas

- **Light as a bitfield.** Discretize the area light into N bits; each backprojected SM texel ORs its covered bits.
- **Union, not sum.** Overlapping occluders cannot darken past 'fully blocked' — the classic SSM over-occlusion fix.
- **Realtime 2007.** Bitwise reduction fits GPU blend/ALU of the era; quality beats PCSS on large penumbrae.
- **Evidence.** CGF 2007 (EGSR), doi `10.1111/j.1467-8659.2007.01074.x`.

## Caveats

- Bit resolution vs light shape: coarse bitmasks stripe. Gaps in the SM still miss occluders (Adaptive 2007). Not PCSS.

## Links

- DOI: https://doi.org/10.1111/j.1467-8659.2007.01074.x
