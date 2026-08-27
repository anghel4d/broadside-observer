---
title: "Water Surface Wavelets"
authors:
  - "Stefan Jeschke"
  - "Tomas Skrivan"
  - "Martin Muller-Fischer"
  - "Nuttapong Chentanez"
  - "Miles Macklin"
  - "Chris Wojtan"
year: 2018
venue: "ACM TOG (SIGGRAPH)"
arxiv: null
doi: "10.1145/3197517.3201336"
source: "http://visualcomputing.ist.ac.at/publications/2018/WSW/"
topics:
  - "wavelets"
  - "dispersion"
  - "rivers-ocean"
seed_rank: 1410
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: water
cites:
  - title: "Wave Particles"
    url: "http://www.cemyuksel.com/research/waveparticles/"
    year: 2007
    arxiv: null
    doi: "10.1145/1276377.1276501"
  - title: "Simulating Ocean Water"
    url: "https://people.computing.clemson.edu/~jtessen/reports/papers_files/coursenotes2002.pdf"
    year: 2001
    arxiv: null
    doi: null
---

# Water Surface Wavelets

## One-sentence takeaway

Dispersion-correct wavelets; production-usable (NVIDIA). Bridges FFT oceans and local interaction.

## Why it's lovely

Why you might love this: Waves that disperse like water, not like a heightfield spring. Wavelets you can actually run.

## Problem

Wave particles are local but weakly dispersive. FFT oceans don't take a boat. A method that is local, dispersive, and still real-time was missing.

## Design

- Water surface wavelets with correct dispersion relation.
- Local sources + a field that can also live on rivers, not only infinite ocean.
- NVIDIA-adjacent, production-usable.
- SIGGRAPH 2018 / TOG, DOI 10.1145/3197517.3201336; IST Vienna page.

## Evidence

TOG 2018. The interaction method you layer on Tessendorf when Wave Particles' dispersion isn't enough.

## Limitations

Not a full 3D fluid. Not foam/lighting (Bruneton). Implementation complexity vs wave particles.

## Implications for Broadside

Anoptic water stack: Tessendorf + Bruneton lighting + Wave Particles or Wavelets for interaction. Photon Water is the Tencent production unification.

## Bottom line

Mint water surface wavelets. Dispersion, production-usable.

## Links

- DOI: [10.1145/3197517.3201336](https://doi.org/10.1145/3197517.3201336)
- URL: http://visualcomputing.ist.ac.at/publications/2018/WSW/
