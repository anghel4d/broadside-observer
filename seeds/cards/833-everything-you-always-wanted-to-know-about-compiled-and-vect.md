---
title: Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask
authors:
- Timo Kersten
- Viktor Leis
- Alfons Kemper
- Thomas Neumann
- Andrew Pavlo
- Peter Boncz
year: 2018
venue: Proceedings of the VLDB Endowment
arxiv: null
doi: 10.14778/3275366.3275370
source: "https://doi.org/10.14778/3275366.3275370"
topics:
- databases
- contemporary-db
seed_rank: 833
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: Efficiently Compiling Efficient Query Plans for Modern Hardware
  url: "https://doi.org/10.14778/2002938.2002940"
  year: 2011
  arxiv: null
  doi: 10.14778/2002938.2002940
see:
- "832-efficiently-compiling-efficient-query-plans-for-modern-hardw"
---

# Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask

## One-sentence takeaway

Kersten et al. implement data-centric compilation (Typer) and vectorization (Tectorwise) in one engine with shared algorithms and show neither wins outright: compilation issues fewer instructions and wins compute-heavy in-cache queries, while vectorization hides cache-miss latency on hash joins.

## Why it matters here

Anoptic has to pick an execution model for ano filters and GRID COMMAND analytics. This paper is the decision table: compile when the working set is in cache and the work is arithmetic; vectorize when probes miss and you need independent loads. Hybrids exist because the gap is tens of percent, not orders of magnitude.

## Key ideas

- Both models kill Volcano per-tuple virtual calls — vectorization by amortizing `next()` over a block plus type-specialized primitives, compilation by fusing a pipeline into one loop.
- Isolated in one codebase, TPC-H deltas are modest (Typer +74% on Q1, Tectorwise +32% on Q9); both crush classical interpreters.
- Vectorization materializes intermediates (more L1 traffic, more instructions) but issues independent memory ops that overlap cache misses; compilation keeps values in registers.
- SIMD, multi-core, and Intel/AMD/Phi results stay in the same qualitative split; compile time and OLTP are discussed as non-OLAP factors.

## Caveats

## Links

- DOI: [10.14778/3275366.3275370](https://doi.org/10.14778/3275366.3275370)
- PDF: https://www.vldb.org/pvldb/vol11/p2209-kersten.pdf
