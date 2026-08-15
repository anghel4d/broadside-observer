---
title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
authors:
  - "Charles L. Forgy"
year: 1982
venue: "Artificial Intelligence"
arxiv: null
doi: "10.1016/0004-3702(82)90020-0"
source: "https://doi.org/10.1016/0004-3702(82)90020-0"
topics:
  - production-rules-triggers
seed_rank: 42
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "OPS5 user's manual"
    url: "https://doi.org/10.1184/r1/6608090.v1"
    year: 1981
    arxiv: null
    doi: "10.1184/r1/6608090.v1"
  - title: "Three States and a Plan: The AI of F.E.A.R."
    url: "https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "155-ops5-user-s-manual"
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
---

# Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem

## One-sentence takeaway

Rete compiles a set of production-rule left-hand sides into a discrimination network that incrementally maintains partial matches, so each working-memory change costs work proportional to the change, not to the whole rule set.

## Why it matters here

ano standing rules and GRID COMMAND triggers are many-pattern / many-object matching. Rete (and TREAT, LEAPS) is the algorithm class that makes “if these components ever line up, fire” cheap every frame.

## Key ideas

- Naive match re-tests every rule against every fact each cycle; Rete stores intermediate join results in α- and β-memories and only propagates deltas.
- The network shares tests across rules (the same `(temperature > 100)` node is reused), which is why large OPS5 systems stayed interactive.
- Working memory is a set of WMEs; assert/retract tokens flow through the net and update the conflict set.
- Forgy’s OPS5 is the reference implementation; later engines (CLIPS, Drools, game GOAP blackboards) are Rete variants or cousins.
- The 1982 *Artificial Intelligence* journal paper is the archival version of Forgy’s 1979 CMU thesis algorithm.

## Caveats

## Links

- DOI: [10.1016/0004-3702(82)90020-0](https://doi.org/10.1016/0004-3702(82)90020-0)
