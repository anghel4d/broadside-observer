---
title: The Design and Implementation of Modern Column-Oriented Database Systems
authors:
- Daniel Abadi
- Peter Boncz
- Stavros Harizopoulos
- Stratos Idreos
- Samuel Madden
year: 2013
venue: Foundations and Trends in Databases
arxiv: null
doi: 10.1561/1900000024
source: "https://doi.org/10.1561/1900000024"
topics:
- databases
- contemporary-db
seed_rank: 834
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# The Design and Implementation of Modern Column-Oriented Database Systems

## One-sentence takeaway

This FnT monograph is the field guide to C-Store / MonetDB / VectorWise-style column stores: late materialization, vectorized execution, compression that the CPU can operate on directly, and the storage/execution tricks that made analytic scans beat row stores by orders of magnitude.

## Why it matters here

Anoptic’s SoA ECS layout *is* a column store. This survey is the checklist — compression, zone maps, late materialize, vector primitives — before GRID COMMAND or Broadside invent a second, worse columnar engine.

## Key ideas

- Store and process one attribute at a time so scans read only referenced columns and SIMD/vector loops stay dense.
- Late materialization keeps tuple reconstruction off the hot path; operate on encoded columns (RLE, dictionary, bit-pack) for as long as possible.
- Vectorized primitives amortize interpretation and expose ILP/SIMD; they are the execution model most column stores actually ship.
- Updates are the hard part: read-optimized columns plus a writeable delta / LSM side, periodically merged, rather than in-place row updates.

## Caveats

## Links

- DOI: [10.1561/1900000024](https://doi.org/10.1561/1900000024)
- URL: https://doi.org/10.1561/1900000024
