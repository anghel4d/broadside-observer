---
title: "Geometry Clipmaps: Terrain Rendering Using Nested Regular Grids"
authors:
  - "Frank Losasso"
  - "Hugues Hoppe"
year: 2004
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/1186562.1015799"
source: "https://doi.org/10.1145/1186562.1015799"
topics:
  - terrain
  - lod
seed_rank: 362
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Real-time, continuous level of detail rendering of height fields"
    url: "https://doi.org/10.1145/237170.237217"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237217"
  - title: "ROAMing terrain: Real-time Optimally Adapting Meshes"
    url: "https://doi.org/10.1109/VISUAL.1997.663860"
    year: 1997
    arxiv: null
    doi: "10.1109/VISUAL.1997.663860"
  - title: "Pyramidal parametrics"
    url: "https://doi.org/10.1145/800059.801126"
    year: 1983
    arxiv: null
    doi: "10.1145/800059.801126"
---

# Geometry Clipmaps: Terrain Rendering Using Nested Regular Grids

## One-sentence takeaway

Keep a pyramid of nested regular grids centered on the viewer and incrementally shift them as the camera moves, so terrain LOD is a clipmap update rather than a mesh rebuild.

## Why it matters here

Anoptic world-scale ground (GRID COMMAND maps, Broadside islands) wants GPU-friendly, uniformly tessellated height fields — not ROAM triangle splits on the CPU. Geometry clipmaps are the regular-grid ancestor of every modern clipmap / virtual-texture terrain path.

## Key ideas

- Each clipmap level is a fixed-size toroidal grid at twice the spacing of the level inside it; the viewer sits at the common center.
- Camera motion is an incremental blit / decompress into the region that just entered the window; most vertices stay put.
- Transition regions morph the outer ring to hide T-junctions between levels.
- GPU vertex textures (then novel) let the same grid be displaced every frame; compression and synthesis fill unpaged regions.

## Caveats

## Links

- DOI: https://doi.org/10.1145/1186562.1015799
- Author page: https://hhoppe.com/proj/geomclipmap/
