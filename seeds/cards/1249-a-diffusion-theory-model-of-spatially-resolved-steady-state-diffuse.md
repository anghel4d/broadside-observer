---
title: "A Diffusion Theory Model of Spatially Resolved, Steady-State Diffuse Reflectance for the Noninvasive Determination of Tissue Optical Properties in Vivo"
authors: ["Thomas J. Farrell", "Michael S. Patterson", "Brian C. Wilson"]
year: 1992
venue: "Medical Physics"
arxiv: null
doi: "10.1118/1.596777"
source: "https://doi.org/10.1118/1.596777"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1249
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: subsurface-scattering
cites:
  - title: "A High Accuracy Approximation for Solving Multiple Scattering Problems in Infinite Homogeneous Media"
    url: "https://doi.org/10.1007/bf02785007"
    year: 1956
    arxiv: null
    doi: "10.1007/bf02785007"
  - title: "Wave Propagation and Scattering in Random Media"
    url: "https://doi.org/10.1109/9780470547045"
    year: 1978
    arxiv: null
    doi: "10.1109/9780470547045"
see:
  - "1263-a-high-accuracy-approximation-for-solving-multiple-scattering"
  - "1262-wave-propagation-and-scattering-in-random-media"
---

# A Diffusion Theory Model of Spatially Resolved, Steady-State Diffuse Reflectance for the Noninvasive Determination of Tissue Optical Properties in Vivo

## One-sentence takeaway

Diffusion-theory Rd(r) for tissue — the medical profile Jensen's dipole copies.

## Problem

Need a closed-form spatially resolved diffuse reflectance for noninvasive tissue optics. Grosjean / Ishimaru diffusion is the physics; graphics had not used it yet.

## Design

Semi-infinite diffusion with an extrapolated boundary; analytic Rd(ρ) used to invert μs′ and μa from a fiber probe.

## Evidence

Medical Physics 1992, DOI 10.1118/1.596777. Cited by JMLH01 and Kienle–Patterson 1997.

## Limitations

Medical probe geometry, not a renderer. Homogeneous semi-infinite. Kienle 1997 is the improved Green's function graphics dipoles actually want.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Farrell 1992 as the tissue-optics source of the dipole. Not a remint of JMLH01.

## Links

- DOI: [10.1118/1.596777](https://doi.org/10.1118/1.596777)
