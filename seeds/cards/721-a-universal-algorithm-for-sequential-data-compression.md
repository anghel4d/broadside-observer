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
  - title: A Method for the Construction of Minimum-Redundancy Codes
    url: "https://doi.org/10.1109/JRPROC.1952.273898"
    year: 1952
    arxiv: null
    doi: 10.1109/JRPROC.1952.273898
see:
  - "553-a-mathematical-theory-of-communication"
  - "570-a-method-for-the-construction-of-minimum-redundancy-codes"
---

# A Universal Algorithm for Sequential Data Compression

## One-sentence takeaway

LZ77 encodes a stream by replacing repeated phrases with (offset, length) pointers into a sliding window, achieving universal asymptotic optimality without a source model.

## Why it matters here

Anoptic packs, replay logs, and git-style content stores all sit on DEFLATE/zlib descendants of this paper. When a GRID COMMAND snapshot or an agent transcript needs a general-purpose compressor, this is the dictionary method, not a hand-rolled RLE.

## Key ideas

- The encoder looks back in a finite window for the longest match and emits a pointer plus a literal; the decoder only needs the same window.
- Universality: for a broad class of sources the compression ratio approaches the entropy rate without estimating probabilities first.
- Shannon’s source-coding theory is the information-theoretic target; Huffman-style codes are the comparison class for known distributions.
- LZSS and DEFLATE are later engineering specializations of the same sliding-window idea.
- IEEE Trans. Inf. Theory 23(3), May 1977, pp. 337–343.

## Caveats

## Links

- DOI: [10.1109/TIT.1977.1055714](https://doi.org/10.1109/TIT.1977.1055714)
