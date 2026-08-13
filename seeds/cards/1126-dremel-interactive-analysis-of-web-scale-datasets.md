---
title: "Dremel: Interactive Analysis of Web-Scale Datasets"
authors:
- Sergey Melnik
- Andrey Gubarev
- Jing Jing Long
- Geoffrey Romer
- Shiva Shivakumar
- Matt Tolton
- Theo Vassilakis
year: 2010
venue: VLDB
arxiv: null
doi: 10.14778/1920841.1920886
source: "https://doi.org/10.14778/1920841.1920886"
topics:
- dremel
- bigquery
- columnar
- nested-data
seed_rank: 1126
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  []
---

# Dremel: Interactive Analysis of Web-Scale Datasets

## One-sentence takeaway

Columnar nested storage and tree aggregation that became BigQuery's execution model.

## Why it matters here

The interactive analytics ancestor of BigQuery — nested columnar scans at web scale.

## Key ideas

- Column-oriented storage for nested Protobuf-like records.
- Multi-level serving tree aggregation.
- Separates storage format from SQL surface.

## Caveats

- Original system is Google-internal; public BigQuery differs in details.
- Nested model is not a pure relational star-schema warehouse.

## Links

- DOI: [10.14778/1920841.1920886](https://doi.org/10.14778/1920841.1920886)
- URL: https://doi.org/10.14778/1920841.1920886
