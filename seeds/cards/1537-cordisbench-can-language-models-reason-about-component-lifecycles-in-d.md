---
title: "CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?"
authors:
  - "Damien Sileo"
  - "Dimitri Kachler"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2609.01600"
doi: null
source: "https://arxiv.org/abs/2609.01600"
topics:
  - "agent-failure-localization"
  - "agentic-llm-serving"
seed_rank: 1537
seed_batch: "frontier-2026-09-02"
reviewed: "2026-09-02"
pool: "agents"
relevance_score: 10
lineage: agent-harness-runtime
cites:
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://deepseek.com/harness/en/"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Contract-Centered Architecture for Scalable and Manageable Agentic Runtimes"
    url: "https://arxiv.org/abs/2608.27086"
    year: 2026
    arxiv: "2608.27086"
    doi: null
  - title: "LoopsBench: From Harness Engineering to Loop Engineering in Coding Agent Evaluation"
    url: "https://arxiv.org/abs/2608.00267"
    year: 2026
    arxiv: "2608.00267"
    doi: null
see:
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1446-a-contract-centered-architecture-for-scalable-and-manag"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1366-when-can-agents-safely-checkpoint-fork-restore-and-merge-exa"
---
# CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?

## One-sentence takeaway

CordisBench asks whether LMs can reason about plugin dependency and cleanup lifecycles inside a dynamic Cordis-style agent harness — 1,200 questions, controlled plus live Cordis execution.

## Why it matters here

Broadside already runs on Cordis/dsh metaphors (1050). This is the first public benchmark that scores lifecycle reasoning — mount, depend, cleanup, hot-patch — rather than task success alone. Direct regression surface for CordisBench-shaped checks in Broadside.

## Key ideas

- Dynamic harnesses let the model change the software that shapes its own execution; local plugin edits propagate through dependencies and cleanup.
- CordisBench: 1,200 questions mixing a controlled formal setting with programs executed against Cordis (component dependencies + cleanup).
- Measures whether models track lifecycle consequences, not just emit a working tool call.
- Separates harness-lifecycle competence from ordinary coding-agent pass@k.

## Caveats

- Benchmarking Cordis does not replace reading the Cordis paper/runtime; treat as eval surface.
- Formal subset may overfit toy dependency graphs vs production cordis.patch.yml profiles.
- Authors Damien Sileo / Dimitri Kachler — not DeepSeek-first-party; still Cordis-compatible.

## Links

- arXiv: [2609.01600](https://arxiv.org/abs/2609.01600)
- PDF: https://arxiv.org/pdf/2609.01600
