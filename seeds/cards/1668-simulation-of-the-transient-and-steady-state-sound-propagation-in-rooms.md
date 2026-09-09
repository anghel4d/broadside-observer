---
title: "Simulation of the transient and steady-state sound propagation in rooms using a new combined ray-tracing/image-source algorithm"
authors: ["Michael Vorländer"]
year: 1989
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.398336"
source: "https://doi.org/10.1121/1.398336"
topics: [hybrid-geometric, ray-tracing, image-source, auralization]
seed_rank: 1668
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "graphics"
relevance_score: 10
lineage: geometric-acoustics
cites:
  - title: "Image method for efficiently simulating small-room acoustics"
    url: "https://doi.org/10.1121/1.382599"
    year: 1979
    arxiv: null
    doi: "10.1121/1.382599"
  - title: "Calculating the acoustical room response by the use of a ray tracing technique"
    url: "https://doi.org/10.1016/0022-460X(68)90198-3"
    year: 1968
    arxiv: null
    doi: "10.1016/0022-460X(68)90198-3"
see:
  - "1666-image-method-for-efficiently-simulating-small-room-acoustics"
  - "1677-calculating-the-acoustical-room-response-by-the-use-of-a-ray-tracing"
---

# Simulation of the transient and steady-state sound propagation in rooms using a new combined ray-tracing/image-source algorithm

## One-sentence takeaway

Hybrid: image sources for deterministic early reflections, ray tracing for the stochastic late tail — Vorländer 1989, still the auralization toolchain split.

## Why it matters here

Pure image sources explode combinatorially; pure rays miss early specular. Anoptic should keep this split: image/beam for first 50–80 ms, ray or FDN for the tail. Foundational to CATT/ODEON-class tools.

## Key ideas

- **Early: image-source.** Exact specular paths while the reflection order is small.
- **Late: ray tracing.** Energy histograms / stochastic rays after a transition time.
- **Transient + steady-state.** Paper treats both the IR onset and the decaying field.
- **JASA 1989.** Michael Vorländer; harvest: foundational to modern auralization toolchains.

## Caveats

Transition time is a modeling choice; hybrid seams can click if energy is not matched. Still geometric (no wave modes). Diffraction not in this 1989 algorithm (add BTM/UTD).

## Links

- DOI: https://doi.org/10.1121/1.398336
