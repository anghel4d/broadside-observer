---
title: "Light Transport Simulation with Vertex Connection and Merging"
authors:
  - "Iliyan Georgiev"
  - "Jaroslav Křivánek"
  - "Tomáš Davidovič"
  - "Philipp Slusallek"
year: 2012
venue: "SIGGRAPH Asia / TOG"
arxiv: null
doi: "10.1145/2366145.2366211"
source: "https://cgg.mff.cuni.cz/~jaroslav/papers/2012-vcm/"
topics:
  - "VCM"
  - "photon-mapping"
  - "BDPT"
seed_rank: 1381
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: realtime-gi
cites:
  - title: "Global Illumination using Photon Maps"
    url: "https://graphics.stanford.edu/papers/photon-maps/"
    year: 1996
    arxiv: null
    doi: null
  - title: "Progressive Photon Mapping"
    url: "https://www.ci.i.u-tokyo.ac.jp/~hachisuka/ppm.pdf"
    year: 2008
    arxiv: null
    doi: "10.1145/1360612.1360637"
  - title: "The Beam Radiance Estimate for Volumetric Photon Mapping"
    url: "https://doi.org/10.1145/1360612.1360635"
    year: 2008
    arxiv: null
    doi: "10.1145/1360612.1360635"
see:
  - "374-global-illumination-using-photon-maps"
  - "1331-progressive-photon-beams"
  - "1318-the-beam-radiance-estimate-for-volumetric-photon-mapping"
---

# Light Transport Simulation with Vertex Connection and Merging

## One-sentence takeaway

Unify BDPT connections and photon-map merges into one MIS-weighted estimator — VCM/UPS, the hybrid every later PT+photon paper cites.

## Why it's lovely

Why you might love this: BDPT and photon mapping stop being rival religions. One estimator, two techniques, MIS between vertices and merges.

## Problem

BDPT is great at long diffuse chains and bad at SDS caustics. Photon mapping is the opposite. Production wanted both without running two integrators and without a hand-tuned radius.

## Design

- Trace light and eye subpaths as in BDPT.
- Vertex connection: the usual BDPT connections.
- Vertex merging: treat a photon-map merge as another technique with an explicit PDF, then MIS across connections and merges.
- Progressive radius (PPM-style) optional; the formulation is the contribution, not a new data structure.

## Evidence

SIGGRAPH Asia 2012 / TOG. VCM/UPS became the default 'do both' integrator in research renderers and a conceptual parent of later hybrid game PT/photon work.

## Limitations

Offline. Merge radius is still a parameter. Not a realtime GI cache. Do not remint Jensen 1996 (374) or PPM — this is the unification.

## Implications for Broadside

Anoptic's mental model of 'GI techniques are MIS techniques' starts here. Photon maps (374) and progressive photon beams (1331) are the biased family; VCM is the unbiased-ish umbrella.

## Bottom line

Mint VCM. The BDPT+photon unification.

## Links

- DOI: [10.1145/2366145.2366211](https://doi.org/10.1145/2366145.2366211)
- URL: https://cgg.mff.cuni.cz/~jaroslav/papers/2012-vcm/
