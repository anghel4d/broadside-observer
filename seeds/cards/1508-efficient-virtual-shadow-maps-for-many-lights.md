---
title: "Efficient Virtual Shadow Maps for Many Lights"
authors: ["Ola Olsson", "Erik Sintorn", "Viktor Källberg", "Markus Billeter", "Ulf Assarsson"]
year: 2014
venue: "I3D"
arxiv: null
doi: "10.1145/2556700.2556701"
source: "http://www.cse.chalmers.se/~uffe/vsmml.pdf"
topics: [virtual-shadow-maps, many-lights, clustered]
seed_rank: 1508
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: direct-illumination
cites:
  - title: "Clustered Deferred and Forward Shading"
    url: "http://www.cse.chalmers.se/~uffe/clustered_shading_preprint.pdf"
    year: 2012
    arxiv: null
    doi: "10.1145/2159616.2159619"
  - title: "Virtual Shadow Maps in Fortnite Battle Royale Chapter 4"
    url: "https://www.unrealengine.com/tech-blog/virtual-shadow-maps-in-fortnite-battle-royale-chapter-4"
    year: 2023
    arxiv: null
    doi: null
  - title: "Tiled Shading"
    url: "https://jcgt.org/published/0001/02/01/"
    year: 2011
    arxiv: null
    doi: "10.1080/2151237X.2011.621761"
see:
  - "477-clustered-deferred-and-forward-shading"
---

# Efficient Virtual Shadow Maps for Many Lights

## One-sentence takeaway

Clustered shading plus cube virtual shadow maps so hundreds of local lights get real shadows without a cascade per lamp — the academic parent of UE5 VSM.

## Why it matters here

Fortnite VSM (this batch) is the shipped UE5 writeup; this I3D 2014 paper is the clustered + cube-VSM algorithm it sits on. GRID COMMAND many-lamp interiors should cite Olsson before they cite a Fortnite blog.

## Key ideas

- **Per-light virtual cube SM.** Allocate pages only where clustered tiles demand them; unused faces/pages stay unbacked.
- **Clustered as the demand signal.** Light bins from clustered shading (477) tell the pager which lights and which cube faces are visible.
- **Hundreds of lights.** The point of the paper: shadows for the many-light clustered regime, not one sun cascade.
- **Evidence.** I3D 2014, doi `10.1145/2556700.2556701`. PDF: http://www.cse.chalmers.se/~uffe/vsmml.pdf

## Caveats

- 2014 hardware-virtualization, not Nanite page raster. Cube-face aliasing and page thrash remain. Not a remint of clustered 477. Distinct from Donnelly VSM (359).

## Links

- PDF: http://www.cse.chalmers.se/~uffe/vsmml.pdf
- DOI: https://doi.org/10.1145/2556700.2556701
