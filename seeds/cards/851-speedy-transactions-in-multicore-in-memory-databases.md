---
title: Speedy transactions in multicore in-memory databases
authors:
- Stephen Tu
- Wenting Zheng
- Eddie Kohler
- Barbara Liskov
- Samuel Madden
year: 2013
venue: SOSP
arxiv: null
doi: 10.1145/2517349.2522713
source: "https://doi.org/10.1145/2517349.2522713"
topics:
- databases
- contemporary-db
seed_rank: 851
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "The End of an Architectural Era (It's Time for a Complete Rewrite)"
    url: "https://hstore.cs.brown.edu/papers/hstore-endofera.pdf"
    year: 2007
    arxiv: null
    doi: null
  - title: "Cache craftiness for fast multicore key-value storage"
    url: "https://pdos.csail.mit.edu/papers/masstree:eurosys12.pdf"
    year: 2012
    arxiv: null
    doi: "10.1145/2168836.2168855"
see:
  - "855-the-end-of-an-architectural-era-it-s-time-for-a-complete-rew"
---

# Speedy transactions in multicore in-memory databases

## One-sentence takeaway

Silo is a shared-memory in-memory OLTP engine whose OCC commit protocol never writes shared memory for read-only records and still recovers a serial order via 40 ms epochs.

## Why it matters here

GRID COMMAND and Broadside both sit on multicore boxes where a centralized TID allocator or read-lock write is a hidden scalability cliff. Silo is the recipe for serializable local state (agent journals, ECS world snapshots, command logs) that still scales near-linearly past a few dozen cores.

## Key ideas

- Decentralized TIDs: a worker assigns a commit TID only after validation, taking the max of read/write-set versions, its last TID, and the current epoch — no global counter.
- Phase 1 locks the write-set in address order, then snapshots the global epoch (the serialization point); Phase 2 aborts if any read-set TID moved or a foreign lock is held; Phase 3 installs writes and unlocks atomically via a TID word that packs lock/latest/absent bits.
- Epochs (advanced every 40 ms) are the only places the serial order is explicit; logging and client-visible commit happen at epoch boundaries, which also feed RCU-style GC and slightly-stale snapshot reads.
- Indexes are Masstree-style trees; any worker can touch the whole store. A partitioned variant wins only when the workload matches the cut.
- ~700k TPC-C txn/s on 32 cores (~22k/core), 91% of 8-core per-core throughput; several times faster than published H-Store / Hekaton-class numbers on the same class of hardware.

## Caveats

## Links

- DOI: [10.1145/2517349.2522713](https://doi.org/10.1145/2517349.2522713)
- Author PDF: https://read.seas.harvard.edu/~kohler/pubs/tu13speedy.pdf
