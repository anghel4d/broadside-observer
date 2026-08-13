---
title: "Clones, closed categories, and combinatory logic"
authors:
  - "Philip Saville"
year: 2024
venue: "FoSSaCS 2024"
arxiv: "2405.01675"
doi: "10.1007/978-3-031-57231-9_8"
source: "https://arxiv.org/abs/2405.01675"
topics:
  - category-theory-plt
  - typed-programming-systems
seed_rank: 2
seed_batch: "curiosity-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: programming-language-foundations
cites:
  - title: "Functionality in Combinatory Logic"
    url: "https://doi.org/10.1073/pnas.20.11.584"
    year: 1934
    arxiv: null
    doi: null
    card: "749-functionality-in-combinatory-logic"
  - title: "The Principal Type-Scheme of an Object in Combinatory Logic"
    url: "https://doi.org/10.1090/S0002-9947-1969-0237244-X"
    year: 1969
    arxiv: null
    doi: null
    card: "879-the-principal-type-scheme-of-an-object-in-combinatory-logic"
  - title: "Physics, Topology, Logic and Computation: A Rosetta Stone"
    url: "https://arxiv.org/abs/0903.0340"
    year: 2011
    arxiv: "0903.0340"
    doi: null
    card: "019-physics-topology-logic-and-computation-a-rosetta-stone"
  - title: "Categories for the Working Mathematician (2nd ed.)"
    url: "https://doi.org/10.1007/978-1-4757-4721-8"
    year: 1998
    arxiv: null
    doi: null
    card: "030-categories-for-the-working-mathematician-2nd-ed"
  - title: "Finite Combinatory Processes—Formulation I"
    url: "https://doi.org/10.2307/2269326"
    year: 1936
    arxiv: null
    doi: null
    card: "783-finite-combinatory-processes-formulation-i"
---

# Clones, closed categories, and combinatory logic

## One-sentence takeaway

Extensional SK-clones are sound and complete for combinatory logic (and simply-typed λ without products), and they are equivalent to SK-categories — so that calculus is the internal language of a mild variant of closed categories.

## Why it matters here

Why you might love this: combinatory logic, multicategories, and closed categories in one paper, with the punchline that SK-categories sit to cartesian monoidal categories as closed categories sit to monoidal ones. For ano this is a semantics of *point-free* executable notation — Iverson combinators as a clone, not as a λ-term with dummy binders. It is the missing categorical twin of "notation as a tool of thought."

## Key ideas

- Universal properties stated for multicategories recover products, tensors, and exponentials without pretending everything is binary.
- Extensional SK-clones model combinatory logic with extensional weak equality and STLC without products.
- SK-clones ≃ SK-categories; STLC without products is the internal language of SK-categories.
- Corollary: SK-categories : cartesian monoidal categories :: closed categories : monoidal categories.
- Multi-ary presentation recovers both the syntactic category and its interpretation.

## Caveats

- FoSSaCS 2024 paper (slightly extended arXiv version); not a tutorial — expect clone/multicategory fluency.
- "Without products" is load-bearing; do not smuggle cartesian closedness back in.
- No implementation; this is semantics, not a compiler pass.

## Links

- arXiv: [2405.01675](https://arxiv.org/abs/2405.01675)
- DOI: [10.1007/978-3-031-57231-9_8](https://doi.org/10.1007/978-3-031-57231-9_8)
- PDF: https://arxiv.org/pdf/2405.01675
