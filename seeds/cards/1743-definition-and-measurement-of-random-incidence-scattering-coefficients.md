---
title: "Definition and measurement of random-incidence scattering coefficients"
authors: ["Michael Vorländer", "Eckard Mommertz"]
year: 2000
venue: "Applied Acoustics"
arxiv: null
doi: "10.1016/s0003-682x(99)00056-0"
source: "https://doi.org/10.1016/s0003-682x(99)00056-0"
topics: [interactive-acoustics]
seed_rank: 1743
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "graphics"
relevance_score: 8
lineage: geometric-acoustics
cites:
  - title: "Simulation of the transient and steady-state sound propagation in rooms using a new combined ray-tracing/image-source algorithm"
    url: "https://doi.org/10.1121/1.398336"
    year: 1989
    arxiv: null
    doi: "10.1121/1.398336"
see:
  - "1668-simulation-of-the-transient-and-steady-state-sound-propagation-in-rooms"
  - "1737-computer-simulations-in-room-acoustics-concepts-and-uncertainties"
  - "1664-high-order-diffraction-and-diffuse-reflections-for-interactive-sound"
---

# Definition and measurement of random-incidence scattering coefficients

## One-sentence takeaway

Vorländer & Mommertz 2000: define and measure *random-incidence scattering coefficients* so geometric tracers have a real number for diffuse bounce.

## Why it matters here

Lambert buttons in GSound are often fiction. This Applied Acoustics paper is the measurement standard-ish for scattering coefficients used in GA. Anoptic materials table: absorption *and* scattering, or your late field is a lie (Vorländer 2013).

## Key ideas

- **Scattering coefficient.** Energy not in the specular lobe, random incidence.
- **Measurement method.** Lab, not a guess.
- **Applied Acoustics 2000.** Harvest interactive-acoustics; 89 cites.
- **Input to GA** (Vorländer hybrid, ART, GSound diffuse).

## Caveats

Random-incidence ≠ your game's directional incoming field. Frequency-dependent. Doesn't implement a tracer.

## Links

- DOI: https://doi.org/10.1016/s0003-682x(99)00056-0
