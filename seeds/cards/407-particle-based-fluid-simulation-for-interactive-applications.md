---
title: "Particle-Based Fluid Simulation for Interactive Applications"
authors:
  - "Matthias Müller"
  - "David Charypar"
  - "Markus Gross"
year: 2003
venue: "SCA"
arxiv: null
doi: "10.1145/846276.846298"
source: "https://doi.org/10.1145/846276.846298"
topics:
  - physics
  - fluids
seed_rank: 407
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 7
lineage: particle-fluids
cites:
  - title: "Position Based Fluids"
    url: "https://doi.org/10.1145/2461912.2461984"
    year: 2013
    arxiv: null
    doi: "10.1145/2461912.2461984"
  - title: "Position Based Dynamics"
    url: "https://doi.org/10.1016/j.jvcir.2007.01.005"
    year: 2007
    arxiv: null
    doi: "10.1016/j.jvcir.2007.01.005"
  - title: "XPBD: Position-Based Simulation of Compliant Constrained Dynamics"
    url: "https://doi.org/10.1145/2994258.2994272"
    year: 2016
    arxiv: null
    doi: "10.1145/2994258.2994272"
see:
  - "483-position-based-fluids"
  - "287-position-based-dynamics"
  - "264-xpbd-position-based-simulation-of-compliant-constrained-dyna"
---

# Particle-Based Fluid Simulation for Interactive Applications

## One-sentence takeaway

Interactive SPH: density from a smoothing kernel, pressure and viscosity as pairwise forces, plus surface tension and a particle surface for free-surface water that still runs at game rates.

## Why it matters here

This is the paper that made particle water a real-time engine feature instead of an offline CFD job. Anoptic/GRID COMMAND splash and blood should start here — or at later PBF/XPBD — not at a grid Navier–Stokes solve.

## Key ideas

- Smoothed Particle Hydrodynamics adapted to free surfaces: density ρᵢ = Σⱼ mⱼ W(rᵢ − rⱼ, h), pressure from an equation of state, viscosity as a pairwise damper.
- Surface tension from color-field curvature so droplets bead instead of just colliding.
- Boundary handling by penalty / ghost particles rather than a full cut-cell grid.
- Surface extracted from the particles (splats / implicit surface) so the sim never owns a mesh topology.

## Caveats

## Links

- DOI: [10.1145/846276.846298](https://doi.org/10.1145/846276.846298)
- PDF: https://tmoco.github.io/documents/ParticleBasedFluidSimulation.pdf
- EG DL: https://diglib.eg.org/items/fb9edf26-94b0-4302-8cfc-52632841cae7
