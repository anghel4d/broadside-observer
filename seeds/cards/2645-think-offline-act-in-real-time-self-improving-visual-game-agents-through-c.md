---
title: "Think Offline, Act in Real Time: Self-Improving Visual Game Agents through Code"
authors:
  - "Zipeng Qiu"
  - "Shusheng Xu"
  - "Jiale Li"
  - "Yukun Zhou"
  - "Chenyue Li"
  - "Wenshuang Li"
  - "Tongkai Yang"
  - "Binhang Yuan"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.24590"
doi: null
source: "https://arxiv.org/abs/2611.24590"
version_reviewed: "v1"
topics:
  - "game-agents"
  - "code-as-policy"
  - "real-time-control"
  - "self-improvement"
  - "skills"
seed_rank: 2645
seed_batch: "craft-2026-11-19"
reviewed: "2026-11-19"
pool: "game-ai"
relevance_score: 7
see:
  - "006-voyager-an-open-ended-embodied-agent-with-large-language-mod"
cites:
  - title: "Think Offline, Act in Real Time: Self-Improving Visual Game Agents through Code"
    url: "https://arxiv.org/abs/2611.24590"
    year: 2026
    arxiv: "2611.24590"
    doi: null
---

# Think Offline, Act in Real Time: Self-Improving Visual Game Agents through Code

## One-sentence takeaway

On 170 real-time screen-only GameWorld tasks with at most eight one-minute attempts, a model that writes, tests and revises a program between attempts (code as policy) reaches 47.80% mean progress versus 30.90% for a trained 2B real-time controller, and wins in all five game categories.

## Why it matters here

GRID COMMAND needs AI opponents that act at game tick rate while a model may take seconds to think. This is direct evidence for a split we already lean toward: the model reasons offline and stores what it learned as an executable policy (script, rule set) that runs every tick. It also shows that tuning the controller's weights on a single game gave only modest gains, so improvement should go into the program, not the weights.

## Key ideas

- **Two policies.** Model as policy (model picks actions while playing) versus code as policy (model writes a program that plays).
- **Real-time chunking.** For the model policy, committed actions keep executing while the model reasons; the authors train a 2B controller for this interface.
- **Budget.** At most eight one-minute executions per run; the game keeps running while the agent thinks.
- **Result.** 47.80% vs 30.90% mean progress, code as policy leads in all five categories; per-game weight updates help only modestly.
- **Repo.** github.com/TabibitoQZP/SIGame.

## Caveats

Abstract-level read of the v1 preprint (18 Nov 2026). Mean progress on a benchmark the authors chose, not win rate against humans or scripted AIs; the code policy's model size and cost are not stated in the abstract. The games are screen-only and may not resemble a full RTS with many units.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.24590
- PDF: https://arxiv.org/pdf/2611.24590
- Code: https://github.com/TabibitoQZP/SIGame
