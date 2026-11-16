---
title: "Only as Safe as the Weakest Agent: A Break That Appears Only When the System Is Multi-Agent"
authors:
  - "Keegan Wang"
  - "Anantika Mannby"
year: 2026
venue: "arXiv preprint (cs.MA)"
arxiv: "2611.17520"
doi: null
source: "https://arxiv.org/abs/2611.17520"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
  - "partial-observability-multiagent"
seed_rank: 2611
seed_batch: "frontier-2026-11-16"
reviewed: "2026-11-16"
pool: "agents"
relevance_score: 8
see:
  - 1120-position-multi-agent-systems-should-prioritize-concurrency-contr
cites:
  - title: "Only as Safe as the Weakest Agent: A Break That Appears Only When the System Is Multi-Agent"
    url: "https://arxiv.org/abs/2611.17520"
    year: 2026
    arxiv: "2611.17520"
    doi: null
---

# Only as Safe as the Weakest Agent: A Break That Appears Only When the System Is Multi-Agent

## One-sentence takeaway

Planting one forged record in a file store breaks Claude Code, Codex and a reference harness only when the strong orchestrator delegates reading to a cheaper sub-agent (20/180 up to 553/900 harmful revisions, versus almost zero over 1,000 trials when the orchestrator reads itself), so a multi-agent system is only as safe as its weakest reader.

## Why it matters here

Our fleets delegate constantly, and this localizes a failure to the delegation seam rather than to any one model: the orchestrator trusts a summary it did not verify. It supports keeping source handles on sub-agent results so the orchestrator can check evidence, and it is a ready-made red-team test for any Broadside harness that fans out to cheaper readers.

## Key ideas

- **Setup.** Agents answer questions from an on-disk file store containing a planted forged record.
- **Solo vs delegated.** Strong orchestrators searching themselves make almost zero harmful revisions in over 1,000 trials; with a cheaper sub-agent, failures are 20/180, 44/180, 75/180 and 553/900.
- **Real systems.** Claude Code, Codex and a reference harness, unmodified, using their own sub-agent mechanisms.
- **Aggregation.** In simulations over 18 models, five aggregators that are almost never unsafe alone repeat a corrupted sub-agent's error in 751/757 trials.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. One attack family (forged records in a store); the abstract does not test mitigations such as requiring citations or re-reading sources.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17520
- PDF: https://arxiv.org/pdf/2611.17520
