---
title: "Finite-difference time-domain simulation of low-frequency room acoustic problems"
authors: ["Dick Botteldooren"]
year: 1995
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.413780"
source: "https://doi.org/10.1121/1.413780"
topics: [fdtd, wave]
seed_rank: 1698
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 10
lineage: wave-based-acoustics
see:
  - "1171-rapid-solution-of-integral-equations-of-scattering-theory-in-tw"
---

# Finite-difference time-domain simulation of low-frequency room acoustic problems

## One-sentence takeaway

Botteldooren 1995: FDTD for *low-frequency* room problems — the JASA paper that made Yee-grid acoustics respectable for bass modes.

## Why it matters here

Geometric methods lie about modal coloration in small rooms. This is the wave-solver origin card for rooms (before compact-explicit 2011 and high-order 2017). Anoptic: FDTD/FVTD for LF bake, GA for HF, as Vorländer hybrids did with rays.

## Key ideas

- **Yee-like FDTD in rooms.** Pressure/velocity stagger; LF modal fields.
- **Low-frequency emphasis.** Where GA phase-ignoring energy methods fail.
- **JASA 1995.** Early, widely cited room-FDTD.
- **Stability/CFL** already the practical limiter.

## Caveats

LF / coarse grids; not broadband auralization without later high-order schemes (1729). Staircased walls. Offline. Not FMM Helmholtz.

## Links

- DOI: https://doi.org/10.1121/1.413780
