---
title: "Procedural Grass in Ghost of Tsushima"
authors:
  - "Eric Wohllaib"
year: 2021
venue: "GDC"
arxiv: null
doi: null
source: "https://www.youtube.com/watch?v=Ibe1JBF5i5Y"
topics:
  - "procedural-grass"
  - "lod-blades"
  - "wind-fields"
seed_rank: 1391
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: vegetation
cites:
  - title: "Between Tech and Art: The Vegetation of Horizon Zero Dawn"
    url: "https://www.gdcvault.com/play/1025129/Between-Tech-and-Art-The"
    year: 2018
    arxiv: null
    doi: null
---

# Procedural Grass in Ghost of Tsushima

## One-sentence takeaway

GPU-generated pampas-ocean grass: blades, LOD folding, wind fields — the meadow paper of this decade.

## Why it's lovely

Why you might love this: A whole island of grass that reads as a living surface, not a texture. Sucker Punch's meadow.

## Problem

Open-world grass at console scale cannot be authored blade-by-blade. Billboard carpets look like carpets. LOD pops kill the 'ocean of pampas' read. Wind has to couple to cloth, horse, and camera without a physics sim per blade.

## Design

- GPU-generated blades from terrain/density maps, not placed meshes.
- LOD folding: blades collapse into cheaper representations without a pop.
- Wind as a field sampled by the grass, not per-instance noise only.
- GDC 2021 talk (YouTube) is the paper.

## Evidence

Shipped in Ghost of Tsushima; the look every later open-world grass deck has to beat. Talk is the artifact.

## Limitations

Talk, not a TOG paper. Stylized toward pampas; not a Bruneton forest-lighting model. No public SDK.

## Implications for Broadside

Anoptic meadows should steal GPU blades + LOD folding, not a grass-card atlas. Distinct from the math Grassmannian card (1123).

## Bottom line

Mint Tsushima grass. The meadow of the decade.

## Links

- URL: https://www.youtube.com/watch?v=Ibe1JBF5i5Y
