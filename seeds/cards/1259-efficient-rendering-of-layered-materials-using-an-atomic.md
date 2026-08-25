---
title: "Efficient rendering of layered materials using an atomic decomposition with statistical operators"
authors: ["Laurent Belcour"]
year: 2018
venue: "ACM Transactions on Graphics"
arxiv: null
doi: "10.1145/3197517.3201289"
source: "https://doi.org/10.1145/3197517.3201289"
topics: [translucent-materials]
seed_rank: 1259
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
see:
  - "152-the-rendering-equation"
  - "1269-arbitrarily-layered-micro-facet-surfaces"
  - "1244-a-comprehensive-framework-for-rendering-layered-materials"
---

# Efficient rendering of layered materials using an atomic decomposition with statistical operators

## One-sentence takeaway

Belcour's atomic decomposition: layered BSDFs as a handful of statistical lobes instead of Jakob's Fourier stack.

## Problem

Jakob 2014 layerlab is correct and slow (Fourier orders × layers). Production wants a few GGX-like lobes.

## Design

Decompose a layer stack into directional + roughness + albedo statistics; evaluate as atomic microfacet lobes. Adding-doubling in moment space.

## Evidence

TOG 2018, DOI 10.1145/3197517.3201289. Sibling of Guo–Hašan–Zhao position-free MC (same year).

## Limitations

Statistical approximation, not a BSSRDF. Energy loss on extreme stacks. Iridescence is a different Belcour paper.

## Implications for Broadside

Anoptic's mesh path can take a layered BSDF at a hit; coats, varnish, and thin slabs are the same missing appearance stack as SSS. FMM+RC is the far-field GI bet — this paper is the local layered operator. Do not claim Anoptic already has SSS.

## Bottom line

Mint Belcour 2018 atomic layers. Cite Jakob 2014 and Weidlich–Wilkie.

## Links

- DOI: [10.1145/3197517.3201289](https://doi.org/10.1145/3197517.3201289)
