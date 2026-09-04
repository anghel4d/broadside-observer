---
title: "Prefix Sums and Their Applications"
authors:
  - "Guy E. Blelloch"
year: 1990
venue: "CMU-CS-90-190 / Synthesis of Parallel Algorithms (Ble93 reprint)"
arxiv: null
doi: null
source: "https://www.cs.cmu.edu/~guyb/papers/Ble93.pdf"
topics:
  - simd
  - parallel-prefix
  - ecs-data-oriented-simulation
seed_rank: 1571
seed_batch: "archive-2026-09-04"
reviewed: "2026-09-04"
pool: "systems"
relevance_score: 9
lineage: ecs-data-oriented
cites:
  - title: "Scans as Primitive Parallel Operations"
    url: "https://doi.org/10.1109/12.42122"
    year: 1989
    arxiv: null
    doi: "10.1109/12.42122"
  - title: "Parallel Prefix Computation"
    url: "https://doi.org/10.1145/322217.322232"
    year: 1980
    arxiv: null
    doi: "10.1145/322217.322232"
  - title: "NESL: A Nested Data-Parallel Language (Version 3.1)"
    url: "https://www.cs.cmu.edu/~blelloch/papers/Nesl3.1.pdf"
    year: 1995
    arxiv: null
    doi: null
  - title: "Single-pass Parallel Prefix Scan with Decoupled Look-back"
    url: "https://research.nvidia.com/publication/2016-03_single-pass-parallel-prefix-scan-decoupled-look-back"
    year: 2016
    arxiv: null
    doi: null
see:
  - "307-scans-as-primitive-parallel-operations"
  - "1154-single-pass-parallel-prefix-scan-with-decoupled-look-back"
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
---

# Prefix Sums and Their Applications

## One-sentence takeaway

All-prefix-sums (`scan`) of an associative ⊕ — and the exclusive `prescan` — is the parallel building block that implements split, compact, radix sort, segmented operations, and processor allocation in O(n/p + lg p) on an EREW PRAM.

## Why it matters here

GPU-driven Anoptic (meshlet compact, instance compact, RC probe packing, ECS “destroyed this frame”) is a scan. Card 307 argues scan should be a *primitive*; this chapter is the worked catalog and the two-sweep algorithm 1154 later replaced on GPUs (~3n traffic, grid barrier). Do not remint 307 — mint the 1990/93 applications chapter the GPU lineage actually cites as Ble93.

## Key ideas

- **Scan vs prescan vs reduce.** Scan: `[a0, a0⊕a1, …, a0⊕…⊕a_{n−1}]`. Prescan (needs identity I): `[I, a0, …, a0⊕…⊕a_{n−2}]`. Reduce is the last scan element. Vector layout is the default; linked-list prefix is deferred to later chapters. “Scan” is the APL name.
- **Up-sweep / down-sweep.** Reduce is a binary tree: `for d in 0..lg n−1: a[i+2^{d+1}−1] ← a[i+2^d−1] ⊕ a[i+2^{d+1}−1]`. Prescan reuses those partials: plant I at the root, pass parent to left child, parent⊕left-upsweep to right child. Theorem 1.1: after the down-sweep each vertex holds the sum of preceding leaves. With p processors: T = O(n/p + lg p), optimal when n/p ≥ lg p.
- **Split = two scans.** Flags 0/1; plus-scan the 0-flags and the 1-flags; write each element to `i − 1s_before` or `n0 + 1s_before`. One split per bit is LSD radix sort; the same primitive deletes marked array elements (compact) and allocates processors.
- **Segmented scans.** A flag vector restarts ⊕ at segment heads. Segmented +/max-scan plus split gives a parallel quicksort (and the nested-data-parallel story NESL 141 later compiles).
- **Worked list.** Lexicographic string compare, multiprecision add, polynomial eval, linear recurrences, tridiagonal systems, lexical analysis / grep, tree depths, 2D component labeling — all reduced to scan. Some machines already expose +/min/max scan as unit-time ops; Blelloch argues a PRAM subclass should too.

## Caveats

- 1989 IEEE TC *Scans as Primitive Parallel Operations* (307) is the “treat scan as unit cost” paper; this is the longer CMU-CS-90-190 chapter reprinted as Ble93. No DOI on the TR/reprint. Do not remint 307, NESL 141, or Merrill–Garland 1154.
- EREW two-sweep is not the GPU algorithm: 1154’s decoupled look-back is one pass, ~2n traffic, no global barrier. Cite Ble93 for the algebra; implement 1154.
- ⊕ must be associative (not necessarily commutative). Floating-point + is only pseudo-associative — fine for compaction counts, not for a bitwise-stable reduction.

## Links

- Open PDF (Ble93 reprint): https://www.cs.cmu.edu/~guyb/papers/Ble93.pdf
- CMU author page: https://www.cs.cmu.edu/~guyb/papers/index.html
