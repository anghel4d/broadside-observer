---
title: "Real-Time Strategy Games: A New AI Research Challenge"
authors:
  - "Michael Buro"
year: 2003
venue: "IJCAI"
arxiv: null
doi: null
source: "https://www.ijcai.org/Proceedings/03/Papers/265.pdf"
topics:
  - rts-bots
seed_rank: 25
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "scratch_curated.json"
relevance_score: 10
cites:
  - title: "Call for AI Research in RTS Games"
    url: "https://cdn.aaai.org/Workshops/2004/WS-04-04/WS04-04-028.pdf"
    year: 2004
    arxiv: null
    doi: null
  - title: "ORTS: A Hack-Free RTS Game Environment"
    url: "https://skatgame.net/mburo/ps/orts.pdf"
    year: 2002
    arxiv: null
    doi: null
see:
  - "023-call-for-ai-research-in-rts-games"
---

# Real-Time Strategy Games: A New AI Research Challenge

## One-sentence takeaway

Buro’s 2003 IJCAI poster names six RTS research problems — economy, uncertainty, space/time, coordination, opponent modeling, adversarial real-time planning — and proposes ORTS as the open server-client testbed.

## Why it matters here

This is the shorter companion to the 2004 call and the reason Broadside treats fog, economy, and commander-level planning as first-class, not as “just pathfinding plus a script.”

## Key ideas

- RTS games compress real command-and-control: many units, an evolving economy, incomplete information, and a clock that does not wait for search to finish.
- Six challenges: resource allocation, decision-making under fog, spatial and temporal reasoning, multi-agent collaboration, opponent modeling that humans do in a few games, and hierarchical planning that can actually be executed.
- Contrast with computer soccer: fewer objects, little or no economy, so the commander problem does not appear.
- ORTS: simulation on the server, clients receive only their visible subset (no map hacks), open protocol so researchers bring their own AI, human and machine clients, scriptable terrain including water, plateaus, and ramps.
- The point of the poster is to recruit: without an open engine and tournaments, RTS AI cannot repeat the chess/Othello progress story.

## Caveats

## Links

- IJCAI PDF: https://www.ijcai.org/Proceedings/03/Papers/265.pdf
- DBLP: https://dblp.org/rec/conf/ijcai/Buro03
