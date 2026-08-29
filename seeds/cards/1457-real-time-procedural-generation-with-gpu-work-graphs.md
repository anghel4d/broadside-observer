---
title: "Real-Time Procedural Generation with GPU Work Graphs"
authors: ["Bastian Kuth", "Max Oberberger", "Carsten Faber", "Dominik Baumeister", "Matthäus Chajdas", "Quirin Meyer"]
year: 2024
venue: "PACMCGIT (HPG 2024)"
arxiv: null
doi: "10.1145/3675376"
source: "https://doi.org/10.1145/3675376"
topics: [mesh-shaders-gpu-driven, vulkan-realtime-rendering]
seed_rank: 1457
seed_batch: "craft-2026-08-29"
reviewed: "2026-08-29"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "D3D12 Work Graphs"
    url: "https://microsoft.github.io/DirectX-Specs/d3d/WorkGraphs.html"
    year: 2024
    arxiv: null
    doi: null
  - title: "Whippletree: Task-based Scheduling of Dynamic Workloads on the GPU"
    url: "https://doi.org/10.1145/2661229.2661250"
    year: 2014
    arxiv: null
    doi: "10.1145/2661229.2661250"
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
  - "1030-warnock-gpu-geometry-amplification-for-vector-graphics"
  - "1430-aokana-a-gpu-driven-voxel-rendering-framework-for-open-world"
---

# Real-Time Procedural Generation with GPU Work Graphs

## One-sentence takeaway

GPU work graphs let shaders enqueue other shaders (broadcast / thread / coalesce), so recursive procedural generation runs every frame without a CPU round-trip or a worst-case ExecuteIndirect buffer.

## Why it matters here

Last Craft minted occupancy *draw* (Aokana 1430, DAIS, HOM). The leftover of GPU-driven 015 is *command*: Anoptic's Vulkan mesh pipeline still has the CPU (or ExecuteIndirect) decide what runs next. This is the first paper that actually *uses* work graphs — a 37-node graph grows ivy, a marketplace, and frustum-culled clutter in 3.74 ms on a 7900 XTX, 79,710 instances. Don't bake Houdini forests into Anoptic; generate the ones in view. D3D12 shipped Work Graphs 1.0; Vulkan has VK_AMDX_shader_enqueue. The model is the this-week takeaway, not a DX-only toy.

## Key ideas

- **Three launch modes.** Broadcasting: a 3D thread-group grid sharing one record (optional dynamic grid). Thread: one record per thread; the scheduler packs SIMD lanes. Coalescing: a group sees a variable number of records — the instancing trick.
- **Records, depth 32, graphic leaves.** Nodes emit typed records to named children. Graphic leaf nodes (mesh-shader raster) were specified in 2024 but not in public drivers; they emulate with indirect draws. Work-graph depth is capped at 32.
- **Coalesced instancing.** One coalescing node bundles same-asset draws. Overview camera: 79,710 draws → 965; render 27.74 ms → 0.62 ms. Market camera culls 55k objects at generation time.
- **BVH markers + phases.** Invisible ray-traced markers (planes/boxes) ride the existing TLAS with instance-mask bits as generation phases, so ivy finds walls, paths find intersections, garlands find anchors — using last frame's BVH to avoid a mid-frame rebuild.
- **Three demos.** Recursive ivy (32-wide wave traces toward the surface, branches, respects blocking materials). Marketplace via a wave-parallel straight skeleton (edge + split events, WaveActiveMin/Sum). Clutter grid: project frustum onto a heightmap, then mesh-shader grass / mushrooms / insects from light rays.

## Caveats

D3D12-first; Vulkan enqueue is still a vendor extension. Depth 32 bites on deep market recursion. Eight BVH mask bits limit phases. Mesh-shader output is not in any BVH, so clutter gets no RT lighting. Draw order is non-deterministic (overlap flicker). CPU collision needs a GPU sim or a readback. Not a drop-in for Anoptic's forward+ mesh path this week — steal the *model* (GPU self-feeds), not the ivy assets. Cite Whippletree 1459 as the software stack this API replaces; do not remint 015 / Warnock 1030 / Aokana 1430.

## Links

- DOI: [10.1145/3675376](https://doi.org/10.1145/3675376)
- GPUOpen preprint PDF: https://gpuopen.com/download/Real-Time_Procedural_Generation_with_GPU_Work_Graphs-GPUOpen_preprint.pdf
- D3D12 Work Graphs spec: https://microsoft.github.io/DirectX-Specs/d3d/WorkGraphs.html
- Author page: https://coburggraphicslab.github.io/publication/Kuth24RPG.html
