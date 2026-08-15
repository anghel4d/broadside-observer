---
title: "Communication in the Presence of Noise"
authors:
  - "Claude E. Shannon"
year: 1949
venue: "Proceedings of the IRE"
arxiv: null
doi: "10.1109/JRPROC.1949.232969"
source: "https://doi.org/10.1109/JRPROC.1949.232969"
topics:
  - information-theory
  - channel-capacity
  - shannon
seed_rank: 556
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "A Mathematical Theory of Communication"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: "10.1002/j.1538-7305.1948.tb01338.x"
see:
  - "553-a-mathematical-theory-of-communication"
---

# Communication in the Presence of Noise

## One-sentence takeaway

Shannon recasts bandlimited signals as points in a high-dimensional sphere and derives channel capacity for an engineering audience at the IRE.

## Why it matters here

This is the geometric picture behind noisy telemetry and sim-to-observer links: distinguishable signals are packed spheres, and power/bandwidth set how many fit.

## Key ideas

- A signal of duration \(T\) and bandwidth \(W\) is a point in a space of about \(2TW\) dimensions.
- White Gaussian noise turns each transmitted point into a sphere of known radius; reliable communication is sphere packing.
- Capacity of the power-limited bandlimited Gaussian channel is \(C = W\log(1+P/N)\) bits per second.
- Sampling and the 2TW theorem connect the continuous waveform to a discrete vector channel.
- The IRE paper is the EE-facing companion to the 1948 BSTJ memoir, not a replacement for it.

## Caveats

## Links

- DOI: [10.1109/JRPROC.1949.232969](https://doi.org/10.1109/JRPROC.1949.232969)
- URL: https://doi.org/10.1109/JRPROC.1949.232969
