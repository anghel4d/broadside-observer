---
title: Applied Type System with Stateful Views
authors:
- Hongwei Xi
- Dengping Zhu
- Yanka Li
year: 2004
venue: Boston University Technical Report BUCS-2005-03
arxiv: null
doi: null
source: "https://hdl.handle.net/2144/1825"
topics:
- ats
- dependent-types
- linear-types
- type-safety
seed_rank: 910
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Dependent Types in Practical Programming"
    url: "https://doi.org/10.1145/292540.292560"
    year: 1999
    doi: "10.1145/292540.292560"
  - title: "Guarded Recursive Datatype Constructors"
    url: "https://doi.org/10.1145/604131.604150"
    year: 2003
    doi: "10.1145/604131.604150"
see:
  - "904-dependent-types-in-practical-programming"
  - "915-guarded-recursive-datatype-constructors"
---

# Applied Type System with Stateful Views

## One-sentence takeaway

ATS/SV tracks heap shapes with recursive *stateful views* (linear resources such as `T@L` and `arrayView(T,n,L)`) so pointer programs get dependent+linear specs that erase before runtime.

## Why it matters here

This is the systems-programming sibling of DML and a peer to Rust’s goals: prove a doubly-linked tree actually points both ways, then erase the proof. Anoptic arenas, meshlet scratch, and ECS columns are exactly “views over addresses”; persistent `!V` is how you hide a pointer once the invariant is established.

## Key ideas

- Primitive view `T@L` means a value of type T lives at address L; views compose with linear ⊗ and ⊸ and can be defined recursively (`arrayView`).
- Functions carry a view precondition and postcondition (`swap` exchanges `t@l` with `t'@l'`); proofs are manipulated in the statics and erased.
- View change is explicit and total: `split`/`unsplit` reassociate an array so `sub` is O(1) rather than walking a proof of length i.
- Persistent views `!V` (intuitionistic) let you hide a pointer as an ML-style `ref` after initialization, without tracking it forever.
- Technical report BUCS-2005-03 (manuscript 2004-09-27); the previously listed Springer DOI `10.1007/978-3-540-24725-8_16` is a different ESOP 2004 paper.

## Caveats

## Links

- OpenBU: https://hdl.handle.net/2144/1825
- PDF: https://open.bu.edu/bitstreams/2c20177c-44d5-498e-a7e0-3ac321b4f65f/download
