---
title: "Progressive Photon Mapping"
authors:
  - "Toshiya Hachisuka"
  - "Shinji Ogaki"
  - "Henrik Wann Jensen"
year: 2008
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1360612.1360637"
source: "https://www.ci.i.u-tokyo.ac.jp/~hachisuka/ppm.pdf"
topics:
  - "photon-mapping"
seed_rank: 1383
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: realtime-gi
cites:
  - title: "Global Illumination using Photon Maps"
    url: "https://graphics.stanford.edu/papers/photon-maps/"
    year: 1996
    arxiv: null
    doi: null
  - title: "The Beam Radiance Estimate for Volumetric Photon Mapping"
    url: "https://doi.org/10.1145/1360612.1360635"
    year: 2008
    arxiv: null
    doi: "10.1145/1360612.1360635"
see:
  - "374-global-illumination-using-photon-maps"
  - "1331-progressive-photon-beams"
  - "1318-the-beam-radiance-estimate-for-volumetric-photon-mapping"
---

# Progressive Photon Mapping

## One-sentence takeaway

Photon mapping that converges: shrink the radius as more photons arrive, so bias goes to zero without a magic bandwidth.

## Why it's lovely

Why you might love this: The paper that made photon mapping honest. Radius goes down, noise goes down, caustics stay.

## Problem

Classical photon mapping (Jensen 1996, already in as 374) is biased by a fixed kernel radius. Too large: blur. Too small: noise that never leaves. Production caustics needed a consistent estimator.

## Design

- Hit-point (view) pass stores local statistics.
- Photon passes accumulate into those hit points.
- After each pass, shrink radius as a function of photon count (progressive kernel).
- Limit is consistent; SPPM (2009) later added distributed effects.

## Evidence

SIGGRAPH 2008 / TOG. Ancestor of every progressive/SPPM production caustic integrator. Not a remint of 374 or of progressive photon beams (1331).

## Limitations

Still biased at finite samples. Memory for hit points. Not realtime. Beams (1331) are the volumetric sibling — keep both.

## Implications for Broadside

Anoptic caustics (water, glass, SDS) should know PPM exists before inventing a screenspace cheat. Pair with VCM (1381) for the MIS view.

## Bottom line

Mint PPM. Photon mapping that converges.

## Links

- DOI: [10.1145/1360612.1360637](https://doi.org/10.1145/1360612.1360637)
- URL: https://www.ci.i.u-tokyo.ac.jp/~hachisuka/ppm.pdf
