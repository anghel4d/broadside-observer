---
title: "Spanner: Google's Globally-Distributed Database"
authors:
  - "James C. Corbett"
  - "Jeffrey Dean"
  - "Michael Epstein"
  - "Andrew Fikes"
  - "Christopher Frost"
  - "J. J. Furman"
  - "Sanjay Ghemawat"
  - "Andrey Gubarev"
  - "Christopher Heiser"
  - "Peter Hochschild"
  - "Wilson C. Hsieh"
  - "Alexander Lloyd"
year: 2013
venue: "ACM TOCS"
arxiv: null
doi: "10.1145/2491245"
source: "https://doi.org/10.1145/2491245"
topics:
  - distributed-db
  - true-time
  - external-consistency
seed_rank: 815
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Calvin: Fast Distributed Transactions for Partitioned Database Systems"
    url: "https://doi.org/10.1145/2213836.2213838"
    year: 2012
    arxiv: null
    doi: "10.1145/2213836.2213838"
    card: "772-calvin-fast-distributed-transactions-for-partitioned-databas"
  - title: "Bigtable: A Distributed Storage System for Structured Data"
    url: "https://doi.org/10.1145/1365815.1365816"
    year: 2008
    arxiv: null
    doi: "10.1145/1365815.1365816"
    card: "874-bigtable-a-distributed-storage-system-for-structured-data"
  - title: "A1: A Distributed In-Memory Graph Database"
    url: "https://doi.org/10.1145/3318464.3386135"
    year: 2020
    arxiv: null
    doi: "10.1145/3318464.3386135"
    card: "745-a1-a-distributed-in-memory-graph-database"
  - title: "PNUTS: Yahoo!'s Hosted Data Serving Platform"
    url: "https://doi.org/10.14778/1454159.1454167"
    year: 2008
    arxiv: null
    doi: "10.14778/1454159.1454167"
    card: "875-pnuts-yahoo-s-hosted-data-serving-platform"
---

# Spanner: Google's Globally-Distributed Database

## One-sentence takeaway

Spanner: Distributed database design for scale-out consistency and availability.

## Why it matters here

Geo/distributed consistency and SQL-over-shards patterns inform Anoptic persistence and multi-region ops.

## Key ideas

- Venue/year anchor: ACM TOCS 2013.
- TrueTime intervals make external consistency a scheduling wait on clock uncertainty.
- Primary topics: distributed-db, true-time, external-consistency.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2491245](https://doi.org/10.1145/2491245)
- URL: https://doi.org/10.1145/2491245
