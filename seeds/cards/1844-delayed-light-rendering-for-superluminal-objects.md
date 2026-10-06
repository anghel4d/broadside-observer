---
title: "Delayed-Light Rendering for Superluminal Objects"
authors:
  - "David Bizzozero"
year: 2026
venue: "arXiv:cs.GR"
arxiv: "2609.16180"
doi: null
source: "https://arxiv.org/abs/2609.16180"
topics:
  - "curiosity"
  - "graphics"
  - "real-time-rendering"
  - "rts"
  - "optics"
seed_rank: 1844
seed_batch: "curiosity-2026-10-07"
reviewed: "2026-10-07"
pool: "graphics"
relevance_score: 10
lineage: finite-signal-speed-rendering
cites:
  - title: "Delayed-Light Rendering for Superluminal Objects"
    url: "https://arxiv.org/abs/2609.16180"
    year: 2026
    arxiv: "2609.16180"
    doi: null
see:
  - "1353-a-reconstruction-filter-for-plausible-motion-blur"
  - "025-real-time-strategy-games-a-new-ai-research-challenge"
---

# Delayed-Light Rendering for Superluminal Objects

## One-sentence takeaway

Render a world seen through a finite-speed signal (where bodies may outrun it) exactly and in real time, by solving a per-segment quadratic emission condition against recorded simulation history; the discriminant tells you when image pairs are born or annihilated.

## Why it's lovely

Why you might love this: faster-than-signal objects show several simultaneous images, pairs appear and vanish in caustic flashes, and some images play backward in time. Instead of faking that, the paper enumerates the images as roots of an equation over the sim's piecewise-linear history, so a fixed-step simulation (exactly what an engine records) turns each history segment into a quadratic. Then it ships: the method runs in a released real-time strategy game. Physics toy, rendering technique and RTS engineering in one, with a direct Anoptic hook: treat sprite/frame sequences as (x, y, t) volumes sliced by the solved emission surface and you get playback reversal and de-phasing with no animation code.

## Key ideas

- Non-relativistic setting: c is a property of the imaging signal, not a causal limit, so superluminal bodies are allowed.
- Emission condition posed against recorded state history; exact at every solved point (one stated approximation for moving observers).
- Per history segment the condition is a quadratic: the discriminant detects image-pair creation, the slope gives each image's playback direction, rate and brightness.
- Perception from an arbitrary finite set of observation events: the delay landscape is the upper envelope of their backward light cones; a monotonic emission clamp prevents regressing to older images.
- Per-vertex solves shear bodies across delay gradients; pre-generated frame sequences become (x, y, t) volumes sliced by the emission surface.

## Caveats

Exposition and implementation are planar (2D); the authors note that 3D visibility and occlusion are out of scope. Not special relativity: no Lorentz contraction or aberration, by design. Single-author paper submitted to ACM TOG; evaluation is via independent reference implementations and the shipped game.

## Links

- arXiv abs: https://arxiv.org/abs/2609.16180
- PDF: https://arxiv.org/pdf/2609.16180
- HTML: https://arxiv.org/html/2609.16180
