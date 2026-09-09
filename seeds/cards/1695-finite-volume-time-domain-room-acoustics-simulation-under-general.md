---
title: "Finite Volume Time Domain Room Acoustics Simulation under General Impedance Boundary Conditions"
authors: ["Stefan Bilbao", "Brian Hamilton", "Jonathan Botts", "Lauri Savioja"]
year: 2016
venue: "IEEE/ACM TASLP"
arxiv: null
doi: "10.1109/TASLP.2015.2500018"
source: "https://doi.org/10.1109/TASLP.2015.2500018"
topics: [interactive-acoustics, fvtd, fdtd, wave, boundaries]
seed_rank: 1695
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 10
lineage: wave-based-acoustics
cites:
  - title: "Finite-difference time-domain simulation of low-frequency room acoustic problems"
    url: "https://doi.org/10.1121/1.413780"
    year: 1995
    arxiv: null
    doi: "10.1121/1.413780"
  - title: "Modeling of Complex Geometries and Boundary Conditions in Finite Difference/Finite Volume Time Domain Room Acoustics Simulation"
    url: "https://doi.org/10.1109/TASL.2013.2256897"
    year: 2013
    arxiv: null
    doi: "10.1109/TASL.2013.2256897"
see:
  - "1698-finite-difference-time-domain-simulation-of-low-frequency-room-acoustic"
  - "1727-modeling-of-complex-geometries-and-boundary-conditions-in-finite"
---

# Finite Volume Time Domain Room Acoustics Simulation under General Impedance Boundary Conditions

## One-sentence takeaway

Provably passive finite-volume time-domain (FVTD) room acoustics with *general impedance* walls — FDTD as a special case.

## Why it matters here

Yee-grid FDTD plus naive impedance walls can go unstable. Bilbao/Hamilton/Botts/Savioja 2016 TASLP give a discrete energy method: passivity ⇒ stable broadband auralization. Anoptic wave bake should copy this boundary treatment, not a random PML hack.

## Key ideas

- **FVTD + energy method.** Constructive passivity under general wall impedances.
- **FDTD is a special case** of the same scheme family on Cartesian grids.
- **IEEE/ACM TASLP 2016.** The boundary paper of the Bilbao–Hamilton series.
- **Time-domain IRs** suitable for convolution auralization (offline).

## Caveats

Offline / offline-ish; not a game-frame solver. Staircasing still unless you take Bilbao 2013 unstructured (1727). Not Helmholtz BEM.

## Links

- DOI: https://doi.org/10.1109/TASLP.2015.2500018
