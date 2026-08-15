---
title: The Periodic Table of Data Structures
authors:
- Stratos Idreos
- Kostas Zoumpatianos
- Manos Athanassoulis
- Niv Dayan
- Brian Hentschel
- Michael S. Kester
- Demi Guo
- Lukas M. Maas
- Wilson Qin
- Abdul Wasay
- Yiyou Sun
year: 2018
venue: IEEE Data Engineering Bulletin
arxiv: null
doi: null
source: "https://open.bu.edu/items/8a35af4e-090b-4630-add6-5d37bd9405de"
topics:
- databases
- contemporary-db
seed_rank: 872
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# The Periodic Table of Data Structures

## One-sentence takeaway

Data structures are compositions of a small set of design primitives (layout, encoding, update strategy, auxiliary structure); tabulating those primitives turns "pick a B-tree or an LSM" into a searchable design space.

## Why it matters here

Anoptic and GRID COMMAND keep reinventing maps, logs, and filters. The periodic table is the vocabulary for saying why a particular layout was chosen — and for generating the next one instead of forking yet another named tree.

## Key ideas

- An access method factors into independent decisions: node layout, key/payload encoding, in-place vs out-of-place updates, buffering, filters, and partitioning.
- Hybrid structures (LSM + B-tree, filter-accelerated tries, learned indexes) are cells in this table, not one-off inventions.
- The table is also a synthesis tool: given a workload (read/write mix, skew, memory), you can walk the continuum toward a structure that does not yet have a name.
- Directly feeds later "self-designing" / design-continuum papers (CIDR 2019) and Data Calculator-style synthesizers from the same group.
- IEEE Data Engineering Bulletin 41(3), 2018, pp. 64–75 — not a CIDR paper.

## Caveats

## Links

- OpenBU: https://open.bu.edu/items/8a35af4e-090b-4630-add6-5d37bd9405de
- PDF: https://open.bu.edu/bitstreams/2a0c3df5-a237-4160-87e1-2fb8ae1ebb43/download
