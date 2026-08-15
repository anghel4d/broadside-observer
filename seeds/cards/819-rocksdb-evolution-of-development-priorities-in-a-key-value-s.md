---
title: "RocksDB: Evolution of Development Priorities in a Key-value Store Serving Large-scale Applications"
authors:
- Siying Dong
- Andrew Kryczka
- Yanqin Jin
- Michael Stumm
year: 2021
venue: ACM Transactions on Storage
arxiv: null
doi: 10.1145/3483840
source: "https://doi.org/10.1145/3483840"
topics:
- databases
- contemporary-db
seed_rank: 819
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: The log-structured merge-tree (LSM-tree)
  url: "https://doi.org/10.1007/s002360050048"
  year: 1996
  arxiv: null
  doi: 10.1007/s002360050048
see:
- "820-the-log-structured-merge-tree-lsm-tree"
---

# RocksDB: Evolution of Development Priorities in a Key-value Store Serving Large-scale Applications

## One-sentence takeaway

This retrospective traces RocksDB from a LevelDB fork optimized for flash to a production LSM used across Facebook, showing how priorities shifted from raw write throughput toward tail latency, space amplification, and operable compaction as SSDs and workloads changed.

## Why it matters here

Anoptic’s local telemetry, replay journals, and GRID COMMAND persistence will look like an LSM long before they look like a B-tree. The paper is a checklist of which LSM knobs actually mattered once the store left the benchmark: write stalls, compaction debt, and CPU vs. I/O on NVMe.

## Key ideas

- Early RocksDB chased ingest bandwidth (universal compaction, multi-threaded flush/compaction, direct I/O) on flash where LevelDB’s single-thread compaction collapsed.
- Later the bottleneck moved to read tail latency and space: partitioned index/filters, Bloom/ribbon filters, compression dictionaries, and compaction-pri settings that bound write amplification.
- Write stalls are treated as a first-class bug: slowdown/stop triggers when L0 or compaction debt grows, rather than letting memtables pile up unbounded.
- The store is unbundled from a query engine — MyRocks, ZippyDB, and stream processors each bring their own transaction/SQL layer — so API stability and backward-compatible MANIFEST formats dominate feature work.

## Caveats

## Links

- DOI: [10.1145/3483840](https://doi.org/10.1145/3483840)
- URL: https://doi.org/10.1145/3483840
