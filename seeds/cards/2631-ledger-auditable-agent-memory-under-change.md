---
title: "LEDGER: Auditable Agent Memory Under Change"
authors:
  - "Md Aidul Islam"
  - "Md Nasir Uddin Shuvo"
  - "Muhammad Waseem"
  - "Pekka Abrahamsson"
year: 2026
venue: "arXiv preprint (cs.MA)"
arxiv: "2611.20927"
doi: null
source: "https://arxiv.org/abs/2611.20927"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
seed_rank: 2631
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "agents"
relevance_score: 8
see:
  - 171-tepa-revoking-stale-memories-for-conflict-robust-language-ag
  - 2608-forget-the-lineage-forward-secure-lineage-complete-cryptographic-erasure
  - 2383-compaction-laundering-provenance-destruction-in-context-compacting-coding
cites:
  - title: "LEDGER: Auditable Agent Memory Under Change"
    url: "https://arxiv.org/abs/2611.20927"
    year: 2026
    arxiv: "2611.20927"
    doi: null
---

# LEDGER: Auditable Agent Memory Under Change

## One-sentence takeaway

LEDGER is an agent memory layer where the LLM only proposes facts while explicit rules decide which value is current, which source to trust and what to delete, with every fact keeping its source and validity period; in augment mode it matches full-history replay's accuracy on a 210-question LongMemEval subset with 1% of the context.

## Why it matters here

This is close to the provenance-first memory design we want: model proposes, rules decide, each fact carries source and time span, and deletion is scored on whether the deleted value can still reach the model's evidence. Scoring the evidence sent to the model, not just the final answer, is the evaluation stance we have been arguing for, and it pairs with lineage-complete erasure (2608).

## Key ideas

- **Split of authority.** A language model proposes facts; explicit rules decide currency, source trust and deletion.
- **Provenance.** Each fact keeps its source and the period in which it held.
- **LEDGER+EP.** Adds search over raw conversation turns for questions the ledger does not cover, and scrubs those turns on deletion.
- **Evidence-level scoring.** Compared with no memory, full replay, transcript retrieval and Mem0 under the same answering model; both the evidence sent and the answer are scored.
- **Results.** Synthetic coding workload: 94.3% (dev seeds) and 91.1% (held-out seeds) for LEDGER+EP fallback vs 82.1% and 83.3% for full replay; LongMemEval subset (210 questions): 74.8%, same as full replay, with 1% of its context; no deleted value reached evidence in any evaluated probe when deletion requests only described the fact.

## Caveats

Abstract-level read of the v1 preprint (Tuesday 17 Nov 2026 listing). The authors note the coding workload is synthetic and self-built, and on LongMemEval the strongest systems are within confidence intervals of each other.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.20927
- PDF: https://arxiv.org/pdf/2611.20927
- HTML: https://arxiv.org/html/2611.20927v1
