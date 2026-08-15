---
title: "Meta-Policy Reflexion: Reusable Reflective Memory and Rule Admissibility for Resource-Efficient LLM Agent"
authors:
  - "Chunlong Wu"
  - "Ye Luo"
  - "Zhibo Qu"
  - "Min Wang"
year: 2025
venue: "arXiv:cs.AI"
arxiv: "2509.03990"
doi: null
source: "https://arxiv.org/abs/2509.03990"
topics:
  - tool-use
  - react
  - multi-agent
  - agent-architecture
  - reasoning
  - planning
seed_rank: 71
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
    url: "https://arxiv.org/abs/2303.11366"
    year: 2023
    arxiv: "2303.11366"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
see:
  - "081-reflexion-language-agents-with-verbal-reinforcement-learning"
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
---

# Meta-Policy Reflexion: Reusable Reflective Memory and Rule Admissibility for Resource-Efficient LLM Agent

## One-sentence takeaway

MPR consolidates verbal reflections into a predicate-like Meta-Policy Memory and applies it at inference via soft memory-guided decoding plus hard rule admissibility checks, without weight updates.

## Why it matters here

Reflexion traces in ano are usually episode-local; MPR is the upgrade that turns those traces into a reusable, enforceable policy for the next task.

## Key ideas

- Reflexion/ReAct improve a single episode but leave ephemeral, task-specific traces; RL alternatives transfer but need parameter updates.
- Meta-Policy Memory is structured and predicate-like, not free-form diary text.
- Soft guidance biases decoding toward remembered corrections; hard admissibility (HAC) blocks unsafe or invalid actions.
- Evaluation follows an AlfWorld-style text-agent protocol; reported gains are in execution accuracy and robustness versus Reflexion, with HAC adding stability.
- Failure modes and scaling, including multimodal and multi-agent extensions, are discussed rather than claimed as solved.

## Caveats

## Links

- arXiv: [2509.03990](https://arxiv.org/abs/2509.03990)
- PDF: https://arxiv.org/pdf/2509.03990
