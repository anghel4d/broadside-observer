---
title: "Masked Software Occlusion Culling"
authors:
  - "Jon Hasselgren"
  - "Magnus Andersson"
  - "Tomas Akenine-Möller"
year: 2016
venue: "HPG"
arxiv: null
doi: "10.2312/hpg.20161189"
source: "https://www.intel.com/content/www/us/en/developer/articles/technical/masked-software-occlusion-culling.html"
topics:
  - occlusion
  - gpu-driven
seed_rank: 479
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    doi: "10.1145/166117.166147"
see:
  - "144-hierarchical-z-buffer-visibility"
---

# Masked Software Occlusion Culling

## One-sentence takeaway

Hasselgren, Andersson, and Akenine-Möller rasterize occluders into a SIMD-friendly masked hierarchical depth buffer on the CPU so visibility tests can interleave with rasterization and still reject ~98% of the triangles a full-resolution Z-buffer would hide.

## Why it matters here

Practical CPU occlusion sibling to GPU Hi-Z and meshlet cone culling: feed surviving clusters into a Wihlidal/Haar submit loop when hardware occlusion queries lag a frame.

## Key ideas

- A coverage mask per hierarchical tile lets a conservative depth test stay accurate without storing a full-resolution CPU depth buffer.
- Reported ~3× faster than prior software occlusion work, with low extra memory.
- Occluder rasterization and queries interleave, so the engine need not finish a full software Z-prepass before testing boxes.
- Intel shipped a companion lightweight library; the algorithm is the HPG 2016 paper, not a vendor-only sample.

## Caveats

## Links

- Intel project: https://www.intel.com/content/www/us/en/developer/articles/technical/masked-software-occlusion-culling.html
- Preprint PDF: https://www.intel.com/content/dam/develop/external/us/en/documents/masked-software-occlusion-culling-779241.pdf
