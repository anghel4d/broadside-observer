---
title: "Wave Particles"
authors:
  - "Cem Yuksel"
  - "Donald H. House"
  - "John Keyser"
year: 2007
venue: "ACM TOG (SIGGRAPH)"
arxiv: null
doi: "10.1145/1276377.1276501"
source: "http://www.cemyuksel.com/research/waveparticles/"
topics:
  - "wave-particles"
  - "interactive-water"
  - "wakes"
seed_rank: 1406
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: water
cites:
  - title: "Simulating Ocean Water"
    url: "https://people.computing.clemson.edu/~jtessen/reports/papers_files/coursenotes2002.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "Water Surface Wavelets"
    url: "http://visualcomputing.ist.ac.at/publications/2018/WSW/"
    year: 2018
    arxiv: null
    doi: "10.1145/3197517.3201336"
---

# Wave Particles

## One-sentence takeaway

Local wave sources (boats, splashes) that FFT oceans cannot do. Games still steal this.

## Why it's lovely

Why you might love this: A boat that writes waves, not a looping iFFT. Particles that *are* the wave.

## Problem

Tessendorf oceans are stationary processes. A ship, a splash, a river rock need local, dispersive waves that superpose onto the sea. Heightfield PDE solvers were too heavy for 2007 games.

## Design

- Wave particles: each particle carries a local wave packet; superposition is the heightfield.
- Cheap to spawn from collisions; naturally local.
- SIGGRAPH 2007 / TOG, DOI 10.1145/1276377.1276501; Yuksel project page.
- Water Surface Wavelets (2018) is the dispersion-correct sequel — mint both.

## Evidence

Games still use wave-particle / wave-particle-like wakes on top of FFT oceans. The project page is the paper.

## Limitations

Not a global ocean spectrum. Interference and reflections need extra work (wavelets help).

## Implications for Broadside

Anoptic water: Tessendorf + Bruneton lighting + Wave Particles for interaction. Photon Water (Tencent) is the production unification.

## Bottom line

Mint Wave Particles. Local waves FFT cannot do.

## Links

- DOI: [10.1145/1276377.1276501](https://doi.org/10.1145/1276377.1276501)
- URL: http://www.cemyuksel.com/research/waveparticles/
