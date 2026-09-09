---
title: "Boundary element method calculation of individual head-related transfer function. I. Rigid model calculation"
authors: ["Brian F. G. Katz"]
year: 2001
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.1412440"
source: "https://doi.org/10.1121/1.1412440"
topics: [hrtf, anthropometry, measurement]
seed_rank: 1692
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: hrtf-spatial-audio
cites:
  - title: "The CIPIC HRTF database"
    url: "https://doi.org/10.1109/aspaa.2001.969552"
    year: 2001
    arxiv: null
    doi: "10.1109/aspaa.2001.969552"
see:
  - "1676-the-cipic-hrtf-database"
  - "1171-rapid-solution-of-integral-equations-of-scattering-theory-in-tw"
  - "1174-multilevel-fast-multipole-algorithm-for-solving-combined-field"
---

# Boundary element method calculation of individual head-related transfer function. I. Rigid model calculation

## One-sentence takeaway

Katz 2001: BEM-computed individual HRTFs on a *rigid* head mesh — numerical personalization without a loudspeaker arc.

## Why it matters here

Can't put every player in anechoic. Scan a mesh, solve rigid BEM, get an HRTF. Part I is the rigid-model calculation (impedance in part II, not in this harvest). Anoptic photogrammetry → HRTF path starts here, then HUTUBS simulated set (1750).

## Key ideas

- **Boundary element HRTF.** Helmholtz on the head surface; rigid BC in this part.
- **Individual mesh.** Personalization via geometry, not a listening test first.
- **JASA 2001.** ~136 cites; numerical HRTF classic.
- **Measured vs modeled.** Complementary to CIPIC arcs; harvest flags anthropometry/measurement.

## Caveats

Rigid model (no skin/hair/clothes). BEM cost vs realtime (this is offline bake). Do not remint FMM Helmholtz 1171–1175 even though the solver family is related — this card is the HRTF application.

## Links

- DOI: https://doi.org/10.1121/1.1412440
