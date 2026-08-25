---
title: "A comprehensive framework for rendering layered materials"
authors: ["Wenzel Jakob", "Eugene d'Eon", "Otto Jakob", "Steve Marschner"]
year: 2014
venue: "ACM Transactions on Graphics"
arxiv: null
doi: "10.1145/2601097.2601139"
source: "https://doi.org/10.1145/2601097.2601139"
topics: [translucent-materials]
seed_rank: 1244
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: translucent-materials
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Reflection from Layered Surfaces due to Subsurface Scattering"
    url: "https://doi.org/10.1145/166117.166139"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166139"
  - title: "An Illumination Model for a Skin Layer Bounded by Rough Surfaces"
    url: "https://doi.org/10.2312/egwr/egwr01/039-052"
    year: 2001
    arxiv: null
    doi: "10.2312/egwr/egwr01/039-052"
  - title: "Arbitrarily layered micro-facet surfaces"
    url: "https://doi.org/10.1145/1321261.1321292"
    year: 2007
    arxiv: null
    doi: "10.1145/1321261.1321292"
see:
  - "152-the-rendering-equation"
  - "1247-reflection-from-layered-surfaces-due-to-subsurface-scattering"
  - "1267-an-illumination-model-for-a-skin-layer-bounded-by-rough-surfaces"
  - "1269-arbitrarily-layered-micro-facet-surfaces"
---

# A comprehensive framework for rendering layered materials

## One-sentence takeaway

Fourier adding-doubling of arbitrary scattering layers and rough interfaces — the modern layered BRDF/BTDF (layerlab).

## Problem

Weidlich–Wilkie stacked microfacets and Hanrahan–Krueger discrete-ordinate layers; neither gave a general, energy-conserving adding formula for mixed BSDF layers plus rough interfaces.

## Design

Each layer is a Fourier-space scattering matrix; interfaces use microfacet BSDFs; adding-doubling composes the stack. Implementation is the layerlab library. Lineage: Weidlich–Wilkie, Hanrahan–Krueger, Stam skin, adding-doubling.

## Evidence

SIGGRAPH / TOG 2014, DOI 10.1145/2601097.2601139. Reference layered-BSDF implementation cited by Belcour 2018 and Guo–Hašan–Zhao 2018.

## Limitations

Fourier order and layer count cost. Homogeneous slabs, not a heterogeneous BSSRDF. Does not replace a dipole or path-traced SSS for thick skin.

## Implications for Broadside

Anoptic's mesh path can take a layered BSDF at a hit; coats, varnish, and thin slabs are the same missing appearance stack as SSS. FMM+RC is the far-field GI bet — this paper is the local layered operator. Do not claim Anoptic already has SSS.

## Bottom line

Mint layerlab as the layered-material stem. Cite Weidlich–Wilkie and Hanrahan–Krueger; do not remint Kajiya RE 152.

## Links

- DOI: [10.1145/2601097.2601139](https://doi.org/10.1145/2601097.2601139)
