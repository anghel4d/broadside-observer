---
title: "E-mem: Multi-agent based Episodic Context Reconstruction for LLM Agent Memory"
authors:
  - "Kaixiang Wang"
  - "Yidan Lin"
  - "Jiong Lou"
  - "Zhaojiacheng Zhou"
  - "Bunyod Suvonov"
  - "Jie Li"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2601.21714"
doi: null
source: "https://arxiv.org/abs/2601.21714"
topics:
  - provenance
  - rag
  - agent-memory
  - multi-agent
  - agent-architecture
seed_rank: 165
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "A Survey of LLM $	imes$ DATA"
    url: "https://arxiv.org/abs/2505.18458"
    year: 2025
    arxiv: "2505.18458"
    doi: null
  - title: "UAV-CodeAgents: Scalable UAV Mission Planning via Multi-Agent ReAct and Vision-Language Reasoning"
    url: "https://arxiv.org/abs/2505.07236"
    year: 2025
    arxiv: "2505.07236"
    doi: null
  - title: "Mobile-Agent-v3.5: Multi-platform Fundamental GUI Agents"
    url: "https://arxiv.org/abs/2602.16855"
    year: 2026
    arxiv: "2602.16855"
    doi: null
---

# E-mem: Multi-agent based Episodic Context Reconstruction for LLM Agent Memory

## One-sentence takeaway

E-mem refuses to compress long agent history into embeddings or graphs up front; assistant agents keep uncompressed episodic segments and locally reason over them before a master agent aggregates evidence.

## Why it matters here

Broadside provenance wants this split: do not smash a digest trail into a vector on write. Keep the episode, activate the segment, extract evidence, then cite. That is also how an ECS world should page history without destroying it.

## Key ideas

- Preprocessing memory into embeddings or graphs is treated as destructive de-contextualization that severs sequential dependencies needed for System-2 reasoning.
- A heterogeneous hierarchy has several assistant agents holding uncompressed contexts and a master agent doing global planning.
- Retrieval is not passive kNN: an assistant reasons inside an activated segment and returns context-aware evidence, then the master aggregates.
- The design is explicitly analogized to biological engrams: storage stays rich, activation is local, readout is constructive.
- On LoCoMo, E-mem reports over 54% F1, 7.75% above GAM, while cutting token cost by more than 70%.

## Caveats

## Links

- arXiv: [2601.21714](https://arxiv.org/abs/2601.21714)
