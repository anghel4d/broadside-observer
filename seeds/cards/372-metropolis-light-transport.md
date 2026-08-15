---
title: "Metropolis Light Transport"
authors:
  - "Eric Veach"
  - "Leonidas J. Guibas"
year: 1997
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/258734.258775"
source: "https://doi.org/10.1145/258734.258775"
topics:
  - gi
  - mlt
seed_rank: 372
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "The rendering equation"
    url: "https://doi.org/10.1145/15886.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15886.15902"
  - title: "Bidirectional Estimators for Light Transport"
    url: "https://graphics.stanford.edu/papers/bidir/"
    year: 1994
    arxiv: null
    doi: null
  - title: "Equation of State Calculations by Fast Computing Machines"
    url: "https://doi.org/10.1063/1.1699114"
    year: 1953
    arxiv: null
    doi: "10.1063/1.1699114"
see:
  - "152-the-rendering-equation"
  - "376-bidirectional-estimators-for-light-transport"
---

# Metropolis Light Transport

## One-sentence takeaway

Veach and Guibas apply the Metropolis–Hastings algorithm to path space so mutations explore the high-contribution paths (caustics, SDS) that ordinary path tracing almost never samples.

## Why it matters here

Offline reference for Anoptic / RC: MLT is why hard transport paths exist as a Markov chain over path space, not just as more samples. Real-time cascades will not run MLT, but the mutation vocabulary (lens, caustic, perturbation) is the theory behind every “reuse this path” trick.

## Key ideas

- A path is a state; a mutation proposes a neighbor path; the acceptance probability is the contribution ratio, so the stationary distribution matches the measurement contribution function.
- Local exploration finds bright, narrow features (caustics through a keyhole) after the first lucky sample, instead of waiting for independent hits.
- Needs a separate large-step / bidirectional seed so the chain can jump modes; otherwise it sticks in one caustic.
- Unbiased in the limit; correlated samples make error blotchy rather than white, which is why later PSSMLT / MMLT papers exist.

## Caveats

## Links

- DOI: https://doi.org/10.1145/258734.258775
- Thesis (long form): https://graphics.stanford.edu/papers/veach_thesis/thesis.pdf
