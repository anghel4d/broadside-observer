---
title: An empirical evaluation of in-memory multi-version concurrency control
authors:
- Yingjun Wu
- Joy Arulraj
- Jiexi Lin
- Ran Xian
- Andrew Pavlo
year: 2017
venue: Proceedings of the VLDB Endowment
arxiv: null
doi: 10.14778/3067421.3067427
source: "https://doi.org/10.14778/3067421.3067427"
topics:
- databases
- contemporary-db
seed_rank: 852
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Speedy Transactions in Multicore In-Memory Databases"
    url: "https://doi.org/10.1145/2517349.2522713"
    year: 2013
    arxiv: null
    doi: "10.1145/2517349.2522713"
  - title: "High-Performance Concurrency Control Mechanisms for Main-Memory Databases"
    url: "https://doi.org/10.14778/2095686.2095689"
    year: 2011
    arxiv: null
    doi: "10.14778/2095686.2095689"
see:
  - "851-speedy-transactions-in-multicore-in-memory-databases"
---

# An empirical evaluation of in-memory multi-version concurrency control

## One-sentence takeaway

On a 40-core in-memory DBMS, MVCC's four knobs — protocol, version storage, GC, and index pointers — each have a different bottleneck; latch-free and serializable variants from the disk era do not automatically win.

## Why it matters here

Anoptic / GRID COMMAND keep multiple live versions of world state (prediction vs commit, replay vs live). This paper is the checklist for which version chain, GC, and index-indirection choice actually scales when the working set is already in RAM.

## Key ideas

- Four serializable protocols implemented uniformly in Peloton: MVTO, MVOCC, MV2PL (no-wait), and certifiers (SSI / SSN). MVOCC avoids header writes on reads but validates the whole read set; MV2PL packs txn-id + read-cnt into one CAS word.
- Three version layouts: append-only (O2N vs N2O chains), time-travel table, and delta/rollback segments. N2O needs either index updates or a mapping table; O2N walks long chains unless GC is aggressive.
- GC is either tuple-level vacuum, cooperative, or transaction-level; index management is logical (stable TupleId / primary key) vs physical pointers that must be rewritten on every new version.
- Almost every new OLTP engine of the 2010s is MVCC, but there is no standard combination — Oracle/Postgres/InnoDB, Hekaton, HyPer, HANA, and MemSQL all pick different cells of this matrix.
- Speculative reads of uncommitted versions and eager update-of-readers cut aborts but reintroduce centralized dependency counters that collapse past a few dozen cores.

## Caveats

## Links

- DOI: [10.14778/3067421.3067427](https://doi.org/10.14778/3067421.3067427)
- PDF: https://www.vldb.org/pvldb/vol10/p781-Wu.pdf
