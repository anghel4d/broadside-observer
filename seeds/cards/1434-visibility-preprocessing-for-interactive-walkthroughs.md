---
title: "Visibility Preprocessing for Interactive Walkthroughs"
authors: ["Seth J. Teller", "Carlo H. Séquin"]
year: 1991
venue: "SIGGRAPH 1991"
arxiv: null
doi: "10.1145/122718.122725"
source: "https://doi.org/10.1145/122718.122725"
topics: [vulkan-realtime-rendering, ecs-data-oriented-simulation]
seed_rank: 1434
seed_batch: "archive-2026-08-28"
reviewed: "2026-08-28"
pool: "graphics"
relevance_score: 10
lineage: visibility-culling
cites:
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
  - title: "Visibility Culling using Hierarchical Occlusion Maps"
    url: "https://doi.org/10.1145/258734.258781"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258781"
see:
  - "144-hierarchical-z-buffer-visibility"
  - "1432-visibility-culling-using-hierarchical-occlusion-maps"
  - "1100-roaming-terrain-real-time-optimally-adapting-meshes"
---

# Visibility Preprocessing for Interactive Walkthroughs

## One-sentence takeaway

Precompute a cell-to-cell potentially visible set over a spatial subdivision so interactive walkthroughs only draw geometry that can possibly see the eye cell.

## Why it matters here

Anoptic’s unbounded interiors and GRID COMMAND’s large maps cannot afford per-frame full-scene occlusion alone. Teller–Séquin make visibility a *spatial database* problem: stab cells with line-of-sight, store PVS as a conservative adjacency over cells, then stream and draw only the live set. HOM (1432) and Hi-Z (144) are online filters; this is the offline/streaming contract those filters sit on. Portal graphs, sector dirtying, and interest management all inherit the same cell algebra.

## Key ideas

- **Cells and portals.** Partition the model into cells; portals are transparent faces between cells. Visibility becomes stabbing sequences of portals, not object–object tests.
- **Potentially Visible Sets.** For each eye cell, store the set of cells (or objects) that may be visible; the set is conservative so missing geometry never pops, only overdraw remains.
- **Preprocess once, query cheap.** Heavy analytic or sampled stabbing runs offline; runtime is set lookup plus ordinary frustum/Hi-Z culling.
- **Evidence.** SIGGRAPH 1991. Architectural walkthroughs with large static models; the PVS vocabulary still structures game sector/portal pipelines and streaming world partitions.

## Caveats

Assumes largely static geometry and a useful cell decomposition — dynamic doors, destructible walls, and fully open outdoor fields need hybrid online occlusion (HOM/Hi-Z) or coarser cells. Over-conservative PVS wastes bandwidth; under-conservative PVS holes. Not a remint of Greene Hi-Z (144) or Zhang HOM (1432).

## Links

- DOI: https://doi.org/10.1145/122718.122725
- ACM DL: https://dl.acm.org/doi/10.1145/122718.122725
