---
title: "Relaxed Operator Fusion for In-Memory Databases: Making Compilation, Vectorization, and Prefetching Work Together At Last"
authors:
  - "Prashanth Menon"
  - "Todd C. Mowry"
  - "Andrew Pavlo"
year: 2017
venue: "VLDB"
arxiv: null
doi: "10.14778/3115404.3115411"
source: "https://doi.org/10.14778/3115404.3115411"
topics:
  - query-compilation
  - vectorized
seed_rank: 793
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
  - title: "Data Blocks: Hybrid OLTP and OLAP on Compressed Storage using both Vectorization and Compilation"
    url: "https://doi.org/10.1145/2882903.2882925"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882925"
    card: "771-data-blocks-hybrid-oltp-and-olap-on-compressed-storage-using"
  - title: "Efficiently Compiling Efficient Query Plans for Modern Hardware"
    url: "https://doi.org/10.14778/2002938.2002940"
    year: 2011
    arxiv: null
    doi: "10.14778/2002938.2002940"
    card: "859-efficiently-compiling-efficient-query-plans-for-modern-hardw"
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
---

# Relaxed Operator Fusion for In-Memory Databases: Making Compilation, Vectorization, and Prefetching Work Together At Last

## One-sentence takeaway

Relaxed Operator Fusion for In-Memory Databases: Compiles query plans to tight machine code / LLVM for modern CPUs.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths.

## Key ideas

- Venue/year anchor: VLDB 2017.
- Push code generation past tuple-at-a-time interpreters; fuse operators carefully.
- Operate on cache-resident vectors/columns to cut interpretation overhead and enable SIMD.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3115404.3115411](https://doi.org/10.14778/3115404.3115411)
- URL: https://doi.org/10.14778/3115404.3115411
