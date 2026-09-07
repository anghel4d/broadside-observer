---
title: "JLIR: A Julia-Native MLIR-Inspired Intermediate Representation with Automatic JACC Kernel Extraction"
authors: ["Narasinga Rao Miniskar", "Seyong Lee", "Keita Teranishi", "Jeffrey S. Vetter"]
year: 2026
venue: "arXiv (cs.PL)"
arxiv: "2609.04585"
doi: null
source: "https://arxiv.org/abs/2609.04585"
topics: [array-programming-apl-bqn-q, batched-interpreters-ffi]
seed_rank: 1628
seed_batch: "craft-2026-09-07"
reviewed: "2026-09-07"
pool: "languages"
relevance_score: 8
lineage: array-languages
cites:
  - title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
    url: "https://arxiv.org/abs/1711.03871"
    year: 2017
    arxiv: "1711.03871"
    doi: "10.1145/3062341.3062354"
  - title: "Comparing Parallel Functional Array Languages: Programming and Performance"
    url: "https://arxiv.org/abs/2505.08906"
    year: 2025
    arxiv: "2505.08906"
    doi: null
see:
  - "1002-futhark-purely-functional-gpu-programming"
  - "1622-comparing-parallel-functional-array-languages-programming-and-performance"
---

# JLIR: A Julia-Native MLIR-Inspired Intermediate Representation with Automatic JACC Kernel Extraction

## One-sentence takeaway

An MLIR-shaped SSA IR hosted *in* Julia — dialects and passes as Julia types/methods, transforms legal on partially typed programs — plus a pass that rewrites serial loops into JACC `parallel_for` / `parallel_reduce` GPU kernels without annotations.

## Why it matters here

Ano→GPU should not have to freeze a C++ MLIR type universe before a kernel exists. JLIR is the compile-path idea: a mid-level, extensible IR that stays in the host language, extracts kernels automatically, and only then hands off to CUDA/ROCm/CPU threads. Sits on the Futhark 1002 / array-bakeoff 1622 shelf as the *dynamic-language* compiler story.

## Key ideas

- **Five built-in dialects, no C++.** `arith`, `scf`, `cf`, `memref`, `func` as ordinary Julia. `@dialect` generates the TableGen-shaped boilerplate; adding an op or lowering is a new method (multiple dispatch as MLIR’s open extension model).
- **Transform before types exist.** Julia is JIT-specialized; MLIR wants compile-time types. JLIR keeps partially typed programs transformable until concrete types show up — the mismatch the paper is solving.
- **JACCTransformPass.** Pattern-matches 1D/2D/mixed/reduction loops in SSA and emits JACC kernels from *serial* Julia, no pragmas. Pass manager also does fusion, unroll, resource estimates, serialization. Pipeline overhead reported **< 1.5 ms** per function.
- **A100 numbers.** GEMM, 2D Jacobi, Black–Scholes, LLaMA-3 kernels. Jacobi: 3023 GB/s effective bandwidth (1.56× DRAM peak via cache). Black–Scholes: 96% of hand-written Julia+CUDA. LLaMA-3 `matmul_vec`: 85× vs serial Julia. Untiled DGEMM: 87% of hand-written. Small reductions (dim=4096) fall below launch amortization.

## Caveats

Julia/JACC/ORNL, not ano’s C/SPIR-V path. Automatic extraction is loop-pattern shaped; it will not see an Anoptic irregular pass. Bandwidth-over-peak is a cache-reuse number, not a miracle. Do not remint Futhark 1002; 1622 remains the functional-array bakeoff.

## Links

- arXiv abs: https://arxiv.org/abs/2609.04585
- PDF: https://arxiv.org/pdf/2609.04585
