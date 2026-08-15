---
title: "DEBRA: Distributed Epoch-Based Reclamation"
authors:
  - "Trevor Brown"
year: 2015
venue: "PODC"
arxiv: null
doi: "10.1145/2767386.2767436"
source: "https://doi.org/10.1145/2767386.2767436"
topics:
  - memory-allocation
  - reclamation
seed_rank: 330
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: memory-reclamation
cites:
  - title: "Epoch-Based Reclamation / Practical lock-freedom"
    url: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-579.pdf"
    year: 2004
    arxiv: null
    doi: null
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: null
  - title: "Interval-Based Memory Reclamation"
    url: "https://doi.org/10.1145/3178487.3178488"
    year: 2018
    arxiv: null
    doi: "10.1145/3178487.3178488"
see:
  - "293-epoch-based-reclamation-practical-lock-freedom"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "323-interval-based-memory-reclamation"
---

# DEBRA: Distributed Epoch-Based Reclamation

## One-sentence takeaway

DEBRA is a distributed EBR: each thread posts a local epoch, and a block retired in epoch `e` is reclaimed only after every thread has left `e`, without a single global lock on the epoch counter.

## Why it matters here

Ano lock-free maps and Broadside netcode queues want Fraser-style EBR without the centralized bottleneck; DEBRA is the usual citation for that distributed epoch protocol.

## Key ideas

- Classic EBR increments one shared epoch and is not robust: a stalled thread pins everything allocated after its announce.
- DEBRA keeps per-thread announce slots and a limbo bag of retired nodes tagged with the epoch they were retired in.
- A thread can reclaim a bag once it has observed every other thread’s announce move past that bag’s epoch.
- Distributed (no centralized increment) and wait-free on the announce path; still not robust against a permanently stalled thread — that is IBR/HP territory.
- PODC 2015, DOI 10.1145/2767386.2767436. Brown’s page https://www.cs.utoronto.ca/~tabrown/debra/ hosts code.

## Caveats

## Links

- DOI: [10.1145/2767386.2767436](https://doi.org/10.1145/2767386.2767436)
- Author page: https://www.cs.utoronto.ca/~tabrown/debra/
