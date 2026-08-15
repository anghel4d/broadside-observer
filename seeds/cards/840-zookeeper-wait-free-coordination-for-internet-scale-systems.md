---
title: "ZooKeeper: Wait-free Coordination for Internet-scale Systems"
authors:
- Patrick Hunt
- Mahadev Konar
- Flavio P. Junqueira
- Benjamin Reed
year: 2010
venue: USENIX ATC
arxiv: null
doi: null
source: "https://www.usenix.org/conference/usenix-atc-10/zookeeper-wait-free-coordination-internet-scale-systems"
topics:
- databases
- contemporary-db
seed_rank: 840
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# ZooKeeper: Wait-free Coordination for Internet-scale Systems

## One-sentence takeaway

ZooKeeper is a wait-free coordination kernel: a hierarchical znode tree with FIFO client order, linearizable writes via Zab, local reads, and one-shot watches, so applications build locks, membership, and config on the client instead of blocking inside the service.

## Why it matters here

Anoptic’s job system, GRID COMMAND shard membership, and Broadside leader election should consume a ZooKeeper-shaped API (or etcd/Consul) rather than inventing distributed locks in-engine. The paper’s point is the kernel, not a lock server: keep the server wait-free, put recipes on the client.

## Key ideas

- Regular, ephemeral, and sequential znodes plus watches implement group membership, rendezvous, and herd-free locks without server-side lock objects.
- Writes are A-linearizable (clients may pipeline); reads are local to the connected replica, with `sync` as a cheap fence when a client must see the latest write.
- Zab totally orders state changes; a pipeline of outstanding transactions is what delivers tens-to-hundreds of thousands of ops/s at 2:1–100:1 read/write.
- Watches notify rather than invalidate: a slow client cannot stall an update the way Chubby’s cache-invalidation locks can.

## Caveats

## Links

- USENIX: [ATC ’10](https://www.usenix.org/conference/usenix-atc-10/zookeeper-wait-free-coordination-internet-scale-systems)
- PDF: https://www.usenix.org/legacy/events/atc10/tech/full_papers/Hunt.pdf
