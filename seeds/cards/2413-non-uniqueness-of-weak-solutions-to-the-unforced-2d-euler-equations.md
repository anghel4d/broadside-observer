---
title: "Non-Uniqueness of Weak Solutions to the Unforced Two-Dimensional Euler Equations with Vorticity in L1 ∩ Lp, I: A Compactness Criterion and the Linear Analysis"
authors:
  - "Matei P. Coiculescu"
year: 2026
venue: "arXiv preprint (math.AP)"
arxiv: "2610.30655"
doi: null
source: "https://arxiv.org/abs/2610.30655"
topics:
  - "partial-differential-equations"
  - "fluid-dynamics"
  - "incompressible-euler"
  - "computer-assisted-proof"
  - "ai-assisted-proof"
seed_rank: 2413
seed_batch: "curiosity-2026-10-25"
reviewed: "2026-10-25"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Non-Uniqueness of Weak Solutions to the Unforced Two-Dimensional Euler Equations with Vorticity in L1 ∩ Lp, Part I: A Compactness Criterion and the Linear Analysis"
    url: "https://arxiv.org/abs/2610.30655"
    year: 2026
    arxiv: "2610.30655"
    doi: null
see: ["2231-universal-computation-in-forced-navierstokes-flows", "2218-nonuniqueness-with-local-conservation-for-the-hard-sphere-boltzmann"]
---

# Non-Uniqueness of Weak Solutions to the Unforced Two-Dimensional Euler Equations with Vorticity in L1 ∩ Lp, I

## One-sentence takeaway

With no external force, the planar incompressible Euler equations have two distinct renormalized weak solutions from the same explicit radial vorticity, which lies in every Lq (q < ∞) but is unbounded. One solution stays put; the other is a 3-fold symmetric solution that breaks away in finite time. Together with its companion Part II, this answers the L∞ₜLᵖ question of Bruè–Colombo–Kumar in the plane.

## Why it's lovely

Yudovich's theorem says bounded vorticity gives a unique 2D flow. Vishik showed uniqueness can fail once the vorticity is unbounded, but only by adding a carefully tuned force. This paper removes the force. The datum is a stack of infinitely many rescaled copies of one unstable vortex ring on annuli that shrink toward the origin, with amplitudes growing inward. Inner rings spin faster, so an instability seeded in the core can climb outward through every ring in a time that does not depend on how deep the stack goes. It is the unforced sibling of the forced-flow results this library already follows (forced 3D Navier–Stokes blow-up and universal computation in forced flows). The general pattern: an exact stationary background plus an unstable mode turns into non-uniqueness once the scales are arranged so the instability arrives in finite time.

## Key ideas

- **Explicit multiscale datum.** f = Σₖ Aₖ Φ(·/rₖ), with Aₖ = A₁ µ^(k−1) and super-geometrically shrinking radii rₖ. Here Φ is a smooth radial ring supported in an annulus a ≤ |y| ≤ 1. The datum f is radial, nonnegative, in L¹ ∩ Lq for every q < ∞, and not in L∞.
- **Two solutions in the right class.** One is the stationary radial solution ω = f. The second is equimeasurable with f at all times and 3-fold rotationally symmetric. They are distinct in L∞ₜ(L¹ ∩ Lq)ₓ for every q ∈ (4/3, ∞) on long enough time intervals, so the second vorticity stays in the class where the uniqueness question is posed, unlike Mengual's convex-integration solutions.
- **Compactness criterion (Part I).** Take 3-fold symmetric approximate solutions with data converging to a radial f. If they keep a non-radial moment ∫ω χ(|x|) x̄ᵐ bounded below at some bounded time, a DiPerna–Lions-style compactness argument extracts a second renormalized solution.
- **Linear instability of a ring plus point vortex.** The linearization around Φ plus a small central point vortex (which stands in for all the inner rings) has an algebraically simple unstable eigenvalue in angular mode 3. The analysis reduces each angular mode to an ODE in log r, locates the eigenvalue as a zero of an Evans function, and bounds the other modes with an explicit integral.
- **3-fold symmetry is a filter.** Restricting to 3-fold symmetry kills the ℓ = ±1 modes that would just translate a ring, leaving only the modes ℓ ∈ 3ℤ whose spectra are controlled.

## Caveats

This is half a proof. The nonlinear construction and the interval-arithmetic verification of the Evans-function hypotheses (N1)–(N2) are in the companion Part II, which I did not review. The velocity of the datum is not square-integrable, so this says nothing about finite-energy solutions or vanishing viscosity, and q ≤ 4/3 is not treated. It is a planar 2D Euler result and does not bear on the open unforced Clay Navier–Stokes cases. The author states that the detailed proofs, the Part II verification code and the text were largely produced with Claude Opus 5.5 under his direction, and that he checked all proofs by hand. The strategy is his own. Not yet refereed.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.30655
- PDF: https://arxiv.org/pdf/2610.30655
