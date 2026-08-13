---
title: Towards Practical Meshlet Compression
authors:
- Bastian Kuth
- Max Oberberger
- Felix Kawala
- Sander Reitter
- Sebastian Michel
- Matthäus Chajdas
- Quirin Meyer
year: 2024
venue: arXiv:cs.GR
arxiv: '2404.06359'
doi: null
source: https://arxiv.org/abs/2404.06359
topics:
- meshlets
seed_rank: 288
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: graphics
relevance_score: 9
lineage: gpu-driven-rendering
cites:
- title: meshoptimizer
  url: https://github.com/zeux/meshoptimizer
  year: 2016
  arxiv: null
  doi: null
- title: Mesh Shaders in the Vulkan Ecosystem
  url: https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/
  year: 2018
  arxiv: null
  doi: null
see:
- "733-meshoptimizer"
- "113-mesh-shaders-in-the-vulkan-ecosystem"
---

# Towards Practical Meshlet Compression

## One-sentence takeaway

We propose a codec specifically designed for meshlet compression, optimized for rapid data-parallel GPU decompression within a mesh shader.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Towards Practical Meshlet Compression).

## Key ideas

- We propose a codec specifically designed for meshlet compression, optimized for rapid data-parallel GPU decompression within a mesh shader.
- Our compression strategy orders triangles in optimal generalized triangle strips (GTSs), which we generate by formulating the creation as a mixed integer linear program (MILP).
- Our method achieves index buffer compression rates of 16:1 compared to the vertex pipeline and crack-free vertex attribute quantization based on user preference.
- The 15.5 million triangles of our teaser image decompress and render in 0.59 ms on an AMD Radeon RX 7900 XTX.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2404.06359](https://arxiv.org/abs/2404.06359)
- URL: https://arxiv.org/abs/2404.06359
