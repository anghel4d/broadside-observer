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
seed_rank: 84
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
see:
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---

# SWE-bench: Can Language Models Resolve Real-World GitHub Issues?

## One-sentence takeaway

SWE-bench is 2,294 real GitHub issues from 12 popular Python repos where a model must edit a full codebase so the project's tests pass.

## Why it matters here

This is the default execution-grounded eval for ano coding agents and Broadside SWE loops; later Verified splits and agent papers all hang off this task shape.

## Key ideas

- Issues are paired with the corresponding pull requests; resolution means producing a patch that satisfies the repo's tests, not matching a gold diff by name.
- Typical instances require coordinated edits across functions, classes, and files, plus an execution environment and long context.
- At release, Claude 2 solved 1.96% of issues; fine-tuned SWE-Llama and other proprietary models only handled the simplest cases.
- The benchmark is designed as a sustainable frontier testbed rather than a saturated code-completion quiz.
- Leaderboard and data: https://www.swebench.com (ICLR 2024).

## Caveats

## Links

- arXiv: [2310.06770](https://arxiv.org/abs/2310.06770)
- PDF: https://arxiv.org/pdf/2310.06770
- Site: https://www.swebench.com
- OpenReview: https://openreview.net/forum?id=VTF8yNQM66
