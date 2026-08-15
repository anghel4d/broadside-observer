---
title: "Blackboard Systems"
authors:
  - "H. Penny Nii"
year: 1986
venue: "AI Magazine"
arxiv: null
doi: "10.1609/aimag.v7i2.537"
source: "https://doi.org/10.1609/aimag.v7i2.537"
topics:
  - blackboard
seed_rank: 378
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "The Hearsay-II Speech-Understanding System: Integrating Knowledge to Resolve Uncertainty"
    url: "https://doi.org/10.1145/356810.356816"
    year: 1980
    arxiv: null
    doi: "10.1145/356810.356816"
  - title: "Steering Behaviors For Autonomous Characters"
    url: "https://www.red3d.com/cwr/steer/"
    year: 1999
    arxiv: null
    doi: null
see:
  - "201-steering-behaviors-for-autonomous-characters"
---

# Blackboard Systems

## One-sentence takeaway

Nii’s survey names the architecture Hearsay-II made famous: independent knowledge sources read and write a shared, leveled blackboard, scheduled by a controller rather than by a single call graph.

## Why it matters here

GRID COMMAND / Broadside already want many specialists (path, cover, fire, comms) that do not own the world. A blackboard is the non-LLM way to let them collaborate: post hypotheses on a shared store, let the next KS fire when its precondition appears. That is closer to ano queries than to a behavior-tree sequence.

## Key ideas

- Three pieces: the blackboard (hierarchical solution state), knowledge sources (condition → action specialists), and a control component that picks which KS runs next.
- Levels of abstraction (signal → syllable → word in Hearsay-II; perception → tactic → order in a game) let specialists work at different grains on the same problem.
- Opportunistic, not pipeline: a KS fires when its data appears, so partial, uncertain contributions can still make progress.
- Control can be another KS (agenda, ratings) rather than a hardcoded scheduler — the part most game “blackboards” skip.

## Caveats

## Links

- DOI: https://doi.org/10.1609/aimag.v7i2.537
- AI Magazine page: https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/537
