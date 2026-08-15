---
title: "Call for AI Research in RTS Games"
authors:
  - "Michael Buro"
year: 2004
venue: "AAAI Workshop on Challenges in Game AI"
arxiv: null
doi: null
source: "https://cdn.aaai.org/Workshops/2004/WS-04-04/WS04-04-028.pdf"
topics:
  - rts-bots
  - aiide-cog
seed_rank: 23
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "scratch_curated.json"
relevance_score: 10
cites:
  - title: "Real-Time Strategy Games: A New AI Research Challenge"
    url: "https://www.ijcai.org/Proceedings/03/Papers/265.pdf"
    year: 2003
    arxiv: null
    doi: null
  - title: "ORTS: A Hack-Free RTS Game Environment"
    url: "https://skatgame.net/mburo/ps/orts.pdf"
    year: 2002
    arxiv: null
    doi: null
see:
  - "025-real-time-strategy-games-a-new-ai-research-challenge"
---

# Call for AI Research in RTS Games

## One-sentence takeaway

Buro’s 2004 AAAI workshop paper sets the research agenda — adversarial planning under uncertainty, opponent modeling, spatial/temporal reasoning — and introduces ORTS as the open, cheat-resistant engine needed to run it.

## Why it matters here

This is the founding memo for Broadside’s RTS pillar: commercial AI cheats and does not learn; the scientific goal is the strongest possible commander, with strength later dialed down for fun. GRID COMMAND is ORTS’s spiritual successor.

## Key ideas

- RTS complexity is “chess on a 512×512 board with hundreds of slow pieces, fog, and the ability to build new material”; commercial AI fails because actions are incremental, not globally decisive.
- Why research lagged: huge object counts, studios under ship pressure, online humans as content, and closed engines with no AI API — so no competition, the force that drove chess and Othello.
- Agenda items: abstract-state adversarial planning (flanks confuse scripted AI), fast opponent modeling, and spatial/temporal reasoning about chokes, visibility, and travel time.
- Near-term path is hybrid: AI plugins that take over fire-concentration and intercepts so humans play at commander level, then climb the stack.
- ORTS: server-authoritative (no map hacks), scriptable game definition, open client protocol, per-unit per-tick control, GPL. Cites the 2003 IJCAI challenge paper as the companion statement.

## Caveats

## Links

- AAAI PDF: https://cdn.aaai.org/Workshops/2004/WS-04-04/WS04-04-028.pdf
- Author mirror: https://skatgame.net/mburo/ps/RTS-AAAI04.pdf
