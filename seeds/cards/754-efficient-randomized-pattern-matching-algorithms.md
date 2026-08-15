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
seed_rank: 754
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
- title: A Fast String Searching Algorithm
  url: "https://doi.org/10.1145/359842.359859"
  year: 1977
  arxiv: null
  doi: 10.1145/359842.359859
see:
- "751-fast-pattern-matching-in-strings"
- "752-a-fast-string-searching-algorithm"
---

# Efficient Randomized Pattern-Matching Algorithms

## One-sentence takeaway

Karp–Rabin fingerprints a sliding window with a modular rolling hash so pattern equality becomes an arithmetic update, with Monte Carlo false-positive probability driven by the prime modulus.

## Why it matters here

Rolling fingerprints are how Anoptic and Broadside compare windows, chunks, and replay slices without memcmp on every alignment — the same idea as content-defined chunking and rsync-style weak checksums.

## Key ideas

- A length-$m$ window hash updates in $O(1)$ by dropping the outgoing character and adding the incoming one, modulo a random prime.
- Equality of hashes is necessary for equality of strings; a mismatch of hashes is definitive, a match can be verified or accepted with a stated error bound.
- The same fingerprinting extends to multiple patterns and to two-dimensional arrays by hashing rows then columns.
- The algorithm is simple, parallel-friendly, and does not need the automaton tables of KMP or Aho–Corasick.

## Caveats

## Links

- DOI: [10.1147/rd.312.0249](https://doi.org/10.1147/rd.312.0249)
- URL: https://doi.org/10.1147/rd.312.0249
