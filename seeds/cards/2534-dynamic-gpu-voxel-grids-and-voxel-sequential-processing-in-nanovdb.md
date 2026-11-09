---
title: "Dynamic GPU Voxel Grids and Voxel-sequential Processing in NanoVDB"
authors:
  - "Eftychios Sifakis"
  - "Francis Williams"
  - "Christopher Horvath"
  - "Rohan Sawhney"
  - "Mark Harris"
  - "Jonathan Swartz"
  - "Ken Museth"
year: 2026
venue: "arXiv preprint (cs.GR)"
arxiv: "2611.08665"
doi: null
source: "https://arxiv.org/abs/2611.08665"
topics:
  - "vulkan-realtime-rendering"
  - "ecs-data-oriented-simulation"
seed_rank: 2534
seed_batch: "craft-2026-11-09"
reviewed: "2026-11-09"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-voxels
cites:
  - title: "Dynamic GPU Voxel Grids and Voxel-sequential Processing in NanoVDB"
    url: "https://arxiv.org/abs/2611.08665"
    year: 2026
    arxiv: "2611.08665"
    doi: null
see: ["1241-efficient-sparse-voxel-octrees", "015-gpu-driven-rendering-pipelines"]
---

# Dynamic GPU Voxel Grids and Voxel-sequential Processing in NanoVDB

## One-sentence takeaway

NanoVDB stops being read-only on the GPU: bit-parallel dilation, merging, pruning and coarsening/refinement rebuild grids of hundreds of millions of voxels in a few milliseconds, and a voxel-sequential layout streams active voxels as a flat array so stencil kernels approach peak memory bandwidth without tree traversal.

## Why it matters here

A sparse 3D grid that can change topology every frame on the GPU is the storage that 3D radiance cascades and the FMM-style GI idea (cards in the radiance-cascades and fast-multipole lineages) would need: no nodes in empty space, cheap coarsening between cascade levels, and stencil passes at bandwidth. The voxel-sequential trick is also the same move as SoA in Anoptic: flatten what is active into a linear stream and stop chasing pointers in the hot loop.

## Key ideas

- **Dynamic topology operators.** Morphological dilation, grid merge, pruning, and cross-resolution coarsening and refinement, done with bit-parallel algorithms on the GPU.
- **Topology/data separation.** Builds on fVDB's Index-Grid, which keeps the tree topology apart from per-voxel data for compact storage.
- **Voxel-sequential access.** Active voxels are streamed as one flat linear sequence, which removes most or all tree traversal from point-wise and stencil kernels at small storage cost.
- **Evaluation.** Benchmarks come from 3D reconstruction, fluid simulation and large-scale mesh voxelization.

## Caveats

I read only the abstract, so per-operator timings and hardware are not confirmed here. NanoVDB is CUDA-first; a Vulkan port of these operators would be our work. The paper targets simulation and geometry processing, not real-time lighting directly.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.08665
- PDF: https://arxiv.org/pdf/2611.08665
- OpenVDB / NanoVDB project: https://www.openvdb.org/
