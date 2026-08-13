---
title: A Fast String Searching Algorithm
authors:
- Robert S. Boyer
- J Strother Moore
year: 1977
venue: Communications of the ACM
arxiv: null
doi: 10.1145/359842.359859
source: "https://doi.org/10.1145/359842.359859"
topics:
- string-matching
- boyer-moore
seed_rank: 752
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
- "751-fast-pattern-matching-in-strings"
---

# A Fast String Searching Algorithm

## One-sentence takeaway

Boyer–Moore sublinear average-case search with bad-character and good-suffix shifts.

## Why it matters here

Conceptual parent of high-speed textual search.

## Key ideas

- Compare from pattern end.
- Bad-character heuristic.
- Good-suffix heuristic.
- Sublinear in practice on large alphabets.

## Caveats

- Worst-case needs Galil-style refinements.
- Binary/DNA alphabets change tradeoffs.

## Links

- DOI: [10.1145/359842.359859](https://doi.org/10.1145/359842.359859)
- URL: https://doi.org/10.1145/359842.359859
