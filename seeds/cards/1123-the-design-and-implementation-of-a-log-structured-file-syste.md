---
title: "The Design and Implementation of a Log-Structured File System"
authors:
  - "Mendel Rosenblum"
  - "John K. Ousterhout"
year: 1992
venue: "ACM TOCS"
arxiv: null
doi: "10.1145/146941.146943"
source: "https://doi.org/10.1145/146941.146943"
topics:
  - file-systems
  - lfs
  - log-structured
seed_rank: 1123
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "A Fast File System for UNIX"
    url: "https://doi.org/10.1145/348.356"
    year: 1984
    arxiv: null
    doi: "10.1145/348.356"
    card: "1110-a-fast-file-system-for-unix"
  - title: "A Case for Redundant Arrays of Inexpensive Disks (RAID)"
    url: "https://doi.org/10.1145/50202.50214"
    year: 1988
    arxiv: null
    doi: "10.1145/50202.50214"
    card: "1122-a-case-for-redundant-arrays-of-inexpensive-disks-raid"
  - title: "ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking and Partial Rollbacks Using Write-Ahead Logging"
    url: "https://doi.org/10.1145/128765.128770"
    year: 1992
    arxiv: null
    doi: "10.1145/128765.128770"
    card: "1093-aries-a-transaction-recovery-method-supporting-fine-granular"
---

# The Design and Implementation of a Log-Structured File System

## One-sentence takeaway

LFS writes everything in an append-only log for sequential write performance, with cleaning to reclaim space.

## Why it matters here

Log-structured thinking underpins LSMs, journaled stores, and crash-safe asset pipelines.

## Key ideas

- Append-only log as the disk truth.
- Segment cleaning / compaction tradeoffs.
- Fast crash recovery from the log tail.
- Sprite LFS implementation results.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/146941.146943](https://doi.org/10.1145/146941.146943)
- URL: https://doi.org/10.1145/146941.146943
