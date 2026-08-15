---
title: Volcano-an extensible and parallel query evaluation system
authors:
- Goetz Graefe
year: 1994
venue: IEEE Transactions on Knowledge and Data Engineering
arxiv: null
doi: 10.1109/69.273032
source: "https://doi.org/10.1109/69.273032"
topics:
- databases
- contemporary-db
seed_rank: 853
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Volcano-an extensible and parallel query evaluation system

## One-sentence takeaway

Volcano makes a query engine a tree of iterators with a uniform `open`/`next`/`close` protocol, and folds all parallelism into a single `exchange` operator so sequential algebra code never sees threads or partitions.

## Why it matters here

Broadside's data-stack shelf and any GRID COMMAND analytics path still compile to pull-based operator trees. Volcano is why an engine can add a new physical operator or a new degree of parallelism without rewriting the algebra.

## Key ideas

- Every operator is an iterator: `open` prepares state, `next` yields one record, `close` releases resources. Demand-driven evaluation composes without materializing intermediates.
- The `exchange` operator is the only parallel primitive — it partitions, merges, and pipelines across processes — so the rest of the algebra stays single-threaded and reusable.
- Extensibility is via a type system and operator registry: new ADTs and algorithms register implementations rather than forking the executor.
- Designed as both a research vehicle and the evaluation substrate for the Volcano optimizer generator, later rewritten as Cascades.
- Prefetch and flow-control live inside `exchange`, which is why later vectorized and compiled engines still talk about "Volcano-style" vs "push/compiled" execution.

## Caveats

## Links

- DOI: [10.1109/69.273032](https://doi.org/10.1109/69.273032)
