---
title: "Real-time Snow Deformation in Horizon Zero Dawn: The Frozen Wilds"
authors:
  - "Kevin Ortegren"
year: 2019
venue: "GPU Zen 2"
arxiv: null
doi: null
source: null
topics:
  - "hzd"
  - "compute"
  - "snow-deform"
seed_rank: 1402
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: snow
cites:
  - title: "Deferred Snow Deformation in Rise of the Tomb Raider"
    url: "https://doi.org/10.1201/b22483-18"
    year: 2016
    arxiv: null
    doi: "10.1201/b22483-18"
  - title: "Deformable Snow Rendering in Batman: Arkham Origins"
    url: "https://colinbarrebrisebois.com/wp-content/uploads/2022/06/gdc2014-deformable_snow_rendering.pdf"
    year: 2014
    arxiv: null
    doi: null
see:
  - "1357-decima-engine-advances-in-lighting-and-aa"
---

# Real-time Snow Deformation in Horizon Zero Dawn: The Frozen Wilds

## One-sentence takeaway

Guerrilla snow at open-world scale. Compute deformation that covers a Frozen Wilds map, not a boss arena.

## Why it's lovely

Why you might love this: Footprints that span an expansion. Compute snow deform, Guerrilla-scale.

## Problem

Batman/ROTTR deform snow in a tight playspace. An open-world expansion needs trails from machines, Aloy, and wildlife without tessellating the continent.

## Design

- Compute-based deformation (height/Splat buffer) at open-world scale.
- Decoupled from hero mesh tessellation where possible.
- GPU Zen 2 chapter, 2019. No URL in harvest — do not invent one. Chapter in the book is the artifact.
- Distinct from Decima lighting 1357 and from HZD vegetation.

## Evidence

Shipped in Frozen Wilds. GPU Zen 2 is the paper of record.

## Limitations

Harvest has no URL/DOI. Book chapter. Not MPM. Not the ROTTR tessellation sibling.

## Implications for Broadside

Anoptic open-world trails: this. Close-up hero snow: GOW/Batman. Film snow: MPM.

## Bottom line

Mint HZD Frozen Wilds snow deform. Open-world compute trails.

## Links

- Venue: GPU Zen 2 (2019; no URL in harvest)
