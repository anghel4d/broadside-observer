---
title: "Database Architecture Optimized for the New Bottleneck: Memory Access"
authors:
  - "Peter Boncz"
  - "Stefan Manegold"
  - "Martin L. Kersten"
year: 1999
venue: "Proceedings of the 25th International Conference on Very Large Data Bases (VLDB 1999), pp. 54-65"
arxiv: null
doi: null
source: "https://ir.cwi.nl/pub/11189/11189B.pdf"
topics:
  - column-stores
  - radix-cluster
  - partitioned-hash-join
  - cache-conscious-algorithms
seed_rank: 2423
seed_batch: "archive-2026-10-26"
reviewed: "2026-10-26"
pool: "systems"
relevance_score: 8
lineage: data-layout
see:
  - 129-monetdb-x100-hyper-pipelining-query-execution
  - 127-c-store-a-column-oriented-dbms
  - 2401-weaving-relations-for-cache-performance
  - 1153-morsel-driven-parallelism-a-numa-aware-query-evaluation-framework
cites:
  - title: "Database Architecture Optimized for the New Bottleneck: Memory Access"
    url: "https://ir.cwi.nl/pub/11189/11189B.pdf"
    year: 1999
    arxiv: null
    doi: null
---

# Database Architecture Optimized for the New Bottleneck: Memory Access

## One-sentence takeaway

The MonetDB founding paper argues from measurements that memory latency, not CPU, bounds database operators, and answers with vertically decomposed narrow columns plus a multi-pass radix-cluster that partitions join inputs so that each pass stays within TLB and cache capacity, making partitioned hash-join and radix-join significantly faster than non-partitioned hash-join and sort-merge.

## Why it matters here

ano's relational hops are equi-joins between SoA entity columns, and Anoptic's tables are exactly the narrow vertical fragments the paper recommends. The radix-cluster recipe tells ano how to implement a large hop (e.g. units × the cells they occupy) without random-access thrash: cluster both sides on the low bits of the key in as many passes as the TLB allows, then join cluster pairs that fit in cache. Its analytical cost model, built from hardware counters, is also the right template for deciding at plan time when a hop should be clustered versus hashed directly.

## Key ideas

- **Measured bottleneck.** A simple scan test with varying stride shows performance collapsing once each access misses cache; CPU speed was growing much faster than DRAM latency was improving.
- **Vertical decomposition.** Monet stores tables as binary association tables (BATs) of 8-byte [OID, value] pairs; dense OIDs become implicit "virtual OIDs", and low-cardinality values are enum-encoded in 1–2 bytes, so scans touch only needed bytes.
- **Radix-cluster.** Partition on the lower B bits of the hash in P passes, each pass creating few enough clusters to stay within TLB entries and cache lines; on their machine (64 TLB entries) more than about 6 bits needs 2 passes, more than 12 needs 3, more than 18 needs 4.
- **Join strategies.** Partitioned hash-join tuned for L2, TLB or L1 cluster sizes (best at roughly 200 tuples per cluster), and radix-join, a nested-loop join over tiny clusters (best at about 4 tuples per cluster).
- **Cost model.** Detailed analytical models of L1, L2 and TLB misses, calibrated with R10000 hardware event counters on an SGI Origin2000, predict the measured curves and the optimal B and P.
- **Result.** The cache-conscious radix strategies perform significantly better than "simple hash" and sort-merge-join across cardinalities.

## Caveats

Hardware is a 1999 MIPS R10000 (32 KB L1, 4 MB L2, 16 KB pages, 64 TLB entries); the thresholds must be re-derived for current cores, huge pages and SIMD. Joins are equi-joins on uniformly distributed integer keys; skew and multi-column keys are not treated. Crossref has no DOI for VLDB 1999; the card links the CWI repository PDF and the VLDB DBLP page.

## Links

- Paper (CWI repository PDF): https://ir.cwi.nl/pub/11189/11189B.pdf
- Bibliography (VLDB-hosted DBLP entry): https://www.vldb.org/dblp/db/conf/vldb/BonczMK99.html
