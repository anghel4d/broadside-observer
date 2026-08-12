---
title: Position Based Fluids
authors:
- Miles Macklin
- Matthias Muller
year: 2013
venue: SIGGRAPH/TOG
arxiv: null
doi: 10.1145/2461912.2461984
source: https://doi.org/10.1145/2461912.2461984
topics:
- fluids
- pbd
seed_rank: 734
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 8
lineage: particle-fluids
cites:
- title: Particle-Based Fluid Simulation for Interactive Applications
  url: https://matthias-research.github.io/pages/publications/sca03.pdf
  year: 2003
  arxiv: null
  doi: null
  card: 490-particle-based-fluid-simulation-for-interactive-applications
- title: Position Based Dynamics
  url: https://doi.org/10.1016/j.jvcir.2007.01.005
  year: 2007
  arxiv: null
  doi: null
  card: 363-position-based-dynamics
- title: 'XPBD: Position-Based Simulation of Compliant Constrained Dynamics'
  url: https://doi.org/10.1145/2994258.2994272
  year: 2016
  arxiv: null
  doi: null
  card: 340-xpbd-position-based-simulation-of-compliant-constrained-dyna
---

# Position Based Fluids

## One-sentence takeaway

PBD density constraints deliver stable real-time incompressible fluids beyond classical interactive SPH timesteps.

## Why it matters here

Successor path from Muller 2003 SPH toward engine-stable liquid FX.

## Key ideas

- Constant-density constraints inside Position Based Dynamics.
- Artificial pressure for surface tension/distribution.
- Vorticity confinement post-process.
- Large stable timesteps suitable for games.

## Caveats

- Not full CFD.
- Neighbor queries remain the performance core.

## Links

- DOI: [10.1145/2461912.2461984](https://doi.org/10.1145/2461912.2461984)
- URL: https://doi.org/10.1145/2461912.2461984
