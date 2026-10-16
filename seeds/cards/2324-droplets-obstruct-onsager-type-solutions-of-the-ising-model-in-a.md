---
title: "Droplets obstruct Onsager-type solutions of the Ising model in a magnetic field"
authors:
  - "Ran Luo"
  - "Jiahua Tian"
year: 2026
venue: "arXiv"
arxiv: "2610.20569"
doi: null
source: "https://arxiv.org/abs/2610.20569"
topics:
  - "ising-model"
  - "differential-transcendence"
  - "statistical-mechanics"
  - "exact-solvability"
seed_rank: 2324
seed_batch: "curiosity-2026-10-17"
reviewed: "2026-10-17"
pool: "physics"
relevance_score: 8
cites:
  - title: "Droplets obstruct Onsager-type solutions of the Ising model in a magnetic field"
    url: "https://arxiv.org/abs/2610.20569"
    year: 2026
    arxiv: "2610.20569"
    doi: null
see: ["2073-conformal-universality-for-weakly-interacting-and-random-bond-ising"]
---

# Droplets obstruct Onsager-type solutions of the Ising model in a magnetic field

## One-sentence takeaway

In every dimension d ≥ 2 and at every fixed dimensionless field outside a countable set, the Ising free energy satisfies no algebraic differential equation in the coupling, so there is no Onsager-style formula (and no closed form in elliptic, hypergeometric or Painlevé functions) for the Ising model in a field, and the proof comes down to the fact that one big square droplet holds more flipped spins than any group of small ones.

## Why it's lovely

Onsager solved the zero-field 2D Ising model in 1944, and the version with a magnetic field has been the famous unsolved neighbour ever since. Physicists suspected it was not integrable, but suspicion is different from a theorem saying no formula of a whole broad family can exist. The argument is short and almost entirely geometric. In the low-temperature expansion the free energy is a gas of droplets (islands of flipped spins), and the isoperimetric inequality (for a given perimeter, a square encloses the most area) leaves integer coefficients that cannot cancel. Those force the denominators of the series to grow faster than any series satisfying an algebraic differential equation could allow. It's lattice geometry beating analysis.

## Key ideas

- **Target class.** A function is differentially algebraic if some polynomial in u and finitely many derivatives vanishes. Onsager-type pressures (Brillouin-zone integrals of logs of trigonometric polynomials) and elliptic, hypergeometric and Painlevé closed forms are all in this class.
- **Droplet expansion.** With u = e^(−4K) (two broken bonds) and fugacity z = e^(−2H) (one flipped spin), the pressure is 2K + H + Φ(u, z), where Φ = Σ L_m(z) u^m sums over droplets with half-perimeter m. The Lee–Yang circle theorem gives convergence at every |z| < 1.
- **Area gap.** A droplet with half-perimeter m holds at most ⌊m²/4⌋ spins, achieved only by the square or near-square. Several droplets with the same total perimeter hold at least m − 2 fewer, so only single squares reach the highest powers of z, and their coefficients are integers.
- **Integer band and denominators.** At a rational fugacity z = A/B the factor B^(r²) survives in the reduced denominator of the u^(2r) coefficient for r ≥ 3. That grows faster than the e^(Cn(log n)²) ceiling that holds for any rational power series satisfying an algebraic differential equation.
- **Reach.** The result covers every rational z, every z that is not an algebraic integer (including every transcendental z, so every positive algebraic field H by Lindemann–Weierstrass), the magnetization too, and all dimensions d ≥ 2.

## Caveats

It is a 13-page letter-style preprint and not yet refereed. The exceptional set is the algebraic-integer fugacities, where the question stays open. It rules out a specific (very broad) class of closed forms, not every conceivable exact description, and it says nothing about the integrable E8 scaling limit at criticality, which is a different object.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.20569
- PDF: https://arxiv.org/pdf/2610.20569
