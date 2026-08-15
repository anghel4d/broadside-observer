---
title: "CORFU: a shared log design for flash clusters"
authors:
- Mahesh Balakrishnan
- Dahlia Malkhi
- Vijayan Prabhakaran
- Ted Wobber
- Michael Wei
- John D. Davis
year: 2012
venue: NSDI
arxiv: null
doi: null
source: "https://www.usenix.org/conference/nsdi12/technical-sessions/presentation/balakrishnan"
topics:
- databases
- contemporary-db
seed_rank: 868
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# CORFU: a shared log design for flash clusters

## One-sentence takeaway

CORFU makes a cluster of network-attached flash units look like one strongly consistent shared log: clients write pages directly, a sequencer only hands out 64-bit positions, and there is no storage server on the data path.

## Why it matters here

A GRID COMMAND / Broadside command log wants exactly this abstraction — append-only, strongly ordered, cheap to fan out. CORFU is the flash-cluster design Tango and later shared-log systems sit on.

## Key ideas

- Clients keep a compact map from logical log offset → replica flash pages and do I/O themselves; the cluster is a distributed SSD, not a server farm.
- A sequencer issues tokens (positions) so concurrent appenders do not contend on data; the sequencer is not on the read/write path.
- Each position is mapped to multiple flash pages for fault tolerance; wear-leveling, locality, and geo-placement are cluster-level properties.
- One instance: ~200k appends/s; reads scale linearly with the number of flash units.
- Designed to slash cost, power, and latency by eliminating storage servers between clients and raw flash.

## Caveats

## Links

- USENIX: https://www.usenix.org/conference/nsdi12/technical-sessions/presentation/balakrishnan
- PDF: https://www.usenix.org/system/files/conference/nsdi12/nsdi12-final30.pdf
