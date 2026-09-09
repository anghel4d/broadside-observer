---
title: "Interactive sound propagation for dynamic scenes using 2D wave simulation"
authors: ["Matthew Rosen", "Keith W. Godin", "Nikunj Raghuvanshi"]
year: 2020
venue: "Computer Graphics Forum"
arxiv: null
doi: "10.1111/cgf.14099"
source: "https://doi.org/10.1111/cgf.14099"
topics: [dynamic-scenes, interactive]
seed_rank: 1754
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 8
lineage: wave-based-acoustics
cites:
  - title: "Triton: Practical Pre-Computed Sound Propagation for Games and Virtual Reality"
    url: "https://doi.org/10.1121/1.4987164"
    year: 2017
    arxiv: null
    doi: "10.1121/1.4987164"
  - title: "Dynamic Portal Occlusion for Precomputed Interactive Sound Propagation"
    url: "https://arxiv.org/abs/2107.11548"
    year: 2021
    arxiv: "2107.11548"
    doi: "10.48550/arXiv.2107.11548"
see:
  - "1678-triton-practical-pre-computed-sound-propagation-for-games-and-virtual"
  - "1735-dynamic-portal-occlusion-for-precomputed-interactive-sound-propagation"
  - "1683-efficient-and-accurate-sound-propagation-using-adaptive-rectangular"
---

# Interactive sound propagation for dynamic scenes using 2D wave simulation

## One-sentence takeaway

2-D wave simulation for interactive dynamic scenes (Rosen/Godin/Raghuvanshi CGF 2020): Project Acoustics-style live 2D wave where a 3D bake can't open doors.

## Why it matters here

Cheap dynamic occlusion: simulate a 2D slice (floorplan) of the wave equation at interactive rates. Microsoft authors. Anoptic RTS/top-down or as a portal/occlusion complement to 3D Triton bakes (1735).

## Key ideas

- **2D wave, interactive.** Dynamic geometry on a grid/slice.
- **Computer Graphics Forum 2020.** DOI 10.1111/cgf.14099.
- **Raghuvanshi line.** Harvest dynamic-scenes / interactive.
- **Not full 3D FDTD.** Height averaged/ignored.

## Caveats

2D ≠ 3D modes (height of ceiling). Quality 8, 7 cites. Not HRTF. Not GSound 3D diffraction.

## Links

- DOI: https://doi.org/10.1111/cgf.14099
