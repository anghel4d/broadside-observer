---
title: "ispc: A SPMD Compiler for High-Performance CPU Programming"
authors:
  - "Matt Pharr"
  - "William R. Mark"
year: 2012
venue: "InPar"
arxiv: null
doi: "10.1109/InPar.2012.6339601"
source: "https://ispc.github.io/papers/ispc_inpar_2012.pdf"
topics:
  - simd
  - compiler
seed_rank: 341
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
cites:
  - title: "Cilk: An Efficient Multithreaded Runtime System"
    url: "https://doi.org/10.1145/209936.209958"
    year: 1995
    arxiv: null
    doi: "10.1145/209936.209958"
  - title: "LLVM: A compilation framework for lifelong program analysis & transformation"
    url: "https://doi.org/10.1109/cgo.2004.1281665"
    year: 2004
    arxiv: null
    doi: "10.1109/cgo.2004.1281665"
see:
  - "430-cilk-an-efficient-multithreaded-runtime-system"
---

# ispc: A SPMD Compiler for High-Performance CPU Programming

## One-sentence takeaway

ispc compiles an SPMD dialect of C — one program instance per SIMD lane — onto SSE/AVX/NEON so engine code can look like a scalar kernel and still fill the vector unit.

## Why it matters here

Anoptic SoA systems (particles, culling, animation blend) want CUDA-style kernels on the CPU without writing intrinsics; ispc is the compiler that made that practical.

## Key ideas

- Each `foreach` iteration is a program instance. The compiler packs `gangSize` instances onto a vector register and emits a mask for divergent control flow.
- Uniform vs. varying: values that are the same across the gang stay scalar; varying values become vectors. Getting this annotation right is the performance model.
- Built on LLVM, so it targets multiple ISAs from one source and interoperates with C/C++ (no separate runtime like OpenCL on CPU).
- InPar 2012 paper (DOI 10.1109/InPar.2012.6339601); project at https://ispc.github.io/.
- Complements Cilk-style task parallelism: ispc owns the SIMD lane axis, Cilk/Taskflow own the core axis.

## Caveats

## Links

- PDF: https://ispc.github.io/papers/ispc_inpar_2012.pdf
- Project: https://ispc.github.io/
