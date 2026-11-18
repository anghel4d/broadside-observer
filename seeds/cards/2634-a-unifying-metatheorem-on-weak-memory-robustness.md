---
title: "A Unifying Metatheorem on Weak-Memory Robustness"
authors:
  - "Giovanna Kobus Conrado"
  - "Stephan Spengler"
  - "Mohamed Faouzi Atig"
  - "Andreas Pavlogiannis"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.22663"
doi: null
source: "https://arxiv.org/abs/2611.22663"
version_reviewed: "v1"
topics:
  - "lockfree-game-parallelism"
  - "category-theory-plt"
seed_rank: 2634
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "languages"
relevance_score: 8
see:
  - 1139-foundations-of-the-c-concurrency-memory-model
  - 485-a-better-x86-memory-model-x86-tso
  - 434-correct-and-efficient-work-stealing-for-weak-memory-models
  - 1857-can-seqlocks-get-along-with-programming-language-memory-models
  - 2617-do-apple-m-series-processors-enforce-the-compound-memory-model
  - 2570-cfgkat-a-complete-calculus-for-non-local-control-flow
cites:
  - title: "A Unifying Metatheorem on Weak-Memory Robustness"
    url: "https://arxiv.org/abs/2611.22663"
    year: 2026
    arxiv: "2611.22663"
    doi: null
---

# A Unifying Metatheorem on Weak-Memory Robustness

## One-sentence takeaway

Robustness (a program shows no non-SC behaviours under a weak memory model) is in PSPACE for every prefix-closed memory model definable in Kleene Algebra with Tests, a Lean-formalised metatheorem that recovers most prior per-model results and newly covers full RC11 and OCaml, while dropping prefix-closedness makes it undecidable.

## Why it matters here

Our lock-free buses and work-stealing structures are only as correct as their behaviour under C11/RC11 and the hardware models; a single algebraic route to robustness checking, with a tool (RoboKAT) that already handles nine models, is a practical way to ask "does this code behave as if SC?" without a bespoke theory per model. It also connects to the KAT thread in 2570.

## Key ideas

- **Robustness.** A program P is robust against model MM if it exhibits no weak behaviours beyond Sequential Consistency.
- **Metatheorem.** Robustness against any prefix-closed, KAT-definable memory model is in PSPACE.
- **Coverage.** Recovers nearly all prior PSPACE results (TSO, PSO, Release/Acquire) and establishes PSPACE membership for new models including full RC11 and the OCaml memory model.
- **Limit.** Robustness against the KAT-definable Relaxed model is undecidable, so prefix-closedness cannot be dropped in general.
- **Mechanisation and tool.** Correctness formalised in Lean; prototype RoboKAT checks robustness against nine memory models.

## Caveats

Abstract-level read of the v1 preprint (Wednesday 18 Nov 2026 listing). PSPACE membership is a decidability/complexity result; the abstract gives no performance data for RoboKAT on real lock-free code.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.22663
- PDF: https://arxiv.org/pdf/2611.22663
- HTML: https://arxiv.org/html/2611.22663v1
