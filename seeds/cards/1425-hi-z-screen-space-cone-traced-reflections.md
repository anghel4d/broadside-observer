---
title: "Hi-Z Screen-Space Cone-Traced Reflections"
authors:
  - "Yasin Uludag"
year: 2014
venue: "GPU Pro 5"
arxiv: null
doi: "10.1201/b16721-13"
source: "https://doi.org/10.1201/b16721-13"
topics:
  - "SSR"
  - "Hi-Z"
  - "cone-tracing"
  - "glossy-reflections"
seed_rank: 1425
seed_batch: "mirrors-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: reflections
cites:
  - title: "Stochastic Screen-Space Reflections"
    url: "https://www.ea.com/seed/news/siggraph-2015-stochastic-screen-space-reflections"
    year: 2015
    arxiv: null
    doi: null
  - title: "Efficient GPU Screen-Space Ray Tracing"
    url: "https://jcgt.org/published/0003/04/04/"
    year: 2014
    arxiv: null
    doi: null
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://research.nvidia.com/labs/rtr/publication/crassin2011givoxels/"
    year: 2011
    arxiv: null
    doi: "10.1111/j.1467-8659.2011.02063.x"
see:
  - "1386-stochastic-screen-space-reflections"
  - "267-moving-frostbite-to-physically-based-rendering"
---

# Hi-Z Screen-Space Cone-Traced Reflections

## One-sentence takeaway

Hierarchical Z traversal plus a screen-space cone is how glossy mirrors look right without shooting a BRDF's worth of rays.

## Why it's lovely

Why you might love this: Mirror's Edge research that became the Hi-Z chapter every engine SSR cites. One ray for the hit, a cone for the roughness — contact mirrors that blur with distance.

## Problem

Planar mirrors are a special case. Arbitrary glossy surfaces need local reflections of nearby geometry, matching the lighting model's roughness cone. Linear depth marching is slow and aliasy; a single ray cannot represent a GGX lobe. Stochastic SSR (1386) comes a year later and is already in the library.

## Design

- Build a Hi-Z (min-Z) mip chain from the depth buffer.
- Traverse by crossing Hi-Z cells: skip empty space at coarse mips, refine on likely hits.
- Project the BRDF cone to a screen-space isosceles triangle whose width grows with travel distance and roughness; prefilter color with a visibility-aware mip.
- Works on arbitrary-shaped dynamic surfaces, not just planes.

## Evidence

GPU Pro 5 (2014). Researched in early Mirror's Edge. Hi-Z traversal is the default SSR primitive under Stachowiak 2015, UE, Unity, Frostbite clones. Distinct from 1386: cone-traced prefilter vs stochastic 1-spp + temporal.

## Limitations

Screen-space: you cannot see yourself in a mirror; misses and off-screen fall back to cubemaps. Toward-camera rays want min *and* max Z. Non-power-of-two resolutions hurt the hierarchy. Not a substitute for planar stencil mirrors.

## Implications for Broadside

Anoptic's wet floors and chrome should Hi-Z cone-trace, then fall back to parallax cubemaps — not clone 1386's temporal resolve as the whole story. This is the image-space appearance paper; 1386 is the stochastic sampling paper.

## Bottom line

Mint Uludag. THE Hi-Z / cone-traced reflection chapter, not another SSR clone.

## Links

- DOI: [10.1201/b16721-13](https://doi.org/10.1201/b16721-13)
- URL: https://doi.org/10.1201/b16721-13
