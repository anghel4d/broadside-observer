---
title: Masked Software Occlusion Culling
authors:
- Aske Simon Christensen
- Jesper Van Haller
- et al. / Intel
year: 2016
venue: HPG/Intel
arxiv: null
doi: null
source: https://www.intel.com/content/dam/develop/external/us/en/documents/masked-software-occlusion-culling.pdf
topics:
- occlusion
- gpu-driven
seed_rank: 479
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 8
lineage: gpu-driven-rendering
cites:
- title: Hierarchical Z-Buffer Visibility
  url: https://doi.org/10.1145/166117.166147
  year: 1993
  arxiv: null
  doi: 10.1145/166117.166147
- title: GPU-Driven Rendering Pipelines
  url: https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf
  year: 2015
  arxiv: null
  doi: null
- title: 'Nanite: A Deep Dive'
  url: https://www.youtube.com/watch?v=e_5kdRpGrpI
  year: 2021
  arxiv: null
  doi: null
see:
- "144-hierarchical-z-buffer-visibility"
- "015-gpu-driven-rendering-pipelines"
- "090-nanite-a-deep-dive"
---

# Masked Software Occlusion Culling

## One-sentence takeaway

Masked software occlusion culling is a living CPU/GPU hybrid visibility technique used beside meshlet pipelines.

## Why it matters here

Practical occlusion sibling to hierarchical Z and Nanite-style cluster rejection.

## Key ideas

- SIMD bitmasks over depth hierarchy on CPU.
- Feeds GPU-driven submit/cull loops.
- Industrial craft paper/sample lineage.
- Complements meshlets when HW occlusion queries lag.

## Caveats

- Vendor sample lineage; APIs evolve.
- Not a replacement for Nanite DAG.

## Links

- URL: https://www.intel.com/content/dam/develop/external/us/en/documents/masked-software-occlusion-culling.pdf
