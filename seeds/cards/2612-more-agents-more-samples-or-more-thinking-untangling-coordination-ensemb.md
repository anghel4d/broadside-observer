---
title: "More Agents, More Samples, or More Thinking? Untangling Coordination, Ensembling, and Test-Time Compute in Multi-Agent LLMs"
authors:
  - "Seyed Mahmoud Sajjadi Mohammadabadi"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.17610"
doi: null
source: "https://arxiv.org/abs/2611.17610"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
  - "autoresearch-experiment-selection"
seed_rank: 2612
seed_batch: "frontier-2026-11-16"
reviewed: "2026-11-16"
pool: "agents"
relevance_score: 7
see:
  - 1120-position-multi-agent-systems-should-prioritize-concurrency-contr
cites:
  - title: "More Agents, More Samples, or More Thinking? Untangling Coordination, Ensembling, and Test-Time Compute in Multi-Agent LLMs"
    url: "https://arxiv.org/abs/2611.17610"
    year: 2026
    arxiv: "2611.17610"
    doi: null
---

# More Agents, More Samples, or More Thinking? Untangling Coordination, Ensembling, and Test-Time Compute in Multi-Agent LLMs

## One-sentence takeaway

A synthesis of nine studies and 516 multi-agent LLM configurations finds that once baselines are matched on sample count or resource budget, multi-agent systems average -0.042 accuracy and match or trail the baseline in 74% of contrasts, so gains need partitioned evidence, external verification or error diversity, not more talking agents.

## Why it matters here

This is the accounting check for every 'add more agents' proposal in our fleets: communication adds nothing when agents share the same evidence. The resource vector and baseline ladder are a reusable reviewer checklist for our own experiment selection, and the positive conditions (partition the evidence, verify externally, diversify models) are the design rules worth keeping.

## Key ideas

- **Confound.** Comparisons against a single greedy pass mix coordination with extra samples and extra compute.
- **Method.** Nine primary evaluations, 516 configurations, a six-dimension resource vector R and a four-category baseline ladder; multilevel random-effects modelling on log odds.
- **Result.** Against sample- or budget-matched baselines, mean -0.042 accuracy; at or below baseline in 74% of comparable contrasts; study means nonpositive in almost all studies.
- **Sampling alone.** Moving from greedy to a sampled baseline shifts the multi-agent difference by -0.038 on average.
- **When it helps.** Partitioned evidence, external verification, or error diversity across models; the paper ships a reviewer checklist and accounting utilities.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. A single-author meta-analysis of nine studies, dominated by accuracy benchmarks; agentic tasks with partitioned tools or long horizons may behave differently.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17610
- PDF: https://arxiv.org/pdf/2611.17610
