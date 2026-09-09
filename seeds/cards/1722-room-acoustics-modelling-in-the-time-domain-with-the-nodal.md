---
title: "Room acoustics modelling in the time-domain with the nodal discontinuous Galerkin method"
authors: ["Huiqing Wang", "Indra Sihar", "Raúl Pagán Muñoz", "Maarten Hornikx"]
year: 2019
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.5096154"
source: "https://doi.org/10.1121/1.5096154"
topics: [dg, wave, time-domain]
seed_rank: 1722
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 9
lineage: wave-based-acoustics
cites:
  - title: "Modeling of Complex Geometries and Boundary Conditions in Finite Difference/Finite Volume Time Domain Room Acoustics Simulation"
    url: "https://doi.org/10.1109/TASL.2013.2256897"
    year: 2013
    arxiv: null
    doi: "10.1109/TASL.2013.2256897"
see:
  - "1719-modeling-of-complex-geometries-and-boundary-conditions-in-finite"
  - "1687-finite-volume-time-domain-room-acoustics-simulation-under-general"
  - "1174-multilevel-fast-multipole-algorithm-for-solving-combined-field"
---

# Room acoustics modelling in the time-domain with the nodal discontinuous Galerkin method

## One-sentence takeaway

Nodal discontinuous Galerkin time-domain room acoustics — geometric flexibility of FEM with explicit time marching (Wang/Sihar/Hornikx 2019 JASA).

## Why it matters here

When FVTD/FDTD meshes hurt, DG on unstructured tets is the academic wave path (Eindhoven). Anoptic only if you already have a DG code; otherwise Bilbao FVTD is the simpler mint. Harvest: geometric flexibility.

## Key ideas

- **Nodal DG, time domain.** Local elements, upwind fluxes, explicit-ish stepping.
- **JASA 2019.** Room acoustics, not CEM antenna (don't remint MLFMA).
- **Complex geometry** without staircasing.
- **Wave IR** for auralization after the march.

## Caveats

Implementation heavy. Offline. Impedance fluxes need care. Not interactive GSound. Not Helmholtz FMM.

## Links

- DOI: https://doi.org/10.1121/1.5096154
