---
title: "FDTD Methods for 3-D Room Acoustics Simulation With High-Order Accuracy in Space and Time"
authors: ["Brian Hamilton", "Stefan Bilbao"]
year: 2017
venue: "IEEE/ACM TASLP"
arxiv: null
doi: "10.1109/TASLP.2017.2744799"
source: "https://doi.org/10.1109/TASLP.2017.2744799"
topics: [fdtd, wave, high-order]
seed_rank: 1729
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 9
lineage: wave-based-acoustics
cites:
  - title: "Finite Volume Time Domain Room Acoustics Simulation under General Impedance Boundary Conditions"
    url: "https://doi.org/10.1109/TASLP.2015.2500018"
    year: 2016
    arxiv: null
    doi: "10.1109/TASLP.2015.2500018"
  - title: "Room Acoustics Simulation Using 3-D Compact Explicit FDTD Schemes"
    url: "https://doi.org/10.1109/TASL.2010.2045179"
    year: 2011
    arxiv: null
    doi: "10.1109/TASL.2010.2045179"
  - title: "Finite-difference time-domain simulation of low-frequency room acoustic problems"
    url: "https://doi.org/10.1121/1.413780"
    year: 1995
    arxiv: null
    doi: "10.1121/1.413780"
see:
  - "1695-finite-volume-time-domain-room-acoustics-simulation-under-general"
  - "1725-room-acoustics-simulation-using-3d-compact-explicit-fdtd-schemes"
  - "1698-finite-difference-time-domain-simulation-of-low-frequency-room-acoustic"
---

# FDTD Methods for 3-D Room Acoustics Simulation With High-Order Accuracy in Space and Time

## One-sentence takeaway

High-order space-and-time FDTD so broadband room IRs aren't a dispersion mess (Hamilton & Bilbao 2017 TASLP).

## Why it matters here

Botteldooren/Kowalczyk work at LF; auralization wants 10+ kHz. This paper is the high-order stencil card. Anoptic bake quality: raise order rather than shrink Δx until VRAM dies.

## Key ideas

- **High-order accuracy in space *and* time.** Dispersion reduction for broadband.
- **IEEE/ACM TASLP 2017.** Harvest high-order / FDTD.
- **Auralization-oriented.** Not just vis of a 200 Hz mode.
- **Cartesian family** still (see FVTD for unstructured).

## Caveats

CFL/order vs boundaries (passivity paper is 2016). Offline. Still not a game-frame solver. Not DG 2019.

## Links

- DOI: https://doi.org/10.1109/TASLP.2017.2744799
