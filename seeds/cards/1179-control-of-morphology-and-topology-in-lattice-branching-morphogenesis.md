---
title: "Control of morphology and topology in a lattice model of branching morphogenesis"
authors:
  - "Christian Hanauer"
  - "Frank Jülicher"
  - "Efe Ilker"
year: 2026
venue: "arXiv:cond-mat.stat-mech"
arxiv: "2607.24619"
doi: null
source: "https://arxiv.org/abs/2607.24619"
topics:
  - procedural-content-codegen
  - cellular-automata-falling-sand
seed_rank: 9
seed_batch: "curiosity-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 8
lineage: procedural-generation
cites:
  - title: "The Chemical Basis of Morphogenesis"
    url: "https://doi.org/10.1098/rstb.1952.0012"
    year: 1952
    arxiv: null
    doi: null
    card: "772-the-chemical-basis-of-morphogenesis"
  - title: "The Algorithmic Beauty of Plants (L-systems)"
    url: "https://doi.org/10.1007/978-1-4613-8476-2"
    year: 1990
    arxiv: null
    doi: null
    card: "498-the-algorithmic-beauty-of-plants-l-systems"
  - title: "Wave Function Collapse"
    url: "https://github.com/mxgmn/WaveFunctionCollapse"
    year: 2016
    arxiv: null
    doi: null
    card: "119-wave-function-collapse"
  - title: "Continuous Game of Life: cell emergence and self-organization at the edge of growth"
    url: "https://arxiv.org/abs/2607.27402"
    year: 2026
    arxiv: "2607.27402"
    doi: null
    card: "1177-continuous-game-of-life-cell-emergence-and-self-organization"
---

# Control of morphology and topology in a lattice model of branching morphogenesis

## One-sentence takeaway

A lattice of cells coupled to self-produced morphogens that interpolates DLA-like and Eden-like growth, plus a *local operator that controls topology* so branched clusters can grow, shrink, and sit in a topology-preserving steady state.

## Why it matters here

Why you might love this: L-systems grew plants by rewriting strings; this grows branched organs by a local topological operator on a lattice, with morphogen fields as the control. That is procedural vegetation/vasculature as an ECS + field, with measured fractal exponents (~0.68 square, ~0.67 hexagonal). The same Jülicher group as the continuous Game of Life card. Anoptic already has WFC and L-systems; this is the missing morphogen-and-topology knob.

## Key ideas

- Stochastic cell occupation coupled to morphogens the cells themselves produce.
- Growth regimes span diffusion-limited aggregation to Eden (surface) growth, selected by morphogen gradients.
- A local operator controls topology: growth, degrowth, and steady-state branched patterns.
- Topology-preserving steady-state clusters show power-law radius of gyration vs size (0.68±0.01 square; 0.67±0.01 hexagonal).
- Non-equilibrium physics + developmental biology in one lattice rule set.

## Caveats

- 2-D square/hex lattices; 3-D engine use is an extrapolation.
- Exponents are measured, with quoted error bars — not a universality proof.
- "Local operator" is the interesting engine primitive; read the paper before inventing an ano builtin named after it.

## Links

- arXiv: [2607.24619](https://arxiv.org/abs/2607.24619)
- PDF: https://arxiv.org/pdf/2607.24619
