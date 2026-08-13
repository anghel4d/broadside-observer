---
title: "Umbra: A Disk-Based System with In-Memory Performance"
authors:
  - "Thomas Neumann"
  - "Michael Freitag"
year: 2020
venue: "CIDR"
arxiv: null
doi: null
source: "https://www.cidrdb.org/cidr2020/papers/p29-neumann-cidr20.pdf"
topics:
  - columnar
  - buffer-manager
  - query-compilation
seed_rank: 871
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "A Relational Model of Data for Large Shared Data Banks"
    url: "https://doi.org/10.1145/362384.362685"
    year: 1970
    arxiv: null
    doi: "10.1145/362384.362685"
    card: "048-a-relational-model-of-data-for-large-shared-data-banks"
  - title: "Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask"
    url: "https://doi.org/10.14778/3236186.3236200"
    year: 2018
    arxiv: null
    doi: "10.14778/3236186.3236200"
    card: "770-everything-you-always-wanted-to-know-about-compiled-and-vect"
  - title: "How to Architect a Query Compiler, Revisited"
    url: "https://doi.org/10.1145/3183713.3196893"
    year: 2018
    arxiv: null
    doi: "10.1145/3183713.3196893"
    card: "789-how-to-architect-a-query-compiler-revisited"
  - title: "Virtual-Memory Assisted Buffer Management"
    url: "https://doi.org/10.1145/3588709"
    year: 2023
    arxiv: null
    doi: "10.1145/3588709"
    card: "774-virtual-memory-assisted-buffer-management"
  - title: "LeanStore: In-Memory Data Management Beyond Main Memory"
    url: "https://doi.org/10.1109/ICDE.2018.00026"
    year: 2018
    arxiv: null
    doi: "10.1109/ICDE.2018.00026"
    card: "842-leanstore-in-memory-data-management-beyond-main-memory"
---

# Umbra: A Disk-Based System with In-Memory Performance

## One-sentence takeaway

Umbra: Compiles query plans to tight machine code / LLVM for modern CPUs.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths. Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: CIDR 2020.
- Push code generation past tuple-at-a-time interpreters; fuse operators carefully.
- Primary topics: columnar, buffer-manager, query-compilation.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- URL: https://www.cidrdb.org/cidr2020/papers/p29-neumann-cidr20.pdf
