---
title: "The Irradiance Volume"
authors:
  - "Gene Greger"
  - "Peter Shirley"
  - "Philip M. Hubbard"
  - "Donald P. Greenberg"
year: 1998
venue: "IEEE Computer Graphics and Applications"
arxiv: null
doi: "10.1109/38.656788"
source: "https://doi.org/10.1109/38.656788"
topics:
  - gi
  - irradiance-volume
  - probes
seed_rank: 451
seed_batch: "lineage-radiance-cascades-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "A Ray Tracing Solution for Diffuse Interreflection"
    url: "https://doi.org/10.1145/54852.378490"
    year: 1988
    doi: "10.1145/54852.378490"
  - title: "Lighting Patterns and the Flow of Light"
    url: "https://doi.org/10.1177/096032717100300301"
    year: 1971
    doi: "10.1177/096032717100300301"
  - title: "Combining Hierarchical Radiosity and Discontinuity Meshing"
    url: "https://doi.org/10.1145/166117.166139"
    year: 1993
    doi: "10.1145/166117.166139"
---

# The Irradiance Volume

## One-sentence takeaway

Greger extends irradiance from surfaces into a five-dimensional field \(H(x,\omega)\) sampled on a spatial grid so any oriented differential patch can look up a believable local approximation instead of integrating field radiance.

## Why it matters here

Anoptic probe grids and Radiance Cascades inherit this move: store directional lighting in space, not only on meshes, so dynamic objects and agents can query GI without a full radiosity solve.

## Key ideas

- Irradiance at a point is the cosine-weighted integral of incoming radiance; rotating a hypothetical patch yields a continuous directional irradiance distribution even when field radiance is discontinuous.
- Precompute that distribution at volume sample points (regular or bilevel grids) and reconstruct \(H_v(x,\omega)\) by interpolating neighboring cells.
- Aimed at semi-dynamic rooms and displacement-heavy geometry where visual plausibility beats radiometric exactness; intended as a spatially varying replacement for the constant ambient term.
- Explicitly analogizes Cuttle's photometric illumination solid and Ward's surface irradiance cache, then relocates the cache into the volume.

## Caveats

## Links

- DOI: [10.1109/38.656788](https://doi.org/10.1109/38.656788)
- Author PDF: https://www.gene.greger-weltin.org/professional/publications/irradiance_volume_ieee.pdf
