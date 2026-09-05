---
title: "Queue Locks on Cache Coherent Multiprocessors"
authors:
  - "Peter Magnusson"
  - "Anders Landin"
  - "Erik Hagersten"
year: 1994
venue: "IPPS 1994"
arxiv: null
doi: "10.1109/ipps.1994.288305"
source: "https://www.it.uu.se/research/group/uart/pub/magnusson_1994_jan/magnusson_1994_jan.pdf"
topics:
  - synchronization
  - queue-locks
  - clh
  - lock-free-adjacent
seed_rank: 1598
seed_batch: "archive-2026-09-06"
reviewed: "2026-09-06"
pool: "engines"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Algorithms for Scalable Synchronization on Shared-Memory Multiprocessors"
    url: "https://doi.org/10.1145/103727.103729"
    year: 1991
    arxiv: null
    doi: "10.1145/103727.103729"
  - title: "Efficient Software Synchronization on Large Cache Coherent Multiprocessors"
    url: "https://www.it.uu.se/research/group/uart/pub/magnusson_1994_jan/magnusson_1994_jan.pdf"
    year: 1994
    arxiv: null
    doi: null
see:
  - "1493-algorithms-for-scalable-synchronization-on-shared-memory-multiprocessors"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
---

# Queue Locks on Cache Coherent Multiprocessors

## One-sentence takeaway

On cache-coherent NUMA, replace Test&(Test&Set) with queue locks that spin on local state; the paper’s LH lock (atomic swap only) is the CLH ancestor, and their M lock minimizes global accesses on the hand-off critical path.

## Why it matters here

Anoptic’s lock-free shelf already has MCS (1493), Michael–Scott (031), and Herlihy wait-free (036). CLH/LH is the other classic FIFO queue lock — often faster than MCS on coherent machines because each waiter spins on its predecessor’s node via swap, not on a remote flag. GRID COMMAND / engine worker pools that still need a mutex should know LH/CLH vs MCS as a deliberate choice, not a synonym.

## Key ideas

- **Cost model.** Decompose lock cost into hand-off (notice-queue + detect), optimistic re-lock, and pessimistic take — so algorithms can be compared without full simulation.
- **LH lock.** Simplest queue lock in the comparison: one atomic swap to enqueue; spin on predecessor; release stores to own node. Only swap required. This is the Landin–Hagersten / Craig line later called CLH.
- **M lock.** New design here: fewer global accesses on the contended hand-off path while staying competitive on memory and code size — authors’ preferred overall pick for large CC machines.
- **vs MCS (1493).** MCS also queues; CLH/LH typically wins on cache-coherent hardware, MCS on non-coherent or when spinning must stay truly local without the extra indirection CLH needs off-coherence.
- **Memory taxonomy.** Count pointers vs flags in terms of L, P, Pq, Pmax — false-sharing of flags vs pointers is an explicit design knob.

## Caveats

- Do not remint MCS 1493 — this is the complementary LH/CLH paper, not a replacement. Travis Craig’s concurrent TR is the other independent CLH source; this IPPS paper is the Landin–Hagersten publication with the LH/M comparison.
- Queue locks are still locks: they do not replace Michael–Scott / wait-free queues for non-blocking data planes.
- Expanded SICS TR T94:07 exists; DOI is the IPPS proceedings version.

## Links

- Open PDF (UU/SICS): https://www.it.uu.se/research/group/uart/pub/magnusson_1994_jan/magnusson_1994_jan.pdf
- DOI: https://doi.org/10.1109/ipps.1994.288305
