---
title: "A Stack-Free Traversal Algorithm for Left-Balanced k-d Trees"
authors:
  - "Ingo Wald"
year: 2025
venue: "JCGT"
arxiv: "2210.12859"
doi: null
source: "https://arxiv.org/abs/2210.12859"
topics:
  - vulkan-realtime-rendering
  - mesh-shaders-gpu-driven
seed_rank: 928
seed_batch: "craft-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "Gigavoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
    url: "https://doi.org/10.1145/1576246.1531330"
    year: 2009
    arxiv: null
    doi: "10.1145/1576246.1531330"
  - title: "Nanite: A Deep Dive"
    url: "https://advances.realtimerendering.com/"
    year: 2021
    arxiv: null
    doi: null
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
see:
  - "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - "090-nanite-a-deep-dive"
  - "144-hierarchical-z-buffer-visibility"
---

# A Stack-Free Traversal Algorithm for Left-Balanced k-d Trees

## One-sentence takeaway

Left-balanced k-d trees already encode parent/child in the array index; Wald’s traversal uses that so a GPU (or tiny-stack CPU) walks the tree with no explicit stack.

## Why it matters here

JCGT-shaped craft: a two-page algorithm you can type into a compute shader. Anoptic’s spatial queries (ray probes for radiance cascades, unit picks, GRID COMMAND nearest-N) do not want a per-lane traversal stack in VGPR-poor shaders. Left-balanced layout + index arithmetic is the same “implicit heap” trick as a binary heap, applied to k-d trees, with cudaKDTree as the reference implementation.

## Key ideas

- Left-balanced binary trees live in a flat array with children at `2i+1` / `2i+2` (Knuth / heap numbering).
- Traversal state collapses to the current index plus a few bit tricks — no parent pointers, no stack, no restart-trail buffer.
- GPU-friendly: registers instead of scratch; pairs with Wald’s companion in-place builder (arXiv 2211.00120).
- Reference code: `ingowald/cudaKDTree`.
- JCGT vol. 14, no. 1, pp. 40–48, 2025 (arxiv 2210.12859 from 2022).

## Caveats


## Links

- JCGT: https://jcgt.org/published/0014/01/03/
- arXiv: [2210.12859](https://arxiv.org/abs/2210.12859)
- PDF: https://arxiv.org/pdf/2210.12859
- Code: https://github.com/ingowald/cudaKDTree
