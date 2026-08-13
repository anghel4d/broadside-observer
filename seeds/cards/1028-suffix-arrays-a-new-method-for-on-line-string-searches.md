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
seed_rank: 1028
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: On-Line Construction of Suffix Trees
  url: "https://doi.org/10.1007/BF01206331"
  year: 1995
  arxiv: null
  doi: 10.1007/BF01206331
  card: 1029-on-line-construction-of-suffix-trees
- title: Fast Pattern Matching in Strings
  url: "https://doi.org/10.1137/0206024"
  year: 1977
  arxiv: null
  doi: 10.1137/0206024
  card: 1024-fast-pattern-matching-in-strings
---

# Suffix Arrays: A New Method for On-Line String Searches

## One-sentence takeaway

Suffix arrays as a space-practical alternative to suffix trees for string search.

## Why it matters here

Bioinformatics and compressors; lighter than suffix trees in practice.

## Key ideas

- Sorted suffixes with LCP ideas.
- Binary search for patterns.
- Less pointer overhead than suffix trees.
- Spawned DC3/SA-IS constructors.

## Caveats

- Paper’s construction is not modern SA-IS.
- Suffix trees still nicer for some queries.

## Links

- DOI: [10.1137/0222058](https://doi.org/10.1137/0222058)
- URL: https://doi.org/10.1137/0222058
