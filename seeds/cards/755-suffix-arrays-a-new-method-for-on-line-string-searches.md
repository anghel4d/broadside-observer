---
title: "Suffix Arrays: A New Method for On-Line String Searches"
authors:
- Udi Manber
- Gene Myers
year: 1993
venue: SIAM J. Comput.
arxiv: null
doi: 10.1137/0222058
source: "https://doi.org/10.1137/0222058"
topics:
- suffix-array
- string-algorithms
seed_rank: 755
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: Fast Pattern Matching in Strings
  url: "https://doi.org/10.1137/0206024"
  year: 1977
  arxiv: null
  doi: 10.1137/0206024
see:
- "751-fast-pattern-matching-in-strings"
---

# Suffix Arrays: A New Method for On-Line String Searches

## One-sentence takeaway

A suffix array is the sorted list of a string’s suffixes (plus an LCP array), giving suffix-tree queries at a fraction of the pointer overhead by binary-searching the ordered suffixes.

## Why it matters here

This is the practical full-text index for Broadside corpora, replay logs, and ano source: $O(n)$ integers instead of a pointer-heavy suffix tree, still answering “where does this substring occur?”.

## Key ideas

- Store the starting positions of all suffixes in lexicographic order; a pattern search is a pair of binary searches that bound the matching interval.
- Longest-common-prefix information accelerates search and supports longest-repeat / unique-substring queries.
- Construction in the paper is $O(n\log n)$ via doubling; later DC3 and SA-IS make linear-time builders the default.
- On the same text the structure is several times smaller than a suffix tree and maps cleanly onto contiguous arrays.

## Caveats

## Links

- DOI: [10.1137/0222058](https://doi.org/10.1137/0222058)
- URL: https://doi.org/10.1137/0222058
