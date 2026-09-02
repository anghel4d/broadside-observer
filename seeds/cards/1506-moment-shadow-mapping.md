---
title: "Moment Shadow Mapping"
authors: ["Christoph Peters", "Reinhard Klein"]
year: 2015
venue: "I3D"
arxiv: null
doi: "10.1145/2699276.2699277"
source: "https://cg.cs.uni-bonn.de/en/publications/paper-details/peters-2015-ismm"
topics: [moment-shadow-maps, filterable-SM, EVSM-successor]
seed_rank: 1506
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: filterable-shadow-maps
cites:
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
  - title: "Convolution Shadow Maps"
    url: "https://www.mpi-inf.mpg.de/departments/computer-graphics/publications/convolution-shadow-maps"
    year: 2007
    arxiv: null
    doi: "10.2312/EGWR/EGSR07/051-060"
see:
  - "359-variance-shadow-maps"
---

# Moment Shadow Mapping

## One-sentence takeaway

Store four depth moments and reconstruct a Hamburger/Hausdorff bound on the occluded fraction — the filterable SM Unity HDRP actually shipped after EVSM light-bleed.

## Why it matters here

VSM (359) is live and bleeds; ESM (this batch) is the cheap mobile warp. MSM is the 4-moment successor that HDRP/Frostbite-class engines used when they still filtered rather than ray-traced. GRID COMMAND sun on mid-tier GPUs still wants this, not another cascade.

## Key ideas

- **Power moments.** Store (1, z, z², z³, z⁴) compressed; MSAA/filtering is just bilinear/mip on the moment vector.
- **Hamburger and Hausdorff bounds.** Given moments, bound P(Z > receiver) with a tight analytic inequality — less light-bleed than Chebyshev (VSM) at equal storage.
- **16-bit / 32-bit recipes.** The paper gives quantization and biasing so four moments fit an RGBA16 target.
- **Evidence.** I3D 2015, doi `10.1145/2699276.2699277`. https://cg.cs.uni-bonn.de/en/publications/paper-details/peters-2015-ismm

## Caveats

- Still a depth-distribution bound, not exact vis: overlapping receivers and large kernels leak. Not a remint of VSM 359. EVSM is a related exponential-moment hybrid, not this paper. Contact-hardening still wants PCSS-style kernel sizing on top.

## Links

- Project: https://cg.cs.uni-bonn.de/en/publications/paper-details/peters-2015-ismm
- DOI: https://doi.org/10.1145/2699276.2699277
