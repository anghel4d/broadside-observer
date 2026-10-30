---
title: "TableTune: Measured, Self-Correcting Draft-Length Tables for Dynamic Speculative Decoding"
authors:
  - "Abhishek Malvankar"
  - "Paul Castro"
  - "Nick Mitchell"
  - "Lionel Villard"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.38968"
doi: null
source: "https://arxiv.org/abs/2610.38968"
topics:
  - "agentic-llm-serving"
seed_rank: 2468
seed_batch: "frontier-2026-10-30"
reviewed: "2026-10-30"
pool: "systems"
relevance_score: 8
see:
  - 1581-speculative-macro-commit-for-faster-tool-using-agents
  - 2450-wakman-workload-aware-kvcache-manager
cites:
  - title: "TableTune: Measured, Self-Correcting Draft-Length Tables for Dynamic Speculative Decoding"
    url: "https://arxiv.org/abs/2610.38968"
    year: 2026
    arxiv: "2610.38968"
    doi: null
---

# TableTune: Measured, Self-Correcting Draft-Length Tables for Dynamic Speculative Decoding

## One-sentence takeaway

Speculative decoding only pays while the GPU has spare compute, so the best draft length shrinks as batches grow; TableTune measures vLLM's own decode step for every batch size and draft length, builds the throughput-maximizing table in minutes, and keeps correcting it from live acceptance rates.

## Why it matters here

It is a small, practical serving lever: vLLM already takes a hand-written per-batch-size draft table, and nothing checks it. Measuring instead of guessing recovered up to 58% throughput from mistuned tables and beat the documented table by up to 25–32% in a shipped llm-d deployment, which is the kind of concrete win a serving engagement can deliver.

## Key ideas

- **Tuner.** Times the real decode step on vLLM's serving path for each batch size and draft length and solves for the best table.
- **Controller.** A vLLM plugin tracks accepted guesses in live traffic and rebuilds the table while serving, recovering 96% of a stale table's loss after a workload switch.
- **Robust without knowing the answer.** At least 94% of the best fixed draft length's throughput at every load in four of five drafter settings (88% in the fifth).
- **MoE matters.** On a mixture-of-experts model the documented table loses up to 18%, the tuned one at most 3%; worst-case loss with EAGLE-3 is 3% versus 9% and 12% for TurboSpec- and Nightjar-style control.

## Caveats

Compared only against other ways to speculate, not against no speculation. Most results are on a single H100 setup; the baselines are reimplementations on the same engine.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.38968
- PDF: https://arxiv.org/pdf/2610.38968
