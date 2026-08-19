---
title: "ExileCon 2023: Rendering Path of Exile 2"
authors:
  - "Alexander Sannikov"
year: 2023
venue: "talk"
arxiv: null
doi: null
source: "https://www.youtube.com/watch?v=TrHHTQqmAaM"
topics:
  - radiance-cascades
  - gi
  - rtgi
  - screenspace
seed_rank: 1108
seed_batch: "radiance-cascades-wip-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "211-holographic-radiance-cascades-for-2d-global-illumination"
  - "1109-radiance-cascades-shadertoy"
---

# ExileCon 2023: Rendering Path of Exile 2

## One-sentence takeaway

Sannikov's ExileCon 2023 talk is the first public presentation of Radiance Cascades as Path of Exile 2's shipped screenspace GI, sitting next to the predecessor HSSVGI / hierarchical screenspace shadow cascades.

## Why it matters here

Anoptic's Vulkan engine needs the *production* RC path, not only the GitHub WIP tex. PoE2 is a 3D game with a mostly-fixed camera; Sannikov rebuilt the 2D cascade idea as a hierarchy of screenspace radiance probes filled by screenspace raymarching. That is the implementation that actually exists while dense world-space 3D RC is still O(n³). Watch this talk for what "screenspace RC" means in a live title before reaching for Split RC / surfels.

## Key ideas

- First public RC presentation (Nov 2023). The founding paper (card 005) is the writeup; this talk is the production walkthrough.
- Path of Exile 2 GI is a hierarchy of screenspace radiance-probe cascades, populated with screenspace raymarching — not a dense 3D probe volume.
- Predecessor chain named on stage and in the paper: HSSVGI and hierarchical screenspace shadow cascades from ExileCon 2019.
- 2D testbed came first because a full 3D grid was "very hard"; the game path is the screenspace adaptation of that 2D cascade merge.
- Direction-first / min-max depth probe layouts that later Unity URP ports cite as coming from this talk.

## Caveats

- This is a conference talk, not a refereed paper. No peer review, no formal error analysis, no public engine source.
- Screenspace RC cannot light or occlude from off-screen geometry; that is the whole point of later world-space / surfel / UV-space / Split RC work.
- Do not treat PoE2 shipping as evidence that dense 3D cascade-0 voxel grids are cheap.

## Links

- Talk: [ExileCon 2023 - Rendering Path of Exile 2](https://www.youtube.com/watch?v=TrHHTQqmAaM)
- Wiki: https://radiance.wiki/talks/exilecon-2023
- Founding WIP paper: https://github.com/Raikiri/RadianceCascadesPaper
