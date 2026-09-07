---
title: "TreadMarks: Distributed Shared Memory on Standard Workstations and Operating Systems"
authors:
  - "Pete Keleher"
  - "Alan L. Cox"
  - "Sandhya Dwarkadas"
  - "Willy Zwaenepoel"
year: 1994
venue: "USENIX Winter Technical Conference"
arxiv: null
doi: null
source: "https://cseweb.ucsd.edu/classes/sp11/cse223b/papers/keleher94.pdf"
topics:
  - distributed-shared-memory
  - lazy-release-consistency
  - memory-models
seed_rank: 1632
seed_batch: "archive-2026-09-08"
reviewed: "2026-09-08"
pool: "systems"
relevance_score: 9
lineage: memory-consistency
cites:
  - title: "Memory Consistency and Event Ordering in Scalable Shared-Memory Multiprocessors"
    url: "https://doi.org/10.1145/325096.325102"
    year: 1990
    arxiv: null
    doi: "10.1145/325096.325102"
see:
  - "414-memory-consistency-and-event-ordering-in-scalable-shared-mem"
  - "1493-algorithms-for-scalable-synchronization-on-shared-memory-multiprocessors"
  - "1598-queue-locks-on-cache-coherent-multiprocessors"
---

# TreadMarks: Distributed Shared Memory on Standard Workstations and Operating Systems

## One-sentence takeaway

TreadMarks implements software distributed shared memory with lazy release consistency on stock workstations and OSes, showing that a relaxed sharing model plus user-level messaging can make multi-machine shared-memory programming practical without special hardware.

## Why it matters here

Multi-process / multi-machine Anoptic sims and tool farms need a mental model for “shared memory that isn’t coherent every load.” TreadMarks is the classic LRC DSM system: steal the lazy release consistency + twin/diff page protocol intuition for networked simulation state, not a plan to run 1994 DSM under Vulkan.

## Key ideas

- **Lazy release consistency (LRC).** Propagation of writes is delayed until acquire/release synchronization points, cutting false sharing traffic versus stricter models.
- **Twin and diff.** Pages are twinned on first write; diffs ship at synchronization — the concrete mechanism behind LRC’s bandwidth win.
- **Stock OS / user level.** No custom kernel or interconnect: standard workstations, showing DSM as middleware.
- **App-level sync contract.** Correctness leans on explicit synchronization; data races remain races — same discipline modern lock-free and message-passing engines demand.

## Caveats

- Software DSM is largely historical for engines (message-passing and explicit replication won). Card 414 already covers Gharachorloo RC 1990; do not remint that or MCS/queue-lock cards. IEEE Computer 1996 TreadMarks survey not double-minted beside this USENIX paper.
- Standalone Lazy Release Consistency ISCA 1992 left as near-keeper (mirrors flaked); LRC is covered inside this narrative.

## Links

- Course/mirror PDF: https://cseweb.ucsd.edu/classes/sp11/cse223b/papers/keleher94.pdf
- USENIX Winter 1994 proceedings entry (no DOI on this version)
