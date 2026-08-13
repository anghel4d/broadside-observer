---
title: A Universal Algorithm for Sequential Data Compression
authors:
- Jacob Ziv
- Abraham Lempel
year: 1977
venue: IEEE Trans. Information Theory
arxiv: null
doi: 10.1109/TIT.1977.1055714
source: "https://doi.org/10.1109/TIT.1977.1055714"
topics:
- compression
- lz77
seed_rank: 721
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: A Mathematical Theory of Communication
  url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
  year: 1948
  arxiv: null
  doi: 10.1002/j.1538-7305.1948.tb01338.x
- title: Compression of Individual Sequences via Variable-Rate Coding
  url: "https://doi.org/10.1109/TIT.1978.1055934"
  year: 1978
  arxiv: null
  doi: 10.1109/TIT.1978.1055934
- title: A Method for the Construction of Minimum-Redundancy Codes
  url: "https://doi.org/10.1109/JRPROC.1952.273898"
  year: 1952
  arxiv: null
  doi: 10.1109/JRPROC.1952.273898
see:
- "553-a-mathematical-theory-of-communication"
- "722-compression-of-individual-sequences-via-variable-rate-coding"
- "570-a-method-for-the-construction-of-minimum-redundancy-codes"
---

# A Universal Algorithm for Sequential Data Compression

## One-sentence takeaway

LZ77 dictionary compression achieves universal asymptotic optimality without a source model.

## Why it matters here

Ancestor of DEFLATE/zlib/git pack and most general-purpose compressors.

## Key ideas

- Sliding-window phrase matching.
- Universality for broad source classes.
- Pointers encode repeats.
- Foundation for LZSS and DEFLATE.

## Caveats

- Window/match heuristics dominate practice.
- Not always best for tiny payloads.

## Links

- DOI: [10.1109/TIT.1977.1055714](https://doi.org/10.1109/TIT.1977.1055714)
- URL: https://doi.org/10.1109/TIT.1977.1055714
