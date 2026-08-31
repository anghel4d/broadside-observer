---
title: "Validating UTF-8 In Less Than One Instruction Per Byte"
authors: ["John Keiser", "Daniel Lemire"]
year: 2021
venue: "Software: Practice and Experience"
arxiv: "2010.03090"
doi: "10.1002/spe.2920"
source: "https://arxiv.org/abs/2010.03090"
topics: [unicode-text-shaping]
seed_rank: 1479
seed_batch: "craft-2026-08-31"
reviewed: "2026-08-31"
pool: "engines"
relevance_score: 9
lineage: unicode-text-shaping
cites:
  - title: "Base64 encoding and decoding at almost the speed of a memory copy"
    url: "https://doi.org/10.1002/spe.2777"
    year: 2020
    arxiv: null
    doi: "10.1002/spe.2777"
  - title: "Unicode Standard Annex #15: Unicode Normalization Forms"
    url: "https://www.unicode.org/reports/tr15/"
    year: 2020
    arxiv: null
    doi: null
see: []
---

# Validating UTF-8 In Less Than One Instruction Per Byte

## One-sentence takeaway

Three 16-byte PSHUFB tables (low nibble, high nibble, previous high nibble), AND the lookups, and you validate UTF-8 at > 10 GiB/s on commodity SIMD — branchy FSMs are the bottleneck, not disk.

## Why it matters here

Slug (1128) and RAVG/MPVG (1460/1478) rasterize *already-shaped* outlines. Anoptic still has to ingest UTF-8 (CJK UI, GRID COMMAND chat/orders, interned trigger names) on the way in. IIS-class path-traversal bugs are what happen when you skip this. Keiser–Lemire is the intern gate: SIMD lookup, ASCII fast path, no per-byte branches. simdjson’s stage-1 checker *is* this algorithm. Wire it on the intern path this week; HarfBuzz can wait until the string is known valid.

## Key ideas

- **Vectorized classification with three tables.** Almost every UTF-8 error is visible in the first two bytes (12 bits). `vpshufb` / NEON TBL maps the current low nibble, current high nibble, and previous high nibble through 16-entry tables that live in SIMD registers; AND the three results into an error register. One instruction classifies 16 or 32 bytes.
- **ASCII fast path.** If the high bits are all zero, the block is ASCII and you skip the three lookups. Throughput can exceed `memcpy` on mostly-ASCII; random UTF-8 still runs at ¼–½ of memcpy.
- **Continuation / overlong / surrogate / too-large.** Header-bit patterns, overlong encodings, UTF-16 surrogates (U+D800–DFFF), and > U+10FFFF are all table cases. Incomplete sequences at block boundaries ride a `prev_incomplete` register into the next chunk.
- **> 10 GiB/s, < 1 instruction/byte.** Branchy validators do 2–4 GiB/s and lose to NVMe / LZ4. Scylla engineers hit UTF-8 as a load bottleneck; this is the answer that shipped into simdjson.

## Caveats

Validation ≠ shaping ≠ normalization. NFC/NFD is UAX #15, not this paper. Transcoding UTF-8↔UTF-16 is a sibling leftover (Lemire has later SIMD transcoding papers — cite, do not mint this cycle). SIMD variants are x64 AVX2 / SSE and ARM NEON in the paper; RISC-V V is someone’s port. Do not treat this as a font renderer. Ropes (1462) are the immutable-string leftover, not a validator.

## Links

- arXiv: https://arxiv.org/abs/2010.03090
- PDF: https://arxiv.org/pdf/2010.03090
- DOI: [10.1002/spe.2920](https://doi.org/10.1002/spe.2920)
- Experiments: https://github.com/lemire/validateutf8-experiments
- simdjson (production use): https://github.com/simdjson/simdjson
