---
title: "AbacusGS: Gaussian Splatting without Per-Splat Sorting"
authors:
  - "Jiacheng Ding"
  - "Yanliang Qi"
  - "Cong Guo"
  - "Peihua Mai"
year: 2026
venue: "arXiv preprint (cs.CV)"
arxiv: "2611.01534"
doi: null
source: "https://arxiv.org/abs/2611.01534"
topics:
  - "gaussian-splatting"
  - "transparency-sorting"
  - "gpu-driven-rendering"
  - "scene-layout"
seed_rank: 2501
seed_batch: "craft-2026-11-03"
reviewed: "2026-11-03"
pool: "graphics"
relevance_score: 8
cites:
  - title: "AbacusGS: Gaussian Splatting without Per-Splat Sorting"
    url: "https://arxiv.org/abs/2611.01534"
    year: 2026
    arxiv: "2611.01534"
    doi: null
see: ["2273-steadysplats-resampling-of-low-variance-gaussians-for-high-fidelity-st"]
---

# AbacusGS: Gaussian Splatting without Per-Splat Sorting

## One-sentence takeaway

Group splats into octree boxes of at most 128, sort each box once at write time along an axis taken from the training cameras, and at render time sort only the visible boxes and pick each box's read direction with one dot product, so a hardware-rasterizer viewer draws a scene with one multi-draw-indirect command per box, keeps the standard over operator, and runs 4.5 times faster than per-splat CPU sorting at a cost of 0.13 dB PSNR after a short fine-tune.

## Why it matters here

It is a data-layout answer to a per-frame sorting problem: the order lives in storage and the frame only chooses forward or backward per small cluster. The same trick applies to any back-to-front transparent content in Anoptic (particles, foliage cards, decals) drawn through meshlet-style indirect batches, and it pairs naturally with the GPU-driven culling we already want.

## Key ideas

- **Two-level order.** Boxes are sorted per frame by depth; splats inside a box are stored pre-sorted along one axis and read forward or reversed.
- **Axis from training cameras.** The storage axis is chosen at write time so that the in-box order is mostly right for views the scene was captured from.
- **Fine-tune to the order.** A short order-aware fine-tune absorbs the remaining ordering errors (1.27 dB loss drops to 0.13 dB on 13 scenes).
- **No index buffer per frame.** Each visible box is one multi-draw-indirect command; a 17-byte-per-splat format and a CUDA tile renderer use the same order.
- **Negative result.** An exact octree BSP order for cells loses more quality than centroid-depth order when Gaussians overlap.

## Caveats

The gain is largest when the CPU sorts; with a GPU radix sort or at high resolution it shrinks. Order errors are baked into the model through fine-tuning, so the trick needs a retrain step, and views far from the training cameras are not measured separately. Code is promised, not released. I read the abstract and introduction.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.01534
- PDF: https://arxiv.org/pdf/2611.01534
