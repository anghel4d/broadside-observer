---
title: "Bonsai: Compiling Queries to Pruned Tree Traversals"
authors: ["Alexander J Root", "Christophe Gyurgyik", "Purvi Goel", "Kayvon Fatahalian", "Jonathan Ragan-Kelley", "Andrew Adams", "Fredrik Kjolstad"]
year: 2026
venue: "PLDI"
arxiv: "2511.15000"
doi: "10.1145/3808256"
source: "https://arxiv.org/abs/2511.15000"
topics: [query-compilation, bvh, ecs-queries, compilers]
seed_rank: 1037
seed_batch: "craft-2026-08-15"
reviewed: "2026-08-15"
pool: "languages"
relevance_score: 9
lineage: ecs-data-oriented-simulation
cites:
  - title: "Decoupling Data Layouts from Bounding Volume Hierarchies"
    url: "https://arxiv.org/abs/2511.15028"
    year: 2026
    arxiv: "2511.15028"
    doi: "10.1145/3808253"
  - title: "Halide: A Language and Compiler for Optimizing Parallelism, Locality, and Recomputation in Image Processing Pipelines"
    url: "https://doi.org/10.1145/2499370.2462176"
    year: 2013
    arxiv: null
    doi: "10.1145/2499370.2462176"
  - title: "DuckDB: an Embeddable Analytical Database"
    url: "https://doi.org/10.1145/3183713.3190657"
    year: 2019
    arxiv: null
    doi: "10.1145/3183713.3190657"
  - title: "R-trees: A Dynamic Index Structure for Spatial Searching"
    url: "https://doi.org/10.1145/602259.602266"
    year: 1984
    arxiv: null
    doi: "10.1145/602259.602266"
see:
  - "874-duckdb-an-embeddable-analytical-database"
  - "314-flecs-relationships-and-queries"
  - "260-flecs-a-fast-entity-component-system-for-c99"
  - "928-a-stack-free-traversal-algorithm-for-left-balanced-k-d-trees"
  - "047-a-relational-model-of-data-for-large-shared-data-banks"
---

# Bonsai: Compiling Queries to Pruned Tree Traversals

## One-sentence takeaway

Write the query (`argmin distmin` of `intersects` = closest-hit; `filter intersects` of `product` = collisions) against a metadata-annotated ADT; Bonsai derives always/maybe pruning via symbolic interval analysis (with geometric rules) and fuses the operators into one traversal.

## Why it matters here

GRID COMMAND spatial picks, Anoptic ray/collision, and ano/Flecs-style ECS queries are the same compiler problem: a predicate plus a tree of bounds. Today each is a hand-written `if (ray hits AABB) recurse`. Bonsai is the operator compiler that would generate those from standing rules — and it already emits C++ competitive with FCPW / FCL / SQLite index scans, plus queries (circle, `|x|+|y|<1`, torus join) those systems linear-scan.

## Key ideas

- Data independence: query language (filter/map/reduce/product/min/any + geometric predicates) is separate from tree ADTs annotated `with AABB(low,high)` / `with min(id) = idl`.
- Lowering is StreamFusion-style local rewrites on a tiny TTIR (`yield` / `iter` / `scan` / `from` / `upd`). Chained filters do not explode into a 2^k truth table.
- Predicate analysis: Halide-style interval arithmetic on scalars, plus a table of necessary/sufficient rules for `intersects` / `contains` / `distmin` when one or both arguments vary. `always` = sufficient (scan the subtree); `maybe` = necessary (recurse); else prune.
- Joins: single-index (iterate-locate, like hash join) and dual-index (coiterate two trees, like collision detection). Dual-index `intersects` *is* the textbook dual-BVH collision kernel, derived not written.
- Layouts via Scion (1036). Compile 1–5 ms; matches FCPW CHRT/CPQ; beats FCL collision by specializing away virtual dispatch; range/inequality joins match or beat SQLite/DuckDB IEJoin.

## Caveats


## Links

- arXiv: [2511.15000](https://arxiv.org/abs/2511.15000)
- DOI: [10.1145/3808256](https://doi.org/10.1145/3808256)
- Author PDF: http://fredrikbk.com/publications/bonsai.pdf
- Compiler: https://github.com/rootjalex/bonsai
