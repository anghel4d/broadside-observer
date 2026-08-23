---
title: "Morsel-Driven Parallelism: A NUMA-Aware Query Evaluation Framework for the Many-Core Age"
authors: ["Viktor Leis", "Peter Boncz", "Alfons Kemper", "Thomas Neumann"]
year: 2014
venue: "SIGMOD 2014"
arxiv: null
doi: "10.1145/2588555.2610507"
source: "https://doi.org/10.1145/2588555.2610507"
topics: [columnar-query, ecs-data-oriented-simulation]
seed_rank: 1153
seed_batch: "craft-2026-08-23"
reviewed: "2026-08-23"
pool: "languages"
relevance_score: 9
lineage: columnar-query
cites:
  - title: "Encapsulation of parallelism in the Volcano query processing system"
    url: "https://doi.org/10.1145/93597.98720"
    year: 1990
    arxiv: null
    doi: "10.1145/93597.98720"
  - title: "DuckDB: an Embeddable Analytical Database"
    url: "https://doi.org/10.1145/3299869.3320212"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3320212"
  - title: "Terascale Query Processing in the Browser: Rethinking GPU Acceleration"
    url: "https://arxiv.org/abs/2607.17571"
    year: 2026
    arxiv: "2607.17571"
    doi: null
  - title: "Optimal Predicate Pushdown Synthesis"
    url: "https://arxiv.org/abs/2604.13351"
    year: 2026
    arxiv: "2604.13351"
    doi: null
see:
  - "874-duckdb-an-embeddable-analytical-database"
  - "875-apache-arrow-datafusion-and-ballista-query-engines"
  - "1094-terascale-query-processing-in-the-browser-wglog"
  - "1096-optimal-predicate-pushdown-synthesis-pusharoo"
---

# Morsel-Driven Parallelism: A NUMA-Aware Query Evaluation Framework for the Many-Core Age

## One-sentence takeaway

Do not bake DOP into the plan: cut input into ~10⁵-tuple NUMA-local morsels, dispatch them onto pinned workers that run a whole pipeline to the next breaker, and steal across sockets only when a local list is empty.

## Problem

ano and GRID COMMAND standing queries will run on a 8–32-core box next to the renderer. Volcano exchange (one plan copy per thread, DOP frozen at compile time) load-imbalances on modern cores and ignores NUMA. Last Craft kept WGLog (browser Datalog) and Pusharoo (fold pushdown). Neither is the *execution* recipe — DuckDB (874) is the engine; this is how HyPer/DuckDB actually parallelise a pipeline.

## Design

One worker per hardware thread, pinned. A lock-free dispatcher hands out (pipeline-job, morsel) pairs, preferring the socket that owns the morsel. Morsel size ~100k tuples: small enough to reassign mid-query (elasticity, cancel, priority), large enough to amortise dispatch. Logical pipelines split physically so build-side cardinality is known before the perfectly-sized shared hash table is allocated (interleaved across sockets). Inserts are lock-free tagged chaining (16-bit filter in the pointer, one CAS). Probe pipelines stay pipelined on the large side. Aggregation: thread-local preagg of heavy hitters, then partitioned exact agg. Elasticity: a new query can steal workers at the next morsel boundary — no SIGKILL of threads.

## Evidence

SIGMOD 2014, DOI `10.1145/2588555.2610507`. HyPer TPC-H SF100: most queries ~20–40× on 32 cores / 64 HT; Vectorwise (Volcano) often <10× on the same box. NUMA-aware vs OS-default 1.57–2.40× geo-mean. Elasticity: a hog on one core drops static split −37%, morsels −5%. DuckDB's execution engine is this paper's descendant — cite 874, do not remint.

## Limitations

Paper is HyPer/JIT 2014, not a GPU kernel (FliX 1093 is the GPU map). Bushy intra-query pipeline overlap is deliberately off (hurts cache). Morsel size is a hardware knob (~10k minimum). Not bag-semantics (1060), not WGLog Datalog, not Pusharoo.

## Implications for Broadside

ano's query/filter runtime and GRID COMMAND's standing spatial/trigger queries should morsel-dispatch over SoA columns, not spawn a thread per exchange. Same dispatcher pattern as the engine job system (105) but for *data* not *jobs*. NUMA-local storage areas are the CPU analogue of per-frame arenas.

## Bottom line

Mint the HyPer morsel paper. Cite Volcano, DuckDB, WGLog, Pusharoo; do not remint them.

## Links

- DOI: [10.1145/2588555.2610507](https://doi.org/10.1145/2588555.2610507)
- Author PDF: https://db.in.tum.de/~leis/papers/morsels.pdf
