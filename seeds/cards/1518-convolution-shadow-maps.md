---
title: "Convolution Shadow Maps"
authors: ["Thomas Annen", "Tom Mertens", "Philippe Bekaert", "Hans-Peter Seidel", "Jan Kautz"]
year: 2007
venue: "EGSR"
arxiv: null
doi: "10.2312/EGWR/EGSR07/051-060"
source: "https://www.mpi-inf.mpg.de/departments/computer-graphics/publications/convolution-shadow-maps"
topics: [CSM-convolution, filterable-SM, Fourier]
seed_rank: 1518
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 10
lineage: filterable-shadow-maps
cites:
  - title: "Fast Calculation of Soft Shadow Textures Using Convolution"
    url: "https://doi.org/10.1145/280814.280927"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280927"
  - title: "Variance Shadow Maps"
    url: "https://www.punkuser.net/vsm/vsm_paper.pdf"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111440"
  - title: "Exponential Shadow Maps"
    url: "https://lsi.ugr.es/jdar/informatica/doctorado/gi2008.pdf"
    year: 2008
    arxiv: null
    doi: "10.20380/GI2008.07"
  - title: "Rendering Antialiased Shadows with Depth Maps"
    url: "https://graphics.pixar.com/library/ShadowMaps/paper.pdf"
    year: 1987
    arxiv: null
    doi: null
see:
  - "359-variance-shadow-maps"
  - "1066-rendering-antialiased-shadows-with-depth-maps"
---

# Convolution Shadow Maps

## One-sentence takeaway

Encode the step-function visibility in a Fourier basis so shadow tests become convolutions — the theory paper behind ESM/EVSM/MSM and convolution-as-penumbra.

## Why it matters here

Seen-no-card. Soler–Sillion 1998 (this batch) convolves *images*; this paper convolves *depth-encoded vis* so mips/SATs work on a shadow map. VSM 359 is the two-moment special case; ESM/MSM (this batch) are cheaper encodings. Do not confuse with Cascaded Shadow Maps (356).

## Key ideas

- **Basis expansion of the step.** vis(z) ≈ Σ a_k(z) · B_k(d); store basis coefficients per SM texel, filter them, reconstruct at the receiver.
- **Fourier / cosine bases.** The original CSM uses Fourier terms; later ESM/MSM pick cheaper reconstructions of the same idea.
- **Penumbra as filter width.** Larger reconstruction kernels = softer shadows, in the Soler–Sillion spirit, but from a single SM.
- **Evidence.** EGSR 2007, doi `10.2312/EGWR/EGSR07/051-060`. MPI: https://www.mpi-inf.mpg.de/departments/computer-graphics/publications/convolution-shadow-maps

## Caveats

- Basis truncation rings; storage of many coefficients lost to ESM/MSM in production. NOT Cascaded Shadow Maps 356. Title was in seen.json without a card.

## Links

- Project: https://www.mpi-inf.mpg.de/departments/computer-graphics/publications/convolution-shadow-maps
- DOI: https://doi.org/10.2312/EGWR/EGSR07/051-060
