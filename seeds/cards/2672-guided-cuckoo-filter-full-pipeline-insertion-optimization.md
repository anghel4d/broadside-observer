---
title: "Guided Cuckoo Filter: Full-Pipeline Insertion Optimization"
authors:
  - "Min Liu"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2611.26053"
doi: null
source: "https://arxiv.org/abs/2611.26053"
version_reviewed: "v1"
topics:
  - "cuckoo-filter"
  - "approximate-membership"
  - "hash-tables"
  - "power-of-two-choices"
  - "open-addressing"
seed_rank: 2672
seed_batch: "craft-2026-11-21"
reviewed: "2026-11-21"
pool: "systems"
relevance_score: 7
lineage: open-addressing
see:
  - "1494-cuckoo-hashing"
  - "769-space-time-trade-offs-in-hash-coding-with-allowable-errors"
  - "2438-optimal-worst-case-open-addressing-braided-cuckoo-hashing"
cites:
  - title: "Guided Cuckoo Filter: Full-Pipeline Insertion Optimization"
    url: "https://arxiv.org/abs/2611.26053"
    year: 2026
    arxiv: "2611.26053"
    doi: null
---

# Guided Cuckoo Filter: Full-Pipeline Insertion Optimization

## One-sentence takeaway

Two small changes to cuckoo-filter insertion (put the fingerprint in the less-full of its two buckets, and when evicting, kick out the most recently inserted entry instead of a random one) cut kicks per insertion by up to 3.1x at 96% load and total kicks by 63% at 95% load.

## Why it matters here

Cuckoo filters are a cheap pre-check before a hash-join probe, an asset-cache lookup or an entity-set membership test in ano and Anoptic. Both changes are local edits to the insert routine with almost no extra cost, so we can run filters fuller (less memory) without insert time blowing up. Easy to try in our open-addressing code.

## Key ideas

- **Two blind steps.** Standard insertion picks whichever candidate bucket it tries first, and on a full table evicts a random victim in a random walk.
- **Guided placement.** Compare the occupancy of both candidate buckets and insert into the less-loaded one (power of two choices), so eviction chains start less often.
- **Guided eviction.** Evict the most recently inserted element; its alternate bucket still carries randomness that shortens the chain.
- **They compose.** One change lowers how often evictions happen, the other how long the chains are, so the gains multiply.
- **Results.** On filters with 2^22 slots: up to 3.1x fewer kicks per insertion at 96% load, 63% fewer total kicks at 95% load, negligible compute overhead.

## Caveats

Abstract-level read of v1 (19 Nov 2026), single author, not refereed. Results are counted in kicks, not wall-clock time or cache misses, and only for one table size. Effects on false-positive rate, deletion and concurrent inserts are not stated in the abstract. Reading occupancy of both buckets costs an extra cache line when the buckets are far apart.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.26053
- PDF: https://arxiv.org/pdf/2611.26053
