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
