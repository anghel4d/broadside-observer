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

Boyer–Moore compares the pattern from its last character and jumps the window using a bad-character shift and a good-suffix shift, so many texts are searched in fewer than $n$ inspections.

## Why it matters here

This is the conceptual parent of high-speed `memmem` / asset-path / log search in the Anoptic toolchain: large alphabets and long needles skip most of the haystack.

## Key ideas

- Alignment is tested from the right end of the pattern, so a mismatch on a rare last character can slide the window almost a full pattern length.
- The bad-character heuristic shifts so the mismatched text character lines up with its rightmost occurrence in the pattern (or past the window if it does not occur).
- The good-suffix heuristic shifts to the next alignment that preserves a just-matched suffix of the pattern.
- Expected inspections on natural-language alphabets are sublinear in $n$; the paper reports substantial speedups over naive and KMP-style left-to-right search.

## Caveats

## Links

- DOI: [10.1145/359842.359859](https://doi.org/10.1145/359842.359859)
- URL: https://doi.org/10.1145/359842.359859
