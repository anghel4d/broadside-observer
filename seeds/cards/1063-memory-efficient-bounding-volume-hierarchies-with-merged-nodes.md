---
title: "Memory-Efficient Bounding Volume Hierarchies with Merged Nodes for Hardware Ray Tracing"
authors: ["Jacob Haydel", "Andrew Kensler", "Erik Brunvand", "Cem Yuksel"]
year: 2026
venue: "HPG"
arxiv: null
doi: "10.1145/3820018"
source: "https://doi.org/10.1145/3820018"
topics: [vulkan-realtime-rendering, mesh-shaders-gpu-driven]
seed_rank: 1063
seed_batch: "craft-2026-08-17"
reviewed: "2026-08-17"
pool: "engines"
relevance_score: 9
lineage: vulkan-realtime-rendering
cites:
  - title: "Decoupling Data Layouts from Bounding Volume Hierarchies"
    url: "https://arxiv.org/abs/2511.15028"
    year: 2026
    arxiv: "2511.15028"
    doi: "10.1145/3808253"
  - title: "Wide BVH Traversal with a Short Stack"
    url: "https://doi.org/10.2312/hpg.20191190"
    year: 2019
    arxiv: null
    doi: "10.2312/hpg.20191190"
  - title: "Efficient Incoherent Ray Traversal on GPUs Through Compressed Wide BVHs"
    url: "https://doi.org/10.1145/3105762.3105773"
    year: 2017
    arxiv: null
    doi: "10.1145/3105762.3105773"
see:
  - "1036-decoupling-data-layouts-from-bounding-volume-hierarchies"
  - "1037-bonsai-compiling-queries-to-pruned-tree-traversals"
  - "928-a-stack-free-traversal-algorithm-for-left-balanced-k-d-trees"
---

# Memory-Efficient Bounding Volume Hierarchies with Merged Nodes for Hardware Ray Tracing

## One-sentence takeaway

Pack internal nodes *and* leaves into bandwidth-sized blocks (merged nodes) and rebuild SAH as a data-movement cost, not a flop cost — 48% smaller BVH, 16% less memory traffic, 32% faster path tracing vs a SOTA wide GPU BVH.

## Why it matters here

Last Craft minted Scion (1036: logical BVH vs physical layout) and Bonsai (1037: compile the query). This is the hardware-RT sibling: Anoptic will pick Vulkan RT or a software wide-BVH for GRID COMMAND picks / visibility; either way the bottleneck is *bytes moved per ray*, and this paper's memory-centric SAH plus merged-node blocks is the layout we should copy rather than a textbook binary SAH. HPG 2026 2nd best paper.

## Key ideas

- Memory traffic, not compute, dominates hardware RT even after compressed wide BVHs. Design the node for the cache line, not the textbook tree.
- Merged nodes: a block holds a mix of internal children and primitives, so one fetch amortizes a larger cut of the hierarchy.
- Memory-centric SAH estimates bytes moved rather than node visits × primitive tests; greedy construction is the practical algorithm, optimal is the reference.
- Reported vs Vaidyanathan/Ylitie-style wide GPU BVH: −15.8% traffic, −48.3% size, −31.7% render time on the Utah teaser; wins across primary/reflection/secondary/tertiary on five scenes.

## Caveats

- Aimed at *hardware* RT traversal units; a software stack-free k-d (928) or Scion layout compiler will need to re-derive the block packing.
- No arXiv. Utah project page + ACM PACG&IT 9(4) doi 10.1145/3820018.
- Construction cost (optimal vs greedy) matters if we rebuild per-frame for animated units — greedy is the one to ship.

## Links

- DOI: [10.1145/3820018](https://doi.org/10.1145/3820018)
- Project: https://graphics.cs.utah.edu/research/projects/bvh-merged-nodes/
- EG DL: https://diglib.eg.org/items/f6b63ace-ffb7-458e-a557-89abddb10627
