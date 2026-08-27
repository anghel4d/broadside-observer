---
title: "Reinventing the Wheel for Snow Rendering"
authors:
  - "Paolo Surricchio"
year: 2023
venue: "GDC Advanced Graphics Summit"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1028711/Advanced-Graphics-Summit-Reinventing-the"
topics:
  - "god-of-war"
  - "tessellation"
  - "ragnarok"
seed_rank: 1400
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: snow
cites:
  - title: "Deformable Snow Rendering in Batman: Arkham Origins"
    url: "https://colinbarrebrisebois.com/wp-content/uploads/2022/06/gdc2014-deformable_snow_rendering.pdf"
    year: 2014
    arxiv: null
    doi: null
  - title: "Deferred Snow Deformation in Rise of the Tomb Raider"
    url: "https://doi.org/10.1201/b22483-18"
    year: 2016
    arxiv: null
    doi: "10.1201/b22483-18"
---

# Reinventing the Wheel for Snow Rendering

## One-sentence takeaway

GOW Ragnarök: parallax snow replaced by geometry displacement. The snow you can stand in.

## Why it's lovely

Why you might love this: They threw out the POM snow trick and grew real displaced geometry. Ragnarök's snow is a mesh again.

## Problem

Parallax/relief snow (Arkham-class) looks thick until the silhouette, then it's a card. Santa Monica needed snow that holds a contour, a footprint, and a close-up camera in a linear-action game.

## Design

- Replace parallax occlusion with tessellated / displaced geometry for snow volume.
- Artist-directable depth; interaction still a deform buffer, not MPM.
- GDC Advanced Graphics Summit 2023; Vault play/1028711.

## Evidence

Shipped in God of War Ragnarök. The current production answer to 'POM snow is a lie at the edge'.

## Limitations

Talk. Cost of tessellation. Not Frozen MPM. Not HZD open-world deform scale.

## Implications for Broadside

Anoptic close-up snow: this over POM. Open-world trails: HZD/ROTTR. Sparkle: Yan glints.

## Bottom line

Mint GOW Ragnarök snow. Geometry, not parallax.

## Links

- URL: https://www.gdcvault.com/play/1028711/Advanced-Graphics-Summit-Reinventing-the
