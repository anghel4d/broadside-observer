---
title: "DISCERN: Preserve at Write, Resolve at Read for Persistent LLM-Agent Memory"
authors:
  - "Chirag Ahuja"
  - "Vladislav Tanov"
  - "Ramcharan Kakarla"
  - "Jonathan Taws"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.15729"
doi: null
source: "https://arxiv.org/abs/2611.15729"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
seed_rank: 2585
seed_batch: "frontier-2026-11-14"
reviewed: "2026-11-14"
pool: "agents"
relevance_score: 8
cites:
  - title: "DISCERN: Preserve at Write, Resolve at Read for Persistent LLM-Agent Memory"
    url: "https://arxiv.org/abs/2611.15729"
    year: 2026
    arxiv: "2611.15729"
    doi: null
---

# DISCERN: Preserve at Write, Resolve at Read for Persistent LLM-Agent Memory

## One-sentence takeaway

DISCERN argues agent memory recall is already solved and the open problem is resolution (which entity, which time-state, whether to answer at all), and handles it with a strictly additive bi-temporal provenance graph plus a zero-LLM read toolset with four gated terminal actions.

## Why it matters here

Preserve at write, resolve at read is the provenance-first rule stated as an architecture. Never merging confusable entities and never dropping superseded values is how our repo memory should behave, and making abstention a first-class gated action is the piece most memory systems skip.

## Key ideas

- **Recall is saturated.** On ENT-310 (310 queries, 100 unanswerable), retention and currency sit around 0.93-0.98 for every competent system; plain RAG over the store matches strong memory systems there.
- **Additive write.** A bi-temporal provenance graph that never merges confusable entities and never drops superseded values.
- **Gated read.** A zero-LLM tool surface drives an agentic loop that ends in exactly one of four gated terminal actions.
- **Results.** Abstention F1 0.924 vs at most 0.802 over eight baselines; macro answer correctness 0.861 vs 0.806, driven by entity resolution (0.800 where no baseline exceeds 0.40).
- **Transfer.** With zero tuning on full LoCoMo it still leads macro correctness (0.663 vs 0.638).

## Caveats

ENT-310 is synthetic and built by the authors. Scoring uses an LLM-judge council. Graph growth and read cost over long deployments are not reported in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.15729
- PDF: https://arxiv.org/pdf/2611.15729
