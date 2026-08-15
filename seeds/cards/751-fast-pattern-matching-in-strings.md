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
seed_rank: 751
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: "Efficient String Matching: An Aid to Bibliographic Search"
  url: "https://doi.org/10.1145/360825.360855"
  year: 1975
  arxiv: null
  doi: 10.1145/360825.360855
see:
- "753-efficient-string-matching-an-aid-to-bibliographic-search"
---

# Fast Pattern Matching in Strings

## One-sentence takeaway

Knuth–Morris–Pratt matches a length-$m$ pattern in a length-$n$ text in $O(n+m)$ character inspections by shifting with a precomputed failure function and never rewinding the text pointer.

## Why it matters here

This is the deterministic scanner behind ano lexers, GRID COMMAND order parsers, and Broadside ingest filters: one left-to-right pass, predictable time, no backtracking surprises in a hot loop.

## Key ideas

- The failure function $f(j)$ is the longest proper prefix of the pattern that is also a suffix of the prefix of length $j$, computed in $O(m)$ from the pattern alone.
- On a mismatch at pattern index $j$, the algorithm replaces $j$ by $f(j)$ instead of sliding the pattern by one and rereading text.
- The text index only advances; the proof that each character is inspected a constant number of times yields the $O(n+m)$ bound.
- The same table is the transition function of a string-matching automaton, which Aho–Corasick later generalizes to many patterns.

## Caveats

## Links

- DOI: [10.1137/0206024](https://doi.org/10.1137/0206024)
- URL: https://doi.org/10.1137/0206024
