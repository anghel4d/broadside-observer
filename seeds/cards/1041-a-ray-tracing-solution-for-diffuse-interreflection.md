---
title: "A Ray Tracing Solution for Diffuse Interreflection"
authors: ["Gregory J. Ward", "Francis M. Rubinstein", "Robert D. Clear"]
year: 1988
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/378456.378490"
source: "https://doi.org/10.1145/378456.378490"
topics: [irradiance-caching, global-illumination, radiance]
seed_rank: 1041
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "graphics"
relevance_score: 10
lineage: irradiance-cache
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "The RADIANCE Lighting Simulation and Rendering System"
    url: "https://doi.org/10.1145/192161.192286"
    year: 1994
    arxiv: null
    doi: "10.1145/192161.192286"
  - title: "Irradiance Gradients"
    url: "https://doi.org/10.2312/EGWR/EGWR92/085-098"
    year: 1992
    arxiv: null
    doi: "10.2312/EGWR/EGWR92/085-098"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Yaazarai/RadianceCascades"
    year: 2023
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "451-the-irradiance-volume"
  - "450-instant-radiosity"
  - "374-global-illumination-using-photon-maps"
  - "152-the-rendering-equation"
---

# A Ray Tracing Solution for Diffuse Interreflection

## One-sentence takeaway

Indirect diffuse irradiance varies slowly — compute it sparsely with Monte Carlo, cache it, and interpolate (the split-sphere heuristic) instead of a constant ambient term.

## Why it matters here

Radiance cascades (005) are Anoptic's real-time GI. The 1988 paper is the missing *sparse sample + interpolate* ancestor: irradiance caching, later the heart of Ward's Radiance renderer. The shelf had photon maps (374), instant radiosity (450), and the irradiance *volume* (451), but not this cache. RC's "don't resample what hasn't changed" is the same bet Ward made against a constant ambient.

## Key ideas

- Indirect illuminance is computed only where the renderer actually looks, stored, and reused across views.
- Split-sphere heuristic: an imaginary environment that maximises irradiance change with translation/rotation, giving a conservative valid radius per cache record.
- Sample density tracks a constant error; empty regions stay cheap. Successive bounces use proportionally fewer samples, bounding recursion.
- Also handles diffuse transmission and large area sources (sky) — lighting-design, not just pretty pictures.
- Ward & Heckbert (1992) add translational/rotational irradiance gradients; Ward (1994) packages the method in the Radiance system.

## Caveats

- The heuristic assumes no strong local indirect sources; production renderers clamp radii and add many parameters on top.
- This is view-dependent caching on surfaces, not a probe hierarchy. Radiance cascades discretise direction × position differently.
- Do not remint the 1994 Radiance *system* paper or the 1992 gradients paper here; they are cites.

## Links

- DOI: [10.1145/378456.378490](https://doi.org/10.1145/378456.378490)
- SIGGRAPH History: https://history.siggraph.org/learning/a-ray-tracing-solution-for-diffuse-interreflection-by-ward-rubinstein-and-clear/
- Author PDF: https://www.irisa.fr/prive/kadi/Mustafa/Radiance_Program_Ward.pdf
