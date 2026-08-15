---
title: "LLM-PySC2: Starcraft II learning environment for Large Language Models"
authors:
  - "Zongyuan Li"
  - "Yanan Ni"
  - "Runnan Qi"
  - "Lumin Jiang"
  - "Chang Lu"
  - "Xiaojie Xu"
  - "Xiangbei Liu"
  - "Penghui Li"
  - "Yunzheng Guo"
  - "Zhe Ma"
  - "Huanyu Li"
  - "Hui Wu"
  - "Xian Guo"
  - "Kuihua Huang"
  - "Xuebo Zhang"
year: 2024
venue: "arXiv:cs.AI"
arxiv: "2411.05348"
doi: null
source: "https://arxiv.org/abs/2411.05348"
topics:
  - rts-bots
  - nl-commands
  - multi-agent
seed_rank: 190
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "F.A.C.U.L.: Language-Based Interaction with AI Companions in Gaming"
    url: "https://doi.org/10.1609/aaai.v39i28.38842"
    year: 2025
    arxiv: null
    doi: "10.1609/aaai.v39i28.38842"
  - title: "Large Language Models Play StarCraft II: Benchmarks and A Chain of Summarization Approach"
    url: "https://arxiv.org/abs/2312.11865"
    year: 2024
    arxiv: "2312.11865"
    doi: null
  - title: "Grandmaster level in StarCraft II using multi-agent reinforcement learning"
    url: "https://doi.org/10.1038/s41586-019-1724-z"
    year: 2019
    arxiv: null
    doi: "10.1038/s41586-019-1724-z"
see:
  - "076-large-language-models-play-starcraft-ii-benchmarks-and-a-cha"
  - "009-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforc"
---

# LLM-PySC2: Starcraft II learning environment for Large Language Models

## One-sentence takeaway

LLM-PySC2 is the first SC2 environment that exposes the full PySC2 action space, multimodal observations, and wiki knowledge to LLMs, with asynchronous queries so latency does not grow with agent count.

## Why it matters here

GRID COMMAND's LLM-vs-RTS harness wants this interface: complete actions, not a toy subset, plus multi-agent collaboration. The paper also documents the failure mode — hallucinations and bad coordination without task-specific instructions.

## Key ideas

- Prior SC2 stacks do not let an LLM drive the hundreds of PySC2 actions or coordinate multiple agents natively.
- The environment supplies the complete action space, multimodal info, and game-wiki knowledge.
- An asynchronous query architecture keeps LLM latency roughly constant as the agent population grows.
- Macro-decision and micro-operation evals use SMAC plus new scenarios; LLMs can win some complex games but are not consistently correct, especially in the recovered action space and in multi-agent settings.
- Without task-relevant instructions, pretrained models hallucinate and collaborate inefficiently; SC2 remains a hard decision-making benchmark in the LLM era.

## Caveats

## Links

- arXiv: [2411.05348](https://arxiv.org/abs/2411.05348)
