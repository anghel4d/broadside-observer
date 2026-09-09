---
title: "WAVE: Interactive Wave-based Sound Propagation for Virtual Environments"
authors: ["Hengchin Yeh", "Ravish Mehra", "Zhimin Ren", "Lakulish Antani", "Ming C. Lin", "Dinesh Manocha"]
year: 2015
venue: "IEEE VR / TVCG"
arxiv: null
doi: "10.1109/TVCG.2015.2403336"
source: "https://doi.org/10.1109/TVCG.2015.2403336"
topics: [wave-based, interactive]
seed_rank: 1703
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: wave-based-acoustics
cites:
  - title: "Wave-Ray Coupling for Interactive Sound Propagation in Large Complex Scenes"
    url: "https://doi.org/10.1145/2508363.2508420"
    year: 2013
    arxiv: null
    doi: "10.1145/2508363.2508420"
  - title: "An Efficient GPU-Based Time Domain Solver for the Acoustic Wave Equation"
    url: "https://doi.org/10.1109/TVCG.2012.91"
    year: 2012
    arxiv: null
    doi: "10.1109/TVCG.2012.91"
  - title: "Efficient and Accurate Sound Propagation Using Adaptive Rectangular Decomposition"
    url: "https://doi.org/10.1109/tvcg.2009.28"
    year: 2009
    arxiv: null
    doi: "10.1109/tvcg.2009.28"
see:
  - "1679-wave-ray-coupling-for-interactive-sound-propagation-in-large-complex"
  - "1700-an-efficient-gpu-based-time-domain-solver-for-the-acoustic-wave-equation"
  - "1675-efficient-and-accurate-sound-propagation-using-adaptive-rectangular"
---

# WAVE: Interactive Wave-based Sound Propagation for Virtual Environments

## One-sentence takeaway

WAVE: interactive wave-based sound propagation packaged for VR/TVCG — the 2015 systems demo of the UNC wave stack.

## Why it matters here

Yeh/Mehra et al. 2015 IEEE VR/TVCG is the 'put the wave solver in a VE' paper (name collides with everything). Use as the VR-oriented sibling of 2013 wave-ray coupling, not a new PDE.

## Key ideas

- **VR framing.** IEEE VR 2015; interactive wave in virtual environments.
- **UNC wave stack.** ARD/GPU/equivalent-source/directivity behind a VE.
- **Harvest coverage `wave`.** Quality 10.
- **Precomputed/interactive hybrid** depending on scene scale.

## Caveats

Naming collision with 'wave' generally. Scene scale limits. Not Triton (Microsoft) and not MagLS binaural.

## Links

- DOI: https://doi.org/10.1109/TVCG.2015.2403336
