---
title: "A Rapid Hierarchical Radiosity Algorithm"
authors:
  - "Pat Hanrahan"
  - "David Salzman"
  - "Larry Aupperle"
year: 1991
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/122718.122740"
source: "https://doi.org/10.1145/122718.122740"
topics:
  - "hierarchical-radiosity"
  - "form-factors"
  - "global-illumination"
  - "n-body"
seed_rank: 1068
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "graphics"
relevance_score: 10
lineage: hierarchical-radiosity
cites:
  - title: "Modeling the Interaction of Light Between Diffuse Surfaces"
    url: "https://doi.org/10.1145/800031.808601"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808601"
  - title: "A Ray Tracing Solution for Diffuse Interreflection"
    url: "https://doi.org/10.1145/378456.378490"
    year: 1988
    arxiv: null
    doi: "10.1145/378456.378490"
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258769"
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073318"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073318"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://radiance-cascades.com/"
    year: 2023
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1041-a-ray-tracing-solution-for-diffuse-interreflection"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "450-instant-radiosity"
  - "152-the-rendering-equation"
  - "367-an-efficient-representation-for-irradiance-environment-maps"
---

# A Rapid Hierarchical Radiosity Algorithm

## One-sentence takeaway

Treat form factors as an n-body problem: adaptively subdivide patches until each transport link meets an error bound, and the dense n² matrix collapses to O(n) blocks.

## Why it matters here

Instant radiosity (450) is VPLs; irradiance caching (1041) is sparse glossy GI; Lightcuts (1042) is a many-lights tree-cut; radiance cascades (005) is hierarchical probes. The missing 1991 paper is the one that first said "GI transport is hierarchical, refine until the error is uniform." Anoptic's cascade/probe hierarchy is the real-time grandchild of this form-factor tree, not of Goral's original dense radiosity system.

## Key ideas

- User error bound on each form factor; refine both ends of a link until the bound holds — no more bright-spot artifacts from a single bad F_ij.
- At most O(n) blocks in the hierarchical matrix vs n² element-to-element transports.
- Visibility is folded into the same refine-or-link test; shooting and gathering still work on the hierarchy.
- Brightness-weighted error + multigridding for progressive refinement that spends samples where the image cares.
- Explicit n-body / Barnes–Hut analogy in the text.

## Caveats

- Classical radiosity: diffuse only, meshing pain, not a real-time algorithm. Cascades/LPVs are the engine reading.
- Goral 1984 is the energy-balance formulation; this is the scalability paper. We kept this, not the textbook founding.
- Clustering / wavelet radiosity are 1990s follow-ons, not reminted.

## Links

- DOI: [10.1145/122718.122740](https://doi.org/10.1145/122718.122740)
- Stanford page: http://graphics.stanford.edu/papers/rad/
