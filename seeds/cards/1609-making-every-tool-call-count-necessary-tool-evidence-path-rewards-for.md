---
title: "Making Every Tool Call Count: Necessary Tool-Evidence Path Rewards for Agentic Vision-Language Models"
authors:
  - "Xingming Long"
  - "Yu Liu"
  - "Zhiwei Yang"
  - "Hanqi Feng"
  - "Shaojie Zhang"
  - "Barnabas Poczos"
  - "Chao Jiang"
  - "Zhenbo Luo"
  - "Lei Jiang"
  - "Pei Fu"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2609.03493"
doi: null
source: "https://arxiv.org/abs/2609.03493"
topics:
  - "model-vs-harness"
  - "agentic-llm-serving"
seed_rank: 1609
seed_batch: "frontier-2026-09-06"
reviewed: "2026-09-06"
pool: "agents"
relevance_score: 9
lineage: harness
cites:
  - title: "Making Every Tool Call Count: Necessary Tool-Evidence Path Rewards for Agentic Vision-Language Models"
    url: "https://arxiv.org/abs/2609.03493"
    year: 2026
    arxiv: "2609.03493"
    doi: null
  - title: "Speculative Macro Commit for Faster Tool-Using Agents"
    url: "https://arxiv.org/abs/2609.03236"
    year: 2026
    arxiv: "2609.03236"
    doi: null
see:
  - "1581-speculative-macro-commit-for-faster-tool-using-agents"
  - "1573-where-does-harness-optimization-value-live-localized-gains-and-the"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---
# Making Every Tool Call Count: Necessary Tool-Evidence Path Rewards for Agentic Vision-Language Models

## One-sentence takeaway

Supervising agentic VLMs only on final-answer correctness yields redundant/off-target tool calls; necessary tool-evidence path rewards credit the evidence-acquisition path, not just the answer.

## Why it matters here

Harness value lives in tool discipline (1573). This is the training-signal half for vision-language tool agents — pair with Speculative Macro Commit (1581) on the runtime side.

## Key ideas

- Failure modes: redundant tool calls; correct tools called but evidence unused.
- Method: reward necessary tool-evidence paths rather than answer-only RL/SFT.
- Domain: agentic VLMs with crop/search tools; principle transfers to text tool agents.
- Evidence: improves evidence acquisition and utilization vs answer-only baselines.

## Caveats

- VLM-tool setting; transfer to pure-text SWE agents needs re-validation.
- Path-reward design can overfit to annotated necessary paths.
- Does not address speculative tool commit latency (1581).

## Links

- arXiv: [2609.03493](https://arxiv.org/abs/2609.03493)
- PDF: https://arxiv.org/pdf/2609.03493
