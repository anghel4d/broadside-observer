---
title: "Geometry Images"
authors:
  - "Xianfeng Gu"
  - "Steven J. Gortler"
  - "Hugues Hoppe"
year: 2002
venue: "SIGGRAPH 2002 / ACM Transactions on Graphics"
arxiv: null
doi: "10.1145/566570.566589"
source: "https://hhoppe.com/gim.pdf"
topics:
  - remeshing
  - geometry-images
  - parametrization
  - mesh-compression
seed_rank: 1601
seed_batch: "archive-2026-09-06"
reviewed: "2026-09-06"
pool: "graphics"
relevance_score: 10
lineage: mesh-representation
cites:
  - title: "Progressive Meshes"
    url: "https://doi.org/10.1145/237170.237216"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237216"
  - title: "Geometry Clipmaps: Terrain Rendering Using Nested Regular Grids"
    url: "https://doi.org/10.1145/1186562.1015799"
    year: 2004
    arxiv: null
    doi: "10.1145/1186562.1015799"
see:
  - "375-progressive-meshes"
  - "362-geometry-clipmaps-terrain-rendering-using-nested-regular-gri"
---

# Geometry Images

## One-sentence takeaway

Cut an arbitrary manifold mesh to a disk, parametrize it onto a square, and store geometry (and normals/colors) as ordinary 2D images — completely regular samples with implicit connectivity, wavelet-compressible like textures.

## Why it matters here

Anoptic already treats clipmaps (362) as nested regular grids for heightfields and progressive meshes (375) for irregular LOD. Geometry images are the other regular-domain bet: one chart, no texture coordinates, GPU-friendly arrays, and the same image coders for geometry and attributes. Useful mental model for ano/array-shaped mesh data and for compression/streaming of prop meshes.

## Key ideas

- **Single-chart remesh.** Automatic cut network opens the surface to a topological disk; boundary is sampled so opposite cut sides match (sideband encodes cut topology for lossy compression fuse).
- **Geometry as image.** n×n array of [x,y,z] (and matching attribute images). No indexed vertex lists; parametrization is the grid.
- **Stretch parametrization.** Aim for even sample distribution; undersampling blurs geometry. Lossy wavelet compression demonstrated (e.g. 257² geometry to ~1.5KB in the teaser).
- **Hardware path.** Transmit like textures; reconstruct by grid triangulation. Normal maps share the domain.
- **Limits called out by authors.** Non-manifolds out; high-genus single charts can distort more than multi-chart schemes.

## Caveats

- Title was already in `radar/seen.json` from prior harvest but had no live card — minted now (same pattern as MCS 1493 / Cytron 1566).
- Not a drop-in for open voxel terrains (prefer Transvoxel 1600 / clipmaps 362); strongest for closed or disk-like props.
- Cut-boundary matching is brittle under aggressive lossy compression without the topology sideband.

## Links

- Open PDF (Hoppe): https://hhoppe.com/gim.pdf
- DOI: https://doi.org/10.1145/566570.566589
