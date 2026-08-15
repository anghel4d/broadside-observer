---
title: "Deuteronomy: Transaction support for cloud data"
authors:
- Justin J. Levandoski
- David Lomet
- Mohamed F. Mokbel
- Kevin Keliang Zhao
year: 2011
venue: CIDR
arxiv: null
doi: null
source: "https://www.microsoft.com/en-us/research/publication/deuteronomy-transaction-support-for-cloud-data/"
topics:
- databases
- contemporary-db
seed_rank: 866
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Deuteronomy: Transaction support for cloud data

## One-sentence takeaway

Deuteronomy splits the storage kernel into a Transactional Component (logical CC + undo/redo, location-blind) and a Data Component (cache + record access methods, transaction-blind) so ACID can sit on local or remote cloud data.

## Why it matters here

This is the architectural cut Broadside wants between "who owns isolation" and "who owns bytes." GRID COMMAND can keep a TC next to the control plane and swap DCs (local files, remote pages, later a Bw-Tree) without rewriting transactions.

## Key ideas

- TC talks a logical record interface; it never sees pages, latches, or physical location. DC never sees begin/commit.
- Deployments compose: TC and DC co-located, TC in front of a remote DC, or one TC over many DCs.
- Logical undo/redo plus logical locking let the TC tolerate high DC latency — the point of the cloud setting.
- Adapted TPC-W stays well-behaved across a wide range of DC latencies in the preliminary experiments.
- Direct ancestor of later Microsoft work: Bw-Tree, LLAMA, and the Hekaton/SQL Server latch-free stack.

## Caveats

## Links

- MSR page: https://www.microsoft.com/en-us/research/publication/deuteronomy-transaction-support-for-cloud-data/
- PDF: https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/Deut-TC.pdf
