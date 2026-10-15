---
title: "Parallel Sparse Outputs for Tensor Compilers"
authors:
  - "Adrian Gushin"
  - "Pau Sum"
  - "Willow Ahrens"
year: 2026
venue: "arXiv"
arxiv: "2610.19308"
doi: null
source: "https://arxiv.org/abs/2610.19308"
topics:
  - "sparse-tensor-compilers"
  - "parallelism"
  - "array-languages"
seed_rank: 2300
seed_batch: "craft-2026-10-15"
reviewed: "2026-10-15"
pool: "languages"
relevance_score: 8
lineage: array-languages
cites:
  - title: "Parallel Sparse Outputs for Tensor Compilers"
    url: "https://arxiv.org/abs/2610.19308"
    year: 2026
    arxiv: "2610.19308"
    doi: null
  - title: "Finch: Sparse and Structured Tensor Programming with Control Flow"
    url: "https://doi.org/10.1145/3720473"
    year: 2025
    arxiv: null
    doi: "10.1145/3720473"
  - title: "Format Abstraction for Sparse Tensor Algebra Compilers"
    url: "https://doi.org/10.1145/3276493"
    year: 2018
    arxiv: null
    doi: "10.1145/3276493"
see:
  - "1132-mechanized-algebra-verified-data-structures-sparse-tensors"
  - "1033-towards-efficient-hash-maps-in-functional-array-languages"
---

# Parallel Sparse Outputs for Tensor Compilers

## One-sentence takeaway

Birdseed (Finch/WingSpan lineage) parallelizes sparse-output tensor kernels for every loop order and fibertree format by privatizing per-thread outputs and then "normalizing" them — sampled load balancing plus duplicate-reducing accumulation — so scatters like SpMSpV, histograms and outer-product SpGEMM finally scale on multicore CPUs.

## Why it matters here

Scatter-into-sparse is the bread and butter of simulation and game-state code (spatial histograms, influence maps, sparse event accumulation, per-cell counters). The paper's normal-form trick — make each thread's private result look like the output of an *append* kernel, then concatenate — is a reusable recipe for any parallel "many writers, sparse destination" pass, not just inside a tensor compiler.

## Key ideas

- **Append vs scatter.** Appending kernels (SpAdd) write in iteration order, so threads own disjoint output ranges; scattering kernels (SpMSpV) hit arbitrary output positions, so threads produce partial values that must be reduced. Prior systems (MLIR Sparse, TACO, NACHO, WingSpan) either don't parallelize sparse scatters or need a dense outer level / sorted state.
- **Tensor normal form.** A privatized tensor is normal iff entries are *unique* across processors and processor ranges are *monotone*. Appended outputs are already normal; so merging reduces to a fast parallel copy once scatters are normalized.
- **Randomized load balancing.** Sample n = max(200P, 4P² ln P) coordinates from each thread's nonzeros (weighted by its nonzero count), sort, cut into P equal-mass ranges. Works for unordered levels such as hash tables where binary search is impossible; cost independent of input size.
- **Accumulation.** Each thread reduces duplicates for its assigned range from all private shards into a private buffer, then results are coalesced directly into list, bytemap, hash or dense levels — no symbolic pre-pass to size outputs.
- **Parallel-scatter hash level** specialized for compiler use, enabling outer-product SpGEMM for the first time.
- **Results (16 cores, Xeon 6972P).** 2.9× geomean on SpMSpV and 4.1× on outer-product SpGEMM over hand-tuned baselines; 4.2× over vendor libraries on appending kernels like SpAdd; hash SpGEMM 26.8× faster than WingSpan.

## Caveats

CPU-only, single-socket 16-core evaluation; the generality claims rest on Finch's level formats (Julia ecosystem). Workload set is kernel-level, not full applications. Preprint (2026-10-13).

## Links

- arXiv abstract: https://arxiv.org/abs/2610.19308
- PDF: https://arxiv.org/pdf/2610.19308
