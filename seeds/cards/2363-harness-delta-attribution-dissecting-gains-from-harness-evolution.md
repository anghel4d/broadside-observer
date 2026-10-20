---
title: "Harness-Delta Attribution: Dissecting Gains From Harness Evolution"
authors:
  - "Wenxuan Ding"
  - "Qin Lu"
  - "Changlong Yu"
  - "Sha Li"
  - "Shuowei Jin"
  - "Xin Liu"
  - "Zhenyu Shi"
  - "Greg Durrett"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.22466"
doi: null
source: "https://arxiv.org/abs/2610.22466"
topics:
  - "continual-agent-skills"
  - "autoresearch-experiment-selection"
seed_rank: 2363
seed_batch: "frontier-2026-10-20"
reviewed: "2026-10-20"
pool: "agents"
relevance_score: 9
cites:
  - title: "Harness-Delta Attribution: Dissecting Gains From Harness Evolution"
    url: "https://arxiv.org/abs/2610.22466"
    year: 2026
    arxiv: "2610.22466"
    doi: null
see:
  - 060-loopsbench-from-harness-engineering-to-loop-engineering-in-c
  - 1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent
---

# Harness-Delta Attribution: Dissecting Gains From Harness Evolution

## One-sentence takeaway

HDA is an evaluation protocol that splits the gain from automatic harness evolution (optimizing prompts, skills, tools and orchestration code around a frozen model) into detected overfitting, gains a compute-matched baseline also gets, and a residual upper bound on real improvement; across 21 statistically significant settings (three frameworks, 11 executor models), overfitting explains 54% of the gain on average and test-time scaling 14%, the two together exceed half the gain in 14 settings, and validation-based selection does not stop it.

## Why it matters here

Self-improving harnesses and skill files are a core part of how Broadside's agents (and the Grok Bot fleet) get better without retraining. This paper is the sceptic's toolkit: before believing that an evolved harness generalizes, check whether it memorized the search set, and whether simply spending the same extra inference compute on the old harness gets the same number. It argues for keeping held-out tasks and compute-matched baselines in any skill-evolution loop Broadside runs.

## Key ideas

- **Three-way split.** Compare the evolved harness with (a) a compute-matched baseline harness and (b) an artifact-neutralized version of the evolved harness with detected benchmark-specific mechanisms removed. The gap to (b) is a lower bound on overfitting, the gain reproduced by (a) is test-time scaling, and what remains is an upper bound on generalizable improvement. Held-out transfer is measured separately.
- **Frameworks and tasks.** Meta-Harness (searches harness code; proposer reads history through a filesystem), SkillOpt (bounded edits to a skill document) and AHE (Agentic Harness Engineering; evolves prompts, tools, skills and memory), on LiveMath, SWE-bench Verified, CREATE and ALFWorld; 25 settings in total.
- **Extreme overfitting.** On ALFWorld under Meta-Harness, five Qwen executors from 0.8B to 35B-A3B all reach 100% search-set success, and HDA attributes 98% of the gain to overfitting; the small-model harnesses turned into rule-based controllers that make no LLM calls at all, and the 0.8B executor's harness grew from 66 to 503 non-blank, non-comment lines (7.6×).
- **Compute disguised as cleverness.** On CREATE, a compute-matched baseline recovers 49% of Meta-Harness's gain for Claude Haiku 4.5, and test-time scaling accounts for 75% of AHE's gain. SkillOpt, which cannot change control flow, shows no test-time scaling but also no significant gain.
- **Validation is not a safeguard.** Adding validation-based selection to 16 Meta-Harness settings raised held-out scores in 10 and lowered them in 6 (for example +8.5 points on SWE-bench Verified, +8.0 on ALFWorld), but did not remove overfitting: on LiveMath the same benchmark-specific artifact appears in the search, validation and test splits, so validation rewards it too.

## Caveats

Overfitting detection relies on finding and neutralizing artifacts, so it is a lower bound and depends on the auditors' judgment. Results vary widely across tasks, models and frameworks, and the frameworks were re-run by the authors rather than by their original developers. The four benchmarks are small enough to be memorizable, which may exaggerate overfitting relative to open-ended production use.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.22466
- PDF: https://arxiv.org/pdf/2610.22466
- Code: https://github.com/Wenwen-D/HarnessDeltaAttribution
- Blog post: https://wenwen-d.github.io/blog/harness-delta-attribution/
