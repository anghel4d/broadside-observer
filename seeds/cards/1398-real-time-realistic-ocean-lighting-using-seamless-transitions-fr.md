---
title: "Real-time Realistic Ocean Lighting using Seamless Transitions from Geometry to BRDF"
authors:
  - "Eric Bruneton"
  - "Fabrice Neyret"
  - "Nicolas Holzschuch"
year: 2010
venue: "EGSR / Computer Graphics Forum"
arxiv: null
doi: "10.1111/j.1467-8659.2010.01735.x"
source: "https://hal.inria.fr/inria-00443630/"
topics:
  - "ocean-brdf"
  - "lod"
  - "foam"
  - "bruneton"
seed_rank: 1398
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: water
cites:
  - title: "Simulating Ocean Water"
    url: "https://people.computing.clemson.edu/~jtessen/reports/papers_files/coursenotes2002.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "Precomputed Atmospheric Scattering"
    url: "https://hal.inria.fr/inria-00288758/"
    year: 2008
    arxiv: null
    doi: "10.1111/j.1467-8659.2008.01245.x"
---

# Real-time Realistic Ocean Lighting using Seamless Transitions from Geometry to BRDF

## One-sentence takeaway

THE ocean shading paper: hierarchical geometry to BRDF, foam, sun glitter. Still unmatched for beautiful distant seas.

## Why it's lovely

Why you might love this: The sea that becomes a BRDF as it recedes, without a seam. Glitter, foam, and a horizon that holds.

## Problem

Tessendorf displacement is only valid near the camera. Far ocean is a BRDF (sun glitter, slope statistics). Naive LOD pops and double-counts foam. Need a consistent energy path from mesh to lobe.

## Design

- Hierarchical ocean geometry that fades into a slope-statistics BRDF.
- Foam from Jacobian / variance, consistent across LODs.
- Sun glitter as the specular of the BRDF, not a sprite.
- EGSR 2010 / CGF; HAL inria-00443630.

## Evidence

The paper every later game and film ocean lighting cites. Still the look to beat for distant seas.

## Limitations

Not a local-interaction method (that's Wave Particles / wavelets). Spectrum still Tessendorf-class. Real-time 2010 GPU assumptions.

## Implications for Broadside

Anoptic ocean: Tessendorf for sim, this for lighting, Uncharted for production LOD, Wave Particles for boats.

## Bottom line

Mint Bruneton ocean lighting. Geometry → BRDF, no seam.

## Links

- DOI: [10.1111/j.1467-8659.2010.01735.x](https://doi.org/10.1111/j.1467-8659.2010.01735.x)
- URL: https://hal.inria.fr/inria-00443630/
