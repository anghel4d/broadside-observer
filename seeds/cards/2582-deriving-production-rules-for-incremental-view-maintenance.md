---
title: "Deriving Production Rules for Incremental View Maintenance"
authors:
  - "Stefano Ceri"
  - "Jennifer Widom"
year: 1991
venue: "VLDB 1991 (17th International Conference on Very Large Data Bases), pp. 577-589"
arxiv: null
doi: null
source: "https://www.vldb.org/conf/1991/P577.PDF"
topics:
  - "production-rules-triggers"
  - "incremental-view-maintenance"
  - "standing-rules"
  - "set-oriented-rules"
  - "relational-ecs-queries"
seed_rank: 2582
seed_batch: "archive-2026-11-14"
reviewed: "2026-11-14"
pool: "languages"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Set-Oriented Production Rules in Relational Database Systems"
    url: "https://doi.org/10.1145/93597.98735"
    year: 1990
    arxiv: null
    doi: "10.1145/93597.98735"
  - title: "Efficiently Updating Materialized Views"
    url: "https://doi.org/10.1145/16894.16861"
    year: 1986
    arxiv: null
    doi: "10.1145/16894.16861"
see:
  - "2541-set-oriented-production-rules-in-relational-database-systems"
---

# Deriving Production Rules for Incremental View Maintenance

## One-sentence takeaway

Given a view written as an SQL select and the keys of its base tables, the system works out by static analysis which base-table references are "safe" and then generates set-oriented Starburst production rules. The rules apply insert, delete and update batches incrementally through transition tables, and rematerialize only where the analysis cannot prove incremental maintenance correct.

## Why it matters here

ano's なる (derived, always-true) rules are materialized views over ECS columns, and writing them as hand-coded する triggers is the "difficult and ad-hoc process" this paper replaces. The recipe fits ano well. Declare the derived relation once. Use key information (in ano, entity ids and unique components) to compute which columns bind a row, and from that whether the derived relation can hold duplicates and whether a change to each source can be pushed through as a delta. Then compile the result into set-oriented rules that read per-tick inserted/deleted/updated sets. It is the step between Widom and Finkelstein's rule semantics (2541) and the later incremental-view work already in the library (1841, DBSP), and it shows the compile-time analysis can tell the user which edits would make a view cheap to maintain.

## Key ideas

- **Compile-time pipeline.** View definition plus keys go through view analysis (duplicates? which references are safe?), then rule generation for insert, delete and update on each referenced base table, with a fallback rematerialization rule for unsafe cases.
- **Bound columns and safety.** Bound columns B(V) start as the projected columns and grow through equality predicates and keys. A top-level reference Ti is safe when B(V) contains a key of Ti, and then ΔV can be computed from ΔTi and the other base tables alone, without recomputing V.
- **Transition tables.** Rules read `inserted T`, `deleted T`, `old updated T` and `new updated T`; the old state of a table is reconstructed from the current table and those sets, which are usually small.
- **Updates become deletes plus inserts.** A worked example shows that a base-table update can remove one view row and add two others, so the generated rules always express base updates as deletes followed by inserts on the view.
- **Run-time correctness.** For each view, delete rules are ordered before insert rules. Rules for different views need no mutual order, and the generated rules stay correct when other user rules also modify base tables, because each rule sees all changes since it last ran.

## Caveats

Efficient maintenance is only offered for duplicate-free views; the counting approach that handles duplicates was deliberately not used, and aggregates are not covered. Safety is a syntactic, key-based test, so some views that could be maintained incrementally get rematerialized. The rules target the Starburst rule language rather than a general engine. I read the abstract, introduction, rule-language overview, sections 4 and 5 on analysis and safety (including the insertion theorem), and the section on run-time execution in the VLDB PDF; the set-operator and subquery sections were skimmed only.

## Links

- PDF: https://www.vldb.org/conf/1991/P577.PDF
- DBLP: https://dblp.org/rec/conf/vldb/CeriW91.html
