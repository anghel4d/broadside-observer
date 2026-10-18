---
title: "StarSkirmish Bench v0.2: LLMs write StarCraft: Brood War bots in one hour"
authors:
  - "StarSkirmish"
year: 2026
venue: "StarSkirmish benchmark report (web)"
arxiv: null
doi: null
source: "https://starskirmish.com/bench/v0-2/"
topics:
  - "strategy-rts-agents"
  - "agent-benchmarks"
  - "code-as-action"
seed_rank: 2343
seed_batch: "frontier-2026-10-18"
reviewed: "2026-10-18"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "StarSkirmish Bench v0.2"
    url: "https://starskirmish.com/bench/v0-2/"
    year: 2026
    arxiv: null
    doi: null
  - title: "StarSkirmish Bench v0.1"
    url: "https://starskirmish.com/bench/v0-1/"
    year: 2026
    arxiv: null
    doi: null
  - title: "BWAPI: Brood War API"
    url: "https://github.com/bwapi/bwapi"
    year: 2009
    arxiv: null
    doi: null
see:
  - 348-bwapi-brood-war-api
---

# StarSkirmish Bench v0.2: LLMs write StarCraft: Brood War bots in one hour

## One-sentence takeaway

Each frontier model gets one wall-clock hour in its own lab's CLI harness to turn a mining-only skeleton into a C++ Protoss bot on BWAPI 4.4.0 / OpenBW. GPT-6 Astra tops v0.2 (published 15 Oct 2026), ahead of GPT-6.1 Sol; Gemini 4 Argon, Claude Opus 5.5 and Fable 5.1 tie at 37–39. Even the best model wins only 7% of games against Stardust, PurpleWave and BananaBrain, and the strongest predictor of score is how much the agent practised against strong bots during the hour.

## Why it matters here

This is the benchmark closest to GRID COMMAND's own question, whether coding agents can build competitive RTS AI under time pressure, and it is unsaturated. Its behavioural finding is actionable for our harnesses: agents that start losing to strong opponents early and learn from those game logs beat agents that farm easy wins. It also shows a long-horizon coding eval drifting away from the headline indices (ρ ≈ 0.26 with the Artificial Analysis Intelligence Index) while still tracking IOI-style C++ and WeirdML.

## Key ideas

- **Setup.** PvP on Heartbreak Ridge, Benzene and Destination. The agent gets FAP (combat simulator), BWEM (map analyzer), three demo bots' source, and tools to compile, play practice games and read game summaries, transcripts and its own bot's logs. Whatever compiles in the bot folder at the hour mark is the entry, and there is no submit tool.
- **Fixed-roster scoring.** v0.2 drops v0.1's Elo for plain win rates against a fixed roster: 10 competitive human-written bots plus 3 demo bots, 6 games per map on fresh seeds, 5 runs per model. New models can be scored without replaying the field, and scores stay comparable over time.
- **First-party harnesses at max effort.** Claude Code, Codex, Antigravity CLI and Muse Code, all compacting at about 250K tokens, with web search and fetch disabled. That is a change from v0.1's single neutral harness, so model and harness effects are confounded on purpose.
- **Practice predicts score.** A linear fit of score against the median number of practice games versus the 7 strongest roster bots explains most of the spread. Fable 5.1 is the outlier, scoring 37 while practising mostly against weaker bots.
- **Variance.** Gemini 4 Argon's best and worst runs are 18 points apart, against 9 for GPT-6 Astra and 8 for Opus 5.5. The cost plot puts GPT-6.1 Sol alone in the cheap and strong quadrant at roughly a tenth of Astra's cost per run.

## Caveats

This is a web report, not peer-reviewed, and the authors are not named on the page. There are five runs per model, three two-player maps and Protoss mirror only, so this is far easier than real bot-tournament conditions. Harness differences are baked into the scores, Gemini runs at "high" rather than "max", and Muse Wonder Full's cost is estimated from another model's price. WeirdML has no scores for two of the nine models. One hour may cap the scores more than the models' skill does.

## Links

- StarSkirmish Bench v0.2: https://starskirmish.com/bench/v0-2/
- StarSkirmish Bench v0.1: https://starskirmish.com/bench/v0-1/
- BWAPI: https://github.com/bwapi/bwapi
