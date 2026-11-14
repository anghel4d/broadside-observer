---
title: "Folio: Recoverable Multi-Resolution Context Folding for Long-Horizon Language Agents"
authors:
  - "Yubo Ruan"
  - "Tao Peng"
  - "Jiao Zhang"
  - "Chuanguo Ma"
  - "Lei Xu"
  - "Han Zhou"
  - "Wenwu Wang"
  - "Xiafei Lv"
  - "Xingjie Zhou"
  - "Guiju Fan"
  - "Hao Wang"
  - "Fenghui Zhang"
  - "Mao Miao"
  - "Shuo Li"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.16627"
doi: null
source: "https://arxiv.org/abs/2611.16627"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
  - "agent-tokenization-and-caching"
seed_rank: 2583
seed_batch: "frontier-2026-11-14"
reviewed: "2026-11-14"
pool: "agents"
relevance_score: 9
see:
  - 2312-prune-the-summary-not-the-history-source-judged-compaction-for-long
  - 2383-compaction-laundering-provenance-destruction-in-context-compacting-coding
cites:
  - title: "Folio: Recoverable Multi-Resolution Context Folding for Long-Horizon Language Agents"
    url: "https://arxiv.org/abs/2611.16627"
    year: 2026
    arxiv: "2611.16627"
    doi: null
---

# Folio: Recoverable Multi-Resolution Context Folding for Long-Horizon Language Agents

## One-sentence takeaway

Folio records each agent turn at three linked levels (a model-written turn note, a runtime event manifest, and the captured source records), folds old context by swapping in coarser levels without a model call, and leaves handles so the agent can page the evidence back; it solves 66 of 75 LOCA-bench tasks against 49-59 for Claude Code, Codex and SoL-Pi.

## Why it matters here

This is the provenance-first answer to compaction that cards 2312 and 2383 asked for: nothing is rewritten by a model, every folded turn keeps a handle to its source records, and recovery is a bounded page read rather than a re-summary. It also treats the fold trigger as a priced decision that includes the retained budget, which is how a cache-aware harness should think about compaction. The L1/L2/L3 split maps directly onto our harness logs (turn note, event log, raw artifacts).

## Key ideas

- **Three levels, written as the agent runs.** L1 is a short turn note the model writes inside its ordinary reply, L2 is an event manifest of every call written by the runtime, L3 is the captured source records.
- **Programmatic fold.** Because the coarser views already exist, the runtime folds by picking coarser views for older turns; median fold time is 0.6 s.
- **Handles in the fold.** The folded context prints handles into L2 and L3, so recovery tools (bounded page reads, compute over full text in files, a persistent findings dossier) fetch evidence with little added input.
- **Priced trigger.** The fold trigger prices an explicit landing point that includes the retained budget, instead of taking the size of the compacted result as given.
- **Results.** With DeepSeek-V4-Pro behind every system: 66/75 tasks vs 54 for the same runtime with model-written compaction and 49-59 for Claude Code, Codex and SoL-Pi, in about half the working time and at 2.4x lower cost than that runtime.

## Caveats

One benchmark (LOCA-bench, 75 tasks) and one backbone model. The comparison with commercial harnesses runs them on a model they were not tuned for. Abstract-level read; how turn-note quality degrades with weaker models is not covered here.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.16627
- PDF: https://arxiv.org/pdf/2611.16627
