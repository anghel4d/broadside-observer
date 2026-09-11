---
title: "Stochastic Light Culling"
authors: ["Yusuke Tokuyoshi", "Takahiro Harada"]
year: 2016
venue: "JCGT vol. 5, no. 1"
arxiv: null
doi: null
source: "http://jcgt.org/published/0005/01/02/"
topics: [many-lights, lightcuts]
seed_rank: 1785
seed_batch: "craft-2026-09-11"
reviewed: "2026-09-11"
pool: "graphics"
relevance_score: 9
lineage: lightcuts
cites:
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073318"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073318"
  - title: "Clustered Deferred and Forward Shading"
    url: "https://doi.org/10.2312/EGGH/HPG12/087-096"
    year: 2012
    arxiv: null
    doi: "10.2312/EGGH/HPG12/087-096"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    arxiv: null
    doi: null
  - title: "Multidimensional Lightcuts"
    url: "https://doi.org/10.1145/1141911.1141997"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141997"
see:
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "477-clustered-deferred-and-forward-shading"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Stochastic Light Culling

## One-sentence takeaway

Tokuyoshi & Harada replace hard light-range clamps in tiled/clustered lighting with a Russian-roulette range so many-lights culling stays unbiased (or low-bias) and stops the darkening/popping that clamped falloff always introduces.

## Why it matters here

Lightcuts 1042 is in the library; the leftover for Anoptic many-lights / probe GI is *engine culling*, not another hierarchical cut. GRID COMMAND and Anoptic forward/clustered lights still clamp ranges for tile lists — that clamp is a bias you can see as lights slide across tile boundaries. Stochastic Light Culling plugs into existing tiled/clustered frameworks (477) and is the practical many-lights leftover of Lightcuts, not neural irradiance.

## Key ideas

- **Stochastic range via Russian roulette.** Each light draws a random influence radius from an error-bounded acceptance probability instead of a hard cutoff, then compensates in the estimator so the expected contribution is unbiased.
- **Drop-in on tiled/clustered culling.** Range computation is independent of the culling data structure — reuse Olsson-style clustered lists or classic tiled lighting; only the fall-off and acceptance change.
- **Sublinear shading after culling.** When the random range is derived from a user error bound, expected shading cost grows slower than light count; the paper shows tens of thousands of VPLs in a few milliseconds.
- **Offline path-tracing cousin.** A GPU bounding-sphere-tree cull handles randomly distributed shading points, so the same idea covers many-area-light path tracing without a second algorithm.

## Caveats

JCGT vol. 5, no. 1, pp. 35–60, 2016; no DOI. URL path `0005/01/02` is the volume of record (not vol. 6). Variance still exists — tune the error bound or you trade clamp-darkening for noise. Do not remint Lightcuts 1042, Multidimensional Lightcuts (cite-not-mint), clustered shading 477, or DDGI/Split RC. Skip the 2017 GGX-ellipsoid EGSR follow-up unless you need glossy VPL bounds.

## Links

- JCGT page: http://jcgt.org/published/0005/01/02/
- PDF: https://jcgt.org/published/0005/01/02/paper.pdf
- Low-res PDF: https://jcgt.org/published/0005/01/02/paper-lowres.pdf
