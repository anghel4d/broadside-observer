---
title: "How to Architect a Query Compiler, Revisited"
authors:
  - "Ruby Y. Tahboub"
  - "Gregory M. Essertel"
  - "Tiark Rompf"
year: 2018
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3183713.3196893"
source: "https://doi.org/10.1145/3183713.3196893"
topics:
  - query-compilation
  - lb2
seed_rank: 789
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
  - title: "Relaxed Operator Fusion for In-Memory Databases: Making Compilation, Vectorization, and Prefetching Work Together At Last"
    url: "https://doi.org/10.14778/3115404.3115411"
    year: 2017
    arxiv: null
    doi: "10.14778/3115404.3115411"
    card: "793-relaxed-operator-fusion-for-in-memory-databases-making-compi"
  - title: "Umbra: A Disk-Based System with In-Memory Performance"
    url: "https://www.cidrdb.org/cidr2020/papers/p29-neumann-cidr20.pdf"
    year: 2020
    arxiv: null
    doi: null
    card: "871-umbra-a-disk-based-system-with-in-memory-performance"
  - title: "Efficiently Compiling Efficient Query Plans for Modern Hardware"
    url: "https://doi.org/10.14778/2002938.2002940"
    year: 2011
    arxiv: null
    doi: "10.14778/2002938.2002940"
    card: "859-efficiently-compiling-efficient-query-plans-for-modern-hardw"
---

# How to Architect a Query Compiler, Revisited

## One-sentence takeaway

How to Architect a Query Compiler, Revisited: Compiles query plans to tight machine code / LLVM for modern CPUs.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths.

## Key ideas

- Venue/year anchor: SIGMOD 2018.
- Push code generation past tuple-at-a-time interpreters; fuse operators carefully.
- Primary topics: query-compilation, lb2.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3183713.3196893](https://doi.org/10.1145/3183713.3196893)
- URL: https://doi.org/10.1145/3183713.3196893
