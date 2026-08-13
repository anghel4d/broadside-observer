---
title: "Silo: Speculative Shared-Memory Multicore Transactions"
authors:
  - "Stephen Tu"
  - "Wenting Zheng"
  - "Eddie Kohler"
  - "Barbara Liskov"
  - "Samuel Madden"
year: 2013
venue: "SOSP"
arxiv: null
doi: "10.1145/2517349.2522713"
source: "https://doi.org/10.1145/2517349.2522713"
topics:
  - transactions
  - main-memory
  - occ
seed_rank: 875
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Cicada: Dependably Fast Multi-Core In-Memory Transactions"
    url: "https://doi.org/10.1145/3035918.3064015"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3064015"
    card: "790-cicada-dependably-fast-multi-core-in-memory-transactions"
  - title: "Hekaton: SQL Server's Memory-Optimized OLTP Engine"
    url: "https://doi.org/10.1145/2463676.2463710"
    year: 2013
    arxiv: null
    doi: "10.1145/2463676.2463710"
    card: "813-hekaton-sql-server-s-memory-optimized-oltp-engine"
  - title: "FOEDUS: OLTP Engine for a Thousand Cores and NVRAM"
    url: "https://doi.org/10.1145/2723372.2746480"
    year: 2015
    arxiv: null
    doi: "10.1145/2723372.2746480"
    card: "858-foedus-oltp-engine-for-a-thousand-cores-and-nvram"
  - title: "Staring into the Abyss: An Evaluation of Concurrency Control with One Thousand Cores"
    url: "https://doi.org/10.14778/2735508.2735511"
    year: 2014
    arxiv: null
    doi: "10.14778/2735508.2735511"
    card: null
---

# Silo: Speculative Shared-Memory Multicore Transactions

## One-sentence takeaway

Silo: OCC main-memory transactions with epoch-based protection for multicore scalability.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads. Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: SOSP 2013.
- Epochs amortize validation/protection overhead across many transactions.
- Avoid centralized contention points common in classic 2PL/OCC engines.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2517349.2522713](https://doi.org/10.1145/2517349.2522713)
- URL: https://doi.org/10.1145/2517349.2522713
