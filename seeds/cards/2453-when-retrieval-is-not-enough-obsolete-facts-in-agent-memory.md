---
title: "When Retrieval Is Not Enough: Obsolete Facts in Agent Memory"
authors:
  - "Oleeviya Babu Poikarayil"
  - "Tony Basil Babu"
  - "Abdulrahman Nahhas"
  - "Het Darshan Mehta"
  - "Jawid Ahmad Baktash"
  - "Ernesto William De Luca"
  - "Klaus Turowski"
year: 2026
venue: "NeurIPS 2026 Workshop on Personalized, Aligned, Long-Term Memory for AI Systems (PALM)"
arxiv: "2610.36308"
doi: null
source: "https://arxiv.org/abs/2610.36308"
topics:
  - "provenance-first-agent-memory"
seed_rank: 2453
seed_batch: "frontier-2026-10-28"
reviewed: "2026-10-28"
pool: "agents"
relevance_score: 8
see:
  - 2406-stale-instruction-files-override-the-code-in-coding-agents
cites:
  - title: "When Retrieval Is Not Enough: Obsolete Facts in Agent Memory"
    url: "https://arxiv.org/abs/2610.36308"
    year: 2026
    arxiv: "2610.36308"
    doi: null
---

# When Retrieval Is Not Enough: Obsolete Facts in Agent Memory

## One-sentence takeaway

On MemoryAgentBench's FactConsolidation task, retrieving more evidence makes answers worse (BM25 accuracy falls from 45% to 32% as the budget grows from 64 to 512 tokens) even though the newest fact is always retrieved, because an obsolete version of the same fact is far more harmful than unrelated filler: swapping one unrelated statement for the stale one drops accuracy from 100% to 44.6% for Qwen2.5-7B.

## Why it matters here

This is the failure provenance-first memory exists to prevent. Retrieval that returns "the right fact" alongside its superseded version is not a fix; the memory layer has to mark supersession (dates, versions, which statement replaced which) so the model never has to adjudicate. Our own memory rule, newest wins on conflict, is the right instinct, and this measures what happens when the store leaves that job to the reader.

## Key ideas

- **Separate retrieval from use.** A gold-assisted audit shows the newest statement is in every retrieved set, so failures are about using evidence, not finding it.
- **Bigger budget, worse answers.** More retrieved tokens means more chances to include the stale competitor.
- **Controlled swap.** With prompt and evidence size fixed, replacing one unrelated statement with the obsolete one drops accuracy from 100% to 44.6% (Qwen2.5-7B) and 87.8% (Qwen3-14B); all 50 harmful paired flips answer with the stale value.
- **Replicates at 32K history.** BM25-64 still beats BM25-512, 69% to 58%.

## Caveats

Workshop paper on one single-hop synthetic task with small open models and BM25; stronger models are less affected (87.8% vs 44.6%). No mitigation such as timestamps or supersession links is tested.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.36308
- PDF: https://arxiv.org/pdf/2610.36308
