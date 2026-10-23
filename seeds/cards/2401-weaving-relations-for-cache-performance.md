---
title: "Weaving Relations for Cache Performance"
authors:
  - "Anastassia Ailamaki"
  - "David J. DeWitt"
  - "Mark D. Hill"
  - "Marios Skounakis"
year: 2001
venue: "Proceedings of the 27th International Conference on Very Large Data Bases (VLDB 2001), Rome"
arxiv: null
doi: null
source: "https://www.vldb.org/conf/2001/P169.pdf"
topics:
  - pax
  - page-layout
  - cache-conscious-storage
  - columnar-storage
  - soa-chunks
seed_rank: 2401
seed_batch: "archive-2026-10-24"
reviewed: "2026-10-24"
pool: "systems"
relevance_score: 8
lineage: data-layout
see:
  - 127-c-store-a-column-oriented-dbms
  - 129-monetdb-x100-hyper-pipelining-query-execution
  - 345-structure-of-arrays-and-data-layout-for-simd
cites:
  - title: "Weaving Relations for Cache Performance"
    url: "https://www.vldb.org/conf/2001/P169.pdf"
    year: 2001
    arxiv: null
    doi: null
---

# Weaving Relations for Cache Performance

## One-sentence takeaway

PAX (Partition Attributes Across) keeps exactly the same records on each page as the row-oriented N-ary Storage Model but groups each attribute's values into its own minipage inside the page, so scans touch only the bytes they need while whole records stay on one page and reconstruct with a cheap in-page "mini-join" — cutting at least 75% of NSM's data-cache stall time and running TPC-H queries 11–48% faster without changing I/O behaviour.

## Why it matters here

This is the archetype of Anoptic's archetype-chunk layout and ano's columnar tables: a fixed-size block (page, chunk) that owns a set of whole rows but stores them column-by-column. PAX names the trade-off precisely — NSM wastes cache lines on unused fields, full vertical partitioning (DSM) pays a join to rebuild rows — and shows the middle point wins on both. It supports sizing ECS chunks so a row never straddles chunks, keeping fixed-width columns as dense arrays with presence bits, and putting variable-length data (names, strings) in a separate slotted region of the same chunk.

## Key ideas

- **NSM's problem.** Slotted pages store records contiguously, so a predicate on one small attribute (e.g. a 4-byte age) brings the neighbouring fields of every record into cache; the studies the paper surveys agree that data-cache-miss stalls are 50–70% (OLTP) to 90% (DSS) of memory-related stall time.
- **DSM's problem.** Decomposing a relation into one sub-relation per attribute gives perfect scan locality, but queries over several attributes pay a join on a surrogate key that grows with the number of attributes.
- **PAX layout.** Same records per page as NSM; within the page, one minipage per attribute. Fixed-length values live in F-minipages with a presence-bit array; variable-length values live in slotted V-minipages with offsets to each value's end.
- **Cheap reconstruction.** Rebuilding a record never leaves the page, so it costs a mini-join over minipages rather than a cross-page join.
- **Drop-in.** Only page-level data-manipulation code changes; I/O, storage size and the rest of the DBMS are unchanged, and the storage manager can decide per relation whether to use PAX, based on the number of attributes. Implemented in the Shore storage manager.
- **Results vs NSM.** 50–75% fewer L2 data-cache misses on a main-memory workload, range selections and updates 17–25% faster, TPC-H queries involving I/O 11–48% faster (abstract; the introduction reports 11–42%); vs DSM, PAX stays stable as more attributes are projected.

## Caveats

Measured on a single 2001-era platform with disk pages, in a row-store engine; modern column stores (C-Store, MonetDB/X100) go further with compression and vectorised execution. Update-heavy workloads with variable-length growth need minipage reorganisation. The VLDB 2001 proceedings paper has no Crossref DOI; the card links the VLDB-hosted PDF.

## Links

- Paper (VLDB 2001 PDF): https://www.vldb.org/conf/2001/P169.pdf
- DBLP record: https://dblp.org/rec/conf/vldb/AilamakiDHS01.html
