---
title: "Umbra: A Disk-Based System with In-Memory Performance"
authors:
- Thomas Neumann
- Michael Freitag
year: 2020
venue: CIDR
arxiv: null
doi: null
source: "https://www.cidrdb.org/cidr2020/papers/p29-neumann-cidr20.html"
topics:
- databases
- contemporary-db
seed_rank: 821
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: Efficiently Compiling Efficient Query Plans for Modern Hardware
  url: "https://doi.org/10.14778/2002938.2002940"
  year: 2011
  arxiv: null
  doi: 10.14778/2002938.2002940
see:
- "832-efficiently-compiling-efficient-query-plans-for-modern-hardw"
---

# Umbra: A Disk-Based System with In-Memory Performance

## One-sentence takeaway

Umbra evolves HyPer into an SSD-backed DBMS whose LeanStore-style buffer manager uses variable-size pages (64 KiB and up, via per-size-class virtual-memory reservations and pointer swizzling) so cached working sets run at in-memory speed while uncached data spills without a fixed-page tax.

## Why it matters here

Anoptic already lives in the “hot working set in RAM, cold on NVMe” regime. Umbra is the buffer-manager recipe: variable pages so long strings and dictionaries stay contiguous, optimistic versioned latches so readers do not ping a hash table, and adaptive compilation so cheap queries are interpreted.

## Key ideas

- Each page-size class reserves a virtual-memory region the size of the whole pool; physical pages are mapped on pin and `MADV_DONTNEED`’d on evict, so mixed 64/128/256 KiB pages do not fragment one arena.
- Swips are tagged 64-bit words: either a swizzled in-memory pointer or an unswizzled (PID, size-class) pair, with exactly one owning swip per page (tree-shaped buffer-managed structures).
- Versioned latches support exclusive, shared, and optimistic modes; optimistic readers validate a version counter and retry instead of taking the cache-line lock.
- Query execution is a step-wise state machine with adaptive compilation (bytecode first, LLVM if a parallel step is hot), plus online reservoir samples and HyperLogLog sketches for the optimizer.

## Caveats

## Links

- CIDR: https://www.cidrdb.org/cidr2020/papers/p29-neumann-cidr20.html
- PDF: https://db.in.tum.de/~freitag/papers/p29-neumann-cidr20.pdf
