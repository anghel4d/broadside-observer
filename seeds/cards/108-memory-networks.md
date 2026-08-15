---
title: "Memory Networks"
authors:
  - "Jason Weston"
  - "Sumit Chopra"
  - "Antoine Bordes"
year: 2015
venue: "ICLR"
arxiv: "1410.3916"
doi: null
source: "https://arxiv.org/abs/1410.3916"
topics:
  - agent-memory
  - memory-foundations
seed_rank: 108
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Long Short-Term Memory"
    url: "https://doi.org/10.1162/neco.1997.9.8.1735"
    year: 1997
    arxiv: null
    doi: "10.1162/neco.1997.9.8.1735"
  - title: "Recurrent neural network based language model"
    url: "https://www.isca-archive.org/interspeech_2010/mikolov10_interspeech.html"
    year: 2010
    arxiv: null
    doi: null
  - title: "Learning to Execute"
    url: "https://arxiv.org/abs/1410.4615"
    year: 2014
    arxiv: "1410.4615"
    doi: null
see: []
---

# Memory Networks

## One-sentence takeaway

A Memory Network is four learned maps — I (input features), G (write / generalize), O (read / infer), R (response) — jointly trained against a long-term memory that is a real array of slots, not a compressed hidden state.

## Why it matters here

This is the I/G/O/R split Broadside agent memory should copy: facts live in addressable slots (ECS / provenance store), inference scores which slots support the query, and the response decoder never has to cram the whole history into one RNN vector.

## Key ideas

- I(x) embeds the incoming sentence (or word stream). Simplest G writes I(x) into the next empty slot; fancier G can rewrite earlier memories or hash into topic buckets when the store is huge.
- O finds k supporting memories by embedding match. For k=2 the second lookup is scored against both the question and the first support — "Joe left the milk" then "Joe travelled to the office" to answer "Where is the milk now?".
- R either returns the last retrieved sentence, ranks a single vocabulary word, or runs an RNN conditioned on [x, m_o1, m_o2]. Training is fully supervised: supporting sentences are labeled, and a margin ranking loss trains s_O and s_R.
- Write-time features (relative age of two candidate slots) are required for story order. A learned segmenter can split a raw word stream into statements before they are stored.
- Evaluated on large-scale QA and a simulated-world toy task that chains verb intensions ("picked up" / "left"). MemNN k=2 + time features crush RNN/LSTM baselines on the harder actor+object stories.

## Caveats

## Links

- arXiv: [1410.3916](https://arxiv.org/abs/1410.3916)
- PDF: https://arxiv.org/pdf/1410.3916
- URL: https://arxiv.org/abs/1410.3916
