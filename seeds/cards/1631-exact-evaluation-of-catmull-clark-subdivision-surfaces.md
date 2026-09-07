---
title: "Exact Evaluation Of Catmull-Clark Subdivision Surfaces At Arbitrary Parameter Values"
authors:
  - "Jos Stam"
year: 1998
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/280814.280826"
source: "https://www.dgp.toronto.edu/public_user/stam/reality/Research/pdf/sig98.pdf"
topics:
  - subdivision-surfaces
  - catmull-clark
  - mesh-lod
seed_rank: 1631
seed_batch: "archive-2026-09-08"
reviewed: "2026-09-08"
pool: "graphics"
relevance_score: 9
lineage: subdivision-surfaces
cites:
  - title: "Recursively generated B-spline surfaces on arbitrary topological meshes"
    url: "https://doi.org/10.1016/0010-4485(78)90110-0"
    year: 1978
    arxiv: null
    doi: "10.1016/0010-4485(78)90110-0"
see:
  - "1604-feature-sensitive-surface-extraction-from-volume-data"
  - "1601-geometry-images"
  - "1498-marching-cubes-a-high-resolution-3d-surface-construction-algo"
---

# Exact Evaluation Of Catmull-Clark Subdivision Surfaces At Arbitrary Parameter Values

## One-sentence takeaway

Stam shows how to evaluate a Catmull–Clark surface exactly at any parameter value — including around extraordinary vertices — by diagonalizing the subdivision matrix, so you get point/tangent samples without running infinite subdivision.

## Why it matters here

Anoptic mesh LOD and character/prop pipelines that touch Catmull–Clark need exact evaluation at arbitrary params for shading, collision proxies, and adaptive tessellation. The 1978 Catmull–Clark definition is still paywalled; this 1998 SIGGRAPH paper is the practical evaluation boundary to steal, with the original cited not reminted.

## Key ideas

- **Subdivision matrix eigenstructure.** After enough steps the neighborhood of an extraordinary vertex is governed by a fixed matrix; Stam diagonalizes it to get a closed-form evaluation.
- **Arbitrary parameters.** You can pick (u,v) on a patch and get the limit point (and derivatives) without a deep recursive refine.
- **Extraordinary vertices handled.** The hard case (valence ≠ 4) is the contribution; regular B-spline patches are the easy interior.
- **Graphics-systems impact.** Enabled robust tessellation and displacement workflows on Catmull–Clark assets in film/games tooling that followed.

## Caveats

- Exact eval assumes the classic Catmull–Clark rules; feature-adaptive / OpenSubdiv extensions add more machinery. Do not remint Marching Cubes 1498, Geometry Images 1601, or EMC 1604; do not mint the 1978 CAD original this pass (paywalled).
- Implementation detail (eigenbasis tables, numerical stability at high valence) matters more than the abstract theorem for engine work.

## Links

- Author PDF: https://www.dgp.toronto.edu/public_user/stam/reality/Research/pdf/sig98.pdf
- DOI: https://doi.org/10.1145/280814.280826
