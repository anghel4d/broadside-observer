---
title: "Three-dimensional Fundamental Diagrams of Five-neighbor Particle Cellular Automata"
authors:
  - "Kazuya Okamoto"
  - "Daisuke Takahashi"
year: 2026
venue: "arXiv:nlin.CG"
arxiv: "2606.08972"
doi: null
source: "https://arxiv.org/abs/2606.08972"
topics:
  - cellular-automata-falling-sand
seed_rank: 6
seed_batch: "curiosity-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 8
lineage: curiosity
cites:
  - title: "Theory of Self-Reproducing Automata"
    url: "https://doi.org/10.2307/2003947"
    year: 1966
    arxiv: null
    doi: null
    card: "797-theory-of-self-reproducing-automata"
  - title: "Particle-Based Fluid Simulation for Interactive Applications"
    url: "https://doi.org/10.1145/1073368.1073400"
    year: 2003
    arxiv: null
    doi: null
    card: "490-particle-based-fluid-simulation-for-interactive-applications"
  - title: "Counting number-conserving cellular automata with radius 1"
    url: "https://arxiv.org/abs/2605.31157"
    year: 2026
    arxiv: "2605.31157"
    doi: null
    card: "1175-counting-number-conserving-cellular-automata-with-radius-1"
---

# Three-dimensional Fundamental Diagrams of Five-neighbor Particle Cellular Automata

## One-sentence takeaway

Five-neighbor particle CA whose flow-vs-density plots are multi-valued become single-valued once you keep a second density, and that 3-D fundamental diagram survives max-plus (ultradiscrete) extensions.

## Why it matters here

Why you might love this: this is the phase diagram of falling sand. Particle cellular automata with a five-cell neighbourhood are Noita-shaped, and "fundamental diagrams" are the bulk flux laws you would actually want as ano queries (`mean flow` given two conserved densities). Max-plus extensions are the ultradiscrete twin of the same rule — a bridge from CA to tropical algebra.

## Key ideas

- Conventional 2-D fundamental diagrams of some 5-neighbor particle CA are multi-valued; a second density restores uniqueness of mean flow.
- Treats both rules that conserve the second density and rules where it only converges asymptotically.
- Asks whether real-valued max-plus extensions preserve the single-valued 3-D diagram; for some rules two different extensions both do.
- Moral: flux function and second density must be chosen *together* when ultradiscretising.
- Particle CA + extra conserved quantity = a 3-D equation of state for the automaton.

## Caveats

- Motivated by traffic-like particle flow as well as sand; not a rendering paper.
- Max-plus preservation is numerical for the extensions they tried, not a general theorem.
- Five-neighbor 1-D/plus-shaped neighbourhoods — map carefully onto 2-D von Neumann/Moore sand.

## Links

- arXiv: [2606.08972](https://arxiv.org/abs/2606.08972)
- PDF: https://arxiv.org/pdf/2606.08972
