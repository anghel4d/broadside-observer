---
title: "Point-Based Approximate Color Bleeding"
authors:
  - "Per H. Christensen"
year: 2008
venue: "Pixar Technical Memo #08-01"
arxiv: null
doi: null
source: "https://research.pixar.com/docs/2008.TechnicalReport.C.pdf"
topics:
  - "radiance-cascades-gi"
  - "vulkan-realtime-rendering"
seed_rank: 2538
seed_batch: "archive-2026-11-10"
reviewed: "2026-11-10"
pool: "graphics"
relevance_score: 9
lineage: realtime-gi
cites:
  - title: "Point-Based Approximate Color Bleeding"
    url: "https://research.pixar.com/docs/2008.TechnicalReport.C.pdf"
    year: 2008
    arxiv: null
    doi: null
see: ["1533-dynamic-ambient-occlusion-and-indirect-lighting", "1164-an-efficient-program-for-many-body-simulation", "1042-lightcuts-a-scalable-approach-to-illumination"]
---

# Point-Based Approximate Color Bleeding

## One-sentence takeaway

Christensen turns diffuse GI into a Barnes–Hut-style tree walk: directly lit surfels go into an octree whose nodes carry 9-term spherical-harmonic sums of power and area, and each receiver adds near surfels by ray tracing, mid-range surfels as disks, and far clusters by evaluating their SH, all rasterized onto a coarse cube so occlusion comes from depth order rather than visibility rays.

## Why it matters here

This is the closest production ancestor of the FMM-on-radiance-cascades idea: a geometry-adaptive octree, upward pass by summing child coefficients, and an accuracy knob (maximum solid angle) that decides when a cluster is far enough to use its expansion. What it lacks is the M2L step; every receiver walks the tree on its own (a treecode, not an FMM), and visibility is handled by a per-receiver cube z-buffer instead of interaction lists. That makes it a clean baseline to beat: if M2L+RC cannot match its cost and noise-free look, the extra machinery is not paying for itself.

## Key ideas

- **Surfel point cloud.** A precomputation pass bakes direct illumination into disk-shaped surfels (position, normal, radius, color); geometry, shaders and displacement are not needed again.
- **SH clusters.** Each octree node stores 27 coefficients (first 9 SH, per rgb) for power plus 9 for area; leaves sum their surfels, interior nodes sum their children.
- **Three accuracy bands.** Overlapping surfels are ray traced through the raster pixels; nearby ones become axis-aligned squares of equal projected area; distant clusters are evaluated from SH and rasterized as a disk.
- **Cube raster occlusion.** Contributions are sorted by distance and rasterized onto six coarse cube faces (12×12 in their tuning figures), then convolved with the BRDF and per-pixel solid angle; no square roots or trig as on a hemisphere.
- **Out-of-core.** Two caches, for surfel groups and octree nodes, hit at very high rates for coherent receivers, so point clouds larger than memory work.
- **Numbers.** A NURBS car scene renders in 5.5 minutes versus 31.5 minutes for ray tracing with irradiance interpolation (about 5.7×), 420 MB versus 632 MB; a "Surf's Up" AO test drops from 7.2 GB to 828 MB.

## Caveats

It is a two-pass offline method aimed at "visually acceptable and consistent", not accurate, results. Occlusion by rasterization is approximate, mid-field ellipses become squares, and single-bounce is the default (multi-bounce and glossy are variations). It builds directly on Bunnell 2005 (card 1533). Timings are 2008 CPU numbers on a four-core Mac G5.

## Links

- Tech memo PDF: https://research.pixar.com/docs/2008.TechnicalReport.C.pdf
- Author abstract page: https://www.seanet.com/~myandper/abstract/memo0801.htm
