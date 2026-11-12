---
title: "The RSI Tax: When Recursive Self-Improvement Is Not Worth the Cost"
authors:
  - "Yitong Zhang"
  - "Ang Li"
  - "Yisen Wang"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2611.13524"
doi: null
source: "https://arxiv.org/abs/2611.13524"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
  - "autoresearch-experiment-selection"
seed_rank: 2567
seed_batch: "frontier-2026-11-12"
reviewed: "2026-11-12"
pool: "agents"
relevance_score: 8
cites:
  - title: "The RSI Tax: When Recursive Self-Improvement Is Not Worth the Cost"
    url: "https://arxiv.org/abs/2611.13524"
    year: 2026
    arxiv: "2611.13524"
    doi: null
---

# The RSI Tax: When Recursive Self-Improvement Is Not Worth the Cost

## One-sentence takeaway

Counting the tokens spent on self-improvement itself, a bounded-note baseline matches or beats Meta-Harness, EvoSkill and RRSI on continual task streams at 66-71% lower total cost, and 75-94% of the RSI tax is verification.

## Why it matters here

A sober counterweight to self-evolving harness papers, including ours. It defines the right accounting (score each task before its feedback is used, add the improvement process to the bill) and shows most of the spend is verification and artifacts that are never used again. Any rehearsal or skill loop we build should be measured this way.

## Key ideas

- **RSI Tax.** Token cost of the self-improvement process, counted alongside task execution in end-to-end evaluation.
- **Head-to-head.** Six methods, two models; a bounded-note baseline matches or exceeds Meta-Harness, EvoSkill and RRSI accuracy with 65.6-71.0% total-token savings.
- **Decomposition.** Verification is 74.8-93.6% of the tax; exploration and writing make up the rest.
- **Unused artifacts.** A substantial share of the tax goes to states or artifacts never used later in the stream.

## Caveats

Two models and the evaluated streams only; longer lifetimes could let expensive improvements pay back.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.13524
- PDF: https://arxiv.org/pdf/2611.13524
