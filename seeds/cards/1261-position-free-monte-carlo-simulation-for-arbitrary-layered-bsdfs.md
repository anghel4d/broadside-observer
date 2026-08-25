---
title: "Position-free monte carlo simulation for arbitrary layered BSDFs"
authors: ["Yu Guo", "Miloš Hašan", "Shuang Zhao"]
year: 2018
venue: "ACM Transactions on Graphics"
arxiv: null
doi: "10.1145/3272127.3275053"
source: "https://doi.org/10.1145/3272127.3275053"
topics: [translucent-materials]
seed_rank: 1261
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: translucent-materials
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Arbitrarily layered micro-facet surfaces"
    url: "https://doi.org/10.1145/1321261.1321292"
    year: 2007
    arxiv: null
    doi: "10.1145/1321261.1321292"
  - title: "A comprehensive framework for rendering layered materials"
    url: "https://doi.org/10.1145/2601097.2601139"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601139"
  - title: "Efficient rendering of layered materials using an atomic decomposition with statistical operators"
    url: "https://doi.org/10.1145/3197517.3201289"
    year: 2018
    arxiv: null
    doi: "10.1145/3197517.3201289"
see:
  - "152-the-rendering-equation"
  - "1269-arbitrarily-layered-micro-facet-surfaces"
  - "1244-a-comprehensive-framework-for-rendering-layered-materials"
  - "1259-efficient-rendering-of-layered-materials-using-an-atomic"
---

# Position-free monte carlo simulation for arbitrary layered BSDFs

## One-sentence takeaway

Position-free Monte Carlo for arbitrary layered BSDFs — sample the layer stack without walking a position inside it.

## Problem

Jakob 2014 is deterministic Fourier; Belcour 2018 is statistical. Need an unbiased MC estimator that still treats a layer as a BSDF.

## Design

Position-free random walk on optical depth / directions only; no 3D vertex inside the slab. Lineage: Jakob 2014, Weidlich–Wilkie, Belcour.

## Evidence

TOG 2018, DOI 10.1145/3272127.3275053. The MC twin of Belcour's atomic paper.

## Limitations

Layered BSDF, not heterogeneous SSS. Variance on thick high-albedo stacks.

## Implications for Broadside

Anoptic's mesh path can take a layered BSDF at a hit; coats, varnish, and thin slabs are the same missing appearance stack as SSS. FMM+RC is the far-field GI bet — this paper is the local layered operator. Do not claim Anoptic already has SSS.

## Bottom line

Mint Guo–Hašan–Zhao 2018. Cite Jakob 2014; sibling of Belcour 2018.

## Links

- DOI: [10.1145/3272127.3275053](https://doi.org/10.1145/3272127.3275053)
