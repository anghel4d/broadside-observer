---
title: The log-structured merge-tree (LSM-tree)
authors:
- Patrick O'Neil
- Edward Cheng
- Dieter Gawlick
- Elizabeth O'Neil
year: 1996
venue: Acta Informatica
arxiv: null
doi: 10.1007/BF01827521
source: "https://doi.org/10.1007/BF01827521"
topics:
- databases
- contemporary-db
seed_rank: 820
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# The log-structured merge-tree (LSM-tree)

## One-sentence takeaway

O’Neil, Cheng, Gawlick, and O’Neil introduce the LSM-tree: keep a small in-memory C0 tree that absorbs writes, and roll it forward into larger on-disk C1, C2, … components via sequential merging, so insert-heavy, disk-resident workloads avoid the random I/O of a conventional B-tree.

## Why it matters here

Every modern write-optimized store Anoptic might embed — RocksDB, LevelDB, WiscKey, Cassandra — is this 1996 idea plus bloom filters. Engine journals, demo recordings, and GRID COMMAND command logs should default to “buffer then sequential merge,” not in-place page updates.

## Key ideas

- Writes land in an in-memory tree (C0); when C0 fills, it is merged sequentially into the next component, producing a new sorted run and deferring random seeks.
- Multi-component leveling (C0 ⊂ C1 ⊂ C2 …) amortizes each inserted key across larger sequential I/Os as it ages.
- Point lookups may probe every component, so the design assumes an insert-heavy mix and later work adds Bloom filters / fences to cut read amplification.
- The paper’s cost model compares LSM merge I/O against B-tree leaf splits for historical-logging and rollback-segment style workloads (the original Oracle / deferred-update motivation).

## Caveats

## Links

- DOI: [10.1007/BF01827521](https://doi.org/10.1007/BF01827521)
- Alternate DOI (Springer): [10.1007/s002360050048](https://doi.org/10.1007/s002360050048)
