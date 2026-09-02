---
title: "Beam tracing polygonal objects"
authors: ["Paul S. Heckbert", "Pat Hanrahan"]
year: 1984
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800031.808588"
source: "https://doi.org/10.1145/800031.808588"
topics: [beam-tracing, penumbra]
seed_rank: 1531
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 7
lineage: soft-shadows
cites:
  - title: "Ray Tracing with Cones"
    url: "https://doi.org/10.1109/MCG.1984.6429331"
    year: 1984
    arxiv: null
    doi: "10.1109/MCG.1984.6429331"
  - title: "A Real-time Beam Tracer with Application to Exact Soft Shadows"
    url: "https://doi.org/10.2312/EGWR/EGSR07/085-098"
    year: 2007
    arxiv: null
    doi: "10.2312/EGWR/EGSR07/085-098"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
---

# Beam tracing polygonal objects

## One-sentence takeaway

Heckbert–Hanrahan 1984 founding beam tracing: polygonal beams for umbra/penumbra polyhedra instead of infinitely thin rays.

## Why it matters here

Amanatides cones (this batch) are the circular cousin the same year. Overbeck 2007 is the realtime revival (backup, unused). Soft-shadow volumes (this batch) are the hardware-era descendant. GRID COMMAND 'why is a shadow a polyhedron' starts here.

## Key ideas

- **Beams, not rays.** A polygonal cone of rays is clipped by scene polygons; reflection/refraction split the beam.
- **Umbra / penumbra as polyhedra.** Partial occlusion of an area light is a beam-intersection problem, not a sample count.
- **1984 founding.** With Amanatides, the pair that every later cone/beam/SSV paper cites.
- **Evidence.** SIGGRAPH 1984, doi `10.1145/800031.808588`.

## Caveats

- Combinatorial beam splitting. Not a remint of anything live. Overbeck 2007 is a later realtime paper, not this one.

## Links

- DOI: https://doi.org/10.1145/800031.808588
