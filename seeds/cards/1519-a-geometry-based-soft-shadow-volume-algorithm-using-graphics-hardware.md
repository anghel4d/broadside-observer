---
title: "A Geometry-based Soft Shadow Volume Algorithm using Graphics Hardware"
authors: ["Ulf Assarsson", "Tomas Akenine-Möller"]
year: 2003
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/882262.882300"
source: "https://doi.org/10.1145/882262.882300"
topics: [soft-shadow-volumes, GPU]
seed_rank: 1519
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: soft-shadows
cites:
  - title: "Approximate Soft Shadows on Arbitrary Surfaces using Penumbra Wedges"
    url: "https://doi.org/10.2312/EGWR/EGWR02/297-306"
    year: 2002
    arxiv: null
    doi: "10.2312/EGWR/EGWR02/297-306"
  - title: "Shadow Algorithms for Computer Graphics"
    url: "https://doi.org/10.1145/563858.563901"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563901"
  - title: "Soft shadow volumes for ray tracing"
    url: "https://doi.org/10.1145/1186822.1073327"
    year: 2005
    arxiv: null
    doi: "10.1145/1186822.1073327"
see:
  - "1043-shadow-algorithms-for-computer-graphics"
---

# A Geometry-based Soft Shadow Volume Algorithm using Graphics Hardware

## One-sentence takeaway

GPU soft shadow volumes that made penumbra wedges realtime — silhouette wedges rasterized in hardware, coverage in the stencil/blend unit.

## Why it matters here

Wedges 2002 (this batch) are the geometry; this 2003 TOG paper is the GPU algorithm games briefly shipped before SM methods won. Laine 2005 (this batch) takes the same volumes into ray tracing.

## Key ideas

- **Hardware wedges.** Extrude silhouette wedges with a vertex/geometry shader of the era; rasterize them to accumulate penumbra coverage.
- **Umbra vs penumbra passes.** Hard umbra (Crow-style volume) plus a penumbra pass that only runs in the wedge interior.
- **Realtime 2003.** First plausible 30 Hz geometry-soft-shadows on then-current GPUs.
- **Evidence.** SIGGRAPH / TOG 2003, doi `10.1145/882262.882300`.

## Caveats

- Silhouette cost and overdraw killed it for dense meshes. Not a remint of Crow 1043. Exact-class follow-on is Laine 2005, not this approximate GPU paper.

## Links

- DOI: https://doi.org/10.1145/882262.882300
