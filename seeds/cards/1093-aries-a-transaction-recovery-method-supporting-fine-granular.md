---
title: "ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking and Partial Rollbacks Using Write-Ahead Logging"
authors:
  - "C. Mohan"
  - "Don Haderle"
  - "Bruce Lindsay"
  - "Hamid Pirahesh"
  - "Peter Schwarz"
year: 1992
venue: "ACM TODS"
arxiv: null
doi: "10.1145/128765.128770"
source: "https://doi.org/10.1145/128765.128770"
topics:
  - databases
  - recovery
  - wal
  - aries
seed_rank: 1093
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "System R: Relational Approach to Database Management"
    url: "https://doi.org/10.1145/320455.320457"
    year: 1976
    arxiv: null
    doi: "10.1145/320455.320457"
    card: "1089-system-r-relational-approach-to-database-management"
  - title: "The Transaction Concept: Virtues and Limitations"
    url: "https://www.vldb.org/conf/1981/P144.PDF"
    year: 1981
    arxiv: null
    doi: null
    card: "1096-the-transaction-concept-virtues-and-limitations"
  - title: "The Notions of Consistency and Predicate Locks in a Database System"
    url: "https://doi.org/10.1145/360363.360369"
    year: 1976
    arxiv: null
    doi: "10.1145/360363.360369"
    card: "1094-the-notions-of-consistency-and-predicate-locks-in-a-database"
---

# ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking and Partial Rollbacks Using Write-Ahead Logging

## One-sentence takeaway

ARIES makes WAL + fine-grained locking + partial rollback a coherent, industrially dominant recovery protocol.

## Why it matters here

The recovery bible for any durable store Anoptic/GRID might grow—steal/no-force, CLR, and fuzzy checkpoints.

## Key ideas

- Write-ahead logging with LSN-per-page discipline.
- Repeating history (redo) then selective undo.
- Compensation log records (CLRs) for bounded undo.
- Compatible with fine-granularity locks and high concurrency.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/128765.128770](https://doi.org/10.1145/128765.128770)
- URL: https://doi.org/10.1145/128765.128770
