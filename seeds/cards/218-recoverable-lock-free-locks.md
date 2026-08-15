---
title: "Recoverable Lock-Free Locks"
authors:
  - "Hagit Attiya"
  - "Panagiota Fatourou"
  - "Eleftherios Kosmas"
  - "Yuanhao Wei"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2512.09710"
doi: null
source: "https://arxiv.org/abs/2512.09710"
topics:
  - lockfree
seed_rank: 218
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Lock-Free Locks Revisited"
    url: "https://arxiv.org/abs/2201.00813"
    year: 2022
    arxiv: "2201.00813"
    doi: null
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "241-lock-free-locks-revisited"
  - "036-wait-free-synchronization"
---

# Recoverable Lock-Free Locks

## One-sentence takeaway

A mechanical transformation replaces lock acquire/release in an existing lock-based object with a recoverable, lock-free pair, including nested locks, without changing the object's sequential spec.

## Why it matters here

Anoptic still has lock-based subsystems (resource tables, editor transactions) that must survive a crash mid-critical-section; this is the "keep the locks, add recoverability and lock-freedom" path rather than a from-scratch rewrite.

## Key ideas

- First published transform that adds *both* lock-freedom and crash recoverability at once.
- Input is an ordinary lock-based implementation; output substitutes the lock primitives only.
- Nested locking is supported so existing layered critical sections stay valid.
- Recoverability is argued not to weaken the original lock-based correctness argument.
- Builds on the lock-free-locks / helping line (Ben-David, Blelloch, Wei) rather than inventing a new object from scratch.

## Caveats

## Links

- arXiv: [2512.09710](https://arxiv.org/abs/2512.09710)
- PDF: https://arxiv.org/pdf/2512.09710
