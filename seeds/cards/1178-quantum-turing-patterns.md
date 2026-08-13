---
title: "Quantum Turing Patterns"
authors:
  - "Kazuki Ikeda"
year: 2026
venue: "arXiv:nlin.PS / quant-ph"
arxiv: "2607.26331"
doi: null
source: "https://arxiv.org/abs/2607.26331"
topics:
  - cellular-automata-falling-sand
seed_rank: 8
seed_batch: "curiosity-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 8
lineage: curiosity
cites:
  - title: "The Chemical Basis of Morphogenesis"
    url: "https://doi.org/10.1098/rstb.1952.0012"
    year: 1952
    arxiv: null
    doi: null
    card: "772-the-chemical-basis-of-morphogenesis"
  - title: "Physics, Topology, Logic and Computation: A Rosetta Stone"
    url: "https://arxiv.org/abs/0903.0340"
    year: 2011
    arxiv: "0903.0340"
    doi: null
    card: "019-physics-topology-logic-and-computation-a-rosetta-stone"
  - title: "Continuous Game of Life: cell emergence and self-organization at the edge of growth"
    url: "https://arxiv.org/abs/2607.27402"
    year: 2026
    arxiv: "2607.27402"
    doi: null
    card: "1177-continuous-game-of-life-cell-emergence-and-self-organization"
---

# Quantum Turing Patterns

## One-sentence takeaway

Turing's wavelength selection, but on a Lindblad lattice: a supercritical instability at nonzero wave number, with the same dimensionless ratio controlling both the Turing determinant and opposite-momentum entanglement.

## Why it matters here

Why you might love this: morphogenesis that knows about entanglement. Anghel already has Turing's 1952 chemical basis; this is the quantum lattice sequel, with Lean 4 formalisation in the repo. Stripe branches, Bragg order, and a direct link from selected wavelength to logarithmic negativity. Not a graphics trick — a proof that pattern formation and quantum correlations can share a control parameter. The "why Broadside" is the same as Turing: procedural pattern as physics, now with a type-checked companion.

## Key ideas

- Completely positive lattice generators with finite-range couplings; first-moment equations go Turing-unstable at nonzero k.
- Analytic site- and bond-centered commensurate stripe branches, locally stable in reflection-fixed period-cell spaces.
- Microscopic covariances converge at O(N^{-1/2}) to a Gaussian Lyapunov flow.
- One dimensionless ratio governs both the Turing stability determinant and opposite-momentum logarithmic negativity.
- Differential transport moves strongest correlations from infrared to the selected Turing scale.
- Accompanying GitHub repo includes Lean 4 formalisation.

## Caveats

- This is Lindblad/open-quantum-system theory, not a real-time GI or sand algorithm.
- Semiclassical / large-N statements; do not quote entanglement claims for small lattices without the paper.
- Formalisation coverage is whatever the repo currently checks — peek before citing "machine-checked."

## Links

- arXiv: [2607.26331](https://arxiv.org/abs/2607.26331)
- PDF: https://arxiv.org/pdf/2607.26331
- Code/Lean: https://github.com/IKEDAKAZUKI/Quantum-Turing-Pattern
