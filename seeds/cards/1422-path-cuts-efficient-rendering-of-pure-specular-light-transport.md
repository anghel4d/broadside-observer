---
title: "Path Cuts: Efficient Rendering of Pure Specular Light Transport"
authors:
  - "Beibei Wang"
  - "Milos Hasan"
  - "Ling-Qi Yan"
year: 2020
venue: "SIGGRAPH Asia / TOG"
arxiv: null
doi: "10.1145/3414685.3417793"
source: "https://wangningbei.github.io/"
topics:
  - "specular"
  - "caustics"
  - "path-cuts"
seed_rank: 1422
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: china-graphics
cites:
  - title: "Microfacet Models for Refraction through Rough Surfaces"
    url: "https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf"
    year: 2007
    arxiv: null
    doi: null
  - title: "Light Transport Simulation with Vertex Connection and Merging"
    url: "https://cgg.mff.cuni.cz/~jaroslav/papers/2012-vcm/"
    year: 2012
    arxiv: null
    doi: "10.1145/2366145.2366211"
see:
  - "1312-microfacet-models-for-refraction-through-rough-surfaces"
---

# Path Cuts: Efficient Rendering of Pure Specular Light Transport

## One-sentence takeaway

Path cuts for pure specular chains (water/glass). Specular GI that actually converges. NJUST.

## Why it's lovely

Why you might love this: Specular chains that find the light. Path cuts — caustics as a cut in path space, not a prayer.

## Problem

Pure specular SDS paths (water, glass) have measure zero under ordinary PT. Photon mapping is biased. Need an efficient method for pure specular light transport that converges.

## Design

- Path cuts: prune/cut the specular path space so the surviving chains are the ones that connect.
- Aimed at pure specular transport (water/glass caustics), not diffuse GI.
- SIGGRAPH Asia 2020 / TOG, DOI 10.1145/3414685.3417793; Beibei Wang page.
- NJUST. Unbiased caustics 2022 is a sequel leftover / backup — not minted unless needed.

## Evidence

Specular GI that actually converges. China-shelf caustics/water card, not a Western photon-mapper remint.

## Limitations

Pure specular; not the full BDPT/VCM stack. Not realtime game caustics (that's still cheats + maybe RT).

## Implications for Broadside

Anoptic water/glass reference: Path Cuts on the China shelf, VCM/PPM on the Western GI shelf. Walter 1312 stays the microfacet card.

## Bottom line

Mint Path Cuts. NJUST specular chains.

## Links

- DOI: [10.1145/3414685.3417793](https://doi.org/10.1145/3414685.3417793)
- URL: https://wangningbei.github.io/
