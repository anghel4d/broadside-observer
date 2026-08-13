---
title: "Design and Implementation of the Sun Network Filesystem"
authors:
  - "Russel Sandberg"
  - "David Goldberg"
  - "Steve Kleiman"
  - "Dan Walsh"
  - "Bob Lyon"
year: 1985
venue: "USENIX Summer"
arxiv: null
doi: null
source: "https://www.cs.ucsb.edu/~chong/290N/nfs.pdf"
topics:
  - networking
  - nfs
  - distributed-fs
  - sun
seed_rank: 1128
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: systems-classics
cites:
  - title: "Implementing Remote Procedure Calls"
    url: "https://doi.org/10.1145/2080.357392"
    year: 1984
    arxiv: null
    doi: "10.1145/2080.357392"
    card: "1120-implementing-remote-procedure-calls"
  - title: "The UNIX Time-Sharing System"
    url: "https://doi.org/10.1145/361011.361061"
    year: 1974
    arxiv: null
    doi: "10.1145/361011.361061"
    card: "1101-the-unix-time-sharing-system"
  - title: "End-to-End Arguments in System Design"
    url: "https://doi.org/10.1145/357401.357402"
    year: 1984
    arxiv: null
    doi: "10.1145/357401.357402"
    card: "1103-end-to-end-arguments-in-system-design"
  - title: "A Fast File System for UNIX"
    url: "https://doi.org/10.1145/348.356"
    year: 1984
    arxiv: null
    doi: "10.1145/348.356"
    card: "1110-a-fast-file-system-for-unix"
---

# Design and Implementation of the Sun Network Filesystem

## One-sentence takeaway

Sun NFS makes remote files look local via a stateless protocol—the distributed filesystem that defined workstation computing.

## Why it matters here

Network FS semantics and failure modes still haunt any Broadside shared-asset or tool sync design.

## Key ideas

- Stateless server protocol over RPC/XDR.
- VFS-style client integration.
- Mount protocol + file access ops.
- Industry-standard remote FS of the workstation era.

## Caveats

- NFSv2-era design; later NFS versions add state and stronger consistency.

## Links

- URL: https://www.cs.ucsb.edu/~chong/290N/nfs.pdf
