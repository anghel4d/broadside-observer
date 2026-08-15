---
title: The Calculus of Dependent Lambda Eliminations (Cedille)
authors:
- Aaron Stump
year: 2017
venue: Journal of Functional Programming
arxiv: null
doi: 10.1017/S0956796817000053
source: "https://doi.org/10.1017/S0956796817000053"
topics:
- cedille
- dependent-types
- type-safety
seed_rank: 911
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  []
---

# The Calculus of Dependent Lambda Eliminations (Cedille)

## One-sentence takeaway

CDLE is a Curry-style dependent type theory with no primitive datatypes: induction and large eliminations are recovered from lambda encodings via constructor-constrained recursive types and a lifting operation, and a lattice-theoretic semantics proves consistency.

## Why it matters here

A compact dependent core is the foil to Coq/Agda when Anoptic is choosing how much type theory ano should carry. Cedille shows you can keep a tiny trusted kernel and still do inductive programming — useful when the alternative is dragging a full CIC into an engine toolchain.

## Key ideas

- Extrinsic/Curry-style: terms are untyped lambda terms; types classify rather than decorate.
- Constructor-constrained recursive types plus a lift from simply typed terms to the type level give induction and large eliminations over Church-style encodings.
- Implicit products, dependent intersections, and primitive equality are the extra typing constructs beyond CoC.
- Logical consistency is proved with a lattice-theoretic denotational semantics for types.
- Examples were checked in a Cedille prototype; the later technical report “Syntax and Semantics of Cedille” (arXiv:1806.04709) is the classification-rules companion, not this paper. The previously listed arXiv:1803.05021 is an unrelated physics paper.

## Caveats

## Links

- DOI: [10.1017/S0956796817000053](https://doi.org/10.1017/S0956796817000053)
- Companion: https://arxiv.org/abs/1806.04709
- Cedille: https://cedille.github.io/
