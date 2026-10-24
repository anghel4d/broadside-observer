---
title: "Can LLMs Improve Their Own Harness? A Controlled Study on ARC-AGI-3"
authors:
  - "Jens Lehmann"
  - "Sahar Vahdati"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.30499"
doi: null
source: "https://arxiv.org/abs/2610.30499"
topics:
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 2411
seed_batch: "frontier-2026-10-24"
reviewed: "2026-10-24"
pool: "agents"
relevance_score: 8
cites:
  - title: "Can LLMs Improve Their Own Harness? A Controlled Study on ARC-AGI-3"
    url: "https://arxiv.org/abs/2610.30499"
    year: 2026
    arxiv: "2610.30499"
    doi: null
---

# Can LLMs Improve Their Own Harness? A Controlled Study on ARC-AGI-3

## One-sentence takeaway

Across 27 independent harness lineages that frontier models built for themselves on ARC-AGI-3, harness quality ranged from zero to near-ceiling, but two rounds of self-revision raised mean held-out RHAE by only 2.80 points with a 95% interval of −1.44 to 7.35, so a model that builds a good harness does not reliably improve it.

## Why it matters here

Self-improving harnesses are a recurring Broadside theme (cards 1079, 1573, 1769). This is a controlled negative result: same bootstrap, frozen snapshots, held-out games, and process checks that every revision passed, yet held-out gains are within noise. It argues for judging any harness-evolution loop on held-out tasks with confidence intervals, and for expecting variance between lineages to dwarf the gain from revision.

## Key ideas

- **Design.** Nine model–effort conditions, 27 lineages and 81 frozen snapshots; a model writes its harness from a minimal coding bootstrap and then revises it twice using development games only.
- **Environment.** ARC-AGI-3's sequential, unfamiliar 64×64 grid worlds, played through a local engine; generated systems can call the configured runtime model only through the supplied client.
- **Construction is strong, revision is weak.** Some lineages reach near-ceiling scores; revisions change cost (median change −$0.54) more reliably than held-out score.
- **Process checks don't predict outcome.** All revision episodes satisfy the controller's process checks while held-out performance can still drop.
- **Risk framing.** Self-construction capability is reported separately from task performance, since a system may build the software it acts through even when it can't improve it.

## Caveats

One benchmark family and a two-revision protocol; a longer or differently selected evolution could behave differently. The study does not fully separate model capability, harness design and spending, and the human-steered comparison does not isolate the human contribution.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.30499
- PDF: https://arxiv.org/pdf/2610.30499
