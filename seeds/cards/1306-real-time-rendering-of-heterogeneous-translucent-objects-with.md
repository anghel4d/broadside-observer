---
title: "Real-time Rendering of Heterogeneous Translucent Objects with Arbitrary Shapes"
authors: ["Yajun Wang", "Jiaping Wang", "Nicolas Holzschuch", "Kartic Subr", "Jun-Hai Yong", "Baining Guo"]
year: 2010
venue: "Computer Graphics Forum (Proc. Eurographics)"
arxiv: null
doi: "10.1111/j.1467-8659.2009.01619.x"
source: "https://doi.org/10.1111/j.1467-8659.2009.01619.x"
topics: [translucent-materials]
seed_rank: 1306
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: translucent-materials
cites:
  - title: "Interactive Rendering of Translucent Objects"
    url: "https://doi.org/10.1111/1467-8659.00660"
    year: 2003
    arxiv: null
    doi: "10.1111/1467-8659.00660"
  - title: "Modeling and Rendering of Heterogeneous Translucent Materials using the Diffusion Equation"
    url: "https://doi.org/10.1145/1330511.1330520"
    year: 2008
    arxiv: null
    doi: "10.1145/1330511.1330520"
see:
  - "1330-interactive-rendering-of-translucent-objects"
  - "1286-modeling-and-rendering-of-heterogeneous-translucent-materials-using"
---

# Real-time Rendering of Heterogeneous Translucent Objects with Arbitrary Shapes

## One-sentence takeaway

Wang et al.: real-time heterogeneous translucent material on arbitrary meshes.

## Problem

Predecessor chain Wang diffusion 2008; Lensch interactive. This paper's job: Wang et al.: real-time heterogeneous translucent material on arbitrary meshes.

## Design

Wang et al.: real-time heterogeneous translucent material on arbitrary meshes. Lineage: Wang diffusion 2008; Lensch interactive.

## Evidence

Computer Graphics Forum (Proc. Eurographics) 2010. DOI `10.1111/j.1467-8659.2009.01619.x`. Wang et al.: real-time heterogeneous translucent material on arbitrary meshes.

## Limitations

Real-time approximation. Misses off-screen lighting and thick-part transport. Not a replacement for path-traced SSS.

## Implications for Broadside

Screen-space and convolution SSS are cheap previews of the same missing look. Anoptic still needs a real BSSRDF / path-traced SSS under FMM+RC, not a fullscreen blur. Do not claim they already have SSS.

## Bottom line

Mint this 2010 Computer Graphics Forum (Proc. Eurographics) paper. Wang et al.: real-time heterogeneous translucent material on arbitrary meshes.

## Links

- DOI: [10.1111/j.1467-8659.2009.01619.x](https://doi.org/10.1111/j.1467-8659.2009.01619.x)
