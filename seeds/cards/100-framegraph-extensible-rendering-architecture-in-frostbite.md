---
title: "FrameGraph: Extensible Rendering Architecture in Frostbite"
authors:
  - "Yuriy O'Donnell"
year: 2017
venue: "GDC"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1024612/FrameGraph-Extensible-Rendering-Architecture-in"
topics:
  - graphics
  - engine
seed_rank: 100
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
cites:
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "Nanite: A Deep Dive"
    url: "https://advances.realtimerendering.com/s2021/Karis_Nanite_SIGGRAPH_Advances_2021_final.pdf"
    year: 2021
    arxiv: null
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
  - "090-nanite-a-deep-dive"
---

# FrameGraph: Extensible Rendering Architecture in Frostbite

## One-sentence takeaway

Frostbite's FrameGraph is a DAG of render passes and transient resources with setup, compile, and execute phases, so features stay modular while the compiler aliases memory and inserts barriers.

## Why it matters here

Anoptic/engine render graphs need exactly this split: authors declare passes and resources; the frame compiler owns lifetimes, aliasing, and async compute.

## Key ideas

- One engine must serve many Frostbite games, so rendering features cannot be a single hardcoded pass list.
- Passes declare reads/writes during setup; compile derives resource lifetimes, barriers, and ESRAM/aliasing; execute runs the compiled graph.
- Transient resources are allocated for their live range only; a cited 4K DX12 example drops working set from about 1042 MB to 472 MB.
- A blackboard lets decoupled features exchange handles without a central pass object knowing every consumer.
- GDC 2017 talk by Yuriy O'Donnell (Frostbite / EA); GDC Vault is the canonical landing page.

## Caveats

## Links

- GDC Vault: https://www.gdcvault.com/play/1024612/FrameGraph-Extensible-Rendering-Architecture-in
