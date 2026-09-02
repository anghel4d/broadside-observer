---
title: "A fast shadow algorithm for area light sources using backprojection"
authors: ["George Drettakis", "Eugene Fiume"]
year: 1994
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/192161.192207"
source: "https://doi.org/10.1145/192161.192207"
topics: [area-lights, backprojection]
seed_rank: 1522
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: soft-shadows
cites:
  - title: "Real-time Soft Shadow Mapping by Backprojection"
    url: "https://doi.org/10.2312/EGWR/EGSR06/227-234"
    year: 2006
    arxiv: null
    doi: "10.2312/EGWR/EGSR06/227-234"
  - title: "Shadow Algorithms for Computer Graphics"
    url: "https://doi.org/10.1145/563858.563901"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563901"
see:
  - "1043-shadow-algorithms-for-computer-graphics"
---

# A fast shadow algorithm for area light sources using backprojection

## One-sentence takeaway

Drettakis–Fiume 1994 founding backprojection: discontinuities of area-light vis are computed by projecting occluders onto the light — Guennebaud's analytic ancestor.

## Why it matters here

Guennebaud 2006 (this batch) is the SM realtime version; this SIGGRAPH 1994 paper is the discontinuity-meshing / backprojection origin. Crow 1043 is point-light volumes. GRID COMMAND 'exact area vis' citations start here, not at PCSS.

## Key ideas

- **Backproject onto the light.** Occluder edges, as seen from a receiver, partition the area light into fully-visible / partial / hidden; vis is an integral over those regions.
- **Discontinuity meshing.** The algorithm tracks umbra/penumbra events across surfaces for a mesh of vis events, not a per-pixel heuristic.
- **Founding analytic vis.** Later SSM, bitmask, and SSV papers all cite this as the 'what we are approximating' paper.
- **Evidence.** SIGGRAPH 1994, doi `10.1145/192161.192207`.

## Caveats

- Offline 1994; meshing cost is the reason SM approximations exist. Not a remint of Crow 1043.

## Links

- DOI: https://doi.org/10.1145/192161.192207
