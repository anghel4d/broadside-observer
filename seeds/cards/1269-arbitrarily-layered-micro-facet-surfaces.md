---
title: "Arbitrarily layered micro-facet surfaces"
authors: ["Andrea Weidlich", "Alexander Wilkie"]
year: 2007
venue: "GRAPHITE"
arxiv: null
doi: "10.1145/1321261.1321292"
source: "https://doi.org/10.1145/1321261.1321292"
topics: [translucent-materials]
seed_rank: 1269
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: translucent-materials
cites:
  - title: "Ein Beitrag zur Optik der Farbanstriche"
    url: "https://www.graphics.cornell.edu/~westin/pubs/kubelka.pdf"
    year: 1931
    arxiv: null
    doi: null
  - title: "Reflection from Layered Surfaces due to Subsurface Scattering"
    url: "https://doi.org/10.1145/166117.166139"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166139"
see:
  - "1260-ein-beitrag-zur-optik-der-farbanstriche"
  - "1247-reflection-from-layered-surfaces-due-to-subsurface-scattering"
---

# Arbitrarily layered micro-facet surfaces

## One-sentence takeaway

Weidlich–Wilkie 2007: arbitrarily layered microfacet surfaces — the practical stack Jakob 2014 later Fourier-ized.

## Problem

Cook–Torrance is one interface. Hanrahan–Krueger and Kubelka–Munk are transport layers. Need a renderer-friendly stack of microfacet interfaces plus absorbing layers.

## Design

Layer microfacet BSDFs with absorption/refraction between them; evaluate as a composite BRDF. Lineage: Cook–Torrance, Hanrahan–Krueger, Kubelka–Munk.

## Evidence

GRAPHITE 2007, DOI 10.1145/1321261.1321292. Direct predecessor of Jakob layerlab and Belcour atomic layers.

## Limitations

Ad-hoc energy, no Fourier adding. Not a BSSRDF. layerlab is the physically stricter sequel.

## Implications for Broadside

Anoptic's mesh path can take a layered BSDF at a hit; coats, varnish, and thin slabs are the same missing appearance stack as SSS. FMM+RC is the far-field GI bet — this paper is the local layered operator. Do not claim Anoptic already has SSS.

## Bottom line

Mint Weidlich–Wilkie. Cite Hanrahan–Krueger and Kubelka–Munk.

## Links

- DOI: [10.1145/1321261.1321292](https://doi.org/10.1145/1321261.1321292)
