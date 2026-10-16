---
title: "A team of Gemini 4 Argon agents beats Minecraft"
authors:
  - "Maxence Faldor"
  - "Satinder Singh"
  - "Roberta Raileanu"
year: 2026
venue: "arXiv"
arxiv: "2610.22319"
doi: null
source: "https://arxiv.org/abs/2610.22319"
topics:
  - "strategy-rts-agents"
  - "continual-agent-skills"
seed_rank: 2311
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "agents"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "A team of Gemini 4 Argon agents beats Minecraft"
    url: "https://arxiv.org/abs/2610.22319"
    year: 2026
    arxiv: "2610.22319"
    doi: null
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
---

# A team of Gemini 4 Argon agents beats Minecraft

## One-sentence takeaway

Four Gemini 4 Argon coding agents, coordinating only through in-game chat and shared memory, wrote 2,783 Mineflayer programs and defeated Minecraft's Ender Dragon from a random Easy-difficulty world in 27 h 14 min with no human-written game logic, assigned roles or pre-scouted seeds.

## Why it matters here

A clean existence proof for day-long, multi-agent, code-as-action play: the same loop (agents write, run and debug programs against a game API, share what they learn, recover each other) is what GRID COMMAND bots and Broadside's long-horizon agent fleets need, and the paper publishes the token bill and cache-hit rate that make the economics concrete.

## Key ideas

- **Code as the only action channel.** Each agent drives one player through the open-source Mineflayer library; every move is a program the agent wrote and debugged itself. Successor in spirit to Voyager's Mineflayer skill library, but end-to-end and multi-agent.
- **Emergent team structure.** Nobody assigned roles; the agents divided the work, shared learned recipes, and retrieved each other's items after deaths.
- **Day-long coherence.** The win required a plan held across thousands of dependent steps for more than a day: Nether, stronghold search, then a ~14-hour End fight.
- **Verification and witness.** Every program, output, chat message and the server log were recorded; the win is the server's Free the End advancement; a fifth Observer agent watched for cheating or specification gaming and found none (nor did a manual log sample).
- **Cost.** ~1.35B input tokens (91% from context cache), ~16M output tokens over ~24,000 calls; roughly $520 to the win at introductory list price ($1,040 standard), estimated from token counters.

## Caveats

Single run (the first launch tried), so no reliability estimate. Mineflayer exposes exact block and entity state (including blocks behind rock and the dragon's internal state) and a pathfinding plugin, far easier than pixels plus keyboard. Easy difficulty; the model has extensive prior knowledge of Minecraft and Mineflayer; 605 deaths, 22% of programs errored, 6 server restarts. Preprint, Oct 2026; author affiliations are not rendered in the arXiv HTML.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.22319
- PDF: https://arxiv.org/pdf/2610.22319
- HTML: https://arxiv.org/html/2610.22319v1
