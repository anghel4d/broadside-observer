---
title: "Spanner: Becoming a SQL System"
authors:
  - "David F. Bacon"
  - "Nicolas Bruno"
  - "Brian F. Cooper"
  - "Andrew Fikes"
  - "Alexander Lloyd"
  - "Sergey Melnik"
  - "Raghav Sethi"
year: 2017
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3035918.3056103"
source: "https://doi.org/10.1145/3035918.3056103"
topics:
  - spanner
  - distributed-sql
seed_rank: 740
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "A Relational Model of Data for Large Shared Data Banks"
    url: "https://doi.org/10.1145/362384.362685"
    year: 1970
    arxiv: null
    doi: "10.1145/362384.362685"
    card: "048-a-relational-model-of-data-for-large-shared-data-banks"
  - title: "F1: A Distributed SQL Database That Scales"
    url: "https://doi.org/10.14778/2536222.2536232"
    year: 2013
    arxiv: null
    doi: "10.14778/2536222.2536232"
    card: "752-f1-a-distributed-sql-database-that-scales"
  - title: "F1 Query: Declarative Querying at Scale"
    url: "https://doi.org/10.14778/3229863.3229871"
    year: 2018
    arxiv: null
    doi: "10.14778/3229863.3229871"
    card: "762-f1-query-declarative-querying-at-scale"
  - title: "CockroachDB: The Resilient Geo-Distributed SQL Database"
    url: "https://doi.org/10.1145/3318464.3386134"
    year: 2020
    arxiv: null
    doi: "10.1145/3318464.3386134"
    card: "757-cockroachdb-the-resilient-geo-distributed-sql-database"
  - title: "TiDB: A Raft-based HTAP Database"
    url: "https://doi.org/10.14778/3415478.3415535"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415535"
    card: "738-tidb-a-raft-based-htap-database"
---

# Spanner: Becoming a SQL System

## One-sentence takeaway

Spanner: SQL semantics over a geo-distributed or shared-nothing transactional core.

## Why it matters here

Geo/distributed consistency and SQL-over-shards patterns inform Anoptic persistence and multi-region ops.

## Key ideas

- Venue/year anchor: SIGMOD 2017.
- Primary topics: spanner, distributed-sql.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3035918.3056103](https://doi.org/10.1145/3035918.3056103)
- URL: https://doi.org/10.1145/3035918.3056103
