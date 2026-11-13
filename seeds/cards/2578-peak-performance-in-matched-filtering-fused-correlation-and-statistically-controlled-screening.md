---
title: "Peak Performance in Matched Filtering: Fused Correlation and Statistically Controlled Screening on CPUs and GPUs"
authors:
  - "Alexander H. Nitz"
  - "Keisi Kacanja"
  - "Collin D. Capano"
year: 2026
venue: "arXiv preprint (astro-ph.IM)"
arxiv: "2611.17229"
doi: null
source: "https://arxiv.org/abs/2611.17229"
topics:
  - "kernel-fusion"
  - "fft"
  - "vulkan-compute"
  - "cache-blocking"
  - "early-rejection"
seed_rank: 2578
seed_batch: "craft-2026-11-13"
reviewed: "2026-11-13"
pool: "systems"
relevance_score: 7
lineage: gpu-driven-rendering
cites: []
see:
  - "1986-exact-fourier-transforms-below-n-log-n"
  - "2576-reconstructing-fine-grained-memory-reuse-structure-in-gpu-kernels"
---

# Peak Performance in Matched Filtering: Fused Correlation and Statistically Controlled Screening on CPUs and GPUs

## One-sentence takeaway

Fold the conjugate multiply into the first inverse-FFT butterflies and the peak search into the last, so only candidate peaks ever leave registers, tile batches so \(K^2\) correlations reuse \(2K\) cached spectra, and screen candidates with short low-frequency transforms before paying for the full band; the open-source `matchedfilter` library gets 6.2x over rocFFT on an integrated Radeon via Vulkan and up to 26x with screening.

## Why it matters here

This is a compact, measured recipe for turning a DRAM-bound transform pipeline into a cache-bound one by refusing to write intermediates, and it runs on Vulkan and Metal on integrated GPUs, which is close to Anoptic's target hardware. The same moves (fuse the producer into the first stage and the reduction into the last; reject cheaply with a coarse pass whose threshold is derived from a stated miss probability) apply to audio convolution, cascade merges and any "find the few peaks in a big batch" pass. The screening part is a nice example of a cheap filter with a controlled false-dismissal rate instead of a tuned magic number.

## Key ideas

- **Fused correlation.** Conjugate product inside the first inverse-transform butterflies, peak reduction inside the last, so full correlation series are never written.
- **2D batch tiling.** \(K^2\) correlations reuse \(2K\) spectra held in cache, moving the bottleneck from DRAM to on-chip bandwidth.
- **Hierarchical screening.** A sequence of short low-frequency transforms first; stage thresholds derived from the spectral power profile and the noise autocovariance to hit a target false-dismissal probability.
- **Evidence.** Eight CPU architectures plus AMD Radeon 8060S (Vulkan) and Apple M2 (Metal). At \(N=4096\) on a Ryzen AI Max+ 395, fused peak-only filtering is 1.4x faster than an AOCL-FFTW inverse transform alone on one core and 6.2x faster than rocFFT on the GPU; screening gives 26x, 21x and 19x over AOCL-FFTW, rocFFT and MLX FFT for a fiducial gravitational-wave search.

## Caveats

Read from the abstract only. The screening gains depend on signal power being concentrated at low frequencies, which holds for their gravitational-wave case but not for every signal. Speedups compare against general library FFTs that are not allowed to fuse, so part of the win is structural, not a better FFT.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17229
- PDF: https://arxiv.org/pdf/2611.17229
