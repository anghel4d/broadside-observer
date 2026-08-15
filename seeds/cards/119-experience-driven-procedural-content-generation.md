---
title: "Experience-Driven Procedural Content Generation"
authors:
  - "Georgios N. Yannakakis"
  - "Julian Togelius"
year: 2011
venue: "IEEE Transactions on Affective Computing"
arxiv: null
doi: "10.1109/T-AFFC.2011.6"
source: "https://doi.org/10.1109/T-AFFC.2011.6"
topics:
  - pcg
seed_rank: 119
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: procedural-generation
cites:
  - title: "Search-Based Procedural Content Generation: A Taxonomy and Survey"
    url: "https://doi.org/10.1109/TCIAIG.2011.2148116"
    year: 2011
    arxiv: null
    doi: "10.1109/TCIAIG.2011.2148116"
see:
  - "019-search-based-procedural-content-generation-a-taxonomy-and-su"
---

# Experience-Driven Procedural Content Generation

## One-sentence takeaway

EDPCG closes the affective loop by searching a content representation for items that optimize a player-experience model — subjective, physiological, or gameplay-based — rather than optimizing designer heuristics alone.

## Why it matters here

Broadside / GRID COMMAND scenario generation should score maps and openings against a model of the player, not against a fixed fitness; this is the four-box recipe (PEM, quality, representation, generator) for that loop.

## Key ideas

- Content is everything that is not NPC behaviour or the engine: maps, rulesets, camera, audio, weapons. Experience is the joint of affect, cognition, and observed play.
- Four components: (1) player experience model from self-report, sensors, or interaction traces; (2) an evaluation function that maps content (+ the PEM) to quality — direct, simulation-based, or interactive; (3) a representation ranging from cell-by-cell grids to random seeds; (4) a generator, exhaustive when the encoding is tiny, evolutionary or swarm otherwise.
- Worked Super Mario example (Pedersen et al.): a short parameter vector of gap layout plus a switch mechanic; neural nets trained by pairwise preference on fun/challenge/frustration from hundreds of players; exhaustive search then emits a level that maximises predicted fun for that player.
- Evaluation-function taxonomy matters more than the optimiser: theory-driven vs data-driven directs, static vs dynamic playthroughs, explicit questionnaire vs implicit dwell/physiology.
- The designer moves up a level — choose which experience to optimise and how content is parameterised — and leaves instance generation to the search.

## Caveats

## Links

- DOI: [10.1109/T-AFFC.2011.6](https://doi.org/10.1109/T-AFFC.2011.6)
- Author PDF: https://yannakakis.net/wp-content/uploads/2015/11/PID3821875.pdf
