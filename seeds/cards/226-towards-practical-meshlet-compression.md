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
seed_rank: 226
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
- title: Introduction to Turing Mesh Shaders
  url: https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/
  year: 2018
  arxiv: null
  doi: null
see:
- "482-meshoptimizer"
- "097-mesh-shaders-in-the-vulkan-ecosystem"
---

# Towards Practical Meshlet Compression

## One-sentence takeaway

A mesh-shader codec decompresses meshlets on the GPU from optimal generalized triangle strips, hitting 16:1 index compression and 0.59 ms for 15.5 M triangles on a 7900 XTX.

## Why it matters here

Anoptic's Vulkan meshlet path is bandwidth-bound; on-chip decode inside the mesh shader is how you keep Nanite-class geometry without a huge index buffer in VRAM.

## Key ideas

- Triangle order is chosen by a mixed-integer linear program that produces optimal generalized triangle strips.
- Decode is data-parallel and meant to run inside a mesh shader, not as a compute preprocess.
- Index buffers compress 16:1 versus the conventional vertex pipeline; vertex attributes use crack-free quantization at a user-chosen rate.
- Teaser scene (15.5 million triangles) decompresses and renders in 0.59 ms on an AMD Radeon RX 7900 XTX.
- Practical goal is a codec you would actually ship, not a compression-ratio-only result.

## Caveats

## Links

- arXiv: [2404.06359](https://arxiv.org/abs/2404.06359)
- PDF: https://arxiv.org/pdf/2404.06359
