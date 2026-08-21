---
title: "Redundant Array Computation Elimination"
authors: ["Zixuan Wang", "Liang Yuan", "Xianmeng Jiang", "Kun Li", "Junmin Xiao", "Yunquan Zhang"]
year: 2026
venue: "PACMPL (PLDI 2026)"
arxiv: "2506.21960"
doi: "10.1145/3808327"
source: "https://arxiv.org/abs/2506.21960"
topics: [array-programming-apl-bqn-q]
seed_rank: 1133
seed_batch: "craft-2026-08-21"
reviewed: "2026-08-21"
pool: "languages"
relevance_score: 9
lineage: array-programming-apl-bqn-q
cites:
  - title: "Partial Redundancy Elimination in SSA Form"
    url: "https://doi.org/10.1145/330249.330250"
    year: 1999
    arxiv: null
    doi: "10.1145/330249.330250"
  - title: "The Tensor Algebra Compiler"
    url: "https://doi.org/10.1145/3133901"
    year: 2017
    arxiv: null
    doi: "10.1145/3133901"
  - title: "A Mechanized Algebra of Verified Data Structures for Optimizing Sparse Tensor Programs"
    url: "https://doi.org/10.1145/3808261"
    year: 2026
    arxiv: null
    doi: "10.1145/3808261"
see:
  - "1132-mechanized-algebra-verified-data-structures-sparse-tensors"
  - "1062-refined-remora-constraining-array-shapes"
  - "1002-futhark-purely-functional-gpu-programming"
  - "1096-optimal-predicate-pushdown-synthesis-pusharoo"
---

# Redundant Array Computation Elimination

## One-sentence takeaway

RACE: hash-based two-level scan of loop-nest expression trees (reuse of array refs + redundancy of expressions) in linear time, with reassociation, emitting auxiliary arrays that hold the shared subcomputations.

## Why it matters here

ano lowers array/query loops to C. Pusharoo (1096) pushes predicates; Remora (1062) checks shapes; neither CSEs the `a[i]*b[j] + a[i]*c[j]` sludge that shows up in ECS systems, influence maps, and GI probes. RACE is the this-week compiler pass: not pattern-by-pattern (strength reduction of one idiom) but hierarchical detection across the nest, then materialize. Pair with 1132's sparse formats — sparse iteration makes redundant dense subexpressions even more expensive to leave in.

## Key ideas

- Level 1: data reuse between array references. Level 2: computation redundancy between expressions. Hash, do not ILP-solve dependence.
- Linear-time walk of expression trees in the nest; auxiliary arrays store results at the right loop depth.
- Aggressive reassociation to expose more redundancy than the AST as written.
- Targets general loop nests, not only affine polyhedral kernels.

## Caveats

- PACMPL PLDI 2026, DOI `10.1145/3808327`, arXiv 2506.21960 (first posted 2025-06).
- Classic compiler CSE/PRE family; the news is *array* subexpressions across imperfect nests without a dependence oracle.
- Not a substitute for fusion (Futhark) or for sparse format choice (1132).

## Links

- arXiv: [2506.21960](https://arxiv.org/abs/2506.21960)
- DOI: [10.1145/3808327](https://doi.org/10.1145/3808327)
- PLDI talk: https://pldi26.sigplan.org/details/pldi-2026-papers/84/Redundant-Array-Computation-Elimination
