---
title: "Geometry Compression"
authors:
  - "Michael F. Deering"
year: 1995
venue: "SIGGRAPH 1995"
arxiv: null
doi: "10.1145/218380.218391"
source: "https://doi.org/10.1145/218380.218391"
topics:
  - "geometry-compression"
  - "triangle-strips"
  - "quantization"
  - "graphics-architecture"
seed_rank: 1359
seed_batch: "archive-2026-08-26"
reviewed: "2026-08-26"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Progressive Meshes"
    url: "https://doi.org/10.1145/237170.237216"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237216"
  - title: "Towards Practical Meshlet Compression"
    url: "https://doi.org/10.2312/egsr.20231028"
    year: 2023
    arxiv: null
    doi: "10.2312/egsr.20231028"
  - title: "End-to-End Compressed Meshlet Rendering"
    url: "https://doi.org/10.1145/3665318.3677151"
    year: 2024
    arxiv: null
    doi: "10.1145/3665318.3677151"
see:
  - "375-progressive-meshes"
  - "226-towards-practical-meshlet-compression"
  - "482-meshoptimizer"
  - "1130-end-to-end-compressed-meshlet-rendering"
---

# Geometry Compression

## One-sentence takeaway

Compress geometry as a stream the rasterizer can consume directly: topology, quantized attributes, and decode hardware form one bandwidth contract.

## Problem

By the mid-1990s, triangle throughput was increasingly limited by storage, network, memory, and interconnect bandwidth rather than arithmetic. General-purpose file compression saved disk but required expansion before the graphics pipeline, recreating the bottleneck.

## Design

Deering uses a generalized triangle-mesh stream where each vertex occurrence emits about two triangles on average, then quantizes positions, colors, and normals. Position/color deltas receive modified Huffman coding; normals use a table/index construction with compact deltas. The format is designed for rapid sequential decompression in software or a small hardware unit directly before geometry processing.

## Evidence

SIGGRAPH 1995, pp. 13–20. The paper reports roughly 6–10× fewer bits than conventional triangle data with slight quality loss and argues benefits at every memory/interconnect level. It established geometry compression as a pipeline concern, not merely an archival format.

## Limitations

The stream assumes ordered decode and the normal code/quantization reflect 1995 hardware. Random access, edits, mesh shaders, GPU wave execution, and modern entropy coders change the optimum. Lossy quantization must be budgeted against world scale and attribute semantics.

## Implications for Broadside

Treat meshlet format as executable transport: choose ordering, quantization, and decoder together, and keep data compressed until the consumer stage. Anoptic can store per-meshlet decode bounds and formats; ano can describe bitstreams as columns. Measure bytes moved and decode occupancy, not only compression ratio.

## Bottom line

Mint the bandwidth contract. Progressive meshes (375) change fidelity; modern meshlet compression (226/1130) is the descendant. Deering’s enduring move is decode-at-consumer.

## Links

- DOI: [10.1145/218380.218391](https://doi.org/10.1145/218380.218391)
