---
title: "Types for Safe Locking: Static Race Detection for Java"
authors:
- Martín Abadi
- Cormac Flanagan
- Stephen N. Freund
year: 2006
venue: ACM Transactions on Programming Languages and Systems
arxiv: null
doi: 10.1145/1119479.1119480
source: "https://doi.org/10.1145/1119479.1119480"
topics:
- race-detection
- type-systems
- java
- type-safety
seed_rank: 882
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites: []
---

# Types for Safe Locking: Static Race Detection for Java

## One-sentence takeaway

An annotation-based Java type-and-effect system (`guarded_by` / `requires`) tracks which lock protects which field and proves race-freedom for well-typed programs, with inference that scaled to hundreds of thousands of lines.

## Why it matters here

Ancestor of Checker Framework locking checkers and of every "this mutex owns that field" discipline Anoptic C/Rust will reinvent. The archival cite is the 2006 TOPLAS paper (Abadi, Flanagan, Freund), not the 2000 PLDI cut alone.

## Key ideas

- Field annotation `guarded_by ℓ` and method annotation `requires ℓ₁…ℓₙ`; the checker maintains the held-lock set as an effect.
- Supports internally synchronized classes, client-side locking, thread-local classes, dynamically allocated locks, and optional lock-order annotations against deadlock.
- The protecting lock expression must be stable (typically `final`) so the protector cannot change underfoot.
- Race-freedom theorem: a well-typed program has no conflicting unsynchronized accesses. Evaluated on >40 kLOC hand-annotated Java; later inference brought the checker to ~500 kLOC.
- Lineage: ESOP 1999 (Flanagan–Abadi), PLDI 2000 (Flanagan–Freund), this TOPLAS expansion. Previous card DOI `10.1145/349299.349328` is the PLDI 2000 paper; the title on this card is the 2006 journal version.

## Caveats

## Links

- DOI: [10.1145/1119479.1119480](https://doi.org/10.1145/1119479.1119480)
- Author PDF: https://www.cs.williams.edu/~freund/papers/06-toplas.pdf
