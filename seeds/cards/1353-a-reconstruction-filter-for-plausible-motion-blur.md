---
title: "A Reconstruction Filter for Plausible Motion Blur"
authors: ["Morgan McGuire", "Padraic Hennessy", "Michael Bukowski", "Brian Osman"]
year: 2012
venue: "I3D"
arxiv: null
doi: "10.1145/2159616.2159639"
source: "https://doi.org/10.1145/2159616.2159639"
topics:
  - "motion-blur"
seed_rank: 1353
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: motion-blur
cites:
  []
see:
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
  - "1355-metal-gear-solid-v-graphics-study"
---

# A Reconstruction Filter for Plausible Motion Blur

## One-sentence takeaway

McGuire / Hennessy / Bukowski / Osman I3D 2012 (MHBO): motion blur as a 2D reconstruction filter on color + screen-space velocity. The paper Courrèges says Fox is inspired by.

## Problem

Offline stochastic motion blur is too slow. Earlier game blurs smear uniformly or miss occluders. Need a post-process that respects velocities and foreground/background.

## Design

Framebuffer plus velocity buffer. Tile the screen; gather a reconstruction filter along velocity, with neighbor-max tiles so fast motion from adjacent pixels can smear in. Deployed at Vicarious Visions; shown on GeForce 480 and Xbox 360. Fox (Courrèges): velocity map for dynamic meshes, static velocity from depth + previous projection, then a low-res max-velocity tile map and a stretch along those vectors — "inspired by the MHBO 2012 paper."

## Evidence

I3D 2012, pages 135–142. DOI 10.1145/2159616.2159639. Author PDF at casual-effects.com. Courrèges 2017 names MHBO 2012 explicitly.

## Limitations

Plausible, not physically sampled. Fox's hospital shot has almost no motion so the inherit is hard to see. Talk camera-sim slide lists motion blur without naming this paper.

## Implications for Broadside

Fox camera simulation is DoF + Kawase bloom + this-style velocity blur, not a unified spectral camera. Anoptic has none of these yet.

## Bottom line

Mint MHBO 2012 with the real I3D DOI. This is the motion-blur paper Courrèges named.

## Links

- DOI: https://doi.org/10.1145/2159616.2159639
- PDF: https://casual-effects.com/research/McGuire2012Blur/McGuire12Blur.pdf
