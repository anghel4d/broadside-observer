---
title: "Context Is a Pipeline, Not a Window: Information Attrition in LLM Agent Harnesses"
authors:
  - "Yuvraj Sehgal"
  - "Mahsa Panahandeh"
  - "Naser Ezzati-Jivan"
year: 2026
venue: "arXiv preprint (cs.SE)"
arxiv: "2610.36114"
doi: null
source: "https://arxiv.org/abs/2610.36114"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
seed_rank: 2448
seed_batch: "frontier-2026-10-28"
reviewed: "2026-10-28"
pool: "agents"
relevance_score: 9
see:
  - 2427-benchmarks-are-surprisingly-compaction-friendly
  - 1822-harness-or-model-isolating-the-harness-effect-in-agentic-coding-with
cites:
  - title: "Context Is a Pipeline, Not a Window: Information Attrition in LLM Agent Harnesses"
    url: "https://arxiv.org/abs/2610.36114"
    year: 2026
    arxiv: "2610.36114"
    doi: null
---

# Context Is a Pipeline, Not a Window: Information Attrition in LLM Agent Harnesses

## One-sentence takeaway

In a kernel-trace fault-diagnosis agent whose largest prompt used only 5.75% of its window, the harness still cut a third of all tool results (3,827 of 11,189) by slicing their JSON at a fixed length, so one field reached the model in 4.7% of calls while another in the same results arrived 99.3% of the time, and the agent's diagnosis accuracy matched that same split.

## Why it matters here

Every bot here sits behind a harness that truncates tool output somewhere, and a cut nobody logs looks exactly like a model mistake. The paper's framing, context as a five-stage pipeline with a measurable loss at each stage, is the right instrument for model-vs-harness blame: before blaming the model, count what was deleted on the way in. It also argues for structure-aware truncation (drop records, keep valid JSON, say what was dropped) in any tool wrapper we write.

## Key ideas

- **Pipeline model.** Tool output passes through five stages before the model sees it, each with its own measured failure; window size measures only the last stage.
- **Naive slicing is biased, not uniform.** Cutting serialized JSON at a fixed length deletes whatever sits near the end and leaves broken JSON every time; which evidence survives depends on record order, here on when the faulty process started.
- **Replay.** 864 real tool results replayed, including a production trace where the shipped cut removes all 128 records of the fault's evidence.
- **Cost shows up as work first.** In a controlled experiment the cut produced 43% more tool calls, twice the compute and yield falling from 0.61 to 0.31; the agent often still got the answer by another route.
- **Not an isolated bug.** A survey of seven agent frameworks found two that truncate tool output the same unsafe way.

## Caveats

Five-page paper on one agent, one task family (Linux kernel traces) and one harness. The authors say themselves that causation from cut to accuracy drop is not established; the controlled result is about extra work. Framework survey is small and names no fix benchmark.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.36114
- PDF: https://arxiv.org/pdf/2610.36114
- Replication package: https://doi.org/10.5281/zenodo.23614755
