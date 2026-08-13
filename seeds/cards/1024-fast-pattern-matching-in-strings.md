---
title: Fast Pattern Matching in Strings
authors:
- Donald E. Knuth
- "James H. Morris, Jr."
- Vaughan R. Pratt
year: 1977
venue: SIAM J. Comput.
arxiv: null
doi: 10.1137/0206024
source: "https://doi.org/10.1137/0206024"
topics:
- string-matching
- kmp
seed_rank: 1024
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: A Fast String Searching Algorithm
  url: "https://doi.org/10.1145/359842.359859"
  year: 1977
  arxiv: null
  doi: 10.1145/359842.359859
  card: 1025-a-fast-string-searching-algorithm
- title: "Efficient String Matching: An Aid to Bibliographic Search"
  url: "https://doi.org/10.1145/360825.360855"
  year: 1975
  arxiv: null
  doi: 10.1145/360825.360855
  card: 1026-efficient-string-matching-an-aid-to-bibliographic-search
---

# Fast Pattern Matching in Strings

## One-sentence takeaway

Knuth–Morris–Pratt linear-time string matching via the failure function.

## Why it matters here

Canonical deterministic matcher; failure links show up in parsers and scanners.

## Key ideas

- Longest proper prefix-suffix table.
- Never rewinds the text pointer.
- O(n+m) worst case.
- Clean automaton view of matching.

## Caveats

- Boyer–Moore often faster on natural text.
- Constant factors matter vs SIMD memmem.

## Links

- DOI: [10.1137/0206024](https://doi.org/10.1137/0206024)
- URL: https://doi.org/10.1137/0206024
