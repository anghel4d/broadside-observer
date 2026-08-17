---
title: "Global Pass Barriers Without Per-Resource RHI Tracking: A Cross-Vendor Study with Blade"
authors: ["Dzmitry Malyshau"]
year: 2026
venue: "arXiv"
arxiv: "2607.26506"
doi: null
source: "https://arxiv.org/abs/2607.26506"
topics: [vulkan-realtime-rendering, lockfree-game-parallelism]
seed_rank: 1059
seed_batch: "craft-2026-08-17"
reviewed: "2026-08-17"
pool: "engines"
relevance_score: 10
lineage: vulkan-realtime-rendering
cites:
  - title: "FrameGraph: Extensible Rendering Architecture in Frostbite"
    url: "https://www.gdcvault.com/play/1024612/FrameGraph-Extensible-Rendering-Architecture-in"
    year: 2017
    arxiv: null
    doi: null
  - title: "VK_KHR_unified_image_layouts"
    url: "https://registry.khronos.org/vulkan/specs/latest/man/html/VK_KHR_unified_image_layouts.html"
    year: 2025
    arxiv: null
    doi: null
  - title: "WebGPU"
    url: "https://www.w3.org/TR/webgpu/"
    year: 2025
    arxiv: null
    doi: null
see:
  - "100-framegraph-extensible-rendering-architecture-in-frostbite"
  - "015-gpu-driven-rendering-pipelines"
  - "1035-modular-gpu-programming-with-typed-perspectives"
---

# Global Pass Barriers Without Per-Resource RHI Tracking: A Cross-Vendor Study with Blade

## One-sentence takeaway

Keep images in GENERAL, issue one global pass-boundary barrier (optionally scoped from surrounding pass kinds, not from a resource table), and let the render graph — not the RHI — own aliasing and true hazards; removing fifteen redundant barriers cut GPU span ~29–32% on discrete NVIDIA/AMD independent compute.

## Why it matters here

Anoptic's Vulkan frame graph is being built *this week*. wgpu-style per-resource trackers are some of the hottest CPU code in that stack; Blade shows a tracking-free RHI is a real contract if the engine already knows its pass DAG. GRID COMMAND (browser) still needs wgpu's safety, but the native engine should not duplicate it. Concrete numbers: 29.3% RTX 5070 / 32.3% RX 7900 XT on independent compute; RADV source explains why `ALL_COMMANDS` expands into CS+PS partial flushes plus CB/DB meta even when no image is named.

## Key ideas

- Four independent axes: placement, memory scope (global vs per-resource), stage/access masks, image layouts. Blade picks global + persistent GENERAL + optional pass-kind narrowing.
- `manual_barriers` on the encoder (not a group object) is the field-report fix: planar reflection vs main view were serialized on RADV solely by automatic inter-pass barriers.
- Pass-kind scoped barriers derive src from the union of pass kinds since the last barrier and dst from the pass being opened — still zero resource state.
- Negative result is load-bearing: on a Radeon 780M, removing redundant render barriers *increased* span ~42% at 32 passes. Coarse barriers are a measured policy, not a default.
- Unified image layouts keep DCC on RDNA10+ GENERAL for single-sampled colour; FMASK is unconditionally lost — MSAA colour is the hole.

## Caveats

- Single-queue, no tiler (Adreno/Mali/PowerVR). Do not copy the numbers onto mobile.
- wgpu end-to-end gaps cannot be blamed on tracking alone (validation, bind groups, command IR).
- Paper is July 2026 arXiv, not a venue yet.

## Links

- arXiv: [2607.26506](https://arxiv.org/abs/2607.26506)
- Blade: https://github.com/kvark/blade
