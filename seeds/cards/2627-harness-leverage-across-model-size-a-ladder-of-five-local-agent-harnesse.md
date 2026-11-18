---
title: "Harness Leverage Across Model Size: A Ladder of Five Local Agent Harnesses from 0.75B to 4.7B"
authors:
  - "Hao Wang"
  - "Ting Huang"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.21407"
doi: null
source: "https://arxiv.org/abs/2611.21407"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
seed_rank: 2627
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "agents"
relevance_score: 8
see:
  - 1822-harness-or-model-isolating-the-harness-effect-in-agentic-coding-with
  - 1573-where-does-harness-optimization-value-live-localized-gains-and-the
  - 2363-harness-delta-attribution-dissecting-gains-from-harness-evolution
cites:
  - title: "Harness Leverage Across Model Size: A Ladder of Five Local Agent Harnesses from 0.75B to 4.7B"
    url: "https://arxiv.org/abs/2611.21407"
    year: 2026
    arxiv: "2611.21407"
    doi: null
---

# Harness Leverage Across Model Size: A Ladder of Five Local Agent Harnesses from 0.75B to 4.7B

## One-sentence takeaway

Crossing five shipped local harnesses with open models from 0.75B to 4.7B (plus a 35.5B anchor) on 18 artifact-producing tasks shows the harness effect is a progress effect: it decides whether a run leaves anything on disk, and 85 of 127 runs that wrote none of their artifacts still exited normally.

## Why it matters here

Model-versus-harness attribution is a standing topic, and most studies hold one side fixed. This one varies both on a single deterministic checker and pre-registers its contrasts, and its sharpest result is for evaluators: a scorer that trusts exit status credits work that was never written. The finding that one repeat-blocking rule, not the completion gate, carries much of the gain is the kind of localised harness lever 1573 and 2363 look for.

## Key ideas

- **Design.** 5 harnesses x 18 tasks x 4 local models (0.75B-4.7B) plus a 35.5B anchor; 360 ladder cells scored by one deterministic checker.
- **Result.** The completion-controlling harness (Mingbird) has the highest mean at every size; two of four pre-registered paired contrasts survive Holm correction (at 0.75B and 4.7B).
- **What carries it.** Disabling all six executable checks barely moves the mean (every interval includes zero); removing one repeat-blocking rule alone costs 0.411 at 0.75B and leaves 8 of 18 tasks with no artifact.
- **Exit-status trap.** Of 357 usable cells, 127 leave none of their declared artifacts and 85 of those exit normally.
- **Scaling.** Whether harness leverage grows or shrinks with model size cannot be settled with four rungs; different arms give a rise, a decline or a peak.

## Caveats

Abstract-level read of the v1 preprint (Tuesday 17 Nov 2026 listing; 56 pages). Small local models only, 18 tasks; only two of four pre-registered contrasts survive correction. Numbers are the authors'.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.21407
- PDF: https://arxiv.org/pdf/2611.21407
- HTML: https://arxiv.org/html/2611.21407v1
