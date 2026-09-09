---
title: "Scattering Delay Networks for Artificial Reverberation"
authors: ["Enzo De Sena", "Hüseyin Hacıhabiboğlu", "Zoran Cvetković", "Julius O. Smith"]
year: 2015
venue: "IEEE TASLP"
arxiv: null
doi: "10.1109/TASLP.2015.2438541"
source: "https://doi.org/10.1109/TASLP.2015.2438541"
topics: [reverb-parametric]
seed_rank: 1728
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 9
lineage: artificial-reverberation
cites:
  - title: "Fifty Years of Artificial Reverberation"
    url: "https://doi.org/10.1109/TASL.2012.2189567"
    year: 2012
    arxiv: null
    doi: "10.1109/TASL.2012.2189567"
  - title: "Circulant and Elliptic Feedback Delay Networks for Artificial Reverberation"
    url: "https://doi.org/10.1109/89.554268"
    year: 1997
    arxiv: null
    doi: "10.1109/89.554268"
see:
  - "1686-fifty-years-of-artificial-reverberation"
  - "1755-circulant-and-elliptic-feedback-delay-networks-for-artificial"
---

# Scattering Delay Networks for Artificial Reverberation

## One-sentence takeaway

Scattering Delay Networks: a physically structured FDN whose delays/scattering come from a room *graph* (walls as nodes) — cheap geometric-ish reverb.

## Why it matters here

Full GA is heavy; a random FDN ignores layout. De Sena/Hacıhabiboğlu/Cvetković/Smith 2015 TASLP build an SDN from a box/graph of surfaces — the parametric reverb you can still run on a game thread. Anoptic hallway vs hangar: change the delay graph, not a 2 s IR.

## Key ideas

- **Room as scattering network.** Nodes ~ walls/patches; edges ~ delays.
- **FDN cousin with geometry.** Harvest reverb-parametric.
- **IEEE TASLP 2015.** JOS among authors.
- **Realtime recursive.** Contrast convolution of baked IRs.

## Caveats

Coarse geometric abstraction (not diffraction, not modes). Forced parametric. Not Triton. 2015.

## Links

- DOI: https://doi.org/10.1109/TASLP.2015.2438541
