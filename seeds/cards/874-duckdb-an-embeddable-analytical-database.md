---
title: "DuckDB: an Embeddable Analytical Database"
authors:
- Mark Raasveldt
- Hannes Mühleisen
year: 2019
venue: SIGMOD
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
  - title: "Efficiently Compiling Efficient Query Plans for Modern Hardware"
    url: "https://doi.org/10.14778/2002938.2002940"
    year: 2011
    arxiv: null
    doi: "10.14778/2002938.2002940"
  - title: "Dremel: Interactive Analysis of Web-Scale Datasets"
    url: "https://doi.org/10.14778/1920841.1920886"
    year: 2010
    arxiv: null
    doi: "10.14778/1920841.1920886"
see:
  - "832-efficiently-compiling-efficient-query-plans-for-modern-hardw"
  - "873-dremel-interactive-analysis-of-web-scale-datasets"
---

# DuckDB: an Embeddable Analytical Database

## One-sentence takeaway

DuckDB is an in-process OLAP DBMS with vectorized, columnar execution — SQLite's deployment shape at warehouse speed, reading Parquet/CSV/HTTP without a server.

## Why it matters here

The default local analytics engine for Anoptic-style tools: embed it next to GRID COMMAND, point it at a lake or a flight recorder, and skip standing up Postgres. Demo paper; the deeper design lives in follow-on DuckDB literature.

## Key ideas

- Linked as a library into the host process; no daemon, no ODBC round-trip, transfer is a pointer to an Arrow-compatible batch.
- Vectorized pull-based engine (MonetDB/X100 lineage) with a Postgres-flavored SQL dialect and ACID on a single-file database.
- Direct scans of Parquet, CSV, and HTTP/S3 so the file *is* the warehouse; useful as a lakehouse sidecar.
- Optimizer + buffer manager are built for OLAP (large scans, pipeline breakers) rather than SQLite's OLTP page model.
- SIGMOD 2019 demo: the archival citation for the system that later grew out-of-core, parallel, and extension APIs.

## Caveats

## Links

- DOI: [10.1145/3299869.3320212](https://doi.org/10.1145/3299869.3320212)
- Project: https://duckdb.org
