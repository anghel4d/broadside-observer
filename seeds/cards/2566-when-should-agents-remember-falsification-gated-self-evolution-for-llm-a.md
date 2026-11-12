---
title: "When Should Agents Remember? Falsification-Gated Self-Evolution for LLM Agents"
authors:
  - "Runxuan Tang"
  - "Haoyu Gao"
  - "Yuyan Ding"
  - "Junyi Yao"
  - "Zihao Zheng"
  - "Zecheng Sheng"
  - "Liwei Hou"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.14326"
doi: null
source: "https://arxiv.org/abs/2611.14326"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
  - "autoresearch-experiment-selection"
seed_rank: 2566
seed_batch: "frontier-2026-11-12"
reviewed: "2026-11-12"
pool: "agents"
relevance_score: 8
cites:
  - title: "When Should Agents Remember? Falsification-Gated Self-Evolution for LLM Agents"
    url: "https://arxiv.org/abs/2611.14326"
    year: 2026
    arxiv: "2611.14326"
    doi: null
---

# When Should Agents Remember? Falsification-Gated Self-Evolution for LLM Agents

## One-sentence takeaway

Falsification-Gated Self-Evolution treats every candidate lesson as a hypothesis with a precondition, behavior change, expected effect and verifier, tests it in a temporary state on transfer, falsification and regression probes, and only then commits it.

## Why it matters here

Our continual-skills question is exactly when an experience should be allowed into persistent state. This gives an admission protocol that reads like an experiment design, and it cuts harmful committed updates to 3.6% while keeping strong task scores. It pairs naturally with the RSI Tax card (2567): gate hard, but watch what the gate costs.

## Key ideas

- **Lesson as hypothesis.** Explicit precondition, behavior change, expected effect and verifier.
- **Temporary application.** Applied only in a sandboxed state, then tested on target-transfer, falsification and archived-regression probes.
- **Commit, refine or reject** by measured gain and risk.
- **Results.** 39.8 WebArena success, 78.8 AppWorld completion, 0.724/0.487 Pass^1 on tau-Retail/tau-Airline; falsification failures 5.0%, regression damage 1.3%, harmful commits 3.6%.

## Caveats

Needs verifier-rich environments; the token cost of running probes per candidate lesson is not reported in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.14326
- PDF: https://arxiv.org/pdf/2611.14326
