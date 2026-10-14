---
title: "Fast Forgiving Base64 Decoding with SIMD Instructions"
authors:
  - "Daniel Lemire"
year: 2026
venue: "arXiv"
arxiv: "2610.17406"
doi: null
source: "https://arxiv.org/abs/2610.17406"
topics:
  - "simd"
  - "text-processing"
seed_rank: 2290
seed_batch: "frontier-2026-10-14"
reviewed: "2026-10-14"
pool: "systems"
relevance_score: 9
lineage: unicode-text-shaping
cites:
  - title: "Fast Forgiving Base64 Decoding with SIMD Instructions"
    url: "https://arxiv.org/abs/2610.17406"
    year: 2026
    arxiv: "2610.17406"
    doi: null
  - title: "Faster Base64 Encoding and Decoding Using AVX2 Instructions"
    url: "https://arxiv.org/abs/1704.00605"
    year: 2018
    arxiv: "1704.00605"
    doi: "10.1145/3132709"
  - title: "Base64 encoding and decoding at almost the speed of a memory copy"
    url: "https://arxiv.org/abs/1910.05109"
    year: 2020
    arxiv: "1910.05109"
    doi: "10.1002/spe.2777"
see: []
---

# Fast Forgiving Base64 Decoding with SIMD Instructions

## One-sentence takeaway

Lemire's simdutf decoder handles ES2026/WHATWG forgiving-base64 (skip ASCII whitespace, reject other non-alphabet bytes) inside the SIMD loop by decoding clean 64-character blocks directly and compacting dirty blocks into a small stack buffer, reaching up to 94 GB/s on AMD Zen 5.

## Why it matters here

Production SIMD craft at its best, already shipping in major browsers and JS runtimes: the clean-block fast path plus compaction fallback is a reusable pattern for any Anoptic or ano text/asset ingestion path that must be both strict and tolerant.

## Key ideas

- **Problem.** Prior SIMD Base64 decoders assume whitespace-free input; Muła and Lemire reported that a separate whitespace-pruning pass can cost as much as decoding itself.
- **Block-oriented algorithm.** Clean 64-character blocks decode directly; blocks containing ignorable characters are compacted into a small stack buffer and then decoded.
- **Targets.** x64 from SSSE3 through AVX-512 VBMI2, ARM NEON, and LoongArch, in C++ inside simdutf.
- **Results.** Up to 94 GB/s on Zen 5; in Node.js 25, Uint8Array.fromBase64 throughput rises up to 6× over Node.js 19.
- **Adoption.** The implementation has been adopted by major browsers and JavaScript runtimes.

## Caveats

Peak numbers are from C++ into pre-allocated buffers; the paper attributes the remaining JS-level gap to allocation and copying in the engine. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.17406
- PDF: https://arxiv.org/pdf/2610.17406
- HTML: https://arxiv.org/html/2610.17406v1
- simdutf: https://simdutf.github.io/simdutf/
- Browser benchmark: https://simdutf.github.io/browserbase64/
