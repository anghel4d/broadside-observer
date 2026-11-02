---
title: "Rome Wasn't Built in One Turn: Replay-Grounded Reward Signals for Long-Horizon Freeciv Agents"
authors:
  - "Yanchen Liu"
  - "Xinyu Che"
  - "Brihi Joshi"
  - "Renzo Fukuda"
  - "Junhua Liu"
  - "Ruifeng Li"
  - "Yunfei Ge"
  - "Hang Yan"
  - "Xiang Ren"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.41264"
doi: null
source: "https://arxiv.org/abs/2610.41264"
topics:
  - "game-ai"
seed_rank: 2494
seed_batch: "frontier-2026-11-02"
reviewed: "2026-11-02"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "Rome Wasn't Built in One Turn: Replay-Grounded Reward Signals for Long-Horizon Freeciv Agents"
    url: "https://arxiv.org/abs/2610.41264"
    year: 2026
    arxiv: "2610.41264"
    doi: null
---

# Rome Wasn't Built in One Turn: Replay-Grounded Reward Signals for Long-Horizon Freeciv Agents

## One-sentence takeaway

In-game scores pick the worse future position in 8 to 68% of position pairs across eight strategy games, so the authors branch and replay saved Freeciv states to future turns, train a judge on those outcomes, and use it as a dense reward that beats end-of-game reward by 77% in the mid-game.

## Why it matters here

This is 4X game AI with an engine-level trick: save state, branch, replay forward, and learn a value judge from real outcomes. That is directly relevant to GRID COMMAND's AI and to any deterministic, snapshot-able simulation, which is what an ECS world with a fixed tick gives you for free.

## Key ideas

- **Scoreboard traps.** Dense in-game scores are often anti-correlated with eventual outcomes, especially mid-game.
- **CivHarness.** An open system that saves Freeciv states, branches on decisions and replays to future turns for measured long-horizon feedback.
- **CivTelescope.** An LLM judge trained to pick the better of two positions; 1.3 to 2.0 times more accurate than off-the-shelf models on trap pairs, and it generalizes to new starts, later turns and unseen rules.
- **CivMarshmallow.** RL with the judge as dense reward; a hybrid that shifts from scoreboard or end-of-game reward to the judge as the game advances scores best over 120 turns.

## Caveats

LLM agents, not classical game-tree search; replay cost is high and depends on a deterministic, save-able simulator. One game for training, 120-turn games.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.41264
- PDF: https://arxiv.org/pdf/2610.41264
