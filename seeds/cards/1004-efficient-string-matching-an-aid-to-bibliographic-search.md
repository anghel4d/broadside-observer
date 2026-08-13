---
title: "Efficient String Matching: An Aid to Bibliographic Search"
authors:
- Alfred V. Aho
- Margaret J. Corasick
year: 1975
venue: Communications of the ACM
arxiv: null
doi: 10.1145/360825.360855
source: "https://doi.org/10.1145/360825.360855"
topics:
- string-matching
- aho-corasick
seed_rank: 1004
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: Fast Pattern Matching in Strings
  url: "https://doi.org/10.1137/0206024"
  year: 1977
  arxiv: null
  doi: 10.1137/0206024
see:
- "1002-fast-pattern-matching-in-strings"
---

# Efficient String Matching: An Aid to Bibliographic Search

## One-sentence takeaway

Aho–Corasick multi-pattern matching via a keyword trie with failure links.

## Why it matters here

IDS/content scanning and multi-needle search in engines and tools.

## Key ideas

- Trie plus KMP-like failure function.
- Output links for matches.
- Linear in text + patterns + outputs.
- Dictionary matching workhorse.

## Caveats

- Automaton size grows with pattern set.
- Bit-parallel alternatives exist.

## Links

- DOI: [10.1145/360825.360855](https://doi.org/10.1145/360825.360855)
- URL: https://doi.org/10.1145/360825.360855
