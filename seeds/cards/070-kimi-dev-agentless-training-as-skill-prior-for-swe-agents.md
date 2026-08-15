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
seed_rank: 70
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2023
    arxiv: "2310.06770"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
see:
  - "084-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---

# Kimi-Dev: Agentless Training as Skill Prior for SWE-Agents

## One-sentence takeaway

Reasoning-intensive Agentless training induces localization, edit, and self-reflection skill priors that transfer into SWE-Agent rollouts after a small SFT adaptation.

## Why it matters here

Ano can train cheap, verifiable single-turn skills and then drop them into a multi-turn harness, instead of treating Agentless workflows and SWE-Agents as rival stacks.

## Key ideas

- SWE-Agent frameworks are multi-turn interactive; Agentless methods are single-turn verifiable steps. The paper treats them as sequential, not exclusive.
- Kimi-Dev is an open SWE LLM that hits 60.4% on SWE-bench Verified under the workflow (Agentless) setting, best among that class at publication.
- After SFT on 5k public trajectories, the same weights power SWE-Agents to 48.6% pass@1, matching Claude 3.5 Sonnet (241022).
- Induced priors include localization, code edit, and self-reflection.
- Code: https://github.com/MoonshotAI/Kimi-Dev.

## Caveats

## Links

- arXiv: [2509.23045](https://arxiv.org/abs/2509.23045)
- PDF: https://arxiv.org/pdf/2509.23045
- Code: https://github.com/MoonshotAI/Kimi-Dev
