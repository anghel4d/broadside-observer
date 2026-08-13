---
title: "A Fast File System for UNIX"
authors:
  - "Marshall K. McKusick"
  - "William N. Joy"
  - "Samuel J. Leffler"
  - "Robert S. Fabry"
year: 1984
venue: "ACM TOCS"
arxiv: null
doi: "10.1145/348.356"
source: "https://doi.org/10.1145/348.356"
topics:
  - file-systems
  - unix
  - ffs
seed_rank: 1110
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: systems-classics
cites:
  - title: "The UNIX Time-Sharing System"
    url: "https://doi.org/10.1145/361011.361061"
    year: 1974
    arxiv: null
    doi: "10.1145/361011.361061"
    card: "1101-the-unix-time-sharing-system"
  - title: "The Design and Implementation of a Log-Structured File System"
    url: "https://doi.org/10.1145/146941.146943"
    year: 1992
    arxiv: null
    doi: "10.1145/146941.146943"
    card: "1123-the-design-and-implementation-of-a-log-structured-file-syste"
  - title: "A Case for Redundant Arrays of Inexpensive Disks (RAID)"
    url: "https://doi.org/10.1145/50202.50214"
    year: 1988
    arxiv: null
    doi: "10.1145/50202.50214"
    card: "1122-a-case-for-redundant-arrays-of-inexpensive-disks-raid"
---

# A Fast File System for UNIX

## One-sentence takeaway

BSD FFS redesigns on-disk layout for locality: cylinder groups, blocks/fragments, and free-space policy that made UNIX disks fast.

## Why it matters here

Locality-aware layout lessons transfer to packfiles, asset stores, and replay logs.

## Key ideas

- Cylinder groups to keep related inodes/data close.
- Large blocks with fragments for small files.
- Parameterized policy based on disk geometry.
- Replaces the original UNIX FS performance cliff.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/348.356](https://doi.org/10.1145/348.356)
- URL: https://doi.org/10.1145/348.356
