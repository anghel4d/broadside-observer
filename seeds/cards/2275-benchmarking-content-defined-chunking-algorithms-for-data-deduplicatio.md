---
title: "Benchmarking Content-Defined Chunking Algorithms for Data Deduplication"
authors:
  - "Marcel Gregoriadis"
  - "Leonhard Balduf"
  - "Björn Scheuermann"
  - "Johan Pouwelse"
year: 2026
venue: "arXiv"
arxiv: "2610.13704"
doi: null
source: "https://arxiv.org/abs/2610.13704"
topics:
  - "deduplication"
  - "storage"
  - "hashing"
seed_rank: 2275
seed_batch: "craft-2026-10-13"
reviewed: "2026-10-13"
pool: "systems"
relevance_score: 6
lineage: content-defined-chunking
cites:
  - title: "Benchmarking Content-Defined Chunking Algorithms for Data Deduplication"
    url: "https://arxiv.org/abs/2610.13704"
    year: 2026
    arxiv: "2610.13704"
    doi: null
see:
  - "721-a-universal-algorithm-for-sequential-data-compression"
---

# Benchmarking Content-Defined Chunking Algorithms for Data Deduplication

## One-sentence takeaway

Separating the byte-level cut-point rule from the layered tricks shows AE is the best-balanced base chunker, and exposes a long-reproduced AE parameterization bug that makes chunks 13–39% smaller than intended.

## Why it matters here

Content-defined chunking underlies asset caches, patch delivery, replay/snapshot storage and sync tools; this gives corrected formulas for expected chunk size and a clean comparison to pick a chunker instead of copying a buggy default.

## Key ideas

- **Modular view.** A base chunking algorithm fixes the cut-point condition; size normalization, min/max thresholds and caching layer on top. Prior benchmarks conflated the two.
- **Eight base algorithms, four workloads, four metrics:** throughput, deduplication ratio, mean chunk size, chunk-size variance.
- **New formulas** relating parameters to expected chunk size for AE, RAM and MII.
- **Bug found.** The widely used AE parameterization yields chunks 13–39% smaller than intended and inflates AE's reported deduplication.
- **Verdicts.** AE is most balanced; RAM's similarity to AE breaks on low-entropy data; MII and PCI add little for storage workloads. Code, data and scripts are open source.

## Caveats

Storage-oriented workloads; FastCDC-style normalization and SIMD gear-hash variants are treated as layers rather than benchmarked end to end. Preprint (2026-10-09).

## Links

- arXiv abstract: https://arxiv.org/abs/2610.13704
- PDF: https://arxiv.org/pdf/2610.13704
