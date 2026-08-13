---
title: "DuckDB: an Embeddable Analytical Database"
authors:
- Mark Raasveldt
- Hannes Mühleisen
year: 2019
venue: SIGMOD Demo
arxiv: null
doi: 10.1145/3299869.3320212
source: "https://doi.org/10.1145/3299869.3320212"
topics:
- duckdb
- embedded
- olap
- vectorized
seed_rank: 874
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  []
---

# DuckDB: an Embeddable Analytical Database

## One-sentence takeaway

In-process OLAP DBMS with vectorized execution — SQLite-shaped, warehouse-speed.

## Why it matters here

Canonical embedded analytics engine for local/lakehouse workflows Anoptic-style tools touch.

## Key ideas

- Vectorized columnar execution in-process.
- No server daemon; file/HTTP lake reads.
- Postgres-compatible SQL dialect goals.

## Caveats

- Demo paper is short; deeper design is in follow-on DuckDB literature.
- Not a distributed warehouse.

## Links

- DOI: [10.1145/3299869.3320212](https://doi.org/10.1145/3299869.3320212)
- URL: https://doi.org/10.1145/3299869.3320212
