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
seed_rank: 992
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
  card: 991-a-universal-algorithm-for-sequential-data-compression
- title: A Technique for High-Performance Data Compression
  url: "https://doi.org/10.1109/MC.1984.1659158"
  year: 1984
  arxiv: null
  doi: 10.1109/MC.1984.1659158
  card: 993-a-technique-for-high-performance-data-compression
---

# Compression of Individual Sequences via Variable-Rate Coding

## One-sentence takeaway

LZ78 builds an explicit growing dictionary and underpins LZW-style compressors.

## Why it matters here

Complements LZ77; central to GIF/compress-era dictionary methods.

## Key ideas

- Incremental dictionary of unseen phrases.
- Variable-rate phrase indices.
- Individual-sequence universality.
- Parent of Welch LZW.

## Caveats

- Dictionary reset policies matter.
- Often superseded by LZ77+Huffman in general use.

## Links

- DOI: [10.1109/TIT.1978.1055934](https://doi.org/10.1109/TIT.1978.1055934)
- URL: https://doi.org/10.1109/TIT.1978.1055934
