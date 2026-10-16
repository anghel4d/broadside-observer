---
title: "Compression of Uniformly Distributed Unit Quaternions"
authors:
  - "Carsten Faber"
  - "Bastian Kuth"
  - "Rinaldo Schuster"
  - "Daniel Pauls"
  - "Quirin Meyer"
year: 2026
venue: "arXiv"
arxiv: "2610.22052"
doi: null
source: "https://arxiv.org/abs/2610.22052"
topics:
  - "vulkan-realtime-rendering"
  - "custom-allocators-runtime"
seed_rank: 2319
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "graphics"
relevance_score: 8
lineage: real-time-rendering
cites:
  - title: "Compression of Uniformly Distributed Unit Quaternions"
    url: "https://arxiv.org/abs/2610.22052"
    year: 2026
    arxiv: "2610.22052"
    doi: null
see: []
---

# Compression of Uniformly Distributed Unit Quaternions

## One-sentence takeaway

For uniformly distributed unit quaternions, an infinity-norm (hypercube) parameterization with an optimized warp function, mixed-radix packing of chart index and parameters into one integer, and range quantization gives the smallest maximum error and best storage efficiency, at decode cost equal to or lower than the parameterizations shipped in practice.

## Why it matters here

Quaternions sit in every Anoptic skeleton joint, tangent frame and Gaussian splat; this is the first analytical (not just empirical) comparison of the common encodings, and a drop-in decoder with a few arithmetic instructions and no lookup tables.

## Key ideas

- **Analysis first.** Closed-form maximum quantization errors for the common unit-vector parameterizations (drop one component, drop largest, hypercube, hyper-octahedron, unit ball, exponential map).
- **Warp functions.** An optimized warp equalizes error across each hypercube chart.
- **Mixed-radix packing.** Chart index and all quantized parameters share a single integer code instead of separate bit fields, using almost all states.
- **Range quantization.** Encoding inverts the warp and checks the eight cell corners; still constant cost per rotation.
- **Applications.** Tangent-space normal mapping, skeletal animation with blend weights, and Gaussian splatting; the authors sketch the same scheme for 3D unit vectors as future work against octahedral encodings.

## Caveats

Spends precision uniformly over all rotations, so per-track adaptive range methods can be more compact for concentrated animation data; no closed-form error for one warp variant; identity rotations reconstruct exactly only with an odd number of states. Coburg University and AMD authors. CGF-format preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.22052
- PDF: https://arxiv.org/pdf/2610.22052
- HTML: https://arxiv.org/html/2610.22052v1
