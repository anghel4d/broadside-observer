---
title: "Deformable Snow Rendering in Batman: Arkham Origins"
authors:
  - "Colin Barre-Brisebois"
year: 2014
venue: "GDC"
arxiv: null
doi: null
source: "https://colinbarrebrisebois.com/wp-content/uploads/2022/06/gdc2014-deformable_snow_rendering.pdf"
topics:
  - "tessellation"
  - "relief-mapping"
  - "footprints"
seed_rank: 1405
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: snow
---

# Deformable Snow Rendering in Batman: Arkham Origins

## One-sentence takeaway

Console relief-map snow plus DX11 tessellation. The game-snow pattern everyone copied.

## Why it's lovely

Why you might love this: Gotham in snow, on last-gen plus DX11. Relief maps for the mass, tessellation for the edge — the pattern of 2014.

## Problem

A linear Batman level needs walkable snow with footprints, on consoles that cannot MPM and cannot tessellate everything. Need a trick that reads as volume.

## Design

- Relief / POM snow for the apparent thickness.
- DX11 tessellation where silhouettes and hero cams need it.
- Footprint stamps into a deform buffer.
- GDC 2014; Barre-Brisebois PDF is the artifact.

## Evidence

Shipped in Arkham Origins. Became the default 'game snow' recipe until deferred (ROTTR) and geometry (GOW 2023) forks.

## Limitations

POM fails at grazing silhouettes (GOW 2023's point). Not open-world scale. Not Frozen MPM.

## Implications for Broadside

Anoptic's historical game-snow card. Prefer deferred/geometry for new work; keep this as the ancestor.

## Bottom line

Mint Arkham snow. The pattern everyone copied.

## Links

- URL: https://colinbarrebrisebois.com/wp-content/uploads/2022/06/gdc2014-deformable_snow_rendering.pdf
