---
title: "Imperfect Shadow Maps for Efficient Computation of Indirect Illumination"
authors:
  - "Tobias Ritschel"
  - "Thorsten Grosch"
  - "Min H. Kim"
  - "Hans-Peter Seidel"
  - "Carsten Dachsbacher"
  - "Jan Kautz"
year: 2008
venue: "SIGGRAPH Asia / ACM TOG"
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
    arxiv: null
    doi: "10.1145/258734.258769"
  - title: "Reflective Shadow Maps"
    url: "https://doi.org/10.1145/1053427.1053460"
    year: 2005
    arxiv: null
    doi: "10.1145/1053427.1053460"
  - title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
    url: "https://doi.org/10.1145/1730804.1730821"
    year: 2010
    arxiv: null
    doi: "10.1145/1730804.1730821"
see:
  - "450-instant-radiosity"
  - "292-reflective-shadow-maps"
  - "277-light-propagation-volumes-in-cryengine-3"
---

# Imperfect Shadow Maps for Efficient Computation of Indirect Illumination

## One-sentence takeaway

Thousands of VPLs can cast approximate shadows from a coarse point-sampled scene into tiny “imperfect” shadow maps, because indirect lighting is smooth enough to hide the visibility error.

## Why it matters here

Many-light visibility is the cost Radiance Cascades later amortize with interval probes. ISM is the paper that says “indirect occlusion can be wrong if it is cheap and low-frequency,” which is the same bet Anoptic makes when it refuses a shadow map per virtual light.

## Key ideas

- Direct lighting still needs accurate visibility; indirect uses low-resolution cubemap-like shadow maps rendered from a point-based scene proxy.
- Point splats fill holes that a coarse triangle rasterizer would leave, so even a few hundred texels per VPL give usable umbrae.
- Coupled to Instant Radiosity / RSM-style many lights, the method reports about an order-of-magnitude speedup over accurate VPL shadows on 2008 GPUs.
- Errors show up as leaking or softened contact shadows, not as high-frequency flicker, which is why the approximation is acceptable for bounce light.

## Caveats

## Links

- DOI: [10.1145/1409060.1409082](https://doi.org/10.1145/1409060.1409082)
- Author page: https://vclab.kaist.ac.kr/siggraphasia2008/index.html
- PDF: https://resources.mpi-inf.mpg.de/ImperfectShadowMaps/ISM.pdf
