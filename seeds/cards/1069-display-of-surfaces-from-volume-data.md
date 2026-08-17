---
title: "Display of Surfaces from Volume Data"
authors:
  - "Marc Levoy"
year: 1988
venue: "IEEE CG&A"
arxiv: null
doi: "10.1109/38.511"
source: "https://doi.org/10.1109/38.511"
topics:
  - "volume-rendering"
  - "ray-compositing"
  - "transfer-functions"
  - "premultiplied-alpha"
seed_rank: 1069
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "graphics"
relevance_score: 9
lineage: volume-rendering
cites:
  - title: "Compositing Digital Images"
    url: "https://doi.org/10.1145/800031.808606"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808606"
  - title: "Volume Rendering"
    url: "https://doi.org/10.1145/378456.378484"
    year: 1988
    arxiv: null
    doi: "10.1145/378456.378484"
  - title: "Fast Volume Rendering Using a Shear-Warp Factorization of the Viewing Transformation"
    url: "https://doi.org/10.1145/192161.192283"
    year: 1994
    arxiv: null
    doi: "10.1145/192161.192283"
  - title: "The A-buffer, an Antialiased Hidden Surface Method"
    url: "https://doi.org/10.1145/800031.808585"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808585"
see:
  - "1039-compositing-digital-images"
  - "1038-the-a-buffer-an-antialiased-hidden-surface-method"
  - "1012-deep-shadow-maps"
  - "1032-real-time-meshlet-extraction-from-scalar-volumes"
  - "451-the-irradiance-volume"
---

# Display of Surfaces from Volume Data

## One-sentence takeaway

Don't extract a mesh: shade every voxel with the local gradient as a normal, classify a *partial* opacity, and composite back-to-front along the ray.

## Why it matters here

The library's only volume-rendering card was a 2020s sensing paper (312) plus meshlet extraction from scalar volumes (1032). Levoy 1988 is the image-order founding technique — transfer function + gradient shading + Porter–Duff compositing (1039) along a ray — that Anoptic still wants for fog, god-rays, medical-debug volumes, and any "don't marching-cubes this" path. Deep shadow maps (1012) are the lighting-side cousin (visibility vs depth along a ray).

## Key ideas

- Shading and classification are independent: gradient-as-normal at every voxel; a separate operator writes opacity (isovalue vs region-boundary).
- Non-binary classification so thin or fuzzy features survive; binary thresholds are how you lose them.
- Back-to-front compositing along viewing rays; supersampling / selective blur for the remaining aliasing.
- Author later noted the paper's exposition omitted premultiplied alpha (Porter–Duff) when interpolating color and opacity — the implementation was already premultiplied.

## Caveats

- Drebin/Carpenter/Hanrahan SIGGRAPH 1988 is the same-year object-order / image-computer companion; we kept the image-order paper as the engine-shaped one.
- Marching cubes (rejected Archive 08-14: Dual Contouring 408 exists) is the *surface-extract* rival, not this.
- Shear-warp (Lacroute & Levoy 1994) is the speed follow-on, not reminted.

## Links

- DOI: [10.1109/38.511](https://doi.org/10.1109/38.511)
- Stanford page: https://graphics.stanford.edu/papers/volume-cga88/
