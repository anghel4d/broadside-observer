---
title: "Top-$k$ Retrieval Leaves Memory Value Undetermined"
authors:
  - "Arman Behnam"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.03289"
doi: null
source: "https://arxiv.org/abs/2611.03289"
topics:
  - "provenance-first-agent-memory"
  - "continual-agent-skills"
seed_rank: 2513
seed_batch: "frontier-2026-11-04"
reviewed: "2026-11-04"
pool: "agents"
relevance_score: 8
cites:
  - title: "Top-$k$ Retrieval Leaves Memory Value Undetermined"
    url: "https://arxiv.org/abs/2611.03289"
    year: 2026
    arxiv: "2611.03289"
    doi: null
---

# Top-$k$ Retrieval Leaves Memory Value Undetermined

## One-sentence takeaway

A retrieval log of which memories were fetched and whether the episode succeeded cannot identify individual memory values under top-k retrieval, however many episodes are logged; LEDGER reports only the Shapley values the log actually determines, with confidence intervals, and retrieves so future logs determine more.

## Why it matters here

Memory systems that score, merge or prune memories from usage logs are assigning numbers the data cannot support. That matters for any self-improving agent or skill library that ranks entries by past success. The fix is a design rule: decide what you want to learn about memory value, then retrieve in a way that makes it identifiable.

## Key ideas

- **Identifiability from counts.** How often each memory was retrieved and how often each pair co-occurred decide, before any outcome, which values are determined.
- **Negative result.** Top-k retrieval leaves every memory value undetermined; a question with its own memories, asked once, determines at most one of them. On 14 memory benchmarks, no value is determined in any of 55 configurations.
- **LEDGER.** Closed-form Shapley estimates with intervals for determined values, everything else reported as undetermined; merges memories with identical histories safely; designs retrieval so the next log determines more.
- **Trade-off.** On pooled HotpotQA the determined fraction rises from 0.001 to 0.797, at a cost of 2.6 accuracy points; on LoCoMo accuracy rises 2.7.

## Caveats

Single-author paper; the accuracy cost on HotpotQA shows exploration has a price. Assumes the value model behind Shapley attribution fits the task.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.03289
- PDF: https://arxiv.org/pdf/2611.03289
