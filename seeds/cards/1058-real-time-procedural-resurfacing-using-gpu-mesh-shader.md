---
title: "Real-time procedural resurfacing using GPU mesh shader"
authors: ["Josué Raad", "Arthur Delon", "Mickaël Ribardière", "Daniel Meneveaux", "Guillaume Gilet"]
year: 2025
venue: "CGF"
arxiv: null
doi: "10.1111/cgf.70075"
source: "https://doi.org/10.1111/cgf.70075"
topics: [mesh-shaders-gpu-driven, procedural-content-codegen, vulkan-realtime-rendering]
seed_rank: 1058
seed_batch: "craft-2026-08-17"
reviewed: "2026-08-17"
pool: "graphics"
relevance_score: 10
lineage: mesh-shaders-gpu-driven
cites:
  - title: "Mesh Shaders in the Vulkan Ecosystem"
    url: "https://www.khronos.org/blog/mesh-shading-for-vulkan"
    year: 2018
    arxiv: null
    doi: null
  - title: "Nanite: A Deep Dive"
    url: "https://advances.realtimerendering.com/s2021/Karis_Nanite_SIGGRAPH_Advances_2021_final.pdf"
    year: 2021
    arxiv: null
    doi: null
  - title: "Towards Practical Meshlet Compression"
    url: "https://arxiv.org/abs/2404.06359"
    year: 2024
    arxiv: "2404.06359"
    doi: null
see:
  - "1030-warnock-gpu-geometry-amplification-for-vector-graphics"
  - "1032-real-time-meshlet-extraction-from-scalar-volumes"
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "261-introduction-to-turing-mesh-shaders"
  - "226-towards-practical-meshlet-compression"
---

# Real-time procedural resurfacing using GPU mesh shader

## One-sentence takeaway

Task+mesh shaders amplify a coarse control mesh into explicit procedural geometry at draw time — mapping, payload, amplification, parametric eval, surface sampling — so LoD and appearance stay live without baking VRAM.

## Why it matters here

GRID COMMAND's world and Anoptic's mesh pipeline still treat "detail" as assets we store. This is the missing recipe: keep a control mesh in memory, let the mesh shader grow bark, cobble, battlements, or terrain micro-geo from control maps and user params, and drop LoD by changing amplification rather than swapping meshes. Pairs with Warnock (1030) as the other mesh-shader amplifier (paths vs surfaces) and with 1032's persistent meshlets when you *do* want to cache.

## Key ideas

- A five-stage GPU pipeline (mapping → payload → amplification → parametric evaluation → surface sampling) replaces a baked high-poly mesh; task shaders distribute work, mesh shaders emit the new surface.
- Procedural parameters are driven live by control maps or CPU/GPU inputs — no offline bake, no virtual-texture atlas of displacement.
- Dynamic LoD is an amplification count, not a mesh swap; VRAM is the control mesh plus maps, so primitive count can exceed what would fit as static geometry.
- Vulkan demo (`Andarael/resurfacing`) is the shippable reference, not a paper-only sketch.

## Caveats

- Amplification still has mesh-shader output caps; pathological surfaces need the payload stage to stay inside limits.
- Authored displacement/PBR materials still exist — this replaces *geometry* baking, not the material graph.
- EG 2025 / CGF 44(2); no arXiv. Use the Wiley/EG PDF and the GitHub sample.

## Links

- DOI: [10.1111/cgf.70075](https://doi.org/10.1111/cgf.70075)
- HAL PDF: https://hal.science/hal-05176868/document
- Vulkan demo: https://github.com/Andarael/resurfacing
