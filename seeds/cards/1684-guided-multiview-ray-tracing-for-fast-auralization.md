---
title: "Guided Multiview Ray Tracing for Fast Auralization"
authors: ["Micah Taylor", "Anish Chandak", "Qi Mo", "Christian Lauterbach", "Carl Schissler", "Dinesh Manocha"]
year: 2012
venue: "IEEE TVCG"
arxiv: null
doi: "10.1109/TVCG.2012.27"
source: "https://doi.org/10.1109/TVCG.2012.27"
topics: [auralization, ray-tracing, geometric]
seed_rank: 1684
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "RESound: Interactive Sound Rendering for Dynamic Virtual Environments"
    url: "https://doi.org/10.1145/1631272.1631311"
    year: 2009
    arxiv: null
    doi: "10.1145/1631272.1631311"
see:
  - "1729-resound-interactive-sound-rendering-for-dynamic-virtual-environments"
  - "1682-interactive-sound-propagation-with-bidirectional-path-tracing"
---

# Guided Multiview Ray Tracing for Fast Auralization

## One-sentence takeaway

Guided multiview ray tracing: trace from both source and listener with importance/visibility guidance so auralization rays hit.

## Why it matters here

Naïve Monte Carlo auralization wastes rays in occluded rooms. Taylor/Chandak/Manocha 2012 TVCG is the guided/multiview geometric tracer before full BDPT 2016. Useful if Anoptic already has vis maps from graphics.

## Key ideas

- **Multiview.** Sample from source *and* listener, not a single camera analog.
- **Guiding.** Bias rays toward mutually visible / high-throughput regions.
- **IEEE TVCG 2012.** Interactive auralization framing.
- **GAMMA stack.** RESound 2009 → guided 2012 → BDPT 2016.

## Caveats

Geometric MC; variance remains. Not wave. Guidance from a stale vis map will miss dynamic portals.

## Links

- DOI: https://doi.org/10.1109/TVCG.2012.27
