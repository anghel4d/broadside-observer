---
title: "Backprop as Functor: A compositional perspective on supervised learning"
authors:
  - "Brendan Fong"
  - "David I. Spivak"
  - "Rémy Tuyéras"
year: 2019
venue: "LICS"
arxiv: "1711.10455"
doi: "10.1109/LICS.2019.8785665"
source: "https://arxiv.org/abs/1711.10455"
topics:
  - "para"
  - "backprop"
  - "category-theory"
seed_rank: 943
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: categorical-deep-learning
cites:
  - title: "The Geometry of Tensor Calculus, I"
    url: "https://doi.org/10.1016/0001-8708(91)90003-P"
    year: 1991
    doi: "10.1016/0001-8708(91)90003-P"
see:
  - "948-the-geometry-of-tensor-calculus-i"
---

# Backprop as Functor: A compositional perspective on supervised learning

## One-sentence takeaway

Supervised learning is composition of parameter-update rules; gradient descent is a monoidal functor from parametrised maps (Para) into that category — the origin of Para in the Weaves stack.

## Why it matters here

Para is how Weaves hides weights. This is the LICS theorem behind that wrapper: learning becomes structure, not a loop written next to the model.

## Key ideas

- LICS 2019; arXiv:1711.10455; DOI `10.1109/LICS.2019.8785665`.
- Objects are parametrised maps $A \to B$ with parameter space $P$; composition puts parameters in parallel.
- Backprop/SGD is a monoidal functor, so the update rule composes when the model does.
- Foundational and small: fixed step size, conditions on the error function. Not a DL-architecture language — that is cards 940/941.

## Caveats

## Links

- arXiv: [1711.10455](https://arxiv.org/abs/1711.10455)
- PDF: https://arxiv.org/pdf/1711.10455
- DOI: [10.1109/LICS.2019.8785665](https://doi.org/10.1109/LICS.2019.8785665)
