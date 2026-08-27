---
title: "Between Tech and Art: The Vegetation of Horizon Zero Dawn"
authors:
  - "Gilbert Sanders"
year: 2018
venue: "GDC"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1025129/Between-Tech-and-Art-The"
topics:
  - "hzd"
  - "photogrammetry-trees"
  - "wind"
seed_rank: 1392
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: vegetation
cites:
  - title: "Decima Engine: Advances in Lighting and AA"
    url: "https://www.guerrilla-games.com/read/decima-engine-advances-in-lighting-and-aa"
    year: 2017
    arxiv: null
    doi: null
  - title: "Real-time Realistic Rendering and Lighting of Forests"
    url: "https://hal.inria.fr/hal-00649787/"
    year: 2012
    arxiv: null
    doi: "10.1111/j.1467-8659.2012.03014.x"
see:
  - "1357-decima-engine-advances-in-lighting-and-aa"
---

# Between Tech and Art: The Vegetation of Horizon Zero Dawn

## One-sentence takeaway

Guerrilla Team Green: how a shipped open world actually shades and simulates a forest.

## Why it's lovely

Why you might love this: Photogrammetry trees that still play at 30 fps, wind and all. The forest as a production problem, not a paper scene.

## Problem

Photogrammetry foliage is too dense to draw, too noisy to light, and too stiff if you only vertex-paint wind. An open world needs a pipeline from scan to shader to simulation that art and engineering both own.

## Design

- Team Green pipeline: scan / atlas / impostor / shader LOD.
- Wind and interaction as authored fields, not a fully physical tree sim.
- Shading that survives under Decima lighting without becoming a brown soup.
- GDC 2018; GDC Vault is the artifact. Distinct from Decima lighting card 1357 — this is vegetation, not the AA/lighting talk.

## Evidence

Shipped in Horizon Zero Dawn. The talk every later photogrammetry-vegetation deck cites.

## Limitations

Console 30 fps constraints. Not Bruneton's z-field forest lighting (academic). Do not remint Decima 1357.

## Implications for Broadside

Anoptic forests: this for the production pipeline, Bruneton 2012 for the lighting theory, BroadLeaf for the Chinese cinematic-LOD cousin.

## Bottom line

Mint HZD vegetation. Team Green's forest.

## Links

- URL: https://www.gdcvault.com/play/1025129/Between-Tech-and-Art-The
