---
title: "Implementing Set-Theoretic Types"
authors:
  - "Mickaël Laurent"
  - "Kim Nguyen"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.09927"
doi: null
source: "https://arxiv.org/abs/2611.09927"
version_reviewed: "v1"
topics:
  - "typed-programming-systems"
  - "embedded-scripting-dsls"
seed_rank: 2549
seed_batch: "frontier-2026-11-10"
reviewed: "2026-11-10"
pool: "languages"
relevance_score: 8
cites:
  - title: "Implementing Set-Theoretic Types"
    url: "https://arxiv.org/abs/2611.09927"
    year: 2026
    arxiv: "2611.09927"
    doi: null
---

# Implementing Set-Theoretic Types

## One-sentence takeaway

A modular representation for set-theoretic types (unions, intersections, negations) with revisited subtyping and tallying algorithms makes this type algebra practical to implement beyond CDuce.

## Why it matters here

Set-theoretic types fit dynamic and overloaded code, which is what ano's selection-and-mask surface and any embedded scripting layer produce. The obstacle has always been implementation complexity; a modular design with measured optimizations is the practical entry point if we ever type ano queries precisely.

## Key ideas

- **Type algebra.** Unrestricted unions, intersections and negations with decidable constraint solving (tallying).
- **Modular representation.** Types are split into components so subtyping and tallying can be implemented and optimized piecewise.
- **Algorithms revisited.** New takes on subtyping and tallying over that representation.
- **Evaluation.** Compared with the historical CDuce implementation, measuring the performance impact of design choices and optimizations.

## Caveats

Abstract-level read; the benchmark suite and how far the representation scales on large programs need the full paper.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.09927
- PDF: https://arxiv.org/pdf/2611.09927
