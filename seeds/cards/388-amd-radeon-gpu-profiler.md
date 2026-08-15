---
title: "AMD Radeon GPU Profiler"
authors:
  - "AMD GPUOpen"
year: 2017
venue: "GPUOpen"
arxiv: null
doi: null
source: "https://gpuopen.com/rgp/"
topics:
  - profiling
  - gpu
seed_rank: 388
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
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

# AMD Radeon GPU Profiler

## One-sentence takeaway

RGP captures a wavefront-level GPU timeline on Radeon hardware: when each dispatch/draw ran, how waves occupied CUs, and where caches or BARRIERS stalled them.

## Why it matters here

Tracy tells you the CPU submitted late; RGP tells you the meshlet/RC compute pass left 30% of CUs idle or bound on L2. Anoptic’s Vulkan path on AMD should have an RGP capture in the debug loop the way RenderDoc is in the correctness loop.

## Key ideas

- Hardware instruction tracing / SQTT-style data, not just `vkCmdWriteTimestamp` bars — you see wave occupancy, VALU/SALU/MEM issue, and cache counters.
- Pipeline-state and ISA views sit next to the timeline so a stall maps back to a shader.
- Pairs with Radeon Memory Visualizer and Radeon GPU Analyzer; RGP is the runtime half.
- One well-chosen frame is the unit of work; it is not a continuous low-overhead profiler like Tracy.

## Caveats

## Links

- Product page: https://gpuopen.com/rgp/
- Documentation: https://gpuopen.com/manuals/rgp_manual/rgp_manual-index/
