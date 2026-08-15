---
title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
authors:
  - "Anton Kaplanyan"
  - "Carsten Dachsbacher"
year: 2010
venue: "I3D 2010"
arxiv: null
doi: "10.1145/1730804.1730821"
source: "https://doi.org/10.1145/1730804.1730821"
topics:
  - gi
  - lpv
  - cascades
seed_rank: 277
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
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    doi: "10.1145/258734.258769"
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    doi: "10.1145/1944745.1944787"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "292-reflective-shadow-maps"
  - "450-instant-radiosity"
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Cascaded Light Propagation Volumes for Real-Time Indirect Illumination

## One-sentence takeaway

Nested lattices of low-order spherical-harmonics light volumes inject RSM virtual point lights and propagate them through a geometry volume, giving fully dynamic indirect light at console budgets.

## Why it matters here

Classical cascade foil for Radiance Cascades: LPV already used nested spatial LOD for dynamic GI. RC reframes the cascade around radiance intervals and the penumbra hypothesis instead of SH lattice hops.

## Key ideas

- Represent spatial and angular irradiance with a 3D grid of low-order SH coefficients.
- Cascaded nested grids follow the camera: fine near-field cells, cheap far coverage.
- Inject secondary sources from reflective shadow maps, then iteratively propagate through an occupancy / geometry volume for fuzzy occlusion.
- Shipped in CryEngine 3-era titles at millisecond console budgets, which made volumetric GI industrially credible.
- Low-order SH smears high-frequency directionality; light leaking is the known LPV failure mode.

## Caveats

## Links

- DOI: [10.1145/1730804.1730821](https://doi.org/10.1145/1730804.1730821)
