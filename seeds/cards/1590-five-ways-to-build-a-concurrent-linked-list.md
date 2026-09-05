---
title: "Five Ways to Build a Concurrent Linked From Coarse-Grain Locking to Lock-Free Algorithms"
authors: ["Zeeshan Mohammed Rangrej"]
year: 2026
venue: "arXiv (cs.DC)"
arxiv: "2606.28972"
doi: null
source: "https://arxiv.org/abs/2606.28972"
topics: [lockfree-game-parallelism, concurrent-data-structures]
seed_rank: 1590
seed_batch: "craft-2026-09-05"
reviewed: "2026-09-05"
pool: "engines"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
see:
  - "031-michael-scott-lock-free-queue"
  - "207-space-efficient-lock-free-linear-probing-hash-table"
---

# Five Ways to Build a Concurrent Linked From Coarse-Grain Locking to Lock-Free Algorithms

## One-sentence takeaway

Five C++ set-of-ints linked lists — coarse lock, fine-grain locks, optimistic, lazy, lock-free — with workload-dependent winners: coarse/lazy win small read-heavy ranges; lock-free catches up on large ranges; fine-grain locking is consistently worst.

## Why it matters here

Anoptic entity lists, command buffers, and GRID COMMAND standing-order chains still need a *stepwise* concurrent-list recipe this week, not another MS-queue remint (31). This is the AMP-chapter sequence implemented and timed: start coarse, measure, only pay lock-free when the key range and thread count actually justify it. Pair with open-addressing maps (207) rather than turning every index into a list.

## Key ideas

- **Same ADT, five algorithms.** `add` / `remove` / `contains` on a sorted integer set. C++17, each variant self-contained.
- **The ladder.** (1) one mutex for the whole list; (2) hand-over-hand per-node locks; (3) optimistic: traverse unlocked, lock to validate/commit; (4) lazy: mark deleted, physically unlink later; (5) lock-free Harris-style CAS with marked pointers.
- **Benchmark shape.** Read-heavy / balanced / write-heavy × small key range (high contention) × large key range (low contention) × 1/4/8 threads.
- **What actually won.** Coarse-grain and lazy lists win read-heavy + small ranges. Lock-free becomes competitive when keys are sparse and more threads run. Fine-grain locking pays per-node mutex overhead and loses across the board — theoretical extra parallelism does not show up.

## Caveats

Tutorial / bakeoff paper, not a new list algorithm. Integer sets, 8 threads max — not an Anoptic MPMC command queue (use 31 / 1491). Lock-free still needs a reclamation story (24). Title on arXiv drops “List:”; the body is a linked-list set. Do not remint 31 / 207 / Harris-list folklore.

## Links

- arXiv abs: https://arxiv.org/abs/2606.28972
- PDF: https://arxiv.org/pdf/2606.28972
