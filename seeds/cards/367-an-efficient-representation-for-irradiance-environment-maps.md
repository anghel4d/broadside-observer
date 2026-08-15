---
title: "An Efficient Representation for Irradiance Environment Maps"
authors:
  - "Ravi Ramamoorthi"
  - "Pat Hanrahan"
year: 2001
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/383259.383317"
source: "https://doi.org/10.1145/383259.383317"
topics:
  - ibl
  - sh
seed_rank: 367
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "The Irradiance Volume"
    url: "https://doi.org/10.1109/38.656788"
    year: 1998
    arxiv: null
    doi: "10.1109/38.656788"
see:
  - "451-the-irradiance-volume"
---

# An Efficient Representation for Irradiance Environment Maps

## One-sentence takeaway

Diffuse irradiance from a distant environment is so low-frequency that nine SH coefficients (order 2) reconstruct it to ~1% error.

## Why it matters here

This is why Anoptic probe / LPV / RC irradiance buffers store SH, not a full cube map per probe: the Lambertian kernel is a low-pass filter, so the angular budget belongs on radiance, not irradiance.

## Key ideas

- Convolution of an environment map with a clamped-cosine becomes a per-band scale in SH; only bands ℓ ≤ 2 survive at useful amplitude.
- A 9-coefficient vector per color channel evaluates irradiance as a quadratic polynomial in the surface normal — a few madds in a pixel shader.
- Distant-lighting assumption: no near-field occlusion, no local emitters. Pair with PRT or a probe volume when that breaks.
- Became the default compact irradiance encoding inside LPV, light probes, and many baked GI systems.

## Caveats

## Links

- DOI: https://doi.org/10.1145/383259.383317
- Author PDF: https://cseweb.ucsd.edu/~ravir/papers/envmap/envmap.pdf
