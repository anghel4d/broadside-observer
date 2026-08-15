---
title: "GaussDB: A Cloud-Native Multi-Primary Database with Compute-Memory-Storage Disaggregation"
authors:
- Guoliang Li
- Wengang Tian
- Jinyu Zhang
- Ronen Grosman
- Zongchao Liu
- Sihao Li
year: 2024
venue: Proceedings of the VLDB Endowment
arxiv: null
doi: 10.14778/3685800.3685806
source: "https://doi.org/10.14778/3685800.3685806"
topics:
- databases
- contemporary-db
seed_rank: 871
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# GaussDB: A Cloud-Native Multi-Primary Database with Compute-Memory-Storage Disaggregation

## One-sentence takeaway

Huawei GaussDB is a three-layer (compute / memory / storage) shared-storage multi-primary: pages have a single owner compute node, a stateless memory layer tracks ownership and global locks, and recovery prefers a memory checkpoint over a storage one.

## Why it matters here

This is the 2024 industrial answer to "how do you get more than one writer once compute, buffer pool, and pages live in different services" — the same cut Broadside will face if GRID COMMAND's control plane, hot cache, and durable log ever disaggregate.

## Key ideas

- Compute nodes run SQL, transactions, and WAL; a node that does not own a needed page takes ownership (write) or a read authorization (read) via the page-owner directory.
- Memory layer is stateless and rebuildable: distributed POD (page → owner), global object locks, warm-page cache, and memory checkpoints. Consistent hashing shards the POD.
- Storage is shared POSIX; each compute node has its own redo stream; undo segments are shared for MVCC. Dirty pages still flush (network is not the bottleneck in their deployment).
- Affinity-aware page placement + JDBC/ODBC routing keep co-accessed pages on one writer to cut ownership ping-pong.
- Two-tier recovery: replay from a memory checkpoint first; fall back to a storage checkpoint. Past-image pages left at the previous owner skip log replay for that page.

## Caveats

## Links

- DOI: [10.14778/3685800.3685806](https://doi.org/10.14778/3685800.3685806)
- PDF: https://www.vldb.org/pvldb/vol17/p3786-li.pdf
