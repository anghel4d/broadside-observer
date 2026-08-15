---
title: "Neural Circuit Diagrams: Robust Diagrams for the Communication, Implementation, and Analysis of Deep Learning Architectures"
authors:
  - "Vincent Abbott"
year: 2024
venue: "TMLR"
arxiv: "2402.05424"
doi: null
source: "https://arxiv.org/abs/2402.05424"
topics:
  - "neural-circuit-diagrams"
  - "string-diagrams"
  - "deep-learning"
seed_rank: 934
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: categorical-deep-learning
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
  - title: "A Survey of Graphical Languages for Monoidal Categories"
    url: "https://arxiv.org/abs/0908.3347"
    year: 2010
    arxiv: "0908.3347"
    doi: "10.1007/978-3-642-12821-9_4"
see:
  - "013-attention-is-all-you-need"
  - "117-a-survey-of-graphical-languages-for-monoidal-categories"
---

# Neural Circuit Diagrams: Robust Diagrams for the Communication, Implementation, and Analysis of Deep Learning Architectures

## One-sentence takeaway

Neural circuit diagrams are a string-diagram language that tracks tensor axes, broadcasting, and the parallel structure of linear maps, so an architecture picture is also an implementation spec.

## Why it matters here

This is the diagram IR that Weaves/Wires/Morphisms later compiles. For ano: a picture that is also a term — the same grain as a typed array surface that must show how a scan or attention head actually rearranges data.

## Key ideas

- Replaces the usual mix of index-soup linear algebra and ad-hoc boxes with a compositional graphical language whose structure matches code.
- Axes stay visible while data can still be freely arranged; broadcasting of linear operations is drawn rather than left implicit.
- Worked architectures: transformer, convolution and its extensions, residual nets, U-Net, vision transformer.
- A Jupyter notebook is offered as evidence that diagrams correspond closely to implementations.
- Backprop is redrawn in the same language to read time/space complexity off the diagram.
- TMLR 2024; arXiv:2402.05424; OpenReview `RyZB4qXEgt`. Ancestor of Abbott–Zardini 2025 (napkin) and 2026 (weaves / pyncd / tsncd).

## Caveats

## Links

- arXiv: [2402.05424](https://arxiv.org/abs/2402.05424)
- PDF: https://arxiv.org/pdf/2402.05424
- OpenReview: https://openreview.net/forum?id=RyZB4qXEgt
