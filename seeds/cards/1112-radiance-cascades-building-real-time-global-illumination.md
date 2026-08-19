---
title: "Radiance Cascades: Building Real-Time Global Illumination"
authors:
  - "Jason McGhee"
year: 2024
venue: "WIP"
arxiv: null
doi: null
source: "https://jason.today/rc"
topics:
  - radiance-cascades
  - gi
  - tutorial
seed_rank: 1112
seed_batch: "radiance-cascades-wip-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
  - title: "GM Shaders Guest: Radiance Cascades"
    url: "https://mini.gmshaders.com/p/radiance-cascades"
    year: 2024
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1111-gm-shaders-guest-radiance-cascades"
  - "1109-radiance-cascades-shadertoy"
---

# Radiance Cascades: Building Real-Time Global Illumination

## One-sentence takeaway

Jason McGhee's 2024-08-31 interactive essay is a from-scratch 2D RC implementation: naive GI → penumbra-coded intervals → packed probes → multi-cascade merge, with live canvases and MIT source in the page.

## Why it matters here

This is the actual technique writeup, not a link roundup. It shows *why* a 32-ray noisy gather is the same cost as a 4/16-base cascade stack that behaves like 256 directions, and it is honest about ringing (still open) and the extra-cascade hack for diagonal coverage. radiance-cascades.com and radiance.wiki both list it next to GM Shaders and SimonDev as the teaching spine. Anoptic can steal the interval-length / cascade-count formulas and the sRGB-linear gotcha without waiting for a JCGT article.

## Key ideas

- Part 1 (`jason.today/gi`, 2024-07-27) builds JFA distance fields and a noisy per-pixel gather; Part 2 (`/rc`) replaces that gather with cascades.
- Probe packing: encode `baseRayCount` directions across a √base × √base pixel block so each cascade costs one `base` raymarch per pixel.
- Cascade count from log_base(diagonal) plus one extra cascade — author flags this as a naive coverage hack.
- Linear-space lighting (approx. γ=2.2) makes vanilla RC ringing obvious; merge-edge clamp stops light wrapping across cascade tiles.
- Built with feedback from Sannikov, Yaazarai, fad, tmpvar, Mytino, Goobley in the Graphics Programming Discord RC thread.

## Caveats

- Interactive blog, not a refereed paper. 2D WebGL, MIT, still ringing for bases other than 4.
- The "modifierHack" for base 16 is admitted hand-waving.
- Not a 3D method.

## Links

- Part 2 (RC): https://jason.today/rc
- Part 1 (foundations): https://jason.today/gi
- Wiki: https://radiance.wiki/guides/jason-today
