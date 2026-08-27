---
title: "Deferred Snow Deformation in Rise of the Tomb Raider"
authors:
  - "Anton Kai Michels"
  - "Peter Sikachev"
year: 2016
venue: "GPU Pro 7"
arxiv: null
doi: "10.1201/b22483-18"
source: "https://doi.org/10.1201/b22483-18"
topics:
  - "deferred-deformation"
  - "tessellation"
  - "trails"
seed_rank: 1404
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
---

# Deferred Snow Deformation in Rise of the Tomb Raider

## One-sentence takeaway

Decouples deformation from mesh. Dozens of NPCs leaving trails without tessellating every character's snow.

## Why it's lovely

Why you might love this: Snow as a deferred buffer, not a tessellated costume. The ROTTR chapter to mint — not the tessellation sibling.

## Problem

If snow deform lives on the tessellated mesh, every NPC is a geometry bomb. Tomb Raider needed many agents leaving trails in Siberian levels.

## Design

- Deferred deformation: write trails into a screen/world buffer, apply as displacement/POM at shade time.
- Decouples actor count from tessellation cost.
- GPU Pro 7 chapter, DOI 10.1201/b22483-18.
- Do NOT mint 'Hardware-Tessellated Deformable Snow in Rise of the Tomb Raider' — that is the tessellation sibling.

## Evidence

Shipped in Rise of the Tomb Raider. The deferred formulation is what later open-world snow (HZD) rhymes with.

## Limitations

Buffer resolution vs trail sharpness. Not MPM. Silhouettes still need a geometry trick (GOW Ragnarök's answer).

## Implications for Broadside

Anoptic NPC trails: deferred deform. Hero close-up: tessellate (GOW) or relief (Arkham). Do not ship both ROTTR chapters.

## Bottom line

Mint deferred ROTTR snow. Not the tessellation twin.

## Links

- DOI: [10.1201/b22483-18](https://doi.org/10.1201/b22483-18)
- URL: https://doi.org/10.1201/b22483-18
