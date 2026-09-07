---
title: "Comparing Parallel Functional Array Languages: Programming and Performance"
authors:
  - "David van Balen"
  - "Tiziano De Matteis"
  - "Clemens Grelck"
  - "Troels Henriksen"
  - "Aaron W. Hsu"
  - "Gabriele K. Keller"
  - "Thomas Koopman"
  - "Trevor L. McDonell"
  - "Cosmin Oancea"
  - "Sven-Bodo Scholz"
  - "Artjoms Sinkarovs"
  - "Tom Smeding"
  - "Phil Trinder"
  - "Ivo Gabe de Wolff"
  - "Alexandros Nikolaos Ziogas"
year: 2025
venue: "arXiv (cs.PL)"
arxiv: "2505.08906"
doi: null
source: "https://arxiv.org/abs/2505.08906"
topics: [array-programming-apl-bqn-q, batched-interpreters-ffi]
seed_rank: 1622
seed_batch: "craft-2026-09-07"
reviewed: "2026-09-07"
pool: "languages"
relevance_score: 10
lineage: array-languages
cites:
  - title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
    url: "https://arxiv.org/abs/1711.03871"
    year: 2017
    arxiv: "1711.03871"
    doi: "10.1145/3062341.3062354"
  - title: "Single Assignment C: Efficient Support for High-Level Array Operations in a Functional Setting"
    url: "https://doi.org/10.1017/S0956796802004458"
    year: 2003
    arxiv: null
    doi: "10.1017/S0956796802004458"
  - title: "NESL: A Nested Data-Parallel Language (Version 3.1)"
    url: "https://www.cs.cmu.edu/~blelloch/papers/Nesl3.1.pdf"
    year: 1995
    arxiv: null
    doi: null
  - title: "Rank and Uniformity"
    url: "https://doi.org/10.1145/206944.206968"
    year: 1995
    arxiv: null
    doi: "10.1145/206944.206968"
see:
  - "1002-futhark-purely-functional-gpu-programming"
  - "1044-single-assignment-c-efficient-support-for-high-level-array-operations"
  - "1045-rank-and-uniformity"
  - "1062-refined-remora-constraining-array-shapes"
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
  - "1497-an-array-oriented-language-with-static-rank-polymorphism"
---

# Comparing Parallel Functional Array Languages: Programming and Performance

## One-sentence takeaway

Head-to-head of Accelerate, APL, DaCe, Futhark, and SaC on N-body, MultiGrid, Quickhull, and Flash Attention: one source, CPU+GPU backends, 39 instances, and an autopsy of *why* each language wins or loses on each kernel and machine.

## Why it matters here

Ano’s array/kernel story is still a pile of Futhark 1002 / SaC 1044 / Remora 1062 / NESL 141 / rank-polymorphism 1045+1497 without a bakeoff of the living compilers on the same four hard kernels. This is that bakeoff — steal fusion, flattening, and backend-split choices; do not treat any one language as the default.

## Key ideas

- **Five languages, two machines.** Accelerate (Haskell/GPU), APL, DaCe (state-machine SDF + GPU), Futhark, SaC. Targets: 32-core AMD EPYC 7313 and NVIDIA A30. Same four benchmarks generate both multicore and GPU executables from one source each.
- **The four kernels are not GEMM theater.** N-body (irregular-ish n²), MultiGrid (solver, communication), Quickhull (nested/irregular), Flash Attention (tiled attention). 39 problem instances total.
- **Source omits the architecture.** The claim is that functional array code is shorter than the hand-optimized baselines *because* it does not encode the machine; the compiler re-specializes. Porting a kernel to a new GPU then means retuning the compiler, not rewriting the math.
- **Performance is explained, not averaged.** The paper spends the pages on *which* fusion/flattening/memory choice made each language fast or slow on each pair (kernel × device), which is the useful part for ano: copy the winning combination, not the mean speedup.

## Caveats

Preprint bakeoff, not a language to adopt. APL and DaCe are not Anoptic’s C path; Futhark/SaC are the closer lineage. Instance set and A30-era GPU will age. Do not remint Futhark 1002, SaC 1044, Hui Rank 1045, Remora 1062, NESL 141, or 1497.

## Links

- arXiv abs: https://arxiv.org/abs/2505.08906
- PDF: https://arxiv.org/pdf/2505.08906
