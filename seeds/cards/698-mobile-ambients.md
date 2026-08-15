---
title: "Mobile Ambients"
authors:
  - "Luca Cardelli"
  - "Andrew D. Gordon"
year: 2000
venue: "Theoretical Computer Science"
arxiv: null
doi: "10.1016/S0304-3975(99)00231-5"
source: "https://doi.org/10.1016/S0304-3975(99)00231-5"
topics:
  - ambients
  - cardelli
  - gordon
  - mobility
  - concurrency
seed_rank: 698
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Calculus of Mobile Processes, I"
    url: "https://doi.org/10.1016/0890-5401(92)90008-4"
    year: 1992
    arxiv: null
    doi: "10.1016/0890-5401(92)90008-4"
  - title: "The Join Calculus: A Language for Distributed Mobile Programming"
    url: "https://doi.org/10.1007/3-540-45699-6_6"
    year: 2002
    arxiv: null
    doi: "10.1007/3-540-45699-6_6"
see:
  - "695-a-calculus-of-mobile-processes-i"
  - "696-the-join-calculus-a-language-for-distributed-mobile-programm"
---

# Mobile Ambients

## One-sentence takeaway

Cardelli and Gordon's ambients are nested administrative domains that move: `in`, `out`, and `open` are capabilities for crossing or dissolving a boundary, so locality is syntax.

## Why it matters here

Ambient calculus is the locality/mobility card beyond bare π name-passing — firewalls, agents, and "this GRID COMMAND unit is *inside* that theatre" are ambient pictures, not channel pictures.

## Key ideas

- An ambient has a name and a collection of processes and sub-ambients; the tree of ambients *is* the location hierarchy.
- Capabilities: `in n` enters a sibling named n, `out n` exits the parent named n, `open n` dissolves an ambient named n; no capability, no crossing.
- Communication is local (inside an ambient); mobility of *places* is the point, whereas π-calculus mobility is mobility of *names*.
- *Theoretical Computer Science* 240(1):177–213, June 2000, DOI 10.1016/S0304-3975(99)00231-5 (conference version FoSSaCS / POPL-era 1998).

## Caveats

## Links

- DOI: [10.1016/S0304-3975(99)00231-5](https://doi.org/10.1016/S0304-3975(99)00231-5)
