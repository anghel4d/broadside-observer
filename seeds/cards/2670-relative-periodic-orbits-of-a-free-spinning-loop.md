---
title: "Relative periodic orbits of a free spinning loop"
authors:
  - "Nicholas B. Tufillaro"
year: 2026
venue: "arXiv preprint (nlin.CD)"
arxiv: "2611.23582"
doi: null
source: "https://arxiv.org/abs/2611.23582"
version_reviewed: "v1"
topics:
  - "elastic-strings"
  - "relative-periodic-orbits"
  - "hamiltonian-symmetry"
  - "mass-spring-chains"
  - "nonlinear-normal-modes"
  - "knots"
seed_rank: 2670
seed_batch: "curiosity-2026-11-21"
reviewed: "2026-11-20"
pool: "physics"
relevance_score: 7
cites:
  - title: "Relative periodic orbits of a free spinning loop"
    url: "https://arxiv.org/abs/2611.23582"
    year: 2026
    arxiv: "2611.23582"
    doi: null
  - title: "Steady Axial Motions of Strings"
    url: "https://doi.org/10.1115/1.2897094"
    year: 1990
    arxiv: null
    doi: "10.1115/1.2897094"
  - title: "Closing a catenary loop: The lariat chain, the string shooter, and the heavy elastica"
    url: "https://arxiv.org/abs/2509.12389"
    year: 2026
    arxiv: "2509.12389"
    doi: "10.1016/j.jfluidstructs.2026.104584"
see: []
---

# Relative periodic orbits of a free spinning loop

## One-sentence takeaway

A closed elastic string with its material sliding along itself can hold any shape. Starting from the spinning ring, Newton's method on a chain of masses finds the periodic motions that branch off: rotating waves, standing 'flappers' with 2–5 lobes, and period-doubled and period-tripled orbits. Their strong instabilities belong to the continuous string, while most weak ones are artifacts of the chain.

## Why it's lovely

In 1878 John Aitken spun chains on pulleys and watched them hold rigid shapes, which he called 'rigidity produced by centrifugal force'. Routh explained it: when the material moves along the curve at the transverse wave speed, tension supplies exactly the centripetal force at every point, whatever the curvature. That is the physics behind the lariat-chain and string-shooter toys. Healey and Papadopoulos proved in 1990 that any closed curve, even a loose knot, can slide steadily this way. This paper asks what happens next to the spinning ring: which periodic motions branch from it, and are they stable? The answers look like a catalogue of creatures. Rotating waves turn at twice the material's rotation rate. Saddle flappers bend out of plane into lobes that rise and fall. Some unstable orbits trade energy with an in-plane oval, and then the energy cascades to the shortest waves of the chain, as in Fermi–Pasta–Ulam. The tension law matters a lot: for Keller's linear string every motion is periodic and every knot carries a flapper, while for a Hookean string whether a knot has any periodic flapper is open. As a bridge, this is a mass-spring chain (the workhorse of cloth and rope simulation) used carefully, with exact Floquet multipliers and convergence in the number of masses, to tell which instabilities are physical and which are discretization ghosts.

## Key ideas

- **Model.** μ r_tt = ∂_s(T(ν) r_s/ν), with stretch ν = |r_s| and Hooke's law T = K(ν − 1). Sliding loops are relative equilibria of the SO(2) relabeling symmetry, and among them the spinning circle has the least energy for its angular momentum.
- **Numerics.** The string becomes a chain of point masses. Relative periodic orbits come from Newton's method, and stability from exact Floquet multipliers of a symplectic map. Every result is tested as the number of masses grows.
- **Catalogue.** Relative equilibria (sliding shapes, the spinning ring, rotating waves); relative periodic orbits (standing and lopsided flappers, mixed-lobe orbits); and quasi-periodic motion near them. The saddle flapper at 30% stretch is neutrally stable at small heights and unstable at large ones.
- **Chaos.** Near strongly unstable 3- and 4-lobe flappers, 10–25% of the kinetic energy moves to wavenumbers above 20 over about 3000 rotations, and the largest Lyapunov exponent settles at 4–11 per rotation with 120 masses.
- **Knots.** A linear (Keller) string gives exactly periodic knot flappers. For a Hookean string, curvature couples ripples to stretching waves of a different speed, and simulated ripples on a sliding knot do not return to their starting shape.

## Caveats

I read the abstract, introduction, model section, discussion and acknowledgments of v1 (17 Nov 2026); it is not refereed, and it is numerical rather than a theorem. The model has no gravity, air drag or contact, so the real lariat toy is outside its scope. The author used Claude to document and test the simulation code, check algebra and edit, and says he validated the output. MATLAB code is included as ancillary files.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.23582
- PDF: https://arxiv.org/pdf/2611.23582
- Healey & Papadopoulos, Steady axial motions of strings (1990): https://doi.org/10.1115/1.2897094
- Dehadrai & Hanna, Closing a catenary loop: https://arxiv.org/abs/2509.12389
