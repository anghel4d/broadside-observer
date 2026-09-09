---
title: "Diffraction Kernels for Interactive Sound Propagation in Dynamic Environments"
authors: ["Atul Rungta", "Carl Schissler", "Nicholas Rewkowski", "Ravish Mehra", "Dinesh Manocha"]
year: 2018
venue: "IEEE TVCG"
arxiv: null
doi: "10.1109/TVCG.2018.2794098"
source: "https://doi.org/10.1109/TVCG.2018.2794098"
topics: [dynamic-scenes, interactive, diffraction, geometric]
seed_rank: 1696
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "An analytic secondary source model of edge diffraction impulse responses"
    url: "https://doi.org/10.1121/1.428071"
    year: 1999
    arxiv: null
    doi: "10.1121/1.428071"
  - title: "High-Order Diffraction and Diffuse Reflections for Interactive Sound Propagation in Large Environments"
    url: "https://doi.org/10.1145/2601097.2601216"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601216"
see:
  - "1673-an-analytic-secondary-source-model-of-edge-diffraction-impulse-responses"
  - "1672-high-order-diffraction-and-diffuse-reflections-for-interactive-sound"
  - "1688-fast-diffraction-pathfinding-for-dynamic-sound-propagation"
---

# Diffraction Kernels for Interactive Sound Propagation in Dynamic Environments

## One-sentence takeaway

Diffraction *kernels* for dynamic environments: precompute/factor edge diffraction so moving occluders don't recompute BTMS/UTD from scratch.

## Why it matters here

Svensson IRs are expensive per edge. Rungta/Schissler/Manocha 2018 TVCG tabulate diffraction as kernels you can update as geometry moves — the dynamic-scene companion to 1672/1688. Anoptic doors/vehicles.

## Key ideas

- **Kernel factorization.** Separate geometric path terms from the edge IR shape.
- **Dynamic occluders.** Interactive TVCG 2018; harvest rel=26.
- **Geometric diffraction.** Still not a wave field.
- **UNC GAMMA + Meta-era** interactive audio stack.

## Caveats

Kernel assumptions (infinite wedge, rigid) leak on real doorstops. Realtime vs quality trade. Not ARD/Triton.

## Links

- DOI: https://doi.org/10.1109/TVCG.2018.2794098
