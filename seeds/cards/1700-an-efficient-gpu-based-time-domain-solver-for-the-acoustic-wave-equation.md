---
title: "An Efficient GPU-Based Time Domain Solver for the Acoustic Wave Equation"
authors: ["Ravish Mehra", "Nikunj Raghuvanshi", "Lakulish Antani", "Anish Chandak", "Sean Curtis", "Dinesh Manocha"]
year: 2012
venue: "IEEE TVCG"
arxiv: null
doi: "10.1109/TVCG.2012.91"
source: "https://doi.org/10.1109/TVCG.2012.91"
topics: [wave-based, gpu]
seed_rank: 1700
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 10
lineage: wave-based-acoustics
cites:
  - title: "Efficient and Accurate Sound Propagation Using Adaptive Rectangular Decomposition"
    url: "https://doi.org/10.1109/tvcg.2009.28"
    year: 2009
    arxiv: null
    doi: "10.1109/tvcg.2009.28"
  - title: "Finite-difference time-domain simulation of low-frequency room acoustic problems"
    url: "https://doi.org/10.1121/1.413780"
    year: 1995
    arxiv: null
    doi: "10.1121/1.413780"
see:
  - "1675-efficient-and-accurate-sound-propagation-using-adaptive-rectangular"
  - "1690-finite-difference-time-domain-simulation-of-low-frequency-room-acoustic"
---

# An Efficient GPU-Based Time Domain Solver for the Acoustic Wave Equation

## One-sentence takeaway

GPU time-domain acoustic wave solver: run the wave equation on the GPU for interactive-ish IR computation in bounded domains.

## Why it matters here

CPU FDTD doesn't fill a bake farm. Mehra et al. 2012 TVCG is the GPU wave kernel card in the UNC stack (before equivalent-source outdoor). Anoptic bake nodes: this stencil, then encode with 1662 — don't run it in the 16 ms frame.

## Key ideas

- **GPU FDTD-class.** Time marching on device memory.
- **IEEE TVCG 2012.** Harvest GPU / wave-based, 123 cites.
- **Same authors as ARD/equivalent-source.** Systems paper more than a new PDE.
- **IRs for auralization** after the march.

## Caveats

Domain size vs VRAM; CFL. Interactive *for the paper's scenes*, not open world. Not FMM BEM. Staircasing.

## Links

- DOI: https://doi.org/10.1109/TVCG.2012.91
