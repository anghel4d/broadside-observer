---
title: Efficient Randomized Pattern-Matching Algorithms
authors:
- Richard M. Karp
- Michael O. Rabin
year: 1987
venue: IBM Journal of Research and Development
arxiv: null
doi: 10.1147/rd.312.0249
source: "https://doi.org/10.1147/rd.312.0249"
topics:
- string-matching
- rabin-karp
seed_rank: 1027
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: Fast Pattern Matching in Strings
  url: "https://doi.org/10.1137/0206024"
  year: 1977
  arxiv: null
  doi: 10.1137/0206024
  card: 1024-fast-pattern-matching-in-strings
---

# Efficient Randomized Pattern-Matching Algorithms

## One-sentence takeaway

Rabin–Karp rolling hashes for pattern matching and fingerprinting.

## Why it matters here

Hash-based matching pattern used far beyond strings.

## Key ideas

- Modular rolling hash updates.
- Monte Carlo false-positive control.
- Extends to multi-pattern/2D.
- Simple and parallel-friendly.

## Caveats

- Needs careful modulus/hash choice.
- Deterministic verification recommended.

## Links

- DOI: [10.1147/rd.312.0249](https://doi.org/10.1147/rd.312.0249)
- URL: https://doi.org/10.1147/rd.312.0249
