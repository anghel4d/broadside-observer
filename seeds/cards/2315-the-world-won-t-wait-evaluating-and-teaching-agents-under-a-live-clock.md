---
title: "The World Won't Wait: Evaluating and Teaching Agents Under a Live Clock"
authors:
  - "Ningxin Pan"
  - "Hanyu Li"
  - "Yeqing Shen"
  - "Ning Ding"
  - "Yehui Tang"
  - "Wentao Zhang"
year: 2026
venue: "arXiv"
arxiv: "2610.20665"
doi: null
source: "https://arxiv.org/abs/2610.20665"
topics:
  - "strategy-rts-agents"
  - "nl-game-commands"
seed_rank: 2315
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "game-ai"
relevance_score: 8
lineage: game-ai-planning
cites:
  - title: "The World Won't Wait: Evaluating and Teaching Agents Under a Live Clock"
    url: "https://arxiv.org/abs/2610.20665"
    year: 2026
    arxiv: "2610.20665"
    doi: null
see: []
---

# The World Won't Wait: Evaluating and Teaching Agents Under a Live Clock

## One-sentence takeaway

When games keep running during inference, the slower, stronger model loses: on RealtimeBench (180 tasks, six game types) GPT-6.1-sol beats a faster model when paused but falls behind live, and TORSI, a slow teacher that practices in paused games and writes reusable instructions for a fast student, raises the fast model from 13.51 to 24.19 on a 0–100 progress scale.

## Why it matters here

GRID COMMAND is real-time; this is the cleanest current framing of latency as part of competence, plus a practical two-timescale recipe (deliberate offline, act fast online) that maps onto commander-versus-unit-controller splits in RTS bots.

## Key ideas

- **Live-clock protocol.** The environment advances during the agent's thinking and tool calls; the same tasks run paused for a paired comparison.
- **Ranking flips.** Paused-clock and live-clock leaderboards disagree: deliberation that wins when time stops loses when it does not.
- **TORSI.** A slow teacher studies failures and tests corrections in paused or reset games between attempts, then writes reusable instructions; the fast student acts with no teacher calls during play; validation scores gate which updates are adopted.
- **Results.** Two rounds lift the fast model 13.51 to 24.19 average, improving all six game types; the instructions also improve three other models without retuning.

## Caveats

Actors receive structured state descriptions rather than raw pixels, so perception latency and errors are excluded; TORSI needs saved states or resettable environments for teacher practice, which limits it to simulation. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.20665
- PDF: https://arxiv.org/pdf/2610.20665
- HTML: https://arxiv.org/html/2610.20665v1
