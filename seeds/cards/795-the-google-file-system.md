---
title: The Google File System
authors:
- Sanjay Ghemawat
- Howard Gobioff
- Shun-Tak Leung
year: 2003
venue: SOSP
arxiv: null
doi: 10.1145/945445.945450
source: "https://doi.org/10.1145/945445.945450"
topics:
- distributed-systems
- gfs
- storage
seed_rank: 795
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# The Google File System

## One-sentence takeaway

GFS stores files as 64 MB chunks on commodity chunkservers, keeps metadata on a single master, and replicates chunks so a datacenter full of failing disks still delivers sequential throughput to batch producers.

## Why it matters here

This is the storage contract behind MapReduce and HDFS — the model for Broadside corpora and Anoptic replay dumps that are write-append, huge, and allowed to be slightly stale rather than POSIX-strict.

## Key ideas

- Files are sequences of large chunks; clients talk to the master only for metadata, then read/write chunks directly.
- The master assigns chunk handles, tracks replica locations, and issues leases to a primary replica that serializes mutations.
- Default triple replication plus a relaxed consistency model (atomic record append, defined writes, possible duplicate appends) matches producer-consumer batch workloads.
- Diagnosed from Google’s actual workload: multi-GB files, sequential reads, concurrent appenders, and component failure as the common case.

## Caveats

## Links

- DOI: [10.1145/945445.945450](https://doi.org/10.1145/945445.945450)
- Google Research: https://research.google/pubs/the-google-file-system/
- PDF: https://storage.googleapis.com/gweb-research2023-media/pubtools/4446.pdf
