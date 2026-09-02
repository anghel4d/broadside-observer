---
title: "Approximate Soft Shadows on Arbitrary Surfaces using Penumbra Wedges"
authors: ["Tomas Akenine-Möller", "Ulf Assarsson"]
year: 2002
venue: "Rendering Techniques"
arxiv: null
doi: "10.2312/EGWR/EGWR02/297-306"
source: "https://doi.org/10.2312/EGWR/EGWR02/297-306"
topics: [penumbra-wedges, soft-shadow-volumes]
seed_rank: 1516
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 10
lineage: soft-shadows
cites:
  - title: "Shadow Algorithms for Computer Graphics"
    url: "https://doi.org/10.1145/563858.563901"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563901"
  - title: "A Geometry-based Soft Shadow Volume Algorithm using Graphics Hardware"
    url: "https://doi.org/10.1145/882262.882300"
    year: 2003
    arxiv: null
    doi: "10.1145/882262.882300"
  - title: "Percentage-Closer Soft Shadows"
    url: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
    year: 2005
    arxiv: null
    doi: null
see:
  - "1043-shadow-algorithms-for-computer-graphics"
---

# Approximate Soft Shadows on Arbitrary Surfaces using Penumbra Wedges

## One-sentence takeaway

THE penumbra-wedge paper: extrude silhouette wedges from an area light and rasterize a geometric approximation of umbra/penumbra on arbitrary receivers.

## Why it matters here

Crow volumes (1043) are hard-shadow stencils. This 2002 EGWR paper is the geometry-soft-shadow origin: wedges, not SM kernels. Assarsson 2003 (this batch) makes them GPU-realtime; PCSS (this batch) is the SM competitor. GRID COMMAND hard-surface contact at area lamps should know wedges exist before defaulting to PCSS.

## Key ideas

- **Penumbra wedges.** For each silhouette edge, a wedge bounds the region that sees the light partially; rasterizing the wedge accumulates a coverage heuristic.
- **Arbitrary receivers.** No planar-receiver assumption; the wedge is in world space and splat-adds onto whatever is inside.
- **Approximate, not exact.** Coverage is a geometric heuristic; overlapping wedges and textured lights are later papers.
- **Evidence.** EGWR 2002, doi `10.2312/EGWR/EGWR02/297-306`.

## Caveats

- Silhouette extraction and wedge fill cost scale with geometry, not pixels — why SM methods won games. Not a remint of Crow 1043. GPU follow-on is Assarsson 2003 (this batch).

## Links

- DOI: https://doi.org/10.2312/EGWR/EGWR02/297-306
