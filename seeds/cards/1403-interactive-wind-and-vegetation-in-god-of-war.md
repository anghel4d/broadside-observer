---
title: "Interactive Wind and Vegetation in God of War"
authors:
  - "Gautham Natarajan"
year: 2019
venue: "GDC"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1026322/Interactive-Wind-and-Vegetation-in"
topics:
  - "wind"
  - "pivot-weights"
  - "gow2018"
seed_rank: 1403
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: vegetation
cites:
  - title: "Procedural Grass in Ghost of Tsushima"
    url: "https://www.youtube.com/watch?v=Ibe1JBF5i5Y"
    year: 2021
    arxiv: null
    doi: null
---

# Interactive Wind and Vegetation in God of War

## One-sentence takeaway

Pivot-painted wind that also does hair/fur. Vegetation as a force-field shading problem.

## Why it's lovely

Why you might love this: One wind field, everything bends — grass, trees, cloth, Kratos's axe-adjacent foliage. Painted pivots, not a sim.

## Problem

Per-vertex noise looks like jelly. Full physics trees are a boss-fight budget. Santa Monica needed interactive wind that an artist paints and that also drives hair/fur without a second system.

## Design

- Pivot weights painted into assets; a wind field evaluates at pivots.
- Same idea extends to hair/fur — vegetation as a force-field shading problem.
- GDC 2019 Vault play/1026322.
- Not Zioma GPU Gems 3 tree wind (leftover / backup) — this is the GOW production talk.

## Evidence

Shipped in God of War (2018) and informed later SM Santa Monica foliage. Talk is the paper.

## Limitations

Painted pivots, not MPM/FEM. Open-world scale is HZD's problem, not this linear-action setup.

## Implications for Broadside

Anoptic vegetation wind: GOW for hero/interactive, Tsushima for meadows, Zioma only if we need the 2007 GPU default (not minted).

## Bottom line

Mint GOW wind. Painted pivots, one field.

## Links

- URL: https://www.gdcvault.com/play/1026322/Interactive-Wind-and-Vegetation-in
