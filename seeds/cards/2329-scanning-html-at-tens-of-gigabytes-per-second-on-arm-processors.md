---
title: "Scanning HTML at Tens of Gigabytes per Second on ARM Processors"
authors:
  - "Daniel Lemire"
year: 2025
venue: "arXiv"
arxiv: "2503.01662"
doi: null
source: "https://arxiv.org/abs/2503.01662"
topics:
  - "simd"
  - "vectorized-classification"
  - "arm-neon"
  - "parsing"
  - "text-processing"
seed_rank: 2329
seed_batch: "craft-2026-10-17"
reviewed: "2026-10-17"
pool: "systems"
relevance_score: 8
lineage: unicode-text-shaping
cites:
  - title: "Scanning HTML at Tens of Gigabytes per Second on ARM Processors"
    url: "https://arxiv.org/abs/2503.01662"
    year: 2025
    arxiv: "2503.01662"
    doi: null
  - title: "Parsing Gigabytes of JSON per Second"
    url: "https://arxiv.org/abs/1902.08318"
    year: 2019
    arxiv: "1902.08318"
    doi: "10.1007/s00778-019-00578-5"
see:
  - "1479-validating-utf-8-in-less-than-one-instruction-per-byte"
  - "2290-fast-forgiving-base64-decoding-with-simd-instructions"
---

# Scanning HTML at Tens of Gigabytes per Second on ARM Processors

## One-sentence takeaway

WebKit and Blink both find the next `<`, `&`, `\r` or `\0` in HTML text with a 16-byte NEON "vectorized classification" (nibble table lookup plus compare), and Lemire shows that classifying 64 bytes at a time into a single 64-bit match mask uses about 40% fewer instructions and runs several times faster again, about 20× a plain `find_first_of` loop on Graviton 4 and Apple M2.

## Why it matters here

Every lexer in ano, every shader/asset text format and every log or config scanner in Anoptic has this exact inner loop: "skip to the next interesting character." This paper is a compact, code-level recipe for doing it on ARM (Apple silicon and Graviton) with tricks that carry over to x86: a 16-entry `tbl` lookup indexed by the low nibble that equals the input byte only for the target set, then pairwise byte adds to collapse four 16-byte compare masks into one 64-bit word you walk with count-trailing-zeros. It's the same structural idea as simdjson's structural index, distilled to one small, reusable kernel.

## Key ideas

- **Vectorized classification.** Pick a 16-byte table so that `tbl(table, x & 0x0F) == x` holds exactly for the target characters (`<` 0x3C, `&` 0x26, `\r` 0x0D, `\0` 0x00 have distinct low nibbles). One AND, one table lookup and one byte compare classify 16 bytes.
- **WebKit vs Blink.** WebKit (via SIMDe) tests "any match?" with `umaxv`, which can have about four cycles of latency on some cores; Blink (via Highway) narrows the mask with `shrn` by 4 to get a 64-bit nibble mask instead. Both then locate the first match.
- **Batch to 64 bytes.** Load four vectors, classify each, AND with a bit pattern (0x01 … 0x80 repeated), and do three rounds of `addp` (pairwise byte add) to produce one 64-bit mask per 64 bytes, amortising the reduction latency. One `rbit` lets you walk matches with repeated `clz`.
- **Results.** Both browser implementations are several times faster than `std::string::find_first_of`; the 64-byte index is several times faster again, reaching tens of GB/s on BBC, Office and Google pages. Code is at `lemire/htmlscanning`.
- **Context.** Within a few weeks in May 2024, WebKit (via SIMDe) and Blink (via Highway) shipped nearly the same SIMD fast path for `HTMLFastPathParser`; Google engineers reported a 2% gain on Speedometer 3's jQuery component.

## Caveats

The 64-byte version isn't a drop-in replacement: callers must be reworked to consume a match index rather than a single "next position." ASCII-only targets; arbitrary Unicode classes are harder. Measured only on ARM NEON (no SVE/SVE2 or RISC-V vector-length-agnostic variants, which may need new algorithms), and it's a single-author engineering note rather than a full study.

## Links

- arXiv abstract: https://arxiv.org/abs/2503.01662
- PDF: https://arxiv.org/pdf/2503.01662
- Code: https://github.com/lemire/htmlscanning
