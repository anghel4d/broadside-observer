---
title: "Your Policy Is Secretly a Harness: The Decision Geometry of Agent Interfaces"
authors:
  - "Jian Mu"
  - "Ruibo Shen"
  - "Yao Shu"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2610.37255"
doi: null
source: "https://arxiv.org/abs/2610.37255"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 2449
seed_batch: "frontier-2026-10-28"
reviewed: "2026-10-28"
pool: "agents"
relevance_score: 9
see:
  - 1822-harness-or-model-isolating-the-harness-effect-in-agentic-coding-with
  - 2363-harness-delta-attribution-dissecting-gains-from-harness-evolution
cites:
  - title: "Your Policy Is Secretly a Harness: The Decision Geometry of Agent Interfaces"
    url: "https://arxiv.org/abs/2610.37255"
    year: 2026
    arxiv: "2610.37255"
    doi: null
---

# Your Policy Is Secretly a Harness: The Decision Geometry of Agent Interfaces

## One-sentence takeaway

Under KL-regularized control a trained policy's log-odds recover its harness's action preferences, so deployed return splits into the harness's ceiling minus the policy's mismatch; comparing harnesses with a fixed model conflates the two, and on MiniWoB++ merely reversing the order of observation fields drops a post-trained model from 85.0% to 19.2% success.

## Why it matters here

This is the cleanest formal statement yet of model vs harness, a standing Broadside topic. It explains why "the new harness scored worse with the same model" is weak evidence: the model may simply be fitted to the old interface. The ceiling-minus-mismatch decomposition gives a concrete way to judge a harness change, by estimating its ceiling with a stronger model, before rejecting it.

## Key ideas

- **Policy carries the harness.** At the KL-regularized optimum, log-odds between actions equal how strongly the harness favors them, so post-training bakes interface specifics into the model.
- **Return = ceiling − mismatch.** Training moves only mismatch; changing the harness moves both, which is why fixed-model harness comparisons mislead.
- **Brittleness demo.** Reordering observation fields changes no optimal decision yet collapses a trained MiniWoB++ model from 85.0% to 19.2%.
- **Rejected harnesses that were better.** Every new harness a fixed-model comparison rejected but whose ceiling was higher outperformed the original after further training under it; pre-measured ceiling and mismatch predicted the gains.
- **Coding agents.** On Terminal-Bench Lite, ceiling minus mismatch (using a stronger model as a stand-in for the optimum) reproduces the accuracy ranking of harnesses, while either term alone does not.

## Caveats

Theory assumes KL-regularized optimal control, which real post-training only approximates. Empirics are MiniWoB++ and a Terminal-Bench subset; the stronger-model proxy for the ceiling is a heuristic. Retraining under each candidate harness is out of reach for users of closed models.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.37255
- PDF: https://arxiv.org/pdf/2610.37255
- Code: https://github.com/2020-qqtcg/HRP
