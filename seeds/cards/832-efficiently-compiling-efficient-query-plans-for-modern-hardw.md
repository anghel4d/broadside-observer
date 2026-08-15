---
title: Efficiently Compiling Efficient Query Plans for Modern Hardware
authors:
- Thomas Neumann
year: 2011
venue: Proceedings of the VLDB Endowment
arxiv: null
doi: 10.14778/2002938.2002940
source: "https://doi.org/10.14778/2002938.2002940"
topics:
- databases
- contemporary-db
seed_rank: 832
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Efficiently Compiling Efficient Query Plans for Modern Hardware

## One-sentence takeaway

Neumann’s HyPer paper replaces Volcano tuple-at-a-time iterators with data-centric code generation: each pipeline of non-blocking operators becomes one tight LLVM loop that keeps tuples in CPU registers, cutting interpretation overhead on in-memory OLAP.

## Why it matters here

This is the compilation half of the modern execution fork (the other half is vectorization). Anoptic / ano query and ECS filter pipelines that already compile should steal the produce/consume pipeline break, not a virtual `next()` per entity.

## Key ideas

- Operators implement produce/consume during a depth-first walk of the plan; the generated code fuses a pipeline into a single (possibly nested) loop.
- Pipeline breakers (hash build, sort, materialize) are the only points where tuples leave registers for a data structure.
- Compiling to LLVM IR specializes types and predicates per query, so the CPU sees straight-line code instead of interpreter dispatch.
- The same engine later grows morsel-driven parallelism and adaptive compilation (Umbra); this paper is the sequential, data-centric core.

## Caveats

## Links

- DOI: [10.14778/2002938.2002940](https://doi.org/10.14778/2002938.2002940)
- PVLDB PDF: https://www.vldb.org/pvldb/vol4/p539-neumann.pdf
