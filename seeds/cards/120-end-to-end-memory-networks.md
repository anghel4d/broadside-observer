---
title: "End-To-End Memory Networks"
authors:
  - "Sainbayar Sukhbaatar"
  - "Arthur Szlam"
  - "Jason Weston"
  - "Rob Fergus"
year: 2015
venue: "NeurIPS"
arxiv: "1503.08895"
doi: null
source: "https://arxiv.org/abs/1503.08895"
topics:
  - agent-memory
  - memory-foundations
seed_rank: 120
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Neural Turing Machines"
    url: "http://arxiv.org/abs/1410.5401"
    year: 2014
    arxiv: "1410.5401"
    doi: "10.48550/arxiv.1410.5401"
    card: "125-neural-turing-machines"
  - title: "Empirical Evaluation of Gated Recurrent Neural Networks on Sequence Modeling"
    url: "http://arxiv.org/abs/1412.3555"
    year: 2014
    arxiv: "1412.3555"
    doi: "10.48550/arxiv.1412.3555"
    card: null
  - title: "Show, Attend and Tell: Neural Image Caption Generation with Visual Attention"
    url: "http://arxiv.org/abs/1502.03044"
    year: 2015
    arxiv: "1502.03044"
    doi: "10.48550/arxiv.1502.03044"
    card: null
  - title: "Recurrent Neural Network Regularization"
    url: "http://arxiv.org/abs/1409.2329"
    year: 2014
    arxiv: "1409.2329"
    doi: "10.48550/arxiv.1409.2329"
    card: null
  - title: "LSTM neural networks for language modeling"
    url: "https://doi.org/10.21437/interspeech.2012-65"
    year: 2012
    arxiv: null
    doi: "10.21437/interspeech.2012-65"
    card: null
  - title: "DRAW: A Recurrent Neural Network For Image Generation"
    url: "http://arxiv.org/abs/1502.04623"
    year: 2015
    arxiv: "1502.04623"
    doi: "10.48550/arxiv.1502.04623"
    card: null
  - title: "Generating Sequences With Recurrent Neural Networks"
    url: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.TIME.2019.10"
    year: 2013
    arxiv: null
    doi: "10.4230/lipics.fun.2016.3"
    card: null
  - title: "Towards AI-Complete Question Answering: A Set of Prerequisite Toy Tasks"
    url: "http://arxiv.org/abs/1502.05698"
    year: 2015
    arxiv: "1502.05698"
    doi: "10.48550/arxiv.1502.05698"
    card: null
  - title: "10.1162/153244303322533223"
    url: "https://doi.org/10.1162/153244303322533223"
    year: 2000
    arxiv: null
    doi: "10.1162/153244303322533223"
    card: null
  - title: "Long Short-Term Memory"
    url: "https://doi.org/10.1162/neco.1997.9.8.1735"
    year: 1997
    arxiv: null
    doi: "10.1162/neco.1997.9.8.1735"
    card: null
  - title: "Building a Large Annotated Corpus of English: The Penn Treebank"
    url: "https://doi.org/10.21236/ada273556"
    year: 1993
    arxiv: null
    doi: "10.21236/ada273556"
    card: null
  - title: "Learning Longer Memory in Recurrent Neural Networks"
    url: "http://arxiv.org/abs/1412.7753"
    year: 2014
    arxiv: "1412.7753"
    doi: "10.48550/arxiv.1412.7753"
    card: null
---

# End-To-End Memory Networks

## One-sentence takeaway

We introduce a neural network with a recurrent attention model over a possibly large external memory.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state (End-To-End Memory Networks)

## Key ideas

- We introduce a neural network with a recurrent attention model over a possibly large external memory.
- The architecture is a form of Memory Network (Weston et al., 2015) but unlike the model in that work, it is trained end-to-end, and hence requires significantly less supervision during training, making it more generally applicable in realistic settings.
- It can also be seen as an extension of RNNsearch to the case where multiple computational steps (hops) are performed per output symbol.
- The flexibility of the model allows us to apply it to tasks as diverse as (synthetic) question answering and to language modeling.
- For the former our approach is competitive with Memory Networks, but with less supervision.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [1503.08895](https://arxiv.org/abs/1503.08895)
- URL: https://arxiv.org/abs/1503.08895
