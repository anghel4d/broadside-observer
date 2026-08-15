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
seed_rank: 104
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Neural Turing Machines"
    url: "https://arxiv.org/abs/1410.5401"
    year: 2014
    arxiv: "1410.5401"
    doi: null
  - title: "Memory Networks"
    url: "https://arxiv.org/abs/1410.3916"
    year: 2015
    arxiv: "1410.3916"
    doi: null
  - title: "Empirical Evaluation of Gated Recurrent Neural Networks on Sequence Modeling"
    url: "https://arxiv.org/abs/1412.3555"
    year: 2014
    arxiv: "1412.3555"
    doi: null
  - title: "Show, Attend and Tell: Neural Image Caption Generation with Visual Attention"
    url: "https://arxiv.org/abs/1502.03044"
    year: 2015
    arxiv: "1502.03044"
    doi: null
  - title: "Recurrent Neural Network Regularization"
    url: "https://arxiv.org/abs/1409.2329"
    year: 2014
    arxiv: "1409.2329"
    doi: null
  - title: "LSTM neural networks for language modeling"
    url: "https://doi.org/10.21437/interspeech.2012-65"
    year: 2012
    arxiv: null
    doi: "10.21437/interspeech.2012-65"
  - title: "DRAW: A Recurrent Neural Network For Image Generation"
    url: "https://arxiv.org/abs/1502.04623"
    year: 2015
    arxiv: "1502.04623"
    doi: null
  - title: "Generating Sequences With Recurrent Neural Networks"
    url: "https://arxiv.org/abs/1308.0850"
    year: 2013
    arxiv: "1308.0850"
    doi: null
  - title: "Towards AI-Complete Question Answering: A Set of Prerequisite Toy Tasks"
    url: "https://arxiv.org/abs/1502.05698"
    year: 2015
    arxiv: "1502.05698"
    doi: null
  - title: "A Neural Probabilistic Language Model"
    url: "https://doi.org/10.1162/153244303322533223"
    year: 2003
    arxiv: null
    doi: "10.1162/153244303322533223"
  - title: "Long Short-Term Memory"
    url: "https://doi.org/10.1162/neco.1997.9.8.1735"
    year: 1997
    arxiv: null
    doi: "10.1162/neco.1997.9.8.1735"
  - title: "Building a Large Annotated Corpus of English: The Penn Treebank"
    url: "https://doi.org/10.21236/ada273556"
    year: 1993
    arxiv: null
    doi: "10.21236/ada273556"
  - title: "Learning Longer Memory in Recurrent Neural Networks"
    url: "https://arxiv.org/abs/1412.7753"
    year: 2014
    arxiv: "1412.7753"
    doi: null
see:
  - "109-neural-turing-machines"
---

# End-To-End Memory Networks

## One-sentence takeaway

A recurrent attention hop over an external memory turns Weston et al.'s Memory Network into a model you can train from input–output pairs, without labeling which sentences are supporting facts.

## Why it matters here

Broadside / GRID COMMAND agents that page facts out of ECS or a provenance store can learn which slots to read; you do not want to supervise every hop the way the original MemNN required.

## Key ideas

- One hop: embed memories with A and the query with B, attend with p_i = softmax(uᵀ m_i), read o = Σ p_i c_i, then predict softmax(W(o + u)). Softmax replaces MemNN's hard argmax, so gradients flow through the memory.
- K hops stack as u^{k+1} = u^k + o^k. Adjacent tying sets A^{k+1} = C^k (and Wᵀ = C^K, B = A¹); layer-wise tying shares A,C across hops and inserts a learned map H, which is the RNN-like view.
- On the 20 bAbI tasks the 3-hop model is competitive with fully supervised MemNN, but the supporting subset is no longer given at train time.
- The same architecture is a language model on Penn TreeBank and Text8, comparable to RNN/LSTM baselines; extra hops are the ingredient that moves the needle on both QA and LM.
- Position encoding (per-word scale of the embedding) restores word order that bag-of-words destroys; a learned temporal matrix T_A(i) is added to m_i so "where is X now" can see story order.

## Caveats

## Links

- arXiv: [1503.08895](https://arxiv.org/abs/1503.08895)
- PDF: https://arxiv.org/pdf/1503.08895
- URL: https://arxiv.org/abs/1503.08895
