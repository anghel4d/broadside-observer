---
title: "FoundationDB: A Distributed Unbundled Transactional Key Value Store"
authors:
- Jingyu Zhou
- Meng Xu
- Alexander Shraer
- Bala Namasivayam
- Alex Miller
- Evan Tschannen
- Steve Atherton
- Andrew J. Beamon
- Rusty Sears
- John Leach
- Dave Rosenthal
- Xin Dong
- Will Wilson
- Ben Collins
- David Scherer
- Alec Grieser
- Young Liu
- Alvin Moore
- Bhaskar Muppana
- Xiaoge Su
- Vishesh Yadav
year: 2021
venue: SIGMOD
arxiv: null
doi: 10.1145/3448016.3457559
source: "https://doi.org/10.1145/3448016.3457559"
topics:
- databases
- contemporary-db
seed_rank: 817
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# FoundationDB: A Distributed Unbundled Transactional Key Value Store

## One-sentence takeaway

FoundationDB unbundles a strictly serializable, multi-version ordered key-value store into independently scalable roles — stateless transaction proxies, a Sequencer that mints read/commit versions, resolvers that detect conflicts, and storage servers — so OLTP transactions stay strictly serializable while storage and compute scale separately.

## Why it matters here

It is the cleanest “transaction layer as a service” design on the shelf: build GRID COMMAND / Broadside indexes, SQL, or document APIs on a single ordered MVCC keyspace instead of baking transactions into each store. Apple’s CloudKit and several Record Layer systems sit on this split.

## Key ideas

- Clients get a read version from the Sequencer, read at that snapshot from storage servers, buffer writes, then ask resolvers whether the write set intersects any commit since the read version.
- The Sequencer totally orders commits; storage servers apply mutations in version order and retain multi-version history for snapshot reads.
- A deterministic simulation test harness (the paper’s engineering centerpiece) injects disk, network, and process faults on a single-threaded simulated cluster before every release.
- Recovery rebuilds in-flight transaction state from a durable transaction log without a stop-the-world rewrite of storage.

## Caveats

## Links

- DOI: [10.1145/3448016.3457559](https://doi.org/10.1145/3448016.3457559)
- URL: https://doi.org/10.1145/3448016.3457559
