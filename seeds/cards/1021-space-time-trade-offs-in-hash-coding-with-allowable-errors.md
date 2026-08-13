---
title: Space/Time Trade-offs in Hash Coding with Allowable Errors
authors:
- Burton H. Bloom
year: 1970
venue: Communications of the ACM
arxiv: null
doi: 10.1145/362686.362692
source: "https://doi.org/10.1145/362686.362692"
topics:
- bloom-filter
- hashing
seed_rank: 1021
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: "Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots on the World Wide Web"
  url: "https://doi.org/10.1145/258533.258660"
  year: 1997
  arxiv: null
  doi: 10.1145/258533.258660
  card: 1022-consistent-hashing-and-random-trees-distributed-caching-prot
---

# Space/Time Trade-offs in Hash Coding with Allowable Errors

## One-sentence takeaway

Bloom filters: compact approximate set membership with one-sided errors.

## Why it matters here

Caches, DB indexes, distributed joins — classic systems probabilistic structure.

## Key ideas

- Multiple hash bits per key.
- No false negatives; tunable false positives.
- Space much smaller than storing keys.
- Spawns counting/Cuckoo filter lineage.

## Caveats

- Deletes need counting variants.
- Hash quality and sizing dominate.

## Links

- DOI: [10.1145/362686.362692](https://doi.org/10.1145/362686.362692)
- URL: https://doi.org/10.1145/362686.362692
