---
title: "Database Cracking"
authors:
  - "Stratos Idreos"
  - "Martin L. Kersten"
  - "Stefan Manegold"
year: 2007
venue: "CIDR 2007 (3rd Biennial Conference on Innovative Data Systems Research)"
arxiv: null
doi: null
source: "https://www.cidrdb.org/cidr2007/papers/cidr07p07.pdf"
topics:
  - adaptive-indexing
  - column-stores
  - range-queries
  - monetdb
seed_rank: 2445
seed_batch: "archive-2026-10-28"
reviewed: "2026-10-28"
pool: "systems"
relevance_score: 8
lineage: contemporary-databases
see:
  - 129-monetdb-x100-hyper-pipelining-query-execution
  - 2423-database-architecture-optimized-for-the-new-bottleneck-memory-access
  - 2405-better-bitmap-performance-with-roaring-bitmaps
cites:
  - title: "Database Cracking"
    url: "https://www.cidrdb.org/cidr2007/papers/cidr07p07.pdf"
    year: 2007
---

# Database Cracking

## One-sentence takeaway

Instead of building an index up front, Idreos, Kersten and Manegold let every range query physically partition a copy of the column (the cracker column) around its own bounds, recording the cut points in a small AVL "cracker index", so the column becomes progressively sorted exactly where queries look and index maintenance falls out of query processing.

## Why it matters here

ano selections over entity columns ("units with hp < 30", "within x in [a, b]") are range predicates over columns that change every tick and are queried unevenly. Cracking is the column-store answer to "we can't afford to sort or index everything, and we don't know the workload": pay a partitioning pass only on the ranges actually asked about, so repeated spatial or stat queries converge to near-index speed. It also shows the hidden cost in a column engine, which is tuple-reconstruction order, and that's directly relevant to how ano joins selection results back to other columns.

## Key ideas

- **Cracker column.** The first range query on attribute A copies the column into A_crk and partitions it in place into pieces below, inside and above the predicate; later queries only crack the pieces their bounds fall into.
- **Two- and three-piece cracking.** Algorithms that split a piece around one bound or both bounds in a single pass (CrackInThree), so each query touches little more than the pieces containing its endpoints.
- **Cracker index.** An AVL tree of (value, position, inclusivity) entries that maps a value to where its piece starts, so a query finds the contiguous result range without scanning.
- **Implemented in MonetDB.** Cracking was built into MonetDB's select operators; because cracking reorders tuples, it breaks the positional order other columns assume, and the paper's TPC-H Q6 experiment (SF 0.1) shows the resulting OIDintersect step costing about 7× more, which motivated a new rel_select operator that cracks and reconstructs together.
- **Evidence.** On a 10M-value column with random range selects, the first crack cost 0.38 s against 0.27 s for a plain scan and about 3 s extra for sorting up front; after the first 8–10 queries cracking touched an order of magnitude less data and ran about 10× faster than a simple select, and its cost per query kept falling as pieces shrank. A second experiment compares MonetDB with cracking against PostgreSQL and MySQL with and without B-trees on a simple count(*) range query.

## Caveats

This is a short CIDR vision-and-prototype paper; updates, concurrency control and multi-column cracking are deferred to later work by the same group (sideways cracking, updates, stochastic cracking for adversarial workloads). Reorganizing on reads makes queries writers, which complicates parallel or snapshot-isolated readers, and a game sim that reads the same column from several systems per tick would need to decide who owns the reorganization. Results are 2007 MonetDB on a single machine.

## Links

- Paper (PDF, CIDR 2007): https://www.cidrdb.org/cidr2007/papers/cidr07p07.pdf
