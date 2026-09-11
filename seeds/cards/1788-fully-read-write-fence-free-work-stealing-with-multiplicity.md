---
title: "Fully Read/Write Fence-Free Work-Stealing with Multiplicity"
authors: ["Armando Castañeda", "Miguel Piña"]
year: 2020
venue: "DISC 2021 / arXiv (cs.DC)"
arxiv: "2008.04424"
doi: "10.4230/LIPIcs.DISC.2021.16"
source: "https://arxiv.org/abs/2008.04424"
topics: [work-stealing-schedulers]
seed_rank: 1788
seed_batch: "craft-2026-09-11"
reviewed: "2026-09-11"
pool: "systems"
relevance_score: 10
lineage: work-stealing-schedulers
cites:
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    arxiv: null
    doi: "10.1145/1073970.1073974"
  - title: "Idempotent Work Stealing"
    url: "https://doi.org/10.1145/1504176.1504186"
    year: 2009
    arxiv: null
    doi: "10.1145/1504176.1504186"
  - title: "Fence-Free Work Stealing on Bounded TSO Processors"
    url: "https://doi.org/10.1145/2541940.2541987"
    year: 2014
    arxiv: null
    doi: "10.1145/2541940.2541987"
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    arxiv: null
    doi: "10.1145/324133.324234"
  - title: "Libfork: Portable Continuation-Stealing With Stackless Coroutines"
    url: "https://arxiv.org/abs/2402.18480"
    year: 2025
    arxiv: "2402.18480"
    doi: "10.1109/tpds.2025.3543442"
see:
  - "291-dynamic-circular-work-stealing-deque"
  - "229-formal-verification-of-chase-lev-deque-in-concurrent-separat"
  - "200-scheduling-multithreaded-computations-by-work-stealing"
  - "433-idempotent-work-stealing"
  - "435-fence-free-work-stealing-on-bounded-tso-processors"
  - "1556-libfork-portable-continuation-stealing-with-stackless-coroutines"
  - "206-a-lock-free-work-stealing-algorithm-for-bulk-operations"
---

# Fully Read/Write Fence-Free Work-Stealing with Multiplicity

## One-sentence takeaway

Castañeda & Piña give Put/Take/Steal work-stealing that is Read/Write-only and fence-free on *both* owner and thief paths, by relaxing to multiplicity (each task is taken at least once; any process extracts a given task at most once).

## Why it matters here

Anoptic's job system already has Chase-Lev 291/229, Idempotent 433, fence-free TSO 435, libfork 1556, and Bulk WS 206. The leftover is *thief-path fences*: Morrison–Afek kill owner fences on TSO, but Steal still CAS/locks. Multiplicity is the relaxation that makes Steal fence-free in the standard asynchronous model — useful when GRID COMMAND workers steal tiny jobs and a CAS on every steal shows up in the profile. Not another queue paper.

## Key ideas

- **Multiplicity vs exact-once.** Exact-once WS needs RAW patterns or RMW; multiplicity requires every task be extracted ≥1 time and forbids a process extracting the same task twice — enough for many engine jobs (duplicate-tolerant, or idempotent work).
- **Fully Read/Write, no RAW.** Both algorithms avoid Read-After-Write and Read-Modify-Write in Put, Take, *and* Steal; the second is additionally fence-free (instruction order only from data dependence).
- **Reduction to MaxRegister.** Multiplicity (and a weaker variant) reduce to MaxRegister / RangeMaxRegister — a design handle if you already have a max-register somewhere in the runtime.
- **Measured vs Cilk THE / Chase-Lev / Idempotent.** DISC 2021 evaluation reports the fence-free algorithm beating those classics; steal is no longer the fence bottleneck.

## Caveats

arXiv `2008.04424` (2020) / DISC 2021 LIPIcs / DOI `10.4230/LIPIcs.DISC.2021.16`. Multiplicity is not Chase-Lev exact-once — duplicate execution must be safe or detected. Do not remint Chase-Lev 291/229, Blumofe 200, Idempotent 433, Fence-free TSO 435, libfork 1556, or Bulk WS 206.

## Links

- arXiv abs: https://arxiv.org/abs/2008.04424
- PDF: https://arxiv.org/pdf/2008.04424
- DOI: https://doi.org/10.4230/LIPIcs.DISC.2021.16
