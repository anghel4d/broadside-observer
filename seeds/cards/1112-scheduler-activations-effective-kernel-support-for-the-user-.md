---
title: "Scheduler Activations: Effective Kernel Support for the User-Level Management of Parallelism"
authors:
  - "Thomas E. Anderson"
  - "Brian N. Bershad"
  - "Edward D. Lazowska"
  - "Henry M. Levy"
year: 1991
venue: "SOSP / TOCS"
arxiv: null
doi: "10.1145/121132.121151"
source: "https://doi.org/10.1145/121132.121151"
topics:
  - operating-systems
  - threading
  - scheduler-activations
seed_rank: 1112
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
  - title: "Exokernel: An Operating System Architecture for Application-Level Resource Management"
    url: "https://doi.org/10.1145/224056.224076"
    year: 1995
    arxiv: null
    doi: "10.1145/224056.224076"
    card: "1111-exokernel-an-operating-system-architecture-for-application-l"
---

# Scheduler Activations: Effective Kernel Support for the User-Level Management of Parallelism

## One-sentence takeaway

Scheduler activations give user-level thread systems kernel events so they can multiplex parallelism without blocking the process.

## Why it matters here

Conceptual ancestor of modern user-level schedulers / job systems that must co-exist with blocking IO.

## Key ideas

- Upcalls when kernel events affect user threads.
- Combines user-level performance with kernel awareness.
- Avoids N:1 blocking and 1:1 kernel-thread costs of the era.
- Bridge toward work-stealing runtime design.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/121132.121151](https://doi.org/10.1145/121132.121151)
- URL: https://doi.org/10.1145/121132.121151
