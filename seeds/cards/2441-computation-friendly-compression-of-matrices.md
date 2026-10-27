---
title: "Computation-Friendly Compression of Matrices: Speeding up Linear and Boolean Algebra"
authors:
  - "Gonzalo Navarro"
year: 2026
venue: "arXiv preprint (cs.DS), survey"
arxiv: "2610.35362"
doi: null
source: "https://arxiv.org/abs/2610.35362"
topics:
  - "compressed-data-structures"
  - "sparse-matrices"
  - "array-languages"
  - "graph-databases"
seed_rank: 2441
seed_batch: "craft-2026-10-27"
reviewed: "2026-10-27"
pool: "systems"
lineage: contemporary-databases
relevance_score: 7
cites:
  - title: "Computation-Friendly Compression of Matrices: Speeding up Linear and Boolean Algebra"
    url: "https://arxiv.org/abs/2610.35362"
    year: 2026
    arxiv: "2610.35362"
    doi: null
see: ["153-a-decomposition-storage-model", "1044-single-assignment-c-efficient-support-for-high-level-array-operations"]
---

# Computation-Friendly Compression of Matrices: Speeding up Linear and Boolean Algebra

## One-sentence takeaway

Navarro surveys compressed sparse-matrix formats you can compute on directly, with matrix–vector (and sometimes matrix–matrix, sum and closure) products in time proportional to the compressed size, and shows three of the four families are one scheme, a "sparse straight-line factorization."

## Why it matters here

ano treats relations and selections as columnar arrays, and relational hops are, underneath, Boolean matrix–vector products over adjacency. For big, redundant relations (spatial grids, tile adjacency, tech trees, social-style graphs in a sim), working on the compressed form instead of decompressing first saves both memory and bandwidth. This survey is the organized map of that design space from the main author of compact data structures, and it gives a single algebraic view (forward and backward substitution on a factorization) that a columnar language could adopt as one primitive.

## Key ideas

- **Four kinds of redundancy.** Spatial clustering of nonzeros (k²-trees), similar rows (Boldi–Vigna referencing and set-difference coding), repeated substrings (grammar compression), and dense bipartite substructures (bicliques).
- **For each family** it covers the representation, algorithms, guarantees and measured performance.
- **Unifying scheme.** Row-referencing, grammar and biclique formats are all sparse straight-line factorizations; forward and backward substitution give right and left products in time linear in the representation size.
- **Closed under product.** The product of two such factorizations is again one, so matrix–matrix products produce compressed output.
- An appendix covers formats that need decompression, and it ends with a cross-family comparison and open problems.

## Caveats

It's a survey and mostly targets web and social graphs and ML feature matrices; game-scale relations are often small enough that plain CSR or bitsets win. Construction cost and update support (dynamic matrices) matter a lot for live game state and may be weak spots. I read the abstract only.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.35362
- PDF: https://arxiv.org/pdf/2610.35362
