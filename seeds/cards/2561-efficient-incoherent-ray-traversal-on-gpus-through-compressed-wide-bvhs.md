---
title: "Efficient Incoherent Ray Traversal on GPUs Through Compressed Wide BVHs"
authors:
  - "Henri Ylitie"
  - "Tero Karras"
  - "Samuli Laine"
year: 2017
venue: "High-Performance Graphics 2017"
arxiv: null
doi: "10.1145/3105762.3105773"
source: "https://research.nvidia.com/sites/default/files/publications/ylitie2017hpg-paper.pdf"
topics:
  - "bvh"
  - "ray-tracing"
  - "quantization"
  - "gpu"
  - "traversal-stack"
seed_rank: 2561
seed_batch: "archive-2026-11-12"
reviewed: "2026-11-12"
pool: "graphics"
relevance_score: 8
lineage: ray-tracing
cites: []
see:
  - "2371-wide-sobb-hierarchies-for-ray-tracing-of-dynamic-scenes"
  - "1063-memory-efficient-bounding-volume-hierarchies-with-merged-nodes"
  - "2509-fast-ray-tracing-by-ray-classification"
---

# Efficient Incoherent Ray Traversal on GPUs Through Compressed Wide BVHs

## One-sentence takeaway

The CWBVH layout makes incoherent GPU ray casts 1.9 to 2.1 times faster by trading arithmetic for memory traffic: an 8-wide BVH with child boxes quantized to 8 bits per plane against a per-node grid, plus a compressed traversal stack whose entries are 64-bit node groups kept mostly in shared memory.

## Why it matters here

This is the node format most later wide-BVH work (and many software ray tracers in engines) starts from, and the library cites it from two BVH cards without carding it. For Anoptic, any software or compute-shader ray path for GI, picking or audio needs a node layout like this one: about ten bytes per child, octant-ordered children so traversal needs no sort, and a stack small enough to live in shared memory.

## Key ideas

- **Wide and quantized.** 8-wide nodes; child AABBs are stored as 8-bit offsets on a grid defined by the parent origin and per-axis power-of-two scale, so internal nodes take about ten bytes per child.
- **SAH-optimal widening.** A dynamic program converts a binary BVH into an 8-wide one optimally under the surface area heuristic.
- **Octant-aware ordering.** Children are assigned slots at build time so a ray's direction octant gives a near-to-far traversal order without sorting at run time.
- **Compressed stack.** Stack entries are 64-bit node groups (base index plus hit mask) rather than single node pointers; the first 12 entries (96 bytes) live in shared memory and the rest spill to thread-local memory.
- **Results.** 1.9 to 2.1 times faster than the previous fastest GPU method for incoherent rays, with the hierarchy at 35 to 60% of a typical uncompressed BVH's memory.

## Caveats

Measured on pre-RTX NVIDIA GPUs with CUDA; hardware ray tracing now owns the node format on RTX-class parts, so this matters mainly for software paths, other vendors, or non-triangle queries. Builds are offline-quality (SAH plus a DP), so dynamic scenes need refitting or rebuild strategies the paper does not cover. I read the abstract and the format and stack sections.

## Links

- PDF: https://research.nvidia.com/sites/default/files/publications/ylitie2017hpg-paper.pdf
- DOI: https://doi.org/10.1145/3105762.3105773
- NVIDIA Research page: https://research.nvidia.com/publication/2017-07_efficient-incoherent-ray-traversal-gpus-through-compressed-wide-bvhs
