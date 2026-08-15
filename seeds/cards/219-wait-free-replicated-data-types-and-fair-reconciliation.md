---
title: "Wait-free Replicated Data Types and Fair Reconciliation"
authors:
  - "Petr Kuznetsov"
  - "Maxence Perion"
  - "Sara Tucci-Piergiovanni"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2508.18193"
doi: null
source: "https://arxiv.org/abs/2508.18193"
topics:
  - lockfree
seed_rank: 219
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Conflict-free Replicated Data Types"
    url: "https://doi.org/10.1007/978-3-642-24550-3_29"
    year: 2011
    arxiv: null
    doi: "10.1007/978-3-642-24550-3_29"
see:
  - "036-wait-free-synchronization"
---

# Wait-free Replicated Data Types and Fair Reconciliation

## One-sentence takeaway

Eventual state-machine replication is formalized with extra stability (a growing common prefix) and fairness (no client starves), then implemented by DAG-merging replicas with reconciliation functions that guarantee both.

## Why it matters here

Broadside multiplayer and Anoptic editor replicas are CRDT-shaped: wait-free local apply is easy, but without a stable prefix and fairness a client can be reordered forever. This is the spec those merges should meet.

## Key ideas

- CAP forces a choice; CRDTs pick wait-free availability and live with reordering.
- Unbounded reordering means an operation may never stabilize and a client may starve.
- The paper names the CRDT problem *eventual state-machine replication* and adds two axioms: a growing stable prefix shared by all replicas, and no-starvation fairness.
- Replicas exchange local views and merge them with a reconciliation function over a DAG of operations.
- Concrete reconciliation functions are given that restore stability and fairness for any replicated data type in the framework.

## Caveats

## Links

- arXiv: [2508.18193](https://arxiv.org/abs/2508.18193)
- PDF: https://arxiv.org/pdf/2508.18193
