---
title: "Why Aren't Operating Systems Getting Faster As Fast As Hardware?"
authors:
  - "John K. Ousterhout"
year: 1990
venue: "USENIX Summer"
arxiv: null
doi: null
source: "https://web.stanford.edu/~ouster/cgi-bin/papers/osfast.pdf"
topics:
  - operating-systems
  - performance
  - ousterhout
seed_rank: 1127
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
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
  - title: "On Micro-Kernel Construction"
    url: "https://doi.org/10.1145/224056.224075"
    year: 1995
    arxiv: null
    doi: "10.1145/224056.224075"
    card: "1108-on-micro-kernel-construction"
  - title: "Exokernel: An Operating System Architecture for Application-Level Resource Management"
    url: "https://doi.org/10.1145/224056.224076"
    year: 1995
    arxiv: null
    doi: "10.1145/224056.224076"
    card: "1111-exokernel-an-operating-system-architecture-for-application-l"
---

# Why Aren't Operating Systems Getting Faster As Fast As Hardware?

## One-sentence takeaway

Ousterhout measures OS overheads and asks why software system services lag raw hardware speedups.

## Why it matters here

Still the right question for engine runtimes: where do syscalls, copies, and layering eat the gains?

## Key ideas

- Microbenchmarks of OS-intensive workloads.
- Hardware got faster; OS paths often did not proportionally.
- Motivates leaner kernels, better IPC, fewer copies.
- Pairs with LFS/Sprite systems work.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- URL: https://web.stanford.edu/~ouster/cgi-bin/papers/osfast.pdf
