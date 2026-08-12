---
title: "Mixtral of Experts"
authors:
  - "Albert Q. Jiang"
  - "Alexandre Sablayrolles"
  - "Antoine Roux"
  - "Arthur Mensch"
  - "Blanche Savary"
  - "Chris Bamford"
  - "Devendra Singh Chaplot"
  - "Diego de las Casas"
  - "Emma Bou Hanna"
  - "Florian Bressand"
  - "Gianna Lengyel"
  - "Guillaume Bour"
  - "Guillaume Lample"
  - "Lélio Renard Lavaud"
  - "Lucile Saulnier"
  - "Marie-Anne Lachaux"
  - "Pierre Stock"
  - "Sandeep Subramanian"
  - "Sophia Yang"
  - "Szymon Antoniak"
  - "Teven Le Scao"
  - "Théophile Gervet"
  - "Thibaut Lavril"
  - "Thomas Wang"
  - "Timothée Lacroix"
  - "William El Sayed"
year: 2024
venue: "arXiv:cs.LG"
arxiv: "2401.04088"
doi: null
source: "https://arxiv.org/abs/2401.04088"
topics:
  - moe
  - serving
seed_rank: 246
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Mixtral of Experts

## One-sentence takeaway

We introduce Mixtral 8x7B, a Sparse Mixture of Experts (SMoE) language model.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Mixtral of Experts)

## Key ideas

- We introduce Mixtral 8x7B, a Sparse Mixture of Experts (SMoE) language model.
- Mixtral has the same architecture as Mistral 7B, with the difference that each layer is composed of 8 feedforward blocks (i.e.
- For every token, at each layer, a router network selects two experts to process the current state and combine their outputs.
- Even though each token only sees two experts, the selected experts can be different at each timestep.
- As a result, each token has access to 47B parameters, but only uses 13B active parameters during inference.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2401.04088](https://arxiv.org/abs/2401.04088)
- URL: https://arxiv.org/abs/2401.04088
