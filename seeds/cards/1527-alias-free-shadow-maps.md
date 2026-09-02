---
title: "Alias-Free Shadow Maps"
authors: ["Timo Aila", "Samuli Laine"]
year: 2004
venue: "EGSR"
arxiv: null
doi: "10.2312/EGWR/EGSR04/161-166"
source: "https://www.cs.jhu.edu/~cohen/Publs/AFSM.pdf"
topics: [irregular-Z, alias-free-SM, soft-shadows]
seed_rank: 1527
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: soft-shadows
cites:
  - title: "Casting Curved Shadows on Curved Surfaces"
    url: "https://doi.org/10.1145/800248.807402"
    year: 1978
    arxiv: null
    doi: "10.1145/800248.807402"
  - title: "Frustum-traced raster shadows: revisiting irregular z-buffers"
    url: "https://doi.org/10.1145/2699276.2699280"
    year: 2015
    arxiv: null
    doi: "10.1145/2699276.2699280"
  - title: "Rendering Antialiased Shadows with Depth Maps"
    url: "https://graphics.pixar.com/library/ShadowMaps/paper.pdf"
    year: 1987
    arxiv: null
    doi: null
see:
  - "1005-casting-curved-shadows-on-curved-surfaces"
  - "1066-rendering-antialiased-shadows-with-depth-maps"
---

# Alias-Free Shadow Maps

## One-sentence takeaway

Aila–Laine 2004 irregular-Z / alias-free SM: store exact vis at the pixels that will query it, not on a uniform light-space grid — the idea ray-traced contact shadows finally made cheap.

## Why it matters here

Seen-no-card. Williams 1005 and Reeves 1066 are regular SMs. This EGSR 2004 paper is irregular Z: one sample per screen pixel in light space. Wyman frustum-traced 2015 (this batch) is the NVIDIA GPU revival. GRID COMMAND 'why do RT contact shadows look alias-free' starts here.

## Key ideas

- **Irregular z-buffer.** Shadow-map samples live at the light-space projections of *screen* pixels, so the later vis test is exact (no resampling).
- **Alias-free by construction.** No perspective aliasing, no peter-panning from resolution mismatch — the sample *is* the receiver.
- **Then-unimplementable in HW.** 2004 GPUs had no irregular raster; 2015 frustum tracing and HW RT made the idea cheap.
- **Evidence.** EGSR 2004, doi `10.2312/EGWR/EGSR04/161-166`. PDF: https://www.cs.jhu.edu/~cohen/Publs/AFSM.pdf

## Caveats

- Not a remint of Williams 1005 or Reeves 1066. Title was in seen.json without a card. Soft penumbra still needs many samples / wedges; this paper is hard vis without aliasing.

## Links

- PDF: https://www.cs.jhu.edu/~cohen/Publs/AFSM.pdf
- DOI: https://doi.org/10.2312/EGWR/EGSR04/161-166
