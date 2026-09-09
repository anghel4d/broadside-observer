---
title: "Wait-Free Locks Should Not Fear Later Arrivals"
authors: ["Tong Che"]
year: 2026
venue: "arXiv (cs.DC)"
arxiv: "2607.16571"
doi: null
source: "https://arxiv.org/abs/2607.16571"
topics: [lockfree-game-parallelism]
seed_rank: 1653
seed_batch: "craft-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 10
lineage: wait-free-locks
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Fast and Fair Randomized Wait-Free Locks"
    url: "https://doi.org/10.1145/3519270.3538448"
    year: 2022
    arxiv: "2108.04520"
    doi: "10.1145/3519270.3538448"
  - title: "Big Atomics"
    url: "https://arxiv.org/abs/2501.07503"
    year: 2026
    arxiv: "2501.07503"
    doi: null
see:
  - "036-wait-free-synchronization"
  - "1589-big-atomics"
  - "1590-five-ways-to-build-a-concurrent-linked-list"
  - "1556-libfork-portable-continuation-stealing-with-stackless-coroutines"
  - "1591-gtap-gpu-resident-fork-join-task-parallel-system"
---

# Wait-Free Locks Should Not Fear Later Arrivals

## One-sentence takeaway

Helping does not make a lock wait-free for the *caller* if later arrivals can repeatedly bump an overwritable candidate: Che shows the starvation mode and a construction that keeps wait-freedom for each call even under continuous latecomers.

## Why it matters here

Anoptic job/lock paths and ano runtime mutexes that "help" a stalled holder inherit the later-arrival trap: the system progresses while *your* acquire never returns. This is the leftover of Herlihy wait-free 036 / Big Atomics 1589 / Blelloch fair wait-free locks — a concrete fix for helping-based wait-free locks under continuous contention, not another queue recipe.

## Key ideas

- **Helping ≠ wait-free for a call.** Wrapping the critical section in an idempotent thunk lets helpers finish the holder's work, but an overwritable candidate slot lets newcomers displace each other so one call helps forever while point contention stays ≤2.
- **The question.** Can a call still return in bounded its-own steps when arrivals never stop? Che answers with a wait-free lock design that does not fear later arrivals.
- **Relation to fair randomized wait-free locks.** Ben-David–Blelloch (PODC 2022 / Dist. Computing 2025) give fairness under arbitrary delay; this paper isolates the later-arrival starvation of naive helping and removes it.
- **Engine takeaway.** If you help, pin the helped request so newcomers cannot erase it; do not assume "system progress" equals "this fiber unblocks."

## Caveats

arXiv-only `2607.16571` at harvest (no DOI yet). Single-author theory/systems paper — validate against your mutex/job API before adopting. Do not remint Wait-Free Synchronization 036, Big Atomics 1589, Five Ways lists 1590, libfork 1556, or GTaP 1591. Cite Ben-David–Blelloch rather than reminting it this cycle.

## Links

- arXiv abs: https://arxiv.org/abs/2607.16571
- PDF: https://arxiv.org/pdf/2607.16571
- Related (cite, not remint): https://arxiv.org/abs/2108.04520
