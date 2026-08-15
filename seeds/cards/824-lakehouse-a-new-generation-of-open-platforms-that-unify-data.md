---
title: "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics"
authors:
- Michael Armbrust
- Ali Ghodsi
- Reynold Xin
- Matei Zaharia
year: 2021
venue: CIDR
arxiv: null
doi: null
source: "https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf"
topics:
- databases
- contemporary-db
seed_rank: 824
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Spark: Cluster Computing with Working Sets"
  url: "https://www.usenix.org/conference/hotcloud-10/spark-cluster-computing-working-sets"
  year: 2010
  arxiv: null
  doi: null
see:
- "826-spark-cluster-computing-with-working-sets"
---

# Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics

## One-sentence takeaway

A lakehouse keeps data in open, directly accessible files (Parquet) on cheap object storage and adds a metadata layer (ACID transactions, versioning, schema enforcement, indexing) so the same tables serve BI SQL and ML without a warehouse-vs-lake ETL copy.

## Why it matters here

Broadside’s source corpus and Anoptic telemetry should be one table format, not a warehouse extract plus a data-science dump. Delta / Iceberg / Hudi are this CIDR brief in production.

## Key ideas

- Object storage plus open columnar files gives lake economics and engine independence; a transaction log / manifest layer restores warehouse guarantees (atomic writes, time travel, schema evolution).
- Caching, auxiliary data structures, and vectorized/compiled engines on top of those files close much of the TPC-DS gap versus cloud warehouses.
- Governance and access control attach to the metadata layer rather than to a proprietary storage engine, so Spark, Presto, and Python readers share one source of truth.
- The paper argues this collapses the two-tier “ETL into a warehouse, then dump back out for ML” architecture that Snowflake/Redshift vs. S3/ADLS had ossified.

## Caveats

## Links

- PDF: https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf
- Author PDF: https://people.eecs.berkeley.edu/~matei/papers/2021/cidr_lakehouse.pdf
