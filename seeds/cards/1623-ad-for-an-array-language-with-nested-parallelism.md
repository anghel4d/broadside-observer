---
title: "AD for an Array Language with Nested Parallelism"
authors: ["Robert Schenck", "Ola Rønning", "Troels Henriksen", "Cosmin E. Oancea"]
year: 2022
venue: "SC22"
arxiv: "2202.10297"
doi: "10.1109/sc41404.2022.00063"
source: "https://arxiv.org/abs/2202.10297"
topics: [array-programming-apl-bqn-q]
seed_rank: 1623
seed_batch: "craft-2026-09-07"
reviewed: "2026-09-07"
pool: "languages"
relevance_score: 9
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

# AD for an Array Language with Nested Parallelism

## One-sentence takeaway

Tape-free reverse AD for a nested-parallel GPU array language: re-execute a scope on the return sweep to bring intermediates back, flatten perfect nests so that re-execution is free, and rewrite `map`/`reduce`/`scan`/`scatter`/`histogram` by combinator-specific rules.

## Why it matters here

Ano/Futhark-lineage sim kernels will want autodiff (forces, inverse kinematics, learned controllers) without a tape of irregular nested arrays bouncing through global memory. This is the compiler recipe — implemented inside a Futhark-compiler clone, aimed at GPU — sitting on the 1002 / 1622 array shelf.

## Key ideas

- **No tape, re-execute the scope.** Reverse AD needs intermediates. Instead of stashing them, the return sweep re-runs the forward sweep of the entered lexical scope. Overhead is at worst proportional to nest depth (constant for a non-recursive program). Perfect nests other than loops introduce *no* extra work; flattening produces those nests.
- **Loops still checkpoint.** Loop-carried variables must be saved because the return sweep runs iterations backwards. A user strip-mining factor buys a simple time–space tradeoff (not the full logarithmic Siskind–Pearlmutter optimum).
- **Combinator rewrite rules.** `map` is the hard one: a free-variable read becomes an accumulation, which is not a classical SOAC. The compiler then rewrites common accumulators into reductions and generalized histograms — application-level wins near 10× on GMM/LSTM.
- **Numbers given (SC22).** Sequential AD competitive with Tapenade on ADBench; GPU competitive with Enzyme on RSBench/XSBench; substantial GPU speedups vs PyTorch on GMM, LSTM, and sparse K-means.

## Caveats

Futhark-shaped second-order array language, non-recursive. Not PyTorch, not Enzyme-on-CUDA-C, not a tape you can inspect. Map-with-free-vars is the residual pain. Do not remint Futhark 1002; 1622 is the living-compiler bakeoff this sits under.

## Links

- arXiv abs: https://arxiv.org/abs/2202.10297
- PDF: https://arxiv.org/pdf/2202.10297
- DOI: https://doi.org/10.1109/sc41404.2022.00063
