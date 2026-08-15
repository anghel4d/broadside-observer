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
doi: "10.1007/978-3-030-99336-8_1"
source: "https://arxiv.org/abs/2103.01931"
topics:
  - "lenses"
  - "reverse-derivatives"
  - "category-theory"
  - "backprop"
seed_rank: 940
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
see:
  - "943-backprop-as-functor-compositional-supervised-learning"
---

# Categorical Foundations of Gradient-Based Learning

## One-sentence takeaway

Gradient descent is lenses plus parametric maps plus reverse-derivative categories, so ADAM/AdaGrad/Nesterov and MSE/softmax become instances of one semantics — including on Boolean circuits.

## Why it matters here

The missing learning half of Weaves, which explicitly defers differentiability. Para/lenses are how weights and updates compose; this is the ESOP theorem.

## Key ideas

- ESOP 2022, LNCS 13240, pp. 1–28; arXiv:2103.01931; DOI `10.1007/978-3-030-99336-8_1`.
- Unifies optimizers and losses in one reverse-derivative / lens language.
- Works beyond smooth maps: discrete and Boolean circuits are in scope.
- A Python implementation accompanies the semantics.
- Extended by the 2024 parametric-lenses paper (card 941).

## Caveats

## Links

- arXiv: [2103.01931](https://arxiv.org/abs/2103.01931)
- PDF: https://arxiv.org/pdf/2103.01931
- DOI: [10.1007/978-3-030-99336-8_1](https://doi.org/10.1007/978-3-030-99336-8_1)
