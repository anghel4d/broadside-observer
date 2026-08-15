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
seed_rank: 764
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# Organization and Maintenance of Large Ordered Indices

## One-sentence takeaway

Bayer–McCreight B-trees pack many keys per page-sized node so an ordered index on external memory has logarithmic height in *pages*, not in pointers.

## Why it matters here

This is the storage-oriented search tree behind databases, filesystems, and Broadside packfile / replay indexes — high fanout, few I/Os, ancestor of every B+ leaf-linked variant.

## Key ideas

- A node of order $m$ holds between $\lceil m/2\rceil$ and $m$ children (root excepted), so height is $O(\log_m n)$.
- Insert splits a full node and pushes the median up; delete merges or redistributes underflowing siblings.
- Nodes are sized to a disk page, turning each comparison level into one I/O.
- B+ trees keep all records in leaves and use internal nodes only as a fence-key index — the industrial default.

## Caveats

## Links

- DOI: [10.1007/BF00288683](https://doi.org/10.1007/BF00288683)
- URL: https://doi.org/10.1007/BF00288683
