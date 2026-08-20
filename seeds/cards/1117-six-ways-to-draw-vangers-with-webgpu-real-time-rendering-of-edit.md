---
title: "Six Ways to Draw Vangers with WebGPU: Real-Time Rendering of Editable Multi-Layer Height Fields"
authors:
  - "Dzmitry Malyshau"
year: 2026
venue: "arXiv:cs.GR"
arxiv: "2608.17390"
doi: null
source: "https://arxiv.org/abs/2608.17390"
topics:
  - "vulkan-realtime-rendering"
  - "mesh-shaders-gpu-driven"
seed_rank: 1117
seed_batch: "frontier-2026-08-20"
reviewed: "2026-08-20"
pool: "engines"
relevance_score: 10
lineage: game-terrain
cites:
  - title: "ROAMing Terrain: Real-time Optimally Adapting Meshes"
    url: "https://doi.org/10.1109/VISUAL.1997.663860"
    year: 1997
    arxiv: null
    doi: "10.1109/VISUAL.1997.663860"
  - title: "Geometry Clipmaps: Terrain Rendering Using Nested Regular Grids"
    url: "https://doi.org/10.1145/1185657.1188228"
    year: 2004
    arxiv: null
    doi: "10.1145/1185657.1188228"
  - title: "The Clipmap: A Virtual Mipmap"
    url: "https://doi.org/10.1145/280814.280855"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280855"
  - title: "Uniformity Analysis in the WebGPU Shading Language"
    url: "https://doi.org/10.1145/3808331"
    year: 2026
    arxiv: null
    doi: "10.1145/3808331"
see:
  - "1100-roaming-terrain-real-time-optimally-adapting-meshes"
  - "362-geometry-clipmaps-terrain-rendering-using-nested-regular-gri"
  - "1070-the-clipmap-a-virtual-mipmap"
  - "1061-uniformity-analysis-in-the-webgpu-shading-language"
  - "100-framegraph-extensible-rendering-architecture-in-frostbite"
---

# Six Ways to Draw Vangers with WebGPU: Real-Time Rendering of Editable Multi-Layer Height Fields

## One-sentence takeaway

Game terrain is not a DEM: two solid intervals per sample, editable without a reload, and six WebGPU methods that look identical from Vangers' top-down camera and fall apart at eye-level.

## Why it matters here

The only in-window engine crème. GRID COMMAND is WebGPU (1061); Anoptic is Vulkan mesh/RC, but the *terrain contract* is shared: authored multi-layer height, caves as real occupancy not decoration, local destruction without rebuilding the level. Archive already has ROAM (1100), clipmaps (362/1070). This is the 2026 measurement: height-field ray march, voxel-accelerated march, sliced proxies, per-sample bars, compute scatter, greedy TIN — one engine, one data path, scored against a CPU ray cast of the 1998 Vangers map. Malyshau (wgpu/naga) is writing the comparison GRID COMMAND actually has to pick.

## Key ideas

- Constraints that kill academic DEM pipelines: preserve two solid intervals at a ground sample, stay interactive, reflect local terrain destruction without reloading.
- From the original top-down camera the six methods are interchangeable. At eye-level horizons they are not: point scatter loses coverage, slicing bands, an over-simplified mesh misses a wall.
- Greedy TIN has the lowest mean frame time on every measured device, but fit cost is set by the *second layer* not floor relief, and keeping it editable retains 319 MiB GPU geometry + 535 MiB CPU triangulation.
- All six implementations share one data path, so the comparison is about the draw method, not about asset conversion.

## Caveats

- Vangers 1998 is a specific authored map, not a procedural planet. Results may not transfer to clipmap-streaming worlds.
- WebGPU, not Vulkan meshlets/RC. Native Anoptic still needs a mesh/RC translation; this is the GRID COMMAND / wgpu-side measurement.
- TIN edit cost is the actual production blocker — fastest draw is not the cheapest to mutate.

## Links

- arXiv: [2608.17390](https://arxiv.org/abs/2608.17390)
