---
title: "meshoptimizer"
authors:
  - "Arseny Kapoulkine"
year: 2016
venue: "GitHub"
arxiv: null
doi: null
source: "https://github.com/zeux/meshoptimizer"
topics:
  - meshlets
  - gpu-driven
seed_rank: 482
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Introduction to Turing Mesh Shaders"
    url: "https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/"
    year: 2018
see:
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "261-introduction-to-turing-mesh-shaders"
---

# meshoptimizer

## One-sentence takeaway

meshoptimizer is a C/C++ mesh library whose clusterizer (`meshopt_buildMeshlets`) packs triangles into cone-bounded meshlets and whose optimize/simplify/quantize passes feed GPU vertex-cache, overdraw, and mesh-shader pipelines.

## Why it matters here

Default craft path from authored meshes to meshlet buffers for Anoptic GPU-driven rendering — the builder half of the NVIDIA CAD sample and Nanite-adjacent cluster pipelines.

## Key ideas

- Core pipeline order: index → vertex-cache optimize → optional overdraw optimize → vertex-fetch optimize → quantize → index filter.
- `meshopt_buildMeshlets` balances reuse against cluster cone/radius so a task shader can reject whole groups.
- Companions: gltfpack CLI, `clusterlod.h` continuous LOD, JS/WASM bindings, shadow-index buffers for depth-only passes.
- MIT-licensed living library (v1.x), not a one-off paper; engines adopt the clusterizer even when they write their own LOD DAG.

## Caveats

## Links

- Repository: https://github.com/zeux/meshoptimizer
