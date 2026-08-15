---
title: "NVIDIA Reflex Low Latency Mode"
authors:
  - "NVIDIA"
year: 2020
venue: "NVIDIA Developer"
arxiv: null
doi: null
source: "https://developer.nvidia.com/performance-rendering-tools/reflex"
topics:
  - latency
  - frame-pacing
seed_rank: 382
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
cites:
  - title: "Tracy Frame Profiler"
    url: "https://github.com/wolfpld/tracy"
    year: 2019
    arxiv: null
    doi: null
  - title: "RenderDoc Graphics Debugger"
    url: "https://renderdoc.org/"
    year: 2014
    arxiv: null
    doi: null
see:
  - "386-tracy-frame-profiler"
  - "394-renderdoc-graphics-debugger"
---

# NVIDIA Reflex Low Latency Mode

## One-sentence takeaway

Reflex just-in-time schedules the CPU so a frame arrives at the GPU with an empty render queue, cutting click-to-photon latency in GPU-bound games without dropping resolution.

## Why it matters here

Anoptic’s input → sim → submit → present chain is the same queue Reflex drains. If GRID COMMAND ever feels a frame late, the fix is not “more FPS,” it is not letting the CPU run N frames ahead of the GPU. Markers plus a frame-limit in microseconds are the integration surface.

## Key ideas

- In GPU-bound play the CPU fills a render queue; each queued frame is added latency. Reflex sleeps the simulation until the GPU will be free.
- SDK / Streamline markers (`SimulationStart`, `RenderSubmit`, `Present`, …) let the driver and the Reflex analyzer measure PC latency even when Low Latency is Off.
- `frameLimitUs` is a driver-side limiter that does not add the usual click-to-photon penalty of a naive FPS cap.
- Does not replace a good game loop (no render-ahead, consistent vsync/tearing policy); it coordinates an existing one.

## Caveats

## Links

- Reflex SDK: https://developer.nvidia.com/performance-rendering-tools/reflex
- Streamline integration: https://developer.nvidia.com/rtx/streamline/get-started
