---
title: Clustered Deferred and Forward Shading
authors:
- Ola Olsson
- Markus Billeter
- Ulf Assarsson
year: 2012
venue: HPG
arxiv: null
doi: 10.1145/2159616.2159628
source: https://doi.org/10.1145/2159616.2159628
topics:
- clustered-shading
- gpu-driven
seed_rank: 727
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: graphics
relevance_score: 8
lineage: gpu-driven-rendering
cites:
- title: GPU-Driven Rendering Pipelines
  url: https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf
  year: 2015
  arxiv: null
  doi: null
- title: 'The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading'
  url: https://jcgt.org/published/0002/02/04/
  year: 2013
  arxiv: null
  doi: null
see:
- "016-gpu-driven-rendering-pipelines"
- "347-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
---

# Clustered Deferred and Forward Shading

## One-sentence takeaway

Clustered shading is a GPU-driven lighting organization sibling to meshlet/visibility-buffer pipelines.

## Why it matters here

Lighting-side counterpart to geometry clusterization for modern forward+ engines.

## Key ideas

- 2.5D/3D tiling of lights into clusters.
- Scales many lights without classic deferred bandwidth blowups.
- Composes with GPU-driven visibility pipelines.
- Still standard in AAA forward+ stacks.

## Caveats

- Not a meshlet paper — adjacent GPU-driven theme.
- Lineage tag organizational for shallow pass.

## Links

- DOI: [10.1145/2159616.2159628](https://doi.org/10.1145/2159616.2159628)
- URL: https://doi.org/10.1145/2159616.2159628
