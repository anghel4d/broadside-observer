---
title: "Priority Inheritance Protocols: An Approach to Real-Time Synchronization"
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
  - scheduling
  - priority
seed_rank: 413
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 7
lineage: realtime-scheduling
cites:
  - title: "Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment"
    url: "https://doi.org/10.1145/321738.321743"
    year: 1973
    arxiv: null
    doi: "10.1145/321738.321743"
  - title: "The Rate Monotonic Scheduling Algorithm: Exact Characterization and Average Case Behavior"
    url: "https://doi.org/10.1109/REAL.1989.63567"
    year: 1989
    arxiv: null
    doi: "10.1109/REAL.1989.63567"
  - title: "Fundamental Design Problems of Distributed Systems for the Hard-Real-Time Environment"
    url: "https://hdl.handle.net/1721.1/149573"
    year: 1983
    arxiv: null
    doi: null
  - title: "A note on preemptive scheduling of periodic, real-time tasks"
    url: "https://doi.org/10.1016/0020-0190(80)90123-4"
    year: 1980
    arxiv: null
    doi: "10.1016/0020-0190(80)90123-4"
  - title: "Experience with processes and monitors in Mesa"
    url: "https://doi.org/10.1145/358818.358824"
    year: 1980
    arxiv: null
    doi: "10.1145/358818.358824"
  - title: "Scheduling Tasks with Resource Requirements in Hard Real-Time Systems"
    url: "https://doi.org/10.1109/TSE.1987.233201"
    year: 1987
    arxiv: null
    doi: "10.1109/TSE.1987.233201"
  - title: "Preemptive Scheduling Under Time and Resource Constraints"
    url: "https://doi.org/10.1109/TC.1987.5009518"
    year: 1987
    arxiv: null
    doi: "10.1109/TC.1987.5009518"
  - title: "The priority ceiling protocol: A method for minimizing the blocking of high priority Ada tasks"
    url: "https://doi.org/10.1145/58612.59371"
    year: 1988
    arxiv: null
    doi: "10.1145/58612.59371"
  - title: "Dynamic Task Scheduling in Hard Real-Time Distributed systems"
    url: "https://doi.org/10.1109/ms.1984.234713"
    year: 1984
    arxiv: null
    doi: "10.1109/ms.1984.234713"
  - title: "Task Scheduling In Distributed Real-Time Systems"
    url: "https://doi.org/10.1117/12.943278"
    year: 1987
    arxiv: null
    doi: "10.1117/12.943278"
  - title: "Performance of real-time bus scheduling algorithms"
    url: "https://doi.org/10.1145/317499.317538"
    year: 1986
    arxiv: null
    doi: "10.1145/317499.317538"
see:
  - "380-scheduling-algorithms-for-multiprogramming-in-a-hard-real-ti"
  - "475-priority-ceiling-protocols-for-real-time-synchronization"
---

# Priority Inheritance Protocols: An Approach to Real-Time Synchronization

## One-sentence takeaway

When a low-priority job holds a lock a high-priority job needs, it temporarily inherits the waiter’s priority so a medium-priority job cannot stretch the inversion unboundedly.

## Why it matters here

GRID COMMAND / ano have hard frame and audio deadlines sharing mutexes with background systems. Unbounded priority inversion is how a logger thread misses a 16 ms beat. This paper is the basic protocol (and the ceiling variant) POSIX `PTHREAD_PRIO_INHERIT` still implements.

## Key ideas

- Classic inversion: high blocked on lock held by low, while medium runs and starves the lock holder — blocking time is not a function of the critical section alone.
- Basic priority inheritance: the holder runs at the max priority of jobs waiting on its lock; the boost is dropped on unlock.
- Priority ceiling protocol: each lock has a static ceiling; a job may lock only if its priority is higher than the ceilings of locks held by others, which bounds blocking to one critical section and prevents deadlock.
- Both protocols restore the Liu/Layland-style schedulability analysis once blocking terms are added to the utilization test.

## Caveats

## Links

- DOI: [10.1109/12.57058](https://doi.org/10.1109/12.57058)
