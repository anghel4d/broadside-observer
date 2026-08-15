---
title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
authors:
  - "Christopher A. Burns"
  - "Warren A. Hunt"
year: 2013
venue: "JCGT"
arxiv: null
doi: null
source: "https://jcgt.org/published/0002/02/04/"
topics:
  - visibility-buffer
seed_rank: 271
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
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
  - title: "Clustered Deferred and Forward Shading"
    url: "https://doi.org/10.1145/2159616.2159628"
    year: 2012
    arxiv: null
    doi: "10.1145/2159616.2159628"
see:
  - "144-hierarchical-z-buffer-visibility"
  - "015-gpu-driven-rendering-pipelines"
  - "090-nanite-a-deep-dive"
  - "477-clustered-deferred-and-forward-shading"
---

# The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading

## One-sentence takeaway

Store a 4-byte triangle-index + instance-ID per sample instead of a fat G-buffer, then reconstruct barycentrics and materials only for visible pixels in the deferred pass.

## Why it matters here

This is the framebuffer contract behind modern meshlet engines (and Nanite-class paths): visibility first, material fetch second. Anoptic's Vulkan deferred path should measure bandwidth against a visibility buffer, not a 20-byte G-buffer.

## Key ideas

- Classic deferred still computes surface attributes for fragments that later fail the depth test — incomplete separation of visibility and shading.
- A visibility buffer holds only who won the pixel (triangle + instance), often packed into 32 bits.
- The shading pass loads that index, computes barycentrics, interpolates vertices, and runs the material — no texture work on occluded fragments.
- Working set shrinks enough to matter on integrated / mobile GPUs and at high resolution.
- JCGT vol. 2 no. 2, pp. 55–69, 12 August 2013. PDF at the same JCGT path.

## Caveats

## Links

- JCGT: https://jcgt.org/published/0002/02/04/
- PDF: https://jcgt.org/published/0002/02/04/paper.pdf
