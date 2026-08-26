---
title: "Matching Rules as Cocycle Conditions: Discrete Potentials on Penrose and Canonical Projection Tilings"
authors: ["Sebastian Pardo-Guerra", "Jonathan Washburn", "Elshad Allahyarov"]
year: 2026
venue: "arXiv:math.CO"
arxiv: "2603.13553"
doi: null
source: "https://arxiv.org/abs/2603.13553"
topics: [curiosity]
seed_rank: 1370
seed_batch: "curiosity-2026-08-27"
reviewed: "2026-08-27"
pool: "maths-foundations"
relevance_score: 10
lineage: aperiodic-tilings
cites:
  - title: "An aperiodic monotile"
    url: "https://arxiv.org/abs/2303.10798"
    year: 2023
    arxiv: "2303.10798"
    doi: null
  - title: "Sturmian lattices and Aperiodic tile sets"
    url: "https://arxiv.org/abs/2503.01259"
    year: 2025
    arxiv: "2503.01259"
    doi: null
  - title: "Discrete Exterior Calculus"
    url: "https://arxiv.org/abs/math/0508341"
    year: 2005
    arxiv: "math/0508341"
    doi: null
  - title: "Physics, Topology, Logic and Computation: A Rosetta Stone"
    url: "https://arxiv.org/abs/0903.0340"
    year: 2009
    arxiv: "0903.0340"
    doi: null
see:
  - "1023-an-aperiodic-monotile"
  - "1024-sturmian-lattices-and-aperiodic-tile-sets"
  - "1028-discrete-exterior-calculus"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
---

# Matching Rules as Cocycle Conditions: Discrete Potentials on Penrose and Canonical Projection Tilings

## One-sentence takeaway

Matching rules, Ammann-bar continuity, 1-cochain cycle closure, and height-function existence are the same theorem — proved without assuming any of the four.

## Why it's lovely

Why you might love this: Penrose matching rules = cocycle conditions = Ammann height functions; aperiodicity rewritten as discrete cohomology.

## Problem

Aperiodic tilings are usually presented in two dialects that never quite meet: local matching rules (edge colours / Ammann bars) and global integer height functions. The literature treats the correspondence as folklore. Is there a cochain-first proof that makes the equivalence checkable for Penrose and for canonical projection tilings from ℤᴺ?

## Design

- Half-edge/gluing: each Ammann-bar family assigns a signed crossing count to directed edges, yielding an antisymmetric 1-cochain.
- Global cochain exists iff adjacent tiles agree on shared edges (matching). Gluing ⇒ cycle closure; discrete Poincaré lemma ⇒ scalar potential = classical Ammann height.
- For CPTs from ℤᴺ, lattice-coordinate cochains reconstruct vertices and (generic window) form a ℤ-basis of Čech H¹ ≅ ℤᴺ (Forrest–Hunton–Kellendonk), with recognition gap R(T) ≅ ℤᴺ.
- Verified on Fibonacci, Penrose P2, Ammann–Beenker, icosahedral Ammann; conjecture: conservation forcing characterises Pisot-substitution CPTs.

## Evidence

Four-way equivalence proved for candidate tilings without presupposing any side. Explicit verification on classical examples. Open conjecture stated honestly.

## Limitations

Not a new aperiodic monotile (hat/spectre already 1023). Does not settle the Pisot-CPT characterisation. Physics applications (electrons in quasicrystals) cited, not reminted.

## Implications for Broadside

Curiosity already keeps hat (1023) and Sturmian lattices (1024). This is the cohomological leftover: why matching rules *work* is that they are cocycles. Bridge to Broadside topology cards (018) and discrete exterior thinking (1028).

## Bottom line

Mint the cocycle dictionary. Aperiodicity is discrete cohomology with matching-rule coefficients.

## Links

- arXiv: [2603.13553](https://arxiv.org/abs/2603.13553)
