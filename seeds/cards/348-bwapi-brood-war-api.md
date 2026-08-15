---
title: "BWAPI: Brood War API"
authors:
  - "BWAPI community"
year: 2010
venue: "GitHub"
arxiv: null
doi: null
source: "https://github.com/bwapi/bwapi"
topics:
  - rts
seed_rank: 348
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "Grandmaster level in StarCraft II using multi-agent reinforcement learning"
    url: "https://doi.org/10.1038/s41586-019-1724-z"
    year: 2019
    arxiv: null
    doi: "10.1038/s41586-019-1724-z"
  - title: "Build Order Optimization in StarCraft"
    url: "https://www.aaai.org/ocs/index.php/AIIDE/AIIDE11/paper/view/4078"
    year: 2011
    arxiv: null
    doi: null
see:
  - "009-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforc"
  - "118-build-order-optimization-in-starcraft"
---

# BWAPI: Brood War API

## One-sentence takeaway

BWAPI injects into StarCraft: Brood War and exposes units, map, and orders as a C++ API so research bots can play the real 1998 RTS instead of a toy simulator.

## Why it matters here

Classical RTS research (AIIDE StarCraft competitions, build-order search, fog-of-war papers) ran on this API; GRID COMMAND’s agent interface is the same idea against a modern engine.

## Key ideas

- Reads game state (units, weapons, tech, creep, fog) and issues unit commands each logical frame by hooking the Brood War process.
- Tournament modules enforce fair play (no map hacks unless explicitly allowed, frame-time budgets). SSCAIT / AIIDE used it for a decade.
- No official forward model: search bots either script, or pair BWAPI with BWTA/BWEM for terrain and with OpenBW / SparCraft for faster-than-real-time simulation.
- Community project (first widely used releases ~2009–2010) at https://github.com/bwapi/bwapi. Not affiliated with Blizzard.
- Successor research moved to SC2LE / pysc2; BWAPI remains the Brood War citation.

## Caveats

## Links

- Repo: https://github.com/bwapi/bwapi
