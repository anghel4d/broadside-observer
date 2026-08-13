---
title: "Illumination for Computer Generated Pictures"
authors:
  - "Bui Tuong Phong"
year: 1975
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/360825.360839"
source: "https://doi.org/10.1145/360825.360839"
topics:
  - graphics
  - phong
  - shading
seed_rank: 1152
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "Continuous Shading of Curved Surfaces"
    url: "https://doi.org/10.1109/T-C.1971.223313"
    year: 1971
    arxiv: null
    doi: "10.1109/T-C.1971.223313"
    card: "1151-continuous-shading-of-curved-surfaces"
  - title: "Models of Light Reflection for Computer Synthesized Pictures"
    url: "https://doi.org/10.1145/563858.563893"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563893"
    card: "1149-models-of-light-reflection-for-computer-synthesized-pictures"
  - title: "A Reflectance Model for Computer Graphics"
    url: "https://doi.org/10.1145/357290.357293"
    year: 1982
    arxiv: null
    doi: "10.1145/357290.357293"
    card: "1154-a-reflectance-model-for-computer-graphics"
  - title: "Physically Based Shading at Disney"
    url: "https://media.disneyanimation.com/uploads/production/publication_asset/48/asset/s2012_pbs_disney_brdf_notes_v3.pdf"
    year: 2012
    arxiv: null
    doi: null
    card: "424-physically-based-shading-at-disney"
---

# Illumination for Computer Generated Pictures

## One-sentence takeaway

Phong's illumination model and normal interpolation: specular highlights that defined a generation of CG look.

## Why it matters here

Still the teaching BRDF before Cook–Torrance/Disney; lives in every graphics debugger mental model.

## Key ideas

- Ambient/diffuse/specular decomposition.
- Normal interpolation across polygons.
- Empirical specular lobe.
- Direct predecessor to Blinn–Phong variants.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/360825.360839](https://doi.org/10.1145/360825.360839)
- URL: https://doi.org/10.1145/360825.360839
