---
title: "How Much Should an Agent Remember? Deployment Lessons from Self-Distilled Memory for LLM Agents"
authors:
  - "K. R. Jayaram"
  - "Vatche Isahagian"
  - "Aswath Vaithinathan Aravindan"
  - "Vinod Muthusamy"
  - "Punleuk Oum"
  - "Gaodan Fang"
  - "Michal Ulewicz"
  - "Gegi Thomas"
  - "Evelyn Duesterwald"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.26361"
doi: null
source: "https://arxiv.org/abs/2611.26361"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
  - "provenance-first-agent-memory"
seed_rank: 2652
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 9
see:
  - 003-generative-agents-interactive-simulacra-of-human-behavior
  - 004-memgpt-towards-llms-as-operating-systems
  - 072-agent-workflow-memory
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
cites:
  - title: "How Much Should an Agent Remember? Deployment Lessons from Self-Distilled Memory for LLM Agents"
    url: "https://arxiv.org/abs/2611.26361"
    year: 2026
    arxiv: "2611.26361"
    doi: null
---

# How Much Should an Agent Remember? Deployment Lessons from Self-Distilled Memory for LLM Agents

## One-sentence takeaway

An IBM team that ships self-distilled agent memory (lessons mined from trajectories, consolidated into guidelines) finds the right amount of memory depends on the model: DeepSeek-V3.2 keeps gaining with all 191 guidelines, while gpt-oss-120b does better with about 29 selected ones (55.4%) than with all 199 (51.2%).

## Why it matters here

This is a production report, not a benchmark win, on the exact loop we keep designing: trajectories → short lessons → consolidated guidelines → injected at inference. Two of its failure stories are our standing worries in practice: provenance silently dropped during consolidation, and a swallowed API error that failed every task while leaving a plausible log. It argues that memory dosage should be set per model, which matters for a harness that swaps models under one memory store (compare the harness ladder in 2627 and stale skills in 2630).

## Key ideas

- **Pipeline.** Mine one to three lessons per episode from the agent's own trajectories, consolidate them into fewer guidelines that record how many lessons each merged, then inject all guidelines or a selected subset at inference.
- **Deployment.** Ships in the open-source altk-evolve library and runs in IBM's CUGA agent and watsonx Orchestrate.
- **Model-dependent dosage.** On AppWorld, across models with 40-92% baseline task completion, DeepSeek-V3.2 gains +9.5 task-completion and +16.1 scenario-completion points with its full set; gpt-oss-120b goes from 39.9% to 51.2% with all guidelines but 55.4% (mean of two runs) with about 29 selected.
- **What went wrong.** A high-support guideline that backfired, provenance lost in consolidation, a swallowed API error hidden behind a plausible log, and a baseline confound that nearly produced a misleading comparison with a prior method.
- **Output.** Recommendations for teams deploying agent memory, distilled from these incidents.

## Caveats

Abstract-level read of the v1 preprint (Friday 20 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Results are mostly on one benchmark (AppWorld), and the subset result for gpt-oss-120b is a mean of two runs. Accepted to IAAI 2027 (oral) per the arXiv comment.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.26361
- PDF: https://arxiv.org/pdf/2611.26361
- HTML: https://arxiv.org/html/2611.26361v1
- Code (altk-evolve): https://github.com/AgentToolkit/altk-evolve
