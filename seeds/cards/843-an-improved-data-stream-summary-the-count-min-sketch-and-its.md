---
title: "An Improved Data Stream Summary: The Count-Min Sketch and Its Applications"
authors:
- Graham Cormode
- S. Muthukrishnan
year: 2005
venue: Journal of Algorithms
arxiv: null
doi: 10.1016/j.jalgor.2003.12.001
source: "https://doi.org/10.1016/j.jalgor.2003.12.001"
topics:
- databases
- contemporary-db
seed_rank: 843
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# An Improved Data Stream Summary: The Count-Min Sketch and Its Applications

## One-sentence takeaway

The Count-Min sketch is a d × w array of counters: each update adds its count to one hashed cell per row, and a point query returns the minimum of those d cells, giving ε-approximate frequencies with probability 1−δ in O((1/ε) log(1/δ)) space.

## Why it matters here

Heavy-hitter detection, join-size sketches, and “which entity ids are hot this tick” are Count-Min, not a full frequency map. Pair it with HyperLogLog: HLL counts distinct, CM estimates per-key load for GRID COMMAND matchmaking and Broadside source fan-in.

## Key ideas

- d pairwise-independent hash functions map keys onto w buckets; an increment touches exactly d counters; the query answer is the min, which is an upper bound that overestimates only when every row collides.
- Setting w = ⌈e/ε⌉ and d = ⌈ln(1/δ)⌉ yields the classic (ε, δ) guarantee with conservative (never-underestimate) point queries.
- Range, inner-product, and quantile queries reduce to a small number of point queries via dyadic intervals, so one sketch family covers several stream problems.
- Compared with Count-Sketch, Count-Min is simpler and often tighter for strictly positive updates; both are linear and mergeable.

## Caveats

## Links

- DOI: [10.1016/j.jalgor.2003.12.001](https://doi.org/10.1016/j.jalgor.2003.12.001)
- URL: https://doi.org/10.1016/j.jalgor.2003.12.001
