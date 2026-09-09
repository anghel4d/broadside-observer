---
title: "Differentiable Geometric Acoustic Path Tracing using Time-Resolved Path Replay Backpropagation"
authors: ["U. Finnendahl", "Markus Worchel", "Tobias Jüterbock", "Daniel Wujecki", "F. Brinkmann", "S. Weinzierl", "M. Alexa"]
year: 2025
venue: "ACM Transactions on Graphics"
arxiv: null
doi: "10.1145/3730900"
source: "https://doi.org/10.1145/3730900"
topics: [path-tracing, geometric]
seed_rank: 1710
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "graphics"
relevance_score: 8
lineage: interactive-sound-propagation
cites:
  - title: "Interactive Sound Propagation with Bidirectional Path Tracing"
    url: "https://doi.org/10.1145/2980179.2982431"
    year: 2016
    arxiv: null
    doi: "10.1145/2980179.2982431"
  - title: "The Room Acoustic Rendering Equation"
    url: "https://doi.org/10.1121/1.2766781"
    year: 2007
    arxiv: null
    doi: "10.1121/1.2766781"
see:
  - "1682-interactive-sound-propagation-with-bidirectional-path-tracing"
  - "1669-the-room-acoustic-rendering-equation"
---

# Differentiable Geometric Acoustic Path Tracing using Time-Resolved Path Replay Backpropagation

## One-sentence takeaway

Differentiable geometric-acoustic path tracing via time-resolved path replay backpropagation — optimize materials/geometry against an IR loss.

## Why it matters here

Inverse acoustics for Anoptic: fit absorption from a recorded clap, or tune a level so the sniper shot reads. Finnendahl/Worchel/Brinkmann/Weinzierl/Alexa TOG 2025 (DOI 10.1145/3730900) ports PRB to *time-resolved* acoustic paths. Offline/design-time, not the runtime mixer.

## Key ideas

- **Path replay backprop.** Differentiable path tracer in the acoustic time domain.
- **TOG 2025.** Harvest path-traced/MC; quality 8.
- **Geometric, differentiable.** Not a neural IR black box (Listen2Scene is 1758).
- **Design-time inverse.** Materials, maybe portal layout.

## Caveats

Not realtime. Geometric (no full-wave adjoint). Cite count low (new). Don't treat as a remint of Cao BDPT 2016 — the leftover is differentiability.

## Links

- DOI: https://doi.org/10.1145/3730900
- HTML: https://www.semanticscholar.org/paper/d1284d8c4df7da95b634cc453171a421a761535d
