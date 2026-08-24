---
title: "Deformation quantization of Poisson manifolds, I"
authors: ["Maxim Kontsevich"]
year: 2003
venue: "Lett. Math. Phys."
arxiv: "q-alg/9709040"
doi: "10.1023/B:MATH.0000027508.00421.bf"
source: "https://arxiv.org/abs/q-alg/9709040"
topics: [curiosity]
seed_rank: 1234
seed_batch: "curiosity-2026-08-25"
reviewed: "2026-08-25"
pool: "maths-foundations"
relevance_score: 10
lineage: kontsevich-formality
cites:
  - title: "Another proof of M. Kontsevich formality theorem"
    url: "https://arxiv.org/abs/math/9803025"
    year: 1998
    arxiv: "math/9803025"
    doi: null
  - title: "Formality of the chain operad of framed little disks"
    url: "https://arxiv.org/abs/0902.3576"
    year: 2009
    arxiv: "0902.3576"
    doi: "10.1007/s11005-010-0399-z"
  - title: "Operads and Motives in Deformation Quantization"
    url: "https://arxiv.org/abs/math/9904055"
    year: 1999
    arxiv: "math/9904055"
    doi: null
see:
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
  - "948-the-geometry-of-tensor-calculus-i"
  - "951-an-introduction-to-string-diagrams-for-computer-scientists"
  - "1145-interacting-quantum-observables-categorical-algebra-and-diagrammatics"
---

# Deformation quantization of Poisson manifolds, I

## One-sentence takeaway

Every Poisson manifold has a canonical star product whose coefficients are weights of graphs — formality of polyvector fields, written as a topological open-string correlator.

## Why it's lovely

Why you might love this: a Poisson bracket is an infinitesimal associative product. Kontsevich writes the missing higher terms as a sum over admissible graphs, each weighted by an angle integral on the upper half-plane. The proof is a compactification of a moduli space of points on a disk; the formula is a Feynman expansion you can draw. Formality is the statement that two dg Lie algebras — polyvectors and Hochschild cochains — are equivalent, so deformations of the function algebra match Poisson structures. Graphs compute quantization.

## Problem

Given a Poisson bivector on a manifold, is there a deformation of the pointwise product of functions, associative to all orders in ħ, whose first-order commutator recovers the Poisson bracket? Equivalence classes of such star products should match Poisson structures modulo diffeomorphisms. The local Darboux case is Weyl; the global, coordinate-free case was open.

## Design

Kontsevich constructs an L∞ quasi-isomorphism from polyvector fields to the Hochschild complex of C∞(X). The Taylor coefficients are sums over directed graphs with vertices on the disk (functions on the real line, bivectors in the interior). The weight of a graph is an integral of a product of dθ forms. The resulting star product is canonical, local, and functorial. One corollary reconstructs the orbit method: quantizing coadjoint orbits.

## Evidence

The formality theorem is proved by a Stokes argument on the compactified configuration space (the same combinatorics as compactified moduli of marked disks). Journal version: *Lett. Math. Phys.* 66 (2003) 157–216, DOI `10.1023/B:MATH.0000027508.00421.bf`. Tamarkin's operadic proof and the framed-little-disks formality sequels are cited, not minted.

## Limitations

Formal power series in ħ, not analytic. The "I" in the title never grew a II; globalization and Tsygan formality are later. Not a textbook on deformation quantization, and not the little-disks operad paper.

## Implications for Broadside

Broadside already treats diagrams as the language of physics, topology, logic, and computation (018, 948, 951, 1145). Kontsevich is the missing "graphs as correlators" founding: a rewrite system whose terms are Feynman diagrams for associative algebra. ZX spiders rewrite Hilbert space; Kontsevich graphs rewrite Poisson geometry. Same instinct, different universe.

## Bottom line

Mint the graphs. Poisson is the first-order shadow of a star product.

## Links

- arXiv: [q-alg/9709040](https://arxiv.org/abs/q-alg/9709040)
- Journal: [Lett. Math. Phys. 66 (2003) 157–216](https://doi.org/10.1023/B:MATH.0000027508.00421.bf)
