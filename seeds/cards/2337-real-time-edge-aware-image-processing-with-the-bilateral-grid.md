---
title: "Real-time Edge-Aware Image Processing with the Bilateral Grid"
authors:
  - "Jiawen Chen"
  - "Sylvain Paris"
  - "Frédo Durand"
year: 2007
venue: "ACM Transactions on Graphics 26(3), Article 103 (SIGGRAPH 2007)"
arxiv: null
doi: "10.1145/1276377.1276506"
source: "https://people.csail.mit.edu/sparis/publi/2007/siggraph/Chen_07_Bilateral_Grid.pdf"
topics:
  - image-filtering
  - edge-aware-processing
  - tone-mapping
  - gpu-data-structures
seed_rank: 2337
seed_batch: "archive-2026-10-18"
reviewed: "2026-10-18"
pool: "graphics"
relevance_score: 8
lineage: edge-aware-filtering
see:
  - 2310-edge-avoiding-a-trous-wavelet-transform-for-fast-global-illumination
  - 1389-spatiotemporal-variance-guided-filtering-real-time-reconstructio
  - 1565-driving-toward-reality-physically-based-tone-mapping-and-perceptual-fide
cites:
  - title: "Real-time Edge-Aware Image Processing with the Bilateral Grid"
    url: "https://doi.org/10.1145/1276377.1276506"
    year: 2007
    arxiv: null
    doi: "10.1145/1276377.1276506"
---

# Real-time Edge-Aware Image Processing with the Bilateral Grid

## One-sentence takeaway

Chen, Paris and Durand lift a 2D image into a coarse 3D grid indexed by (x/s_s, y/s_s, I/s_r) that stores homogeneous (wV, w) values, so that a bilateral filter, an edge-aware brush, edge-aware interpolation and local histogram equalization all become "splat into the grid, do a plain linear operation (blur, accumulate), slice back with trilinear lookup" — fast enough on a 2006 GPU for real-time HD video.

## Why it matters here

Anoptic's post-processing (local tone mapping, bloom thresholds, denoise guidance, upsampling half-resolution effects to full resolution along edges) keeps needing edge-aware operators, and the bilateral grid turns them into texture-friendly linear passes whose cost depends on grid size, not image size. It sits next to the à-trous filter (2310) and SVGF (1389) as the third classic way to respect edges cheaply, and its "store (wV, w), normalize at the end" trick is the same premultiplied idea the engine already uses for alpha.

## Key ideas

- **Three steps.** Create (each pixel adds (I, 1) to cell (x/s_s, y/s_s, I/s_r)), process (e.g. a 3D Gaussian blur — with homogeneous values this implements the bilateral filter), slice (sample the grid at (x/s_s, y/s_s, E(x,y)/s_r) with trilinear interpolation and divide by w); slicing by a different reference image E gives cross/joint bilateral operations.
- **Two knobs.** s_s controls spatial smoothing and s_r edge preservation; the experiments use roughly 2,048 to 3 million cells, and memory is about 16 × pixels / (s_s² × s_r) bytes (about 1 MB per megapixel at s_s = 16, s_r = 0.07).
- **GPU layout.** z levels are tiled into a 2D texture so hardware bilinear filtering cuts the slice from 8 fetches to 2; grid creation scatters points via a vertex array.
- **Speed.** The bilateral filter scales linearly from 4.5 ms at 1 MP to 44.7 ms at 10 MP on a GeForce 8800 GTX, against 0.2–1.9 s for their CPU version and about 50× faster than Weiss's CPU filter; video abstraction runs at 42 Hz on 1080p.
- **Beyond filtering.** The edge-aware brush paints in grid space and slices with the image; scattered-data interpolation propagates sparse user strokes along edges; per-column cumulative sums in the grid give local histogram equalization (100 ms versus 1.5 s for MATLAB adapthisteq on a 3.7 MP HDR image).

## Caveats

Small spatial kernels need fine grids, which costs memory and time (about 56 MB per megapixel at s_s = 2), so other methods win there. The range axis is one-dimensional (luminance); colour edges need a 5D grid, which the authors leave to future work and which motivated later lattice-based filters. Results are approximate at grid resolution, and the GPU numbers are 2007-era.

## Links

- Paper (author PDF): https://people.csail.mit.edu/sparis/publi/2007/siggraph/Chen_07_Bilateral_Grid.pdf
- Paper (DOI): https://doi.org/10.1145/1276377.1276506
