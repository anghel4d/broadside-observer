---
title: "An Approximate Reflectance Profile for Efficient Subsurface Scattering"
authors: ["Per H. Christensen"]
year: 2015
venue: "SIGGRAPH Talks"
arxiv: null
doi: "10.1145/2775280.2792555"
source: "https://doi.org/10.1145/2775280.2792555"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1277
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "A Quantized-Diffusion Model for Rendering Translucent Materials"
    url: "https://doi.org/10.1145/1964921.1964951"
    year: 2011
    arxiv: null
    doi: "10.1145/1964921.1964951"
  - title: "Photon Beam Diffusion: A Hybrid Monte Carlo Method for Subsurface Scattering"
    url: "https://doi.org/10.1111/cgf.12148"
    year: 2013
    arxiv: null
    doi: "10.1111/cgf.12148"
  - title: "Extending the Disney BRDF to a BSDF with Integrated Subsurface Scattering"
    url: "https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf"
    year: 2015
    arxiv: null
    doi: null
see:
  - "152-the-rendering-equation"
  - "1253-a-quantized-diffusion-model-for-rendering-translucent-materials"
  - "1257-photon-beam-diffusion-a-hybrid-monte-carlo-method-for-subsurface"
  - "1278-extending-the-disney-brdf-to-a-bsdf-with-integrated-subsurface"
---

# An Approximate Reflectance Profile for Efficient Subsurface Scattering

## One-sentence takeaway

Christensen 2015 approximate reflectance profile: the cheap cubic / spline Rd that Disney treated as interchangeable with Burley SSS.

## Problem

PBD / QD are too heavy to shade every sample. Need a few-coefficient reflectance profile that matches the look.

## Design

Fit a simple analytic Rd (cubic, etc.) to PBD / QD; evaluate in a path tracer as a BSSRDF. Lineage: PBD/QD too heavy → Christensen15 ≈ Burley ND.

## Evidence

SIGGRAPH Talks 2015, DOI 10.1145/2775280.2792555. Twin of Burley 2015 course notes.

## Limitations

Talk. Empirical profile, not a derivation. Chiang 2016 path-traced SSS is the production replacement at Disney.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Christensen 2015. Cite PBD; pair with Burley 2015.

## Links

- DOI: [10.1145/2775280.2792555](https://doi.org/10.1145/2775280.2792555)
