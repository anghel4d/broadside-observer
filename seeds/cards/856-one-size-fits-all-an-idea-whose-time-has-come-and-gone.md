---
title: "\"One size fits all\": an idea whose time has come and gone"
authors:
- Michael Stonebraker
- Ugur Cetintemel
year: 2005
venue: ICDE
arxiv: null
doi: 10.1109/ICDE.2005.1
source: "https://doi.org/10.1109/ICDE.2005.1"
topics:
- databases
- contemporary-db
seed_rank: 856
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# "One size fits all": an idea whose time has come and gone

## One-sentence takeaway

The row-store RDBMS that once served every market is now beaten by an order of magnitude in warehouses, stream processing, text, and scientific arrays — specialized engines should replace the monolith.

## Why it matters here

Broadside's shelf is already split (OLTP vs OLAP vs streams vs logs). This ICDE keynote is the argument that Anoptic should keep GRID COMMAND, replay stores, and analytics as different code lines rather than stretching one engine.

## Key ideas

- 1970s "one size fits all" was rational when there was a single business-data-processing market; warehouses, streams, text, and science are now large enough to fund their own engines.
- Column stores crush row stores on warehouse scans; stream engines crush them on inbound messages; search engines crush them on text; array engines crush them on science.
- The remaining RDBMS "sweet spot" shrinks to classic OLTP — and even that is later demolished by H-Store.
- Hybrid markets still exist, but they should compose specialized systems rather than re-bloating a single kernel.
- Commercial implication: incumbents will keep shipping one code line; new work should start from a clean sheet per market.

## Caveats

## Links

- DOI: [10.1109/ICDE.2005.1](https://doi.org/10.1109/ICDE.2005.1)
