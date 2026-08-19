---
title: "RCGP: Resource Contracts for Graphics Programming"
authors: ["Venkataram Sivaram", "Sai Praveen Bangaru", "Ravi Ramamoorthi", "Tzu-Mao Li", "Jonathan Ragan-Kelley", "Frédo Durand"]
year: 2026
venue: "ACM TOG / SIGGRAPH 2026"
arxiv: null
doi: "10.1145/3811317"
source: "https://iveevi.github.io/rcgp/"
topics: [vulkan-realtime-rendering, typed-programming-systems]
seed_rank: 1090
seed_batch: "craft-2026-08-19"
reviewed: "2026-08-19"
pool: "engines"
relevance_score: 10
lineage: vulkan-realtime-rendering
cites:
  - title: "FrameGraph: Extensible Rendering Architecture in Frostbite"
    url: "https://www.gdcvault.com/play/1024612/FrameGraph-Extensible-Rendering-Architecture-in"
    year: 2017
    arxiv: null
    doi: null
  - title: "Vulkan 1.4 Specification"
    url: "https://registry.khronos.org/vulkan/specs/latest/html/vkspec.html"
    year: 2025
    arxiv: null
    doi: null
  - title: "Slang: Language Mechanisms for Extensible Real-time Shading Systems"
    url: "https://dl.acm.org/doi/10.1145/3197517.3201380"
    year: 2018
    arxiv: null
    doi: "10.1145/3197517.3201380"
see:
  - "100-framegraph-extensible-rendering-architecture-in-frostbite"
  - "015-gpu-driven-rendering-pipelines"
  - "1059-global-pass-barriers-without-per-resource-rhi-tracking"
  - "1035-modular-gpu-programming-with-typed-perspectives"
  - "1031-no-more-shading-languages-compiling-cpp-to-vulkan-shaders"
---

# RCGP: Resource Contracts for Graphics Programming

## One-sentence takeaway

Declare Vulkan resources once as statically introspectable contracts (type, layout, binding, sync); compose modules with combinators that check compatibility; discharge the leftover obligations with witnesses — descriptor mismatches, layout drift, and missing barriers become compile-time errors in C++.

## Why it matters here

Anoptic's Vulkan frame graph is being wired *this week*. Last Craft kept Blade (1059) for tracking-free *barriers*; RCGP is the complementary contract: host + shader agree on descriptors and layouts without a runtime validator. Prototype is C++/Vulkan, not a new shading language — pairs with Vcc (1031) and Prism (1035) without replacing either. GRID COMMAND's WebGPU path still needs wgpu safety; the native engine should not duplicate it.

## Key ideas

- Single-source-of-truth resource declarations become contracts exported/imported by modules (shaders, pipelines, descriptor sets, command streams).
- Combinators compose modules and compute *residual* contracts — leftover obligations the caller still owes.
- Witnesses discharge residuals: a barrier, a layout transition, a matching bind.
- Converts the three late-failure classes that eat engine weeks (wrong descriptor type, layout drift, missing sync) into C++ diagnostics.

## Caveats

- Prototype, not a drop-in RHI. You still write the combinators.
- Does not replace a pass DAG; Blade's global-barrier policy and RCGP's contracts compose rather than compete.
- No arXiv; TOG journal-track SIGGRAPH 2026. Implementation: https://github.com/iveevi/rcgp

## Links

- Project: https://iveevi.github.io/rcgp/
- Code: https://github.com/iveevi/rcgp
- DOI: [10.1145/3811317](https://doi.org/10.1145/3811317)
