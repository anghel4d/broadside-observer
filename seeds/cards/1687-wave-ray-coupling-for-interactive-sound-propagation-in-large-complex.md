---
title: "Wave-Ray Coupling for Interactive Sound Propagation in Large Complex Scenes"
authors: ["Hengchin Yeh", "Ravish Mehra", "Zhimin Ren", "Lakulish Antani", "Ming C. Lin", "Dinesh Manocha"]
year: 2013
venue: "ACM TOG / SIGGRAPH Asia"
arxiv: null
doi: "10.1145/2508363.2508420"
source: "https://doi.org/10.1145/2508363.2508420"
topics: [hybrid, interactive, wave, geometric]
seed_rank: 1687
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "Efficient and Accurate Sound Propagation Using Adaptive Rectangular Decomposition"
    url: "https://doi.org/10.1109/tvcg.2009.28"
    year: 2009
    arxiv: null
    doi: "10.1109/tvcg.2009.28"
  - title: "GSound: Interactive Sound Propagation for Games"
    url: "http://gamma-web.iacs.umd.edu/GSOUND/gsound_aes41st.pdf"
    year: 2011
    arxiv: null
    doi: null
see:
  - "1683-efficient-and-accurate-sound-propagation-using-adaptive-rectangular"
  - "1679-gsound-interactive-sound-propagation-for-games"
  - "1669-precomputed-wave-simulation-for-real-time-sound-propagation-of-dynamic"
---

# Wave-Ray Coupling for Interactive Sound Propagation in Large Complex Scenes

## One-sentence takeaway

Hybrid wave-ray: run a local wave solver near the listener/source and stitch geometric rays in the far field so large complex scenes stay interactive.

## Why it matters here

Full-scene FDTD is too heavy; pure rays miss modal near field. Yeh/Mehra/Manocha 2013 SIGGRAPH Asia is the coupling paper: wave where wavelength matters, rays elsewhere. Anoptic open-world audio should think 'wave bubble + ray far field,' not one method.

## Key ideas

- **Domain split.** Wave simulator in a region of interest; geometric paths carry energy across the interface.
- **Interactive target.** Large scenes (city/building) that ARD-bake of the whole map can't afford live.
- **UNC + Lin.** Same group as equivalent-source outdoor (1693) and GSound.
- **SIGGRAPH Asia 2013 TOG.** Harvest coverage `hybrid`.

## Caveats

Interface matching is the hard part (energy leaks, latency). Not a shipping Triton bake. Not KW-boundary DWM 1752 (different hybrid).

## Links

- DOI: https://doi.org/10.1145/2508363.2508420
