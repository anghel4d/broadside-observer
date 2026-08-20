---
title: "A type theory for synthetic ∞-categories"
authors: ["Emily Riehl", "Michael Shulman"]
year: 2017
venue: "Higher Structures"
arxiv: "1705.07442"
doi: "10.21136/HS.2017.06"
source: "https://arxiv.org/abs/1705.07442"
topics: [curiosity]
seed_rank: 1125
seed_batch: "curiosity-2026-08-21"
reviewed: "2026-08-21"
pool: "languages"
relevance_score: 9
lineage: synthetic-infinity-categories
cites:
  - title: "Cubical Type Theory: a constructive interpretation of the univalence axiom"
    url: "https://arxiv.org/abs/1611.02108"
    year: 2018
    arxiv: "1611.02108"
    doi: "10.4230/LIPIcs.TYPES.2015.5"
  - title: "A model for the homotopy theory of homotopy theory"
    url: "https://arxiv.org/abs/math/9811037"
    year: 2001
    arxiv: "math/9811037"
    doi: null
  - title: "Two-level type theory and applications"
    url: "https://arxiv.org/abs/1705.03307"
    year: 2023
    arxiv: "1705.03307"
    doi: "10.1017/S0960129523000130"
  - title: "Multimodal Dependent Type Theory"
    url: "https://arxiv.org/abs/2011.15021"
    year: 2021
    arxiv: "2011.15021"
    doi: "10.46298/lmcs-17(3:11)2021"
see:
  - "1054-cubical-type-theory"
  - "1087-two-level-type-theory-and-applications"
  - "154-locally-cartesian-closed-categories-and-type-theory"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
---

# A type theory for synthetic ∞-categories

## One-sentence takeaway

Axiomatise a *directed* interval, probe types with simplices built from it, and the types that have unique-up-to-homotopy composites are synthetic \((\infty,1)\)-categories (Segal types); local univalence makes them Rezk.

## Why it matters here

Why you might love this: cubical type theory (1054) has an *undirected* interval, so paths are equalities. Here the interval is directed, simplices are probes, and "being a category" is a property of a type — composition is unique up to homotopy as soon as binary composites exist, and all higher coherences come for free. Rezk types add the slogan "isomorphisms *are* identities" internally. Extension types (shapes in directed cubes) generalise cubical path-types without being cubical TT. Bridge: ano's type layer wants both HoTT and directed structure (lenses, optics, rewrites have a direction); this is the synthetic language in which a rewrite *is* a morphism in a Rezk type, not a path.

## Key ideas

- Three-layered type theory with shapes: contexts extend by polytopes in directed cubes; extension types \(\langle \Delta \to A \mid_{\partial\Delta} a\rangle\) generalise cubical path types.
- Segal types: the map \(A^{\Delta^2}\to A^{\Lambda^2_1}\) is an equivalence (unique binary composites); associativity/units at all dimensions are automatic.
- Rezk types: categorical isomorphisms coincide with identity types (complete Segal / local univalence). Covariant fibrations and a dependent Yoneda lemma (directed J).
- Semantics: Reedy model structure on bisimplicial sets; Segal/Rezk types are Segal/complete Segal spaces (Rezk 2001). Having an adjoint, for functors of Rezk types, is a mere proposition.

## Caveats

- Founding directed/simplicial HoTT; later simplicial type theory / MTT / "Fibrations in Directed Type Theory" (2604.18668) are increments — cite, do not remint.
- Not cubical TT and not 2LTT: those already sit at 1054 and 1087. Extension types here are a bookkeeping layer, not a remint of cubical path types.
- Semantics in bisimplicial sets, not a drop-in cubical computational interpretation.

## Links

- arXiv: [1705.07442](https://arxiv.org/abs/1705.07442)
- Journal: [Higher Structures 1(1) (2017) 147–224](https://doi.org/10.21136/HS.2017.06)
