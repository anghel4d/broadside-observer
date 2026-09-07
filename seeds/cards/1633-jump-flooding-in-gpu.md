---
title: "Jump Flooding in GPU with Applications to Voronoi Diagram and Distance Transform"
authors:
  - "Guodong Rong"
  - "Tiow-Seng Tan"
year: 2006
venue: "I3D (Symposium on Interactive 3D Graphics and Games)"
arxiv: null
doi: "10.1145/1111411.1111431"
source: "https://www.comp.nus.edu.sg/~tants/jfa/i3d06.pdf"
topics:
  - jump-flooding
  - voronoi
  - distance-transform
  - gpu-gpgpu
seed_rank: 1633
seed_batch: "archive-2026-09-08"
reviewed: "2026-09-08"
pool: "graphics"
relevance_score: 9
lineage: distance-fields
cites:
  - title: "Sequential Operations in Digital Picture Processing"
    url: "https://doi.org/10.1145/321356.321357"
    year: 1966
    arxiv: null
    doi: "10.1145/321356.321357"
see:
  - "125-signed-distance-fields-for-text"
  - "257-signed-distance-fields-dynamic-diffuse-global-illumination"
---

# Jump Flooding in GPU with Applications to Voronoi Diagram and Distance Transform

## One-sentence takeaway

Jump flooding fills a GPU grid in O(log n) passes by doubling/halving the step offset each round, producing a visually exact Voronoi diagram and distance transform that is constant-time in practice for interactive rendering and image-processing.

## Why it matters here

GRID COMMAND influence maps, unit Voronoi ownership, soft-shadow penumbrae, and SDF generation all want a fast grid flood. JFA is the durable GPU algorithm behind many jump-flood shadertoys and engine SDF builds — pair with live SDF cards 125 / 257. Not a remint of Crow shadows 1043 or Instant Radiosity 450; those are lighting, this is the fill primitive.

## Key ideas

- **Jump, don't crawl.** Classical grassfire / chamfer distance walks step-1 neighbors (O(n) rounds on an n×n grid). JFA instead uses offsets n/2, n/4, …, 1: each texel queries 8 neighbors at the current offset and keeps the closest seed seen so far.
- **Voronoi + distance as the same pass.** Seeds write their identity (and optionally position); after log n rounds every texel holds the nearest seed — the discrete Voronoi diagram — and Euclidean distance is a cheap post from stored seed coordinates.
- **Error analysis, not just demos.** Most errors are rare and visually invisible; the paper quantifies when JFA's parallel information jump can miss a seed path that a sequential flood would find, and discusses variants (JFA+1/JFA+2) that clean residual errors with one or two extra step-1 passes.
- **GPGPU fit.** Implemented as ping-pong textures / multipass shaders on then-current GPUs; maps cleanly to modern compute.

## Caveats

- Approximation: JFA is not a proof of exact Euclidean Voronoi on discrete grids without the +k variants; for exact computational-geometry Voronoi use Fortune/sweep or a CPU library.
- Resolution-bound: cost is O(log n) full-screen passes — fine at 512²–2k², watch bandwidth at 4k+ or 3D grids.
- Soft-shadow and SDF uses are cited as motivation; this paper is the flood algorithm, not a complete shadow or GI system.

## Links

- Author PDF: https://www.comp.nus.edu.sg/~tants/jfa/i3d06.pdf
- DOI: https://doi.org/10.1145/1111411.1111431
