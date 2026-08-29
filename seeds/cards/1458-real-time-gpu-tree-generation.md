---
title: "Real-Time GPU Tree Generation"
authors: ["Bastian Kuth", "Max Oberberger", "Carsten Faber", "Pirmin Pfeifer", "Seyedmasih Tabaei", "Dominik Baumeister", "Quirin Meyer"]
year: 2025
venue: "High-Performance Graphics 2025"
arxiv: null
doi: "10.2312/hpg.20251168"
source: "https://doi.org/10.2312/hpg.20251168"
topics: [mesh-shaders-gpu-driven, vulkan-realtime-rendering]
seed_rank: 1458
seed_batch: "craft-2026-08-29"
reviewed: "2026-08-29"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Real-Time Procedural Generation with GPU Work Graphs"
    url: "https://doi.org/10.1145/3675376"
    year: 2024
    arxiv: null
    doi: "10.1145/3675376"
  - title: "D3D12 Preview: Mesh Nodes in Work Graphs"
    url: "https://devblogs.microsoft.com/directx/d3d12-mesh-nodes-in-work-graphs/"
    year: 2024
    arxiv: null
    doi: null
see:
  - "1457-real-time-procedural-generation-with-gpu-work-graphs"
  - "015-gpu-driven-rendering-pipelines"
  - "1392-between-tech-and-art-the-vegetation-of-horizon-zero-dawn"
  - "1403-interactive-wind-and-vegetation-in-god-of-war"
---

# Real-Time GPU Tree Generation

## One-sentence takeaway

Mesh nodes turn a work graph into an amplification shader: generate and rasterize unique trees from kilobytes of code every frame (3.13 ms to G-buffer on a 7900 XTX) with continuous LOD, culling, and seasonal detail.

## Why it matters here

Horizon 1392 and GoW 1403 *bake* vegetation. Kuth 2024 (1457) could only emulate graphic leaves with indirect draws. This is the mesh-node leftover: draw calls are graph leaves, no CPU, no gigabytes of twigs on disk. A 4X/RTS forest that edits live and only exists for this camera is the Anoptic version. First paper that actually uses mesh nodes.

## Key ideas

- **Mesh nodes as leaves.** A work-graph leaf is a mesh-shader graphics pipeline (mesh + pixel + raster state), not a compute shader. That is amplification-on-steroids: the graph both decides work and feeds the rasterizer.
- **Work-graph craft.** Work coalescing, specialized nodes, record compression, and pass fusion for deferred shadow maps — the practical knobs once you have more than a toy graph.
- **Continuous, frame-specific LOD.** Tessellation and detail are chosen per frame from the camera, not from a baked LOD chain. Generation + G-buffer for the teaser grove is 3.13 ms; they do not regenerate for the shadow pass (pass fusion).
- **Authoring + seasons.** Instant in-engine edits; blossoms, fruit, and snow as graph outputs rather than extra meshes.

## Caveats

Mesh nodes were a D3D12 preview (Agility SDK / Shader Model 6.9); not a Vulkan mesh-shader PSO switch. Vegetation-shaped — the transferable bit is *mesh-node leaves*, not a SpeedTree replacement. GI/nature already has the artist vegetation talks (1392, 1403); this is the GPU *command* leftover of 015/1457, not a snow/SSS remint. Eight-bit BVH masks and depth-32 still apply from 1457.

## Links

- DOI: [10.2312/hpg.20251168](https://doi.org/10.2312/hpg.20251168)
- EG Diglib: https://diglib.eg.org/handle/10.2312/hpg20251168
- PDF: https://diglib.eg.org/bitstream/handle/10.2312/hpg20251168/hpg20251168.pdf
