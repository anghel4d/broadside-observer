---
title: "The Irradiance Volume"
authors:
  - "Gene Greger"
  - "Peter Shirley"
  - "Philip M. Hubbard"
  - "Donald P. Greenberg"
year: 1998
venue: "IEEE Computer Graphics and Applications"
arxiv: null
doi: "10.1109/38.656788"
source: "https://doi.org/10.1109/38.656788"
topics:
  - gi
  - irradiance-volume
  - probes
seed_rank: 662
seed_batch: "lineage-radiance-cascades-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Precomputed Radiance Transfer"
    url: "https://doi.org/10.1145/566570.566612"
    year: 2002
    doi: "10.1145/566570.566612"
  - title: "Real-Time Global Illumination using Precomputed Light Field Probes"
    url: "https://research.nvidia.com/publication/real-time-global-illumination-using-precomputed-light-field-probes"
    year: 2017
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
see:
  - "447-precomputed-radiance-transfer"
  - "406-real-time-global-illumination-using-precomputed-light-field-"
  - "397-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# The Irradiance Volume

## One-sentence takeaway

Extends irradiance from surfaces into a queryable volumetric field — the ancestor of modern irradiance/ radiance probe grids.

## Why it matters here

Probe-volume precursor on the Radiance Cascades epistemology: DDGI and RC both sit in the lineage of storing directional lighting in space rather than only on meshes.

## Key ideas

- Defines irradiance at every point and direction inside a volume, not only on surfaces.
- Precomputes a spatial data structure that applications can query for believable indirect lighting when full GI is too expensive.
- Targets semi-dynamic environments where visual plausibility beats absolute radiometric accuracy.
- Direct conceptual ancestor of light-field / irradiance probe systems later used in engines and as foils for RC.

## Caveats

- Precomputation-oriented; not a drop-in dynamic RTGI solution by itself.
- Angular representation is coarse relative to modern probe/cascade schemes.

## Links

- DOI: [10.1109/38.656788](https://doi.org/10.1109/38.656788)
- URL: https://doi.org/10.1109/38.656788
