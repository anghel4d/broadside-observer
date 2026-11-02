---
title: "Lineage Is Memory: Parent Inheritance and Feedback Disclosure in Short-Budget LLM-Guided Optimization"
authors:
  - "Shanglin Yang"
  - "Zhan Shi"
year: 2026
venue: "arXiv preprint (cs.SE)"
arxiv: "2610.41157"
doi: null
source: "https://arxiv.org/abs/2610.41157"
topics:
  - "autoresearch-experiment-selection"
  - "continual-agent-skills"
seed_rank: 2495
seed_batch: "frontier-2026-11-02"
reviewed: "2026-11-02"
pool: "agents"
relevance_score: 8
cites:
  - title: "Lineage Is Memory: Parent Inheritance and Feedback Disclosure in Short-Budget LLM-Guided Optimization"
    url: "https://arxiv.org/abs/2610.41157"
    year: 2026
    arxiv: "2610.41157"
    doi: null
---

# Lineage Is Memory: Parent Inheritance and Feedback Disclosure in Short-Budget LLM-Guided Optimization

## One-sentence takeaway

Across 1,750 pre-registered runs, greedy parent inheritance, editing a surviving candidate, drives most of the progress in LLM prompt and program optimizers, beating seed-reset search even when the reset gets full-set error clustering or a bigger proposer, while validation rather than reflection eats nearly all the token budget.

## Why it matters here

Self-improving loops (prompt, skill and harness evolution) keep adding fancier reflection. This separates the ingredients under matched budgets and finds the cheap one, keeping the lineage, does the work. It's a useful default for our own skill and experiment loops: spend on evaluation, not on clever reflection.

## Key ideas

- **Confound removed.** Prior evaluations tested reflection mechanisms only inside lineage-preserving search; this separates inheritance from feedback breadth.
- **Scale.** 1,750 pre-registered runs over nine prompt and program synthesis benchmarks with matched evaluation budgets.
- **Why inheritance wins.** Solved error modes stay fixed in the candidate and drop out of later failure lists, so breadth tricks only help the opening rounds.
- **Cost breakdown.** In GEPA, proposer reflection is a small fraction of tokens; validation and minibatch gating consume almost all of it.

## Caveats

Short budgets only; long-horizon search, where diversity and escaping local optima matter more, may behave differently. Prompt and program synthesis benchmarks, not open-ended research.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.41157
- PDF: https://arxiv.org/pdf/2610.41157
