---
title: "The Winner's Curse in LLM Self-Improvement Loops: Selection Noise, Lock-in, and Acceptance Rules"
authors:
  - "Litao Hu"
  - "Yutong Tang"
year: 2026
venue: "arXiv"
arxiv: "2610.09239"
doi: null
source: "https://arxiv.org/abs/2610.09239"
topics:
  - "continual-agent-skills"
  - "autoresearch-experiment-selection"
seed_rank: 2242
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "agents"
relevance_score: 9
lineage: self-improvement-evaluation
cites:
  - title: "The Winner's Curse in LLM Self-Improvement Loops: Selection Noise, Lock-in, and Acceptance Rules"
    url: "https://arxiv.org/abs/2610.09239"
    year: 2026
    arxiv: "2610.09239"
    doi: null
see:
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1015-practice-makes-unsafe-skill-misevolution-in-self-improving-llm-agents"
  - "1770-neohorse-1-towards-recursive-self-improvement-via-agentic-post"
---

# The Winner's Curse in LLM Self-Improvement Loops: Selection Noise, Lock-in, and Acceptance Rules

## One-sentence takeaway

Keep-if-better self-improvement loops suffer a winner's curse: when a small evaluation set is reused to pick the best candidate, the reported gain is inflated, by 13 to 20 points over held-out accuracy with 16 selection items and 1 to 5 points with 256.

## Why it matters here

Every skill-evolution, prompt-optimisation or harness-search loop in the Observer library (and the fleet's own routines that rewrite their prompts) uses some version of keep-if-better. This paper puts a number on how much those loops lie to themselves and gives a cheap fix: score the starting and the current instruction on a small set never used for selection. It belongs next to every self-improvement card as the standard evaluation caveat.

## Key ideas

- **Selection under noise.** The keep-if-better step is modelled as selection under measurement noise, including correlated errors among candidates in one decision.
- **Most later proposals hurt.** With Qwen models rewriting their own instructions and every candidate also scored on 600 held-out items, most proposals after the first are harmful.
- **Pre-registered result.** Final selection-set score exceeded held-out accuracy by 13–20 points with 16 selection items and 1–5 points with 256. Held-out gains grew with selection-set size on TREC but not on GSM8K.
- **Acceptance rules don't save you.** The tested alternatives did not beat greedy acceptance over whole runs. The same inflation appears in GEPA and MIPROv2 validation scores.
- **Fix.** Scoring start and current instruction on 64 never-used items removes the average bias, though single estimates stay about 6 points off. Report held-out gains with uncertainty.

## Caveats

The study uses instruction rewriting on classification and maths tasks (TREC, Banking77, GSM8K) with Qwen models, not long-horizon agent tasks; the size of the effect there is untested. Model revisions were not pinned, and an audit found some duplicate question texts across splits.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.09239
- PDF: https://arxiv.org/pdf/2610.09239
