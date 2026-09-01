---
title: "Portals and Mirrors: Simple, Fast Evaluation of Potentially Visible Sets"
authors: ["David Luebke", "Chris Georges"]
year: 1995
venue: "I3D"
arxiv: null
doi: "10.1145/199404.199422"
source: "https://luebke.us/publications/pdf/portals.pdf"
topics: [vulkan-realtime-rendering, engine]
seed_rank: 1499
seed_batch: "archive-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 10
lineage: visibility-culling
cites:
  - title: "Visibility Preprocessing for Interactive Walkthroughs"
    url: "https://doi.org/10.1145/122718.122725"
    year: 1991
    arxiv: null
    doi: "10.1145/122718.122725"
  - title: "Visibility Culling using Hierarchical Occlusion Maps"
    url: "https://doi.org/10.1145/258734.258781"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258781"
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
  - title: "Towards Image Realism with Interactive Update Rates in Complex Virtual Building Environments"
    url: "https://doi.org/10.1145/91394.91416"
    year: 1990
    arxiv: null
    doi: "10.1145/91394.91416"
see:
  - "1432-visibility-culling-using-hierarchical-occlusion-maps"
  - "144-hierarchical-z-buffer-visibility"
---

# Portals and Mirrors: Simple, Fast Evaluation of Potentially Visible Sets

## One-sentence takeaway

Treat each doorway as a portal that clips the view frustum into the neighbour cell, recurse, and treat mirrors as portals with a reflected frustum — cell-portal PVS without a full BSP stabbing-line preprocess.

## Why it matters here

Indoor GRID COMMAND visibility should not require Teller's cell-to-cell PVS rebuild (1434) every time a wall moves. Luebke–Georges evaluate the potentially visible set *on the fly*: walk the cell graph, clip the remaining frustum through each portal polygon, stop when the portal is clipped away. Mirrors fall out as recursive portals (reflect the eye, clip, draw). HOM (1432) and Hi-Z (144) are image-space occlusion leftovers; this is the indoor *cell* leftover Archive 2026-08-30 deferred when virginia.edu 403'd the PDF. Recovered this pass at `luebke.us`.

## Key ideas

- **Cells and portals.** The world is convex cells joined by polygonal portals. From the eye cell, each visible portal is a 2D clip of the current frustum; geometry in a cell is drawn only if some portal path reaches it.
- **Runtime, not preprocess.** No stabbing-line or conservative-portal visibility cache required for the basic algorithm — cheap enough for 1995 workstations, still the right model for authored indoor levels.
- **Mirrors as portals.** Reflect the eye about the mirror plane, clip by the mirror polygon, recurse. Recursive mirrors compose; a mirror-of-a-mirror is another portal hop.
- **Evidence.** I3D 1995 (1995 Symposium on Interactive 3D Graphics), doi `10.1145/199404.199422`. Author PDF: https://luebke.us/publications/pdf/portals.pdf (prior Archive leftover; UVA copy 403'd).

## Caveats

Outdoor / open GRID COMMAND still wants Hi-Z / HOM / GPU-driven two-phase (015, 1432, 144); cell-portal shines when designers *author* rooms. Non-convex cells need splitting. Dynamic holes (breached walls) are just portal graph edits — cheaper than a Teller rebuild, not free. Not a remint of Teller 1434, HOM 1432, or Greene 144. Film-title Crossref false-friends stay banned.

## Links

- PDF: https://luebke.us/publications/pdf/portals.pdf
- DOI: https://doi.org/10.1145/199404.199422
