---
title: "Agent Memory as Rate-Limited Filtering: Explicit State Outlasts Long Context Beyond a Reader-Dependent Horizon"
authors:
  - "Tianhao Guo"
  - "Chongyao Guo"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2611.02361"
doi: null
source: "https://arxiv.org/abs/2611.02361"
topics:
  - "provenance-first-agent-memory"
seed_rank: 2512
seed_batch: "frontier-2026-11-04"
reviewed: "2026-11-04"
pool: "agents"
relevance_score: 9
cites:
  - title: "Agent Memory as Rate-Limited Filtering: Explicit State Outlasts Long Context Beyond a Reader-Dependent Horizon"
    url: "https://arxiv.org/abs/2611.02361"
    year: 2026
    arxiv: "2611.02361"
    doi: null
---

# Agent Memory as Rate-Limited Filtering: Explicit State Outlasts Long Context Beyond a Reader-Dependent Horizon

## One-sentence takeaway

Treating agent memory as recursive filtering over an event log, with a model parsing each line and an explicit rule applying the update, beats long context, relevance retrieval, model-kept ledgers and Mem0 on access-control histories, and the length at which explicit state beats reading the whole log grows with the reader model.

## Why it matters here

This is the cleanest argument yet for the provenance-first memory design we keep returning to: keep the raw log, but answer from a state computed by explicit rules over it. It also gives a usable bound: a store with fewer component records than the true state forgets on a timescale set by its capacity, and order-blind retention errs with probability approaching one half.

## Key ideas

- **Benchmark.** Executable histories of grants, withdrawals, reinstatements, expiries, groups and change windows under a known policy; scored on history pairs that differ only in event order or one field.
- **Long context decays.** Open 7–32B models drop from 72–86% after 8–16 events to 48–55% after 256; reasoning 32B models reading the current state reach 96–98%. A 120B reasoning model trails the state by about ten points at 1,024 events.
- **Filter wins.** Model parses each line, a rule applies it: 80–89% at 256 events. Having the model apply its own parsed updates falls to 58–59%.
- **Selection by dependency.** A query-time retriever that picks exactly the lines the queried state depends on matches the filter, so what matters is selecting by the state's dependencies, which the filter does at write time.
- **Theory.** Capacity-limited stores forget on a predictable timescale (reader accuracy predicted within 0.02 in a registered test); time-order-blind retention approaches 50% error, and that bound is attained.

## Caveats

The domain has a known, formal policy; most real agent memory has no clean update rule, which is where the approach needs a model to write the rule. Two domains, replicated with fresh wording.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.02361
- PDF: https://arxiv.org/pdf/2611.02361
