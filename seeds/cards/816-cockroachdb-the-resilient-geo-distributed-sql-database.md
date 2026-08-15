---
title: "CockroachDB: The Resilient Geo-Distributed SQL Database"
authors:
- Rebecca Taft
- Irfan Sharif
- Andrei Matei
- Nathan VanBenschoten
- Jordan Lewis
- Tobias Grieger
- Kai Niemi
- Andy Woods
- Anne Birzin
- Raphael Poss
- Paul Bardea
- Amruta Ranade
- Ben Darnell
- Bram Gruneir
- Justin Jaffray
- Lucy Zhang
- Peter Mattis
year: 2020
venue: SIGMOD
arxiv: null
doi: 10.1145/3318464.3386134
source: "https://doi.org/10.1145/3318464.3386134"
topics:
- databases
- contemporary-db
seed_rank: 816
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Spanner: Google's Globally-Distributed Database"
  url: "https://www.usenix.org/conference/osdi12/technical-sessions/presentation/corbett"
  year: 2012
  arxiv: null
  doi: 10.5555/2387880.2387905
see:
- "812-spanner-google-s-globally-distributed-database"
---

# CockroachDB: The Resilient Geo-Distributed SQL Database

## One-sentence takeaway

CockroachDB is an open-source, Spanner-inspired geo-distributed SQL database that shards ranges across Raft groups, uses Hybrid Logical Clocks for commit ordering, and offers SERIALIZABLE isolation with optional follower reads and geo-partitioned table localities.

## Why it matters here

It is the deployable stand-in for Spanner when Anoptic / GRID COMMAND wants multi-region SQL without TrueTime hardware: same range + consensus + timestamp story, but HLC instead of GPS clocks, and the source is public.

## Key ideas

- A table is a sorted key-space split into ranges; each range is a Raft group that can move and split as load or size changes.
- Transactions are serialized by HLC commit timestamps plus an intent / write-intent lock table; conflicting readers push or wait, writers restart on timestamp uncertainty.
- Table PARTITION BY / REGIONAL locality pins ranges to regions so a player’s row can live near that player while global tables stay multi-region.
- Followers can serve consistent historical reads below a closed timestamp, trading freshness for local latency.

## Caveats

## Links

- DOI: [10.1145/3318464.3386134](https://doi.org/10.1145/3318464.3386134)
- URL: https://doi.org/10.1145/3318464.3386134
