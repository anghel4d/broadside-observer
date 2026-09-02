---
title: "Ray Tracing with Cones"
authors: ["John Amanatides"]
year: 1984
venue: "IEEE CG&A"
arxiv: null
doi: "10.1109/MCG.1984.6429331"
source: "https://doi.org/10.1109/MCG.1984.6429331"
topics: [cone-tracing, penumbra]
seed_rank: 1532
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 7
lineage: soft-shadows
cites:
  - title: "Beam tracing polygonal objects"
    url: "https://doi.org/10.1145/800031.808588"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808588"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
---

# Ray Tracing with Cones

## One-sentence takeaway

Amanatides 1984 founding cone tracing: umbra/penumbra and anti-aliasing as conical beams rather than point rays.

## Why it matters here

Heckbert beams (this batch) are polygonal; this IEEE CG&A paper is circular cones — the ancestor of cone-traced AO/reflections and of thinking of a pixel/light as a solid angle. Distinct from Hi-Z cone-traced reflections (1425).

## Key ideas

- **A ray has radius.** Intersection becomes a cone vs primitive test; coverage and distance-to-axis give anti-aliasing and soft vis.
- **Penumbra as cone vs occluder.** An area light is a cone from the receiver; blocked fraction is geometric.
- **Founding 1984.** Cited by every later cone-tracing GI/AO/reflection paper.
- **Evidence.** IEEE CG&A 4(10) 1984, doi `10.1109/MCG.1984.6429331`.

## Caveats

- Circular cones vs polygonal lights is an approximation (Heckbert is the polygonal twin). Not 1425 Hi-Z SSR cones.

## Links

- DOI: https://doi.org/10.1109/MCG.1984.6429331
