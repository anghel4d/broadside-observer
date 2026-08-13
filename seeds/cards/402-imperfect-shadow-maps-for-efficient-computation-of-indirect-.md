---
title: "Imperfect Shadow Maps for Efficient Computation of Indirect Illumination"
authors:
  - "Tobias Ritschel et al."
year: 2008
venue: "SIGGRAPH Asia"
arxiv: null
doi: "10.1145/1409060.1409082"
source: "https://doi.org/10.1145/1409060.1409082"
topics:
  - gi
  - shadows
seed_rank: 402
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 7
lineage: radiance-cascades
cites:
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    doi: "10.1145/258734.258769"
  - title: "Reflective Shadow Maps"
    url: "https://doi.org/10.1145/1053427.1053460"
    year: 2005
    doi: "10.1145/1053427.1053460"
  - title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
    url: "https://doi.org/10.1145/1730804.1730821"
    year: 2010
    doi: "10.1145/1730804.1730821"
see:
  - "450-instant-radiosity"
  - "292-reflective-shadow-maps"
  - "277-light-propagation-volumes-in-cryengine-3"
---

# Imperfect Shadow Maps for Efficient Computation of Indirect Illumination

## One-sentence takeaway

Approximate many-VPL visibility with low-resolution point-based “imperfect” shadow maps for interactive indirect illumination.

## Why it matters here

Many-light visibility foil on the RC epistemology: shows the cost of correct VPL occlusion that volumetric/cascade methods later amortize differently.

## Key ideas

- Point-based scene approx lets thousands of VPLs cast cheap imperfect shadows.
- Trades geometric fidelity of shadows for scalable many-light GI.
- Sits between RSM splatting and later volume-propagation approaches.

## Caveats

- Imperfect visibility can leak or soften occlusion; not a modern probe/cascade replacement.

## Links

- DOI: [10.1145/1409060.1409082](https://doi.org/10.1145/1409060.1409082)
- URL: https://doi.org/10.1145/1409060.1409082
