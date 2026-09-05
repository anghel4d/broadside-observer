---
title: "Parallel Prefix Sum (Scan) with CUDA"
authors:
  - "Mark Harris"
year: 2007
venue: "NVIDIA CUDA SDK whitepaper / GPU Gems 3 Chapter 39"
arxiv: null
doi: null
source: "https://developer.download.nvidia.com/compute/cuda/1.1-Beta/x86_website/projects/scan/doc/scan.pdf"
topics:
  - parallel-prefix
  - cuda
  - scan
  - gpu-computing
seed_rank: 1602
seed_batch: "archive-2026-09-06"
reviewed: "2026-09-06"
pool: "systems"
relevance_score: 9
lineage: ecs-data-oriented
cites:
  - title: "Prefix Sums and Their Applications"
    url: "https://www.cs.cmu.edu/~guyb/papers/Ble93.pdf"
    year: 1990
    arxiv: null
    doi: null
  - title: "Scans as Primitive Parallel Operations"
    url: "https://doi.org/10.1109/12.42122"
    year: 1989
    arxiv: null
    doi: "10.1109/12.42122"
  - title: "Single-pass Parallel Prefix Scan with Decoupled Look-back"
    url: "https://research.nvidia.com/publication/2016-03_single-pass-parallel-prefix-scan-decoupled-look-back"
    year: 2016
    arxiv: null
    doi: null
see:
  - "307-scans-as-primitive-parallel-operations"
  - "1571-prefix-sums-and-their-applications"
  - "1154-single-pass-parallel-prefix-scan-with-decoupled-look-back"
---

# Parallel Prefix Sum (Scan) with CUDA

## One-sentence takeaway

Harris’s 2007 CUDA whitepaper teaches inclusive/exclusive scan on the GPU: naïve O(n log n) work, then Blelloch-style work-efficient up-sweep/down-sweep, bank-conflict padding, and hierarchical scans for arrays larger than one block — the teaching ancestor of today’s device-wide scans.

## Why it matters here

Card 307 declares scan a primitive; 1571 is Ble93’s catalog; 1154 is the modern single-pass decoupled look-back. This is the CUDA how-to those three leave as a gap: bank conflicts, shared-memory layout, and multi-block hierarchy that every Anoptic ECS compact / instance expand / meshlet path still echoes. Do not remint 307/1571/1154 — mint the GPU teaching paper that made Ble93 runnable on CUDA.

## Key ideas

- **Inclusive vs exclusive.** Inclusive: each lane holds sum through itself. Exclusive (prescan) needs identity and is what stream compaction usually wants.
- **Naïve → work-efficient.** Double-buffered tree that does O(n log n) work vs Blelloch two-sweep O(n) work / O(n) steps in the PRAM sense; GPU version maps upsweep/downsweep onto shared memory.
- **Bank conflicts.** Shared-memory pad/offset patterns so tree walks do not serialize on banks — the practical CUDA tax Ble93 never saw.
- **Arbitrary length.** Scan per block, then scan the block aggregates, then seed each block — the hierarchical pattern later replaced (for performance) by 1154’s decoupled look-back.
- **APL lineage.** Explicitly cites Blelloch and notes “scan” as the APL name — same story 1571 tells on the CPU/PRAM side.

## Caveats

- 2007 SDK-era performance numbers are obsolete; production code should use CUB/Thrust or 1154-style one-pass scans. Keep this card for the algorithm pedagogy and bank-conflict lesson.
- Exclusive scan identity and floating-point associativity caveats from 1571 still apply.
- GPU Gems 3 Ch. 39 is the book form; Links point at the open CUDA SDK PDF.

## Links

- Open PDF (NVIDIA CUDA 1.1 SDK scan doc): https://developer.download.nvidia.com/compute/cuda/1.1-Beta/x86_website/projects/scan/doc/scan.pdf
- GPU Gems 3 Ch. 39 (HTML): https://developer.nvidia.com/gpugems/gpugems3/part-vi-gpu-computing/chapter-39-parallel-prefix-sum-scan-cuda
