---
title: "F-Zero X on 3DS: G-Diffuser 3DS Port Postmortem"
authors:
  - "cruxxxxxx (G-Diffuser 3DS port; text written by the Claude agents, author's notes by the human)"
year: 2026
venue: "Project postmortem site (hypnotize.works)"
arxiv: null
doi: null
source: "https://hypnotize.works/gdx-3ds/postmortem/index.html"
topics:
  - "agentic-workflow"
  - "renderer"
  - "game-porting"
  - "performance"
seed_rank: 2442
seed_batch: "craft-2026-10-27"
reviewed: "2026-10-27"
pool: "engines"
lineage: agent-harness-runtime
relevance_score: 9
cites:
  - title: "gdx-3ds repository"
    url: "https://github.com/cruxxxxxx/gdx-3ds"
    year: 2026
    arxiv: null
    doi: null
see: ["1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent", "1447-jit-agent-scaling-harness-intelligence-via-just-in-time"]
---

# F-Zero X on 3DS: G-Diffuser 3DS Port Postmortem

## One-sentence takeaway

One person who never opened an editor directed Claude agents to port G-Diffuser (the PC port of the F-Zero X decompilation) to Nintendo 3DS in 11 weeks, reaching a locked 60 fps on New 3DS, a native PICA200 renderer that gets Old 3DS to a 60 fps median, and 2–4 player online play, for 22.59B tokens and about $19.6k at API list prices.

## Why it matters here

It's the most detailed public account we've seen of a long agentic build on hard real-time graphics code, and it hits both halves of Broadside. On the craft side, the Old 3DS chapter is a clean case study in why the "CPU interpreter re-walks the display list every frame" convention of N64 PC ports fails on a weak CPU, and how to replace it piece by piece with code that writes GPU commands directly. On the agent side, it documents a working topology (one long-lived orchestrator, worktree-per-lever subagents with committed briefs and progress files, a killswitch and receipt line per change, an emulator farm with tick-exact replays, the human as the only hardware oracle) with real counts and costs. That's a reference shape for the $5k agentic-workflow engagements.

## Key ideas

- **The measured bottleneck.** v0.9.0 ran the interpreter unchanged: about 219 KB of hot code against a 16 KB L1-I, 43.6% of Old 3DS render cycles stalled on fetch, 72–98 µs per game draw versus 10.9 µs for a clean citro3d draw, and a 96 ms first frame with the GPU busy only 3.6 ms.
- **Native renderer.** From 09-07, about 1,600 commits on 187 feature branches replaced the interpreter so that 0 of its 10,466 lines run during a race at default settings, from one codebase for two consoles; v1.1.0 submits both stereo eyes in one GPU submission.
- **Results on hardware.** New 3DS: all 120 one-second windows at 59–61 fps. Old 3DS: median 60, 85% of windows at 60, tenth percentile 56 (build ba0692e, 10-26).
- **Fleet.** 777 human prompts, 588 subagents and 1,288 workflow agents, 181k lines under port/3ds; first phase 147 subagents in 96 git worktrees. Agents never spoke to the user or touched mainline; the orchestrator merged after emulator smoke tests and, when risky, a hardware verdict.
- **Verification lane.** Azahar and RetroArch emulator pool with per-frame state hashes, frame/hash/screenshot diffs, adversarial review passes after merge windows, and a netloader push to real consoles.

## Caveats

Nearly all of the site was written by the agents that did the work, so the numbers are self-reported (from git history, transcripts and hardware logs the site links as raw sources), not independently checked. The cost is at list prices, and the cache-write billing line is noted separately. It builds on community decompilation work and Nintendo IP, so it's a technique reference, not something to ship from. I read the overview, the native renderer page (first part), the agentic workflow page (first part) and the author's notes; the full PDF and the remaining pages weren't read.

## Links

- Postmortem site: https://hypnotize.works/gdx-3ds/postmortem/index.html
- Native renderer chapter: https://hypnotize.works/gdx-3ds/postmortem/native.html
- Agentic workflow chapter: https://hypnotize.works/gdx-3ds/postmortem/agentic.html
- Cost chapter: https://hypnotize.works/gdx-3ds/postmortem/cost.html
- Postmortem PDF: https://hypnotize.works/gdx-3ds/postmortem/G-Diffuser-3DS-postmortem.pdf
- Repository: https://github.com/cruxxxxxx/gdx-3ds
