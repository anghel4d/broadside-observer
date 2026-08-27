---
title: "Discrete Stochastic Microfacet Models"
authors:
  - "Ling-Qi Yan"
  - "Milos Hasan"
  - "Wenzel Jakob"
  - "Jason Lawrence"
  - "Steve Marschner"
  - "Ravi Ramamoorthi"
year: 2014
venue: "ACM TOG (SIGGRAPH)"
arxiv: null
doi: "10.1145/2601097.2601186"
source: "https://www.cs.cornell.edu/projects/microfacetGlints/"
topics:
  - "glints"
  - "snow-sparkle"
seed_rank: 1412
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 8
lineage: snow
cites:
  - title: "Microfacet Models for Refraction through Rough Surfaces"
    url: "https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf"
    year: 2007
    arxiv: null
    doi: null
  - title: "A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence"
    url: "https://doi.org/10.1145/2601097.2601136"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601136"
see:
  - "1312-microfacet-models-for-refraction-through-rough-surfaces"
  - "1288-a-practical-extension-to-microfacet-theory-for-the-modeling-of"
---

# Discrete Stochastic Microfacet Models

## One-sentence takeaway

Physically-based sparkle for fresh snow and ice. Discrete microfacets, not a noise texture.

## Why it's lovely

Why you might love this: Snow that glints because the facets are real. Yan et al. — sparkle as a stochastic BRDF.

## Problem

Smooth microfacet BRDFs (GGX/Walter 1312) average away the sparkle of fresh snow, car paint, and ice. A noise-on-spec trick is not a BRDF. Need a discrete, countable-facet model that sparkles under motion and light.

## Design

- Discrete stochastic microfacet: a point process of facets, not a continuous NDF.
- Glints as the rare facets that reflect the light to the eye.
- Cornell project page; SIGGRAPH 2014 / TOG DOI 10.1145/2601097.2601186.
- Not a remint of GGX/Walter (1312) or the practical-extension card (1288).

## Evidence

THE glints paper. Snow sparkle, car paint, and later discrete-microfacet work all start here.

## Limitations

Offline-first; realtime glints are a later approximation. Does not deform snow.

## Implications for Broadside

Anoptic snow shading: MPM/game-deform for shape, this for sparkle, Frozen Worlds for ice volume. Walter 1312 stays the continuous microfacet card — do not remint GGX.

## Bottom line

Mint Yan glints. Snow sparkle as a BRDF.

## Links

- DOI: [10.1145/2601097.2601186](https://doi.org/10.1145/2601097.2601186)
- URL: https://www.cs.cornell.edu/projects/microfacetGlints/
