---
title: "Virtual Shadow Maps in Fortnite Battle Royale Chapter 4"
authors: ["Andrew Lauritzen", "Ola Olsson"]
year: 2023
venue: "Unreal Engine Tech Blog"
arxiv: null
doi: null
source: "https://www.unrealengine.com/tech-blog/virtual-shadow-maps-in-fortnite-battle-royale-chapter-4"
topics: [virtual-shadow-maps, Nanite, production]
seed_rank: 1503
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 10
lineage: direct-illumination
cites:
  - title: "Efficient Virtual Shadow Maps for Many Lights"
    url: "http://www.cse.chalmers.se/~uffe/vsmml.pdf"
    year: 2014
    arxiv: null
    doi: "10.1145/2556700.2556701"
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "Cascaded Shadow Maps"
    url: "https://developer.download.nvidia.com/SDK/10.5/opengl/src/cascaded_shadow_maps/doc/cascaded_shadow_maps.pdf"
    year: 2006
    arxiv: null
    doi: null
  - title: "Lumen: Real-time Global Illumination in Unreal Engine 5"
    url: "https://advances.realtimerendering.com/s2022/SIGGRAPH2022-Advances-Lumen-Wright%20et%20al.pdf"
    year: 2022
    arxiv: null
    doi: null
see:
  - "477-clustered-deferred-and-forward-shading"
  - "356-cascaded-shadow-maps"
  - "015-gpu-driven-rendering-pipelines"
  - "1377-lumen-real-time-global-illumination-in-unreal-engine-5"
---

# Virtual Shadow Maps in Fortnite Battle Royale Chapter 4

## One-sentence takeaway

UE5's shipped virtual shadow map: a sparse 16K-page atlas, Nanite-culled per page, replacing cascades for Fortnite-scale direct shadows — the production paper of record for VSM in a live game.

## Why it matters here

Anoptic/GRID COMMAND already has GPU-driven (015) and clustered (477) vocabulary; this is how a Nanite-class geo budget does *sun and local* shadows without CSM (356) cascade swimming. Academic parent is Olsson 2014 (this batch). Lumen (1377) is the GI sibling, not the shadow map.

## Key ideas

- **Sparse virtual pages.** A huge logical SM (16K² class) physically backed only where screen/Nanite requests pages; clipmap-style invalidation when the light or receiver moves.
- **Nanite as the rasterizer.** Per-page culling + clustered tessellation so distant pages rasterize coarse and near pages get full detail — SM resolution follows projected size, not cascade splits.
- **Many local lights.** Cube/spot VSMs for local lights share the same page pool; the Fortnite chapter-4 ship is the existence proof that the atlas scales past a cinematic demo.
- **Evidence.** Unreal Engine Tech Blog 2023, Lauritzen & Olsson. https://www.unrealengine.com/tech-blog/virtual-shadow-maps-in-fortnite-battle-royale-chapter-4

## Caveats

- Engine-blog paper of record, not a TOG algorithm paper — page-table / invalidation details live in UE5 source. Over-cache and you blow video memory; under-cache and you shimmer. Not a remint of CSM 356, clustered 477, or Lumen 1377. Distinct from Donnelly VSM (359), which is a *filterable* SM, not a virtual page table.

## Links

- URL: https://www.unrealengine.com/tech-blog/virtual-shadow-maps-in-fortnite-battle-royale-chapter-4
