---
title: "Authority Is Not a String: A Capability-Scoped Harness for Prompt-Injection-Resistant Coding Agents"
authors:
  - "Dimitrios Stamatios Bouras"
  - "Yihan Dai"
  - "Sergey Mechtaev"
year: 2026
venue: "arXiv"
arxiv: "2609.08371"
doi: null
source: "https://arxiv.org/abs/2609.08371"
topics:
  - "harness-engineering"
  - "agent-failure-localization"
  - "agentic-llm-serving"
seed_rank: 1767
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 10
lineage: capability-scoped-harness
cites:
  - title: "Authority Is Not a String: A Capability-Scoped Harness for Prompt-Injection-Resistant Coding Agents"
    url: "https://arxiv.org/abs/2609.08371"
    year: 2026
    arxiv: "2609.08371"
    doi: null
see:
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1644-harness-agnostic-detection-and-immunization-of-reward-hacking-in-self"
  - "1575-where-reliability-lives-experimental-localisation-of-behavioural"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
---

# Authority Is Not a String: A Capability-Scoped Harness for Prompt-Injection-Resistant Coding Agents

## One-sentence takeaway

CapScope puts typed capabilities outside the model context and checks every tool call against the issuing agent’s ceiling — so prompt injection can ask, but ambient sandbox authority no longer grants.

## Why it matters here

Broadside’s coding-agent shelf (1536 / 1050 / 1644) keeps hitting ambient-authority injection in shared sandboxes. CapScope is harness-level authorization without asking the LLM to detect malice — exactly the failure-localization move GRID COMMAND and Anoptic tool buses need when NL orders touch filesystem or engine APIs.

## Key ideas

- Diagnoses ambient authority: naming a resource inside the agent sandbox is enough to act on it; repo files and tool output become injection surfaces.
- CapScope derives a task-wide authority ceiling from trusted input before any untrusted read, then stores per-agent typed capabilities outside model context.
- Every tool call is checked against the issuing agent’s capabilities — orchestrator vs sub-agent permissions do not bleed.
- Implemented on the Pi coding agent; repair workflow with orchestrator → sub-agents; injection may request forbidden actions but the harness blocks them.
- Separates “model wanted X” from “harness allowed X” — a clean model-vs-harness cut for Broadside credit assignment.

## Caveats

Evaluated in a Pi repair workflow; not yet measured on OpenHands/SWE-agent/Aider or GRID COMMAND tool schemas. Capability inference from trusted input is the remaining soft underbelly. Do not remint 1536 / 1050 / 1644.

## Links

- arXiv: [2609.08371](https://arxiv.org/abs/2609.08371)
- PDF: https://arxiv.org/pdf/2609.08371
