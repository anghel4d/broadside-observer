---
title: "Inverse volume rendering with material dictionaries"
authors: ["Ioannis Gkioulekas", "Shuang Zhao", "Kavita Bala", "Todd Zickler", "Anat Levin"]
year: 2013
venue: "ACM Transactions on Graphics"
arxiv: null
doi: "10.1145/2508363.2508377"
source: "https://doi.org/10.1145/2508363.2508377"
topics: [translucent-materials]
seed_rank: 1246
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: translucent-materials
cites:
  - title: "Radiative Transfer"
    url: "https://archive.org/details/radiativetransfe0000chan"
    year: 1950
    arxiv: null
    doi: null
  - title: "Acquiring Scattering Properties of Participating Media by Dilution"
    url: "https://doi.org/10.1145/1141911.1141986"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141986"
see:
  - "1252-radiative-transfer"
  - "1327-acquiring-scattering-properties-of-participating-media-by-dilution"
---

# Inverse volume rendering with material dictionaries

## One-sentence takeaway

Invert the RTE against photographs with a material dictionary — physically-unit σs, σa, phase — without assuming Henyey–Greenstein.

## Problem

Narasimhan dilution and Jensen-style measurement give parameters only under strong phase-function assumptions. Heterogeneous translucent solids need a dictionary inversion.

## Design

Stochastic gradient / dictionary fit of scattering parameters so rendered images match captured photographs of real solids and liquids. Lineage: Narasimhan dilution, Jensen measurement, RTE inversion.

## Evidence

TOG 2013, DOI 10.1145/2508363.2508377. Companion to Gkioulekas phase-function perception (same year).

## Limitations

Offline, acquisition-lab method. Dictionary bias remains. Not a real-time BSSRDF.

## Implications for Broadside

Capture papers say which parameters to store (σs, σa, g, layered weights), not how Anoptic evaluates them. The renderer still lacks an SSS operator. Do not claim they already have SSS.

## Bottom line

Mint the inverse-volume dictionary paper. Cite Narasimhan 2006; pair with the phase-function TOG.

## Links

- DOI: [10.1145/2508363.2508377](https://doi.org/10.1145/2508363.2508377)
