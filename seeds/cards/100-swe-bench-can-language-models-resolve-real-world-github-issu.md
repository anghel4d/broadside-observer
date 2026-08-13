---
title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
authors:
  - "Carlos E. Jimenez"
  - "John Yang"
  - "Alexander Wettig"
  - "Shunyu Yao"
  - "Kexin Pei"
  - "Ofir Press"
  - "Karthik Narasimhan"
year: 2023
venue: "ICLR"
arxiv: "2310.06770"
doi: null
source: "https://arxiv.org/abs/2310.06770"
topics:
  - coding-agents
  - harness
seed_rank: 100
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
    card: "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - title: "Auto-Configuring Scientific Simulators with Lightweight Coding-Agent Adapters"
    url: "https://arxiv.org/abs/2606.09774"
    year: 2026
    arxiv: "2606.09774"
    doi: null
    card: "053-auto-configuring-scientific-simulators-with-lightweight-codi"
  - title: "Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments"
    url: "https://arxiv.org/abs/2607.28591"
    year: 2026
    arxiv: "2607.28591"
    doi: null
    card: "056-change2task-from-repository-changes-to-executable-coding-age"
---

# SWE-bench: Can Language Models Resolve Real-World GitHub Issues?

## One-sentence takeaway

Language models have outpaced our ability to evaluate them effectively, but for their future development it is essential to study the frontier of their capabilities.

## Why it matters here

shapes harness/ACI design and model-vs-harness failure localization (SWE-bench: Can Language Models Resolve Real-World GitHub Issues?)

## Key ideas

- Language models have outpaced our ability to evaluate them effectively, but for their future development it is essential to study the frontier of their capabilities.
- We find real-world software engineering to be a rich, sustainable, and challenging testbed for evaluating the next generation of language models.
- To this end, we introduce SWE-bench, an evaluation framework consisting of $2,294$ software engineering problems drawn from real GitHub issues and corresponding pull requests across $12$ popular Python repositories.
- Given a codebase along with a description of an issue to be resolved, a language model is tasked with editing the codebase to address the issue.
- Resolving issues in SWE-bench frequently requires understanding and coordinating changes across multiple functions, classes, an

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2310.06770](https://arxiv.org/abs/2310.06770)
- URL: https://arxiv.org/abs/2310.06770
