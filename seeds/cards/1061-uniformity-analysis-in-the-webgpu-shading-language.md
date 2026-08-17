---
title: "Uniformity Analysis in the WebGPU Shading Language"
authors: ["James Lee-Jones", "John Wickerson", "Alastair F. Donaldson"]
year: 2026
venue: "PLDI"
arxiv: null
doi: "10.1145/3808331"
source: "https://doi.org/10.1145/3808331"
topics: [vulkan-realtime-rendering, typed-programming-systems]
seed_rank: 1061
seed_batch: "craft-2026-08-17"
reviewed: "2026-08-17"
pool: "languages"
relevance_score: 9
lineage: vulkan-realtime-rendering
cites:
  - title: "Modular GPU Programming with Typed Perspectives"
    url: "https://arxiv.org/abs/2511.11939"
    year: 2026
    arxiv: "2511.11939"
    doi: null
  - title: "WebGPU Shading Language"
    url: "https://www.w3.org/TR/WGSL/"
    year: 2026
    arxiv: null
    doi: null
  - title: "Alloy: A Language and Tool for Exploring Software Designs"
    url: "https://alloytools.org/"
    year: 2012
    arxiv: null
    doi: null
see:
  - "1035-modular-gpu-programming-with-typed-perspectives"
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
---

# Uniformity Analysis in the WebGPU Shading Language

## One-sentence takeaway

TinyWGSL is the first operational definition of WGSL barrier divergence; the paper found soundness/precision holes in the spec (four accepted fixes) and an Alloy model that caught a Chromium Tint bug — because WebGPU cannot treat a hung `workgroupBarrier` as "undefined behaviour."

## Why it matters here

GRID COMMAND is a *browser* RTS. A divergent barrier in WGSL does not "just" UB — it can wedge the GPU and force an OS reset, which the WebGPU spec must reject statically. Prism (1035) types warp/block collectives for native shaders; this is the sibling for the web path: know what Tint will accept, copy the TinyWGSL rules into our own WGSL codegen, and don't ship a compute pass that hangs a player's machine. Spec fixes already landed.

## Key ideas

- Uniformity analysis is a static check that every thread in a workgroup that reaches a barrier (or derivative/subgroup op) does so together. Native GPU APIs leave divergence undefined; WebGPU must refuse it.
- TinyWGSL: a core calculus whose operational semantics *defines* barrier divergence independently of the analysis, so soundness has a target.
- The WGSL spec's original analysis was circular (non-uniform = "what we reject") and both unsound and imprecise; four changes were accepted by the editors.
- Alloy encoding generates tests against Chromium's implementation: spec–impl mismatches plus one real Tint bug.

## Caveats

- No arXiv id. Author PDF at Imperial / Lee-Jones pages. PACMPL 10(PLDI) article 253, doi 10.1145/3808331.
- Analysis is for WGSL, not SPIR-V; native Vulkan mesh/compute still need Prism-style discipline or vendor UB.
- Alloy testing is Chromium-specific; Firefox/Safari WGSL front-ends are not in the paper's harness.

## Links

- DOI: [10.1145/3808331](https://doi.org/10.1145/3808331)
- Author PDF: https://www.doc.ic.ac.uk/~afd/papers/2026/PLDI.pdf
- PLDI 2026: https://pldi26.sigplan.org/details/pldi-2026-papers/88/Uniformity-Analysis-in-the-WebGPU-Shading-Language
