---
title: "Computation of Edge Diffraction for More Accurate Room Acoustics Auralization"
authors: ["Rendell R. Torres", "U. Peter Svensson", "Mendel Kleiner"]
year: 2001
venue: "Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.1330829"
source: "https://doi.org/10.1121/1.1330829"
topics: [diffraction-btm, auralization]
seed_rank: 1693
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "graphics"
relevance_score: 10
lineage: geometric-acoustics
cites:
  - title: "An analytic secondary source model of edge diffraction impulse responses"
    url: "https://doi.org/10.1121/1.428071"
    year: 1999
    arxiv: null
    doi: "10.1121/1.428071"
  - title: "Image method for efficiently simulating small-room acoustics"
    url: "https://doi.org/10.1121/1.382599"
    year: 1979
    arxiv: null
    doi: "10.1121/1.382599"
see:
  - "1665-an-analytic-secondary-source-model-of-edge-diffraction-impulse-responses"
  - "1666-image-method-for-efficiently-simulating-small-room-acoustics"
---

# Computation of Edge Diffraction for More Accurate Room Acoustics Auralization

## One-sentence takeaway

Torres/Svensson/Kleiner 2001: put BTMS edge diffraction into *room auralization* so image-source rooms stop sounding like they have infinite rigid walls with knife-edge silence.

## Why it matters here

Allen–Berkley boxes lack door-diffraction. This JASA paper is the practical 'add Svensson IRs to your GA auralizer' recipe. Anoptic interior doors: image sources + edge IRs, not UTD-only.

## Key ideas

- **BTM + image source.** Combine 1665 kernels with 1666-style specular paths.
- **Auralization evidence.** Listening/energy comparisons vs no-diffraction.
- **JASA 2001.** Harvest diffraction coverage.
- **Time-domain IR** you can convolve, unlike UTD frequency filters alone.

## Caveats

Still idealized edges. CPU cost of many edges. Not interactive GSound caching. Not a wave solver for the whole room.

## Links

- DOI: https://doi.org/10.1121/1.1330829
