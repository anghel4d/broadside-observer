---
title: "Real-Time Acoustic Modeling for Distributed Virtual Environments"
authors: ["Thomas Funkhouser", "Patrick Min", "Ingrid Carlbom"]
year: 1999
venue: "ACM SIGGRAPH"
arxiv: null
doi: "10.1145/311535.311584"
source: "https://doi.org/10.1145/311535.311584"
topics: [beam-tracing, interactive, distributed]
seed_rank: 1705
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 9
lineage: interactive-sound-propagation
cites:
  - title: "A Beam Tracing Approach to Acoustic Modeling for Interactive Virtual Environments"
    url: "https://doi.org/10.1145/280814.280818"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280818"
see:
  - "1659-a-beam-tracing-approach-to-acoustic-modeling-for-interactive-virtual"
---

# Real-Time Acoustic Modeling for Distributed Virtual Environments

## One-sentence takeaway

Funkhouser/Min/Carlbom 1999 SIGGRAPH: real-time acoustic modeling for *distributed* VEs — beam tracing over a network of clients.

## Why it matters here

Multiplayer Anoptic: acoustics state is a networked object. This is the 1999 distributed-VE paper in the Bell Labs beam-tracing line (between 1998 and 2004 JASA). Latency and consistency matter as much as the beam tree.

## Key ideas

- **Distributed VE.** Servers/clients sharing acoustic model updates.
- **SIGGRAPH 1999.** Real-time modeling, not offline.
- **Beam-tracing family.** Same geometric core as 1659.
- **Interactive coverage `game`.** Harvest quality 9.

## Caveats

1999 networking. Specular GA. Don't remint 1659/1694 — keep because distributed systems angle is the leftover.

## Links

- DOI: https://doi.org/10.1145/311535.311584
