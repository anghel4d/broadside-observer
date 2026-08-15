---
title: "A Bayesian model for opening prediction in RTS games with application to StarCraft"
authors:
  - "Gabriel Synnaeve"
  - "Pierre Bessière"
year: 2011
venue: "CIG"
arxiv: "1111.3735"
doi: "10.1109/CIG.2011.6032018"
source: "https://arxiv.org/abs/1111.3735"
topics:
  - opponent-modeling
  - rts-bots
seed_rank: 115
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "scratch_curated.json"
relevance_score: 9
cites:
  - title: "A data mining approach to strategy prediction"
    url: "https://doi.org/10.1109/cig.2009.5286483"
    year: 2009
    arxiv: null
    doi: "10.1109/cig.2009.5286483"
  - title: "Building a player strategy model by analyzing replays of real-time strategy games"
    url: "https://doi.org/10.1109/ijcnn.2008.4634237"
    year: 2008
    arxiv: null
    doi: "10.1109/ijcnn.2008.4634237"
  - title: "Opponent Modeling in Real-Time Strategy Games."
    year: 2007
    arxiv: null
    doi: null
  - title: "Learning to Win: Case-Based Plan Selection in a Real-Time Strategy Game"
    url: "https://doi.org/10.1007/11536406_4"
    year: 2005
    arxiv: null
    doi: "10.1007/11536406_4"
  - title: "Monte Carlo Planning in RTS Games"
    year: 2005
    arxiv: null
    doi: null
see: []
---

# A Bayesian model for opening prediction in RTS games with application to StarCraft

## One-sentence takeaway

A generative Bayesian program over build-tree, time, and seen-building bits, with $P(T\mid\mathrm{BuildTree})$ learned as per-tree Gaussians from unlabeled replays, reconstructs and predicts the opponent tech DAG under fog of war.

## Why it matters here

Broadside opening adaptation is "what build tree is consistent with the buildings I have actually seen, at this second" — this is the unsupervised replay-learned prior BroodwarBotQ used instead of hand-labelled rush/econ tags.

## Key ideas

- Variables: `BuildTree` ranges over trees actually seen in ~3000 replays per race (810 Terran / 346 Protoss / 261 Zerg), not the 500–1600 rule-legal combinations; `Observations` $O_k$ stick once a building type has been seen; $\lambda$ is a Dirac coherence flag that zeroes trees that do not cover the observations.
- Joint $P(T,\mathrm{BuildTree},O_{1:N},\lambda)=P(T\mid\mathrm{BuildTree})\,P(\mathrm{BuildTree})\,P(\lambda\mid\mathrm{BuildTree},O)\,P(O)$; the question asked online is $P(\mathrm{BuildTree}\mid T=t,O=o,\lambda=1)$.
- Cross-validated on 8806 high-level 1v1 replays: with no noise the marginalized predictor is ~4 buildings ahead at set-distance 1, and at 80% missing observations mean reconstruction distance is still a little over 1.
- The same model without marginalizing the opponent tree answers "what should *I* build given what I saw," i.e. plan recognition run as a planner; a filter on own-tree switches stops oscillation.
- Pro-gamer fake openings (early gas into a rush) remain a stated hard case the generative prior does not special-case.

## Caveats

## Links

- arXiv: [1111.3735](https://arxiv.org/abs/1111.3735)
- DOI: [10.1109/CIG.2011.6032018](https://doi.org/10.1109/CIG.2011.6032018)
