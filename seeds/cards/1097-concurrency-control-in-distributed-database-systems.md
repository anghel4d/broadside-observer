---
title: "Concurrency Control in Distributed Database Systems"
authors:
  - "Philip A. Bernstein"
  - "Nathan Goodman"
year: 1981
venue: "ACM Computing Surveys"
arxiv: null
doi: "10.1145/356842.356846"
source: "https://doi.org/10.1145/356842.356846"
topics:
  - databases
  - serializability
  - bernstein-conditions
seed_rank: 1097
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "The Notions of Consistency and Predicate Locks in a Database System"
    url: "https://doi.org/10.1145/360363.360369"
    year: 1976
    arxiv: null
    doi: "10.1145/360363.360369"
    card: "1094-the-notions-of-consistency-and-predicate-locks-in-a-database"
  - title: "On Optimistic Methods for Concurrency Control"
    url: "https://doi.org/10.1145/319566.319567"
    year: 1981
    arxiv: null
    doi: "10.1145/319566.319567"
    card: "1095-on-optimistic-methods-for-concurrency-control"
  - title: "The Transaction Concept: Virtues and Limitations"
    url: "https://www.vldb.org/conf/1981/P144.PDF"
    year: 1981
    arxiv: null
    doi: null
    card: "1096-the-transaction-concept-virtues-and-limitations"
---

# Concurrency Control in Distributed Database Systems

## One-sentence takeaway

Survey that standardizes conflict serializability, Bernstein's conditions, and the taxonomy of distributed concurrency-control methods.

## Why it matters here

The vocabulary card for when GRID COMMAND / multi-node state needs serializability reasoning—not just locks.

## Key ideas

- Conflict serializability and histories.
- Bernstein conditions relating RW/WR conflicts to serial orders.
- Taxonomy: locking, timestamp, optimistic methods.
- Distributed complications: replication and failure.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/356842.356846](https://doi.org/10.1145/356842.356846)
- URL: https://doi.org/10.1145/356842.356846
