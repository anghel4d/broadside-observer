---
title: "Simulating Ocean Water"
authors:
  - "Jerry Tessendorf"
year: 2001
venue: "SIGGRAPH Course Notes"
arxiv: null
doi: null
source: "https://people.computing.clemson.edu/~jtessen/reports/papers_files/coursenotes2002.pdf"
topics:
  - "fft-ocean"
  - "phillips"
  - "gerstner"
  - "foam-jacobian"
seed_rank: 1399
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: water
cites:
  - title: "Effective Water Simulation from Physical Models"
    url: "https://developer.nvidia.com/gpugems/gpugems/part-i-natural-effects/chapter-1-effective-water-simulation-physical-models"
    year: 2004
    arxiv: null
    doi: null
---

# Simulating Ocean Water

## One-sentence takeaway

The FFT-ocean paper every game and film ocean still cites. Canonical spectrum, chop, Jacobian foam.

## Why it's lovely

Why you might love this: One course note, twenty-five years of seas. Phillips spectrum, iFFT, chop, and the Jacobian that became foam.

## Problem

Gerstner waves are pretty and cheap but not a sea. Film needed a statistical ocean that tiles, loops, and still looks like wind on water. Games needed the same thing on a GPU a decade later.

## Design

- Fourier-domain ocean: Phillips (or similar) spectrum, random phases, iFFT to height.
- Chop: extra displacement from the same spectrum so waves lean.
- Foam from the Jacobian of the horizontal displacement (where the surface folds).
- SIGGRAPH course notes 2001/2002 PDF (Clemson) is the paper.

## Evidence

Every FFT ocean since (Uncharted, Sea of Thieves, film, Houdini Ocean) cites Tessendorf. Finch GPU Gems is the Gerstner-on-GPU companion, not a remint.

## Limitations

No local wakes (Wave Particles). No shading (Bruneton 2010). Infinite open ocean, not rivers.

## Implications for Broadside

Anoptic default ocean sim is Tessendorf. Do not invent a new spectrum. Layer Wave Particles / wavelets for interaction.

## Bottom line

Mint Tessendorf. The FFT ocean.

## Links

- URL: https://people.computing.clemson.edu/~jtessen/reports/papers_files/coursenotes2002.pdf
