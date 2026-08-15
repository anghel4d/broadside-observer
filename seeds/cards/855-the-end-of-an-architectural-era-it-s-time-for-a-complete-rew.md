---
title: "The end of an architectural era: (it's time for a complete rewrite)"
authors:
- Michael Stonebraker
- Samuel Madden
- Daniel J. Abadi
- Stavros Harizopoulos
- Nabil Hachem
- Pat Helland
year: 2007
venue: VLDB
arxiv: null
doi: null
source: "https://hstore.cs.brown.edu/papers/hstore-endofera.pdf"
topics:
- databases
- contemporary-db
seed_rank: 855
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "\"One Size Fits All\": An Idea Whose Time Has Come and Gone"
    url: "https://doi.org/10.1109/ICDE.2005.1"
    year: 2005
    arxiv: null
    doi: "10.1109/ICDE.2005.1"
see:
  - "856-one-size-fits-all-an-idea-whose-time-has-come-and-gone"
---

# The end of an architectural era: (it's time for a complete rewrite)

## One-sentence takeaway

H-Store, a from-scratch main-memory shared-nothing OLTP prototype, runs TPC-C about 82× faster than a disk-era RDBMS by deleting logging, latching, and locking whenever the workload lets it.

## Why it matters here

This is the brief for specialized engines: if GRID COMMAND's command log and Anoptic's local world store are OLTP-shaped, inheriting System R's disk, thread, and lock stack is leaving one to two orders of magnitude on the table.

## Key ideas

- System R descendants still assume disks, user stalls, and shared-memory multiprocessors; OLTP DBs now fit in RAM on a shared-nothing grid and have no think-time.
- Single-thread each partition to completion: no multithreaded B-trees, no resource governor, no latching.
- High availability via peer replicas replaces a persistent redo log; only a transient undo log is kept, and failed sites rebuild from a live peer.
- Constrained-tree / one-shot / two-phase / sterile transaction classes let H-Store drop 2PL, 2PC, and undo entirely for the common case.
- Stored procedures run in-process; "no knobs" physical design is a first-class goal rather than a tuner bolted onto legacy GUIs.

## Caveats

## Links

- Author PDF: https://hstore.cs.brown.edu/papers/hstore-endofera.pdf
- VLDB 2007 PDF: https://www.vldb.org/conf/2007/papers/industrial/p1150-stonebraker.pdf
