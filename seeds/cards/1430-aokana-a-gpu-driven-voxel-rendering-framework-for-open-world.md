---
title: "Aokana: A GPU-Driven Voxel Rendering Framework for Open World Games"
authors: ["Yingrong Fang", "Qitong Wang", "Wei Wang"]
year: 2025
venue: "PACMCGIT (I3D 2025)"
arxiv: "2505.02017"
doi: "10.1145/3728299"
source: "https://arxiv.org/abs/2505.02017"
topics: [vulkan-realtime-rendering, mesh-shaders-gpu-driven]
seed_rank: 1430
seed_batch: "craft-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-voxels
cites:
  - title: "Efficient Sparse Voxel Octrees"
    url: "https://doi.org/10.1145/1730804.1730814"
    year: 2010
    arxiv: null
    doi: "10.1145/1730804.1730814"
  - title: "High-Resolution Sparse Voxel DAGs"
    url: "https://doi.org/10.1145/2461912.2462024"
    year: 2013
    arxiv: null
    doi: "10.1145/2461912.2462024"
  - title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
    url: "https://jcgt.org/published/0002/02/04/"
    year: 2013
    arxiv: null
    doi: null
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
see:
  - "1241-efficient-sparse-voxel-octrees"
  - "015-gpu-driven-rendering-pipelines"
  - "271-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
  - "144-hierarchical-z-buffer-visibility"
  - "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - "1151-common-subtree-merging-compressed-opacity-micromaps"
  - "090-nanite-a-deep-dive"
---

# Aokana: A GPU-Driven Voxel Rendering Framework for Open World Games

## One-sentence takeaway

Many *shallow* SVDAGs plus a GPU-driven Hi-Z / visibility-buffer pipeline, not one deep DAG — the open-world voxel *draw* leftover of last Craft's SVO walker.

## Why it matters here

Last Craft minted the occupancy *tree* (Karras 1240, SVO 1241, Hu lists 1243). Anoptic still has a forward+ mesh path and an FMM+RC occupancy bet; the missing recipe is how you *draw* billions of occupancy cells without a 20-deep pointer chase. Aokana inserts compute passes between opaque and transparent in a stock forward pipeline — mesh units and voxel occupancy can coexist. LOD streaming keeps ~5% of the map in VRAM. Cite SVDAG / HashDAG / Transform-Aware SVDAG; do not mint them (compression leftovers of 1241 / OMM 1151).

## Key ideas

- **Shallow DAG chunks, not one deep tree.** World split into 256³ SVDAG chunks. Deep pointer DAGs miss cache; many depth-8 DAGs do not.
- **GPU-driven occupancy of the draw.** Chunk frustum cull → 8×8 tile Hi-Z cull against last-frame pyramid (Greene 144) → DAG ray-march into a 64-bit visbuffer (Burns–Hunt 271 packing: 24-bit depth, 3-bit axis normal, chunk id, voxel xyz) → color resolve via DFS-order color blocks → rebuild Hi-Z and recull false negatives.
- **LOD + streaming.** Octree of chunks; `StreamingFactor` picks LOD from camera distance. ~5% of disk in VRAM while walking 64K San Miguel.
- **Evidence.** I3D 2025 / PACMCGIT 8(1). 32K+ scenes 2–4× HashDAG; 64K ~6 ms/frame on RTX 3060 Ti. Unity 6 + Vulkan implementation.

## Caveats

Opaque voxels only — rivers/glass stay mesh. No runtime edits (HashDAG leftover; cite, don't mint). Color compression is a simple block average, not Dolonius. Unity/Vulkan demo, not a C engine drop-in. Transform-Aware SVDAG (Molenaar–Eisemann I3D 2025, doi 10.1145/3728301) is the compression sibling — cite from here, do not mint.

## Links

- arXiv: https://arxiv.org/abs/2505.02017
- PDF: https://arxiv.org/pdf/2505.02017
- DOI: [10.1145/3728299](https://doi.org/10.1145/3728299)
