---
title: "Hopscotch Hashing"
authors:
  - "Maurice Herlihy"
  - "Nir Shavit"
  - "Moran Tzafrir"
year: 2008
venue: "DISC"
arxiv: null
doi: "10.1007/978-3-540-87779-0_24"
source: "https://doi.org/10.1007/978-3-540-87779-0_24"
topics:
  - hashtable
  - lockfree
seed_rank: 400
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
lineage: open-addressing
cites:
  - title: "Cuckoo Hashing"
    url: "https://doi.org/10.1016/j.jalgor.2003.12.002"
    year: 2004
    arxiv: null
    doi: "10.1016/j.jalgor.2003.12.002"
  - title: "Split-Ordered Lists: Lock-Free Extensible Hash Tables"
    url: "https://doi.org/10.1145/1147954.1147958"
    year: 2006
    arxiv: null
    doi: "10.1145/1147954.1147958"
see:
  - "387-abseil-swiss-tables"
---

# Hopscotch Hashing

## One-sentence takeaway

Hopscotch keeps every key within H slots of its hash bucket (H = 32) by displacing earlier keys toward a hole, so `contains` is a constant-time bitmap walk of one or two cache lines.

## Why it matters here

Anoptic / GRID COMMAND maps that stay 80–90% full should not fall back to chained `ConcurrentHashMap` or to cuckoo’s 50% comfort zone. Hopscotch is the open-addressing design Swiss tables later SIMD’d: neighborhood bitmap, wait-free reads, lock per bucket for writers.

## Key ideas

- A virtual bucket is the home slot plus the next H−1; a hop-information word marks which of those slots belong to this home.
- Insert linear-probes for a hole, then “hops” occupants backward so the hole walks toward the home — the displacement chain cannot cycle.
- `contains`/`remove` are deterministic O(1); overflow of a neighborhood (probability 1/H! under uniform hashing) triggers resize.
- Concurrent version: wait-free readers ignore the lock; add/remove take the bucket lock. On Niagara II it beat Lea’s CHM by 2–3× at high load.

## Caveats

## Links

- DOI: https://doi.org/10.1007/978-3-540-87779-0_24
- Author PDF: https://people.csail.mit.edu/shanir/publications/disc2008_submission_98.pdf
