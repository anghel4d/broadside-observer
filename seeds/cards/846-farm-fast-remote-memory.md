---
title: "FaRM: Fast Remote Memory"
authors:
- Aleksandar Dragojević
- Dushyanth Narayanan
- Orion Hodson
- Miguel Castro
year: 2014
venue: NSDI
arxiv: null
doi: 10.5555/2616448.2616486
source: "https://www.usenix.org/conference/nsdi14/technical-sessions/dragojevi%C4%87"
topics:
- databases
- contemporary-db
seed_rank: 846
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# FaRM: Fast Remote Memory

## One-sentence takeaway

FaRM exposes cluster DRAM over RDMA as a shared address space with lock-free remote reads, one-sided writes, and a transaction protocol that uses RDMA and a fast message-oriented commit, delivering millions of ops/s per machine on a transactional key-value store.

## Why it matters here

If Anoptic ever spans a rack of simulation or asset machines, FaRM is the “treat remote memory as local, but with transactions” design — not TCP RPCs. The lesson for GRID COMMAND state is: one-sided reads of versioned objects beat a two-sided lock server.

## Key ideas

- Objects live in RDMA-registered DRAM; readers fetch them with one-sided RDMA and validate a header version, so the owner’s CPU is off the read path.
- Transactions combine optimistic reads with RDMA writes / message-based locking for updates; commit is a fast, non-Paxos primary-backup scheme tuned for the lossless datacenter fabric.
- A custom kernel-bypass networking stack and slab allocator keep request latency in the few-microsecond range.
- The evaluation’s point is throughput at low latency on a small cluster, not geo-replication; later FaRM papers add recovery and transparency.

## Caveats

## Links

- USENIX: [NSDI ’14](https://www.usenix.org/conference/nsdi14/technical-sessions/dragojevi%C4%87)
- PDF: https://www.usenix.org/system/files/conference/nsdi14/nsdi14-paper-dragojevic.pdf
