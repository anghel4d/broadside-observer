---
title: "Modular GPU Programming with Typed Perspectives"
authors: ["Manya Bansal", "Daniel Sainati", "Joseph W. Cutler", "Saman Amarasinghe", "Jonathan Ragan-Kelley"]
year: 2026
venue: "PLDI"
arxiv: "2511.11939"
doi: "10.1145/3808290"
source: "https://arxiv.org/abs/2511.11939"
topics: [gpu-compilers, type-safety, simt, mesh-shaders-gpu-driven]
seed_rank: 1035
seed_batch: "craft-2026-08-15"
reviewed: "2026-08-15"
pool: "languages"
relevance_score: 9
lineage: vulkan-realtime-rendering
cites:
  - title: "A Core Calculus of Dependency"
    url: "https://doi.org/10.1145/292540.292555"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292555"
  - title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
    url: "https://doi.org/10.1145/3062341.3062354"
    year: 2017
    arxiv: null
    doi: "10.1145/3062341.3062354"
  - title: "Descend: A Safe GPU Systems Programming Language"
    url: "https://doi.org/10.1145/3656411"
    year: 2024
    arxiv: null
    doi: "10.1145/3656411"
see:
  - "1002-futhark-purely-functional-gpu-programming"
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "261-introduction-to-turing-mesh-shaders"
  - "015-gpu-driven-rendering-pipelines"
---

# Modular GPU Programming with Typed Perspectives

## One-sentence takeaway

Prism's type-level *perspectives* (`thread[32]`, `block[1]`, …) make warp/block collectives — Tensor Cores, barriers, user functions — modular and checkable, matching hand CUDA on H100 / 4070 Ti Super.

## Why it matters here

Anoptic mesh shaders, radiance-cascade probes, and ano GPU kernels are all "per-thread syntax, collective semantics." CUDA documents this in comments (`BlockReduce` must be called by the whole block; temp storage needs a barrier). Prism is the type system that would have caught the bug before the hang.

## Key ideas

- A perspective is a hierarchy level plus a statically aligned count: a warp is just `thread[32]`. `group` replicates a narrower view; `split` shards unequally (warp specialization / masking).
- Data has a frequency `@ thread[1]` / `@ block[1]`. Read-up / write-down: you may read broader values and write narrower ones, so a `tid`-dependent branch cannot reach `__syncthreads()`.
- `partition` / `claim` lower a shared pointer through the hierarchy and *insert* the matching barrier when the original view is restored. Async copies (`cp.async`, TMA) use the same protocol.
- Bundl (dependency-calculus core) proves type-and-perspective safety: the operational semantics gets stuck if you issue a collective with the wrong view; well-typed programs don't.
- Compiles to CUDA. sgemm ≈ cuBLAS; prefix-scan within 7% of CUB; Hopper hgemm within ~15% of cuBLAS (nvcc register-hint pass is the residual).

## Caveats

- Embedded Python DSL → CUDA, not SPIR-V. Pair with Vcc (1031) if the Anoptic path is Vulkan.
- Data-race freedom is explicitly *not* a goal (non-injective partitions race; last writer wins). Descend is the race-oriented sibling.
- Pipelines must be unrolled into named slots so the sync graph can see them — ergonomic pain the authors admit.

## Links

- arXiv: [2511.11939](https://arxiv.org/abs/2511.11939)
- DOI: [10.1145/3808290](https://doi.org/10.1145/3808290)
- Author PDF: http://www.cutler.pl/assets/prism.pdf
- PLDI 2026: https://pldi26.sigplan.org/details/pldi-2026-papers/47/Modular-GPU-Programming-with-Typed-Perspectives
