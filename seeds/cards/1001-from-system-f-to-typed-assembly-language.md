---
title: "From System F to Typed Assembly Language"
authors: ["J. Gregory Morrisett", "David Walker", "Karl Crary", "Neal Glew"]
year: 1998
venue: "POPL"
arxiv: null
doi: "10.1145/268946.268954"
source: "https://doi.org/10.1145/268946.268954"
topics: [typed-assembly-language, type-preserving-compilation, region-memory-capabilities]
seed_rank: 1001
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "languages"
relevance_score: 10
lineage: typed-assembly
cites:
  - title: "From System F to Typed Assembly Language"
    url: "https://doi.org/10.1145/319301.319345"
    year: 1999
    arxiv: null
    doi: "10.1145/319301.319345"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
  - title: "Implementation of the Typed Call-by-Value λ-Calculus using a Stack of Regions"
    url: "https://doi.org/10.1145/174675.177855"
    year: 1994
    arxiv: null
    doi: "10.1145/174675.177855"
  - title: "The Essence of Compiling with Continuations"
    url: "https://doi.org/10.1145/173262.155113"
    year: 1993
    arxiv: null
    doi: "10.1145/173262.155113"
see:
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "032-implementation-of-the-typed-call-by-value-calculus-using-a-s"
  - "030-region-based-memory-management"
  - "666-the-essence-of-compiling-with-continuations"
---

# From System F to Typed Assembly Language

## One-sentence takeaway

Type-preserving compilation from System F down to a RISC-like typed assembly language (TAL) so the output is automatically certified safe.

## Why it matters here

Anoptic-engine is C/Vulkan and ano wants array-language safety without a GC pause; TAL is the missing low-level end of the region/capability story already on the shelf (028, 030, 032). It shows how closures, tuples, and ADTs survive register allocation and still check.

## Key ideas

- TAL is a conventional RISC assembly with a static type system that still enforces high-level abstractions (closures, tuples, abstract data types) after compilation.
- The translation is a sequence of type-preserving passes — CPS, then a simplified polymorphic closure conversion, then register/code generation — so well-typed source yields well-typed assembly.
- Types place almost no restrictions on register allocation, instruction selection, or scheduling; safety is orthogonal to the usual backend freedoms.
- The compiler produces proof-carrying / certified code automatically: a TAL type checker is a small TCB for untrusted machine code.
- Journal follow-up (TOPLAS 1999) and later STAL extend the same idea to a typed stack; Alias Types (ESOP 2000) add destructive update under aliasing.

## Caveats


## Links

- DOI: [10.1145/268946.268954](https://doi.org/10.1145/268946.268954)
- TOPLAS 1999: [10.1145/319301.319345](https://doi.org/10.1145/319301.319345)
- Author PDF: https://www.cs.princeton.edu/~dpw/papers/tal-toplas.pdf
- Cornell TALC TR: https://www.cs.cornell.edu/talc/papers/tal-tr-abstract.html
