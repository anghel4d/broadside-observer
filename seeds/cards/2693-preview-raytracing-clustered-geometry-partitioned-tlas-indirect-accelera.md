---
title: "[PREVIEW] Raytracing: Clustered Geometry, Partitioned TLAS, Indirect Acceleration Structure Builds"
authors:
  - "Amar Patel"
year: 2026
venue: "DirectX Developer Blog (Microsoft), 28 Oct 2026; Agility SDK 1.722 preview"
arxiv: null
doi: null
source: "https://devblogs.microsoft.com/directx/clas-ptlas-preview/"
version_reviewed: "web 2026-10-28"
topics:
  - "ray-tracing"
  - "acceleration-structures"
  - "cluster-acceleration-structures"
  - "partitioned-tlas"
  - "meshlets"
  - "gpu-driven-rendering"
  - "level-of-detail"
  - "large-world-coordinates"
seed_rank: 2693
seed_batch: "craft-2026-11-23"
reviewed: "2026-11-23"
pool: "graphics"
relevance_score: 7
lineage: gpu-driven-rendering
cites:
  - title: "[PREVIEW] Raytracing: Clustered Geometry, Partitioned TLAS, Indirect Acceleration Structure Builds"
    url: "https://devblogs.microsoft.com/directx/clas-ptlas-preview/"
    year: 2026
    arxiv: null
    doi: null
  - title: "DirectX Raytracing (DXR) Functional Spec, Part 2 (Clustered Geometry, Partitioned TLAS, indirect RTAS operations)"
    url: "https://microsoft.github.io/DirectX-Specs/d3d/Raytracing2.html"
    year: 2026
    arxiv: null
    doi: null
  - title: "Clustered Geometry and Partitioned TLAS launch in DirectX 12 (NVIDIA RTX whitepaper and samples)"
    url: "https://github.com/NVIDIA-RTX/Whitepapers/blob/main/dx_clusters_and_ptlas/README.md"
    year: 2026
    arxiv: null
    doi: null
---

# [PREVIEW] Raytracing: Clustered Geometry, Partitioned TLAS, Indirect Acceleration Structure Builds

## One-sentence takeaway

DirectX Raytracing's biggest update since 2018 makes small triangle clusters (up to 256 triangles and 256 vertices, the size of a meshlet) the unit of acceleration-structure building, lets the top-level structure be split into partitions so only changed regions are rebuilt, and moves all of these builds onto GPU-generated argument buffers.

## Why it matters here

Anoptic already cuts geometry into meshlets for the raster path. This API, now a cross-vendor DirectX spec rather than only NVIDIA's RTX Mega Geometry, says the same meshlets can be the building blocks for ray tracing: build each cluster once, assemble BLASes from cluster lists for streaming and LOD, and rebuild only the TLAS partitions where something moved. It is the vendor-neutral design to follow when Anoptic's Vulkan path adds ray-traced shadows or GI probes on full-detail geometry. On the Vulkan side the same week brought `VK_AMDX_multi_level_acceleration_structure` (Vulkan 1.4.369, 20 Nov), an experimental extension with up to two more instance levels, which points the same way.

## Key ideas

- **CLAS as a building block.** A Cluster Level Acceleration Structure holds an indexed mesh of up to 256 triangles and 256 vertices. A Cluster BLAS is built from a list of CLAS references, and several BLASes can share a CLAS. A 32-bit `ClusterID()` plus a cluster-local `PrimitiveIndex()` identify the hit triangle.
- **No refit; templates instead.** Clusters cannot be refitted. For deforming or generated meshes, a cluster template stores topology without positions; each frame a compute shader writes positions and the template is instantiated into a CLAS. Templates also allow topology and LOD changes per cluster.
- **Compact positions.** Several vertex formats plus `COMPRESSED1`, a fixed-point encoding with one anchor and power-of-two scale per cluster. Shader Model 6.10 adds `TriangleObjectPositions()` to read a hit triangle's positions from the acceleration structure.
- **Partitioned TLAS.** Persistent instance records are put into spatial partitions; an unchanged partition keeps its built structure across frames. Fast movers go in a global partition where each behaves as its own partition. `TRANSLATE_PARTITION` shifts a whole partition for origin-relative large worlds. NVIDIA's domino sample: full TLAS rebuild 2.88 ms vs PTLAS with 4,702 localized writes 0.79 ms, with somewhat slower tracing.
- **GPU-driven builds.** `ExecuteIndirectRTASOperations()` takes argument arrays (and counts, where supported) in GPU memory, so compute shaders decide what to build; operations in one call are unordered, and dependent stages (CLAS → Cluster BLAS → PTLAS) need separate calls and barriers.

## Caveats

This is a DirectX 12 preview (Agility SDK 1.722, Windows Developer Mode), not a Vulkan API; NVIDIA's Vulkan extensions and AMD's experimental multi-level extension differ in detail, and Anoptic would need capability checks and a classic BLAS/TLAS fallback. Driver support on older ray-tracing GPUs is undecided. The 2.88 vs 0.79 ms figure is one vendor sample, and PTLAS traced slower there. Written from the blog post, not the full spec.

## Links

- DirectX blog post: https://devblogs.microsoft.com/directx/clas-ptlas-preview/
- DXR functional spec, part 2: https://microsoft.github.io/DirectX-Specs/d3d/Raytracing2.html
- Agility SDK 1.620 retail / 1.722 preview announcement: https://devblogs.microsoft.com/directx/agilitysdk-1-620-retail-and-1-722-preview/
- NVIDIA clusters and PTLAS write-up and samples: https://github.com/NVIDIA-RTX/Whitepapers/blob/main/dx_clusters_and_ptlas/README.md
- D3D12 Partitioned TLAS sample: https://github.com/microsoft/DirectX-Graphics-Samples/tree/master/Samples/Desktop/D3D12Raytracing/src/D3D12RaytracingPartitionedTLAS
- Vulkan 1.4.369 / VK_AMDX_multi_level_acceleration_structure (news): https://www.phoronix.com/news/Vulkan-AMDX-Ray-Tracing-Struct
