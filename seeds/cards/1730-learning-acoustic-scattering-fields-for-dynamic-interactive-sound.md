---
title: "Learning Acoustic Scattering Fields for Dynamic Interactive Sound Propagation"
authors: ["Zhenyu Tang", "Hsien-Yu Meng", "Dinesh Manocha"]
year: 2021
venue: "2021 IEEE Virtual Reality and 3D User Interfaces (VR)"
arxiv: null
doi: "10.1109/vr50410.2021.00111"
source: "https://doi.org/10.1109/vr50410.2021.00111"
topics: [dynamic-scenes, interactive]
seed_rank: 1730
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: interactive-sound-propagation
cites:
  - title: "Wave-Based Sound Propagation in Large Open Scenes Using an Equivalent Source Formulation"
    url: "https://doi.org/10.1145/2451236.2451245"
    year: 2013
    arxiv: null
    doi: "10.1145/2451236.2451245"
see:
  - "1685-wave-based-sound-propagation-in-large-open-scenes-using-an-equivalent"
  - "1688-diffraction-kernels-for-interactive-sound-propagation-in-dynamic"
---

# Learning Acoustic Scattering Fields for Dynamic Interactive Sound Propagation

## One-sentence takeaway

Learn acoustic *scattering fields* so dynamic objects get a neural/tabulated scatterer instead of a live wave solve (Tang/Meng/Manocha IEEE VR 2021).

## Why it matters here

Movers in a baked world. This VR 2021 paper learns scattering for interactive prop — ML leftover of equivalent-source / diffraction kernels. Anoptic vehicles: a learned scatterer + geometric paths, knowing it's approximate.

## Key ideas

- **Scattering field as a function** you evaluate as the object moves.
- **IEEE VR 2021.** Harvest dynamic/interactive; quality 8, 13 cites.
- **ML + acoustics.** Contrast analytic BTMS and equivalent sources.
- **Interactive VE target.**

## Caveats

Generalization across object shapes is the risk. Not a measured HRTF. Not BRAS-validated. Don't treat as FDTD.

## Links

- DOI: https://doi.org/10.1109/vr50410.2021.00111
