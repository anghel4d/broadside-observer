---
title: "Source and Listener Directivity for Interactive Wave-Based Sound Propagation"
authors: ["Ravish Mehra", "Lakulish Antani", "Sujeong Kim", "Dinesh Manocha"]
year: 2014
venue: "IEEE TVCG"
arxiv: null
doi: "10.1109/TVCG.2014.2306990"
source: "https://doi.org/10.1109/TVCG.2014.2306990"
topics: [wave-based, interactive]
seed_rank: 1702
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: wave-based-acoustics
cites:
  - title: "Precomputed Wave Simulation for Real-Time Sound Propagation of Dynamic Sources in Complex Scenes"
    url: "https://doi.org/10.1145/1778765.1778805"
    year: 2010
    arxiv: null
    doi: "10.1145/1778765.1778805"
  - title: "Wave-Based Sound Propagation in Large Open Scenes Using an Equivalent Source Formulation"
    url: "https://doi.org/10.1145/2451236.2451245"
    year: 2013
    arxiv: null
    doi: "10.1145/2451236.2451245"
see:
  - "1661-precomputed-wave-simulation-for-real-time-sound-propagation-of-dynamic"
  - "1685-wave-based-sound-propagation-in-large-open-scenes-using-an-equivalent"
  - "1663-parametric-directional-coding-for-precomputed-sound-propagation"
---

# Source and Listener Directivity for Interactive Wave-Based Sound Propagation

## One-sentence takeaway

Bake wave fields once, then apply *source and listener directivity* at runtime so guns and ears aren't omni points.

## Why it matters here

Triton-style omni bakes sound wrong for a shotgun and a head shadow. Mehra/Antani/Kim/Manocha 2014 TVCG layer directivity on interactive wave-based prop. Anoptic weapons/voices: SH or measured directivity × baked transfer.

## Key ideas

- **Runtime directivity.** Separate geometric/wave bake from orientation filters.
- **Source and listener.** Both ends, not just HRTF after the fact.
- **IEEE TVCG 2014.** Wave-based interactive series.
- **Static scene bake** still assumed.

## Caveats

Directivity filters assume far-field factorization that near-field weapons violate (Brungart). Not MagLS. Not dynamic geo.

## Links

- DOI: https://doi.org/10.1109/TVCG.2014.2306990
