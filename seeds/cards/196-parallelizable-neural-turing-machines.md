---
title: "Parallelizable Neural Turing Machines"
authors:
  - "Gabriel Faria"
  - "Arnaldo Candido Junior"
year: 2026
venue: "arXiv:cs.NE"
arxiv: "2602.18508"
doi: null
source: "https://arxiv.org/abs/2602.18508"
topics:
  - memory-foundations
seed_rank: 196
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Parallelizable Neural Turing Machines

## One-sentence takeaway

We introduce a parallelizable simplification of Neural Turing Machine (NTM), referred to as P-NTM, which redesigns the core operations of the original architecture to enable efficient scan-based parallel execution.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state (Parallelizable Neural Turing Machines)

## Key ideas

- We introduce a parallelizable simplification of Neural Turing Machine (NTM), referred to as P-NTM, which redesigns the core operations of the original architecture to enable efficient scan-based parallel execution.
- We evaluate the proposed architecture on a synthetic benchmark of algorithmic problems involving state tracking, memorization, and basic arithmetic, solved via autoregressive decoding.
- We compare it against a revisited stable implementation of the standard NTM, as well as conventional recurrent and attention-based architectures.
- Results show that, despite its simplifications, the proposed model attains length generalization performance comparable to the original, learning to solve all problems, including unseen sequence lengths, with perfect accuracy.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2602.18508](https://arxiv.org/abs/2602.18508)
- URL: https://arxiv.org/abs/2602.18508
