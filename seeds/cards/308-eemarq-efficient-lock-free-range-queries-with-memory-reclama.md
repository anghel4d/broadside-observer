---

title: "EEMARQ: Efficient Lock-Free Range Queries with Memory Reclamation"
authors:
  - "Gali Sheffi"
  - "Pedro Ramalhete"
  - "Erez Petrank"
year: 2022
venue: "arXiv:cs.DB"
arxiv: "2210.17086"
doi: null
source: "https://arxiv.org/abs/2210.17086"
topics:
  - memory-allocation
  - lockfree
seed_rank: 308
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
lineage: memory-reclamation
cites:
  - title: "Interval-Based Memory Reclamation"
    url: "https://doi.org/10.1145/3178487.3178488"
    year: 2018
    arxiv: null
    doi: "10.1145/3178487.3178488"
    card: "402-interval-based-memory-reclamation"
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
    card: "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# EEMARQ: Efficient Lock-Free Range Queries with Memory Reclamation

## One-sentence takeaway

Multi-Version Concurrency Control (MVCC) is a common mechanism for achieving linearizable range queries in database systems and concurrent data-structures.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (EEMARQ: Efficient Lock-Free Range Queries with Memory Reclamation).

## Key ideas

- Multi-Version Concurrency Control (MVCC) is a common mechanism for achieving linearizable range queries in database systems and concurrent data-structures.
- The core idea is to keep previous versions of nodes to serve range queries, while still providing atomic reads and updates.
- Existing concurrent data-structure implementations, that support linearizable range queries, are either slow, use locks, or rely on blocking reclamation schemes.
- We present EEMARQ, the first scheme that uses MVCC with lock-free memory reclamation to obtain a fully lock-free data-structure supporting linearizable inserts, deletes, contains, and range queries.
- Evaluation shows that EEMARQ outperforms existing solutions across most workloads, with lower space overhead and while providing full lock freedom.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2210.17086](https://arxiv.org/abs/2210.17086)
- URL: https://arxiv.org/abs/2210.17086
