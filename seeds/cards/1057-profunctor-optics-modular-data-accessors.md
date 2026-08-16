---
title: "Profunctor Optics: Modular Data Accessors"
authors: ["Matthew Pickering", "Jeremy Gibbons", "Nicolas Wu"]
year: 2017
venue: "The Art, Science, and Engineering of Programming"
arxiv: "1703.10857"
doi: "10.22152/programming-journal.org/2017/1/7"
source: "https://arxiv.org/abs/1703.10857"
topics: [curiosity]
seed_rank: 1057
seed_batch: "curiosity-2026-08-17"
reviewed: "2026-08-17"
pool: "languages"
relevance_score: 8
lineage: optics
cites:
  - title: "Deep Learning with Parametric Lenses"
    url: "https://arxiv.org/abs/2404.00408"
    year: 2024
    arxiv: "2404.00408"
    doi: null
  - title: "Categorical Foundations of Gradient-Based Learning"
    url: "https://arxiv.org/abs/2103.01931"
    year: 2022
    arxiv: "2103.01931"
    doi: "10.1007/978-3-030-99336-8_1"
  - title: "Theorems for Free!"
    url: "https://doi.org/10.1145/99370.99404"
    year: 1989
    arxiv: null
    doi: "10.1145/99370.99404"
  - title: "Categories of Optics"
    url: "https://arxiv.org/abs/1809.00738"
    year: 2018
    arxiv: "1809.00738"
    doi: null
see:
  - "941-deep-learning-with-parametric-lenses"
  - "940-categorical-foundations-of-gradient-based-learning"
  - "38-theorems-for-free"
  - "99-compiling-to-categories"
  - "926-the-semantics-of-rank-polymorphism"
---

# Profunctor Optics: Modular Data Accessors

## One-sentence takeaway

Lenses, prisms, and traversals are all the same thing once you write them as functions \(\mathrm{P}\,a\,b\to\mathrm{P}\,s\,t\) natural in a profunctor \(\mathrm{P}\); composition of accessors is then ordinary function composition.

## Why it matters here

Why you might love this: “Anoptic” is already a modular-access word. This paper is the Haskell-facing proof that getters/setters stop being a pair of methods and become a first-class optic you compose without writing the walk. Bridge: parametric lenses (card 941) use the same profunctor/Tambara structure as the learning story; rank-polymorphic array updates in ano are traversals waiting for this encoding. Theorems-for-free (card 38) is why the representation theorem goes through — parametricity says the polymorphic accessor *is* the concrete getter/setter.

## Key ideas

- Concrete optics: a lens is a getter/setter pair, a prism a match/build pair, a traversal a many-foci walk. Individually easy; the problem is *composition* across heterogeneous layers (record-of-sum-of-containers) without a tower of boilerplate.
- Profunctor: a bifunctor \(\mathrm{P}:\mathcal{C}^{\mathrm{op}}\times\mathcal{C}\to\mathbf{Set}\) with dimap. Different optic classes are different profunctor constraints (Cartesian, cocartesian, closed, Traversing). An optic is then a function \(\forall p.\,\mathrm{P}\,a\,b\to\mathrm{P}\,s\,t\).
- Representation theorem: the polymorphic profunctor encoding is equivalent to the concrete encoding (proved; the paper is a literate program). Van Laarhoven lenses sit in the middle as the \(\mathrm{Functor}\)-constrained special case.
- Language requirements are modest: higher-order functions, parametrized types, some interface/implementation split. Haskell is the vehicle; the same construction ports to Scala/Java generics.

## Caveats

- This is the 2017 programming-journal paper, not Milewski’s blog nor Riley’s “Categories of Optics” (1809.00738, cited). Subsequent “profunctor optics, a categorical update” (2001.07488) tightens the category theory — inspected, not reminted.
- Type-error messages for a failed optic constraint are famously opaque; the modularity win is at the call site, not in inference UX.
- Not a graphics optic (PGA sandwiches, cameras). The name collision with Anoptic is the joke, not a unified algebra.

## Links

- arXiv: [1703.10857](https://arxiv.org/abs/1703.10857)
- Journal: [Programming 1(2) article 7](https://doi.org/10.22152/programming-journal.org/2017/1/7)
