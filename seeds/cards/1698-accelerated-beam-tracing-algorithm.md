---
title: "Accelerated Beam Tracing Algorithm"
authors: ["Samuli Laine", "Samuel Siltanen", "Tapio Lokki", "Lauri Savioja"]
year: 2009
venue: "Applied Acoustics"
arxiv: null
doi: "10.1016/j.apacoust.2008.07.003"
source: "https://doi.org/10.1016/j.apacoust.2008.07.003"
topics: [beam-tracing]
seed_rank: 1698
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "A Beam Tracing Approach to Acoustic Modeling for Interactive Virtual Environments"
    url: "https://doi.org/10.1145/280814.280818"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280818"
  - title: "A Beam Tracing Method for Interactive Architectural Acoustics"
    url: "https://doi.org/10.1121/1.1640866"
    year: 2004
    arxiv: null
    doi: "10.1121/1.1640866"
  - title: "The Room Acoustic Rendering Equation"
    url: "https://doi.org/10.1121/1.2766781"
    year: 2007
    arxiv: null
    doi: "10.1121/1.2766781"
see:
  - "1659-a-beam-tracing-approach-to-acoustic-modeling-for-interactive-virtual"
  - "1694-a-beam-tracing-method-for-interactive-architectural-acoustics"
  - "1669-the-room-acoustic-rendering-equation"
---

# Accelerated Beam Tracing Algorithm

## One-sentence takeaway

Laine/Siltanen/Lokki/Savioja 2009: accelerated beam tracing — data structures that make Funkhouser-style beams fast enough for interactive CPU auralization.

## Why it matters here

Naïve beam–polygon clipping is slow. Aalto's accelerated beam tracer is the European systems counterpart to Princeton 1998/2004. Anoptic CPU path: this plus ART (1669), not a new clipping library.

## Key ideas

- **Acceleration structure.** Faster beam/polygon operations for room models.
- **Applied Acoustics 2009.** ~103 cites.
- **Aalto stack.** Same authors as acoustic rendering equation and frequency-domain ART.
- **Specular beams.** Pair with diffraction separately.

## Caveats

Geometric specular. 2009 CPU. Not GPU BDPT. Don't confuse with acoustic radiosity (same group, different operator).

## Links

- DOI: https://doi.org/10.1016/j.apacoust.2008.07.003
