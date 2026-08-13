---
title: Userspace RCU Library (liburcu)
authors:
- Mathieu Desnoyers
- Paul E. McKenney
year: 2009
venue: lttng/liburcu
arxiv: null
doi: null
source: https://liburcu.org/
topics:
- rcu
- reclamation
seed_rank: 466
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 8
lineage: memory-reclamation
cites:
- title: Read-Copy Update
  url: https://www.rdrop.com/~paulmck/RCU/
  year: 1998
  arxiv: null
  doi: null
- title: Epoch-Based Reclamation / Practical lock-freedom
  url: https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf
  year: 2004
  arxiv: null
  doi: null
- title: 'Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects'
  url: https://doi.org/10.1109/TPDS.2004.8
  year: 2004
  arxiv: null
  doi: 10.1109/TPDS.2004.8
see:
- "304-read-copy-update"
- "293-epoch-based-reclamation-practical-lock-freedom"
- "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Userspace RCU Library (liburcu)

## One-sentence takeaway

liburcu brings RCU-style quiescent-state/epoch reclamation to userspace as a living industrial library.

## Why it matters here

Practical QSBR/EBR-family tool alongside hazard pointers for Anoptic readers.

## Key ideas

- Multiple RCU flavors (QSBR, MB, signal-based).
- Grace periods instead of per-pointer hazards.
- Craft child of kernel RCU ideas.
- Compared with DEBRA/EBR in userspace designs.

## Caveats

- Requires disciplined quiescent points.
- Progress differs from hazard pointers under starvation.

## Links

- URL: https://liburcu.org/
