---
title: "Common Subtree Merging Compressed Opacity Micromaps"
authors: ["Thomas Chernaik", "Jaina Modisett", "Markus Billeter"]
year: 2026
venue: "PACMCGIT / HPG 2026"
arxiv: null
doi: "10.1145/3820017"
source: "https://doi.org/10.1145/3820017"
topics: [vulkan-realtime-rendering]
seed_rank: 1151
seed_batch: "craft-2026-08-23"
reviewed: "2026-08-23"
pool: "graphics"
relevance_score: 10
lineage: vulkan-realtime-rendering
cites:
  - title: "Succinct Opacity Micromaps"
    url: "https://doi.org/10.1145/3675385"
    year: 2024
    arxiv: null
    doi: "10.1145/3675385"
  - title: "Towards Practical Meshlet Compression"
    url: "https://jcgt.org/published/0013/02/02/"
    year: 2024
    arxiv: null
    doi: null
  - title: "End-to-End Compressed Meshlet Rendering"
    url: "https://doi.org/10.1111/cgf.15002"
    year: 2024
    arxiv: null
    doi: "10.1111/cgf.15002"
  - title: "Nanite: A Deep Dive"
    url: "https://www.unrealengine.com/en-US/blog/nanite-virtualized-geometry-in-unreal-engine-5"
    year: 2021
    arxiv: null
    doi: null
see:
  - "226-towards-practical-meshlet-compression"
  - "1130-end-to-end-compressed-meshlet-rendering"
  - "090-nanite-a-deep-dive"
  - "015-gpu-driven-rendering-pipelines"
---

# Common Subtree Merging Compressed Opacity Micromaps

## One-sentence takeaway

Lossless common-subtree merging on opacity micromap 4-trees gives random-access compressed OMMs (up to 100× vs stock) plus hierarchical aggregate opacity — RT alpha/foliage without a texture fetch per any-hit.

## Problem

Alpha-tested cards (leaves, fences, decals) explode any-hit cost and BVH memory. Hardware opacity micromaps already turn a triangle into a barycentric 4-tree of opaque/transparent/unknown, but the stock layout stores every subdivision even when neighbouring micro-triangles share the same mask. GRID COMMAND vegetation and Anoptic alpha cards need the OMM *query* (random access in the any-hit / RC visibility probe), not another meshlet packer.

## Design

Build the standard OMM 4-tree, then merge identical subtrees into a DAG. Lookups walk the DAG with the same barycentric child index as hardware OMMs — no decompress-to-scratch. Hierarchical aggregate opacity at internal nodes estimates coverage at coarser LODs so aliasing from fine leaf edges can be filtered without a full walk. The same compressor applied to binary alpha textures lands at ~0.05 bits/texel. Not Warnock 1030, not Slug 1128, not meshlet packing 1129 / laced-wire 1130 / extraction 1032 / resurfacing 1058.

## Evidence

HPG 2026 PACMCGIT, DOI `10.1145/3820017`. Authors report up to two orders of magnitude vs uncompressed OMMs at similar trace time, plus the 0.05 bits/texel alpha-texture result. Cite Succinct OMMs (2024, `10.1145/3675385`) as the pointer-free succinct-tree sibling — do not remint.

## Limitations

Needs RT/OMM hardware or a software barycentric walk; Anoptic's forward+ path does not magically grow any-hit. Common-subtree quality depends on mask self-similarity (foliage yes, noisy cutouts less). Software walk of the DAG is extra VGPR pressure vs hardware OMM.

## Implications for Broadside

Last Craft kept meshlet *packing* and *laced-wire decode* (1129–1130). This is the leftover RT-alpha recipe: compressed visibility for cards, not compressed triangle clusters. Pair with Nanite-style GPU-driven (015) and RC probes — any-hit / visibility rays against foliage should hit an OMM DAG, not a 4K alpha atlas. GRID COMMAND hex vegetation is the first consumer.

## Bottom line

Mint the HPG 2026 OMM DAG. Cite succinct-OMM 2024 and meshlet compression; do not remint 1129–1130.

## Links

- DOI: [10.1145/3820017](https://doi.org/10.1145/3820017)
- EG: https://diglib.eg.org/handle/10.2312/hpg01
- Succinct OMMs (cite): https://doi.org/10.1145/3675385
