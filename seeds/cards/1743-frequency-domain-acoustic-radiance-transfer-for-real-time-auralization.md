---
title: "Frequency Domain Acoustic Radiance Transfer for Real-Time Auralization"
authors: ["Samuel Siltanen", "Tapio Lokki", "Lauri Savioja"]
year: 2009
venue: "Acta Acustica united with Acustica"
arxiv: null
doi: "10.3813/aaa.918132"
source: "https://doi.org/10.3813/aaa.918132"
topics: [radiance-transfer, auralization, interactive, radiosity, surface-based]
seed_rank: 1743
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: geometric-acoustics
cites:
  - title: "The Room Acoustic Rendering Equation"
    url: "https://doi.org/10.1121/1.2766781"
    year: 2007
    arxiv: null
    doi: "10.1121/1.2766781"
see:
  - "1677-the-room-acoustic-rendering-equation"
  - "1707-interactive-sound-propagation-using-compact-acoustic-transfer-operators"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Frequency Domain Acoustic Radiance Transfer for Real-Time Auralization

## One-sentence takeaway

Frequency-domain acoustic radiance transfer: solve the Siltanen rendering equation per band for real-time-ish auralization (Siltanen/Lokki/Savioja Acta Acustica 2009).

## Why it matters here

Time-domain ART is a long IR. Frequency-domain ART (Aalto 2009) is the radiosity-per-band runtime. Anoptic diffuse late field: this or SDN, not 48 kHz FDTD.

## Key ideas

- **Per-band linear systems.** Acoustic radiosity in frequency domain.
- **Acta Acustica 2009.** Harvest radiosity / surface-based / interactive.
- **Same authors as 2007 rendering equation.**
- **Realtime auralization claim** vs full time-domain march.

## Caveats

Diffuse surfaces; band count vs memory. Not specular beams. 2008-era realtime. Not RC visual 005 remint.

## Links

- DOI: https://doi.org/10.3813/aaa.918132
