---
title: "Fault-tolerant quantum computation by anyons"
authors: ["A. Yu. Kitaev"]
year: 2003
venue: "Ann. Phys."
arxiv: "quant-ph/9707021"
doi: "10.1016/S0003-4916(02)00018-0"
source: "https://arxiv.org/abs/quant-ph/9707021"
topics: [curiosity]
seed_rank: 1148
seed_batch: "curiosity-2026-08-23"
reviewed: "2026-08-23"
pool: "maths-foundations"
relevance_score: 10
lineage: topological-quantum-computing
cites:
  - title: "Anyons in an exactly solved model and beyond"
    url: "https://arxiv.org/abs/cond-mat/0506438"
    year: 2006
    arxiv: "cond-mat/0506438"
    doi: "10.1016/j.aop.2005.10.005"
  - title: "Higher-dimensional Algebra and Topological Quantum Field Theory"
    url: "https://arxiv.org/abs/q-alg/9503002"
    year: 1995
    arxiv: "q-alg/9503002"
    doi: "10.1063/1.531236"
  - title: "On the Classification of Topological Field Theories"
    url: "https://arxiv.org/abs/0905.0465"
    year: 2009
    arxiv: "0905.0465"
    doi: null
  - title: "The cobordism hypothesis"
    url: "https://arxiv.org/abs/1705.02240"
    year: 2017
    arxiv: "1705.02240"
    doi: null
see:
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
  - "1124-a-categorification-of-the-jones-polynomial"
  - "1025-on-the-sphere-spectrum-from-the-viewpoint-of-linear-logic"
  - "1145-interacting-quantum-observables-categorical-algebra-and-diagrammatics"
---

# Fault-tolerant quantum computation by anyons

## One-sentence takeaway

A two-dimensional medium whose excitations are anyons is already a quantum computer: braiding is the gate, fusion is the measurement, and topology supplies the error-correcting code.

## Why it's lovely

Why you might love this: fault tolerance is not an extra coding layer you bolt onto Hilbert space — it is the physics. Local noise cannot change a braid; the computational subspace is a topological invariant of the anyon configuration. Move excitations around each other to compute; fuse them in pairs to read out. This is the paper that invented topological quantum computation (and, in passing, the toric code).

## Problem

Decoherence destroys unprotected qubits. Standard error correction fights local noise with redundant encoding and active recovery, at a steep overhead. Is there a physical system whose ground-state degeneracy and excitations make the computation *automatically* insensitive to local perturbations?

## Design

A 2d lattice Hamiltonian with a topological energy gap; excitations are anyons labelled by a unitary modular tensor category. A computation is a braid of worldlines; a measurement is a fusion outcome. Because local operators cannot change the topological charge at long distance, the encoded information is protected by the gap. The toric-code Hamiltonian is the abelian warmup; non-abelian anyons (e.g. Fibonacci) give universality.

## Evidence

The construction is fully specified for abelian anyons (toric code / \(\mathbb{Z}_2\) gauge theory) and outlined for non-abelian ones. Journal: *Annals of Physics* 303 (2003) 2–30, DOI `10.1016/S0003-4916(02)00018-0`. The honeycomb model (cond-mat/0506438) later gave an exactly solvable non-abelian phase; Baez–Dolan / Lurie classify the TQFTs in the background. Cite those, do not remint.

## Limitations

The 1997/2003 paper is the architecture, not a materials recipe. Universal computation needs non-abelian anyons whose experimental realisation remains open. Not a ZX-circuit paper and not a cobordism-hypothesis survey.

## Implications for Broadside

The Rosetta Stone (018) already says topology *is* computation; Kitaev is the engineering corollary — the code *is* the topology. Khovanov (1124) categorifies a Jones polynomial that anyon braiding also produces; ZX (1145) is the diagrammatic language in which lattice-surgery and surface-code rewrites now live. Unusual computing, not this week's agent bench.

## Bottom line

Mint topology-as-code. Braiding is the gate.

## Links

- arXiv: [quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021)
- Journal: [Ann. Phys. 303 (2003) 2–30](https://doi.org/10.1016/S0003-4916(02)00018-0)
