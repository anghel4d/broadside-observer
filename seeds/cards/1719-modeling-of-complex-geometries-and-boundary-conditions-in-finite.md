---
title: "Modeling of Complex Geometries and Boundary Conditions in Finite Difference/Finite Volume Time Domain Room Acoustics Simulation"
authors: ["Stefan Bilbao"]
year: 2013
venue: "IEEE TASLP"
arxiv: null
doi: "10.1109/TASL.2013.2256897"
source: "https://doi.org/10.1109/TASL.2013.2256897"
topics: [fvtd, fdtd, wave, geometry]
seed_rank: 1719
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 9
lineage: wave-based-acoustics
cites:
  - title: "Finite-difference time-domain simulation of low-frequency room acoustic problems"
    url: "https://doi.org/10.1121/1.413780"
    year: 1995
    arxiv: null
    doi: "10.1121/1.413780"
see:
  - "1687-finite-volume-time-domain-room-acoustics-simulation-under-general"
  - "1690-finite-difference-time-domain-simulation-of-low-frequency-room-acoustic"
---

# Modeling of Complex Geometries and Boundary Conditions in Finite Difference/Finite Volume Time Domain Room Acoustics Simulation

## One-sentence takeaway

Unstructured FVTD: model non-staircased room geometry and mixed boundaries in a finite-volume time-domain scheme (Bilbao 2013 TASLP).

## Why it matters here

Yee FDTD turns a curved hall into Lego. Bilbao 2013 lets the mesh follow CAD. Anoptic architectural bake: FVTD on a tet/hex mesh, passivity from 2016. Heavier than ARD bricks, more honest geometry.

## Key ideas

- **Unstructured FV.** Complex geometry without staircasing.
- **Boundary conditions** as first-class (impedance, etc.).
- **IEEE TASLP 2013.** Precursor to 2016 general-impedance passivity.
- **Wave time-domain.** Offline auralization IRs.

## Caveats

Mesh generation cost. Not interactive. Not geometric acoustics. Not FMM BEM frequency-domain.

## Links

- DOI: https://doi.org/10.1109/TASL.2013.2256897
