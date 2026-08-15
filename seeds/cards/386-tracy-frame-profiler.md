---
title: "Tracy Frame Profiler"
authors:
  - "Bartosz Taudul"
year: 2019
venue: "GitHub"
arxiv: null
doi: null
source: "https://github.com/wolfpld/tracy"
topics:
  - profiling
  - tools
seed_rank: 386
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "AMD Radeon GPU Profiler"
    url: "https://gpuopen.com/rgp/"
    year: 2017
    arxiv: null
    doi: null
  - title: "RenderDoc Graphics Debugger"
    url: "https://renderdoc.org/"
    year: 2014
    arxiv: null
    doi: null
see:
  - "388-amd-radeon-gpu-profiler"
  - "394-renderdoc-graphics-debugger"
---

# Tracy Frame Profiler

## One-sentence takeaway

Tracy is a sampling-plus-instrumentation profiler that streams zones, plots, GPU timestamps, locks, and traces to a remote viewer with nanosecond resolution and almost no design-time schema.

## Why it matters here

Anoptic / GRID COMMAND need a always-on frame profiler, not a once-a-quarter VTune session. Tracy’s C API (`ZoneScoped`, `TracyAlloc`, GPU context) drops into a C engine, shows the sim/render overlap, and is what you look at before blaming the GPU.

## Key ideas

- Hybrid: instrumentation zones for structured timelines, plus sampling call stacks, lock wait analysis, and memory plots in one capture.
- Client is a few macros; the viewer is a separate process over TCP/shared memory, so you profile a running game.
- GPU zones (Vulkan/OpenGL/D3D/Metal) sit on the same timeline as CPU zones — the feature that makes it a frame profiler, not just a CPU one.
- Manual lifetime: you decide what is a frame (`FrameMark`) so pacing bugs show up as uneven frame bars.

## Caveats

## Links

- Repository: https://github.com/wolfpld/tracy
- Manual: https://github.com/wolfpld/tracy/releases
