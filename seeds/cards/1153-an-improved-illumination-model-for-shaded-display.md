---
title: "An Improved Illumination Model for Shaded Display"
authors:
  - "Turner Whitted"
year: 1980
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/358876.358882"
source: "https://doi.org/10.1145/358876.358882"
topics:
  - graphics
  - ray-tracing
  - whitted
seed_rank: 1153
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
    card: "169-the-rendering-equation"
  - title: "Distributed Ray Tracing"
    url: "https://doi.org/10.1145/800031.808590"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808590"
    card: "1155-distributed-ray-tracing"
  - title: "Some Techniques for Shading Machine Renderings of Solids"
    url: "https://doi.org/10.1145/1468075.1468082"
    year: 1968
    arxiv: null
    doi: "10.1145/1468075.1468082"
    card: "1164-some-techniques-for-shading-machine-renderings-of-solids"
  - title: "Metropolis Light Transport"
    url: "https://doi.org/10.1145/258734.258775"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258775"
    card: "453-metropolis-light-transport"
---

# An Improved Illumination Model for Shaded Display

## One-sentence takeaway

Whitted ray tracing: recursive rays for reflection, refraction, and shadows—the recursive ray-tracing landmark.

## Why it matters here

GI/ray lineage root already cited by Kajiya (169); mint the missing Whitted card.

## Key ideas

- Primary + shadow + reflection + refraction rays.
- Tree of rays per pixel.
- Specular mirroring and transparency done right.
- Performance pain that later motivates importance sampling / realtime approximations.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/358876.358882](https://doi.org/10.1145/358876.358882)
- URL: https://doi.org/10.1145/358876.358882
