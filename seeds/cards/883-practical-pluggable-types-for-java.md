---
title: Practical Pluggable Types for Java
authors:
- Matthew M. Papi
- Mahmood Ali
- Telmo Luis Correa Jr.
- Jeff H. Perkins
- Michael D. Ernst
year: 2008
venue: ISSTA
arxiv: null
doi: 10.1145/1390630.1390656
source: "https://doi.org/10.1145/1390630.1390656"
topics:
- checker-framework
- pluggable-types
- java
- type-safety
seed_rank: 883
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Types for Safe Locking: Static Race Detection for Java"
    url: "https://doi.org/10.1145/1119479.1119480"
    year: 2006
    arxiv: null
    doi: "10.1145/1119479.1119480"
see:
  - "882-types-for-safe-locking-static-race-detection-for-java"
---

# Practical Pluggable Types for Java

## One-sentence takeaway

The Checker Framework turns Java 8-style type annotations into a compiler plugin API so nullness, locking, tainting, and other qualifiers become libraries rather than language forks.

## Why it matters here

Industrial-strength gradual enrichment of a host type system — the same move Anoptic would make if it grew pluggable checkers (units, capabilities, taint) on C or a DSL without changing the core language.

## Key ideas

- Qualifiers are annotations on existing Java types; each checker is a plugin with its own type lattice, flow-sensitive refinement, and stub files for unannotated libraries.
- Flow-sensitive local inference means most local variables need no annotation; the burden sits on fields, method signatures, and natives.
- Soundness is per-checker: the framework gives you AST/CFG hooks, not a single theorem.
- Direct descendant of the lock-type line (card 882) and ancestor of later Checker Framework releases still used in production Java.
- ISSTA 2008 is the archival intro; the project then tracked JSR 308 into javac itself.

## Caveats

## Links

- DOI: [10.1145/1390630.1390656](https://doi.org/10.1145/1390630.1390656)
- Project: https://checkerframework.org
