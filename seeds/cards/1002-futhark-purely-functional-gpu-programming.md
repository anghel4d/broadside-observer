---
title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
authors: ["Troels Henriksen", "Niels G. W. Serup", "Martin Elsman", "Fritz Henglein", "Cosmin E. Oancea"]
year: 2017
venue: "PLDI"
arxiv: null
doi: "10.1145/3062341.3062354"
source: "https://doi.org/10.1145/3062341.3062354"
topics: [array-languages, nested-data-parallelism, gpu-compilers]
seed_rank: 1002
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "languages"
relevance_score: 10
lineage: array-languages
cites:
  - title: "NESL: A Nested Data-Parallel Language (Version 3.1)"
    url: "https://www.cs.cmu.edu/~scandal/nesl.html"
    year: 1996
    arxiv: null
    doi: null
  - title: "Nested data-parallelism on the GPU"
    url: "https://doi.org/10.1145/2364527.2364563"
    year: 2012
    arxiv: null
    doi: "10.1145/2364527.2364563"
  - title: "Optimising purely functional GPU programs"
    url: "https://doi.org/10.1145/2500365.2500595"
    year: 2013
    arxiv: null
    doi: "10.1145/2500365.2500595"
  - title: "APL on GPUs: a TAIL from the past, scribbled in Futhark"
    url: "https://doi.org/10.1145/2975991.2975997"
    year: 2016
    arxiv: null
    doi: "10.1145/2975991.2975997"
see:
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
  - "045-notation-as-a-tool-of-thought"
  - "091-apl-since-1978"
  - "926-the-semantics-of-rank-polymorphism"
  - "174-comparing-parallel-functional-array-languages-programming-an"
  - "918-dual-numbers-reverse-ad-for-functional-array-languages"
---

# Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates

## One-sentence takeaway

A purely functional nested-parallel array language whose compiler generates OpenCL competitive with hand-written GPU code, via uniqueness types for in-place update plus fusion and flattening.

## Why it matters here

This is the pre-2018 array-language-on-GPU paper ano still has to beat: NESL's nested parallelism (141) plus Whitney/Iverson notation (045, 091, 926), compiling toward the same hardware Anoptic already occupies. In-place updates under a type system are the practical answer to "functional arrays without copying the world."

## Key ideas

- Uniqueness types let the programmer write in-place array updates inside parallel constructs while preserving referential transparency and equational reasoning.
- A small set of bulk-parallel operators (map, reduce, scan, redomap, …) carries fusion rules that encode strength-reduction invariants the compiler can fire reliably.
- Nested parallelism is flattened by loop interchange and distribution expressed with higher-order reasoning rather than classical array-dependence analysis, and the result still admits locality-of-reference opts.
- Evaluation on 16 benchmarks vs CUDA/OpenCL: geometric-mean 1.81× on the 12 kernels that ship a low-level reference; losses cluster on codes the CUDA already micro-optimized.
- Direct APL lineage: the 2016 TAIL/Futhark note compiles a typed array intermediate down this same pipeline.

## Caveats


## Links

- DOI: [10.1145/3062341.3062354](https://doi.org/10.1145/3062341.3062354)
- Author PDF: https://www.futhark-lang.org/publications/pldi17.pdf
- PLDI 2017 talk page: https://pldi17.sigplan.org/details/pldi-2017-papers/27/Futhark-Purely-Functional-GPU-programming-with-Nested-Parallelism-and-In-place-Array
