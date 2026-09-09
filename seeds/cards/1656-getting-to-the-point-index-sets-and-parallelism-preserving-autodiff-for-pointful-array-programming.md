---
title: "Getting to the Point. Index Sets and Parallelism-Preserving Autodiff for Pointful Array Programming"
authors: ["Adam Paszke", "Daniel Johnson", "David Duvenaud", "Dimitrios Vytiniotis", "Alexey Radul", "Matthew Johnson", "Jonathan Ragan-Kelley", "Dougal Maclaurin"]
year: 2021
venue: "PACMPL (ICFP 2021)"
arxiv: "2104.05372"
doi: "10.1145/3473593"
source: "https://arxiv.org/abs/2104.05372"
topics: [array-programming-apl-bqn-q, typed-programming-systems]
seed_rank: 1656
seed_batch: "craft-2026-09-09"
reviewed: "2026-09-09"
pool: "languages"
relevance_score: 10
lineage: pointful-array-dex
cites:
  - title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
    url: "https://doi.org/10.1145/3062341.3062354"
    year: 2017
    arxiv: "1711.03871"
    doi: "10.1145/3062341.3062354"
  - title: "Comparing Parallel Functional Array Languages: Programming and Performance"
    url: "https://arxiv.org/abs/2505.08906"
    year: 2025
    arxiv: "2505.08906"
    doi: null
  - title: "AD for an Array Language with Nested Parallelism"
    url: "https://arxiv.org/abs/2202.10297"
    year: 2022
    arxiv: "2202.10297"
    doi: "10.1109/sc41404.2022.00063"
see:
  - "1002-futhark-purely-functional-gpu-programming"
  - "1622-comparing-parallel-functional-array-languages-programming-and-performance"
  - "1623-ad-for-an-array-language-with-nested-parallelism"
  - "1044-single-assignment-c-efficient-support-for-high-level-array-operations"
  - "1062-refined-remora-constraining-array-shapes"
---

# Getting to the Point. Index Sets and Parallelism-Preserving Autodiff for Pointful Array Programming

## One-sentence takeaway

Dex treats arrays as eagerly-memoized functions on *typed index sets*, so pointful indexing, currying, and parallelism-preserving autodiff coexist — the array-language craft leftover that is not another Futhark/SaC/Accelerate bakeoff.

## Why it matters here

ano wants columnar/array verbs with explicit indices (BQN/q twin), not only bulk combinators. Last Craft minted the bakeoff (1622) and Futhark nested-parallel AD (1623); Dex is the *pointful* design: typed index sets as the API, memoized functions as arrays, AD that does not smash nested parallelism. Steal the index-set discipline for ano's masked updates and ranked axes.

## Key ideas

- **Arrays as memoized functions on index sets.** Abstract function manipulations (currying, partial application) work on arrays because the index space is a first-class type, not an implicit shape vector.
- **Pointful without losing parallel structure.** Write loops/indexing that still lower to data-parallel kernels; contrast with combinator-only APL/Futhark style.
- **Parallelism-preserving autodiff.** Reverse/forward AD rules that keep the nested-parallel cost model intact — complementary to 1623's tape-free Futhark AD.
- **Dex as the living artifact.** Not just a calculus: an implementation that stress-tests the design for real array programs.

## Caveats

PACMPL/ICFP 2021 / DOI `10.1145/3473593` / arXiv `2104.05372`. Dex is research software, not a drop-in ano runtime. Do not remint Futhark 1002, SaC 1044, Remora 1062, array bakeoff 1622, or nested-parallel AD 1623 — this is the pointful/index-set leftover.

## Links

- arXiv abs: https://arxiv.org/abs/2104.05372
- PDF: https://arxiv.org/pdf/2104.05372
- DOI: https://doi.org/10.1145/3473593
