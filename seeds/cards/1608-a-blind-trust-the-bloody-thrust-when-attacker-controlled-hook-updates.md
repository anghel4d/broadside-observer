---
title: "A Blind Trust, the Bloody Thrust: When Attacker-Controlled Hook Updates Steer AI Agent Harnesses towards Malicious Behaviors"
authors:
  - "Pengxun Li"
  - "Litian Zhang"
  - "Jianwei Hou"
  - "Shujiang Wu"
  - "Song Li"
  - "Zifeng Kang"
  - "Xi Zhang"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2609.03884"
doi: null
source: "https://arxiv.org/abs/2609.03884"
topics:
  - "model-vs-harness"
  - "agentic-llm-serving"
seed_rank: 1608
seed_batch: "frontier-2026-09-06"
reviewed: "2026-09-06"
pool: "agents"
relevance_score: 10
lineage: harness
cites:
  - title: "A Blind Trust, the Bloody Thrust: When Attacker-Controlled Hook Updates Steer AI Agent Harnesses towards Malicious Behaviors"
    url: "https://arxiv.org/abs/2609.03884"
    year: 2026
    arxiv: "2609.03884"
    doi: null
  - title: "Harness Engineering: Anatomy, Architecture, and Evolution of Coding Agents -- A Source-Code Study of Eleven Systems"
    url: "https://arxiv.org/abs/2609.00006"
    year: 2026
    arxiv: "2609.00006"
    doi: null
  - title: "Where Does Harness-Optimization Value Live? Localized Gains and the Budget-Splitting Trap in Self-Evolving LLM Agents"
    url: "https://arxiv.org/abs/2609.02889"
    year: 2026
    arxiv: "2609.02889"
    doi: null
see:
  - "1573-where-does-harness-optimization-value-live-localized-gains-and-the"
  - "1574-safeevolve-harness-policy-co-evolution-from-agent-experience-for"
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
  - "1050-deepseek-harness-everything-is-a-plugin"
---
# A Blind Trust, the Bloody Thrust: When Attacker-Controlled Hook Updates Steer AI Agent Harnesses towards Malicious Behaviors

## One-sentence takeaway

Lifecycle hooks in modern agent harnesses run host-privileged shell outside the LLM's observation; HookPry shows attacker-controlled hook updates can trojanize benign plugins — a harness supply-chain surface.

## Why it matters here

DeepSeek Harness / Everything-is-a-Plugin (1050) and Harness Engineering (1536) make hooks first-class. This paper is the adversarial half of that design choice — required reading before Broadside ships plugin hooks.

## Key ideas

- Surface: session-start / tool-call / file-edit hooks bind shell commands that the model may never see.
- Threat: supply-chain update of plugin metadata/hook config → privilege escalation on host.
- Defense sketch: HookPry analyzes/ constrains hook update paths (see paper).
- Tie-in: complements SafeEvolve harness–policy co-evolution (1574) from the security side.

## Caveats

- Security systems note; exploitability depends on specific harness plugin trust model.
- Not a general agent-alignment result — scoped to lifecycle-hook update paths.
- Zero-Trust Agent Harness leftover (2609.00050) remains related prior art held from Sep-4.

## Links

- arXiv: [2609.03884](https://arxiv.org/abs/2609.03884)
- PDF: https://arxiv.org/pdf/2609.03884
