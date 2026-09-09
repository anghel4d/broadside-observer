---
title: "A Beam Tracing Approach to Acoustic Modeling for Interactive Virtual Environments"
authors: ["Thomas Funkhouser", "Ingrid Carlbom", "Gary Elko", "Gopal Pingali", "Mohan Sondhi", "Jim West"]
year: 1998
venue: "ACM SIGGRAPH"
arxiv: null
doi: "10.1145/280814.280818"
source: "https://doi.org/10.1145/280814.280818"
topics: [beam-tracing, geometric-acoustics, interactive, geometric]
seed_rank: 1667
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
see:
  - "152-the-rendering-equation"
---

# A Beam Tracing Approach to Acoustic Modeling for Interactive Virtual Environments

## One-sentence takeaway

Precompute a beam tree from the listener through reflective polygons, then auralize any dynamic source that falls in a beam — interactive geometric acoustics without tracing every source each frame.

## Why it matters here

GRID COMMAND / Anoptic spatial audio needs early-reflection paths in indoor maps. Funkhouser's 1998 beam tree is the geometric ancestor of game auralization: one listener-centric data structure, many moving sources. Pair with later UTD/BTM for occluded sources; do not confuse with wave precompute (Triton / Project Acoustics).

## Key ideas

- **Listener-centric beams.** Shoot pyramidal beams into a polygonal cell complex; each beam records a sequence of mirror-image rooms (unfoldings).
- **Source insertion is cheap.** A moving source only needs point-in-beam tests plus delay/attenuation along the image path — no per-source ray tree.
- **Early specular, not late reverb.** Designed for first/early reflections in interactive VEs; late field is a separate tail.
- **SIGGRAPH 1998.** Bell Labs / Princeton; the paper that made architectural acoustics a graphics systems problem.

## Caveats

Specular geometric acoustics: misses diffraction, scattering, and wave effects (interference, occlusion around corners). Offline vs the later 2004 JASA interactive architectural system. Not a remint of Kajiya 152 (optics) or Helmholtz FMM 1163/1171.

## Links

- DOI: https://doi.org/10.1145/280814.280818
