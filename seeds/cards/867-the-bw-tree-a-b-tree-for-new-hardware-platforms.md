---
title: "The Bw-Tree: A B-tree for new hardware platforms"
authors:
- Justin J. Levandoski
- David Lomet
- Sudipta Sengupta
year: 2013
venue: ICDE
arxiv: null
doi: 10.1109/ICDE.2013.6544834
source: "https://doi.org/10.1109/ICDE.2013.6544834"
topics:
- databases
- contemporary-db
seed_rank: 867
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Deuteronomy: Transaction Support for Cloud Data"
    url: "https://www.microsoft.com/en-us/research/publication/deuteronomy-transaction-support-for-cloud-data/"
    year: 2011
    arxiv: null
    doi: null
see:
  - "866-deuteronomy-transaction-support-for-cloud-data"
---

# The Bw-Tree: A B-tree for new hardware platforms

## One-sentence takeaway

The Bw-Tree is a latch-free B-tree: updates install delta records through a mapping table CAS, so threads never hold a page latch and the same structure can sit on RAM or flash.

## Why it matters here

Anoptic indexes and GRID COMMAND keyspaces need to survive multicore without a lock manager. Bw-Tree is the Deuteronomy DC's access method — the latch-free page layer later reused in Hekaton, LLAMA, and Azure Cosmos / SQL Server.

## Key ideas

- A mapping table (logical page id → physical address) is the only shared mutable word; a compare-and-swap swings a page to a new delta-record chain or a consolidated page.
- Deltas prepend (insert/delete/update/split) rather than overwrite, which plays well with flash and with epoch-based reclamation.
- Structure-modification ops (split, merge) are themselves latch-free state machines published through the same mapping table.
- Designed jointly for (1) many-core cache-line contention and (2) high-latency flash, unlike RAM-only trees such as Masstree.
- LLAMA later factors the log-and-flash layer out so the Bw-Tree can be just the in-memory latch-free component of Deuteronomy.

## Caveats

## Links

- DOI: [10.1109/ICDE.2013.6544834](https://doi.org/10.1109/ICDE.2013.6544834)
