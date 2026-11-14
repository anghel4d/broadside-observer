---
title: "When Evaluators of AI Agents Disagree: An Empirical Study of Native Scoring, LLM Judges, and Commit-Boundary Checks on tau2-bench"
authors:
  - "Sungbin Im"
year: 2026
venue: "arXiv preprint (cs.SE)"
arxiv: "2611.14581"
doi: null
source: "https://arxiv.org/abs/2611.14581"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
seed_rank: 2588
seed_batch: "frontier-2026-11-14"
reviewed: "2026-11-14"
pool: "agents"
relevance_score: 8
see:
  - 2241-humanize-judgement-engineering-for-agentic-coding
cites:
  - title: "When Evaluators of AI Agents Disagree: An Empirical Study of Native Scoring, LLM Judges, and Commit-Boundary Checks on tau2-bench"
    url: "https://arxiv.org/abs/2611.14581"
    year: 2026
    arxiv: "2611.14581"
    doi: null
---

# When Evaluators of AI Agents Disagree: An Empirical Study of Native Scoring, LLM Judges, and Commit-Boundary Checks on tau2-bench

## One-sentence takeaway

On 2,160 tau2-bench episodes, an LLM judge agreed with gold-state scoring only 56.2% of the time and passed 10 of 11 forbidden database writes, while a rule-based commit-boundary check with no model call caught all 11.

## Why it matters here

Deployed agents have no gold state, so judges get used as if they were benchmarks. This shows the choice of evaluator decides the conclusion and that a cheap check at the write boundary (was a write expected, did one occur) beats transcript-reading judges on the failures that matter. It is a direct argument for typed effect logs in our harness.

## Key ideas

- **Four evaluators.** Native gold-state scoring, an LLM judge, the judge with the policy document, and a boundary evaluator comparing expected vs actual writes in the trace.
- **Judges are consistent but wrong.** The judge repeated its verdict 98.2% of the time but agreed with native scoring on 56.2%.
- **Forbidden writes.** 11 episodes executed a forbidden write; the judge passed 10-11 with or without policy or transcript, a stronger judge passed 6, the boundary check caught all 11.
- **Gates did not help.** Verification, correction and safe-termination gates did not significantly reduce forbidden writes (11.1% of ungated episodes); their evidence digest dropped order status and authentication, so valid requests were rejected.
- **Release.** Traces, code, prompts and 120 dual-annotated labels are public.

## Caveats

Single author; two tau2-bench domains. Only 11 forbidden-write episodes, so the headline comparison is small-sample.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.14581
- PDF: https://arxiv.org/pdf/2611.14581
