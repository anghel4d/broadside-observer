---
title: "The Tensor Algebra Compiler"
authors:
  - "Fredrik Kjolstad"
  - "Shoaib Kamil"
  - "Stephen Chou"
  - "David Lugato"
  - "Saman Amarasinghe"
year: 2017
venue: "Proceedings of the ACM on Programming Languages 1 (OOPSLA), Article 77"
arxiv: null
doi: "10.1145/3133901"
source: "https://fredrikbk.com/publications/taco.pdf"
topics:
  - "sparse-tensors"
  - "array-compilers"
  - "code-generation"
  - "storage-formats"
  - "co-iteration"
seed_rank: 2558
seed_batch: "archive-2026-11-12"
reviewed: "2026-11-12"
pool: "languages"
relevance_score: 9
lineage: array-languages
cites: []
see:
  - "2300-parallel-sparse-outputs-for-tensor-compilers"
  - "1132-mechanized-algebra-verified-data-structures-sparse-tensors"
  - "1060-a-compiler-for-operations-on-relations-with-bag-semantics"
  - "2557-arknife-retargetable-compilation-for-tensor-kernels-via-a-unified-layout-abstraction"
---

# The Tensor Algebra Compiler

## One-sentence takeaway

taco compiles any compound tensor index-notation expression over any mix of dense and sparse operands into one fused kernel, by describing each storage format as a per-dimension stack of dense or compressed levels and deriving the loop nest from two IRs: iteration graphs (what order to walk indices) and merge lattices (how to co-iterate sparse operands as unions and intersections).

## Why it matters here

ano's columns are mostly sparse in exactly taco's sense: a component column is a compressed level over entity ids, and a query is a co-iteration that intersects (join) or unions (outer merge) several of them. Merge lattices are a clean, already-proven way to compile a relational hop or a masked array effect into a single loop without temporaries, and the per-level format descriptor is the right shape for letting ano pick dense, compressed or hashed storage per column without changing query code. It is also the ancestor of the sparse-output and verified-sparse cards already in the library.

## Key ideas

- **Formats as level stacks.** Each tensor dimension is declared dense or sparse (compressed) and dimensions are ordered; CSR, CSC, DCSR, CSF and blocked formats all fall out of the same two-level vocabulary.
- **Iteration graphs.** A directed graph over index variables, built from the expression and each operand's level order, fixes a legal loop order through the operands' coordinate trees.
- **Merge lattices.** Multiplication intersects sparse operands and addition unions them; a lattice of sub-cases says which operands are still live at each point of a co-iteration loop, so the emitted code needs no runtime merge logic.
- **One fused kernel.** Compound expressions compile into a single loop nest instead of a chain of library calls with temporaries, which avoids intermediates that can be larger than the inputs.
- **Results.** Sequential SpMV is competitive with OSKI and Eigen; parallel SpMV matches Intel MKL and pOSKI on average, reaching 72% of peak memory bandwidth against MKL's 70% and pOSKI's 88%; it also compares against SPLATT and the MATLAB Tensor Toolbox on sparse tensor kernels.

## Caveats

Tensor index notation covers only products and sums of tensors; general predicates, user functions and irregular joins with filters need later extensions (sparse iteration spaces, workspaces, scheduling languages) that came in follow-up papers. Tuned OSKI still beats taco on blocked matrices. I read the abstract, introduction and evaluation sections, not the full formal development.

## Links

- PDF (author copy): https://fredrikbk.com/publications/taco.pdf
- DOI: https://doi.org/10.1145/3133901
- Project: http://tensor-compiler.org/
