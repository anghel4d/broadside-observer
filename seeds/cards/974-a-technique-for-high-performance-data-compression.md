---
title: A Technique for High-Performance Data Compression
authors:
- Terry A. Welch
year: 1984
venue: Computer
arxiv: null
doi: 10.1109/MC.1984.1659158
source: "https://doi.org/10.1109/MC.1984.1659158"
topics:
- compression
- lzw
seed_rank: 974
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: Compression of Individual Sequences via Variable-Rate Coding
  url: "https://doi.org/10.1109/TIT.1978.1055934"
  year: 1978
  arxiv: null
  doi: 10.1109/TIT.1978.1055934
see:
- "973-compression-of-individual-sequences-via-variable-rate-coding"
---

# A Technique for High-Performance Data Compression

## One-sentence takeaway

LZW practicalizes LZ78 with a fixed-width code table used in early Unix compress and GIF.

## Why it matters here

Historical systems classic clarifying dictionary-coder engineering.

## Key ideas

- Fixed-width codes over a growing string table.
- Simple encoder/decoder symmetry.
- Widely deployed despite patent-era friction.
- Bridge from LZ78 theory to products.

## Caveats

- Patent history complicated adoption.
- Weaker than modern DEFLATE/Brotli/Zstd.

## Links

- DOI: [10.1109/MC.1984.1659158](https://doi.org/10.1109/MC.1984.1659158)
- URL: https://doi.org/10.1109/MC.1984.1659158
