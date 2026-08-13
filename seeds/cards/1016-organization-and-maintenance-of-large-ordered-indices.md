---
title: Organization and Maintenance of Large Ordered Indices
authors:
- R. Bayer
- E. McCreight
year: 1972
venue: Acta Informatica
arxiv: null
doi: 10.1007/BF00288683
source: "https://doi.org/10.1007/BF00288683"
topics:
- b-trees
- indexing
seed_rank: 1016
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: An Algorithm for the Organization of Information
  url: "https://en.wikipedia.org/wiki/AVL_tree"
  year: 1962
  arxiv: null
  doi: null
see:
- "1015-an-algorithm-for-the-organization-of-information"
---

# Organization and Maintenance of Large Ordered Indices

## One-sentence takeaway

B-trees for external-memory ordered indices.

## Why it matters here

Databases, filesystems, and packfiles — the storage-oriented search tree.

## Key ideas

- High fanout aligned to pages.
- Split/merge maintenance.
- Logarithmic height with few I/Os.
- Ancestor of B+ variants.

## Caveats

- Page-size tuning dominates.
- LSM trees compete for write-heavy workloads.

## Links

- DOI: [10.1007/BF00288683](https://doi.org/10.1007/BF00288683)
- URL: https://doi.org/10.1007/BF00288683
