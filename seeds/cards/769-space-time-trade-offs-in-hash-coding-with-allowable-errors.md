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
seed_rank: 769
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# Space/Time Trade-offs in Hash Coding with Allowable Errors

## One-sentence takeaway

A Bloom filter stores a set as $k$ hash-addressed bits so membership tests have no false negatives and a tunable false-positive rate, using far less space than the keys themselves.

## Why it matters here

This is the compact negative-cache for Broadside ingest, Anoptic asset existence tests, and distributed “have I seen this chunk?” checks before touching disk or the network.

## Key ideas

- Insert sets $k$ bits chosen by $k$ independent hashes; query returns “in” only if all $k$ bits are set.
- False negatives are impossible; false-positive probability is $\approx(1-e^{-kn/m})^k$ for $m$ bits and $n$ keys.
- Optimal $k$ is $(m/n)\ln 2$, about $1.44\log_2(1/\varepsilon)$ bits per key for error $\varepsilon$.
- Counting Bloom filters, cuckoo filters, and blocked Bloom filters are the industrial descendants.

## Caveats

## Links

- DOI: [10.1145/362686.362692](https://doi.org/10.1145/362686.362692)
- URL: https://doi.org/10.1145/362686.362692
