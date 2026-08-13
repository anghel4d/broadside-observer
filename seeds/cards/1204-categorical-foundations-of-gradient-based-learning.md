---
title: "Categorical Foundations of Gradient-Based Learning"
authors:
  - "G. S. H. Cruttwell"
  - "Bruno Gavranović"
  - "Neil Ghani"
  - "Paul Wilson"
  - "Fabio Zanasi"
year: 2022
venue: "ESOP"
arxiv: "2103.01931"
doi: null
source: "https://arxiv.org/abs/2103.01931"
topics:
  - "lenses"
  - "reverse-derivatives"
  - "category-theory"
  - "backprop"
seed_rank: 1204
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: categorical-deep-learning
cites:
  - title: "Backprop as Functor: A compositional perspective on supervised learning"
    url: "https://arxiv.org/abs/1711.10455"
    year: 2019
    arxiv: "1711.10455"
    card: "1207-backprop-as-functor-compositional-supervised-learning"
---

# Categorical Foundations of Gradient-Based Learning

## One-sentence takeaway

Gradient descent as lenses + parametric maps + reverse-derivative categories — ADAM/AdaGrad/Nesterov and MSE/softmax as instances of one semantics, including Boolean circuits.

## Why it matters here

The missing learning half of Weaves (which defers differentiability). Para/lenses are how weights and updates compose.

## Key ideas

- ESOP 2022; arXiv:2103.01931.
- Unifies optimizers and losses; works beyond smooth maps (discrete/Boolean).
- Python implementation accompanies the semantics.

## Caveats

- About learning dynamics, not architecture broadcasting. Pair with Parametric Lenses 2024 (extended).

## Links

- arXiv: [2103.01931](https://arxiv.org/abs/2103.01931)
