---
title: Compression of Individual Sequences via Variable-Rate Coding
authors:
  - Jacob Ziv
  - Abraham Lempel
year: 1978
venue: IEEE Trans. Information Theory
arxiv: null
doi: 10.1109/TIT.1978.1055934
source: "https://doi.org/10.1109/TIT.1978.1055934"
topics:
  - compression
  - lz78
seed_rank: 722
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
  - title: A Universal Algorithm for Sequential Data Compression
    url: "https://doi.org/10.1109/TIT.1977.1055714"
    year: 1977
    arxiv: null
    doi: 10.1109/TIT.1977.1055714
  - title: A Mathematical Theory of Communication
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: 10.1002/j.1538-7305.1948.tb01338.x
see:
  - "721-a-universal-algorithm-for-sequential-data-compression"
  - "553-a-mathematical-theory-of-communication"
---

# Compression of Individual Sequences via Variable-Rate Coding

## One-sentence takeaway

LZ78 grows an explicit dictionary of unseen phrases and emits variable-rate indices, proving universality for individual sequences rather than for a known ensemble.

## Why it matters here

Complements LZ77: an explicit table instead of a sliding window. GIF and Unix `compress` (via Welch LZW) are this dictionary, not DEFLATE. Use it when you want a growing codebook rather than a lookback buffer.

## Key ideas

- The parser incrementally inserts the shortest phrase not already in the dictionary and transmits the index of its prefix plus one new symbol.
- Variable-rate coding of those indices is what makes the scheme adapt to the sequence itself.
- Individual-sequence universality: compression is measured against the sequence’s own empirical entropy, not an assumed source.
- LZ77 is the cited predecessor; Welch’s LZW is the later fixed-width engineering of the same table.
- IEEE Trans. Inf. Theory 24(5), September 1978, pp. 530–536.

## Caveats

## Links

- DOI: [10.1109/TIT.1978.1055934](https://doi.org/10.1109/TIT.1978.1055934)
