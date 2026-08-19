---
title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
authors:
  - "Alexander Sannikov"
year: 2023
venue: "WIP preprint / ExileCon talk (Grinding Gear Games)"
arxiv: null
doi: null
source: "https://github.com/Raikiri/RadianceCascadesPaper"
topics:
  - radiance-cascades
  - gi
  - rtgi
seed_rank: 5
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 10
lineage: radiance-cascades
cites:
  - title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
    url: "https://doi.org/10.1145/1730804.1730821"
    year: 2010
    doi: "10.1145/1730804.1730821"
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    doi: "10.1145/1944745.1944787"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Reflective Shadow Maps"
    url: "https://doi.org/10.1145/1053427.1053460"
    year: 2005
    doi: "10.1145/1053427.1053460"
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    doi: "10.1145/258734.258769"
  - title: "Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer"
    url: "https://arxiv.org/abs/2408.14425"
    year: 2024
    arxiv: "2408.14425"
    doi: "10.1093/rasti/rzae062"
  - title: "Holographic Radiance Cascades for 2D Global Illumination"
    url: "https://arxiv.org/abs/2505.02041"
    year: 2025
    arxiv: "2505.02041"
  - title: "Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes"
    url: "https://arxiv.org/abs/2607.20384"
    year: 2026
    arxiv: "2607.20384"
see:
  - "277-light-propagation-volumes-in-cryengine-3"
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "292-reflective-shadow-maps"
  - "450-instant-radiosity"
  - "453-radiance-cascades-a-novel-high-resolution-formal-solution-fo"
  - "211-holographic-radiance-cascades-for-2d-global-illumination"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "1107-a-simple-ray-acceleration-structure-for-non-lte-radiative-t"
---

# Radiance Cascades: A Novel Approach to Calculating Global Illumination

## One-sentence takeaway

Hierarchical radiance intervals that trade spatial vs angular resolution along the penumbra hypothesis — noiseless, geometry-agnostic real-time GI used in Path of Exile 2.

## Why it matters here

Primary Anoptic / Broadside Radiance Cascades reference: the living algorithm that reframes probe/voxel RTGI as mergeable near-to-far radiance cascades with constant, scene-independent cost.

## Key ideas

- Decompose the radiance field into cascaded distance ranges (near → far), each with its own spatial and angular resolution.
- Penumbra hypothesis: resolve nearby emitters with high spatial / low angular resolution, and distant emitters with low spatial / high angular resolution.
- Merging cascades reconstructs a full radiance field at a cost comparable to a tiny fixed ray budget while approximating a huge directional sample count.
- Geometry-agnostic and rebuildable every frame without temporal accumulation — attractive for fully dynamic RTS-like lighting.
- Originally shipped thinking for Path of Exile 2 screenspace/2D-friendly GI; 3D world-space variants remain an active research frontier (Split RC, Surfel/UV-space community variants).

## Caveats

## Links

- URL: https://github.com/Raikiri/RadianceCascadesPaper
