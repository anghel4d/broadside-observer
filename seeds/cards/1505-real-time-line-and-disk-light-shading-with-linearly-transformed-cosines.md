---
title: "Real-Time Line- and Disk-Light Shading with Linearly Transformed Cosines"
authors: ["Eric Heitz", "Stephen Hill"]
year: 2017
venue: "SIGGRAPH Courses / GPU Zen"
arxiv: null
doi: null
source: "https://blog.selfshadow.com/publications/s2017-shading-course/heitz/s2017_pbs_ltc_lines_disks.pdf"
topics: [LTC, disk-lights, line-lights, sphere-lights]
seed_rank: 1505
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: area-lights
cites:
  - title: "Real-Time Polygonal-Light Shading with Linearly Transformed Cosines"
    url: "https://eheitzresearch.wordpress.com/415-2/"
    year: 2016
    arxiv: null
    doi: "10.1145/2897824.2925895"
  - title: "Applications of Irradiance Tensors to Direct Illumination and Radiosity"
    url: "https://www.graphics.cornell.edu/pubs/1995/Arv95c.pdf"
    year: 1995
    arxiv: null
    doi: "10.1145/218380.218498"
see:
  - "270-real-shading-in-unreal-engine-4"
  - "267-moving-frostbite-to-physically-based-rendering"
---

# Real-Time Line- and Disk-Light Shading with Linearly Transformed Cosines

## One-sentence takeaway

Closed-form LTC for tubes, disks, and spheres — the dual-shape companion every engine added after quad lights.

## Why it matters here

Polygonal LTC (this batch) covers rects; production lamps are tubes, spots-as-disks, and sphere primitives. Anoptic punctual-sphere approximation should be this integral, not a representative-direction hack from UE4 Real Shading (270).

## Key ideas

- **Disk / sphere as LTC integrals.** After the 3×3 warp, a disk or sphere has a closed-form cosine integral (horizon-clipped); spheres are disks in the warped frame under the right projection.
- **Line / tube lights.** A finite line is a degenerate quad; integrate the LTC 1D kernel along the segment. Caps become spheres/disks.
- **Same LUT as 2016.** Reuse the polygonal LTC matrices; only the domain integral changes.
- **Evidence.** SIGGRAPH 2017 Physically Based Shading course / GPU Zen. PDF: https://blog.selfshadow.com/publications/s2017-shading-course/heitz/s2017_pbs_ltc_lines_disks.pdf

## Caveats

- Still analytic shading, not shadows. Very long tubes and textured IES profiles want MC/RTXDI. Not a remint of the 2016 polygonal paper.

## Links

- PDF: https://blog.selfshadow.com/publications/s2017-shading-course/heitz/s2017_pbs_ltc_lines_disks.pdf
- Course: https://blog.selfshadow.com/publications/s2017-shading-course/
