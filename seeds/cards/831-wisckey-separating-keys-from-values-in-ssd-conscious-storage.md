---
title: "WiscKey: Separating Keys from Values in SSD-conscious Storage"
authors:
- Lanyue Lu
- Thanumalayan Sankaranarayana Pillai
- Andrea C. Arpaci-Dusseau
- Remzi H. Arpaci-Dusseau
year: 2016
venue: FAST
arxiv: null
doi: null
source: "https://www.usenix.org/conference/fast16/technical-sessions/presentation/lu"
topics:
- databases
- contemporary-db
seed_rank: 831
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: The log-structured merge-tree (LSM-tree)
  url: "https://doi.org/10.1007/BF01827521"
  year: 1996
  arxiv: null
  doi: 10.1007/BF01827521
see:
- "820-the-log-structured-merge-tree-lsm-tree"
---

# WiscKey: Separating Keys from Values in SSD-conscious Storage

## One-sentence takeaway

WiscKey keeps only keys and metadata in the LSM-tree and appends large values to a separate value log, so compaction rewrites the small key stream instead of repeatedly copying values — cutting I/O amplification on SSDs (2.5–111× faster loads, 1.6–14× faster random lookups vs. LevelDB in the paper).

## Why it matters here

Anoptic replay blobs, mesh caches, and GRID COMMAND payload journals are value-heavy. WiscKey is the rule: if values dwarf keys, do not drag them through LSM compaction; log the bytes and let the tree index them.

## Key ideas

- The LSM-tree stores `<key, value-offset, size>` only; values live in an append-only vLog whose sequential writes match SSD strengths.
- Compaction I/O then scales with key+metadata size, not with value size; garbage collection later reclaims dead vLog regions.
- Range scans and lookups follow the key-order of the tree, then issue (possibly parallel) reads into the vLog; unordered value layout is the trade for cheaper writes.
- Across all six YCSB workloads the paper reports WiscKey beating both LevelDB and contemporaneous RocksDB.

## Caveats

## Links

- USENIX: [FAST ’16](https://www.usenix.org/conference/fast16/technical-sessions/presentation/lu)
- PDF: https://www.usenix.org/system/files/conference/fast16/fast16-papers-lu.pdf
