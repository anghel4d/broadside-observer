---
title: "Progressive Meshes"
authors:
  - "Hugues Hoppe"
year: 1996
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/237170.237216"
source: "https://doi.org/10.1145/237170.237216"
topics:
  - lod
  - meshes
seed_rank: 375
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Mesh optimization"
    url: "https://doi.org/10.1145/166117.166119"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166119"
  - title: "Decimation of triangle meshes"
    url: "https://doi.org/10.1145/133994.134010"
    year: 1992
    arxiv: null
    doi: "10.1145/133994.134010"
  - title: "Geometry compression"
    url: "https://doi.org/10.1145/218380.218391"
    year: 1995
    arxiv: null
    doi: "10.1145/218380.218391"
---

# Progressive Meshes

## One-sentence takeaway

Store a mesh as a coarse base plus a sequence of vertex splits so you can stream, geomorph, and view-dependently refine a single representation.

## Why it matters here

This is the continuous-LOD encoding behind every later PM / geomorph / meshlet hierarchy. Anoptic can treat a progressive mesh as a compressed archive: pull as many splits as the camera budget allows, geomorph the frontier, never keep N discrete LOD models.

## Key ideas

- Inverse of an edge collapse is a vertex split; a PM is `M0` plus `vsplit_1 … vsplit_n` reconstructing `Mn`.
- The same stream supports smooth geomorphs (interpolate split vertices) and view-dependent refinement (apply only the splits that matter on screen).
- Selective refinement + a vertex hierarchy lets you keep silhouette / close-up detail without refining the back of the mesh.
- Doubles as a compression scheme: connectivity and attributes ride along the split records.

## Caveats

## Links

- DOI: https://doi.org/10.1145/237170.237216
- Author page: https://hhoppe.com/proj/pm/
