---
title: "When the Application Layer Is Disposable: Putting Integrity Constraints Back in the Database"
authors:
  - "Hasara Kalumin"
  - "Amol Deshpande"
year: 2026
venue: "arXiv preprint (cs.DB)"
arxiv: "2610.36418"
doi: null
source: "https://arxiv.org/abs/2610.36418"
topics:
  - "integrity-constraints"
  - "contemporary-databases"
  - "agents-writing-data"
seed_rank: 2456
seed_batch: "craft-2026-10-29"
reviewed: "2026-10-29"
pool: "systems"
lineage: contemporary-databases
relevance_score: 8
cites:
  - title: "When the Application Layer Is Disposable: Putting Integrity Constraints Back in the Database"
    url: "https://arxiv.org/abs/2610.36418"
    year: 2026
    arxiv: "2610.36418"
    doi: null
see: ["1841-maintaining-views-incrementally", "874-duckdb-an-embeddable-analytical-database"]
---

# When the Application Layer Is Disposable: Putting Integrity Constraints Back in the Database

## One-sentence takeaway

Because LLM agents now write straight to databases with throwaway code, invariants must live in the database itself; the authors add "constraint indexes", which enforce multi-relation constraints as transactional access paths in a PostgreSQL extension, at low overhead and up to 2.41x faster than the best correctness-preserving baseline.

## Why it matters here

ano's standing rules (する/なる) are exactly multi-relation invariants over columnar tables, and Broadside's agent fleets write to shared ledgers with generated code. This paper argues, with evidence, that you can't trust the writer to hold invariants: LLM writers frequently violate unenforced constraints and behave erratically even when handed the list. Treating a constraint as an index (an access path the engine maintains incrementally) is a concrete implementation pattern for ano's rules and for any agent-facing store.

## Key ideas

- **Why now.** Agents bypass the application layer, and ER or property-graph constraints get fragmented across relations by performance-driven mappings; SQL-92 ASSERTIONs remain poorly supported.
- **Constraint indexes.** Multi-relation constraints are represented as transactional access paths, so checks are incremental lookups instead of triggers re-scanning tables.
- **Coverage.** Distributed inheritance hierarchies, folded relationships, folded weak entities, cardinality bounds and functional dependencies.
- **Evidence on agents.** LLM-driven writers frequently break unenforced constraints, and giving them the constraint list doesn't make them reliable.
- **Agenda.** Defining, mining, managing and enforcing constraints as a first-class DBMS concern.

## Caveats

Proof of concept on PostgreSQL; the constraint classes are a chosen set, not general assertions. Abstract-level read, so the LLM-writer experiment's size and models are unknown. Overhead is reported "relative to no enforcement", so worst-case write amplification needs checking.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.36418
- PDF: https://arxiv.org/pdf/2610.36418
