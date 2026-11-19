---
title: "Making Lockless Synchronization Fast: Performance Implications of Memory Reclamation"
authors:
  - "Thomas E. Hart"
  - "Paul E. McKenney"
  - "Angela Demke Brown"
year: 2006
venue: "IPDPS 2006 (best paper); extended as JPDC 67(12), 2007, with Jonathan Walpole"
arxiv: null
doi: "10.1109/IPDPS.2006.1639261"
source: "https://www.cs.toronto.edu/~tomhart/papers/hart_ipdps06.pdf"
version_reviewed: "IPDPS 2006 author PDF"
topics:
  - "memory-reclamation"
  - "lock-free"
  - "rcu"
  - "hazard-pointers"
  - "epoch-based-reclamation"
seed_rank: 2650
seed_batch: "archive-2026-11-20"
reviewed: "2026-11-20"
pool: "systems"
lineage: memory-reclamation
relevance_score: 8
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "293-epoch-based-reclamation-practical-lock-freedom"
  - "304-read-copy-update"
  - "923-are-your-epochs-too-epic-batch-free-can-be-harmful"
cites:
  - title: "Making Lockless Synchronization Fast: Performance Implications of Memory Reclamation"
    url: "https://doi.org/10.1109/IPDPS.2006.1639261"
    year: 2006
    doi: "10.1109/IPDPS.2006.1639261"
  - title: "Performance of memory reclamation for lockless synchronization"
    url: "https://doi.org/10.1016/j.jpdc.2007.04.010"
    year: 2007
    doi: "10.1016/j.jpdc.2007.04.010"
---

# Making Lockless Synchronization Fast: Performance Implications of Memory Reclamation

## One-sentence takeaway

The first fair head-to-head of quiescent-state (QSBR), epoch-based (EBR), hazard-pointer (HPBR) and lock-free reference-counting (LFRC) reclamation finds no single winner: fences dominate the base cost, so QSBR is usually fastest, HPBR and LFRC fall apart on long traversals, QSBR and EBR can exhaust memory under preemption with update-heavy loads, and a lock-free algorithm can only be compared with another under the same reclamation scheme.

## Why it matters here

This is the measurement paper the memory-reclamation lineage was missing between the scheme papers (024, 293, 304) and the modern ones (DEBRA, IBR, Hyaline). For Anoptic's wait-free buses and job system it gives the decision rule: a frame loop has natural quiescent states, so QSBR/epoch-per-frame is the cheap default, and per-node schemes are only worth their fences where a stalled thread must not block reclamation. Its NEBR trick, setting the epoch flag once at the application level, is exactly "enter the epoch once per frame".

## Key ideas

- **Four schemes, one harness.** Michael's lock-free list and queue, plus concurrently-readable (RCU-style) lists and hash tables, on an 8-CPU IBM POWER4+ and a 2-CPU PowerPC G5, varying data-structure size, read/update ratio, thread count and preemption.
- **Fences are the cost.** QSBR has no per-operation fence; HPBR needs one per protected node, EBR two per operation, and LFRC several atomics per node. LFRC was always at least twice as slow as the next scheme and was dropped.
- **Traversal length.** With long chains HPBR's per-node fences degrade it badly while QSBR and EBR stay flat.
- **Preemption and memory exhaustion.** With 1–32 threads on 2 CPUs and write-heavy loads, HPBR wins; if threads busy-wait on allocation failure, QSBR and EBR exhaust the pool because grace periods stall. The same failure class is a known Linux denial-of-service risk.
- **Consequences.** Compared under QSBR, the lock-free hash table beats the lock-based concurrently-readable one above about 15% updates. NEBR (amortise EBR's flag and fences across many operations) scaled linearly and beat HPBR, almost as fast as QSBR without needing quiescent states.

## Caveats

2006 PowerPC hardware with no x86 or Arm results; microbenchmarks only; Gidenstam-style hybrid schemes and later ones (Hazard Eras, IBR, Hyaline) are not covered. Reviewed the IPDPS version; the JPDC 2007 journal version adds material not checked here.

## Links

- PDF (IPDPS 2006 author copy): https://www.cs.toronto.edu/~tomhart/papers/hart_ipdps06.pdf
- IEEE DOI: https://doi.org/10.1109/IPDPS.2006.1639261
- Journal version DOI (JPDC 2007): https://doi.org/10.1016/j.jpdc.2007.04.010
- Author page: http://www.cs.toronto.edu/~tomhart/masters_thesis.html
