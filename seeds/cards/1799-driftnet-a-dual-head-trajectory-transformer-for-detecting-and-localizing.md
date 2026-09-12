---
title: "DriftNet: A Dual-Head Trajectory Transformer for Detecting and Localizing Prompt Injection in LLM Agents"
authors:
  - "Asif Pinjari"
  - "Mithun Paul Saint-Germain"
year: 2026
venue: "arXiv"
arxiv: "2609.10892"
doi: null
source: "https://arxiv.org/abs/2609.10892"
topics:
  - "agent-failure-localization"
  - "harness-engineering"
  - "agentic-llm-serving"
seed_rank: 1799
seed_batch: "frontier-2026-09-12"
reviewed: "2026-09-12"
pool: "agents"
relevance_score: 10
lineage: prompt-injection-trajectory-localization
cites:
  - title: "DriftNet: A Dual-Head Trajectory Transformer for Detecting and Localizing Prompt Injection in LLM Agents"
    url: "https://arxiv.org/abs/2609.10892"
    year: 2026
    arxiv: "2609.10892"
    doi: null
see:
  - "1767-authority-is-not-a-string-a-capability-scoped-harness-for-prompt"
  - "1608-a-blind-trust-the-bloody-thrust-when-attacker-controlled-hook-updates"
  - "1575-where-reliability-lives-experimental-localisation-of-behavioural"
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
---

# DriftNet: A Dual-Head Trajectory Transformer for Detecting and Localizing Prompt Injection in LLM Agents

## One-sentence takeaway

DriftNet reads an agent’s tool-call trajectory with a dual-head Transformer to detect indirect prompt injection and localize where the attack entered and which steps it corrupted.

## Why it matters here

CapScope (1767) blocks ambient authority; DriftNet is the complementary observability layer — operators still need where poison entered and which actions drifted. Failure localization for Broadside coding agents and GRID COMMAND tool buses starts with trajectory structure, not a single unsafe bit.

## Key ideas

- Observes that successful indirect injection leaves a signature in the trajectory: benign tool-call prefix, poisoned observation, attacker-serving suffix.
- Argues whole-trace verdicts and single unsafe indices are insufficient for operators who need entry point, corrupted span, and resisted poison.
- Dual-head trajectory Transformer over agent tool-call sequences for detection plus localization.
- Separates “model wanted X after poison” from “where the harness should have cut” — a clean input to model-vs-harness credit assignment.
- Complements capability-scoped harnesses: CapScope prevents; DriftNet explains.

## Caveats

Trajectory features assume observable tool-call logs; opaque multi-hop or encrypted tool channels weaken localization. Evaluated as a detector/localizer, not a preventer — pair with harness authorization (1767), not instead of it. Do not remint 1767 / 1608 / 1575.

## Links

- arXiv: [2609.10892](https://arxiv.org/abs/2609.10892)
- PDF: https://arxiv.org/pdf/2609.10892
