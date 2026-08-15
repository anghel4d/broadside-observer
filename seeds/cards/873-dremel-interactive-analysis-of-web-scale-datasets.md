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
seed_rank: 873
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "MapReduce: Simplified Data Processing on Large Clusters"
    url: "https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/"
    year: 2004
    arxiv: null
    doi: null
  - title: "The Google File System"
    url: "https://research.google/pubs/the-google-file-system/"
    year: 2003
    arxiv: null
    doi: null
see:
  - "795-the-google-file-system"
  - "796-mapreduce-simplified-data-processing-on-large-clusters"
---

# Dremel: Interactive Analysis of Web-Scale Datasets

## One-sentence takeaway

Dremel runs SQL-like aggregations over trillion-row nested tables in seconds by pairing a search-style serving tree with a lossless columnar encoding of Protocol Buffer records.

## Why it matters here

This is the interactive-analytics ancestor of BigQuery — and of every "scan nested logs in place, don't wait for MapReduce" path Broadside will want over GRID COMMAND traces.

## Key ideas

- In-situ nested data on GFS/Bigtable: no load step. A query that would be a chain of MR jobs finishes as one Dremel tree.
- Column stripes store every leaf path (e.g. `Name.Language.Code`) with repetition and definition levels so record structure is reconstructible from any field subset.
- Execution is a multi-level serving tree: the query is rewritten downward, partial aggregations flow up, stragglers are tolerated the way a search backend is.
- Complements MapReduce rather than replacing it: analyze MR output, prototype a pipeline, then industrialize. In production at Google since 2006 on tens-to-thousands of nodes.
- SQL dialect emits nested results (WITHIN-record aggregation, path expressions) without forcing a flat star schema.

## Caveats

## Links

- DOI: [10.14778/1920841.1920886](https://doi.org/10.14778/1920841.1920886)
- PDF: https://www.vldb.org/pvldb/vol3/R29.pdf
