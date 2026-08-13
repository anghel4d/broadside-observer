---
title: "The Transaction Concept: Virtues and Limitations"
authors:
  - "Jim Gray"
year: 1981
venue: "VLDB"
arxiv: null
doi: null
source: "https://www.vldb.org/conf/1981/P144.PDF"
topics:
  - databases
  - transactions
  - acid
  - gray
seed_rank: 1096
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
  - title: "The Notions of Consistency and Predicate Locks in a Database System"
    url: "https://doi.org/10.1145/360363.360369"
    year: 1976
    arxiv: null
    doi: "10.1145/360363.360369"
    card: "1094-the-notions-of-consistency-and-predicate-locks-in-a-database"
  - title: "ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking and Partial Rollbacks Using Write-Ahead Logging"
    url: "https://doi.org/10.1145/128765.128770"
    year: 1992
    arxiv: null
    doi: "10.1145/128765.128770"
    card: "1093-aries-a-transaction-recovery-method-supporting-fine-granular"
---

# The Transaction Concept: Virtues and Limitations

## One-sentence takeaway

Gray crystallizes the transaction as the unit of concurrency and recovery—and honestly lists what transactions cannot solve.

## Why it matters here

ACID vocabulary and failure model for any durable Anoptic subsystem.

## Key ideas

- Transaction as atomic, durable state transition.
- Virtues: simple failure semantics for applications.
- Limitations: long-lived activities, nested work, real-world openness.
- Bridge from System R practice to industry TP.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- URL: https://www.vldb.org/conf/1981/P144.PDF
