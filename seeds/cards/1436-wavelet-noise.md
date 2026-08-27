---
title: "Wavelet Noise"
authors: ["Robert L. Cook", "Tony DeRose"]
year: 2005
venue: "ACM Transactions on Graphics (SIGGRAPH 2005)"
arxiv: null
doi: "10.1145/1073204.1073264"
source: "https://doi.org/10.1145/1073204.1073264"
topics: [vulkan-realtime-rendering]
seed_rank: 1436
seed_batch: "archive-2026-08-28"
reviewed: "2026-08-28"
pool: "graphics"
relevance_score: 9
lineage: procedural-noise
cites:
  - title: "An Image Synthesizer"
    url: "https://doi.org/10.1145/325165.325247"
    year: 1985
    arxiv: null
    doi: "10.1145/325165.325247"
  - title: "Improving Noise"
    url: "https://doi.org/10.1145/566654.566636"
    year: 2002
    arxiv: null
    doi: "10.1145/566654.566636"
  - title: "A Cellular Texture Basis Function"
    url: "https://doi.org/10.1145/311535.311542"
    year: 1999
    arxiv: null
    doi: "10.1145/311535.311542"
see:
  - "1007-an-image-synthesizer"
  - "365-improving-noise-perlin"
  - "1135-a-cellular-texture-basis-function"
---

# Wavelet Noise

## One-sentence takeaway

Band-limit procedural noise by construction: synthesize coefficients in a wavelet basis so each octave occupies a controlled frequency band and sum without the aliasing Perlin noise accumulates under minification.

## Why it matters here

Anoptic terrain, clouds, and material breakup scale across camera distances; Perlin/Improving Noise (1007/365) leak energy across bands and shimmer when undersampled. Cook–DeRose make the LOD contract explicit: noise is a wavelet series you can filter like a mip chain. Pair with meshlet/terrain LODs (1435/1100/362) so geometry and texture noise share one band-limit philosophy.

## Key ideas

- **Noise as wavelets.** Generate band-limited residuals per scale instead of summing poorly filtered gradients.
- **Alias control under minification.** When a pixel footprints many noise periods, drop fine bands rather than undersample them.
- **Complement to Perlin.** Keeps the artistic “noise look” while fixing the spectral mess that shows up in distant terrain and film-quality shading.
- **Evidence.** TOG / SIGGRAPH 2005. Adopted where band-limited procedural detail matters (film, high-end terrain/atmosphere stacks).

## Caveats

Costlier to evaluate than classic Perlin; tileability and 3D/4D extensions need care; artists sometimes prefer Perlin’s familiar look. Not a remint of Perlin 1985/2002 or Worley cells (1135). Hypertexture (Perlin–Hoffert 1989) is volumetric density — complementary, not duplicate.

## Links

- DOI: https://doi.org/10.1145/1073204.1073264
- ACM DL: https://dl.acm.org/doi/10.1145/1073204.1073264
