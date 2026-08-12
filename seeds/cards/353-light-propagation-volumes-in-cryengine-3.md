---
title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
authors:
  - "Anton Kaplanyan"
  - "Carsten Dachsbacher"
year: 2010
venue: "I3D"
arxiv: null
doi: "10.1145/1730804.1730821"
source: "https://doi.org/10.1145/1730804.1730821"
topics:
  - gi
  - lpv
  - cascades
seed_rank: 353
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Reflective Shadow Maps"
    url: "https://doi.org/10.1145/1053427.1053460"
    year: 2005
    doi: "10.1145/1053427.1053460"
    card: "368-reflective-shadow-maps"
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    doi: "10.1145/258734.258769"
    card: "661-instant-radiosity"
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    doi: "10.1145/1944745.1944787"
    card: "348-interactive-indirect-illumination-using-voxel-cone-tracing"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    card: "397-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    card: "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Cascaded Light Propagation Volumes for Real-Time Indirect Illumination

## One-sentence takeaway

Nested lattices of spherical-harmonics light volumes that propagate indirect light in fully dynamic scenes — CryEngine-era cascaded RTGI.

## Why it matters here

Key classical foil for Radiance Cascades: LPV already uses cascaded spatial LOD for dynamic GI; RC reframes the cascade idea around radiance intervals and the penumbra hypothesis instead of SH lattice propagation.

## Key ideas

- Represent spatial and angular light distribution with lattices + low-order spherical harmonics.
- Cascaded nested grids follow the camera for high near-field resolution and cheap far coverage.
- Injects RSM-style indirect sources then propagates through a geometry volume for fuzzy occlusion.
- Shipped-quality budgets (milliseconds on consoles) made volumetric GI industrially credible.

## Caveats

- Low-order SH smears high-frequency directionality; light leaking remains a known LPV issue.
- Card previously titled “LPV in CryEngine 3”; DOI points at the I3D Cascaded LPV paper — title corrected in this lineage pass.

## Links

- DOI: [10.1145/1730804.1730821](https://doi.org/10.1145/1730804.1730821)
- URL: https://doi.org/10.1145/1730804.1730821
