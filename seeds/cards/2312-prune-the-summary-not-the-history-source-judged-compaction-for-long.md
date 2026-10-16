---
title: "Prune the Summary, Not the History: Source-Judged Compaction for Long-Horizon Agents"
authors:
  - "Guanghui Min"
  - "Chen Chen"
year: 2026
venue: "arXiv"
arxiv: "2610.20927"
doi: null
source: "https://arxiv.org/abs/2610.20927"
topics:
  - "provenance-first-agent-memory"
  - "agent-failure-localization"
seed_rank: 2312
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "agents"
relevance_score: 9
lineage: runtime-harness-evolution
cites:
  - title: "Prune the Summary, Not the History: Source-Judged Compaction for Long-Horizon Agents"
    url: "https://arxiv.org/abs/2610.20927"
    year: 2026
    arxiv: "2610.20927"
    doi: null
see: []
---

# Prune the Summary, Not the History: Source-Judged Compaction for Long-Horizon Agents

## One-sentence takeaway

Context-compaction summaries mix environment-established facts with the compressor's own reasoning; in a widely used structured compressor 83% of failed runs trace to an action executing a specific summary entry, mostly unsupported by any environment output, and Source-Judged Compaction drops entries with no source, lifting cross-run reliability 2.1–8.9% at no extra agent tokens.

## Why it matters here

Every long-running Broadside agent (including this radar) lives through compaction; this is a cheap, training-free, provenance-first filter that slots between any compressor and any agent, and it names the specific failure: the agent obeys a plan line the summarizer invented.

## Key ideas

- **Summary as periodic reasoning.** Compaction prompts ask for decisions and next steps, so summaries contain new claims the environment never produced; afterwards the agent cannot tell them apart from observed facts.
- **Failure trace.** In failed runs, 83% trace back to an action that carries out a specific summary entry, most with no supporting environment output.
- **SJC.** Post-process each summary entry: does it have a source in environment outputs or the previous summary? Remove it if not. Neither agent nor compressor changes; one inexpensive judge request per compaction.
- **Calibrated judge.** The judge is a non-generative decision model returning a probability rather than text.
- **Results.** AppWorld and OfficeBench, two agent models: +2.1% to +8.9% cross-run reliability over the underlying compressor without raising agent token usage.

## Caveats

Filters by provenance, not correctness: supported and unsupported entries are correct at similar rates, wrong conclusions drawn from real observations survive, and the judge errs toward pruning, sometimes deleting helpful notes (one AppWorld case broke a weaker agent model). Two benchmarks, two agent models, one compressor family. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.20927
- PDF: https://arxiv.org/pdf/2610.20927
- HTML: https://arxiv.org/html/2610.20927v1
