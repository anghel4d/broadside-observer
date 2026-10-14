---
title: "SpireBench: Evaluating Long-Horizon Strategic Play of Agentic Models with Slay the Spire"
authors:
  - "Scott C. Lowe"
  - "Sander W. Keemink"
year: 2026
venue: "arXiv"
arxiv: "2610.12596"
doi: null
source: "https://arxiv.org/abs/2610.12596"
topics:
  - "strategy-rts-agents"
  - "agent-failure-localization"
seed_rank: 2293
seed_batch: "frontier-2026-10-14"
reviewed: "2026-10-14"
pool: "game-ai"
relevance_score: 8
lineage: game-ai-planning
cites:
  - title: "SpireBench: Evaluating Long-Horizon Strategic Play of Agentic Models with Slay the Spire"
    url: "https://arxiv.org/abs/2610.12596"
    year: 2026
    arxiv: "2610.12596"
    doi: null
see: []
---

# SpireBench: Evaluating Long-Horizon Strategic Play of Agentic Models with Slay the Spire

## One-sentence takeaway

SpireBench gives LLMs the complete commercial Slay the Spire at Ascension 20: across 20 models, frontier models beat heuristic baselines and match the average human but fall far behind experts, with the gap widening each act because every model misjudges run-level risk.

## Why it matters here

A long-horizon strategy benchmark with real human telemetry and a knowledge-controlled reskin — the right shape of evaluation for GRID COMMAND's LLM-driven commanders, and a sharp diagnosis (hoarding health instead of spending it to grow stronger) that generalises to resource planning in RTS.

## Key ideas

- **Complete game.** First harness to give a model the full original game at its highest difficulty (A20), compared against existing harnesses.
- **Human references.** Mega Crit's released telemetry (206k A20 Ironclad runs) and run histories of four expert streamers.
- **Where gaps open.** The strongest models win Act 1 as often as experts, then fall behind; per-fight play separates strong from weak models.
- **Risk misjudgement.** All models preserve health rather than spending it to grow stronger over a run.
- **Knowledge control.** A self-consistent renaming of every game term shows part of performance rests on prior game knowledge; models do not improve from the cross-run memories they write, which are often wrong and overly cautious.

## Caveats

One character/deck-builder and one game; streamer histories are a small expert sample. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.12596
- PDF: https://arxiv.org/pdf/2610.12596
- HTML: https://arxiv.org/html/2610.12596v1
