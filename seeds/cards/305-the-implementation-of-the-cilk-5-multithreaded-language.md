---
title: "The Implementation of the Cilk-5 Multithreaded Language"
authors:
  - "Matteo Frigo"
  - "Charles E. Leiserson"
  - "Keith H. Randall"
year: 1998
venue: "PLDI"
arxiv: null
doi: "10.1145/277650.277725"
source: "https://doi.org/10.1145/277650.277725"
topics:
  - work-stealing-schedulers
  - cilk
seed_rank: 305
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: work-stealing-schedulers
cites:
  - title: "Cilk: An Efficient Multithreaded Runtime System"
    url: "https://doi.org/10.1145/209936.209958"
    year: 1995
    doi: "10.1145/209936.209958"
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    doi: "10.1145/324133.324234"
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    doi: "10.1145/1073970.1073974"
see:
  - "430-cilk-an-efficient-multithreaded-runtime-system"
  - "200-scheduling-multithreaded-computations-by-work-stealing"
---

# The Implementation of the Cilk-5 Multithreaded Language

## One-sentence takeaway

Cilk-5 compiles each spawned function into a fast sequential clone and a stealable slow clone, so the work-first path pays almost nothing until a thief actually steals.

## Why it matters here

Ano job graphs and Broadside agent fan-out want the same work-stealing contract: the spawning thread keeps running, idle workers steal continuations, and cactus stacks keep frames valid after a steal.

## Key ideas

- The work-first principle: minimize overhead on the work (busy) path; put bookkeeping on the uncommon steal path.
- Two-clone compilation: the fast clone is ordinary C with a cheap spawn/sync protocol; the slow clone materializes a full frame when a thief steals the continuation.
- THE (Tail / Head / Exception) protocol lets the victim pop from one end of a ready deque and a thief steal from the other with almost no atomics on the victim.
- Cactus stacks give each stolen subtree its own stack spine so a frame can outlive the worker that created it.
- Theoretical bound is `T₁/P + O(T∞)` expected time, matching the Blumofe–Leiserson work-stealing analysis in a real compiler.

## Caveats

## Links

- DOI: [10.1145/277650.277725](https://doi.org/10.1145/277650.277725)
- PDF: https://pages.cs.wisc.edu/~swilson/cilk.pdf
