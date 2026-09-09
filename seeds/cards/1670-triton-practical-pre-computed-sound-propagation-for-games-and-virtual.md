---
title: "Triton: Practical Pre-Computed Sound Propagation for Games and Virtual Reality"
authors: ["Nikunj Raghuvanshi", "John Tennant", "John Snyder"]
year: 2017
venue: "Journal of the Acoustical Society of America (abstract) / ASA"
arxiv: null
doi: "10.1121/1.4987164"
source: "https://doi.org/10.1121/1.4987164"
topics: [games]
seed_rank: 1670
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "Parametric Directional Coding for Precomputed Sound Propagation"
    url: "https://doi.org/10.1145/3197517.3201339"
    year: 2018
    arxiv: null
    doi: "10.1145/3197517.3201339"
  - title: "Parametric Wave Field Coding for Precomputed Sound Propagation"
    url: "https://doi.org/10.1145/2601097.2601184"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601184"
  - title: "Precomputed Wave Simulation for Real-Time Sound Propagation of Dynamic Sources in Complex Scenes"
    url: "https://doi.org/10.1145/1778765.1778805"
    year: 2010
    arxiv: null
    doi: "10.1145/1778765.1778805"
see:
  - "1663-parametric-directional-coding-for-precomputed-sound-propagation"
  - "1662-parametric-wave-field-coding-for-precomputed-sound-propagation"
  - "1661-precomputed-wave-simulation-for-real-time-sound-propagation-of-dynamic"
---

# Triton: Practical Pre-Computed Sound Propagation for Games and Virtual Reality

## One-sentence takeaway

Triton: the practical Project Acoustics bake that shipped in games/VR — precomputed wave parameters as an engine feature, not a paper demo.

## Why it matters here

This is the 'call the middleware' card for Anoptic: Raghuvanshi/Tennant/Snyder 2017 ASA is the *productization* of 1661–1663. Gears-era Microsoft spatial audio. Use when you want the shipping contract, not the SIGGRAPH encoding math.

## Key ideas

- **Engine-oriented bake.** Design-time wave simulation → runtime parameter volumes designers can place.
- **Games and VR.** Harvest: game/engine-oriented, rel=17.
- **Lineage.** ARD 2009 → precomputed wave 2010 → parametric 2014/2018 → Triton 2017.
- **ASA 2017 abstract / JASA.** Short paper; the systems view of Project Acoustics.

## Caveats

Abstract-length vs the TOG encoding papers. Static-world bake; live destruction needs portals (1727) or 2D wave (1746). Not GSound (ray/UTD), not MagLS.

## Links

- DOI: https://doi.org/10.1121/1.4987164
