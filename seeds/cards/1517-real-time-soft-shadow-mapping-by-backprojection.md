---
title: "Real-time Soft Shadow Mapping by Backprojection"
authors: ["Gaël Guennebaud", "Loïc Barthe", "Mathias Paulin"]
year: 2006
venue: "Rendering Techniques"
arxiv: null
doi: "10.2312/EGWR/EGSR06/227-234"
source: "https://doi.org/10.2312/EGWR/EGSR06/227-234"
topics: [SSM, backprojection]
seed_rank: 1517
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 10
lineage: soft-shadows
cites:
  - title: "A fast shadow algorithm for area light sources using backprojection"
    url: "https://doi.org/10.1145/192161.192207"
    year: 1994
    arxiv: null
    doi: "10.1145/192161.192207"
  - title: "Percentage-Closer Soft Shadows"
    url: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
    year: 2005
    arxiv: null
    doi: null
  - title: "Bitmask Soft Shadows"
    url: "https://doi.org/10.1111/j.1467-8659.2007.01074.x"
    year: 2007
    arxiv: null
    doi: "10.1111/j.1467-8659.2007.01074.x"
see:
  - "1443-fast-accurate-soft-shadows-with-adaptive-light-source-sampling"
---

# Real-time Soft Shadow Mapping by Backprojection

## One-sentence takeaway

Treat SM texels as micro-occluders and backproject them onto the area light to estimate blocked light — THE Guennebaud SSM paper.

## Why it matters here

PCSS (this batch) sizes a PCF kernel; Guennebaud *projects* occluder samples onto the light, which is the quality jump academic SSM papers cite. Drettakis–Fiume 1994 (this batch) is the analytic ancestor; Bitmask 2007 and HQ Adaptive 2007 are the quality follow-ons. Distinct from Schwärzler 1443 (adaptive *light* sampling).

## Key ideas

- **SM as occluder soup.** Each shadow-map texel closer than the receiver is a micro-patch; backproject it onto the area-light plane and union coverage.
- **Search region from light size.** Like PCSS, the kernel grows with penumbra, but the *test* is coverage on the light, not a depth compare.
- **Realtime 2006.** Hierarchical search and mip SM make it interactive; gaps and overlapping occluders are the remaining artifacts (fixed in 2007).
- **Evidence.** EGSR 2006, doi `10.2312/EGWR/EGSR06/227-234`.

## Caveats

- Gaps between SM samples under-occlude; overlapping projections over-occlude without a bitmask. Not a remint of PCSS. Adaptive 2007 (this batch) is the gap-fill follow-on.

## Links

- DOI: https://doi.org/10.2312/EGWR/EGSR06/227-234
