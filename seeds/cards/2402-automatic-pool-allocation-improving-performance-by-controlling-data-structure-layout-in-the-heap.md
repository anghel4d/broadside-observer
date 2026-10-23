---
title: "Automatic Pool Allocation: Improving Performance by Controlling Data Structure Layout in the Heap"
authors:
  - "Chris Lattner"
  - "Vikram Adve"
year: 2005
venue: "PLDI 2005 (ACM SIGPLAN Conference on Programming Language Design and Implementation), pp. 129-142"
arxiv: null
doi: "10.1145/1065010.1065027"
source: "https://llvm.org/pubs/2005-05-21-PLDI-PoolAlloc.pdf"
topics:
  - pool-allocation
  - arenas
  - points-to-analysis
  - data-layout
  - pointer-compression
seed_rank: 2402
seed_batch: "archive-2026-10-24"
reviewed: "2026-10-24"
pool: "systems"
relevance_score: 8
lineage: region-memory
see:
  - 030-region-based-memory-management
  - 133-region-based-memory-management-in-cyclone
  - 1361-llvm-a-compilation-framework-for-lifelong-program-analysis-tra
cites:
  - title: "Automatic Pool Allocation: Improving Performance by Controlling Data Structure Layout in the Heap"
    url: "https://doi.org/10.1145/1065010.1065027"
    year: 2005
    arxiv: null
    doi: "10.1145/1065010.1065027"
---

# Automatic Pool Allocation: Improving Performance by Controlling Data Structure Layout in the Heap

## One-sentence takeaway

Lattner and Adve use a context-sensitive, field-sensitive points-to graph (Data Structure Analysis, with heap cloning) to give every distinct heap data-structure instance in an unmodified C/C++ program its own memory pool, bound each pool's lifetime to the pointers that reach it, and then exploit the segregation — eliminating frees before `pooldestroy`, switching free-less pools to bump-pointer allocation, using tighter alignment for type-homogeneous pools — speeding heap-intensive programs up by 10–25% in many cases, about 2× in two and over 10× in two small benchmarks.

## Why it matters here

Anoptic already chooses arenas and regions by hand; this paper is the evidence for why that choice pays and the recipe for automating it. Its "build-use-destroy" pattern is exactly a frame or tick arena, its bump-pointer promotion is the rule "an arena with no individual frees needs no headers or free lists", and its transparent pointer compression (32-bit pool-relative indices on 64-bit hosts) matches using indices instead of pointers in ECS chunks. For ano, the same escape analysis suggests the compiler can place temporary tables of a query in a per-query region automatically.

## Key ideas

- **Partition by points-to node.** Objects represented by the same DS-graph node go in a common pool; heap cloning lets distinct instances built by the same functions (two lists from one `createnode`) land in different pools.
- **Pool lifetimes.** If a node does not escape a function, the function itself calls `poolcreate`/`pooldestroy`; if it escapes, a pool descriptor is passed in from the caller. `pooldestroy` releases all of a pool's memory.
- **Full C/C++.** Handles function pointers and virtual functions (including indirect call sites whose possible callees need different pool arguments), recursion, varargs, unsafe casts and unions, setjmp/longjmp and exceptions; incomplete programs only pool-allocate memory that does not escape the analysed scope.
- **Why it speeds up.** Segregation shrinks working sets (cache and TLB), allocation order often matches traversal order, and some traversals become linear strides that hardware prefetchers follow.
- **Four optimizations.** Skip pools for singleton objects ("Selective PA"); eliminate final `poolfree` calls before `pooldestroy` ("PoolFreeElim"); promote pools with no frees to header-less bump-pointer pools; use 4-byte instead of 8-byte alignment for provably type-homogeneous pools.
- **Pool collocation heuristics** for deciding when to merge nodes into one pool.
- **Clients.** Pointer compression replaces pointers with pool-relative indices; pools also underpin memory safety without GC in the authors' other work.
- **Cost.** Compile time for the transformation, including the pointer analysis, is 1.25 s or less for programs up to 100K lines of source; none of the benchmarks is hurt significantly.

## Caveats

Whole-program (or at least whole-scope) analysis is required, and precision depends on the points-to analysis; pools can separate data that is accessed together, and many small pools can waste nearly-empty pages. The goal is performance, not automatic reclamation — memory is not reclaimed earlier than the program frees it except in limited cases. Benchmarks are SPEC, PtrDist, Olden and FreeBench on a 2005 Athlon system.

## Links

- Paper (LLVM publications PDF): https://llvm.org/pubs/2005-05-21-PLDI-PoolAlloc.pdf
- Paper (DOI, PLDI 2005): https://doi.org/10.1145/1065010.1065027
