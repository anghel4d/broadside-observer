---
title: "APEX: The APL Parallel Executor"
authors:
  - "Robert Bernecky"
year: 1997
venue: "MSc thesis, Department of Computer Science, University of Toronto"
arxiv: null
doi: null
source: "https://www.snakeisland.com/apexup.htm"
topics:
  - "array-languages"
  - "apl"
  - "compilers"
  - "loop-fusion"
seed_rank: 2489
seed_batch: "archive-2026-11-02"
reviewed: "2026-11-02"
pool: "languages"
lineage: array-languages
relevance_score: 9
cites:
  - title: "APEX: The APL Parallel Executor"
    url: "https://www.snakeisland.com/ms.pdf"
    year: 1997
    arxiv: null
    doi: null
see: ["1072-an-apl-machine", "1838-compilation-and-delayed-evaluation-in-apl", "1044-single-assignment-c-efficient-support-for-high-level-array-operations", "1045-rank-and-uniformity"]
---

# APEX: The APL Parallel Executor

## One-sentence takeaway

An APL-to-SISAL compiler shows that interpreted array code is slow because of per-primitive syntax analysis, conformability checks and temporary arrays, and that removing those (with SSA, loop fusion and "array morphology", a dataflow analysis over shapes, ranks, values and predicates) gets serial kernels competitive with FORTRAN.

## Why it matters here

ano compiles columnar array effects and inherits APL/q DNA, so this is a direct ancestor of the compiler it needs. The array-predicate idea is especially useful: if analysis proves a column is a permutation vector or already sorted, the code generator can choose a linear-time algorithm for grade or index-of instead of the general one, with the decision made at compile time.

## Key ideas

- Breaks interpreter cost into four phases per primitive (syntax analysis, conformability checking, memory management, execution) and attacks the first three.
- Array morphology: infer rank, type, shape, value and predicates (sorted, permutation, and so on) of arrays, not scalars, to pick simpler storage and better algorithms.
- Static single assignment plus loop fusion and copy elimination remove many array-valued temporaries (for example, `+/⍳N` no longer materializes N integers).
- Phrase recognition and algebraic identities catch common idioms; some matrix products use a generalization of sparse-matrix algebra.
- Proposes APL extensions (rank, cut, a monadic operand for dyadic reduction) that help both compiled and interpreted code.

## Caveats

Read the abstract, introduction and the array-morphology and optimization chapter outlines; benchmarks are late-1990s machines and SISAL's OSC backend, which is long dead (later APEX targets SAC). The thesis says "several hundred times" faster than interpreted APL while the project page says up to a thousand; quote the thesis. Dynamic features such as execute are outside what it compiles.

## Links

- [Thesis PDF](https://www.snakeisland.com/ms.pdf)
- [APEX project page](https://www.snakeisland.com/apexup.htm)
