---
title: "A Reflectance Model for Computer Graphics"
authors:
  - "R. L. Cook"
  - "K. E. Torrance"
year: 1982
venue: "ACM TOG / SIGGRAPH"
arxiv: null
doi: "10.1145/357290.357293"
source: "https://doi.org/10.1145/357290.357293"
topics:
  - graphics
  - brdf
  - cook-torrance
  - pbr
seed_rank: 1154
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "Models of Light Reflection for Computer Synthesized Pictures"
    url: "https://doi.org/10.1145/563858.563893"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563893"
    card: "1149-models-of-light-reflection-for-computer-synthesized-pictures"
  - title: "Illumination for Computer Generated Pictures"
    url: "https://doi.org/10.1145/360825.360839"
    year: 1975
    arxiv: null
    doi: "10.1145/360825.360839"
    card: "1152-illumination-for-computer-generated-pictures"
  - title: "Physically Based Shading at Disney"
    url: "https://media.disneyanimation.com/uploads/production/publication_asset/48/asset/s2012_pbs_disney_brdf_notes_v3.pdf"
    year: 2012
    arxiv: null
    doi: null
    card: "424-physically-based-shading-at-disney"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
    card: "169-the-rendering-equation"
---

# A Reflectance Model for Computer Graphics

## One-sentence takeaway

Cook–Torrance microfacet BRDF brings physically motivated specular reflectance into mainstream CG.

## Why it matters here

Direct ancestor of modern PBR specular (Disney 424, Filament guides).

## Key ideas

- Microfacet distribution (D), Fresnel (F), geometry (G).
- Physically plausible specular vs Phong lobes.
- Energy-aware shading motivations.
- Bridge from Torrance–Sparrow optics to real-time PBR.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/357290.357293](https://doi.org/10.1145/357290.357293)
- URL: https://doi.org/10.1145/357290.357293
