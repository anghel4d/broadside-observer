---
title: "C-Store: A Column-oriented DBMS"
authors:
  - "Mike Stonebraker"
  - "Daniel J. Abadi"
  - "Adam Batkin"
  - "Xuedong Chen"
  - "Mitch Cherniack"
  - "Miguel Ferreira"
  - "Edmond Lau"
  - "Amerson Lin"
  - "Sam Madden"
  - "Elizabeth O'Neil"
  - "Pat O'Neil"
  - "Alex Rasin"
  - "Nga Tran"
  - "Stan Zdonik"
year: 2005
venue: "VLDB"
arxiv: null
doi: "10.5555/1083592.1083658"
source: "https://www.vldb.org/archives/website/2005/program/paper/thu/p553-stonebraker.pdf"
topics:
  - relational-ecs-queries
seed_rank: 127
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "MonetDB/X100: Hyper-Pipelining Query Execution"
    url: "https://www.cidrdb.org/cidr2005/papers/P19.pdf"
    year: 2005
    arxiv: null
    doi: null
  - title: "Data Cube: A Relational Aggregation Operator Generalizing Group-By, Cross-Tab, and Sub-Totals"
    url: "https://doi.org/10.1023/A:1009726021843"
    year: 1997
    arxiv: null
    doi: "10.1023/A:1009726021843"
  - title: "The log-structured merge-tree (LSM-tree)"
    url: "https://doi.org/10.1007/s002360050048"
    year: 1996
    arxiv: null
    doi: "10.1007/s002360050048"
  - title: "Parallel database systems"
    url: "https://doi.org/10.1145/129888.129894"
    year: 1992
    arxiv: null
    doi: "10.1145/129888.129894"
  - title: "Query evaluation techniques for large databases"
    url: "https://doi.org/10.1145/152610.152611"
    year: 1993
    arxiv: null
    doi: "10.1145/152610.152611"
  - title: "ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking and Partial Rollbacks Using Write-Ahead Logging"
    url: "https://doi.org/10.1145/128765.128770"
    year: 1992
    arxiv: null
    doi: "10.1145/128765.128770"
  - title: "A critique of ANSI SQL isolation levels"
    url: "https://doi.org/10.1145/223784.223785"
    year: 1995
    arxiv: null
    doi: "10.1145/223784.223785"
  - title: "The Gamma database machine project"
    url: "https://doi.org/10.1109/69.50905"
    year: 1990
    arxiv: null
    doi: "10.1109/69.50905"
  - title: "Improved query performance with variant indexes"
    url: "https://doi.org/10.1145/253260.253268"
    year: 1997
    arxiv: null
    doi: "10.1145/253260.253268"
see:
  - "129-monetdb-x100-hyper-pipelining-query-execution"
---

# C-Store: A Column-oriented DBMS

## One-sentence takeaway

C-Store is a read-optimized column DBMS that physically stores overlapping sorted projections, compresses them with four encodings, and splits writes into a small WS merged into a large RS by an LSM-style tuple mover under snapshot isolation.

## Why it matters here

ano and GRID COMMAND already live in projections: an ECS archetype is a column group sorted the same way. C-Store’s RS/WS split and late materialization are the warehouse version of “mutate in a write store, scan compressed columns for queries.”

## Key ideas

- No heap plus secondary indexes. A projection is a column group anchored on one table (plus n:1-joined attributes), stored column-wise, sorted on a chosen key, and horizontally partitioned by that key. The same column may appear in several projections in different orders.
- Reconstruct a logical row with implied storage keys (ordinal in RS) and join indexes — `(sid, storage_key)` maps that walk projections back to a common sort order. K-safety is “enough overlapping projections survive any K node failures,” not identical replicas.
- Four encodings: Type 1 run-length triples `(v, first, count)` for self-ordered low-cardinality; Type 2 value+bitmap for foreign-order low-cardinality; Type 3 block deltas for self-ordered high-cardinality; Type 4 uncompressed plus a densepack B-tree.
- WS is the same projections, uncompressed, B-tree’d on explicit storage keys. Inserts land in WS; updates are insert+delete; a tuple mover merges ordered WS runs into RS (LSM). Read-only queries pick a timestamp below the high-water mark and ignore later epochs — no read locks.
- Column-oriented executor on a shared-nothing grid. Early TPC-H subset numbers beat a commercial row store and a commercial column store; the paper flags that the tuple mover was not yet in those numbers.

## Caveats

## Links

- PDF (VLDB 2005): https://www.vldb.org/archives/website/2005/program/paper/thu/p553-stonebraker.pdf
- PDF (MIT CSAIL): https://people.csail.mit.edu/edmond/research/cstore/cstore.pdf
- DOI: [10.5555/1083592.1083658](https://doi.org/10.5555/1083592.1083658)
