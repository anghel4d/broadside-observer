---
title: Serializable Snapshot Isolation in PostgreSQL
authors:
- Dan R. K. Ports
- Kevin Grittner
year: 2012
venue: Proceedings of the VLDB Endowment
arxiv: null
doi: 10.14778/2367502.2367523
source: "https://doi.org/10.14778/2367502.2367523"
topics:
- databases
- contemporary-db
seed_rank: 850
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Serializable Snapshot Isolation in PostgreSQL

## One-sentence takeaway

Ports and Grittner implement Serializable Snapshot Isolation in PostgreSQL 9.1: SI’s MVCC snapshots plus a runtime SSI detector for dangerous read-write dependency cycles, so `SERIALIZABLE` means true serializability without switching the engine to two-phase locking.

## Why it matters here

If GRID COMMAND or Broadside embed Postgres (or an SI store) for matchmaking / economy tables, “serializable” used to be a lie (write skew). This paper is why modern Postgres actually serializes: SI plus SIREAD locks / conflict checking, aborting the pivot transaction in a dangerous structure.

## Key ideas

- Snapshot isolation already gives many serializable histories; the residual anomalies are write skew and related rw-dependency cycles.
- SSI tracks rw-antidependencies (T1 reads a version T2 overwrites) and aborts when a “dangerous structure” — two adjacent rw-edges with a concurrently running pivot — appears.
- Implementation is the SIREAD lock: a lock that does not block writers but records the dependency for the detector; readers do not take exclusive row locks.
- Production numbers in 9.1 show the extra bookkeeping is cheap on TPC-C-like mixes relative to the correctness win over plain SI.

## Caveats

## Links

- DOI: [10.14778/2367502.2367523](https://doi.org/10.14778/2367502.2367523)
- PVLDB PDF: https://www.vldb.org/pvldb/vol5/p1850-ports.pdf
