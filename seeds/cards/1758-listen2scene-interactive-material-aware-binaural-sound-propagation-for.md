---
title: "Listen2Scene: Interactive material-aware binaural sound propagation for reconstructed 3D scenes"
authors: ["Anton Ratnarajah", "Dinesh Manocha"]
year: 2024
venue: "2024 IEEE Conference Virtual Reality and 3D User Interfaces (VR)"
arxiv: null
doi: "10.1109/vr58804.2024.00048"
source: "https://doi.org/10.1109/vr58804.2024.00048"
topics: [interactive]
seed_rank: 1758
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: interactive-sound-propagation
cites:
  - title: "GSound: Interactive Sound Propagation for Games"
    url: "http://gamma-web.iacs.umd.edu/GSOUND/gsound_aes41st.pdf"
    year: 2011
    arxiv: null
    doi: null
  - title: "Definition and measurement of random-incidence scattering coefficients"
    url: "https://doi.org/10.1016/s0003-682x(99)00056-0"
    year: 2000
    arxiv: null
    doi: "10.1016/s0003-682x(99)00056-0"
see:
  - "1671-gsound-interactive-sound-propagation-for-games"
  - "1664-high-order-diffraction-and-diffuse-reflections-for-interactive-sound"
  - "1743-definition-and-measurement-of-random-incidence-scattering-coefficients"
---

# Listen2Scene: Interactive material-aware binaural sound propagation for reconstructed 3D scenes

## One-sentence takeaway

Listen2Scene: interactive material-aware binaural propagation on *reconstructed* 3D scenes (Ratnarajah & Manocha IEEE VR 2024).

## Why it matters here

Photogrammetry levels: you have a mesh, not a Triton bake. This 2024 VR paper (Manocha line) does binaural prop that's material-aware and interactive on reconstructed scenes — the 'scan a room, hear it' leftover vs analytic GA on CAD. Quality 8, 11 cites.

## Key ideas

- **Reconstructed 3D scenes.** Real-world meshes, not designer brushes.
- **Material-aware binaural.** Absorption/scattering on scanned surfaces.
- **IEEE VR 2024.** DOI 10.1109/vr58804.2024.00048.
- **Interactive.** Harvest coverage `game`.

## Caveats

Reconstruction/material estimation errors dominate. Not MagLS. Not Project Acoustics bake. Not a remint of GSound — leftover is scanned scenes + binaural.

## Links

- DOI: https://doi.org/10.1109/vr58804.2024.00048
