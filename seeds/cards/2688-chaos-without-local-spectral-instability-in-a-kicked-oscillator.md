---
title: "Chaos without Local Spectral Instability in a Kicked Oscillator"
authors:
  - "Vincenzo Citro"
  - "Giuseppe Petrillo"
  - "Didier Sornette"
year: 2026
venue: "arXiv preprint (nlin.CD)"
arxiv: "2611.15525"
doi: null
source: "https://arxiv.org/abs/2611.15525"
version_reviewed: "v1"
topics:
  - "nonlinear-dynamics"
  - "non-normal-amplification"
  - "joint-spectral-radius"
  - "lyapunov-exponents"
  - "kicked-oscillator"
seed_rank: 2688
seed_batch: "curiosity-2026-11-23"
reviewed: "2026-11-23"
pool: "physics"
relevance_score: 7
cites:
  - title: "Chaos without Local Spectral Instability in a Kicked Oscillator"
    url: "https://arxiv.org/abs/2611.15525"
    year: 2026
    arxiv: "2611.15525"
    doi: null
see: []
---

# Chaos without Local Spectral Instability in a Kicked Oscillator

## One-sentence takeaway

A damped oscillator kicked by a pulsed periodic potential is chaotic even though every local Jacobian has all its eigenvalues strictly inside the unit circle, because ordered products of contracting but non-normal shears amplify perturbations; the authors give the exact joint spectral radius and an exact Lyapunov-exponent decomposition.

## Why it's lovely

Eigenvalue checks are the first thing everyone reaches for when asked whether an iteration is stable, and this paper is a clean, physical counterexample: each step is a contraction in the eigenvalue sense, yet composing them in the order the trajectory visits them pumps energy into one direction. Damped rotation between kicks makes the shears of opposite curvature compound. It is the same non-modal transient growth that fluid people know, now sitting in a two-line map you can implement in a minute, and the paper makes it exact rather than numerical (joint spectral radius of the Jacobian family, plus a Lyapunov decomposition). For Broadside the bridge is any stateful loop that is argued stable one step at a time: iterative solvers, feedback filters in audio or temporal accumulation in a renderer, agent loops whose per-step update looks contractive. Per-step contraction does not certify the composed system; the order of the factors matters.

## Key ideas

- **System.** A damped harmonic oscillator (damping γ below natural frequency ω0) receives short pulses of a sinusoidal substrate potential every T; the one-step map is a damped rotation followed by a kick.
- **Claim.** All local Jacobians have eigenvalues inside the unit circle throughout phase space, yet a strange attractor with a positive maximal Lyapunov exponent exists (about 0.103 for the main case in the paper).
- **Mechanism.** Non-normal shears of opposite curvature, interleaved by damped rotation, compound along the trajectory; reordering the same Jacobians destroys the growth.
- **Exact results.** The exact joint spectral radius of the Jacobian family, and an exact decomposition of the maximal Lyapunov exponent that shows how geometric pumping overcomes dissipation.
- **Realization.** Proposed with laser-cooled trapped ions in a pulsed optical lattice.

## Caveats

I read the abstract, introduction, model and the Lyapunov sections of v1 (11 Nov 2026, 20 pp., 5 figures); I did not verify the derivations or rerun the simulation. It is not refereed, and the attracting character of the attractor is supported by numerical basin analysis and long-time persistence rather than a theorem. The trapped-ion realization is a proposal, not an experiment. The idea that local spectral contraction does not give global stability is not new (discrete Markus–Yamabe counterexamples); the contribution is a physical mechanism with exact criteria.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.15525
- PDF: https://arxiv.org/pdf/2611.15525
