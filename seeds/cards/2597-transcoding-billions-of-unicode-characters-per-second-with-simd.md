---
title: "Transcoding Billions of Unicode Characters per Second with SIMD Instructions"
authors:
  - "Daniel Lemire"
  - "Wojciech Muła"
year: 2022
venue: "Software: Practice and Experience 52(2), 555–575"
arxiv: "2109.10433"
doi: "10.1002/spe.3036"
source: "https://arxiv.org/abs/2109.10433"
topics:
  - "unicode"
  - "utf-8"
  - "utf-16"
  - "simd"
  - "transcoding"
seed_rank: 2597
seed_batch: "craft-2026-11-15"
reviewed: "2026-11-15"
pool: "engines"
relevance_score: 8
lineage: unicode-text-shaping
cites:
  - title: "Unicode at Gigabytes per Second (Lemire, SPIRE 2021)"
    url: "https://arxiv.org/abs/2111.08692"
    year: 2021
    arxiv: "2111.08692"
    doi: "10.1007/978-3-030-86692-1_2"
see:
  - "1479-validating-utf-8-in-less-than-one-instruction-per-byte"
  - "1858-unicode-text-segmentation-uax-29"
  - "1599-unicode-bidirectional-algorithm-uax-9"
---

# Transcoding Billions of Unicode Characters per Second with SIMD Instructions

## One-sentence takeaway

UTF-8 ⇄ UTF-16 conversion is usually slower than the disk or network feeding it; designing the transcoder around SIMD instructions on x64 and ARM multiplies its speed, and the open-source simdutf library that came out of this work transcodes at gigabytes per second while still validating its input.

## Why it matters here

Card 1479 (UTF-8 validation in under one instruction per byte) is already in the library; this is its sequel and the piece Anoptic's text stack actually calls on every string crossing a boundary: OS APIs and fonts that want UTF-16, files and network in UTF-8, ano's Japanese surface syntax, and HarfBuzz-style shapers that take either. Transcoding sits in front of segmentation (card 1858) and bidi (card 1599), so a slow converter taxes the whole pipeline. The design lesson carries over to other byte-stream decoders: classify a block of bytes with vector compares, then pick a precomputed shuffle for that pattern instead of branching per character.

## Key ideas

- **Problem.** Popular transcoding functions barely use SIMD and run slower than state-of-the-art disks and networks.
- **Approach.** Transcoding algorithms built for SIMD instructions on commodity x64 and ARM processors.
- **Result.** A multiple-fold speedup over existing transcoders on current systems (the companion SPIRE 2021 paper reports up to ten times faster than ICU on non-ASCII text, and faster still on ASCII), with validation kept in the loop.
- **Reproducibility.** Released as the open-source simdutf library.

## Caveats

Card written from the arXiv abstracts of this paper and its SPIRE companion; I did not read the full text or re-run the benchmarks. Speedups depend on the instruction set available (AVX2, AVX-512, NEON), so the gain on a given target needs measuring. Transcoding is only the first step; shaping, line breaking and rendering costs are separate.

## Links

- arXiv abstract: https://arxiv.org/abs/2109.10433
- PDF: https://arxiv.org/pdf/2109.10433
- DOI (journal version): https://doi.org/10.1002/spe.3036
- Code: https://github.com/simdutf/simdutf
- Companion, Unicode at Gigabytes per Second: https://arxiv.org/abs/2111.08692
