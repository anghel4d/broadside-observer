---
title: "Handmade Hero / Hot-Reload Engine Practice"
authors:
  - "Casey Muratori"
year: 2014
venue: "Handmade Hero"
arxiv: null
doi: null
source: "https://hero.handmade.network/"
topics:
  - tools
  - hotreload
seed_rank: 390
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "RenderDoc Graphics Debugger"
    url: "https://renderdoc.org/"
    year: 2014
    arxiv: null
    doi: null
  - title: "Tracy Frame Profiler"
    url: "https://github.com/wolfpld/tracy"
    year: 2019
    arxiv: null
    doi: null
see:
  - "394-renderdoc-graphics-debugger"
  - "386-tracy-frame-profiler"
---

# Handmade Hero / Hot-Reload Engine Practice

## One-sentence takeaway

Muratori’s series treats the game as a reloadable DLL: a tiny platform layer owns OS, audio, and input, and `LoadLibrary`/`GetProcAddress` swaps the game code while heap and assets stay put.

## Why it matters here

Anoptic is a C engine that should iterate like a scripting host without a scripting host. Handmade Hero is the playbook: stable platform ABI, no global OS calls in game code, and a frame of downtime instead of a 30-second relink. That loop is how GRID COMMAND gameplay gets tuned.

## Key ideas

- Split `platform` vs `game`: the platform never unloads; the game DLL exports `UpdateAndRender` (and friends) and is rebound when the file changes.
- Persistent memory is a pair of arenas handed across the ABI so reloads do not free the world.
- Debug builds stay simple — no hot-patch of individual functions, just a whole-module swap — which is enough for gameplay iteration.
- The public artifact is the Handmade Network project page plus the video series; there is no paper.

## Caveats

## Links

- Handmade Network: https://hero.handmade.network/
- Series index: https://handmadehero.org/
