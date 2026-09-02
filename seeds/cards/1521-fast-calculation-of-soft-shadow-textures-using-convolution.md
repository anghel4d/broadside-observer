---
title: "Fast Calculation of Soft Shadow Textures Using Convolution"
authors: ["Cyril Soler", "François X. Sillion"]
year: 1998
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/280814.280927"
source: "https://doi.org/10.1145/280814.280927"
topics: [convolution, soft-shadows]
seed_rank: 1521
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: filterable-shadow-maps
cites:
  - title: "Convolution Shadow Maps"
    url: "https://www.mpi-inf.mpg.de/departments/computer-graphics/publications/convolution-shadow-maps"
    year: 2007
    arxiv: null
    doi: "10.2312/EGWR/EGSR07/051-060"
  - title: "A fast shadow algorithm for area light sources using backprojection"
    url: "https://doi.org/10.1145/192161.192207"
    year: 1994
    arxiv: null
    doi: "10.1145/192161.192207"
---

# Fast Calculation of Soft Shadow Textures Using Convolution

## One-sentence takeaway

Soler–Sillion 1998: penumbra as a convolution of occluder images with a kernel sized by light and distances — the ancestor of all filterable SMs.

## Why it matters here

Convolution SM / ESM / MSM (this batch) are *depth-encoded* descendants. This SIGGRAPH 1998 paper is the image-based convolution that said 'soft shadows are a filter.' GRID COMMAND should cite it when they mean the theory, not Annen 2007.

## Key ideas

- **Convolution = penumbra.** For a planar occluder and planar receiver, blocked light is the occluder silhouette convolved with a kernel whose size is the projected light.
- **Hierarchical / FFT.** They compute the convolution fast enough for 1998 offline, including a hierarchical error bound.
- **The idea games stole.** Once SMs could be filtered (CSM 2007, VSM 2006), this is the justification for 'bigger kernel, softer shadow.'
- **Evidence.** SIGGRAPH 1998, doi `10.1145/280814.280927`.

## Caveats

- Planar-ish occluder/receiver assumption. Not a depth SM — that is Annen 2007. Not PCSS (variable PCF on a depth map).

## Links

- DOI: https://doi.org/10.1145/280814.280927
