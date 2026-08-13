---
title: "Display of Surfaces from Volume Data"
authors:
  - "Marc Levoy"
year: 1988
venue: "IEEE Computer Graphics and Applications"
arxiv: null
doi: "10.1109/38.511"
source: "https://doi.org/10.1109/38.511"
topics:
  - graphics
  - volume-rendering
  - levoy
seed_rank: 1160
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Marching Cubes: A High Resolution 3D Surface Construction Algorithm"
    url: "https://doi.org/10.1145/37402.37422"
    year: 1987
    arxiv: null
    doi: "10.1145/37402.37422"
    card: "1161-marching-cubes-a-high-resolution-3d-surface-construction-alg"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
    card: "169-the-rendering-equation"
  - title: "GigaVoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
    url: "https://doi.org/10.1145/1507149.1507152"
    year: 2009
    arxiv: null
    doi: "10.1145/1507149.1507152"
    card: "432-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
---

# Display of Surfaces from Volume Data

## One-sentence takeaway

Levoy's volume ray casting with opacity/color accumulation made direct volume visualization practical.

## Why it matters here

Medical/sim volume paths and Gigavoxels-era ancestors (432).

## Key ideas

- Ray casting through scalar volumes.
- Compositing samples front-to-back / back-to-front.
- Classification (transfer functions) as central.
- Surface extraction alternative to marching cubes.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1109/38.511](https://doi.org/10.1109/38.511)
- URL: https://doi.org/10.1109/38.511
