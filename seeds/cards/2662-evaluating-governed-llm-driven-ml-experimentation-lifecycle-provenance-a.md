---
title: "Evaluating Governed LLM-Driven ML Experimentation: Lifecycle, Provenance, and Failure Metrics"
authors:
  - "Dowling Wong"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.23678"
doi: null
source: "https://arxiv.org/abs/2611.23678"
version_reviewed: "v1"
topics:
  - "autoresearch-experiment-selection"
  - "provenance-first-agent-memory"
seed_rank: 2662
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 8
see:
  - 071-meta-policy-reflexion-reusable-reflective-memory-and-rule-ad
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
cites:
  - title: "Evaluating Governed LLM-Driven ML Experimentation: Lifecycle, Provenance, and Failure Metrics"
    url: "https://arxiv.org/abs/2611.23678"
    year: 2026
    arxiv: "2611.23678"
    doi: null
---

# Evaluating Governed LLM-Driven ML Experimentation: Lifecycle, Provenance, and Failure Metrics

## One-sentence takeaway

A governed autoresearch harness, in which a control plane rather than the proposing LLM owns each trial's lifecycle, edit scope and keep/discard decision and appends one record per trial to an append-only ledger, exposed failures a task score hides across 1,445 trials on six ML tasks; a success-only log kept no record of 43 of 50 trials.

## Why it matters here

This is the evaluation stance we want for research loops: score the process (edit scope, dropped failures, traceable keep/discard decisions), not only the best number. The ledger-first design is provenance-first memory applied to experiments, and the released ledgers make every reported number recomputable.

## Key ideas

- **Control plane.** Owns trial lifecycle, checks edit scope and decides keep or discard; the LLM only proposes changes.
- **Ledger metrics.** Invalid-action rate, repeated-bad rate and provenance completeness computed from an append-only ledger.
- **Failures surfaced.** A no-memory arm where all 120 trials failed, a benchmark adapter whose bounded proposals ran out, and a reset failure revealed by reproducibility hashes (affected campaigns were rerun).
- **Counterfactual.** A loop that logged only successful trials left no record of 43 of 50 trials; the governed ledger recorded all 50.
- **Memory.** Ablations show memory's effect on repeated bad proposals depends on the task.

## Caveats

Abstract-level read of the v1 preprint (Thursday 19 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Single-author workshop paper (KDD 2026 ETAAI, non-archival); tasks range from synthetic logistic regression to language-model training, so scale is modest.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.23678
- PDF: https://arxiv.org/pdf/2611.23678
- HTML: https://arxiv.org/html/2611.23678v1
- Code and trial ledgers: https://github.com/dowlingwong/autoresearch_harness
- Zenodo DOI: https://doi.org/10.5281/zenodo.24174991
