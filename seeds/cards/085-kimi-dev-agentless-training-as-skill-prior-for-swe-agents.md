---
title: "Kimi-Dev: Agentless Training as Skill Prior for SWE-Agents"
authors:
  - "Zonghan Yang"
  - "Shengjie Wang"
  - "Kelin Fu"
  - "Wenyang He"
  - "Weimin Xiong"
  - "Yibo Liu"
  - "Yibo Miao"
  - "Bofei Gao"
  - "Yejie Wang"
  - "Yingwei Ma"
  - "Yanhao Li"
  - "Yue Liu"
  - "Zhenxing Hu"
  - "Kaitai Zhang"
  - "Shuyi Wang"
  - "Huarong Chen"
  - "Flood Sung"
  - "Yang Liu"
  - "Yang Gao"
  - "Zhilin Yang"
  - "Tianyu Liu"
year: 2025
venue: "arXiv:cs.AI"
arxiv: "2509.23045"
doi: null
source: "https://arxiv.org/abs/2509.23045"
topics:
  - provenance
  - rag
  - coding-agents
  - harness
seed_rank: 85
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Kimi-Dev: Agentless Training as Skill Prior for SWE-Agents

## One-sentence takeaway

Large Language Models (LLMs) are increasingly applied to software engineering (SWE), with SWE-bench as a key benchmark.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests; shapes harness/ACI design and model-vs-harness failure localization (Kimi-Dev: Agentless Training as Skill Prior for SWE-Agents)

## Key ideas

- Large Language Models (LLMs) are increasingly applied to software engineering (SWE), with SWE-bench as a key benchmark.
- Solutions are split into SWE-Agent frameworks with multi-turn interactions and workflow-based Agentless methods with single-turn verifiable steps.
- We argue these paradigms are not mutually exclusive: reasoning-intensive Agentless training induces skill priors, including localization, code edit, and self-reflection that enable efficient and effective SWE-Agent adaptation.
- In this work, we first curate the Agentless training recipe and present Kimi-Dev, an open-source SWE LLM achieving 60.4\% on SWE-bench Verified, the best among workflow approaches.
- With additional SFT adaptation on 5k publicly-available trajectories, Kimi-Dev powers SWE-Agents to 48.6\% pass@1, on par wit

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2509.23045](https://arxiv.org/abs/2509.23045)
- URL: https://arxiv.org/abs/2509.23045
