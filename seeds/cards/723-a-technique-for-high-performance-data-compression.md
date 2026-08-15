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
seed_rank: 723
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
  - title: A Universal Algorithm for Sequential Data Compression
    url: "https://doi.org/10.1109/TIT.1977.1055714"
    year: 1977
    arxiv: null
    doi: 10.1109/TIT.1977.1055714
see:
  - "722-compression-of-individual-sequences-via-variable-rate-coding"
  - "721-a-universal-algorithm-for-sequential-data-compression"
---

# A Technique for High-Performance Data Compression

## One-sentence takeaway

LZW practicalizes LZ78 as a fixed-width code table that encoder and decoder grow in lockstep — the algorithm behind early Unix `compress` and GIF.

## Why it matters here

Systems history for dictionary compressors: if you meet a GIF, an old `.Z`, or a “string table” coder in an asset pipeline, this is the engineering, not the 1978 universality proof.

## Key ideas

- A 12-bit (typically) code table starts with the singleton alphabet and grows as unseen strings appear.
- Encoder and decoder perform the same table updates, so the bitstream is only indices — no separate dictionary to ship.
- Designed for speed on 1980s hardware; the paper is an IEEE *Computer* engineering article, not an information-theory proof.
- LZ78 is the cited theory; LZ77 is the sibling sliding-window method.
- Patent-era friction later pushed general-purpose tools toward DEFLATE.

## Caveats

## Links

- DOI: [10.1109/MC.1984.1659158](https://doi.org/10.1109/MC.1984.1659158)
