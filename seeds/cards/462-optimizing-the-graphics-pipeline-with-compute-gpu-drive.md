---

title: "Optimizing the Graphics Pipeline with Compute — GPU-Driven Rendering Techniques"
authors:
  - "Graham Wihlidal"
year: 2016
venue: "GDC / Frostbite"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1023275/Optimizing-the-Graphics-Pipeline-with"
topics:
  - gpu-driven
  - occlusion
  - meshlets
seed_rank: 462
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "Nanite: A Deep Dive"
    url: "https://advances.realtimerendering.com/"
    year: 2021
    arxiv: null
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
  - "090-nanite-a-deep-dive"
---
# Optimizing the Graphics Pipeline with Compute — GPU-Driven Rendering Techniques

## One-sentence takeaway

Frostbite-era compute culling/compaction that popularized GPU-resident scene submission alongside Haar/Aaltonen.

## Why it matters here

Complements the 2015 Advances talk and foreshadows Nanite-style cluster pipelines.

## Key ideas

- Move cull/LOD/compaction into compute.
- Indirect execute with compacted draw lists.
- Depth pyramid / Hi-Z occlusion tests on GPU.

## Caveats

- Talk availability varies; pair with Haar/Aaltonen PDF.
- Mesh shaders supersede some older patterns.
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

- URL: https://www.gdcvault.com/play/1023275/Optimizing-the-Graphics-Pipeline-with
