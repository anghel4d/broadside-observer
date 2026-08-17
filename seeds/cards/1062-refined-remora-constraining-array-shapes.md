---
title: "Refined Remora: Constraining Array Shapes"
authors: ["Vadym Matviichuk", "Olin Shivers"]
year: 2026
venue: "ARRAY"
arxiv: null
doi: "10.1145/3815001.3815004"
source: "https://doi.org/10.1145/3815001.3815004"
topics: [array-programming-apl-bqn-q, typed-programming-systems]
seed_rank: 1062
seed_batch: "craft-2026-08-17"
reviewed: "2026-08-17"
pool: "languages"
relevance_score: 9
lineage: array-programming-apl-bqn-q
cites:
  - title: "The Semantics of Rank Polymorphism"
    url: "https://arxiv.org/abs/1912.13451"
    year: 2019
    arxiv: "1912.13451"
    doi: null
  - title: "Remora: A Higher-Order Rank-Polymorphic Programming Language"
    url: "https://doi.org/10.1145/2784731.2784754"
    year: 2015
    arxiv: null
    doi: "10.1145/2784731.2784754"
  - title: "Futhark: purely functional GPU-programming with nested parallelism and in-place array updates"
    url: "https://doi.org/10.1145/3062341.3062354"
    year: 2017
    arxiv: null
    doi: "10.1145/3062341.3062354"
see:
  - "926-the-semantics-of-rank-polymorphism"
  - "1002-futhark-purely-functional-gpu-programming"
  - "1044-single-assignment-c-efficient-support-for-high-level-array-operations"
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
---

# Refined Remora: Constraining Array Shapes

## One-sentence takeaway

Keep Remora's decidable rank-polymorphic shape types, then hang SMT-checked refinements on them so convolution / YOLO-shaped kernels can say "this axis is `in_ch` and that one is `k×k`" without giving up inference.

## Why it matters here

ano is an array language with a Japanese/computational-linguistics surface and a standing need to type ECS columns and GPU buffers by *shape*, not just rank. 926 already sits in the library as Remora's semantics; this is the this-week increment — extra predicates (divisibility, channel matching, window sizes) discharged by an SMT solver, soundness proved, evaluated on real kernels. Futhark (1002/1033) stays the GPU codegen target; Remora refinements are the type story for the source.

## Key ideas

- Remora already has a dependent, inferable shape system derived from Iverson rank polymorphism. Expressiveness was the tax for decidability.
- Shape refinements are extra constraints on those shapes, checked by SMT rather than by the core type algorithm, so the base language stays inferable.
- Utility shown on standard kernels (convolution) and a whole application (YOLO), not just toy `+⌿`.
- Type soundness is proved for the extension — refinements cannot be used to smuggle ill-shaped programs past the compiler.

## Caveats

- ARRAY 2026 workshop paper; no arXiv. DOI 10.1145/3815001.3815004.
- SMT in the typechecker is a compile-time dependency; ano should keep refinements optional and fail loud, not silently drop them.
- Does not replace Futhark size types; it is the Remora-family design we would steal, not a drop-in crate.

## Links

- DOI: [10.1145/3815001.3815004](https://doi.org/10.1145/3815001.3815004)
- ARRAY 2026: https://pldi26.sigplan.org/details/ARRAY-2026-papers/8/Refined-Remora-Constraining-Array-Shapes
