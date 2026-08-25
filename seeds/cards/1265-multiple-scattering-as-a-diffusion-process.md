---
title: "Multiple Scattering as a Diffusion Process"
authors: ["Jos Stam"]
year: 1995
venue: "EGWR"
arxiv: null
doi: "10.1007/978-3-7091-9430-0_5"
source: "https://doi.org/10.1007/978-3-7091-9430-0_5"
topics: [subsurface-scattering]
seed_rank: 1265
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
cites:
  - title: "Wave Propagation and Scattering in Random Media"
    url: "https://doi.org/10.1109/9780470547045"
    year: 1978
    arxiv: null
    doi: "10.1109/9780470547045"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
see:
  - "152-the-rendering-equation"
  - "1262-wave-propagation-and-scattering-in-random-media"
---

# Multiple Scattering as a Diffusion Process

## One-sentence takeaway

Stam 1995: multiple scattering as a diffusion process — graphics diffusion SSS before the dipole.

## Problem

Ishimaru's diffusion was physics. Need a graphics paper that treats multiple scatter as a diffusion PDE on a volume / surface.

## Design

Cast multiple scattering as a diffusion process; solve (or convolve) instead of path-tracing every bounce. Lineage: Ishimaru → Stam95 → JMLH01.

## Evidence

EGWR 1995, DOI 10.1007/978-3-7091-9430-0_5. Parallel ancestor of the 2001 dipole, not a competitor to Stam 2001 skin.

## Limitations

Diffusion, homogeneous-leaning. No BSSRDF formula. JMLH01 is the one that shipped.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Stam 1995. Cite Ishimaru; do not confuse with Stam 2001 skin.

## Links

- DOI: [10.1007/978-3-7091-9430-0_5](https://doi.org/10.1007/978-3-7091-9430-0_5)
