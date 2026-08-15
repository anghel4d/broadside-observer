---
title: Read-Copy Update
authors:
- Paul E. McKenney
- John D. Slingwine
year: 1998
venue: PDCS
arxiv: null
doi: null
source: https://www.eecg.toronto.edu/~amza/ece1747h/papers/rcu.pdf
topics:
- memory-allocation
- rcu
- reclamation
seed_rank: 304
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 9
lineage: memory-reclamation
cites:
- title: 'Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects'
  url: https://doi.org/10.1109/TPDS.2004.8
  year: 2004
  arxiv: null
  doi: 10.1109/TPDS.2004.8
- title: Epoch-Based Reclamation / Practical lock-freedom
  url: https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf
  year: 2004
  arxiv: null
  doi: null
- title: Userspace RCU Library (liburcu)
  url: https://liburcu.org/
  year: 2009
  arxiv: null
  doi: null
see: []
---

# Read-Copy Update

## One-sentence takeaway

RCU lets readers traverse a data structure with no locks or atomics by publishing a new version and deferring the free of the old version until every pre-existing reader has passed a quiescent state.

## Why it matters here

Server-side GRID COMMAND snapshots and hot ECS lookup tables want the same “readers never wait” contract the Linux kernel got from this paper; hazard pointers and EBR are later refinements of the same deferred-free idea.

## Key ideas

- The 1998 PDCS paper is titled *Read-Copy Update: Using Execution History to Solve Concurrency Problems*; OLS 2001 is a later Linux write-up, not the original.
- A writer copies the node, mutates the copy, then atomically swings the publishing pointer; readers who already hold the old pointer keep seeing a consistent snapshot.
- Reclamation waits for a grace period: every CPU (or thread) must pass through a context where it holds no RCU-protected reference.
- Read-side critical sections are delimited only by those quiescent states, so the common-case read path is a plain load.
- The scheme trades a bounded amount of unreclaimed memory and update-side complexity for wait-free reads, which is why kernels and some game servers still use it.

## Caveats

## Links

- PDF: https://www.eecg.toronto.edu/~amza/ece1747h/papers/rcu.pdf
- Author page: https://www.rdrop.com/~paulmck/RCU/
