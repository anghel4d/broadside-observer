---
title: "Deferred Shading"
authors: ["Shawn Hargreaves"]
year: 2004
venue: "GDC"
arxiv: null
doi: null
source: "https://shawnhargreaves.com/DeferredShading.pdf"
topics:
  - "deferred-rendering"
seed_rank: 1346
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: deferred-rendering
cites:
  - title: "Comprehensible rendering of 3-D shapes"
    url: "https://doi.org/10.1145/97879.97901"
    year: 1990
    arxiv: null
    doi: "10.1145/97879.97901"
see:
  - "1347-comprehensible-rendering-of-3-d-shapes"
  - "271-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
  - "340-forward-bringing-deferred-lighting-to-the-next-level"
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
---

# Deferred Shading

## One-sentence takeaway

Hargreaves GDC 2004: don't light while drawing geometry — write a fat G-buffer, then light as a 2D post-process. The deferred talk games actually cite.

## Problem

Forward single-pass explodes shader permutations; multipass is objects × lights. Fox (and most 2013 open-world games) wanted many lights and the same lighting on characters and backgrounds.

## Design

Render to multiple targets (position or reconstructable depth, normal, albedo, material). Apply each light as a screen-space pass over the G-buffer. Cost scales with light screen area, not object count. NVIDIA also published a 6800 Leagues version with Mark Harris the same year; this card is the Climax/GDC deck at shawnhargreaves.com, matching the title games cite.

## Evidence

GDC 2004 slides PDF, HTTP 200 at https://shawnhargreaves.com/DeferredShading.pdf. Fox GDC 2013 (4gamer 後編) states deferred rendering explicitly so many lights can be used and characters share background lighting.

## Limitations

Classic deferred: no native MSAA, transparency is a second path, one lighting model unless you punch the G-buffer (Fox does exactly that for refraction / anisotropic hair). Calver's Beyond3D 2003 / ShaderX2 chapters are sibling game cites — no free PDF matching "Deferred Lighting and Shading" was found, so Calver is not minted.

## Implications for Broadside

Anoptic is not a deferred G-buffer engine today. Fox is. Visibility Buffer (271) and Forward+ (340) are later alternatives already in the library.

## Bottom line

Mint Hargreaves 2004 as the game deferred founding cite. Cite Saito–Takahashi 1990 for the G-buffer name.

## Links

- GDC 2004 PDF: https://shawnhargreaves.com/DeferredShading.pdf
- NVIDIA 6800 Leagues PDF (Hargreaves + Harris): https://download.nvidia.com/developer/presentations/2004/6800_Leagues/6800_Leagues_Deferred_Shading.pdf
