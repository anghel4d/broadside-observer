---
title: "Decoding Billions of Integers per Second through Vectorization"
authors:
  - "Daniel Lemire"
  - "Leonid Boytsov"
year: 2015
venue: "Software: Practice and Experience 45(1) (online 2013; arXiv 2012)"
arxiv: "1209.2137"
doi: "10.1002/spe.2203"
source: "https://arxiv.org/abs/1209.2137"
topics:
  - integer-compression
  - simd
  - columnar-storage
  - bit-packing
seed_rank: 2444
seed_batch: "archive-2026-10-28"
reviewed: "2026-10-28"
pool: "systems"
relevance_score: 8
lineage: data-layout
see:
  - 2405-better-bitmap-performance-with-roaring-bitmaps
  - 2423-database-architecture-optimized-for-the-new-bottleneck-memory-access
  - 129-monetdb-x100-hyper-pipelining-query-execution
cites:
  - title: "Decoding billions of integers per second through vectorization"
    url: "https://doi.org/10.1002/spe.2203"
    year: 2015
    arxiv: "1209.2137"
    doi: "10.1002/spe.2203"
---

# Decoding Billions of Integers per Second through Vectorization

## One-sentence takeaway

Lemire and Boytsov show that binary packing of 128-integer blocks in an interleaved ("vertical") SIMD layout, plus vectorized differential coding that subtracts the element four positions back instead of the previous one, decodes sorted 32-bit integer arrays nearly twice as fast as varint-G8IU and PFOR (SIMD-BP128), while a patched variant with vectorizable exceptions (SIMD-FastPFOR) gets within 10% of Simple-8b's compression at twice its decode speed.

## Why it matters here

ano is columnar, and many of its columns are integer ids, sorted entity lists, relation targets and tick stamps that are small or delta-friendly. This paper is the practical recipe for keeping such columns compressed in memory and in saves or replays while decoding faster than memory bandwidth: choose a block size, store one bit width per block, lay lanes out vertically so one SIMD shift-and-mask unpacks four values, and do the prefix sum four lanes at a time. It also makes the case against general-purpose compressors (Snappy, LZ4) for integer columns, which matters for replay and network snapshot formats.

## Key ideas

- **Pipeline.** Differential coding (δ = x_i − x_{i−1}) then integer compression; decoding is unpack followed by a prefix sum, and both halves need to be fast because once unpacking is vectorized the prefix sum dominates.
- **Vectorized deltas.** Use δ_i = x_i − x_{i−4} (first four values raw) so encoding and decoding are single SIMD subtract or add steps per four integers; this costs a little compression and roughly doubles prefix-sum speed.
- **SIMD-BP128.** Blocks of 128 integers with one bit width each, packed in an interleaved layout across four 32-bit lanes (Schlegel et al.'s "vertical" model) and unpacked with branch-free shifts and masks; nearly twice as fast as the prior fastest schemes and up to 2 bits per integer smaller.
- **SIMD-FastPFOR.** Patched frame-of-reference that picks a smaller bit width per block and stores the high bits of exceptions in separate packed arrays so that patching also vectorizes; compression close to Simple-8b at about twice its decoding speed.
- **Survey and bounds.** The paper reviews variable byte, varint-G8IU, Simple-9/8b, PFOR variants and gamma codes, and derives an information-theoretic lower bound for binary packing in an appendix.

## Caveats

Results are for 32-bit integers, mostly sorted posting-list style data, on x86 SSE-era processors; the authors list 64-bit ids, other ISAs and adaptive per-array scheme choice as future work. Random access inside a delta-coded block requires decoding from the block start. Speeds are throughput on large arrays, not latency for tiny lookups. Read from arXiv v7 (2021), which postdates the journal version.

## Links

- Paper (arXiv): https://arxiv.org/abs/1209.2137
- Paper (DOI, Software: Practice and Experience): https://doi.org/10.1002/spe.2203
- Code (FastPFOR library, linked from the paper): https://github.com/lemire/FastPFOR
