---
title: "A Compiler for Operations on Relations with Bag Semantics"
authors: ["James Dong", "Fredrik Kjolstad"]
year: 2026
venue: "PLDI"
arxiv: "2502.06988"
doi: "10.1145/3808283"
source: "https://arxiv.org/abs/2502.06988"
topics: [relational-ecs-queries, array-programming-apl-bqn-q, ecs-data-oriented-simulation]
seed_rank: 1060
seed_batch: "craft-2026-08-17"
reviewed: "2026-08-17"
pool: "languages"
relevance_score: 10
lineage: relational-ecs-queries
cites:
  - title: "Bonsai: Compiling Queries to Pruned Tree Traversals"
    url: "https://arxiv.org/abs/2511.15000"
    year: 2026
    arxiv: "2511.15000"
    doi: "10.1145/3808256"
  - title: "The Tensor Algebra Compiler"
    url: "https://doi.org/10.1145/3133901"
    year: 2017
    arxiv: null
    doi: "10.1145/3133901"
  - title: "Indexed Streams: A Formal Intermediate Representation for Fused Contraction Programs"
    url: "https://doi.org/10.1145/3591268"
    year: 2023
    arxiv: null
    doi: "10.1145/3591268"
  - title: "DuckDB: an Embeddable Analytical Database"
    url: "https://doi.org/10.1145/3299869.3320212"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3320212"
see:
  - "1037-bonsai-compiling-queries-to-pruned-tree-traversals"
  - "1036-decoupling-data-layouts-from-bounding-volume-hierarchies"
  - "874-duckdb-an-embeddable-analytical-database"
  - "127-c-store-a-column-oriented-dbms"
  - "129-monetdb-x100-hyper-pipelining-query-execution"
  - "047-a-relational-model-of-data-for-large-shared-data-banks"
---

# A Compiler for Operations on Relations with Bag Semantics

## One-sentence takeaway

Lower full relational algebra (bags, outer/non-equi joins, difference) onto ALIR nested loops over coordinate trees, compile each domain to an iteration machine, emit fused C++ co-iteration — 3.87× vs Hyper on fusion-friendly LSQB, TPC-H sequential geomean 1.00×.

## Why it matters here

Bonsai (1037) compiles *spatial* queries to pruned tree walks; this is the sibling for *relational* Flecs/ano queries: filters, joins, aggregations over ECS tables with real bag semantics, emitting C rather than interpreting a volcano iterator. Anoptic's standing-rule / trigger layer and GRID COMMAND's unit-table queries are exactly "fuse these operators, don't materialize temps." Iteration machines are TACO lattices grown up for multisets.

## Key ideas

- Coordinate-tree data model: each attribute is a layer with lookup and/or iteration capability; storage (sorted, hash, trie, dense) is a description, not the IR.
- ALIR is nested loops whose domains are multiset expressions (`∩ ∪ − + ×`, predicates, singletons, `∪ ∅` for NULL). Fusion is the default; `let` is the explicit materialization fence.
- Iteration machines (DFAs over remaining inputs) generate both the loop nest as inputs exhaust and the in-loop case split; minimization drops redundant nodes.
- Galloping `skipto` recovers leapfrog-triejoin WCOJ for multi-way inner joins (triangle query Θ(n) vs Hyper/DuckDB ~n² on the classic skew instance).
- Outer/non-equi joins need index-only relations and sometimes a temp for the inner join; duplicates are a first-class inner loop, not a post-pass.

## Caveats

- Query planning is semi-automatic; TPC-H ALIR was hand-tuned on 13/22 queries. Not a drop-in SQL engine.
- Parallel is OpenMP on the outer loop with coordinate-tree-safe tiles; geomean 0.61× Hyper parallel.
- PLDI 2026 title on the PACMPL page is the fused-multisets framing; arXiv title is the one above.

## Links

- arXiv: [2502.06988](https://arxiv.org/abs/2502.06988)
- DOI: [10.1145/3808283](https://doi.org/10.1145/3808283)
