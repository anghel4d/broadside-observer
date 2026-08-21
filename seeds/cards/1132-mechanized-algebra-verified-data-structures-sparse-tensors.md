---
title: "A Mechanized Algebra of Verified Data Structures for Optimizing Sparse Tensor Programs"
authors: ["Amanda Liu", "Gilbert Louis Bernstein", "Shoaib Kamil", "Adam Chlipala", "Jonathan Ragan-Kelley"]
year: 2026
venue: "PACMPL (PLDI 2026)"
arxiv: null
doi: "10.1145/3808261"
source: "https://doi.org/10.1145/3808261"
topics: [array-programming-apl-bqn-q, typed-programming-systems]
seed_rank: 1132
seed_batch: "craft-2026-08-21"
reviewed: "2026-08-21"
pool: "languages"
relevance_score: 9
lineage: array-programming-apl-bqn-q
cites:
  - title: "The Tensor Algebra Compiler"
    url: "https://doi.org/10.1145/3133901"
    year: 2017
    arxiv: null
    doi: "10.1145/3133901"
  - title: "A Verified Compiler for a Functional Tensor Language"
    url: "https://doi.org/10.1145/3656390"
    year: 2024
    arxiv: null
    doi: "10.1145/3656390"
  - title: "Refined Remora: Constraining Array Shapes"
    url: "https://doi.org/10.1145/3815001.3815004"
    year: 2026
    arxiv: null
    doi: "10.1145/3815001.3815004"
see:
  - "1062-refined-remora-constraining-array-shapes"
  - "1002-futhark-purely-functional-gpu-programming"
  - "1033-towards-efficient-hash-maps-in-functional-array-languages"
  - "918-dual-numbers-reverse-ad-for-functional-array-languages"
  - "1037-bonsai-compiling-queries-to-pruned-tree-traversals"
---

# A Mechanized Algebra of Verified Data Structures for Optimizing Sparse Tensor Programs

## One-sentence takeaway

Extend ATL with a *levelized* sparse-format algebra: per-dimension encode/access/iterate plus a soundness theorem used as an adjoint rewrite, so a dense kernel schedules into a proven-equivalent sparse program.

## Why it matters here

ano is an array/columnar ECS language. Remora (1062) is *shape* refinements; Futhark hashmap (1033) is a *structure*; Bonsai (1037) is *query* traversal. None of them is "CSR vs COO vs CSF as composable, verified rewrites." This PLDI 2026 paper (Liu/Bernstein/Kamil/Chlipala/JRK) is the sparse-format companion to ATL's dense verified scheduler: start dense, discharge a format adjoint, emit iteration over compressed levels. That is the this-week recipe for ano's sparse ECS columns and GRID COMMAND influence/flow fields that should not densify.

## Key ideas

- A level is an abstract sparse dimension: encoding routine, access, iteration, and laws that it represents a dense fiber.
- Format-agnostic multi-dimensional compress/decompress, composed from a small proven set of level instances (the usual canonical formats).
- Top-level soundness is an adjoint-pair rewrite inside ATL's existing schedule system — not a new compiler.
- You optimize by picking formats, not by rewriting the kernel by hand.

## Caveats

- PACMPL 10(PLDI) 2026, DOI `10.1145/3808261`. No arXiv. PDF: https://adam.chlipala.net/papers/AtlPLDI26/
- Coq/ATL artifact, not a C drop-in. Steal the *level* interface and the adjoint-rewrite idea for ano; do not wait on a mechanized kernel.
- Skip Prism/Scion/Bonsai/Remora remints; this is sparse *data structures*, not GPU perspectives or BVH layouts.

## Links

- DOI: [10.1145/3808261](https://doi.org/10.1145/3808261)
- PDF: https://adam.chlipala.net/papers/AtlPLDI26/
- Artifact: https://doi.org/10.5281/zenodo.19657283
