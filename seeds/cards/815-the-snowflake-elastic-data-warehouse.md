---
title: The Snowflake Elastic Data Warehouse
authors:
- Benoît Dageville
- Thierry Cruanes
- Marcin Żukowski
- Vadim Antonov
- Artin Avanes
- Jon Bock
- Jonathan Claybaugh
- Daniel Engovatov
- Martin Hentschel
- Jiansheng Huang
- Allison W. Lee
- Ashish Motivala
- Abdul Q. Munir
- Steven Pelley
- Peter Povinec
- Greg Rahn
- Spyridon Triantafyllis
- Philipp Unterbrunner
year: 2016
venue: SIGMOD
arxiv: null
doi: 10.1145/2882903.2903741
source: "https://doi.org/10.1145/2882903.2903741"
topics:
- databases
- contemporary-db
seed_rank: 815
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# The Snowflake Elastic Data Warehouse

## One-sentence takeaway

Snowflake separates cloud storage from elastic compute: a central service layer owns transactions, optimization, and metadata, while independent virtual warehouses of worker nodes execute SQL against a columnar, PAX-style table format on blob storage, so storage and compute scale independently.

## Why it matters here

It is the architecture Broadside’s analytics shelf keeps rediscovering — cheap immutable object storage plus bursty compiled/vectorized workers. Anoptic telemetry lakes and GRID COMMAND replay should assume this three-layer split rather than a shared-nothing appliance.

## Key ideas

- Three layers: cloud object store (S3/Azure/GCS) for durable table files; a multi-tenant service layer for auth, transactions, and the optimizer; and virtual warehouses that come and go without moving data.
- Tables are immutable columnar micro-partitions with min/max pruning; updates write new files and the service layer’s metadata transactionally swaps visibility.
- Isolation is warehouse-level: a heavy ETL warehouse cannot steal CPU from an interactive BI warehouse sharing the same tables.
- Local SSD caches on workers absorb hot scans so blob-store latency is paid mostly on first touch.

## Caveats

## Links

- DOI: [10.1145/2882903.2903741](https://doi.org/10.1145/2882903.2903741)
- URL: https://doi.org/10.1145/2882903.2903741
