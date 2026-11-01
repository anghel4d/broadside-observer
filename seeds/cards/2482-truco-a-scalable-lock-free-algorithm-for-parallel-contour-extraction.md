---
title: "TRUCO: A Scalable Lock-Free Algorithm for Parallel Contour Extraction"
authors:
  - "Rafael Muñoz-Salinas"
  - "Francisco J. Romero-Ramirez"
  - "Manuel J. Marín-Jiménez"
year: 2026
venue: "arXiv preprint (cs.CV)"
arxiv: "2610.37297"
doi: null
source: "https://arxiv.org/abs/2610.37297"
topics:
  - "contour-tracing"
  - "lock-free"
  - "benign-races"
  - "raster-algorithms"
seed_rank: 2482
seed_batch: "craft-2026-11-01"
reviewed: "2026-11-01"
pool: "systems"
lineage: concurrent-data-structures
relevance_score: 8
cites:
  - title: "TRUCO: A Scalable Lock-Free Algorithm for Parallel Contour Extraction"
    url: "https://arxiv.org/abs/2610.37297"
    year: 2026
    arxiv: "2610.37297"
    doi: null
see: ["1498-marching-cubes-a-high-resolution-3d-surface-construction-algorithm", "241-lock-free-locks-revisited"]
---

# TRUCO: A Scalable Lock-Free Algorithm for Parallel Contour Extraction

## One-sentence takeaway

Splitting a binary mask into horizontal bands and letting each thread own only the contours whose raster-scan start point falls in its band, while tracing speculatively downward and aborting on any upward step into an earlier band, makes Suzuki–Abe border following parallel with no locks, atomics or tile stitching, and over an order of magnitude faster than OpenCV.

## Why it matters here

Anoptic and the RTS sim keep producing binary masks (fog-of-war, selection lassos, territory, glyph coverage for scanline text) whose outlines we want as polylines every frame. TRUCO is a small copyable pattern beyond contours: make the shared write idempotent (every thread that marks a pixel writes the same value), so the race is benign, then pick a single ownership rule (the start point) that decides who emits each result exactly once. That is the same trick we want for wait-free buses and masked array effects in ano: let duplicates of the work happen but make exactly one of them publish.

## Key ideas

- Start-point ownership: a contour belongs to the thread whose row band contains its first raster-scan pixel, so no contour is counted twice.
- Speculative downward tracing: a thread may follow a contour into later bands; a trace that moves upward into an earlier band aborts, because that band's owner will find it.
- Benign races: pixel marks are idempotent, so threads write the shared image buffer concurrently without mutexes or atomic read-modify-write.
- Drops the Suzuki–Abe parent/child hierarchy, which many pipelines never use and which is the serial bottleneck.
- Evaluated on synthetic sweeps and a 4K-class dataset on a 20-thread i7-13700H and a Xeon 4510 capped at 20 threads; code at github.com/rmsalinas/truco.

## Caveats

Read the abstract, introduction, method and the headline results table (12-page preprint). No contour hierarchy is produced, so holes-inside-shapes logic needs a separate pass. 'Benign race' relies on the language memory model treating same-value plain stores as harmless; in C23 these should be relaxed atomics to stay defined. Speedups are against single-threaded OpenCV, so part of the gain is just using the cores.

## Links

- [arXiv abstract](https://arxiv.org/abs/2610.37297)
- [PDF](https://arxiv.org/pdf/2610.37297)
- [Code](https://github.com/rmsalinas/truco)
