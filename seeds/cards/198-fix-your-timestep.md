---
title: "Fix Your Timestep!"
authors:
  - "Glenn Fiedler"
year: 2004
venue: "Gaffer on Games"
arxiv: null
doi: null
source: "https://gafferongames.com/post/fix_your_timestep/"
topics:
  - timestep
  - determinism
seed_rank: 198
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 10
cites:
  - title: "Integration Basics"
    url: "https://gafferongames.com/post/integration_basics/"
    year: 2004
    arxiv: null
    doi: null
---

# Fix Your Timestep!

## One-sentence takeaway

Fiedler’s recipe is a fixed physics `dt` consumed from a frame-time accumulator, with the leftover fraction used to interpolate the rendered state so the sim stays deterministic while the display rate floats.

## Why it matters here

Ano and GRID COMMAND need a sim clock that does not track the renderer. This post is the loop: consume `dt`, clamp the spiral of death, interpolate for display, keep lockstep possible.

## Key ideas

- Variable `dt` makes springs explode, objects tunnel, and runs unreproducible; physics must see a stable step.
- Semi-fixed stepping caps `dt` by subdividing long frames but still takes a remainder step, so results are not bit-identical.
- The “renderer produces time, simulation consumes it” accumulator integrates only in whole `dt` chunks and carries leftover time forward.
- Remaining accumulator / `dt` is the blend factor between previous and current state for rendering (including quaternion slerp).
- Clamp huge frame times (e.g. 0.25s) so a hitch cannot spiral the sim into catching up forever.

## Caveats

## Links

- Article: https://gafferongames.com/post/fix_your_timestep/
