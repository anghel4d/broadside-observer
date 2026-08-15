---
title: "Numerical study on the emergence of anisotropy in artificial flocks: A BOIDS modeling and simulations of empirical findings"
authors:
  - "Motohiro Makiguchi"
  - "Jun-ichi Inoue"
year: 2010
venue: "arXiv physics.bio-ph / SW10"
arxiv: "1004.3837"
doi: null
source: "https://arxiv.org/abs/1004.3837"
topics:
  - physics
seed_rank: 278
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
cites:
  - title: "Flocks, herds and schools: A distributed behavioral model"
    url: "https://doi.org/10.1145/37401.37406"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37406"
  - title: "The STARFLAG handbook on collective animal behaviour: 1. Empirical methods"
    url: "https://doi.org/10.1016/j.anbehav.2008.02.002"
    year: 2008
    arxiv: null
    doi: "10.1016/j.anbehav.2008.02.002"
see:
  - "204-flocks-herds-and-schools-a-distributed-behavioral-model"
---

# Numerical study on the emergence of anisotropy in artificial flocks: A BOIDS modeling and simulations of empirical findings

## One-sentence takeaway

Reynolds boids, with only cohesion / alignment / separation weights, spontaneously reproduce the nearest-neighbor angular anisotropy Ballerini et al. measured in real starling flocks.

## Why it matters here

If GRID COMMAND flocks are going to look like animals rather than a gas, the γ-value (anisotropy order parameter) is a cheap realism check on the three classic weights — no extra rule required.

## Key ideas

- STARFLAG field work (Ballerini, PNAS 2008) found nearest neighbors are anisotropically distributed around each bird, not uniformly in a sphere.
- A standard three-rule boids sim produces the same anisotropy at the right weight combinations — counter-intuitive because the rules are isotropic.
- γ is the inner product of the flock's travel direction with the direction of lowest angular neighbor density; it is the order parameter.
- γ can be used as a "does this flock look real" statistic for any steering sim.
- Operational Research Society Simulation Workshop 2010; arXiv:1004.3837.

## Caveats

## Links

- arXiv: [1004.3837](https://arxiv.org/abs/1004.3837)
- PDF: https://arxiv.org/pdf/1004.3837
