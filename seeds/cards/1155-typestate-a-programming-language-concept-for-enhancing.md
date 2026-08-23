---
title: "Typestate: A Programming Language Concept for Enhancing Software Reliability"
authors:
  - "Robert E. Strom"
  - "Shaula Yemini"
year: 1986
venue: "IEEE TSE"
arxiv: null
doi: "10.1109/TSE.1986.6312929"
source: "https://doi.org/10.1109/TSE.1986.6312929"
topics:
  - "typestate"
  - "protocol-types"
  - "static-analysis"
  - "typed-programming-systems"
seed_rank: 1155
seed_batch: "archive-2026-08-24"
reviewed: "2026-08-24"
pool: "languages"
relevance_score: 10
lineage: typestate
cites:
  - title: "Linear Types Can Change the World!"
    url: "https://doi.org/10.1016/B978-0-08-040659-0.50012-7"
    year: 1990
    arxiv: null
    doi: null
  - title: "Ownership Types for Flexible Alias Protection"
    url: "https://doi.org/10.1145/286936.286947"
    year: 1998
    arxiv: null
    doi: "10.1145/286936.286947"
  - title: "Idris 2: Quantitative Type Theory in Practice"
    url: "https://doi.org/10.1145/3473571"
    year: 2021
    arxiv: "2104.00480"
    doi: "10.1145/3473571"
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    arxiv: null
    doi: "10.1007/978-3-642-00590-9_7"
see:
  - "148-linear-types-can-change-the-world"
  - "1048-ownership-types-for-flexible-alias-protection"
  - "1055-idris-2-quantitative-type-theory-in-practice"
  - "021-handlers-of-algebraic-effects"
---

# Typestate: A Programming Language Concept for Enhancing Software Reliability

## One-sentence takeaway

A type is the set of operations that will ever be legal; a *typestate* is the subset that is legal *here* — a compile-time lattice of object states that rejects "read before init" and "use after free" without a GC.

## Problem

Type checking does not see protocol. `FILE*` in C has type pointer-to-FILE at every program point; `fread` on an unopened or already-closed file is well-typed and undefined. Linear types (148) count uses; ownership (1048) counts aliases; neither is a state machine. NIL (IBM, 1980s) needed a language in which every compiled module has defined execution, including on exceptions, without `dispose` or a collector.

## Design

Typestate refines type. For each type the designer publishes a meet-semilattice of states (⊥ < uninitialized < initialized < opened, …). Each operation has a required entry typestate and a guaranteed exit typestate. At a join, the checker takes the meet — the greatest lower bound of the incoming states — so a variable that is initialized on one branch and not on the other is uninitialized afterwards. Coercions (down the lattice) are inserted explicitly; they discard information and, at the bottom, run finalizers. The NIL checker is linear in program size: one lattice meet per join, no fixpoint iteration over a heap. Because every path to an exception or return has a typestate, the compiler can insert the matching `close`/`free` and refuse `dispose`.

## Evidence

IEEE Transactions on Software Engineering SE-12(1), January 1986, pp. 157–171, DOI `10.1109/TSE.1986.6312929`. The paper reports experience in NIL: uninitialized reads and dangling dereferences become compile errors; exception paths get deterministic cleanup. Hermes (the successor) kept the idea. Vault (DeLine/Fähndrich 2001), Fugue, Plaid, and the Rust "typestate pattern" (unusable empty structs, `Pin`, session-typed sockets) are the industrial descendants — cite, do not mint.

## Limitations

The 1986 system tracks *named* objects along the stack; it is not alias-aware (that is 1048) and not uniqueness-aware (that is 148). Heap-carried protocol still needs ownership or separation. The lattice is programmer-written, not inferred. Typestate-oriented programming (Aldrich 2009) and Vault are implementations, not a second origin.

## Implications for Broadside

ano's host API (file, socket, GPU encoder, lock, frame-arena) is a protocol, not a type. Encode it as a typestate lattice in the surface language or as a lint on the C ABI: `Encoder.uninitialized → encoding → submitted`, meet at `select`, finalize on every return. Do not reach for Idris QTT (1055) or linear Haskell for this — those count; typestate sequences. GRID COMMAND netcode and save I/O are the same pattern.

## Bottom line

Mint the 1986 origin. Cite linear types, ownership, QTT, handlers; do not remint them. Vault/Plaid are descendants.

## Links

- DOI: [10.1109/TSE.1986.6312929](https://doi.org/10.1109/TSE.1986.6312929)
- IBM abstract: https://research.ibm.com/publications/typestate-a-programming-language-concept-for-enhancing-software-reliability
