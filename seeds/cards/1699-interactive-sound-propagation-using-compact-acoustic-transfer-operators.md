---
title: "Interactive Sound Propagation Using Compact Acoustic Transfer Operators"
authors: ["Lakulish Antani", "Anish Chandak", "Lauri Savioja", "Dinesh Manocha"]
year: 2012
venue: "ACM TOG"
arxiv: null
doi: "10.1145/2077341.2077343"
source: "https://doi.org/10.1145/2077341.2077343"
topics: [radiance-transfer, interactive, dynamic-scenes]
seed_rank: 1699
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "The Room Acoustic Rendering Equation"
    url: "https://doi.org/10.1121/1.2766781"
    year: 2007
    arxiv: null
    doi: "10.1121/1.2766781"
  - title: "Direct-to-Indirect Acoustic Radiance Transfer"
    url: "https://doi.org/10.1145/1940685.1940690"
    year: 2011
    arxiv: null
    doi: "10.1145/1940685.1940690"
see:
  - "1669-the-room-acoustic-rendering-equation"
  - "1716-direct-to-indirect-acoustic-radiance-transfer"
---

# Interactive Sound Propagation Using Compact Acoustic Transfer Operators

## One-sentence takeaway

Compact acoustic transfer operators: compress the linear map from source samples to listener so dynamic sources in a static mesh auralize from a small matrix.

## Why it matters here

ART/radiosity operators are huge. Antani/Chandak/Savioja/Manocha 2012 TOG factor/compress the transfer so interactive updates survive. Cousin of Project Acoustics parametric coding, but from the GAMMA/Aalto *surface operator* side.

## Key ideas

- **Transfer operator.** Acoustic analog of a transport matrix between discrete sources/listeners or surfaces.
- **Compact encoding.** Rank/structure exploitation for runtime.
- **Dynamic sources, mostly static geo.** TOG 2012.
- **Radiance-transfer family** with 2011 direct-to-indirect I3D (1716).

## Caveats

Compression discards high-order modal detail. Not HRTF. Not ARD wave bake (different encoding).

## Links

- DOI: https://doi.org/10.1145/2077341.2077343
