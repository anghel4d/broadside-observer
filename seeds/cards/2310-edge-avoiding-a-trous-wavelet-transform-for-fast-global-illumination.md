---
title: "Edge-Avoiding À-Trous Wavelet Transform for fast Global Illumination Filtering"
authors:
  - "Holger Dammertz"
  - "Daniel Sewtz"
  - "Johannes Hanika"
  - "Hendrik P. A. Lensch"
year: 2010
venue: "High Performance Graphics (HPG 2010), 67–75"
arxiv: null
doi: "10.2312/EGGH/HPG10/067-075"
source: "https://jo.dreggn.org/home/2010_atrous.pdf"
topics:
  - denoising
  - path-tracing
  - global-illumination
  - image-filtering
seed_rank: 2310
seed_batch: "archive-2026-10-16"
reviewed: "2026-10-16"
pool: "graphics"
relevance_score: 9
lineage: real-time-denoising
see:
  - 1389-spatiotemporal-variance-guided-filtering-real-time-reconstructio
cites:
  - title: "Edge-Avoiding À-Trous Wavelet Transform for fast Global Illumination Filtering"
    url: "https://doi.org/10.2312/EGGH/HPG10/067-075"
    year: 2010
    arxiv: null
    doi: "10.2312/EGGH/HPG10/067-075"
  - title: "Spatiotemporal Variance-Guided Filtering: Real-Time Reconstruction for Path-Traced Global Illumination"
    url: "https://doi.org/10.1145/3105762.3105770"
    year: 2017
    arxiv: null
    doi: "10.1145/3105762.3105770"
---

# Edge-Avoiding À-Trous Wavelet Transform for fast Global Illumination Filtering

## One-sentence takeaway

Dammertz et al. denoise one-sample-per-pixel path-traced images in real time by running a few passes of the undecimated "à-trous" (with holes) wavelet filter — a fixed 5×5 B3-spline kernel whose taps spread by 2^i each pass — weighted by edge-stopping functions on colour, normals and world position from a rasterized G-buffer.

## Why it matters here

This is the spatial filter inside SVGF (1389) and most real-time ray-tracing denoisers since; the library has the descendant but not the base technique. For Anoptic's GI experiments it is the cheapest credible denoiser to implement first: one small shader run five times gives an 80×80 effective footprint at constant cost per pass, and it only needs buffers a deferred renderer already has.

## Key ideas

- **À-trous instead of decimated wavelets.** Each iteration applies the same 5×5 kernel (1/16, 1/4, 3/8, 1/4, 1/16 in each direction) with 2^i − 1 zeros between taps, so the support doubles while the number of taps stays constant; decimated wavelet bases (e.g. CDF(2,2)) showed visible artifacts on Monte Carlo noise in their comparison.
- **Multiplied edge-stopping weights.** Each tap is weighted by w = w_rt · w_n · w_x, Gaussian-like functions of the difference in path-traced colour, normal and position, and the result is renormalized; geometry edges come from the full-resolution G-buffer, so sharp shadows and silhouettes survive.
- **Shrink the colour sigma per level.** The colour tolerance is halved each iteration (σ_rt at level i is 2^−i σ_rt), smoothing large variations early and only small ones later.
- **Discard detail, don't shrink it.** Unlike classical wavelet denoising, the detail coefficients are thrown away: a single bright pixel in a dark area is treated as evidence of a smooth patch's mean irradiance, not as a feature to keep.
- **Cost.** On an NVIDIA GTX 285 with all three weights, five iterations took 5.6 ms at 512×512, 20.9 ms at 1024×1024 and 42.6 ms at 1920×1080; subsampling primary rays (every n-th pixel) turns the first passes into in-painting with near-linear ray savings.

## Caveats

Purely spatial: no temporal accumulation, so flicker remains in animation (SVGF later adds temporal reprojection and variance-driven sigmas). One sample per pixel of G-buffer data cannot represent highly complex geometry, glossy reflections, or detail below a pixel, which get blurred. Sigma parameters are hand-set, and the timings are for 2010 hardware.

## Links

- Paper (author preprint PDF): https://jo.dreggn.org/home/2010_atrous.pdf
- Paper (DOI): https://doi.org/10.2312/EGGH/HPG10/067-075
