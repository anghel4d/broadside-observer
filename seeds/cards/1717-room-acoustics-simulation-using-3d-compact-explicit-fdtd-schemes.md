---
title: "Room Acoustics Simulation Using 3-D Compact Explicit FDTD Schemes"
authors: ["Konrad Kowalczyk", "Maarten van Walstijn"]
year: 2011
venue: "IEEE TASLP"
arxiv: null
doi: "10.1109/TASL.2010.2045179"
source: "https://doi.org/10.1109/TASL.2010.2045179"
topics: [fdtd, wave]
seed_rank: 1717
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
  - "1690-finite-difference-time-domain-simulation-of-low-frequency-room-acoustic"
  - "1687-finite-volume-time-domain-room-acoustics-simulation-under-general"
  - "1721-fdtd-methods-for-3d-room-acoustics-simulation-with-high-order-accuracy"
---

# Room Acoustics Simulation Using 3-D Compact Explicit FDTD Schemes

## One-sentence takeaway

Compact explicit 3-D FDTD schemes for rooms — Kowalczyk & van Walstijn 2011 TASLP, the widely implemented interpolated-wideband stencil.

## Why it matters here

Standard Yee is dispersive at HF. This paper is the 'use this 3D FDTD stencil' card many room codes copied. Anoptic LF bake implementation detail, with Hamilton 2017 as the high-order sequel.

## Key ideas

- **Compact explicit schemes.** Better isotropy/dispersion than naive 7-point.
- **IEEE TASLP 2011.** Harvest FDTD/wave.
- **Room acoustics target.** Boundaries matter (see Bilbao passivity).
- **Time-domain IR** output.

## Caveats

Still Cartesian / staircasing. Offline. Stability vs boundary model. Not DWM (1744) and not DG (1722).

## Links

- DOI: https://doi.org/10.1109/TASL.2010.2045179
