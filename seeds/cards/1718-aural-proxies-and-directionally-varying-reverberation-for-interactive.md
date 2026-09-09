---
title: "Aural Proxies and Directionally-Varying Reverberation for Interactive Sound Propagation in Virtual Environments"
authors: ["Lakulish Antani", "Dinesh Manocha"]
year: 2013
venue: "IEEE TVCG"
arxiv: null
doi: "10.1109/TVCG.2013.23"
source: "https://doi.org/10.1109/TVCG.2013.23"
topics: [games, reverb-parametric, source-engine, interactive]
seed_rank: 1718
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 9
lineage: artificial-reverberation
cites:
  - title: "Pre-Computing Geometry-Based Reverberation Effects for Games"
    url: "https://www.aes.org/e-lib/browse.cfm?elib=15164"
    year: 2009
    arxiv: null
    doi: null
see:
  - "1715-pre-computing-geometry-based-reverberation-effects-for-games"
  - "1671-gsound-interactive-sound-propagation-for-games"
---

# Aural Proxies and Directionally-Varying Reverberation for Interactive Sound Propagation in Virtual Environments

## One-sentence takeaway

Aural proxies + directionally varying reverb inside Valve Source: place probe-like acoustic proxies so interactive VE reverb matches local geometry.

## Why it matters here

This is the Source-engine card (Antani & Manocha TVCG 2013). GRID COMMAND/Anoptic already think in probes (GI). Aural proxies are the audio twin: directional late energy without a full tracer every frame. Harvest explicitly tags Source-engine.

## Key ideas

- **Aural proxies.** Spatial samples of directional reverberation.
- **Directionally varying late field.** Not one global FDN.
- **IEEE TVCG 2013.** Game/engine; Valve Source mentioned in harvest topics.
- **Interactive.** Design-time placement + runtime interpolation.

## Caveats

Proxy density vs leaks. Not a wave bake (Triton). Not MagLS. Source-era tooling.

## Links

- DOI: https://doi.org/10.1109/TVCG.2013.23
