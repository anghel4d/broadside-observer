---
title: "Do Verifier Judgments Survive Abstraction? Measuring Verification Transport for LLM Agent Evaluation"
authors:
  - "Disha Sheshanarayana"
  - "Sai Linisha Reddy Goli"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2611.18471"
doi: null
source: "https://arxiv.org/abs/2611.18471"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
seed_rank: 2607
seed_batch: "frontier-2026-11-16"
reviewed: "2026-11-16"
pool: "agents"
relevance_score: 8
see:
  - 2588-when-evaluators-of-ai-agents-disagree-an-empirical-study-of-native-scori
  - 2383-compaction-laundering-provenance-destruction-in-context-compacting-coding
cites:
  - title: "Do Verifier Judgments Survive Abstraction? Measuring Verification Transport for LLM Agent Evaluation"
    url: "https://arxiv.org/abs/2611.18471"
    year: 2026
    arxiv: "2611.18471"
    doi: null
---

# Do Verifier Judgments Survive Abstraction? Measuring Verification Transport for LLM Agent Evaluation

## One-sentence takeaway

Verification Transport tests whether an LLM verifier's verdict on a frozen agent execution survives when the same run is shown through composed tools, delegation or compacted history, and finds failures up to about 31% under macro abstraction and delegation, of which restoring the execution provenance recovers 85.5%.

## Why it matters here

This is the evaluator-side twin of compaction laundering (2383): once evidence crosses an abstraction boundary, judges stop seeing what happened, and their accuracy on the native view says nothing about it. The 85.5% recovery from restored provenance is a measured argument for keeping source traces addressable behind every summary and sub-agent result, which is the Broadside memory thesis applied to evaluation.

## Key ideas

- **Matched views.** Native, abstracted and restored views of the same frozen executions, holding task, trajectory, outcome, ground truth, criterion and verifier fixed.
- **Scale.** Four agent-evaluation benchmarks, seven verifier backbones, four verification protocols, three abstraction boundaries.
- **Failure.** Transport failure reaches about 31% under macro abstraction and delegation.
- **Protocol modes.** Direct verification tends to flip to wrong verdicts; evidence-grounded and deliberative protocols tend to abstain, so a low transport-failure rate is not the same as reliability.
- **Repair.** Restoring execution provenance recovers 85.5% of transport failures; recovery is lower when provenance is lossy or missing.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Abstractions are constructed by the authors over frozen runs, not taken from deployed harnesses; how representative the three boundaries are of real compaction is untested.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.18471
- PDF: https://arxiv.org/pdf/2611.18471
