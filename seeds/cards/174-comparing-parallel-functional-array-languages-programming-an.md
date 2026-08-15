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
venue: "arXiv:cs.PL"
arxiv: "2505.08906"
doi: null
source: "https://arxiv.org/abs/2505.08906"
topics:
  - array-programming-apl-bqn-q
seed_rank: 174
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
cites:
  - title: "APL since 1978"
    url: "https://arxiv.org/abs/2005.02839"
    year: 2020
    arxiv: "2005.02839"
    doi: "10.1145/3386319"
  - title: "Notation as a Tool of Thought"
    url: "https://doi.org/10.1145/358896.358899"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
  - title: "A Programming Language"
    url: "https://www.jsoftware.com/papers/APL.htm"
    year: 1962
    arxiv: null
    doi: null
see:
  - "091-apl-since-1978"
  - "045-notation-as-a-tool-of-thought"
  - "049-a-programming-language"
---

# Comparing Parallel Functional Array Languages: Programming and Performance

## One-sentence takeaway

The authors implement N-body, MultiGrid, Quickhull, and Flash Attention in Accelerate, APL, DaCe, Futhark, and SaC, then compare multicore and GPU performance from one source per language against hand-tuned baselines.

## Why it matters here

Ano/BQN twins live in this family: the claim to test is whether a single rank-polymorphic source can produce competitive CPU and GPU kernels. This paper is the current head-to-head.

## Key ideas

- Five functional array languages are compared systematically on design, implementation, and generated parallel code.
- Four benchmarks span distinct parallel models: N-body, MultiGrid, Quickhull, and Flash Attention.
- Functional array programs are argued to be shorter because they omit architecture-specific scheduling; the compilers emit both 32-core EPYC and NVIDIA A30 binaries from one source.
- Performance is reported across 39 benchmark instances, with a per-language autopsy of why each wins or loses on each kernel and device.
- Mature members of the family are claimed to be competitive with conventional hand-optimized techniques, not merely more elegant.

## Caveats

## Links

- arXiv: [2505.08906](https://arxiv.org/abs/2505.08906)
