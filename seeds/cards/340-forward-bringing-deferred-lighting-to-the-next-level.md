---
title: "Forward+: Bringing Deferred Lighting to the Next Level"
authors:
  - "Takahiro Harada"
  - "Jay McKee"
  - "Jason C. Yang"
year: 2012
venue: "Eurographics Short Papers"
arxiv: null
doi: null
source: "https://takahiroharada.github.io/downloads/eg2012_notes.pdf"
topics:
  - forward-plus
seed_rank: 340
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Clustered Deferred and Forward Shading"
    url: "http://publications.lib.chalmers.se/publication/161725-clustered-deferred-and-forward-shading"
    year: 2012
    arxiv: null
    doi: null
see: []
---

# Forward+: Bringing Deferred Lighting to the Next Level

## One-sentence takeaway

Forward+ keeps a forward material pass but first builds a per-tile light list from a compute prepass, so hundreds of lights shade only the pixels whose tiles they overlap.

## Why it matters here

Anoptic’s clustered/forward path is this paper: you want many dynamic lights without a fat G-buffer, and you already have a depth prepass to cull against.

## Key ideas

- A z-prepass produces a depth buffer. A compute shader then bins lights into screen-space tiles (typically 16×16) using each tile’s min/max depth.
- The opaque pass is ordinary forward shading, but each pixel iterates only the lights in its tile list instead of the full light array.
- MSAA, transparent objects, and custom material BRDFs stay natural — the usual deferred-G-buffer tax goes away.
- Light culling is the expensive new pass; clustered shading (Olsson et al., 2012) later adds a depth dimension to the bins.
- Eurographics 2012 short notes; author PDF at the source URL.

## Caveats

## Links

- PDF: https://takahiroharada.github.io/downloads/eg2012_notes.pdf
