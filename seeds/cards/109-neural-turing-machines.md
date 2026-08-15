---
title: "Neural Turing Machines"
authors:
  - "Alex Graves"
  - "Greg Wayne"
  - "Ivo Danihelka"
year: 2014
venue: "arXiv:cs.NE"
arxiv: "1410.5401"
doi: null
source: "https://arxiv.org/abs/1410.5401"
topics:
  - memory-foundations
seed_rank: 109
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Speech recognition with deep recurrent neural networks"
    url: "https://doi.org/10.1109/icassp.2013.6638947"
    year: 2013
    arxiv: null
    doi: "10.1109/icassp.2013.6638947"
  - title: "The importance of mixed selectivity in complex cognitive tasks"
    url: "https://doi.org/10.1038/nature12160"
    year: 2013
    arxiv: null
    doi: "10.1038/nature12160"
  - title: "Neural Machine Translation by Jointly Learning to Align and Translate"
    url: "https://arxiv.org/abs/1409.0473"
    year: 2014
    arxiv: "1409.0473"
    doi: null
  - title: "Sequence to Sequence Learning with Neural Networks"
    url: "https://arxiv.org/abs/1409.3215"
    year: 2014
    arxiv: "1409.3215"
    doi: null
  - title: "Generating Sequences With Recurrent Neural Networks"
    url: "https://arxiv.org/abs/1308.0850"
    year: 2013
    arxiv: "1308.0850"
    doi: null
  - title: "Hyperdimensional Computing: An Introduction to Computing in Distributed Representation with High-Dimensional Random Vectors"
    url: "https://doi.org/10.1007/s12559-009-9009-8"
    year: 2009
    arxiv: null
    doi: "10.1007/s12559-009-9009-8"
  - title: "Long Short-Term Memory"
    url: "https://doi.org/10.1162/neco.1997.9.8.1735"
    year: 1997
    arxiv: null
    doi: "10.1162/neco.1997.9.8.1735"
  - title: "Towards End-To-End Speech Recognition with Recurrent Neural Networks"
    url: "https://proceedings.mlr.press/v32/graves14.html"
    year: 2014
    arxiv: null
    doi: null
see: []
---

# Neural Turing Machines

## One-sentence takeaway

An NTM is a neural controller plus an N×M memory matrix whose read/write heads are fully differentiable, so the system can be trained by gradient descent to implement copy, sort, and associative recall.

## Why it matters here

This is the cleanest picture of "controller talks to an addressable store" that Broadside agent memory can steal: content addressing when you have a key, location addressing when the name of a slot is what matters, erase-then-add writes so updates do not clobber unused fields.

## Key ideas

- Read is a convex combination r_t = Σ w_t(i) M_t(i). Write is LSTM-style erase then add: M̃(i) = M(i) ⊙ (1 − w(i) e), then M(i) ← M̃(i) + w(i) a. Every head emits a normalised weighting over rows.
- Content addressing: cosine similarity of a key k_t against each row, sharpened by β_t, softmaxed. Location addressing: interpolate with the previous weighting via gate g_t, rotate by a shift kernel s_t, then sharpen with γ_t. Both mechanisms run on every head.
- The "blur" is the point: a head can focus on one row or smear across many, which keeps the whole circuit differentiable and biases storage toward sparse non-interfering writes.
- Tasks: copy a random sequence, repeat-copy, associative recall of an item given a cue, dynamic n-grams, priority sort. LSTM controllers generally beat feed-forward ones; location heads are what let iteration generalise past training lengths.
- Analogies the authors actually draw: Turing / von Neumann (addressable tape), working memory (central executive + buffer), and the variable-binding critique of connectionism (Fodor & Pylyshyn).

## Caveats

## Links

- arXiv: [1410.5401](https://arxiv.org/abs/1410.5401)
- PDF: https://arxiv.org/pdf/1410.5401
- URL: https://arxiv.org/abs/1410.5401
