---
title: "Billions of triangles redux"
authors:
  - "Arseny Kapoulkine"
year: 2026
venue: "zeux.io (blog)"
arxiv: null
doi: null
source: "https://zeux.io/2026/09/30/billions-of-triangles-redux/"
topics:
  - "clustered-lod"
  - "mesh-simplification"
  - "meshlets"
  - "mesh-compression"
  - "streaming"
seed_rank: 2374
seed_batch: "craft-2026-10-21"
reviewed: "2026-10-21"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Billions of triangles redux"
    url: "https://zeux.io/2026/09/30/billions-of-triangles-redux/"
    year: 2026
    arxiv: null
    doi: null
  - title: "Billions of triangles in minutes"
    url: "https://zeux.io/2025/09/30/billions-of-triangles-in-minutes/"
    year: 2025
    arxiv: null
    doi: null
  - title: "New quadric metric for simplifying meshes with appearance attributes"
    url: "https://doi.org/10.1109/VISUAL.1999.809869"
    year: 1999
    arxiv: null
    doi: "10.1109/VISUAL.1999.809869"
  - title: "Nanite: A Deep Dive"
    url: "https://advances.realtimerendering.com/s2021/Karis_Nanite_SIGGRAPH_Advances_2021_final.pdf"
    year: 2021
    arxiv: null
    doi: null
  - title: "vk_lod_clusters (NVIDIA nvpro-samples)"
    url: "https://github.com/nvpro-samples/vk_lod_clusters"
    year: 2026
    arxiv: null
    doi: null
see:
  - "090-nanite-a-deep-dive"
  - "482-meshoptimizer"
---

# Billions of triangles redux

## One-sentence takeaway

Kapoulkine's write-up on getting NVIDIA's 1.6-billion-triangle, path-traced Zorah scene to stream through meshoptimizer 1.3's `clusterlod.h` within a 12 GB RTX 5070 budget, using three fixes (clamping attribute-quadric error to triangle area, dilating open borders so foliage keeps its area, and the new meshlet codec at about 6.5 bits per triangle), is the most practical field report available on Nanite-style clustered LOD in production.

## Why it matters here

Anoptic already has Vulkan meshlets on its roadmap and depends on meshoptimizer. The DAG pipeline in this post (cluster, group, simplify with locked borders, re-cluster, repeat, then a BVH over the DAG for LOD selection) is the path to large RTS maps with dense props. The failure modes it documents are the ones an engine will hit: inflated simplifier error that wastes streaming memory, foliage that erodes leaf by leaf until a hedge disappears, and index data that dominates disk reads. The fixes are now opt-in flags in a library we already link.

## Key ideas

- **Clamped attribute error.** Hoppe's 1999 attribute quadric extrapolates attributes linearly (for example normals outside [−1, 1]), which inflates error, so the DAG cut streams in detail you can't see. Following Unreal, error is clamped to the accumulated triangle area (`meshopt_SimplifyErrorClamped`), on the reasoning that deleting a triangle can't look worse than its area. On Zorah's default view this cut the geometry pool from 996 MB to 678 MB and the cluster acceleration structures (CLAS) from 880 MB to 574 MB, where the existing edge-length limit alone only reached 941 and 826 MB.
- **Foliage erosion.** Once every leaf has been simplified down to one triangle, the only next step is deleting leaves, and every cluster does this at about the same distance, so hedges vanish. Rather than Nanite's Preserve Area (which redistributes all lost area), `clodConfig::simplify_dilate_borders` gives only the area lost next to open boundaries back to the surviving boundary edges. vk_lod_clusters turns it on only for two-sided meshes.
- **Permissive mode is now stable.** Seam-heavy meshes can now simplify further without falling back to `simplifySloppy`, which now happens for about 0.01% of groups on Zorah. Partitioning can sort groups in Morton order for streaming locality, and per-thread allocation arenas are moving into the library (in master as of early October).
- **Layered compression.** The vertex/index codecs are built for multi-GB/s decoding and stay compressible by a general-purpose compressor: the scene geometry is 63.3 GB raw, 31.3 GB with codec v1, 38.0 GB with Zstd alone, and 27.4 GB with v1 plus Zstd. Lossy filters (octahedral 12-bit normals, 8-bit tangents, 18-bit exponential positions and UVs) bring it to about 15.3 GB.
- **Meshlet codec (meshoptimizer 1.1).** It compresses per-cluster triangle indices from 3 bytes per triangle to about 6.5 bits per triangle (9.8 GB → 2.6 GB) and decodes at up to about 10 GB/s on one core, straight into write-combined memory. The whole 3.26-billion-triangle DAG drops from 54.9 GB to 47.7 GB on disk (47.0 GB after a separate material-index tweak), and full reprocessing takes about 3 min 45 s on 16 cores.

## Caveats

It's a blog post by the library's author about one showcase scene, with no controlled comparisons or perceptual metric: quality is judged by eye from screenshots, and the memory figures are for one camera at a modest resolution. Border dilation is a heuristic that can push geometry outward on non-foliage meshes, and the author himself questions whether clustered LOD is the endgame (popping, on-disk size, tooling pain). The clamped-error flag is experimental, and decoding meshlets directly in mesh shaders is explicitly not recommended.

## Links

- Post: https://zeux.io/2026/09/30/billions-of-triangles-redux/
- Previous post: https://zeux.io/2025/09/30/billions-of-triangles-in-minutes/
- meshoptimizer v1.3 release: https://github.com/zeux/meshoptimizer/releases/tag/v1.3
- vk_lod_clusters sample: https://github.com/nvpro-samples/vk_lod_clusters
- Hoppe 1999 attribute quadric (DOI): https://doi.org/10.1109/VISUAL.1999.809869
