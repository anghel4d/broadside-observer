---
title: "Multiple-scattering Microfacet BSDFs with the Smith Model"
authors:
  - "Eric Heitz"
  - "Johannes Hanika"
  - "Eugene d'Eon"
  - "Carsten Dachsbacher"
year: 2016
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/2897824.2925943"
source: "https://eheitzresearch.wordpress.com/240-2/"
topics:
  - "microfacet"
  - "multiple-scattering"
  - "dielectric"
  - "energy-conservation"
seed_rank: 1427
seed_batch: "mirrors-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: layered-materials
cites:
  - title: "Microfacet Models for Refraction through Rough Surfaces"
    url: "https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf"
    year: 2007
    arxiv: null
    doi: "10.2312/EGWR/EGSR07/195-206"
  - title: "Efficient rendering of layered materials using an atomic decomposition with statistical operators"
    url: "https://doi.org/10.1145/3197517.3201329"
    year: 2018
    arxiv: null
    doi: "10.1145/3197517.3201329"
  - title: "Revisiting Physically Based Shading at Imageworks"
    url: "https://blog.selfshadow.com/publications/s2017-shading-course/"
    year: 2017
    arxiv: null
    doi: null
  - title: "A Multiple-scattering Microfacet Model for Real-time Image-based Lighting"
    url: "https://jcgt.org/published/0008/01/03/"
    year: 2019
    arxiv: null
    doi: null
see:
  - "1312-microfacet-models-for-refraction-through-rough-surfaces"
  - "1259-efficient-rendering-of-layered-materials-using-an-atomic"
  - "270-real-shading-in-unreal-engine-4"
---

# Multiple-scattering Microfacet BSDFs with the Smith Model

## One-sentence takeaway

Rough glass goes dark in a furnace test because GGX only counts one bounce — Heitz puts the missing energy back, as a real dielectric BSDF.

## Why it's lovely

Why you might love this: The appearance paper for frosted glass and rough metal. Walter 2007 (1312) gave us the GGX *lobe*; this paper gave us the energy that lobe was swallowing. Imageworks, Filament, and UE's multiple-scatter compensation all start here.

## Problem

Smith single-scatter microfacet BSDFs (Beckmann/GGX, including Walter's BTDF) ignore rays that hit more than one facet. On rough dielectrics that missing energy is a brown-out: the more you roughen glass, the blacker it gets, which is not how sandblasted glass looks. Layered adding-doubling (Belcour 1259) is already in the library; it does not fix *intra*-microsurface bounce.

## Design

- Recast the Smith microsurface as a plane-parallel microflake volume with a sharp-interface constraint.
- Free-path + phase function whose first-order term *is* the classical Smith BSDF; higher orders are the missing multiple scatter.
- Conductor, dielectric (reflection *and* refraction), and diffuse microsurfaces; anisotropic GGX/Beckmann.
- Analytic VNDF importance sampling; unbiased stochastic evaluation of the random walk — no per-BSDF LUT required, so textures just work.

## Evidence

SIGGRAPH / TOG 2016. Validated against explicit random Beckmann meshes. Became the ground-truth furnace test for production: Kulla/Conty 2017 (analytic compensation lobe) and Fdez-Agüera 2019 (realtime IBL LUT) are the engine-shaped approximations of this model. Reciprocal and energy conserving by construction.

## Limitations

The walk is stochastic — not a closed form — so realtime engines ship the Kulla/Fdez approximation instead of the random walk. Height-aware walks are noisier than later position-free variants (Wang 2021, Cui 2023). Not a layered-coating paper (that's Belcour); this is the microsurface itself.

## Implications for Broadside

Anoptic rough glass, car paint flakes, and frosted visors should not ship single-scatter GGX. Use this as the dielectric BSDF of record; for a 2 ms shader, take Fdez-Agüera's IBL LUT. Do not remint Walter. Pair with SMS when the *path* through glass is the problem, not the lobe.

## Bottom line

Mint Heitz 2016. THE energy-conserving rough-glass BSDF, not another layered-coating remint and not more reflection rays.

## Links

- DOI: [10.1145/2897824.2925943](https://doi.org/10.1145/2897824.2925943)
- URL: https://eheitzresearch.wordpress.com/240-2/
