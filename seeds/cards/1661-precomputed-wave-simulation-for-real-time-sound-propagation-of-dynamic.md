---
title: "Precomputed Wave Simulation for Real-Time Sound Propagation of Dynamic Sources in Complex Scenes"
authors: ["Nikunj Raghuvanshi", "John Snyder", "Ravish Mehra", "Ming C. Lin", "Naga K. Govindaraju"]
year: 2010
venue: "ACM TOG / SIGGRAPH"
arxiv: null
doi: "10.1145/1778765.1778805"
source: "https://doi.org/10.1145/1778765.1778805"
topics: [wave-based, dynamic-scenes, interactive, precomputation, wave, ard]
seed_rank: 1661
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: wave-based-acoustics
cites:
  - title: "Efficient and Accurate Sound Propagation Using Adaptive Rectangular Decomposition"
    url: "https://doi.org/10.1109/tvcg.2009.28"
    year: 2009
    arxiv: null
    doi: "10.1109/tvcg.2009.28"
see:
  - "1675-efficient-and-accurate-sound-propagation-using-adaptive-rectangular"
  - "1171-rapid-solution-of-integral-equations-of-scattering-theory-in-tw"
---

# Precomputed Wave Simulation for Real-Time Sound Propagation of Dynamic Sources in Complex Scenes

## One-sentence takeaway

Precompute adaptive-rectangular-decomposition wave fields, then encode per-source transfer so dynamic sources in complex scenes auralize from a lookup — wave acoustics at game rates.

## Why it matters here

Anoptic indoor maps have modal bass and occlusion that geometric rays fake. Raghuvanshi 2010 is the SIGGRAPH wave-bake that became Microsoft Project Acoustics / Triton: simulate Helmholtz-ish transients offline, play encoded IRs online. Different from FDTD-at-runtime (1674 Botteldooren) and from FMM BEM 1171–1175.

## Key ideas

- **ARD precompute.** Adaptive rectangular decomposition (2009 TVCG) of the domain; wave simulation dumped to a transfer field.
- **Dynamic sources, static scene.** Geometry frozen at bake; sources move by interpolating encoded responses.
- **Perceptual encoding.** Compact IR / decay parameters rather than raw pressure grids at 48 kHz.
- **SIGGRAPH 2010 / TOG.** Lin/Govindaraju/Snyder line; cites ~100+ in the harvest note.

## Caveats

Bake assumes static geometry; opening a door is a portal/occlusion extra (later 1727). Not realtime FDTD. Do not remint Helmholtz FMM cluster 1163/1171–1175/1178.

## Links

- DOI: https://doi.org/10.1145/1778765.1778805
