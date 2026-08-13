---
title: "The Semantics of Rank Polymorphism"
authors:
  - "Justin Slepak"
  - "Olin Shivers"
  - "Panagiotis Manolios"
year: 2019
venue: "arXiv:cs.PL"
arxiv: "1907.00509"
doi: null
source: "https://arxiv.org/abs/1907.00509"
topics:
  - array-programming-apl-bqn-q
  - typed-programming-systems
seed_rank: 8
seed_batch: "craft-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: programming-language-foundations
cites:
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
  - title: "Comparing Parallel Functional Array Languages: Programming and Performance"
    url: "https://arxiv.org/abs/2505.08906"
    year: 2025
    arxiv: "2505.08906"
    doi: null
  - title: "APL since 1978"
    url: "https://arxiv.org/abs/2005.02839"
    year: 2020
    arxiv: "2005.02839"
    doi: "10.1145/3386319"
see:
  - "046-notation-as-a-tool-of-thought"
  - "050-a-programming-language"
  - "205-comparing-parallel-functional-array-languages-programming-an"
  - "107-apl-since-1978"
---

# The Semantics of Rank Polymorphism

## One-sentence takeaway

Remora: a core language whose static semantics *are* APL/J/K rank polymorphism — functions on rank-r arrays lift to any higher rank, with a type system that tracks shape.

## Why it matters here

This is the missing formal spine for ano. BQN/q/APL programmers already think in rank; most compilers treat that as folklore. Slepak/Shivers give the lifting rule a dynamic semantics *and* a rank-polymorphic type system that preserves shape. If ano’s masked bulk effects and scans are going to be typed rather than “just arrays,” this is the calculus, not another tensor DSL.

## Key ideas

- Rank polymorphism (Iverson): a rank-r operator automatically lifts along leading axes of higher-rank arguments.
- Remora captures that as the principal control mechanism, in the same family as APL, J, K, FISh.
- Static rank-polymorphic types: the type system tracks the shape-based lifting, with progress and preservation.
- Intended as a parallel array-language core, not a serial APL interpreter.
- Companion intro: “Introduction to Rank-polymorphic Programming in Remora” (arXiv 1912.13451).

## Caveats

- 2019 preprint / Remora line; not a BQN spec. Mapping Remora ranks onto ano’s column/mask model is design work.
- Dependent shape types are the usual compilation headache — this paper is the semantics, not the LLVM story (see 1191 for idiom lowering).
- Evergreen craft, not this week’s novelty; kept because the library had no rank-polymorphism card and ano needs one.

## Links

- arXiv: [1907.00509](https://arxiv.org/abs/1907.00509)
- PDF: https://arxiv.org/pdf/1907.00509
- Companion: https://arxiv.org/abs/1912.13451
