---
title: "Soufflé: On Synthesis of Program Analyzers"
authors:
  - "Herbert Jordan"
  - "Bernhard Scholz"
  - "Pavle Subotić"
year: 2016
venue: "CAV 2016, LNCS 9780, pp. 422-430"
arxiv: null
doi: "10.1007/978-3-319-41540-6_23"
source: "https://www.souffle-lang.com/pdf/cav16.pdf"
topics:
  - "datalog"
  - "partial-evaluation"
  - "futamura-projections"
  - "index-selection"
  - "rule-engines"
seed_rank: 2559
seed_batch: "archive-2026-11-12"
reviewed: "2026-11-12"
pool: "languages"
relevance_score: 8
lineage: production-rules
cites: []
see:
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
  - "1094-terascale-query-processing-in-the-browser-wglog"
  - "2541-set-oriented-production-rules-in-relational-database-systems"
---

# Soufflé: On Synthesis of Program Analyzers

## One-sentence takeaway

Soufflé gets hand-written-tool speed out of Datalog by treating a rule set as a program to specialize, not data to interpret: three Futamura projections turn semi-naive evaluation into a relational-algebra machine program, then into templated C++ with specialized B-trees and tries, and a Dilworth-style chain cover picks the minimum set of indices.

## Why it matters here

ano's standing rules (する/なる) are Datalog-shaped: set-at-a-time rules over columns that run to a fixed point each tick. Soufflé is the reference for compiling such rules ahead of time instead of running a generic engine, and its index-selection trick (cover all needed lexicographic orders with the fewest indices by partitioning a lattice into chains) applies directly to deciding which sort orders an ECS archetype table should maintain.

## Key ideas

- **Datalog as a specification.** Facts are the extensional database, rules the intensional one; the rules are compiled, and the facts are fed to the resulting binary at run time.
- **Staged specialization.** Semi-naive evaluation is specialized by the rules into an imperative RAM (relational algebra machine) program; the RAM interpreter is specialized by that program into C++; templates specialize data structures and comparators when the C++ is compiled.
- **Minimum index sets.** Each join needs some lexicographic order; orders that are prefixes of one another form chains, and a Dilworth-inspired polynomial algorithm picks the smallest chain cover so one index serves a whole chain.
- **Specialized relations.** Parallel B-trees and tries with per-relation tuple, node and iterator types, plus templated lexicographic comparisons, remove virtual dispatch and runtime type checks.
- **Results.** Context-insensitive points-to analysis on OpenJDK7 (1.4M variables, 350K objects, 160K methods) runs in 35 seconds on a multicore desktop, on par with hand-written tools.

## Caveats

This is a short tool paper; the index-selection algorithm and parallel data structures are only sketched here and are fully described in later Soufflé papers. Ahead-of-time C++ compilation adds compile latency that a live game rule editor would feel; later Soufflé versions added an interpreter for that reason. Evaluation is a single workload family (Java points-to).

## Links

- PDF: https://www.souffle-lang.com/pdf/cav16.pdf
- DOI: https://doi.org/10.1007/978-3-319-41540-6_23
- Project page: https://souffle-lang.github.io/cav-paper
