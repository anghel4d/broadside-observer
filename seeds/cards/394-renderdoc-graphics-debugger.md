---
title: "RenderDoc Graphics Debugger"
authors:
  - "Baldur Karlsson"
year: 2014
venue: "renderdoc.org"
arxiv: null
doi: null
source: "https://renderdoc.org/"
topics:
  - tools
  - graphics
seed_rank: 394
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 7
cites:
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "Tracy Frame Profiler"
    url: "https://github.com/wolfpld/tracy"
    year: 2019
    arxiv: null
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
  - "386-tracy-frame-profiler"
---

# RenderDoc Graphics Debugger

## One-sentence takeaway

RenderDoc captures a single frame of Vulkan/D3D/OpenGL/Metal work and lets you inspect every command, binding, shader disassembly, and output target after the fact.

## Why it matters here

Anoptic is a Vulkan engine; a bad descriptor set or a meshlet pass that writes the wrong image is a capture, not a guess. RenderDoc is the correctness tool (bindings, images, pipeline state); Tracy/RGP are the performance tools. Keep all three.

## Key ideas

- In-process or injected capture: replay the recorded command stream without the original app, with pixel history and shader debug.
- API-agnostic UI over Vulkan, D3D11/12, OpenGL, GLES, and (later) Metal — one workflow across backends.
- Overlay / hotkey capture is the loop: hit F12, inspect the draw that looks wrong, fix the engine, recapture.
- Open source (MIT) and the de-facto industry frame debugger outside vendor-only tools.

## Caveats

## Links

- Site: https://renderdoc.org/
- Source: https://github.com/baldurk/renderdoc
