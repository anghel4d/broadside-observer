---
title: "Priority Ceiling Protocols for Real-Time Synchronization"
authors:
  - "Lui Sha"
  - "Ragunathan Rajkumar"
  - "John P. Lehoczky"
year: 1990
venue: "IEEE Transactions on Computers"
arxiv: null
doi: "10.1109/12.57058"
source: "https://doi.org/10.1109/12.57058"
topics:
  - realtime
  - scheduling
seed_rank: 475
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 7
lineage: realtime-scheduling
cites:
  - title: "Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment"
    url: "https://doi.org/10.1145/321738.321743"
    year: 1973
    doi: "10.1145/321738.321743"
  - title: "Priority Inheritance Protocols: An Approach to Real-Time Synchronization"
    url: "https://doi.org/10.1109/12.57055"
    year: 1990
    doi: "10.1109/12.57055"
see:
  - "380-scheduling-algorithms-for-multiprogramming-in-a-hard-real-ti"
  - "413-priority-inheritance-protocols-an-approach-to-real-time-sync"
---

# Priority Ceiling Protocols for Real-Time Synchronization

## One-sentence takeaway

The priority ceiling protocol raises a lock's priority to the highest priority of any task that might take it, so a high-priority task is blocked at most once and unbounded priority inversion cannot form.

## Why it matters here

Paired with the same authors' priority-inheritance paper, this is the analyzable mutex story for engine soft-RT threads that share resources under RMS/EDF.

## Key ideas

- Each resource has a static ceiling = max priority of tasks that lock it; a task may lock only if its priority is strictly higher than the ceilings of resources currently held by others.
- Blocking time is then bounded by the longest critical section of a lower-priority task — enough to plug into Liu/Layland-style schedulability tests.
- Prevents both unbounded inversion and chained blocking that plain inheritance still allows.
- Originally motivated by Ada tasking; still the textbook protocol in RTOS courses and AUTOSAR-style stacks.

## Caveats

## Links

- DOI: [10.1109/12.57058](https://doi.org/10.1109/12.57058)
