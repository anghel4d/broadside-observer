---
title: "Dual-Numbers Reverse AD for Functional Array Languages"
authors:
  - "Tom Smeding"
  - "Mikołaj Konarski"
  - "Simon Peyton Jones"
  - "Andrew Fitzgibbon"
year: 2025
venue: "arXiv:cs.PL"
arxiv: "2507.12640"
doi: null
source: "https://arxiv.org/abs/2507.12640"
topics:
  - array-programming-apl-bqn-q
  - typed-programming-systems
seed_rank: 1
seed_batch: "curiosity-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "Comparing Parallel Functional Array Languages: Programming and Performance"
    url: "https://doi.org/10.1145/3652598.3652618"
    year: 2024
    arxiv: null
    doi: null
  - title: "Notation as a Tool of Thought"
    url: "https://doi.org/10.1145/358896.358899"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
  - title: "Scans as Primitive Parallel Operations"
    url: "https://doi.org/10.1109/TC.1986.1676477"
    year: 1986
    arxiv: null
    doi: null
  - title: "A Programming Language"
    url: "https://doi.org/10.1145/1460833.1460872"
    year: 1962
    arxiv: null
    doi: null
see:
  - "205-comparing-parallel-functional-array-languages-programming-an"
  - "046-notation-as-a-tool-of-thought"
  - "383-scans-as-primitive-parallel-operations"
  - "050-a-programming-language"
---

# Dual-Numbers Reverse AD for Functional Array Languages

## One-sentence takeaway

Dual-numbers reverse-mode AD that treats multidimensional arrays as first-class, via a bulk-operation transform that vectorises away the higher-order glue AD usually needs.

## Why it matters here

Why you might love this: it is array-language engineering with SPJ and Fitzgibbon on the author list — reverse AD that wants `build` / `gather` / `scatter` rather than a scalar tape. That is exactly the grain ano already thinks in (masked bulk effects, scans, first-order kernels). If Anoptic ever differentiates a procedural field, a radiance residual, or a standing-rule objective, this is the compilation shape, not PyTorch-style tracing.

## Key ideas

- Dual-numbers reverse AD is simple but naive on arrays; they recover speed by a semantics-preserving bulk-operation transform (BOT) that vectorises the program first.
- The AD lifting itself stays mostly first-order; higher-order array combinators are restricted to a chosen set: `build`, `gather`, `scatter`.
- Symbolic interpretation closes the pipeline so the reverse pass compiles rather than interpreting a tape.
- The trade: you lose freely higher-order dual-numbers AD, and gain array performance with little overhead.
- Grain matches functional array languages (Futhark-adjacent) more than scalar autograd.

## Caveats

- Explicitly drops general higher-order code; do not cite this as a universal reverse-AD recipe.
- 2025 preprint; check the latest version before pinning algorithm details.
- No claim this is implemented in BQN/ano — the bridge is grain and combinators, not a drop-in compiler.

## Links

- arXiv: [2507.12640](https://arxiv.org/abs/2507.12640)
- PDF: https://arxiv.org/pdf/2507.12640
