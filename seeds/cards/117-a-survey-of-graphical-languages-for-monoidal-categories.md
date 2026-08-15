---
title: "A Survey of Graphical Languages for Monoidal Categories"
authors:
  - "Peter Selinger"
year: 2011
venue: "New Structures for Physics, Lecture Notes in Physics 813"
arxiv: "0908.3347"
doi: "10.1007/978-3-642-12821-9_4"
source: "https://arxiv.org/abs/0908.3347"
topics:
  - category-theory
  - monoidal
  - string-diagrams
seed_rank: 117
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Linear logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
  - title: "Braided Tensor Categories"
    url: "https://doi.org/10.1006/aima.1993.1055"
    year: 1993
    arxiv: null
    doi: "10.1006/aima.1993.1055"
  - title: "Categories for the Working Mathematician"
    url: "https://doi.org/10.1007/978-1-4612-9839-7"
    year: 1971
    arxiv: null
    doi: "10.1007/978-1-4612-9839-7"
  - title: "The geometry of tensor calculus, I"
    url: "https://doi.org/10.1016/0001-8708(91)90003-p"
    year: 1991
    arxiv: null
    doi: "10.1016/0001-8708(91)90003-p"
  - title: "Traced monoidal categories"
    url: "https://doi.org/10.1017/s0305004100074338"
    year: 1996
    arxiv: null
    doi: "10.1017/s0305004100074338"
  - title: "Coherence for compact closed categories"
    url: "https://doi.org/10.1016/0022-4049(80)90101-2"
    year: 1980
    arxiv: null
    doi: "10.1016/0022-4049(80)90101-2"
  - title: "A categorical semantics of quantum protocols"
    url: "https://doi.org/10.1109/lics.2004.1319636"
    year: 2004
    arxiv: null
    doi: "10.1109/lics.2004.1319636"
  - title: "Dagger Compact Closed Categories and Completely Positive Maps"
    url: "https://doi.org/10.1016/j.entcs.2006.12.018"
    year: 2007
    arxiv: null
    doi: "10.1016/j.entcs.2006.12.018"
see:
  - "040-linear-logic"
  - "029-categories-for-the-working-mathematician-2nd-ed"
  - "948-the-geometry-of-tensor-calculus-i"
---

# A Survey of Graphical Languages for Monoidal Categories

## One-sentence takeaway

String diagrams are a coherence theorem: two morphisms are equal in a given flavour of monoidal category exactly when their diagrams are isotopic under the moves that flavour allows (planar, braided, compact, dagger, traced, …).

## Why it matters here

Anoptic job graphs and ano dataflow are already string diagrams; this survey is the dictionary that says which extra wires (cups/caps, twists, loops, daggers) you are licensed to rewrite when the category is compact, traced, or dagger.

## Key ideas

- Walks from Penrose's index-pairing pictures through Joyal–Street geometry of tensor calculus to a uniform language: wires are objects, boxes are morphisms, stacking is $\otimes$, connecting is $\circ$.
- Taxonomy (and synonym table): rigid = autonomous, sovereign = pivotal, ribbon = tortile; "compact closed" is the common name for what systematically would be called symmetric autonomous.
- Each extra axiom is a diagram move: braidings are crossings, duals are cups and caps, traces are loops, daggers are vertical reflection. Coherence is cited where proved and flagged as conjecture or special-case where not.
- Adds the missing rungs the literature skipped — spacial monoidal, planar/braided traced — so the summary chart at the end is a single lookup table rather than a pile of incompatible papers.
- Linear logic, compact closed quantum protocols, and dagger-compact completely-positive maps sit in the same diagrammatic family; the survey is the map, not a new calculus.

## Caveats

## Links

- arXiv: [0908.3347](https://arxiv.org/abs/0908.3347)
- DOI: [10.1007/978-3-642-12821-9_4](https://doi.org/10.1007/978-3-642-12821-9_4)
